// Procedural low-poly furniture in the neon look. Every model is built from boxes and cylinders in
// local coordinates (x across, z depth with the front at +z, y up) scaled to the item's size, then
// rotated and moved into place. Solids go into the floor's wall buffer, main outlines into its line
// buffer and a soft contact shadow into the shadow layer, so furniture adds no draw calls.

import { Color } from "three";
import type { Furniture, Vec2 } from "../model.ts";
import { builtinBase, gangsOf, stairsULayout, POOL_VALVE_Y } from "../model.ts";
import { adventCandles, isRobotVacuum, mountBase, packItem, packMotion, packMovingPart, packRobotCentre, packRobotPart, packScreen, type PackItem, type PackMotion, type PackPart } from "../packs.ts";
import { fitParts } from "../pack-scale.ts";
import { binColors, binShape, householdCountry, mailboxShape, type BinShape, type MailboxShape } from "../household.ts";
import type { Floor } from "../model.ts";
import { ALWAYS, DEG, EDGE_TOP, GeoBuffer, LineBuffer, pushLoft, pushLyingCyl, pushPrism, shade } from "./geo.ts";

const C = {
  body: 0x172238,
  bodyTop: 0x1d2b47,
  fabric: 0x1a2644,
  fabricTop: 0x22325a,
  cushion: 0x243661,
  wood: 0x19233c,
  woodTop: 0x202d4b,
  white: 0x1d2946,
  whiteTop: 0x26375e,
  metal: 0x2a3a60,
  dark: 0x0b111f,
  glass: 0x1c3a52,
  plant: 0x12302e,
  plantTop: 0x1a4540,
  pot: 0x1d2640,
  accent: 0x2b8fb3,
};

const EDGE_FURN = shade(0x5b7cff, 0.3);
const EDGE_FAINT = shade(0x5b7cff, 0.17);
const EDGE_GLOW = shade(0x37e0ff, 0.45);

type Tf = (x: number, z: number) => Vec2;

class Builder {
  private readonly buf: GeoBuffer;
  private readonly lines: LineBuffer;
  private readonly tf: Tf;
  /** The transform mirrors (negative determinant): parts not wound by ccw() come out inside out. */
  readonly mirrored: boolean;

  /** The vertex colours drawn so far (a part's own range is lifted for the light looks). */
  get colors(): number[] {
    return this.buf.c;
  }

  constructor(buf: GeoBuffer, lines: LineBuffer, tf: Tf) {
    this.buf = buf;
    this.lines = lines;
    this.tf = tf;
    this.mirrored = tfMirrors(tf);
  }

  /** The same buffers with the local coordinates turned by `deg` around (cx, cz): turned parts of pack items. */
  rotated(cx: number, cz: number, deg: number): Builder {
    const a = deg * DEG;
    const c = Math.cos(a);
    const s = Math.sin(a);
    const tf = this.tf;
    return new Builder(this.buf, this.lines, (x, z) => tf(cx + (x - cx) * c - (z - cz) * s, cz + (x - cx) * s + (z - cz) * c));
  }

  /** Axis-aligned box in local coordinates; `edges` draws its outline. */
  box(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, side: number, top = side, edges: Color | null = null): void {
    if (x1 - x0 < 1e-4 || z1 - z0 < 1e-4 || y1 - y0 < 1e-4) return;
    const poly = [this.tf(x0, z0), this.tf(x0, z1), this.tf(x1, z1), this.tf(x1, z0)];
    pushPrism(this.buf, ccw(poly), y0, y1, side, top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) this.outline(poly, y0, y1, edges);
  }

  /** A box whose top face is the rectangle `t` (sloped sides): hoods, windscreens, tapered shades. */
  loft(b: [number, number, number, number], t: [number, number, number, number], y0: number, y1: number, side: number, top = side, edges: Color | null = null): void {
    if (y1 - y0 < 1e-4) return;
    const lo: Vec2[] = [this.tf(b[0], b[2]), this.tf(b[0], b[3]), this.tf(b[1], b[3]), this.tf(b[1], b[2])];
    const hi: Vec2[] = [this.tf(t[0], t[2]), this.tf(t[0], t[3]), this.tf(t[1], t[3]), this.tf(t[1], t[2])];
    if (lo !== ccw(lo)) {
      lo.reverse();
      hi.reverse();
    }
    pushLoft(this.buf, lo, hi, y0, y1, side, top);
    if (edges) {
      for (let i = 0; i < 4; i++) {
        this.line(hi[i], hi[(i + 1) % 4], y1, y1, edges);
        this.line(lo[i], hi[i], y0, y1, edges);
      }
    }
  }

  /** Box with bevelled top and bottom edges (cushions, mattresses, arm rests). */
  pad(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, side: number, top = side, r = 0.03, edges: Color | null = null): void {
    r = Math.min(r, (x1 - x0) / 2 - 0.005, (z1 - z0) / 2 - 0.005, (y1 - y0) / 2);
    if (r < 0.008) return this.box(x0, x1, y0, y1, z0, z1, side, top, edges);
    this.loft([x0 + r, x1 - r, z0 + r, z1 - r], [x0, x1, z0, z1], y0, y0 + r, side);
    if (y1 - y0 - 2 * r > 0.005) this.box(x0, x1, y0 + r, y1 - r, z0, z1, side, side, edges);
    this.loft([x0, x1, z0, z1], [x0 + r, x1 - r, z0 + r, z1 - r], y1 - r, y1, side, top);
  }

  /** A cylinder lying along x or z (wheels, rollers); `edges` draws both rims. */
  lyingCyl(axis: "x" | "z", cx: number, cz: number, y0: number, y1: number, len: number, dia: number, side: number, cap = side, n = 12, edges: Color | null = null): void {
    const r = Math.min(dia, y1 - y0) / 2;
    if (r < 1e-4 || len < 1e-4) return;
    const cy = (y0 + y1) / 2;
    const along = axis === "x" ? cx : cz;
    const across = axis === "x" ? cz : cx;
    const at = (a: number, c: number): Vec2 => (axis === "x" ? this.tf(a, c) : this.tf(c, a));
    // the faces are turned outwards in world space already (also when the builder mirrors)
    pushLyingCyl(this.buf, at, along - len / 2, along + len / 2, across, cy, r, side, cap, n);
    if (edges) {
      for (const a of [along - len / 2, along + len / 2]) {
        for (let i = 0; i < n; i++) {
          const t0 = (i / n) * Math.PI * 2;
          const t1 = ((i + 1) / n) * Math.PI * 2;
          this.line(at(a, across + Math.sin(t0) * r), at(a, across + Math.sin(t1) * r), cy + Math.cos(t0) * r, cy + Math.cos(t1) * r, edges);
        }
      }
    }
  }

  /** Vertical cylinder with `n` sides. */
  cyl(cx: number, cz: number, r: number, y0: number, y1: number, side: number, top = side, n = 10, edges: Color | null = null): void {
    const poly: Vec2[] = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      poly.push(this.tf(cx + Math.cos(a) * r, cz + Math.sin(a) * r));
    }
    pushPrism(this.buf, ccw(poly), y0, y1, side, top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) for (let i = 0; i < n; i++) this.line(poly[i], poly[(i + 1) % n], y1, y1, edges);
  }

  /** Line between two local points at heights ya and yb. */
  seg(xa: number, ya: number, za: number, xb: number, yb: number, zb: number, color: Color = EDGE_FURN): void {
    this.line(this.tf(xa, za), this.tf(xb, zb), ya, yb, color);
  }

  private line(a: Vec2, b: Vec2, ya: number, yb: number, color: Color): void {
    this.lines.seg([a[0], ya, a[1]], [b[0], yb, b[1]], color, ALWAYS);
  }

  private outline(poly: Vec2[], y0: number, y1: number, color: Color): void {
    for (let i = 0; i < 4; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % 4];
      this.line(a, b, y1, y1, color);
      this.line(a, a, y0, y1, color);
    }
  }
}

/** Whether a plan transform mirrors (its determinant is negative). */
function tfMirrors(tf: Tf): boolean {
  const o = tf(0, 0);
  const ex = tf(1, 0);
  const ez = tf(0, 1);
  return (ex[0] - o[0]) * (ez[1] - o[1]) - (ex[1] - o[1]) * (ez[0] - o[0]) < 0;
}

function ccw(poly: Vec2[]): Vec2[] {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a >= 0 ? poly : [...poly].reverse();
}

/** Four legs inside a w × d footprint. */
function legs(b: Builder, w: number, d: number, h: number, t: number, inset: number, color = C.metal, taper = false): void {
  const x = w / 2 - inset - t;
  const z = d / 2 - inset - t;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const cx = sx * x;
      const cz = sz * z;
      if (taper) b.loft([cx - t * 0.3, cx + t * 0.3, cz - t * 0.3, cz + t * 0.3], [cx - t / 2, cx + t / 2, cz - t / 2, cz + t / 2], 0, h, color);
      else b.box(cx - t / 2, cx + t / 2, 0, h, cz - t / 2, cz + t / 2, color);
    }
  }
}

/** Door or drawer fronts: division lines on the front face (+z) and small glowing handles. */
function fronts(b: Builder, x0: number, x1: number, y0: number, y1: number, z: number, count: number, handleY: number | null = null, horizontal = false): void {
  const w = (x1 - x0) / count;
  for (let i = 1; i < count; i++) {
    const x = x0 + w * i;
    b.seg(x, y0, z, x, y1, z, EDGE_FAINT);
  }
  for (let i = 0; i < count; i++) {
    const cx = x0 + w * (i + 0.5);
    const hy = handleY ?? y1 - 0.08;
    if (horizontal) b.seg(cx - Math.min(0.1, w / 4), hy, z + 0.012, cx + Math.min(0.1, w / 4), hy, z + 0.012, EDGE_GLOW);
    else {
      const hx = count > 1 ? cx + (i % 2 ? -w / 2 + 0.06 : w / 2 - 0.06) : cx + w / 2 - 0.06;
      b.seg(hx, hy - 0.08, z + 0.012, hx, hy + 0.08, z + 0.012, EDGE_GLOW);
    }
  }
}

function sofa(b: Builder, w: number, d: number, h: number, seats: number): void {
  const x0 = -w / 2;
  const x1 = w / 2;
  const z0 = -d / 2;
  const z1 = d / 2;
  const arm = Math.min(0.2, w * 0.12);
  const seatH = h * 0.5;
  const back = Math.min(0.24, d * 0.28);
  legs(b, w, d, 0.07, 0.05, 0.05, C.wood, true);
  b.pad(x0, x1, 0.07, seatH - 0.08, z0 + 0.02, z1, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  // the back leans a little: its top is thinner than its base
  b.loft([x0, x1, z0, z0 + back], [x0 + 0.01, x1 - 0.01, z0, z0 + back * 0.5], seatH - 0.08, h, C.fabric, C.fabricTop, EDGE_FURN);
  b.pad(x0, x0 + arm, seatH - 0.08, h * 0.72, z0 + 0.02, z1 - 0.02, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  b.pad(x1 - arm, x1, seatH - 0.08, h * 0.72, z0 + 0.02, z1 - 0.02, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  // seat cushions with a small gap, and back cushions leaning against the back
  const inner = x1 - arm - (x0 + arm);
  const cw = inner / seats;
  for (let i = 0; i < seats; i++) {
    const cx0 = x0 + arm + cw * i + 0.02;
    const cx1 = cx0 + cw - 0.04;
    b.pad(cx0, cx1, seatH - 0.08, seatH + 0.05, z0 + back + 0.02, z1 - 0.06, C.cushion, C.cushion, 0.04);
    b.loft([cx0 + 0.01, cx1 - 0.01, z0 + back * 0.55, z0 + back + 0.14], [cx0 + 0.03, cx1 - 0.03, z0 + back * 0.4, z0 + back * 0.4 + 0.06], seatH + 0.03, h * 0.93, C.cushion);
  }
}

/**
 * Corner sofa in the straight sofa's style: a back along the rear and along the left side (-x), for a
 * U-sofa along the right side too. The open ends at the front carry the arms; the L's other arm sits at
 * the right end of the rear section. Mirroring puts the L's side section on the right.
 */
function cornerSofa(b: Builder, w: number, d: number, h: number, u: boolean): void {
  const x0 = -w / 2;
  const x1 = w / 2;
  const z0 = -d / 2;
  const z1 = d / 2;
  // seat depth of every section (incl. its back), like the straight sofa's 0.9 m
  const dep = Math.max(0.3, Math.min(0.95, d * 0.5, w * (u ? 0.34 : 0.45)));
  const back = Math.min(0.24, dep * 0.28);
  const arm = Math.min(0.2, dep * 0.24);
  const seatH = h * 0.5;
  const armH = h * 0.72;
  const sides = u ? [-1, 1] : [-1];
  // tapered legs under the corners of the outline
  const leg = (x: number, z: number) => b.loft([x - 0.015, x + 0.015, z - 0.015, z + 0.015], [x - 0.025, x + 0.025, z - 0.025, z + 0.025], 0, 0.07, C.wood);
  leg(x0 + 0.06, z0 + 0.06);
  leg(x1 - 0.06, z0 + 0.06);
  if (!u) leg(x1 - 0.06, z0 + dep - 0.06);
  for (const sx of sides) {
    leg(sx * (w / 2 - 0.06), z1 - 0.06);
    leg(sx * (w / 2 - dep + 0.06), z1 - 0.06);
  }
  // frames: the rear section across the whole width, the side sections in front of it
  b.pad(x0, x1, 0.07, seatH - 0.08, z0 + 0.02, z0 + dep, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  for (const sx of sides) {
    const [a0, a1] = sx < 0 ? [x0 + 0.02, x0 + dep] : [x1 - dep, x1 - 0.02];
    b.pad(a0, a1, 0.07, seatH - 0.08, z0 + dep - 0.02, z1, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  }
  // backs lean a little: their tops are thinner than their bases
  b.loft([x0, x1, z0, z0 + back], [x0 + 0.01, x1 - 0.01, z0, z0 + back * 0.5], seatH - 0.08, h, C.fabric, C.fabricTop, EDGE_FURN);
  for (const sx of sides) {
    if (sx < 0) b.loft([x0, x0 + back, z0 + back, z1], [x0, x0 + back * 0.5, z0 + back, z1 - 0.01], seatH - 0.08, h, C.fabric, C.fabricTop, EDGE_FURN);
    else b.loft([x1 - back, x1, z0 + back, z1], [x1 - back * 0.5, x1, z0 + back, z1 - 0.01], seatH - 0.08, h, C.fabric, C.fabricTop, EDGE_FURN);
  }
  // arms: at the front end of each side section, and (L) at the right end of the rear section
  for (const sx of sides) {
    const [a0, a1] = sx < 0 ? [x0 + back, x0 + dep] : [x1 - dep, x1 - back];
    b.pad(a0, a1, seatH - 0.08, armH, z1 - arm, z1, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  }
  if (!u) b.pad(x1 - arm, x1, seatH - 0.08, armH, z0 + 0.02, z0 + dep - 0.02, C.fabric, C.fabricTop, 0.04, EDGE_FURN);
  // seat and back cushions along x (rear section, the corners included) ...
  const ra = x0 + back;
  const rb = u ? x1 - back : x1 - arm;
  const nx = Math.max(1, Math.round((rb - ra) / 0.62));
  const cw = (rb - ra) / nx;
  for (let i = 0; i < nx; i++) {
    const cx0 = ra + cw * i + 0.02;
    const cx1 = cx0 + cw - 0.04;
    b.pad(cx0, cx1, seatH - 0.08, seatH + 0.05, z0 + back + 0.02, z0 + dep - 0.04, C.cushion, C.cushion, 0.04);
    b.loft([cx0 + 0.01, cx1 - 0.01, z0 + back * 0.55, z0 + back + 0.14], [cx0 + 0.03, cx1 - 0.03, z0 + back * 0.4, z0 + back * 0.4 + 0.06], seatH + 0.03, h * 0.93, C.cushion);
  }
  // ... and along z (side sections, in front of the rear one)
  const za = z0 + dep;
  const zb = z1 - arm;
  if (zb - za < 0.2) return;
  const nz = Math.max(1, Math.round((zb - za) / 0.62));
  const cd = (zb - za) / nz;
  for (const sx of sides) {
    for (let i = 0; i < nz; i++) {
      const cz0 = za + cd * i + 0.02;
      const cz1 = cz0 + cd - 0.04;
      if (sx < 0) {
        b.pad(x0 + back + 0.02, x0 + dep - 0.04, seatH - 0.08, seatH + 0.05, cz0, cz1, C.cushion, C.cushion, 0.04);
        b.loft([x0 + back * 0.55, x0 + back + 0.14, cz0 + 0.01, cz1 - 0.01], [x0 + back * 0.4, x0 + back * 0.4 + 0.06, cz0 + 0.03, cz1 - 0.03], seatH + 0.03, h * 0.93, C.cushion);
      } else {
        b.pad(x1 - dep + 0.04, x1 - back - 0.02, seatH - 0.08, seatH + 0.05, cz0, cz1, C.cushion, C.cushion, 0.04);
        b.loft([x1 - back - 0.14, x1 - back * 0.55, cz0 + 0.01, cz1 - 0.01], [x1 - back * 0.4 - 0.06, x1 - back * 0.4, cz0 + 0.03, cz1 - 0.03], seatH + 0.03, h * 0.93, C.cushion);
      }
    }
  }
}

function bed(b: Builder, w: number, d: number, h: number): void {
  const z0 = -d / 2;
  const z1 = d / 2;
  const x0 = -w / 2;
  const x1 = w / 2;
  const frame = Math.min(0.32, h * 0.36);
  legs(b, w, d, 0.08, 0.06, 0.03, C.wood, true);
  b.box(x0, x1, 0.08, frame, z0 + 0.06, z1, C.wood, C.woodTop, EDGE_FURN);
  b.pad(x0 + 0.03, x1 - 0.03, frame, frame + 0.2, z0 + 0.08, z1 - 0.03, C.white, C.whiteTop, 0.03);
  b.box(x0, x1, 0.08, h - 0.05, z0, z0 + 0.07, C.wood, C.woodTop, EDGE_FURN);
  b.box(x0, x1, h - 0.05, h, z0, z0 + 0.09, C.wood, C.woodTop, EDGE_FAINT);
  // duvet over the lower two thirds with a folded-back edge, puffy pillows at the head
  const top = frame + 0.2;
  const fold = z0 + (d - 0.1) * 0.36;
  b.pad(x0 + 0.01, x1 - 0.01, top - 0.1, top + 0.05, fold, z1 - 0.01, C.cushion, C.fabricTop, 0.025, EDGE_FAINT);
  b.lyingCyl("x", 0, fold + 0.05, top - 0.02, top + 0.09, w - 0.02, 0.1, C.cushion, C.fabricTop, 8);
  const pillows = w > 1.2 ? 2 : 1;
  const pw = (w - 0.2) / pillows;
  for (let i = 0; i < pillows; i++) {
    const px = x0 + 0.1 + pw * i;
    const pz = z0 + 0.12;
    const pd = Math.min(0.42, d * 0.2);
    const k = 0.1;
    b.loft([px + 0.03 + k, px + pw - 0.03 - k, pz + k * 0.5, pz + pd - k * 0.5], [px + 0.03, px + pw - 0.03, pz, pz + pd], top, top + 0.06, C.whiteTop);
    b.loft([px + 0.03, px + pw - 0.03, pz, pz + pd], [px + 0.03 + k, px + pw - 0.03 - k, pz + k * 0.5, pz + pd - k * 0.5], top + 0.06, top + 0.12, C.whiteTop, C.whiteTop, EDGE_FAINT);
  }
}

function chair(b: Builder, w: number, d: number, h: number): void {
  const seat = Math.min(0.46, h * 0.52);
  legs(b, w, d, seat - 0.04, 0.035, 0.02, C.wood, true);
  b.box(-w / 2, w / 2, seat - 0.04, seat, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.pad(-w / 2 + 0.02, w / 2 - 0.02, seat, seat + 0.04, -d / 2 + 0.05, d / 2 - 0.03, C.cushion, C.cushion, 0.015);
  b.loft([-w / 2, w / 2, -d / 2 + 0.02, -d / 2 + 0.07], [-w / 2 + 0.02, w / 2 - 0.02, -d / 2, -d / 2 + 0.03], seat, h, C.wood, C.woodTop, EDGE_FURN);
}

function table(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, h - 0.04, 0.06, 0.05, C.wood, true);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_GLOW);
  b.box(-w / 2 + 0.08, w / 2 - 0.08, h - 0.1, h - 0.04, -d / 2 + 0.08, d / 2 - 0.08, C.body);
}

function desk(b: Builder, w: number, d: number, h: number): void {
  const x0 = -w / 2;
  const x1 = w / 2;
  b.box(x0, x1, h - 0.035, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(x0, x0 + 0.03, 0, h - 0.035, -d / 2 + 0.03, d / 2 - 0.03, C.metal);
  const dw = Math.min(0.42, w * 0.32);
  b.box(x1 - dw, x1, 0, h - 0.035, -d / 2 + 0.03, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  const zf = d / 2 - 0.02;
  for (const y of [h * 0.35, h * 0.66]) b.seg(x1 - dw, y, zf, x1, y, zf, EDGE_FAINT);
  for (const y of [h * 0.2, h * 0.5, h * 0.82]) b.seg(x1 - dw / 2 - 0.07, y, zf + 0.012, x1 - dw / 2 + 0.07, y, zf + 0.012, EDGE_GLOW);
  // screen
  b.box(-0.3, 0.3, h + 0.08, h + 0.42, -d / 2 + 0.08, -d / 2 + 0.11, C.dark, C.dark, EDGE_GLOW);
  b.box(-0.03, 0.03, h, h + 0.1, -d / 2 + 0.09, -d / 2 + 0.13, C.metal);
}

function cabinet(b: Builder, w: number, d: number, h: number, doors: number, handleY: number | null = null, horizontal = false): void {
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  fronts(b, -w / 2, w / 2, 0.08, h, d / 2 - 0.02, doors, handleY, horizontal);
}

function shelf(b: Builder, w: number, d: number, h: number): void {
  const t = 0.025;
  b.box(-w / 2, -w / 2 + t, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(w / 2 - t, w / 2, 0, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + t, w / 2 - t, 0, h, -d / 2, -d / 2 + 0.015, C.body);
  const n = Math.max(2, Math.round(h / 0.38));
  for (let i = 0; i <= n; i++) {
    const y = Math.min(h - t, (h / n) * i);
    b.box(-w / 2 + t, w / 2 - t, y, y + t, -d / 2 + 0.015, d / 2, C.wood, C.woodTop, EDGE_FAINT);
    // a few books on every shelf except the top
    if (i < n) {
      let x = -w / 2 + t + 0.04;
      let k = i * 3;
      while (x < w / 2 - t - 0.12) {
        const bw = 0.03 + ((k * 7) % 5) * 0.008;
        const bh = h / n - t - 0.08 - ((k * 5) % 4) * 0.025;
        if ((k * 11) % 7 !== 0) b.box(x, x + bw, y + t, y + t + bh, -d / 2 + 0.04, d / 2 - 0.05, (k % 3) ? C.fabric : C.cushion, C.fabricTop);
        x += bw + 0.006;
        k++;
      }
    }
  }
}

function kitchen(b: Builder, w: number, d: number, h: number): void {
  const doors = Math.max(1, Math.round(w / 0.6));
  cabinet(b, w, d - 0.02, h - 0.04, doors, h - 0.2);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function fridge(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  const split = h * 0.62;
  b.seg(-w / 2, split, d / 2, w / 2, split, d / 2, EDGE_FAINT);
  const hx = w / 2 - 0.06;
  b.seg(hx, split + 0.08, d / 2 + 0.015, hx, split + 0.4, d / 2 + 0.015, EDGE_GLOW);
  b.seg(hx, split - 0.4, d / 2 + 0.015, hx, split - 0.08, d / 2 + 0.015, EDGE_GLOW);
}

/** A real colour toned into the neon look: darker for a body, a little brighter for a lid. */
const tone = (hex: string, k: number) => shade(parseInt(hex.slice(1), 16), k).getHex();

/**
 * The blueprint and day looks keep only bright, strong colours and turn the rest into their own tones: waste bins
 * are drawn in their full colour there, or a brown or blue bin turns blue or grey like any cupboard (#609).
 */
let lightLook = false;
export function setLightLook(on: boolean): void {
  lightLook = on;
}

/** Vertex colours from `from` on: saturated ones darkened by the shading are lifted back to a kept brightness. */
export function keepBright(c: number[], from: number): void {
  for (let i = from; i + 2 < c.length; i += 3) {
    const mx = Math.max(c[i], c[i + 1], c[i + 2]);
    const mn = Math.min(c[i], c[i + 1], c[i + 2]);
    // wheels and dark parts stay dark; grey and white parts follow the look
    if (mx < 0.1 || (mx - mn) / mx < 0.45 || mx >= 0.62) continue;
    const k = 0.62 / mx;
    c[i] *= k;
    c[i + 1] *= k;
    c[i + 2] *= k;
  }
}

/**
 * A waste bin in its shape and colours (household.ts): wheelie bins taper to the bottom and have their wheels and
 * handle at the back (-z), a 1100 l container stands on four castors, a sack is tied at the top.
 */
function wasteBin(b: Builder, w: number, d: number, h: number, shape: BinShape, colors: [string, string]): void {
  // in the light looks at least as bright as the looks keep a colour (a dark brown or green bin too)
  const full = (hex: string) => {
    const mx = Math.max(...new Color(hex).toArray());
    return tone(hex, mx > 0.05 ? Math.max(1, 0.62 / mx) : 1);
  };
  const body = lightLook ? full(colors[0]) : tone(colors[0], 0.55);
  const lid = lightLook ? full(colors[1]) : tone(colors[1], 0.8);
  const lidTop = tone(colors[1], 1);
  if (shape === "bag") {
    // a full sack: wider in the middle, gathered and tied at the top
    b.loft([-w * 0.42, w * 0.42, -d * 0.4, d * 0.4], [-w / 2, w / 2, -d / 2, d / 2], 0, h * 0.55, body, body, EDGE_FAINT);
    b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w * 0.12, w * 0.12, -d * 0.12, d * 0.12], h * 0.55, h * 0.9, lid, lid, EDGE_FAINT);
    b.cyl(0, 0, Math.min(w, d) * 0.1, h * 0.9, h, lidTop, lidTop, 8);
    return;
  }
  if (shape === "caddy") {
    b.loft([-w * 0.45, w * 0.45, -d * 0.45, d * 0.45], [-w / 2, w / 2, -d / 2, d / 2], 0, h * 0.85, body, body, EDGE_FURN);
    b.box(-w / 2, w / 2, h * 0.85, h * 0.95, -d / 2, d / 2, lid, lidTop, EDGE_FAINT);
    // the carrying handle over the lid
    b.box(-w * 0.42, -w * 0.36, h * 0.95, h, -0.01, 0.01, lid);
    b.box(w * 0.36, w * 0.42, h * 0.95, h, -0.01, 0.01, lid);
    b.box(-w * 0.42, w * 0.42, h * 0.98, h, -0.01, 0.01, lid);
    return;
  }
  if (shape === "underground") {
    // only the column of an underground container stands out of the ground: a slot in front, the lid on top
    const r = Math.min(w, d) * 0.32;
    b.cyl(0, 0, r, 0, h * 0.9, body, body, 16, EDGE_FURN);
    b.cyl(0, 0, r * 1.08, h * 0.9, h, lid, lidTop, 16, EDGE_FAINT);
    b.box(-r * 0.5, r * 0.5, h * 0.62, h * 0.8, r * 0.7, r * 1.02, C.dark);
    // the paved plate around it
    b.box(-w / 2, w / 2, 0, 0.02, -d / 2, d / 2, C.metal, C.metal, EDGE_FAINT);
    return;
  }
  if (shape === "bin1100") {
    const cast = 0.14;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.cyl(sx * (w / 2 - 0.12), sz * (d / 2 - 0.12), 0.05, 0, cast, C.dark, C.dark, 8);
    b.loft([-w / 2 + 0.06, w / 2 - 0.06, -d / 2 + 0.06, d / 2 - 0.08], [-w / 2, w / 2, -d / 2, d / 2], cast, h - 0.1, body, body, EDGE_FURN);
    // two lid halves, the front one a little lower (a rounded lid seen as two slopes)
    b.loft([-w / 2, w / 2, -d / 2, 0], [-w / 2, w / 2, -d / 2, 0], h - 0.1, h, lid, lidTop, EDGE_FAINT);
    b.loft([-w / 2, w / 2, 0, d / 2], [-w / 2, w / 2, 0, d / 2 - 0.05], h - 0.1, h - 0.03, lid, lidTop, EDGE_FAINT);
    return;
  }
  // wheelie bins (120 l, 240 l, a multi-compartment bin): wheels and handle at the back
  const wheel = Math.min(0.2, h * 0.19);
  const back = -d / 2;
  for (const sx of [-1, 1]) b.lyingCyl("x", sx * (w / 2 - 0.05), back + wheel / 2 + 0.01, 0, wheel, 0.05, wheel, C.dark, C.metal, 12);
  b.loft([-w * 0.42, w * 0.42, back + 0.07, d / 2 - 0.05], [-w / 2 + 0.01, w / 2 - 0.01, back + 0.05, d / 2 - 0.01], 0.03, h - 0.05, body, body, EDGE_FURN);
  // the lid reaches over the front; the handle runs along the back
  b.box(-w / 2, w / 2, h - 0.05, h, back + 0.03, d / 2, lid, lidTop, EDGE_FAINT);
  b.box(-w * 0.42, w * 0.42, h - 0.1, h - 0.02, back, back + 0.04, lid, lidTop);
  if (shape === "multi") {
    // the lid in two parts: a seam across it, and the front split for a second compartment
    b.seg(-w / 2, h + 0.002, (back + d / 2) / 2, w / 2, h + 0.002, (back + d / 2) / 2, EDGE_GLOW);
    b.seg(0, h * 0.25, d / 2 - 0.01, 0, h - 0.06, d / 2 - 0.01, EDGE_FAINT);
  }
}

/**
 * Wall switch or socket: a flat frame with one rocker or socket per gang (front at +z, the back on the wall);
 * "outdoor" a grey box with a lid over each socket.
 */
function wallPlate(b: Builder, w: number, d: number, h: number, n: number, socket: boolean, outdoor: boolean): void {
  const gw = w / n;
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, outdoor ? C.metal : C.white, outdoor ? C.metal : C.whiteTop, EDGE_FURN);
  for (let i = 0; i < n; i++) {
    const cx = -w / 2 + gw * (i + 0.5);
    if (i) b.seg(-w / 2 + gw * i, h * 0.06, d / 2 + 0.001, -w / 2 + gw * i, h * 0.94, d / 2 + 0.001, EDGE_FAINT);
    if (!socket) {
      // the rocker with its seam
      b.box(cx - gw * 0.34, cx + gw * 0.34, h * 0.16, h * 0.84, d / 2, d / 2 + 0.006, C.white, C.whiteTop, EDGE_FAINT);
      b.seg(cx - gw * 0.3, h * 0.5, d / 2 + 0.007, cx + gw * 0.3, h * 0.5, d / 2 + 0.007, EDGE_FAINT);
    } else if (outdoor) {
      // the hinged lid over the socket
      b.box(cx - gw * 0.4, cx + gw * 0.4, h * 0.12, h * 0.9, d / 2, d / 2 + 0.018, C.metal, C.metal, EDGE_FAINT);
      b.seg(cx - gw * 0.36, h * 0.86, d / 2 + 0.019, cx + gw * 0.36, h * 0.86, d / 2 + 0.019, EDGE_FAINT);
    } else {
      // the round recess with its two holes
      const r = Math.min(gw, h) * 0.34;
      b.lyingCyl("z", cx, d / 2 + 0.002, h / 2 - r, h / 2 + r, 0.004, r * 2, C.dark, C.dark, 14, EDGE_FAINT);
      b.seg(cx - r * 0.45, h / 2, d / 2 + 0.0045, cx - r * 0.45 + 0.004, h / 2, d / 2 + 0.0045, EDGE_FURN);
      b.seg(cx + r * 0.45 - 0.004, h / 2, d / 2 + 0.0045, cx + r * 0.45, h / 2, d / 2 + 0.0045, EDGE_FURN);
    }
  }
}

/**
 * Wall-mounted alarm keypad / security control panel (front at +z, back on the wall).
 * Features a modern matte enclosure, backlit LCD status screen with status indicator LED,
 * and a 3x4 numeric keypad grid.
 */
function alarmKeypad(b: Builder, w: number, d: number, h: number): void {
  // Beveled outer casing on the wall
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  // Dark LCD screen frame / window (upper section)
  b.box(-w * 0.42, w * 0.42, h * 0.52, h * 0.88, d / 2, d / 2 + 0.002, C.dark, C.dark, EDGE_FAINT);
  // Backlit display area (subtle emerald/cyan panel)
  b.box(-w * 0.38, w * 0.38, h * 0.55, h * 0.85, d / 2 + 0.002, d / 2 + 0.004, 0x123626, 0x184833, EDGE_FAINT);
  // Horizontal status text / graphic lines on the display
  b.seg(-w * 0.32, h * 0.74, d / 2 + 0.005, w * 0.12, h * 0.74, d / 2 + 0.005, EDGE_GLOW);
  b.seg(-w * 0.32, h * 0.64, d / 2 + 0.005, w * 0.28, h * 0.64, d / 2 + 0.005, EDGE_GLOW);
  // Small status LED at top-right of casing
  b.box(w * 0.32, w * 0.40, h * 0.90, h * 0.94, d / 2, d / 2 + 0.003, 0x22c55e, 0x4ade80, EDGE_GLOW);
  // 3x4 numeric keypad grid (lower section)
  const cols = 3;
  const rows = 4;
  const kw = (w * 0.78) / cols;
  const kh = (h * 0.40) / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const kx0 = -w * 0.39 + c * kw + kw * 0.12;
      const kx1 = -w * 0.39 + (c + 1) * kw - kw * 0.12;
      const ky0 = h * 0.07 + (rows - 1 - r) * kh + kh * 0.12;
      const ky1 = h * 0.07 + (rows - r) * kh - kh * 0.12;
      b.box(kx0, kx1, ky0, ky1, d / 2, d / 2 + 0.003, C.white, C.whiteTop, EDGE_FAINT);
    }
  }
}

/** Wi-Fi access point: a flat disc under the ceiling (its LED ring below) or a square plate on the wall (ring in front). */
function wifiAp(b: Builder, w: number, d: number, h: number, wall: boolean): void {
  if (wall) {
    b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
    const r = Math.min(w, h) * 0.3;
    for (let i = 0; i < 20; i++) {
      const a0 = (i / 20) * Math.PI * 2;
      const a1 = ((i + 1) / 20) * Math.PI * 2;
      b.seg(Math.cos(a0) * r, h / 2 + Math.sin(a0) * r, d / 2 + 0.002, Math.cos(a1) * r, h / 2 + Math.sin(a1) * r, d / 2 + 0.002, EDGE_FAINT);
    }
    return;
  }
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r, 0, h, C.white, C.whiteTop, 24, EDGE_FURN);
  // the mounting plate on the ceiling
  b.cyl(0, 0, r * 0.5, h, h + 0.01, C.metal, C.metal, 12);
}

/** Water heater: a standing tank with its pipes below, or a slim flat tank on the wall (like an Ariston Velis). */
function waterHeater(b: Builder, w: number, d: number, h: number, wall: boolean): void {
  if (wall) {
    b.pad(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, 0.05, EDGE_FURN);
    // the display near the top and the two pipes underneath
    b.box(-w * 0.18, w * 0.18, h * 0.8, h * 0.88, d / 2, d / 2 + 0.006, C.dark);
    for (const x of [-w * 0.2, w * 0.2]) b.cyl(x, 0, 0.012, -0.12, 0, C.metal, C.metal, 6);
    return;
  }
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r, 0.04, h - 0.05, C.white, C.whiteTop, 20, EDGE_FURN);
  // a domed top, the feet and the controls in front
  b.cyl(0, 0, r * 0.85, h - 0.05, h, C.white, C.whiteTop, 20);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    b.cyl(Math.cos(a) * r * 0.7, Math.sin(a) * r * 0.7, 0.03, 0, 0.04, C.dark, C.dark, 6);
  }
  b.box(-r * 0.3, r * 0.3, h * 0.55, h * 0.65, r - 0.01, r + 0.01, C.dark);
}

/** A mailbox in its local shape. */
function mailbox(b: Builder, w: number, d: number, h: number, shape: MailboxShape): void {
  const body = C.metal;
  const top = shade(C.metal, 1.25).getHex();
  const panel = shade(C.metal, 0.85).getHex();
  if (shape === "pole") {
    // the US mailbox on a post: a box with a round top lying lengthwise, a red flag on its side
    const post = Math.min(0.09, w * 0.4);
    const boxH = Math.min(0.24, h * 0.22);
    b.box(-post / 2, post / 2, 0, h - boxH, -post / 2, post / 2, C.wood, C.woodTop, EDGE_FAINT);
    b.box(-w / 2, w / 2, h - boxH, h - boxH * 0.45, -d / 2, d / 2, body, top, EDGE_FURN);
    b.lyingCyl("z", 0, 0, h - boxH * 0.9, h, d, w, body, top, 14, EDGE_FURN);
    b.box(w / 2, w / 2 + 0.015, h - boxH * 0.4, h + 0.08, -d * 0.1, -d * 0.04, 0x8a1c1c);
    b.box(w / 2, w / 2 + 0.015, h + 0.02, h + 0.08, -d * 0.04, d * 0.12, 0x8a1c1c);
    return;
  }
  if (shape === "pillar") {
    // a post box on a pillar: the box on top, a newspaper roll below
    const boxH = Math.min(0.4, h * 0.3);
    b.box(-w * 0.2, w * 0.2, 0, h - boxH, -d * 0.2, d * 0.2, C.dark, C.dark, EDGE_FAINT);
    b.lyingCyl("z", 0, 0, h - boxH - 0.2, h - boxH - 0.04, d * 0.9, 0.16, body, top, 12, EDGE_FAINT);
    b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w / 2, w / 2, -d / 2, d / 2 - 0.05], h - boxH, h, body, top, EDGE_FURN);
    b.box(-w * 0.32, w * 0.32, h - 0.1, h - 0.08, d / 2 - 0.05, d / 2 - 0.04, C.dark);
    return;
  }
  if (shape === "parcel") {
    // a parcel box: a big door in front, a letter slot above
    b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, body, top, EDGE_FURN);
    b.box(-w / 2 + 0.04, w / 2 - 0.04, 0.08, h * 0.72, d / 2, d / 2 + 0.012, panel, top, EDGE_FAINT);
    b.box(-w * 0.3, w * 0.3, h * 0.82, h * 0.86, d / 2, d / 2 + 0.01, C.dark);
    return;
  }
  if (shape === "bank") {
    // a mailbox bank: three by two boxes, each with its own slot
    b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, body, top, EDGE_FURN);
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 2; j++) {
        const x0 = -w / 2 + (w / 3) * i + 0.015;
        const y0 = (h / 2) * j + 0.015;
        b.box(x0, x0 + w / 3 - 0.03, y0, y0 + h / 2 - 0.03, d / 2, d / 2 + 0.01, panel, top, EDGE_FAINT);
        b.box(x0 + 0.04, x0 + w / 3 - 0.07, y0 + h / 2 - 0.09, y0 + h / 2 - 0.07, d / 2 + 0.01, d / 2 + 0.014, C.dark);
      }
    return;
  }
  // a wall mailbox: a box with a slanted roof and the slot under it
  b.box(-w / 2, w / 2, 0, h * 0.8, -d / 2, d / 2, body, top, EDGE_FURN);
  b.loft([-w / 2, w / 2, -d / 2, d / 2 + 0.02], [-w / 2, w / 2, -d / 2, -d / 2 + 0.02], h * 0.8, h, body, top, EDGE_FURN);
  b.box(-w * 0.36, w * 0.36, h * 0.66, h * 0.7, d / 2, d / 2 + 0.008, C.dark);
}

/** Smart side-by-side fridge without its doors (they move: see pushFridgeDoors): the body and, behind the doors, shelves. */
function fridgeSmart(b: Builder, w: number, d: number, h: number): void {
  const front = d / 2 - FRIDGE_DOOR;
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0, 0.02, -d / 2 + 0.05, front - 0.05, C.dark);
  // shelves of both compartments, seen when a door stands open
  for (const y of [0.35, 0.7, 1.05, 1.4]) {
    if (y > h - 0.15) continue;
    b.seg(-w / 2 + 0.03, y, front + 0.001, -0.03, y, front + 0.001, EDGE_FAINT);
    b.seg(0.03, y, front + 0.001, w / 2 - 0.03, y, front + 0.001, EDGE_FAINT);
  }
}

/** Thickness of a smart fridge's doors. */
export const FRIDGE_DOOR = 0.06;

/**
 * The two doors of a smart fridge, each swung open by a fraction (0 closed … 1 wide open) around its
 * outer hinge: the left one carries the water dispenser, the right one the screen. An open door turns
 * red – it should not stay open for long.
 */
/**
 * An awning, by its kind (`variant`): "arm" a folding-arm awning over a terrace (default), "drop" a drop-arm awning
 * at a balcony or window, "vertical" a vertical screen running down in side rails (ZIP), "pergola" a frame with posts
 * whose fabric runs out on top, "side" a side awning pulled out sideways from a post (a privacy screen). `out` is how
 * far it is run out (0 … 1); `base` the cassette's underside above the floor (a side awning: its top).
 */
export function pushAwning(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "variant" | "awning_pitch" | "awning_valance">, base: number, out: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const t = Math.max(0, Math.min(1, out));
  // local x along the wall, local z out from the wall (the item's front), y up
  const P = (lx: number, y: number, lz: number): number[] => [f.x + lx * c - lz * s, y, f.z + lx * s + lz * c];
  const quad = (p: number[], q: number[], r: number[], u: number[], col: Color) => {
    buf.tri(p, q, r, col);
    buf.tri(p, r, u, col);
    buf.tri(p, r, q, col);
    buf.tri(p, u, r, col);
  };
  // a square beam between two local points (arms, bars, posts, rails)
  const beam = (pl: number[], ql: number[], r: number, col: Color) => {
    const p = P(pl[0], pl[1], pl[2]);
    const q = P(ql[0], ql[1], ql[2]);
    const dx = q[0] - p[0];
    const dy = q[1] - p[1];
    const dz = q[2] - p[2];
    const len = Math.hypot(dx, dy, dz) || 1;
    const d = [dx / len, dy / len, dz / len];
    const up = Math.abs(d[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
    const u = [d[1] * up[2] - d[2] * up[1], d[2] * up[0] - d[0] * up[2], d[0] * up[1] - d[1] * up[0]];
    const ul = Math.hypot(u[0], u[1], u[2]) || 1;
    const n1 = [(u[0] / ul) * r, (u[1] / ul) * r, (u[2] / ul) * r];
    const n2 = [d[1] * n1[2] - d[2] * n1[1], d[2] * n1[0] - d[0] * n1[2], d[0] * n1[1] - d[1] * n1[0]];
    const K = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];
    const corner = (o: number[], i: number) => [o[0] + n1[0] * K[i][0] + n2[0] * K[i][1], o[1] + n1[1] * K[i][0] + n2[1] * K[i][1], o[2] + n1[2] * K[i][0] + n2[2] * K[i][1]];
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      buf.tri(corner(p, i), corner(q, i), corner(q, j), col);
      buf.tri(corner(p, i), corner(q, j), corner(p, j), col);
    }
  };
  // a box between two local corners (cassettes)
  const box = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, col: Color, topCol: Color) => {
    quad(P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), topCol);
    quad(P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), col);
    quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1), P(x0, y0, z1), col);
    quad(P(x0, y0, z0), P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), col);
    quad(P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), col);
  };
  const body = new Color(C.body);
  const top = new Color(C.bodyTop);
  const accent = new Color(C.accent);
  const stripeA = new Color(0x1d6f8a);
  const stripeB = new Color(0x0f2f45);
  // a striped sheet between two local edges (p0–p1 the first edge, q0–q1 the second), stripes across the first edge
  const sheet = (p0: number[], p1: number[], q0: number[], q1: number[], n: number) => {
    const mix = (u: number[], v: number[], k: number) => [u[0] + (v[0] - u[0]) * k, u[1] + (v[1] - u[1]) * k, u[2] + (v[2] - u[2]) * k];
    for (let i = 0; i < n; i++) {
      const a0 = mix(p0, p1, i / n);
      const a1 = mix(p0, p1, (i + 1) / n);
      const b1 = mix(q0, q1, (i + 1) / n);
      const b0 = mix(q0, q1, i / n);
      quad(P(a0[0], a0[1], a0[2]), P(a1[0], a1[1], a1[2]), P(b1[0], b1[1], b1[2]), P(b0[0], b0[1], b0[2]), i % 2 ? stripeA : stripeB);
    }
  };
  const hw = f.w / 2;
  const back = -f.d / 2;
  const cas = Math.max(0.12, Math.min(0.3, f.h));
  const stripes = Math.max(4, Math.round(f.w / 0.3));
  const pitch = ((f.awning_pitch ?? 12) * Math.PI) / 180;
  const valance = (y: number, z: number) => {
    if (f.awning_valance === false) return;
    sheet([-hw + 0.04, y, z + 0.01], [hw - 0.04, y, z + 0.01], [-hw + 0.04, y - 0.2, z + 0.01], [hw - 0.04, y - 0.2, z + 0.01], stripes);
  };
  const kind = f.variant ?? "arm";

  if (kind === "side") {
    // a post with the rolled fabric at the left end, the pull bar running to the right, a post to hook it into
    const y1 = base;
    const y0 = 0.05;
    const z = 0;
    const end = -hw + 0.08 + t * (f.w - 0.16);
    box(-hw, -hw + 0.1, 0, y1 + 0.05, z - 0.05, z + 0.05, body, top);
    box(hw - 0.06, hw, 0, y1 + 0.05, z - 0.03, z + 0.03, body, top);
    if (t > 0.01) sheet([-hw + 0.1, y1, z], [-hw + 0.1, y0, z], [end, y1, z], [end, y0, z], Math.max(4, Math.round((y1 - y0) / 0.3)));
    beam([end, y0, z], [end, y1, z], 0.02, accent);
    return;
  }

  if (kind === "vertical") {
    // a cassette across the top, side rails down to the floor, the fabric running down to its bottom bar
    const z0 = back;
    const z1 = Math.min(f.d / 2, back + cas);
    box(-hw, hw, base, base + cas, z0, z1, body, top);
    const zf = (z0 + z1) / 2;
    for (const x of [-hw + 0.02, hw - 0.02]) beam([x, 0.02, zf], [x, base, zf], 0.02, accent);
    const yb = base - t * Math.max(0, base - 0.04);
    if (t > 0.01) sheet([-hw + 0.04, base, zf], [hw - 0.04, base, zf], [-hw + 0.04, yb, zf], [hw - 0.04, yb, zf], stripes);
    beam([-hw + 0.03, yb, zf], [hw - 0.03, yb, zf], 0.025, accent);
    return;
  }

  if (kind === "pergola") {
    // a fixed frame: rails from the wall to the posts at the front, falling with the pitch; the fabric runs out on top
    const zf = f.d / 2 - 0.05;
    const yw = base + cas;
    const yf = yw - (zf - back) * Math.tan(pitch);
    box(-hw, hw, base, yw, back, back + cas, body, top);
    for (const x of [-hw + 0.05, hw - 0.05]) {
      beam([x, yw, back + cas], [x, yf, zf], 0.035, accent);
      beam([x, 0, zf], [x, yf, zf], 0.045, body);
    }
    beam([-hw + 0.05, yf, zf], [hw - 0.05, yf, zf], 0.035, accent);
    const zr = back + cas + t * (zf - back - cas);
    const yr = yw - (zr - back) * Math.tan(pitch) + 0.04;
    if (t > 0.01) sheet([-hw + 0.08, yw + 0.04, back + cas], [hw - 0.08, yw + 0.04, back + cas], [-hw + 0.08, yr, zr], [hw - 0.08, yr, zr], stripes);
    beam([-hw + 0.08, yr, zr], [hw - 0.08, yr, zr], 0.025, accent);
    return;
  }

  // the cassette on the wall (folding-arm and drop-arm awnings)
  const z0 = back;
  const z1 = back + cas;
  box(-hw, hw, base, base + cas, z0, z1, body, top);
  const mouth = [z1 - 0.02, base + cas * 0.35];

  if (kind === "drop") {
    // arms hinged on the wall below the cassette swing out and down; the fabric runs from the cassette to their bar
    const arm = Math.max(0.3, f.d - cas);
    // the hinge sits an arm's length under the cassette's mouth: retracted, the bar rests at the cassette
    const pivot = [z1, mouth[1] - arm];
    // retracted the arms point up along the wall, run out they reach the set angle below the horizontal
    const phi = t * (Math.PI / 2 + pitch);
    const bar = [pivot[0] + Math.sin(phi) * arm, pivot[1] + Math.cos(phi) * arm];
    for (const x of [-hw + 0.08, hw - 0.08]) beam([x, pivot[1], pivot[0]], [x, bar[1], bar[0]], 0.018, accent);
    if (t > 0.01) sheet([-hw + 0.04, mouth[1], mouth[0]], [hw - 0.04, mouth[1], mouth[0]], [-hw + 0.04, bar[1], bar[0]], [hw - 0.04, bar[1], bar[0]], stripes);
    beam([-hw + 0.02, bar[1], bar[0]], [hw - 0.02, bar[1], bar[0]], 0.03, accent);
    if (t > 0.05) valance(bar[1], bar[0]);
    return;
  }

  // folding-arm awning: the fabric down its fall to the front bar, two folding arms bending out sideways
  const reach = Math.max(0, f.d - cas) * t;
  const end = [mouth[0] + reach, mouth[1] - reach * Math.tan(pitch)];
  if (reach > 0.01) {
    sheet([-hw + 0.04, mouth[1], mouth[0]], [hw - 0.04, mouth[1], mouth[0]], [-hw + 0.04, end[1], end[0]], [hw - 0.04, end[1], end[0]], stripes);
    const arm = Math.max(0.3, (f.d - cas) / 2 + 0.05);
    for (const side of [-1, 1]) {
      const x = side * (hw - 0.12);
      const sh = [x, base + 0.02, z1 - 0.04];
      const hand = [x, end[1] - 0.02, end[0]];
      const span = Math.hypot(hand[2] - sh[2], hand[1] - sh[1]);
      const bend = Math.sqrt(Math.max(0, arm * arm - (span / 2) ** 2));
      const elbow = [x - side * Math.min(bend, hw - 0.15), (sh[1] + hand[1]) / 2, (sh[2] + hand[2]) / 2];
      beam(sh, elbow, 0.018, accent);
      beam(elbow, hand, 0.018, accent);
    }
  }
  beam([-hw + 0.02, end[1], end[0]], [hw - 0.02, end[1], end[0]], 0.03, accent);
  if (reach > 0.05) valance(end[1], end[0]);
}

export function pushFridgeDoors(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const p0 = buf.p.length;
  pushFridgeDoorsUnflipped(buf, f, base, left, right);
  if (f.mirror) flipWinding(buf, p0);
}

function pushFridgeDoorsUnflipped(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf = (lx: number, lz: number): [number, number] => [f.x + mx * lx * c - lz * s, f.z + mx * lx * s + lz * c];
  const y0 = base + 0.05;
  const y1 = base + f.h - 0.02;
  const red = new Color(0.75, 0.1, 0.14);
  const dark = new Color(C.dark);
  const accent = new Color(C.accent);
  const dw = f.w / 2 - 0.006;
  // a door: u runs from the hinge along the door (positive to the right), v through its thickness (0 = front face)
  const door = (hx: number, sign: 1 | -1, angle: number) => {
    const open = angle / opening;
    const front = new Color(0x1f2d4c).lerp(red, open);
    const side = new Color(C.body).lerp(red, open * 0.8);
    const ca = Math.cos(angle);
    const sa = Math.sin(angle);
    const at = (u: number, v: number): [number, number] => tf(hx + sign * (u * ca - v * sa), f.d / 2 + u * sa + v * ca);
    const quad = (p: [number, number][], ya: number, yb: number, col: Color) => {
      const [p0, p1, p2, p3] = p;
      buf.tri([p0[0], ya, p0[1]], [p1[0], ya, p1[1]], [p2[0], yb, p2[1]], col);
      buf.tri([p0[0], ya, p0[1]], [p2[0], yb, p2[1]], [p3[0], yb, p3[1]], col);
    };
    const box = (u0: number, u1: number, ya: number, yb: number, v0: number, v1: number, col: Color, face = col) => {
      const q = [at(u0, v1), at(u1, v1), at(u1, v0), at(u0, v0)];
      // front (v1 side), back, sides, top and bottom
      quad([q[0], q[1], q[1], q[0]], ya, yb, face);
      quad([q[3], q[2], q[2], q[3]], ya, yb, col);
      quad([q[0], q[3], q[3], q[0]], ya, yb, col);
      quad([q[1], q[2], q[2], q[1]], ya, yb, col);
      quad([q[0], q[1], q[2], q[3]], yb, yb, col);
      quad([q[3], q[2], q[1], q[0]], ya, ya, col);
    };
    box(0, dw, y0, y1, -FRIDGE_DOOR, 0, side, front);
    // handle at the free edge
    box(dw - 0.05, dw - 0.03, base + f.h * 0.45, base + f.h * 0.75, 0.005, 0.025, accent);
    return box;
  };
  const opening = 1.83; // ~105°
  const leftBox = door(-f.w / 2, 1, left * opening);
  // water dispenser: a dark recess in the left door
  leftBox(0.12, 0.3, base + f.h * 0.5, base + f.h * 0.68, 0.001, 0.005, dark);
  const rightBox = door(f.w / 2, -1, right * opening);
  // the screen: a dark panel on the right door (a picture rule puts its picture over it)
  rightBox(0.06, dw - 0.06, base + f.h * 0.52, base + f.h * 0.86, 0.001, 0.005, dark);
}

function stove(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, 1, h - 0.24, true);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.dark, C.dark, EDGE_FURN);
  for (const [x, z, r] of [
    [-0.14, -0.13, 0.09],
    [0.14, -0.13, 0.07],
    [-0.14, 0.13, 0.07],
    [0.14, 0.13, 0.09],
  ]) {
    const sx = (x * w) / 0.6;
    const sz = (z * d) / 0.62;
    b.cyl(sx, sz, r, h, h + 0.004, C.dark, 0x16263f, 12, EDGE_GLOW);
  }
}

/**
 * Brazilian indoor gourmet BBQ grill ("Churrasqueira interna"): hollow firebox with glowing charcoal embers, stainless
 * grill grate and skewers, offered as a full-height clad masonry shaft (""), countertop with steel & glass hood ("hood"),
 * or traditional exposed terracotta brick with firewood niche and tapered chimney ("brick").
 */
function bbqIndoor(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  const counterY = Math.min(0.92, h * 0.4);
  const mouthTop = Math.max(counterY + 0.12, Math.min(counterY + 0.62, h * 0.68));
  const wallT = Math.max(0.06, Math.min(0.13, w * 0.13));
  const backT = Math.max(0.05, Math.min(0.1, d * 0.15));
  const ix0 = -w / 2 + wallT;
  const ix1 = w / 2 - wallT;
  const iz0 = -d / 2 + backT;
  const iz1 = d / 2 - 0.03;
  const emberEdge = shade(0xff7a1f, 0.45);
  const steelLine = shade(0x8fb4ff, 0.42);

  // shared firebox interior: refractory hearth, glowing charcoal embers, stainless grate and skewers
  b.box(ix0, ix1, Math.max(0.02, counterY - 0.04), counterY, iz0, iz1, 0x261612, 0x331d18);
  b.pad(ix0 + 0.02, ix1 - 0.02, counterY, counterY + 0.024, iz0 + 0.02, iz1 - 0.04, 0x1c1414, 0x291a16, 0.008);
  const spanX = Math.max(0.08, ix1 - ix0 - 0.08);
  const spanZ = Math.max(0.08, iz1 - iz0 - 0.1);
  for (let e = 0; e < 6; e++) {
    const ex = ix0 + 0.04 + spanX * ((e + 0.5) / 6);
    const ez = iz0 + 0.05 + spanZ * (0.25 + 0.45 * ((e * 3) % 3) * 0.5);
    const ew = Math.max(0.02, spanX * 0.08);
    const ed = Math.max(0.02, spanZ * 0.16);
    b.pad(ex - ew, ex + ew, counterY + 0.015, counterY + 0.042, ez - ed, ez + ed, 0xc93b14, 0xff6e1f, 0.008);
  }
  b.seg(ix0 + 0.05, counterY + 0.044, (iz0 + iz1) * 0.5, ix1 - 0.05, counterY + 0.044, (iz0 + iz1) * 0.5, emberEdge);

  // stainless-steel grill grate + front handles
  const grillY = counterY + (mouthTop - counterY) * 0.32;
  const bars = Math.max(5, Math.round((ix1 - ix0) / 0.055));
  b.seg(ix0 + 0.01, grillY, iz0 + 0.02, ix1 - 0.01, grillY, iz0 + 0.02, steelLine);
  b.seg(ix0 + 0.01, grillY, iz1 - 0.02, ix1 - 0.01, grillY, iz1 - 0.02, EDGE_GLOW);
  for (let i = 0; i <= bars; i++) {
    const gx = ix0 + 0.015 + ((ix1 - ix0 - 0.03) * i) / bars;
    b.seg(gx, grillY, iz0 + 0.02, gx, grillY, iz1 - 0.02, steelLine);
  }
  for (const hx of [ix0 + spanX * 0.22, ix1 - spanX * 0.22]) {
    b.box(hx - 0.012, hx + 0.012, grillY - 0.008, grillY + 0.012, iz1 - 0.02, d / 2 + 0.03, 0x4a2f1d, 0x6b462b);
  }

  // upper skewer support bar + two skewers with wooden handles
  const skewY = counterY + (mouthTop - counterY) * 0.58;
  b.seg(ix0 + 0.01, skewY, iz1 - 0.03, ix1 - 0.01, skewY, iz1 - 0.03, steelLine);
  for (const sx of [-spanX * 0.18, spanX * 0.18]) {
    b.seg(sx, skewY - 0.01, iz0 + 0.02, sx, skewY + 0.004, d / 2 + 0.01, EDGE_GLOW);
    b.lyingCyl("z", sx, d / 2 + 0.035, skewY - 0.012, skewY + 0.016, 0.055, 0.024, 0x4a2f1d, 0x6b462b, 8);
  }

  if (variant === "hood") {
    const doors = Math.max(1, Math.round(w / 0.5));
    cabinet(b, w, d - 0.02, Math.max(0.12, counterY - 0.04), doors, Math.max(0.1, counterY - 0.2));
    // countertop collar around the firebox + stainless braseiro trim
    b.box(-w / 2, ix0, counterY - 0.04, counterY, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
    b.box(ix1, w / 2, counterY - 0.04, counterY, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
    b.box(ix0, ix1, counterY - 0.04, counterY, -d / 2, iz0, C.whiteTop, C.whiteTop);
    b.box(ix0, ix1, counterY - 0.04, counterY, iz1, d / 2, C.metal, 0x3b507d, EDGE_GLOW);
    // rear stainless panel + tempered glass side shields
    b.box(ix0 - 0.02, ix1 + 0.02, counterY, mouthTop, -d / 2, -d / 2 + backT * 0.65, C.metal, 0x3b507d, EDGE_FAINT);
    for (const gx of [ix0, ix1]) {
      b.seg(gx, counterY, -d / 2 + backT * 0.65, gx, counterY, d / 2 - 0.04, EDGE_GLOW);
      b.seg(gx, mouthTop, -d / 2 + backT * 0.65, gx, mouthTop, d / 2 - 0.04, EDGE_GLOW);
      b.seg(gx, counterY, d / 2 - 0.04, gx, mouthTop, d / 2 - 0.04, EDGE_GLOW);
    }
    // suspended brushed-steel pyramid hood + vertical duct
    const rimTop = Math.min(h - 0.04, mouthTop + 0.065);
    const coneTop = Math.min(h - 0.02, rimTop + (h - rimTop) * 0.4);
    b.box(-w / 2, w / 2, mouthTop, rimTop, -d / 2, d / 2 - 0.01, C.metal, 0x3b507d, EDGE_FURN);
    if (coneTop - rimTop > 0.01) {
      b.loft([-w / 2, w / 2, -d / 2, d / 2 - 0.01], [-w * 0.22, w * 0.22, -d / 2 + 0.02, -d / 2 + d * 0.44], rimTop, coneTop, C.metal, 0x3b507d, EDGE_FURN);
    }
    if (h - coneTop > 0.01) {
      b.box(-w * 0.22, w * 0.22, coneTop, h, -d / 2 + 0.02, -d / 2 + d * 0.44, C.metal, 0x3b507d, EDGE_FURN);
    }
    return;
  }

  if (variant === "brick") {
    const bSide = 0x5e271b;
    const bTop = 0x803827;
    const nicheTop = Math.max(0.14, counterY - 0.12);
    // lower brick piers + open firewood niche with logs
    b.box(-w / 2, ix0, 0, counterY - 0.04, -d / 2, d / 2 - 0.02, bSide, bTop, EDGE_FURN);
    b.box(ix1, w / 2, 0, counterY - 0.04, -d / 2, d / 2 - 0.02, bSide, bTop, EDGE_FURN);
    b.box(ix0, ix1, 0, counterY - 0.04, -d / 2, iz0, bSide, bTop);
    b.box(ix0, ix1, 0, 0.07, iz0, d / 2 - 0.02, bSide, bTop);
    b.box(ix0, ix1, nicheTop, counterY - 0.04, iz0, d / 2 - 0.02, bSide, bTop, EDGE_FAINT);
    for (const [lx, ly] of [
      [-spanX * 0.22, 0.12],
      [spanX * 0.02, 0.12],
      [spanX * 0.24, 0.12],
      [-spanX * 0.1, 0.2],
      [spanX * 0.14, 0.2],
    ]) {
      if (ly + 0.05 < nicheTop) b.lyingCyl("z", lx, 0, ly - 0.04, ly + 0.04, d * 0.55, 0.075, 0x452b1a, 0x694429, 8);
    }
    // dark granite hearth ledge + brick firebox walls
    b.box(-w / 2 - 0.01, w / 2 + 0.01, counterY - 0.04, counterY, -d / 2, d / 2, 0x1b2234, 0x26314a, EDGE_FURN);
    b.box(-w / 2, ix0, counterY, mouthTop, -d / 2, d / 2 - 0.02, bSide, bTop, EDGE_FURN);
    b.box(ix1, w / 2, counterY, mouthTop, -d / 2, d / 2 - 0.02, bSide, bTop, EDGE_FURN);
    b.box(ix0, ix1, counterY, mouthTop, -d / 2, iz0, 0x3b1912, bSide);
    // stepped lintel + sloped brick hood + chimney column
    const lintelTop = Math.min(h - 0.04, mouthTop + 0.09);
    const hoodTop = Math.min(h - 0.02, lintelTop + (h - lintelTop) * 0.48);
    b.box(-w / 2, w / 2, mouthTop, lintelTop, -d / 2, d / 2 - 0.01, bSide, bTop, EDGE_FURN);
    if (hoodTop - lintelTop > 0.01) {
      b.loft([-w / 2, w / 2, -d / 2, d / 2 - 0.02], [-w * 0.28, w * 0.28, -d / 2, -d / 2 + d * 0.52], lintelTop, hoodTop, bSide, bTop, EDGE_FURN);
    }
    if (h - hoodTop > 0.01) {
      b.box(-w * 0.28, w * 0.28, hoodTop, Math.max(hoodTop + 0.01, h - 0.05), -d / 2, -d / 2 + d * 0.52, bSide, bTop, EDGE_FURN);
      b.box(-w * 0.31, w * 0.31, Math.max(hoodTop, h - 0.05), h, -d / 2 - 0.01, -d / 2 + d * 0.54, bSide, bTop, EDGE_FAINT);
    }
    return;
  }

  // default (""): modern clad masonry/porcelain full-height shaft with cabinet below and brushed-steel mouth frame
  const doors = Math.max(1, Math.round(w / 0.5));
  cabinet(b, w, d - 0.02, Math.max(0.12, counterY - 0.04), doors, Math.max(0.1, counterY - 0.2));
  b.box(-w / 2, w / 2, counterY - 0.04, counterY, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.box(-w / 2, ix0, counterY, mouthTop, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(ix1, w / 2, counterY, mouthTop, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(ix0, ix1, counterY, mouthTop, -d / 2, iz0, 0x261612, 0x331d18);
  // brushed stainless-steel mouth trim around the firebox opening
  const zFace = d / 2 - 0.02;
  b.box(ix0 - 0.025, ix0, counterY, mouthTop + 0.025, zFace - 0.01, zFace + 0.012, C.metal, 0x3b507d);
  b.box(ix1, ix1 + 0.025, counterY, mouthTop + 0.025, zFace - 0.01, zFace + 0.012, C.metal, 0x3b507d);
  b.box(ix0 - 0.025, ix1 + 0.025, mouthTop, mouthTop + 0.03, zFace - 0.01, zFace + 0.012, C.metal, 0x3b507d, EDGE_GLOW);
  // upper clad chimney shaft up to h + damper grille
  if (h - mouthTop > 0.02) {
    b.box(-w / 2, w / 2, mouthTop, h, -d / 2, zFace, C.body, C.bodyTop, EDGE_FURN);
    if (h - mouthTop > 0.35) {
      const vy = h - 0.18;
      b.box(-w * 0.18, w * 0.18, vy - 0.05, vy + 0.05, zFace, zFace + 0.008, C.metal, 0x3b507d, EDGE_FAINT);
    }
  }
}

function sink(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, Math.max(1, Math.round(w / 0.45)), h - 0.2);
  const bw = Math.min(0.5, w - 0.2);
  b.box(-w / 2, -bw / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.box(bw / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.box(-bw / 2, bw / 2, h - 0.04, h, -d / 2, -d / 2 + 0.1, C.whiteTop, C.whiteTop);
  b.box(-bw / 2, bw / 2, h - 0.04, h, d / 2 - 0.08, d / 2, C.whiteTop, C.whiteTop);
  b.box(-bw / 2, bw / 2, h - 0.2, h - 0.17, -d / 2 + 0.1, d / 2 - 0.08, C.metal, C.metal, EDGE_GLOW);
  b.cyl(0, -d / 2 + 0.05, 0.02, h, h + 0.28, C.metal, C.metal, 8);
  b.box(-0.015, 0.015, h + 0.24, h + 0.28, -d / 2 + 0.05, -d / 2 + 0.22, C.metal);
}

function bathtub(b: Builder, w: number, d: number, h: number): void {
  const rim = 0.07;
  b.box(-w / 2, w / 2, 0, h - 0.02, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.02, h, -d / 2, -d / 2 + rim, C.whiteTop);
  b.box(-w / 2, w / 2, h - 0.02, h, d / 2 - rim, d / 2, C.whiteTop);
  b.box(-w / 2, -w / 2 + rim, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(w / 2 - rim, w / 2, h - 0.02, h, -d / 2 + rim, d / 2 - rim, C.whiteTop);
  b.box(-w / 2 + rim, w / 2 - rim, h - 0.03, h - 0.02, -d / 2 + rim, d / 2 - rim, C.glass, C.glass, EDGE_GLOW);
  b.cyl(-w / 2 + 0.04, 0, 0.02, h, h + 0.12, C.metal, C.metal, 8);
}

function shower(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, 0.05, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
  b.cyl(0, 0, 0.04, 0.05, 0.052, C.metal, C.metal, 8);
  // glass walls on the front and one side: only edges, the glass itself stays clear
  for (const [xa, za, xb, zb] of [
    [-w / 2, d / 2, w / 2, d / 2],
    [w / 2, -d / 2, w / 2, d / 2],
  ]) {
    b.seg(xa, 0.05, za, xb, 0.05, zb, EDGE_GLOW);
    b.seg(xa, h, za, xb, h, zb, EDGE_GLOW);
    b.seg(xb, 0.05, zb, xb, h, zb, EDGE_GLOW);
  }
  b.cyl(-w / 2 + 0.06, -d / 2 + 0.06, 0.015, 0.05, h - 0.05, C.metal, C.metal, 6);
  b.cyl(-w / 2 + 0.2, -d / 2 + 0.2, 0.1, h - 0.08, h - 0.06, C.metal, C.metal, 12, EDGE_GLOW);
}

function wc(b: Builder, w: number, d: number, h: number): void {
  const tankD = Math.min(0.18, d * 0.3);
  b.box(-w / 2, w / 2, 0.45, h, -d / 2, -d / 2 + tankD, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.3, w * 0.3, 0, 0.36, -d / 2 + tankD - 0.02, d / 2 - 0.12, C.white, C.whiteTop);
  b.cyl(0, d / 2 - 0.26, Math.min(w / 2, 0.19), 0.36, 0.41, C.white, C.whiteTop, 12, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0.41, 0.43, -d / 2 + tankD, -d / 2 + tankD + 0.05, C.whiteTop);
}

function washbasin(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.12, w > 0.8 ? 2 : 1, h - 0.3);
  b.box(-w / 2, w / 2, h - 0.12, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2 + 0.07, w / 2 - 0.07, h - 0.005, h, -d / 2 + 0.12, d / 2 - 0.06, C.glass, C.glass, EDGE_GLOW);
  b.cyl(0, -d / 2 + 0.06, 0.018, h, h + 0.2, C.metal, C.metal, 8);
  // mirror above
  b.box(-w / 2 + 0.04, w / 2 - 0.04, h + 0.35, h + 1.0, -d / 2, -d / 2 + 0.02, C.glass, C.glass, EDGE_GLOW);
}

function tvBoard(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.6)), h * 0.55, true);
  const tw = Math.min(w * 0.8, 1.45);
  const th = tw * 0.56;
  b.box(-0.1, 0.1, h, h + 0.02, -d / 2 + 0.08, -d / 2 + 0.24, C.metal);
  b.box(-0.02, 0.02, h + 0.02, h + 0.12, -d / 2 + 0.14, -d / 2 + 0.18, C.metal);
  b.box(-tw / 2, tw / 2, h + 0.1, h + 0.1 + th, -d / 2 + 0.12, -d / 2 + 0.16, C.dark, C.dark, EDGE_GLOW);
}

function plant(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  const potH = Math.min(0.4, h * 0.34);
  b.cyl(0, 0, r * 0.62, 0, potH, C.pot, C.pot, 10, EDGE_FURN);
  b.cyl(0, 0, r * 0.08, potH, h * 0.55, C.wood, C.wood, 6);
  // foliage as stacked, slightly rotated octagonal layers
  const layers = 4;
  for (let i = 0; i < layers; i++) {
    const t = i / (layers - 1);
    const lr = r * (0.95 - 0.55 * t);
    const y0 = potH + (h - potH) * (0.18 + 0.2 * i);
    b.cyl(Math.sin(i * 2.1) * 0.03, Math.cos(i * 1.7) * 0.03, lr, y0, y0 + (h - potH) * 0.16, C.plant, C.plantTop, 8, i === layers - 1 ? EDGE_FAINT : null);
  }
}

/**
 * Moreia (Dietes bicolor / iridioides): fountain-like grass/iris tussocks of arching sword-shaped leaves and slender
 * flower stalks with three-petal white and golden-yellow blooms. Stretching width or depth populates a natural border row.
 */
function plantMoreia(b: Builder, w: number, d: number, h: number): void {
  const edgeLeaf = shade(0x3de0a0, 0.26);
  const step = Math.max(0.28, Math.min(0.58, Math.min(w, d) * 0.92));
  const nx = Math.max(1, Math.round(w / step));
  const nz = Math.max(1, Math.round(d / step));
  const total = nx * nz;
  const dense = total <= 4;
  if (total > 1) {
    b.pad(-w * 0.46, w * 0.46, 0, Math.min(0.03, h * 0.04), -d * 0.42, d * 0.42, 0x161310, 0x1e1915, 0.012, EDGE_FAINT);
  }
  const cw = w / nx;
  const cd = d / nz;
  const baseR = Math.max(0.12, Math.min(cw, cd) * 0.48);
  for (let ix = 0; ix < nx; ix++) {
    for (let iz = 0; iz < nz; iz++) {
      const seed = ix * 7 + iz * 13;
      const cx = -w / 2 + cw * (ix + 0.5) + (nx > 1 ? Math.sin(seed * 2.3) * cw * 0.06 : 0);
      const cz = -d / 2 + cd * (iz + 0.5) + (nz > 1 ? Math.cos(seed * 1.9) * cd * 0.06 : 0);
      const yaw = (seed * 37) % 360;
      const ch = h * (total > 1 ? 0.9 + 0.1 * (0.5 + 0.5 * Math.sin(seed * 1.7)) : 1);
      const r = baseR * (total > 1 ? 0.94 + 0.1 * (0.5 + 0.5 * Math.cos(seed * 1.3)) : 1);
      b.cyl(cx, cz, r * 0.2, 0, ch * 0.07, 0x161f18, 0x113628, 7);

      const blade = (deg: number, rMid: number, rTip: number, yMid: number, yTip: number, bw: number, rib: boolean) => {
        const bb = b.rotated(cx, cz, deg);
        const z0 = r * 0.04;
        const tk = Math.max(0.008, r * 0.045);
        bb.loft([-bw * 0.65, bw * 0.65, z0, z0 + tk], [-bw, bw, rMid - tk * 0.4, rMid + tk * 0.4], ch * 0.03, yMid, 0x113628, 0x1c543e);
        bb.loft([-bw, bw, rMid - tk * 0.4, rMid + tk * 0.4], [-0.003, 0.003, rTip - 0.004, rTip + 0.004], yMid, yTip, 0x1c543e, 0x23664b);
        if (rib) {
          bb.seg(0, ch * 0.05, z0 + tk * 0.5, 0, yMid + 0.004, rMid, edgeLeaf);
          bb.seg(0, yMid + 0.004, rMid, 0, Math.max(ch * 0.12, yTip - ch * 0.03), rTip + r * 0.03, edgeLeaf);
        }
      };

      const n1 = dense ? 4 : 3;
      for (let i = 0; i < n1; i++) {
        blade(yaw + (i * 360) / n1 + 12, r * 0.22, r * 0.44, ch * 0.48, ch * 0.84, Math.max(0.012, r * 0.075), true);
      }
      const n2 = dense ? 6 : 4;
      for (let i = 0; i < n2; i++) {
        blade(yaw + (i * 360) / n2 + 34, r * 0.48, r * 0.86, ch * 0.44, ch * 0.66, Math.max(0.014, r * 0.085), true);
      }
      const n3 = dense ? 6 : 5;
      for (let i = 0; i < n3; i++) {
        blade(yaw + (i * 360) / n3 + 5, r * 0.56, r * 1.0, ch * 0.28, ch * 0.4, Math.max(0.013, r * 0.08), i % 2 === 0);
      }

      const stalks = dense ? 3 : 2;
      const petalLen = Math.min(0.048, Math.max(0.026, r * 0.16));
      const petalW = petalLen * 0.44;
      for (let s = 0; s < stalks; s++) {
        const sa = yaw + 28 + s * (360 / stalks) + (s % 2) * 14;
        const sr = r * (0.28 + 0.16 * ((s + ix) % 2));
        const fy = ch * (0.86 + 0.06 * (s % 3));
        const sb = b.rotated(cx, cz, sa);
        sb.loft([-0.005, 0.005, r * 0.03, r * 0.03 + 0.01], [-0.004, 0.004, sr - 0.004, sr + 0.004], ch * 0.08, fy, 0x164734, 0x23664b);
        sb.seg(0, ch * 0.1, r * 0.035, 0, fy, sr, edgeLeaf);
        for (let k = 0; k < 3; k++) {
          const fb = sb.rotated(0, sr, k * 120 + 18);
          fb.loft([-petalW * 0.35, petalW * 0.35, 0.004, 0.012], [-petalW, petalW, petalLen * 0.35, petalLen], fy - 0.004, fy + 0.014, 0x627a9e, 0x9cb4d6);
        }
        sb.cyl(0, sr, petalLen * 0.34, fy + 0.002, fy + 0.02, 0xd49b1a, 0xf2c438, 6);
        if (s === 0) {
          sb.seg(0, fy * 0.66, sr * 0.68, 0.022, fy * 0.78, sr * 0.82, edgeLeaf);
          sb.loft([0.016, 0.028, sr * 0.79, sr * 0.85], [0.019, 0.025, sr * 0.8, sr * 0.84], fy * 0.77, fy * 0.83, 0x627a9e, 0x9cb4d6);
        }
      }
    }
  }
}

/**
 * Podocarpo (Podocarpus macrophyllus): upright columnar-conical shrub/tree with a woody trunk, dense dark blue-green
 * needle whorls and bright lime-emerald new-growth shoots. Stretching width or depth plants a natural hedge row.
 */
function plantPodocarpo(b: Builder, w: number, d: number, h: number): void {
  const edgeShoot = shade(0x4be898, 0.24);
  const step = Math.max(0.36, Math.min(0.66, Math.min(w, d) * 0.92));
  const nx = Math.max(1, Math.round(w / step));
  const nz = Math.max(1, Math.round(d / step));
  const total = nx * nz;
  const dense = total <= 4;
  if (total > 1) {
    b.pad(-w * 0.47, w * 0.47, 0, Math.min(0.035, h * 0.022), -d * 0.43, d * 0.43, 0x161310, 0x1e1915, 0.012, EDGE_FAINT);
  }
  const cw = w / nx;
  const cd = d / nz;
  const baseR = Math.max(0.14, Math.min(cw, cd) * 0.48);
  for (let ix = 0; ix < nx; ix++) {
    for (let iz = 0; iz < nz; iz++) {
      const seed = ix * 11 + iz * 17;
      const cx = -w / 2 + cw * (ix + 0.5) + (nx > 1 ? Math.sin(seed * 2.1) * cw * 0.04 : 0);
      const cz = -d / 2 + cd * (iz + 0.5) + (nz > 1 ? Math.cos(seed * 1.7) * cd * 0.04 : 0);
      const yaw = (seed * 43) % 360;
      const ch = h * (total > 1 ? 0.93 + 0.07 * (0.5 + 0.5 * Math.sin(seed * 1.5)) : 1);
      const r = baseR * (total > 1 ? 0.96 + 0.08 * (0.5 + 0.5 * Math.cos(seed * 1.9)) : 1);

      // woody trunk visible below the lower skirt and rising inside the column
      b.cyl(cx, cz, Math.max(0.018, r * 0.13), 0, ch * 0.62, 0x291f18, 0x382b22, 7);

      const tiers = dense ? 7 : 5;
      const yStart = ch * 0.13;
      const yEnd = ch * 0.93;
      const tierSpan = (yEnd - yStart) / tiers;
      for (let t = 0; t < tiers; t++) {
        const u = t / Math.max(1, tiers - 1);
        const env = u < 0.45 ? 0.88 + 0.12 * Math.sin((u / 0.45) * Math.PI * 0.5) : Math.max(0.26, 1 - ((u - 0.45) / 0.55) * 0.74);
        const tr = r * env;
        const y0 = yStart + t * tierSpan * 0.94;
        const y1 = Math.min(ch * 0.96, y0 + tierSpan * 1.18);
        const ox = Math.sin(seed + t * 2.2) * r * 0.03;
        const oz = Math.cos(seed + t * 1.8) * r * 0.03;
        b.cyl(cx + ox, cz + oz, tr * 0.82, y0, y1, 0x0e2f25, 0x164737, 8, t === tiers - 1 ? EDGE_FAINT : null);

        // upward-angled outer needle branchlets with fresh bright-green shoot tips
        const tufts = dense ? 5 : 4;
        for (let k = 0; k < tufts; k++) {
          const deg = yaw + t * 34 + (k * 360) / tufts;
          const tb = b.rotated(cx + ox, cz + oz, deg);
          const tw0 = Math.max(0.018, tr * 0.24);
          const tw1 = Math.max(0.01, tr * 0.13);
          const ty0 = y0 + (y1 - y0) * 0.15;
          const ty1 = y1 + tierSpan * 0.16;
          tb.loft([-tw0, tw0, tr * 0.44, tr * 0.68], [-tw1, tw1, tr * 0.84, tr * 1.03], ty0, ty1, 0x1a5439, 0x368f5c);
          if ((t + k) % 2 === 0) {
            tb.seg(0, ty0 + 0.01, tr * 0.56, 0, ty1 + 0.008, tr * 1.02, edgeShoot);
          }
        }
      }
      // conical leader shoot at the apex
      const ar = Math.max(0.025, r * 0.2);
      b.loft([cx - ar, cx + ar, cz - ar, cz + ar], [cx - ar * 0.28, cx + ar * 0.28, cz - ar * 0.28, cz + ar * 0.28], ch * 0.9, ch, 0x1f6141, 0x3ea168);
      b.seg(cx, ch * 0.9, cz, cx, ch + 0.01, cz, edgeShoot);
    }
  }
}

/**
 * Jiboia (Epipremnum aureum / golden pothos): ceramic pot with heart-shaped emerald and golden-lime variegated leaves,
 * either mounding on a table/sideboard (""), cascading in long vines below the pot ("hanging"), or climbing a coir totem ("totem").
 */
function plantJiboia(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  const r = Math.min(w, d) / 2;
  const edgeVein = shade(0x8be858, 0.25);

  const heartLeaf = (lb: Builder, lx: number, lz: number, deg: number, yBase: number, sz: number, golden: boolean) => {
    const hb = lb.rotated(lx, lz, deg);
    const lw = Math.max(0.01, sz * 0.56);
    const side = golden ? 0x457322 : 0x14452e;
    const top = golden ? 0x8cc439 : 0x226e49;
    const dy = Math.max(0.008, sz * 0.22);
    hb.loft([-lw, lw, -sz * 0.16, sz * 0.36], [-lw * 0.18, lw * 0.18, sz * 0.34, sz * 0.88], yBase, yBase + dy, side, top);
    hb.seg(0, yBase + dy + 0.002, -sz * 0.08, 0, yBase + dy * 0.65, sz * 0.82, edgeVein);
  };

  if (variant === "totem") {
    const potH = Math.min(0.32, h * 0.25);
    b.loft([-r * 0.46, r * 0.46, -r * 0.46, r * 0.46], [-r * 0.58, r * 0.58, -r * 0.58, r * 0.58], 0, potH, C.pot, 0x263557, EDGE_FURN);
    b.cyl(0, 0, r * 0.52, Math.max(0, potH - 0.008), potH + 0.005, 0x181310, 0x211a15, 10);
    const poleTop = h * 0.94;
    const poleR = Math.max(0.022, r * 0.16);
    b.cyl(0, 0, poleR, potH, poleTop, 0x3b2a1d, 0x4f3928, 8, EDGE_FAINT);
    const nLeaves = Math.max(10, Math.min(26, Math.round(Math.max(0.1, h - potH) / 0.042)));
    for (let i = 0; i < nLeaves; i++) {
      const u = i / Math.max(1, nLeaves - 1);
      const deg = (i * 137.5) % 360;
      const rad = poleR + r * (0.34 - 0.1 * u);
      const y = potH + (h * 0.96 - potH) * u;
      const a = deg * DEG;
      const lx = -Math.sin(a) * rad;
      const lz = Math.cos(a) * rad;
      heartLeaf(b, lx, lz, deg, y, Math.max(0.045, r * (0.5 - 0.08 * u)), i % 2 === 0);
    }
    return;
  }

  const potH = h * 0.46;
  b.loft([-r * 0.45, r * 0.45, -r * 0.45, r * 0.45], [-r * 0.58, r * 0.58, -r * 0.58, r * 0.58], 0, potH, C.pot, 0x263557, EDGE_FURN);
  b.cyl(0, 0, r * 0.52, Math.max(0, potH - 0.008), potH + 0.005, 0x181310, 0x211a15, 10);

  // lush mounding crown of variegated heart-shaped leaves above the pot
  const leafSz = Math.max(0.042, r * 0.46);
  for (let i = 0; i < 8; i++) {
    const deg = i * 45 + 14;
    const a = deg * DEG;
    const rad = r * (0.34 + 0.08 * (i % 2));
    heartLeaf(b, -Math.sin(a) * rad, Math.cos(a) * rad, deg, potH + (h - potH) * (0.12 + 0.14 * (i % 3)), leafSz, i % 2 === 0);
  }
  for (let i = 0; i < 4; i++) {
    const deg = i * 90 + 38;
    const a = deg * DEG;
    heartLeaf(b, -Math.sin(a) * r * 0.14, Math.cos(a) * r * 0.14, deg, potH + (h - potH) * (0.55 + 0.08 * i), leafSz * 0.92, i % 2 === 1);
  }

  // cascading vines: either draping down the pot sides (safe on tabletops) or hanging below the pot ("hanging")
  const hanging = variant === "hanging";
  const vineAngles = hanging ? [-68, -36, -8, 18, 46, 74] : [-130, -52, 6, 58, 142];
  vineAngles.forEach((deg, idx) => {
    const vb = b.rotated(0, 0, deg);
    const yTop = potH + 0.012;
    const drop = hanging ? -Math.max(0.34, h * (0.85 + 0.18 * (idx % 3))) : Math.max(0.014, potH * (0.08 + 0.16 * (idx % 3)));
    const steps = hanging ? 6 : 3;
    let prevY = yTop;
    let prevZ = r * 0.52;
    for (let s = 1; s <= steps; s++) {
      const u = s / steps;
      const ny = yTop + (drop - yTop) * u;
      const nz = r * (0.66 + 0.22 * Math.sin(u * Math.PI * 0.85)) + (hanging ? 0.015 * u : 0);
      const nx = Math.sin(idx * 1.9 + s * 1.4) * r * 0.08;
      vb.seg(0, prevY, prevZ, nx, ny, nz, edgeVein);
      heartLeaf(vb, nx, nz, (s % 2 ? 26 : -26) + idx * 3, ny, leafSz * (0.94 - 0.18 * u), (idx + s) % 2 === 0);
      prevY = ny;
      prevZ = nz;
    }
  });
}

/**
 * Orquídea (Phalaenopsis): glazed ceramic cachepot with pine-bark substrate, broad fleshy dark-green basal leaves,
 * bamboo stake and graceful arching flower spikes carrying butterfly-shaped blooms in white, pink, yellow or lilac.
 */
function plantOrquidea(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  const edgeStem = shade(0x3de0a0, 0.24);
  const palette: Record<string, [number, number, number, number]> = {
    "": [0x758bad, 0xbcd0ed, 0xc92e71, 0xf55ea0],
    pink: [0xb83b7e, 0xed6bb2, 0x9e1952, 0xf5ba36],
    yellow: [0xc7981c, 0xf5cf42, 0xc92c61, 0xf04d84],
    lilac: [0x764da8, 0xad82e3, 0x59268c, 0xf2be38],
  };
  const [petalSide, petalTop, lipSide, lipTop] = palette[variant ?? ""] ?? palette[""];

  const nx = Math.max(1, Math.round(w / 0.34));
  const cw = w / nx;
  const r = Math.max(0.04, Math.min(cw, d) * 0.44);
  const potH = h * 0.28;

  for (let ip = 0; ip < nx; ip++) {
    const cx = -w / 2 + cw * (ip + 0.5);
    const cz = -r * 0.06;
    const yaw = ip * 24;

    // glazed tapered ceramic cachepot + dark pine-bark chips
    b.loft([cx - r * 0.5, cx + r * 0.5, cz - r * 0.5, cz + r * 0.5], [cx - r * 0.64, cx + r * 0.64, cz - r * 0.64, cz + r * 0.64], 0, potH, C.white, C.whiteTop, EDGE_FURN);
    b.cyl(cx, cz, r * 0.56, Math.max(0, potH - 0.008), potH + 0.005, 0x241913, 0x30221a, 10);

    // broad fleshy opposite-ranked basal Phalaenopsis leaves curving over the pot rim
    for (const [deg, lenK, yK] of [
      [-86, 1.02, 0.065],
      [84, 1.0, 0.06],
      [-58, 0.88, 0.095],
      [62, 0.9, 0.09],
      [162, 0.78, 0.05],
    ] as const) {
      const lb = b.rotated(cx, cz, yaw + deg);
      const lw = Math.max(0.014, r * 0.26);
      const yMid = potH + h * yK;
      lb.loft([-lw * 0.55, lw * 0.55, r * 0.04, r * 0.22], [-lw, lw, r * 0.42, r * 0.62], potH, yMid + 0.012, 0x113d29, 0x1d5e40);
      lb.loft([-lw, lw, r * 0.48, r * 0.64], [-lw * 0.42, lw * 0.42, r * (lenK - 0.12), r * lenK], yMid - 0.008, yMid + 0.008, 0x154a32, 0x236e4b);
    }

    // slender bamboo support stake
    b.cyl(cx - r * 0.04, cz - r * 0.05, Math.max(0.0035, r * 0.028), potH, h * 0.72, 0x2e241b, 0x3d3024, 5);

    const bloom = (fb: Builder, fx: number, fy: number, fz: number, turnDeg: number, fs: number) => {
      const ob = fb.rotated(fx, fz, turnDeg);
      // two wide rounded lateral wing petals
      ob.loft([-fs * 1.05, -fs * 0.1, -0.004, 0.005], [-fs * 0.92, -fs * 0.14, -0.002, 0.007], fy - fs * 0.42, fy + fs * 0.42, petalSide, petalTop);
      ob.loft([fs * 0.1, fs * 1.05, -0.004, 0.005], [fs * 0.14, fs * 0.92, -0.002, 0.007], fy - fs * 0.42, fy + fs * 0.42, petalSide, petalTop);
      // dorsal upper sepal & lower lateral sepals
      ob.loft([-fs * 0.36, fs * 0.36, -0.006, 0.003], [-fs * 0.28, fs * 0.28, -0.005, 0.004], fy + fs * 0.08, fy + fs * 0.78, petalSide, petalTop);
      ob.loft([-fs * 0.44, fs * 0.44, -0.006, 0.003], [-fs * 0.52, fs * 0.52, -0.005, 0.004], fy - fs * 0.72, fy - fs * 0.05, petalSide, petalTop);
      // projecting contrasting central labellum (lip)
      ob.loft([-fs * 0.22, fs * 0.22, 0.003, 0.015], [-fs * 0.14, fs * 0.14, 0.005, 0.018], fy - fs * 0.34, fy + fs * 0.08, lipSide, lipTop);
    };

    const spike = (deg: number, topH: number, reach: number, count: number) => {
      const sb = b.rotated(cx, cz, yaw + deg);
      const yKnee = potH + (topH - potH) * 0.68;
      const yApex = topH;
      sb.loft([-0.004, 0.004, -r * 0.03, -r * 0.03 + 0.008], [-0.0035, 0.0035, reach * 0.18, reach * 0.18 + 0.007], potH, yKnee, 0x164734, 0x23664b);
      sb.loft([-0.0035, 0.0035, reach * 0.18, reach * 0.18 + 0.007], [-0.003, 0.003, reach * 0.56, reach * 0.56 + 0.006], yKnee, yApex, 0x1a5439, 0x297553);
      sb.seg(0, potH + 0.02, -r * 0.025, 0, yKnee, reach * 0.18, edgeStem);
      sb.seg(0, yKnee, reach * 0.18, 0, yApex, reach * 0.56, edgeStem);

      const fs = Math.min(0.044, Math.max(0.02, r * 0.34));
      let py = yApex;
      let pz = reach * 0.56;
      for (let k = 0; k < count; k++) {
        const u = (k + 1) / (count + 1);
        const ny = yApex - (topH - potH) * 0.28 * u;
        const nz = reach * (0.56 + 0.44 * u);
        const side = k % 2 === 0 ? -1 : 1;
        const bx = side * fs * 0.48;
        sb.seg(0, py, pz, 0, ny, nz, edgeStem);
        sb.seg(0, ny, nz, bx, ny, nz + 0.008, edgeStem);
        bloom(sb, bx, ny, nz + 0.01, side * 22, fs * (1 - 0.08 * u));
        py = ny;
        pz = nz;
      }
      // small unopened terminal orchid buds at the drooping tip
      const tipY = py - (topH - potH) * 0.06;
      const tipZ = pz + reach * 0.1;
      sb.seg(0, py, pz, 0, tipY, tipZ, edgeStem);
      sb.cyl(0, tipZ, fs * 0.22, tipY - fs * 0.18, tipY + fs * 0.18, petalSide, petalTop, 6);
    };

    spike(6, h * 0.96, r * 0.88, 4);
    if (h >= 0.38) spike(-34, h * 0.78, r * 0.74, 3);
  }
}

function rug(b: Builder, w: number, d: number): void {
  b.box(-w / 2, w / 2, 0, 0.012, -d / 2, d / 2, C.fabric, C.fabricTop);
  const i = Math.min(0.12, Math.min(w, d) * 0.08);
  for (const [xa, za, xb, zb] of [
    [-w / 2 + i, -d / 2 + i, w / 2 - i, -d / 2 + i],
    [w / 2 - i, -d / 2 + i, w / 2 - i, d / 2 - i],
    [w / 2 - i, d / 2 - i, -w / 2 + i, d / 2 - i],
    [-w / 2 + i, d / 2 - i, -w / 2 + i, -d / 2 + i],
  ]) {
    b.seg(xa, 0.014, za, xb, 0.014, zb, EDGE_FURN);
  }
}

/** Straight stair rising towards -z (the back), with a handrail on the +x side. */
function stairs(b: Builder, w: number, d: number, h: number): void {
  const n = Math.max(3, Math.round(h / 0.18));
  const rise = h / n;
  const run = d / n;
  for (let i = 0; i < n; i++) {
    const z1 = d / 2 - run * i;
    const z0 = z1 - run;
    const y1 = rise * (i + 1);
    b.box(-w / 2, w / 2, 0, y1, z0, z1, C.wood, C.woodTop);
    b.seg(-w / 2, y1, z1, w / 2, y1, z1, EDGE_FURN);
  }
  b.seg(-w / 2, 0, d / 2, -w / 2, rise, d / 2, EDGE_FURN);
  // stringer lines along both sides
  for (const x of [-w / 2, w / 2]) b.seg(x, rise, d / 2, x, h, -d / 2 + run, EDGE_FAINT);
  // handrail and posts
  const rail = 0.9;
  const xr = w / 2 - 0.03;
  // the rail ends where the stair passes through the ceiling opening
  const last = Math.max(1, n - 4);
  b.seg(xr, rise + rail, d / 2 - run / 2, xr, rise * last + rail, d / 2 - run * (last - 0.5), EDGE_GLOW);
  for (let i = 0; i < last; i += 3) {
    const z = d / 2 - run * (i + 0.5);
    const y = rise * (i + 1);
    b.seg(xr, y, z, xr, y + rail, z, EDGE_FAINT);
  }
}

/**
 * U-stair: the first flight rises on the left half (-x) from the front towards the back, a landing across
 * the whole width turns it, the second flight comes back up on the right half to the front. Mirroring
 * turns it the other way. A handrail runs along the eye between the flights.
 */
function stairsU(b: Builder, w: number, d: number, h: number): void {
  const { k, steps1, steps2, fw, landing, run, rise } = stairsULayout(w, d, h);
  const xa0 = -w / 2;
  const xa1 = -w / 2 + fw;
  const xb0 = w / 2 - fw;
  const xb1 = w / 2;
  const zl = -d / 2 + landing;
  for (let i = 0; i < steps1; i++) {
    const z1 = d / 2 - run * i;
    const y1 = rise * (i + 1);
    b.box(xa0, xa1, 0, y1, z1 - run, z1, C.wood, C.woodTop);
    b.seg(xa0, y1, z1, xa1, y1, z1, EDGE_FURN);
  }
  b.seg(xa0, 0, d / 2, xa0, rise, d / 2, EDGE_FURN);
  // the landing across both flights: solid under the first flight's half, a slab over the second's
  const yl = rise * k;
  const slab = 0.2;
  b.box(xa0, xa1, 0, yl, -d / 2, zl, C.wood, C.woodTop);
  b.box(xa1, xb1, Math.max(0, yl - slab), yl, -d / 2, zl, C.wood, C.woodTop);
  b.seg(xa0, yl, zl, xa1, yl, zl, EDGE_FURN);
  // the second flight rises from the landing towards the front as stepped slabs (open below, so it
  // does not stand like a wall); its top step is the upper floor
  for (let j = 0; j < steps2; j++) {
    const z0 = zl + run * j;
    const y1 = rise * (k + 1 + j);
    b.box(xb0, xb1, Math.max(0, y1 - rise - slab), y1, z0, z0 + run, C.wood, C.woodTop);
    b.seg(xb0, y1, z0, xb1, y1, z0, EDGE_FURN);
  }
  // stringer lines along the outer sides
  b.seg(xa0, rise, d / 2, xa0, yl, zl, EDGE_FAINT);
  b.seg(xb1, yl, zl, xb1, h, zl + run * (steps2 - 1), EDGE_FAINT);
  // handrail along the eye and around the landing; it ends where the second flight passes the ceiling
  const rail = 0.9;
  const ra = xa1 - 0.03;
  const rb = xb0 + 0.03;
  const zr = zl - 0.03;
  const last = Math.max(1, steps2 - 4);
  b.seg(ra, rise + rail, d / 2 - run / 2, ra, yl + rail, zr, EDGE_GLOW);
  b.seg(ra, yl + rail, zr, rb, yl + rail, zr, EDGE_GLOW);
  b.seg(rb, yl + rail, zr, rb, rise * (k + last) + rail, zl + run * (last - 0.5), EDGE_GLOW);
  for (let i = 0; i < steps1; i += 3) {
    const z = d / 2 - run * (i + 0.5);
    b.seg(ra, rise * (i + 1), z, ra, rise * (i + 1) + rail, z, EDGE_FAINT);
  }
  for (const x of [ra, rb]) b.seg(x, yl, zr, x, yl + rail, zr, EDGE_FAINT);
  for (let j = 2; j < last; j += 3) {
    const z = zl + run * (j + 0.5);
    b.seg(rb, rise * (k + 1 + j), z, rb, rise * (k + 1 + j) + rail, z, EDGE_FAINT);
  }
}

function sideboard(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, 0.12, 0.03, 0.04, C.metal);
  b.box(-w / 2, w / 2, 0.12, h, -d / 2, d / 2 - 0.02, C.wood, C.woodTop, EDGE_FURN);
  fronts(b, -w / 2, w / 2, 0.12, h, d / 2 - 0.02, Math.max(2, Math.round(w / 0.45)), h - 0.1, true);
}

function dresser(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.06, h, -d / 2, d / 2 - 0.02, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  const n = Math.max(3, Math.round((h - 0.06) / 0.22));
  const z = d / 2 - 0.02;
  for (let i = 1; i < n; i++) {
    const y = 0.06 + ((h - 0.06) / n) * i;
    b.seg(-w / 2, y, z, w / 2, y, z, EDGE_FAINT);
  }
  for (let i = 0; i < n; i++) {
    const y = 0.06 + ((h - 0.06) / n) * (i + 0.5);
    b.seg(-0.08, y, z + 0.012, 0.08, y, z + 0.012, EDGE_GLOW);
  }
}

function coatRack(b: Builder, w: number, d: number, h: number): void {
  // shoe bench, back panel with hooks, hat shelf
  b.box(-w / 2, w / 2, 0, 0.45, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  fronts(b, -w / 2, w / 2, 0.02, 0.45, d / 2, Math.max(2, Math.round(w / 0.5)), 0.38, true);
  b.box(-w / 2, w / 2, 0.45, h, -d / 2, -d / 2 + 0.03, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  const hooks = Math.max(2, Math.round(w / 0.25));
  for (let i = 0; i < hooks; i++) {
    const x = -w / 2 + (w / hooks) * (i + 0.5);
    b.box(x - 0.015, x + 0.015, h - 0.32, h - 0.28, -d / 2 + 0.03, -d / 2 + 0.1, C.metal, C.metal);
  }
}

/** Bench with a back along the rear; `side` adds the second arm of a corner bench along -x. */
function bench(b: Builder, w: number, d: number, h: number, corner: boolean): void {
  const seat = 0.45;
  const depth = Math.min(0.5, corner ? d * 0.4 : d);
  const back = 0.08;
  // rear arm
  b.box(-w / 2, w / 2, 0, seat - 0.06, -d / 2, -d / 2 + depth, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2, w / 2, 0, h, -d / 2, -d / 2 + back, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + (corner ? depth : 0.02), w / 2 - 0.02, seat - 0.06, seat + 0.02, -d / 2 + back, -d / 2 + depth, C.cushion, C.cushion, EDGE_FAINT);
  if (corner) {
    // side arm along -x, meeting the rear arm in the corner
    b.box(-w / 2, -w / 2 + depth, 0, seat - 0.06, -d / 2 + depth, d / 2, C.wood, C.woodTop, EDGE_FURN);
    b.box(-w / 2, -w / 2 + back, 0, h, -d / 2 + back, d / 2, C.wood, C.woodTop, EDGE_FURN);
    b.box(-w / 2 + back, -w / 2 + depth, seat - 0.06, seat + 0.02, -d / 2 + back, d / 2 - 0.02, C.cushion, C.cushion, EDGE_FAINT);
  }
}

function barStool(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r * 0.8, 0, 0.02, C.metal, C.metal, 12);
  b.cyl(0, 0, 0.025, 0.02, h - 0.05, C.metal, C.metal, 6);
  b.cyl(0, 0, r * 0.75, h * 0.35, h * 0.35 + 0.015, C.metal, C.metal, 12, EDGE_FAINT);
  b.cyl(0, 0, r, h - 0.05, h, C.cushion, C.fabricTop, 14, EDGE_FURN);
}

function officeChair(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  // five-star base as two crossed bars and a hub, gas lift, seat and back
  b.box(-r, r, 0.04, 0.08, -0.03, 0.03, C.metal);
  b.box(-0.03, 0.03, 0.04, 0.08, -r, r, C.metal);
  b.cyl(0, 0, 0.06, 0.02, 0.1, C.dark, C.dark, 8);
  b.cyl(0, 0, 0.025, 0.1, 0.44, C.metal, C.metal, 6);
  b.box(-r * 0.75, r * 0.75, 0.44, 0.52, -r * 0.7, r * 0.75, C.fabric, C.cushion, EDGE_FURN);
  b.box(-r * 0.7, r * 0.7, 0.58, h, -r * 0.78, -r * 0.62, C.fabric, C.fabricTop, EDGE_FURN);
  b.box(-0.03, 0.03, 0.5, 0.62, -r * 0.72, -r * 0.62, C.metal);
}

function stool(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, 0.08, 0.04, 0.05, C.wood);
  b.box(-w / 2, w / 2, 0.08, h, -d / 2, d / 2, C.fabric, C.cushion, EDGE_FURN);
}

function kitchenWall(b: Builder, w: number, d: number, h: number): void {
  // hangs above the worktop
  const y0 = 1.45;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  fronts(b, -w / 2, w / 2, y0, y0 + h, d / 2 - 0.02, Math.max(1, Math.round(w / 0.5)), y0 + 0.08);
}

function kitchenTall(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  const z = d / 2 - 0.02;
  // oven with a dark glass door and a glowing handle, fronts above and below
  b.box(-w / 2 + 0.03, w / 2 - 0.03, 0.85, 1.45, z, z + 0.01, C.dark, C.dark, EDGE_GLOW);
  b.seg(-w / 2 + 0.08, 1.4, z + 0.02, w / 2 - 0.08, 1.4, z + 0.02, EDGE_GLOW);
  for (const y of [0.85, 1.45]) b.seg(-w / 2, y, z, w / 2, y, z, EDGE_FAINT);
  b.seg(w / 2 - 0.06, 0.5, z + 0.012, w / 2 - 0.06, 0.7, z + 0.012, EDGE_GLOW);
  b.seg(w / 2 - 0.06, 1.6, z + 0.012, w / 2 - 0.06, 1.8, z + 0.012, EDGE_GLOW);
}

function island(b: Builder, w: number, d: number, h: number): void {
  const inner = d - 0.3;
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0.08, h - 0.04, -d / 2 + 0.02, -d / 2 + inner, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.07, w / 2 - 0.07, 0, 0.08, -d / 2 + 0.04, -d / 2 + inner - 0.04, C.dark);
  fronts(b, -w / 2 + 0.05, w / 2 - 0.05, 0.08, h - 0.04, -d / 2 + inner, Math.max(2, Math.round(w / 0.6)), h - 0.2);
  // worktop overhangs on the front for bar stools
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function dishwasher(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.02, h - 0.04, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  b.seg(-w / 2 + 0.08, h - 0.12, d / 2 - 0.008, w / 2 - 0.08, h - 0.12, d / 2 - 0.008, EDGE_GLOW);
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
}

function laundry(b: Builder, w: number, d: number, h: number, dryer: boolean): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2 - 0.02, C.white, C.whiteTop, EDGE_FURN);
  const z = d / 2 - 0.012;
  // control panel line and a round door drawn on the front
  b.seg(-w / 2, h - 0.14, z, w / 2, h - 0.14, z, EDGE_FAINT);
  b.seg(w / 2 - 0.16, h - 0.07, z, w / 2 - 0.08, h - 0.07, z, EDGE_GLOW);
  const cy = (h - 0.14) / 2 + 0.04;
  const r = Math.min(w * 0.36, (h - 0.2) * 0.42);
  const n = 20;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    b.seg(Math.cos(a0) * r, cy + Math.sin(a0) * r, z, Math.cos(a1) * r, cy + Math.sin(a1) * r, z, EDGE_GLOW);
    if (!dryer) b.seg(Math.cos(a0) * r * 0.72, cy + Math.sin(a0) * r * 0.72, z, Math.cos(a1) * r * 0.72, cy + Math.sin(a1) * r * 0.72, z, EDGE_FAINT);
  }
}

function bunkBed(b: Builder, w: number, d: number, h: number): void {
  const t = 0.05;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.box(sx * (w / 2) - (sx > 0 ? t : 0), sx * (w / 2) + (sx < 0 ? t : 0), 0, h, sz * (d / 2) - (sz > 0 ? t : 0), sz * (d / 2) + (sz < 0 ? t : 0), C.wood, C.woodTop);
  for (const y of [0.25, h - 0.55]) {
    b.box(-w / 2, w / 2, y, y + 0.08, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
    b.box(-w / 2 + 0.04, w / 2 - 0.04, y + 0.08, y + 0.24, -d / 2 + 0.05, d / 2 - 0.05, C.white, C.whiteTop, EDGE_FAINT);
    b.box(-w / 2 + 0.05, w / 2 - 0.05, y + 0.24, y + 0.33, -d / 2 + 0.08, -d / 2 + 0.4, C.whiteTop, C.whiteTop);
  }
  // guard rail on top and a ladder at the front
  b.box(-w / 2, w / 2, h - 0.2, h - 0.15, d / 2 - t, d / 2, C.wood, C.woodTop);
  const lx = w / 2 - 0.35;
  for (const x of [lx - 0.18, lx + 0.18]) b.seg(x, 0, d / 2 + 0.02, x, h - 0.15, d / 2 + 0.02, EDGE_FURN);
  for (let y = 0.3; y < h - 0.2; y += 0.28) b.seg(lx - 0.18, y, d / 2 + 0.02, lx + 0.18, y, d / 2 + 0.02, EDGE_FAINT);
}

function roundTable(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r * 0.4, 0, 0.03, C.metal, C.metal, 12);
  b.cyl(0, 0, 0.05, 0.03, h - 0.04, C.wood, C.wood, 8);
  b.cyl(0, 0, r, h - 0.04, h, C.wood, C.woodTop, 20, EDGE_FURN);
}

function coffeeTable(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, h - 0.03, 0.04, 0.03, C.wood);
  b.box(-w / 2, w / 2, h - 0.03, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0.1, 0.13, -d / 2 + 0.05, d / 2 - 0.05, C.body, C.bodyTop, EDGE_FAINT);
}

function tvWall(b: Builder, w: number, d: number, h: number): void {
  // flat screen on a wall bracket, centred at 1.3 m
  const y0 = 1.3 - h / 2;
  b.box(-0.12, 0.12, y0 + h * 0.3, y0 + h * 0.7, -d / 2, -d / 2 + 0.03, C.metal);
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2 + 0.03, d / 2, C.dark, C.dark, EDGE_GLOW);
}

/** Radiator on the wall (back at -z): panel with vertical fins, standing on short brackets. */
function radiator(b: Builder, w: number, d: number, h: number): void {
  const y0 = RADIATOR_Y;
  b.box(-w / 2 + 0.05, -w / 2 + 0.08, 0, y0, -d / 2, -d / 2 + 0.03, C.metal);
  b.box(w / 2 - 0.08, w / 2 - 0.05, 0, y0, -d / 2, -d / 2 + 0.03, C.metal);
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2 + 0.02, d / 2, C.white, C.whiteTop, EDGE_FURN);
  const n = Math.max(3, Math.round(w / 0.1));
  for (let i = 1; i < n; i++) {
    const x = -w / 2 + (w / n) * i;
    b.seg(x, y0 + 0.03, d / 2 + 0.002, x, y0 + h - 0.03, d / 2 + 0.002, EDGE_FAINT);
  }
}

/** An air conditioner's indoor unit (a wall split unit): a long body, the air outlet with its louvre at the bottom. */
function acUnit(b: Builder, w: number, d: number, h: number): void {
  const y0 = AC_Y;
  b.box(-w / 2, w / 2, y0 + 0.07, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w / 2, w / 2, y0, y0 + 0.07, -d / 2, d / 2 - 0.05, C.white, C.white, EDGE_FURN);
  b.box(-w / 2 + 0.04, w / 2 - 0.04, y0 + 0.012, y0 + 0.06, d / 2 - 0.05, d / 2 - 0.02, C.dark);
  // a line across the front and the little display
  b.seg(-w / 2 + 0.03, y0 + h * 0.55, d / 2 + 0.002, w / 2 - 0.03, y0 + h * 0.55, d / 2 + 0.002, EDGE_FAINT);
  b.seg(w / 2 - 0.14, y0 + h * 0.75, d / 2 + 0.002, w / 2 - 0.07, y0 + h * 0.75, d / 2 + 0.002, EDGE_GLOW);
}

/** A ring of glowing line on a front face (z = front), for dials and fans. */
function ring(b: Builder, cx: number, cy: number, r: number, z: number, n = 20): void {
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    b.seg(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, z, cx + Math.cos(a1) * r, cy + Math.sin(a1) * r, z, EDGE_GLOW);
  }
}

/**
 * Solar inverter on the wall (from 1.1 m): a flat box with a display and a status line; "slim" a tall narrow
 * one with a vertical light strip; "hybrid" with a round dial and two fans below.
 */
function inverter(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  const y0 = 1.1;
  const z = d / 2;
  if (variant === "slim") {
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
    b.seg(-w * 0.25, y0 + h * 0.15, z + 0.004, -w * 0.25, y0 + h * 0.85, z + 0.004, EDGE_GLOW);
    b.box(-w * 0.1, w * 0.3, y0 + h * 0.7, y0 + h * 0.85, z, z + 0.005, C.dark);
    return;
  }
  if (variant === "hybrid") {
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
    ring(b, 0, y0 + h * 0.66, Math.min(w, h) * 0.22, z + 0.004);
    b.seg(-w * 0.08, y0 + h * 0.66, z + 0.005, w * 0.08, y0 + h * 0.66, z + 0.005, EDGE_GLOW);
    for (const s of [-1, 1]) ring(b, s * w * 0.22, y0 + h * 0.2, Math.min(w, h) * 0.1, -d / 2 - 0.002, 12);
    return;
  }
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  b.box(-w * 0.28, w * 0.28, y0 + h * 0.58, y0 + h * 0.82, d / 2, d / 2 + 0.006, C.dark);
  b.seg(-w * 0.3, y0 + h * 0.45, d / 2 + 0.004, w * 0.3, y0 + h * 0.45, d / 2 + 0.004, EDGE_GLOW);
  // cooling fins at the sides
  for (const s of [-1, 1]) for (let i = 1; i < 6; i++) b.seg((s * w) / 2 + s * 0.002, y0 + (h * i) / 6, -d / 2 + 0.03, (s * w) / 2 + s * 0.002, y0 + (h * i) / 6, d / 2 - 0.03, EDGE_FAINT);
}

/** Pool pump (on the floor): the motor lying along x with its fan cover, the pre-filter pot with a lid at one end. */
function poolPump(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(d, h) * 0.32;
  // base plate
  b.box(-w / 2, w / 2, 0, 0.03, -d / 2, d / 2, C.dark);
  // motor: a row of short cylinders lying along x (cylinders stand upright, so a box with rings stands in)
  b.box(-w / 2, w * 0.1, 0.05, 0.05 + r * 2, -r, r, C.metal, C.metal, EDGE_FURN);
  for (const x of [-w * 0.4, -w * 0.25, -w * 0.1]) b.seg(x, 0.05 + r * 2 + 0.003, -r, x, 0.05 + r * 2 + 0.003, r, EDGE_FAINT);
  // the pre-filter pot with its clear lid and the glowing ring that shows the pump runs
  b.cyl(w * 0.28, 0, Math.min(w * 0.2, d * 0.45), 0.03, h * 0.82, C.dark, C.body, 14, EDGE_FURN);
  b.cyl(w * 0.28, 0, Math.min(w * 0.2, d * 0.45) * 0.9, h * 0.82, h, C.glass, C.glass, 14);
  const rr = Math.min(w * 0.2, d * 0.45) * 0.95;
  for (let i = 0; i < 16; i++) {
    const a0 = (i / 16) * Math.PI * 2;
    const a1 = ((i + 1) / 16) * Math.PI * 2;
    b.seg(w * 0.28 + Math.cos(a0) * rr, h * 0.83, Math.sin(a0) * rr, w * 0.28 + Math.cos(a1) * rr, h * 0.83, Math.sin(a1) * rr, EDGE_GLOW);
  }
}

/** Sand filter: a round tank on a foot with its multiport valve on top (six- or four-way) or at its side. */
function poolFilter(b: Builder, w: number, d: number, h: number, valve: string | null): void {
  const r = Math.min(w, d) / 2;
  b.cyl(0, 0, r * 0.95, 0, h * 0.08, C.dark, C.dark, 16);
  b.cyl(0, 0, r, h * 0.08, h * 0.78, C.dark, C.body, 18, EDGE_FURN);
  b.cyl(0, 0, r * 0.75, h * 0.78, h * 0.84, C.dark, C.body, 16);
  if (valve === "side6") {
    // the valve at the right side: a block with the round dial facing forward and its three connections
    const x0 = r * 0.9;
    b.box(x0, x0 + 0.12, h * 0.3, h * 0.66, -0.07, 0.07, C.dark, C.metal, EDGE_FURN);
    ring(b, x0 + 0.06, h * 0.56, 0.05, 0.075, 16);
    b.box(x0 + 0.04, x0 + 0.08, h * 0.66, h * 0.72, -0.015, 0.015, C.dark, C.body);
    return;
  }
  // the six-way valve: a flat round head with the dial and the handle
  b.cyl(0, 0, r * 0.45, h * 0.84, h * 0.95, C.dark, C.metal, 16, EDGE_FURN);
  const rr = r * 0.4;
  for (let i = 0; i < 16; i++) {
    const a0 = (i / 16) * Math.PI * 2;
    const a1 = ((i + 1) / 16) * Math.PI * 2;
    b.seg(Math.cos(a0) * rr, h * 0.955, Math.sin(a0) * rr, Math.cos(a1) * rr, h * 0.955, Math.sin(a1) * rr, EDGE_GLOW);
  }
  b.box(-0.02, 0.02, h * 0.95, h, -r * 0.35, r * 0.35, C.dark, C.body);
}

/** Heat pump (outside or in the technical room): a wide box with a round fan grille in front and fins at the side. */
function poolHeatPump(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0.06, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  for (const x of [-w * 0.4, w * 0.4]) b.box(x - 0.03, x + 0.03, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.02, C.dark);
  const r = Math.min(h * 0.38, w * 0.3);
  const cx = -w * 0.15;
  const cy = h * 0.53;
  ring(b, cx, cy, r, d / 2 + 0.004, 24);
  ring(b, cx, cy, r * 0.55, d / 2 + 0.004, 16);
  b.seg(cx - r, cy, d / 2 + 0.005, cx + r, cy, d / 2 + 0.005, EDGE_FAINT);
  b.seg(cx, cy - r, d / 2 + 0.005, cx, cy + r, d / 2 + 0.005, EDGE_FAINT);
  // the display at the right
  b.box(w * 0.22, w * 0.42, h * 0.62, h * 0.8, d / 2, d / 2 + 0.006, C.dark);
  b.seg(w * 0.25, h * 0.71, d / 2 + 0.008, w * 0.39, h * 0.71, d / 2 + 0.008, EDGE_GLOW);
  for (let i = 1; i < 8; i++) b.seg(w / 2 + 0.002, h * (0.1 + i * 0.1), -d / 2 + 0.03, w / 2 + 0.002, h * (0.1 + i * 0.1), d / 2 - 0.03, EDGE_FAINT);
}

/** Dosing unit (on the wall from 0.9 m): a box with two pump heads and two canisters standing below it. */
function poolDosing(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.9;
  b.box(-w / 2, w / 2, y0, y0 + h * 0.45, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  for (const s of [-1, 1]) ring(b, s * w * 0.22, y0 + h * 0.22, Math.min(w, h) * 0.09, d / 2 + 0.004, 12);
  b.seg(-w * 0.35, y0 + h * 0.4, d / 2 + 0.004, w * 0.35, y0 + h * 0.4, d / 2 + 0.004, EDGE_GLOW);
  // canisters (pH minus, chlorine) on the floor
  for (const s of [-1, 1]) b.box(s * w * 0.25 - w * 0.18, s * w * 0.25 + w * 0.18, 0, h * 0.5, -d / 2, d / 2, C.white, C.glass, EDGE_FAINT);
}

/** Ball valve: a short pipe piece with the blue lever on top. */
function poolValve(b: Builder, w: number, d: number, h: number): void {
  const y0 = POOL_VALVE_Y - h * 0.4;
  b.box(-w / 2, w / 2, y0 + h * 0.25, y0 + h * 0.6, -d * 0.25, d * 0.25, C.metal, C.metal, EDGE_FURN);
  b.box(-w * 0.12, w * 0.12, y0 + h * 0.6, y0 + h * 0.8, -d * 0.12, d * 0.12, C.dark);
  b.box(-w * 0.1, w * 0.45, y0 + h * 0.8, y0 + h, -d * 0.15, d * 0.15, C.accent, C.accent);
}

/** The grid connection at the edge of the plot: a small dark street cabinet with a glowing lid edge. */
function gridCabinet(b: Builder, w: number, d: number, h: number): void {
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
  b.box(-w / 2 - 0.01, w / 2 + 0.01, h, h + 0.03, -d / 2 - 0.01, d / 2 + 0.01, C.dark, C.body);
  b.seg(-w / 2, h + 0.032, d / 2 + 0.01, w / 2, h + 0.032, d / 2 + 0.01, EDGE_GLOW);
  b.seg(-w * 0.3, h * 0.55, d / 2 + 0.003, w * 0.3, h * 0.55, d / 2 + 0.003, EDGE_FAINT);
}

/** Wallbox (from 1.0 m): a compact box with a glowing ring and the charging cable hanging below. */
function wallbox(b: Builder, w: number, d: number, h: number): void {
  const y0 = 1.0;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
  const r = Math.min(w, h) * 0.28;
  const cy = y0 + h * 0.58;
  const n = 16;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    b.seg(Math.cos(a0) * r, cy + Math.sin(a0) * r, d / 2 + 0.003, Math.cos(a1) * r, cy + Math.sin(a1) * r, d / 2 + 0.003, EDGE_GLOW);
  }
  // the coiled cable below the box
  b.box(-0.015, 0.015, y0 - 0.35, y0, d / 2 - 0.03, d / 2, C.dark);
  b.box(-0.06, 0.06, y0 - 0.42, y0 - 0.35, d / 2 - 0.05, d / 2, C.dark, C.body);
}

/** Meter cabinet on the wall (from 0.4 m): a tall box with the meter window and the glowing pulse LED. */
function meterCabinet(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.4;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  // the door's edge and handle
  b.seg(-w / 2 + 0.025, y0 + 0.025, d / 2 + 0.003, -w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.seg(-w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, w / 2 - 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.box(w / 2 - 0.06, w / 2 - 0.035, y0 + h * 0.5 - 0.05, y0 + h * 0.5 + 0.05, d / 2, d / 2 + 0.012, C.dark);
  // the meter behind its window with the display line
  b.box(-w * 0.3, w * 0.3, y0 + h * 0.6, y0 + h * 0.8, d / 2, d / 2 + 0.005, C.dark);
  b.seg(-w * 0.22, y0 + h * 0.7, d / 2 + 0.008, w * 0.22, y0 + h * 0.7, d / 2 + 0.008, EDGE_GLOW);
}

/**
 * Home battery: a tower of stacked modules with a charge bar; "wall" a flat battery hanging at hip height
 * with a light bar; "cube" a compact box (a balcony battery) with a light bar and a handle.
 */
function homeBattery(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  if (variant === "wall") {
    const y0 = 0.5;
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
    b.seg(-w * 0.3, y0 + h * 0.9, d / 2 + 0.004, w * 0.3, y0 + h * 0.9, d / 2 + 0.004, EDGE_GLOW);
    b.seg(-w * 0.3, y0 + h * 0.08, d / 2 + 0.003, w * 0.3, y0 + h * 0.08, d / 2 + 0.003, EDGE_FAINT);
    return;
  }
  if (variant === "cube") {
    b.box(-w / 2 + 0.01, w / 2 - 0.01, 0, 0.03, -d / 2 + 0.01, d / 2 - 0.01, C.dark);
    b.box(-w / 2, w / 2, 0.03, h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
    b.seg(-w * 0.35, h * 0.85, d / 2 + 0.004, w * 0.35, h * 0.85, d / 2 + 0.004, EDGE_GLOW);
    b.box(-w * 0.15, w * 0.15, h, h + 0.025, -0.012, 0.012, C.dark);
    return;
  }
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.02, C.dark);
  const modules = Math.max(2, Math.round((h - 0.06) / 0.3));
  const mh = (h - 0.06) / modules;
  for (let i = 0; i < modules; i++) b.box(-w / 2, w / 2, 0.06 + i * mh + 0.004, 0.06 + (i + 1) * mh, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  // charge bar: five short segments
  for (let k = 0; k < 5; k++) {
    const y = 0.06 + h * 0.18 + k * ((h - 0.3) / 5);
    b.seg(-w * 0.04, y, d / 2 + 0.003, w * 0.04, y, d / 2 + 0.003, EDGE_GLOW);
  }
}

/** Height of the underside of a radiator. */
export const RADIATOR_Y = 0.12;
/** Height of the bottom of an air conditioner's indoor unit (as builtinBase). */
export const AC_Y = 2.05;

/**
 * The size of a picture (cover, app icon) on a screen of sw × sh metres: the whole picture visible ("contain"),
 * with a dark margin that grows with the screen – 4 cm on a TV, a few millimetres on a small smart display
 * (a fixed 4 cm left only a sliver on a 5″ display, #799).
 */
export function screenPictureSize(sw: number, sh: number, aspect: number): { w: number; h: number } {
  const m = Math.min(0.04, 0.08 * Math.min(sw, sh));
  const w = Math.min(sw - m, (sh - m) * aspect);
  return { w, h: w / aspect };
}

/**
 * Screen of a TV or monitor in local coordinates (x across, y up, z = its front face), for the glow
 * shown while the linked device is on. Null for furniture without a screen.
 */
export function screenRect(f: Furniture, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  const r = screenRectUnmirrored(f, floor);
  return r && f.mirror ? { ...r, x0: -r.x1, x1: -r.x0 } : r;
}

function screenRectUnmirrored(f: Furniture, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  const w = Math.max(0.05, f.w);
  const d = Math.max(0.05, f.d);
  const h = Math.max(0.005, f.h);
  const part = packScreen(f.type);
  if (part) {
    // the screen part's front face, at the item's mount height
    const base = floor ? mountBase(floor, f) : 0;
    const x0 = (part.x - part.w / 2) * w;
    const x1 = (part.x + part.w / 2) * w;
    const inset = Math.min(0.02, (x1 - x0) * 0.05);
    return { x0: x0 + inset, x1: x1 - inset, y0: base + part.y * h + inset, y1: base + (part.y + part.h) * h - inset, z: (part.z + part.d / 2) * d };
  }
  // built-in models are lifted as a whole by their mount height
  const lift = floor && f.type !== "fridge_smart" ? mountBase(floor, f) - builtinBase(f) : 0;
  const r = builtInScreen(f, w, d, h, floor);
  return r ? { ...r, y0: r.y0 + lift, y1: r.y1 + lift } : null;
}

function builtInScreen(f: Furniture, w: number, d: number, h: number, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  // Pool Pro: the pump's motor side, the heat pump's grille, the filter's valve head, the dosing unit's front
  if (f.type === "pool_pump") {
    const r = Math.min(d, h) * 0.32;
    return { x0: -w / 2 + 0.03, x1: w * 0.08, y0: 0.07, y1: 0.03 + r * 2, z: r + 0.004 };
  }
  if (f.type === "pool_heat_pump") return { x0: -w / 2 + 0.05, x1: w * 0.15, y0: h * 0.15, y1: h * 0.9, z: d / 2 + 0.003 };
  if (f.type === "pool_filter") {
    const r = Math.min(w, d) / 2;
    return { x0: -r * 0.4, x1: r * 0.4, y0: h * 0.85, y1: h * 0.94, z: r * 0.45 + 0.004 };
  }
  if (f.type === "pool_dosing") return { x0: -w * 0.4, x1: w * 0.4, y0: 0.9 + h * 0.05, y1: 0.9 + h * 0.4, z: d / 2 + 0.003 };
  if (f.type === "tv_board") {
    const tw = Math.min(w * 0.8, 1.45);
    const th = tw * 0.56;
    return { x0: -tw / 2 + 0.02, x1: tw / 2 - 0.02, y0: h + 0.12, y1: h + 0.08 + th, z: -d / 2 + 0.165 };
  }
  if (f.type === "tv_wall") {
    const y0 = 1.3 - h / 2;
    return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: y0 + 0.02, y1: y0 + h - 0.02, z: d / 2 + 0.003 };
  }
  if (f.type === "desk") return { x0: -0.28, x1: 0.28, y0: h + 0.1, y1: h + 0.4, z: -d / 2 + 0.115 };
  if (f.type === "fridge_smart") {
    // the screen sits on the right door (mirrored: the door's u runs to the left from its hinge at +w/2)
    const base = floor ? mountBase(floor, f) : 0;
    return { x0: 0.06, x1: w / 2 - 0.06, y0: base + h * 0.52 + 0.01, y1: base + h * 0.86 - 0.01, z: d / 2 + 0.006 };
  }
  // glowing fronts of appliances that run and of a radiator that heats
  if (f.type === "radiator") return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: RADIATOR_Y + 0.02, y1: RADIATOR_Y + h - 0.02, z: d / 2 + 0.004 };
  // an air conditioner glows at its air outlet in the colour of its mode
  if (f.type === "ac_unit") return { x0: -w / 2 + 0.05, x1: w / 2 - 0.05, y0: AC_Y + 0.015, y1: AC_Y + 0.06, z: d / 2 - 0.015 };
  if (f.type === "washer" || f.type === "dryer") {
    const cy = (h - 0.14) / 2 + 0.04;
    const r = Math.min(w * 0.36, (h - 0.2) * 0.42) * 0.8;
    return { x0: -r, x1: r, y0: cy - r, y1: cy + r, z: d / 2 - 0.004 };
  }
  if (f.type === "dishwasher") return { x0: -w / 2 + 0.06, x1: w / 2 - 0.06, y0: h - 0.16, y1: h - 0.08, z: d / 2 - 0.004 };
  if (f.type === "bbq_indoor") {
    const counterY = Math.min(0.92, h * 0.4);
    const mouthTop = Math.max(counterY + 0.12, Math.min(counterY + 0.62, h * 0.68));
    const wallT = Math.max(0.06, Math.min(0.13, w * 0.13));
    return { x0: -w / 2 + wallT + 0.02, x1: w / 2 - wallT - 0.02, y0: counterY + 0.05, y1: mouthTop - 0.04, z: -d / 2 + Math.max(0.05, Math.min(0.1, d * 0.15)) + 0.004 };
  }
  return null;
}

/** Round things cast a round shadow: a round table, a plant, a pack item whose largest part is an upright cylinder (#719). */
export function roundFootprint(f: Pick<Furniture, "type"> & { w?: number; d?: number }): boolean {
  if (f.type === "table_round" || f.type === "plant" || f.type === "plant_jiboia") return true;
  if (f.type === "plant_moreia" || f.type === "plant_podocarpo" || f.type === "plant_orquidea") {
    return f.w === undefined || f.d === undefined || Math.max(f.w, f.d) <= Math.min(f.w, f.d) * 1.35;
  }
  const item = packItem(f.type);
  if (!item?.parts.length) return false;
  const big = item.parts.reduce((m, p) => (p.w * p.d > m.w * m.d ? p : m), item.parts[0]);
  return big.shape === "cyl" && (big.axis ?? "y") === "y" && big.w >= 0.85 && big.d >= 0.85;
}

/**
 * Soft contact shadow under an item: a dark core that fades out beyond its footprint – round under round things.
 * `y`: the ground it lies on (an item in the garden stands lower than the floor, #708).
 */
function contactShadow(shadow: GeoBuffer, tf: Tf, w: number, d: number, strength: number, round = false, ground = 0): void {
  const grow = Math.min(0.14, Math.max(0.06, Math.min(w, d) * 0.15));
  const dark = new Color(1 - strength, 1 - strength, 1 - strength);
  const clear = new Color(1, 1, 1);
  const y = ground + 0.003;
  if (round) {
    const P = (p: Vec2) => [p[0], y, p[1]];
    const n = 24;
    const at = (i: number, rx: number, rz: number) => tf(Math.cos((i / n) * 2 * Math.PI) * rx, Math.sin((i / n) * 2 * Math.PI) * rz);
    const s0 = shadow.p.length;
    const c = P(tf(0, 0));
    for (let i = 0; i < n; i++) {
      const a0 = P(at(i, w / 2, d / 2));
      const a1 = P(at(i + 1, w / 2, d / 2));
      const o0 = P(at(i, w / 2 + grow, d / 2 + grow));
      const o1 = P(at(i + 1, w / 2 + grow, d / 2 + grow));
      // the same turn as the square shadow's triangles
      shadow.tri(c, a0, a1, dark);
      shadow.tri(a0, o0, o1, dark, clear, clear);
      shadow.tri(a0, o1, a1, dark, clear, dark);
    }
    if (tfMirrors(tf)) flipWinding(shadow, s0);
    return;
  }
  const inner = [tf(-w / 2, -d / 2), tf(w / 2, -d / 2), tf(w / 2, d / 2), tf(-w / 2, d / 2)];
  const outer = [tf(-w / 2 - grow, -d / 2 - grow), tf(w / 2 + grow, -d / 2 - grow), tf(w / 2 + grow, d / 2 + grow), tf(-w / 2 - grow, d / 2 + grow)];
  const P = (p: Vec2) => [p[0], y, p[1]];
  const s0 = shadow.p.length;
  shadow.tri(P(inner[0]), P(inner[1]), P(inner[2]), dark);
  shadow.tri(P(inner[0]), P(inner[2]), P(inner[3]), dark);
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    shadow.tri(P(inner[i]), P(outer[i]), P(outer[j]), dark, clear, clear);
    shadow.tri(P(inner[i]), P(outer[j]), P(inner[j]), dark, clear, dark);
  }
  if (tfMirrors(tf)) flipWinding(shadow, s0);
}

/** `still`: a picture of the item (a preview), so a pack's robot vacuum keeps its robot instead of driving it (#645). */
export function pushFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base = 0, still = false): void {
  // a mirrored item needs no rewinding here: boxes, lofts and upright cylinders wind themselves (ccw),
  // lying cylinders and the contact shadow rewind themselves when the transform mirrors (#159)
  pushUpright(buf, lines, shadow, f, base, still);
}

/** Swap the second and third vertex of every triangle from `from` on (positions, colours, folds, uvs, tiles). */
export function flipWinding(buf: GeoBuffer, from: number): void {
  const swap = (arr: number[] | null, start: number, n: number) => {
    if (!arr) return;
    for (let k = 0; k < n; k++) {
      const i = start + n + k;
      const j = start + 2 * n + k;
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  };
  for (let i = from; i < buf.p.length; i += 9) {
    const tri = i / 9;
    swap(buf.p, i, 3);
    swap(buf.c, i, 3);
    swap(buf.f, tri * 3, 1);
    swap(buf.uv, tri * 6, 2);
    swap(buf.tile, tri * 6, 2);
  }
}

function pushUpright(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number, still = false): void {
  // pack items place their parts at `base` themselves; built-in models are drawn on the floor and
  // lifted as a whole (a dryer on the washer, a shelf on the wall), without a shadow on the floor
  // the mount height is absolute: a wall cabinet drawn at 1.45 m moves by the difference (up or down)
  const lift = packItem(f.type) ? 0 : base - builtinBase(f);
  if (packItem(f.type) || Math.abs(lift) < 0.001) return buildFurniture(buf, lines, shadow, f, base, still);
  const p0 = buf.p.length;
  const l0 = lines.p.length;
  const s0 = shadow.p.length;
  buildFurniture(buf, lines, base < 0.05 ? shadow : new GeoBuffer(), f, 0);
  for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
  for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
  // in the garden the item stands lower than the floor: its shadow goes down with it
  if (base < 0) for (let i = s0 + 1; i < shadow.p.length; i += 3) shadow.p[i] += lift;
}

function buildFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number, still = false): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  // mirrored: the item's own x runs the other way
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  const b = new Builder(buf, lines, tf);
  const w = Math.max(0.05, f.w);
  const d = Math.max(0.05, f.d);
  const h = Math.max(0.005, f.h);
  switch (f.type) {
    case "sofa":
      sofa(b, w, d, h, Math.max(1, Math.round((w - 0.4) / 0.62)));
      break;
    case "armchair":
      sofa(b, w, d, h, 1);
      break;
    case "sofa_l":
      cornerSofa(b, w, d, h, false);
      break;
    case "sofa_u":
      cornerSofa(b, w, d, h, true);
      break;
    case "bed":
      bed(b, w, d, h);
      break;
    case "chair":
      chair(b, w, d, h);
      break;
    case "table":
      table(b, w, d, h);
      break;
    case "desk":
      desk(b, w, d, h);
      break;
    case "nightstand":
      cabinet(b, w, d, h, 1, h * 0.72, true);
      b.seg(-w / 2, h * 0.5, d / 2 - 0.02, w / 2, h * 0.5, d / 2 - 0.02, EDGE_FAINT);
      break;
    case "wardrobe":
      cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.5)), h * 0.5);
      break;
    case "shelf":
      shelf(b, w, d, h);
      break;
    case "kitchen":
      kitchen(b, w, d, h);
      break;
    case "fridge":
      fridge(b, w, d, h);
      break;
    case "fridge_smart":
      fridgeSmart(b, w, d, h);
      break;
    case "waste_bin": {
      const c0 = buf.c.length;
      wasteBin(b, w, d, h, binShape(f), binColors(f, householdCountry()));
      // the light looks keep only bright saturated colours: the shading towards the floor made the lower half of a
      // bin fall back to the look's grey (#609), so its coloured parts keep their brightness all the way down
      if (lightLook) keepBright(buf.c, c0);
      break;
    }
    case "mailbox": {
      // like the other built-in wall models it is drawn at its own height (a wall mailbox at 1 m, a bank at 0.75 m)
      const p0 = buf.p.length;
      const l0 = lines.p.length;
      mailbox(b, w, d, h, mailboxShape(f));
      const lift = builtinBase(f);
      for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
      for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
      if (lift > 0) return; // hangs on the wall: no shadow on the floor
      break;
    }
    case "wifi_ap":
      // under the ceiling or on the wall: lifted by its mount height, no shadow
      wifiAp(b, w, d, h, f.variant === "wall");
      return;
    case "water_heater":
      waterHeater(b, w, d, h, f.variant === "wall");
      if (f.variant === "wall") return;
      break;
    case "wall_switch":
    case "wall_socket": {
      // drawn at its own height like the other built-in wall models; never a shadow on the floor
      const p0 = buf.p.length;
      const l0 = lines.p.length;
      wallPlate(b, w, d, h, gangsOf(f).length, f.type === "wall_socket", f.variant === "outdoor");
      const lift = builtinBase(f);
      for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
      for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
      return;
    }
    case "alarm_keypad": {
      const p0 = buf.p.length;
      const l0 = lines.p.length;
      alarmKeypad(b, w, d, h);
      const lift = builtinBase(f);
      for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
      for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
      return;
    }
    case "awning":
      // drawn with its moving fabric and arms by pushAwning (it runs in and out with its cover)
      return;
    case "stove":
      stove(b, w, d, h);
      break;
    case "bbq_indoor": {
      const c0 = buf.c.length;
      bbqIndoor(b, w, d, h, f.variant ?? null);
      if (lightLook) keepBright(buf.c, c0);
      break;
    }
    case "sink":
      sink(b, w, d, h);
      break;
    case "bathtub":
      bathtub(b, w, d, h);
      break;
    case "shower":
      shower(b, w, d, h);
      break;
    case "wc":
      wc(b, w, d, h);
      break;
    case "washbasin":
      washbasin(b, w, d, h);
      break;
    case "tv_board":
      tvBoard(b, w, d, h);
      break;
    case "plant":
      plant(b, w, d, h);
      break;
    case "plant_moreia": {
      const c0 = buf.c.length;
      plantMoreia(b, w, d, h);
      if (lightLook) keepBright(buf.c, c0);
      break;
    }
    case "plant_podocarpo": {
      const c0 = buf.c.length;
      plantPodocarpo(b, w, d, h);
      if (lightLook) keepBright(buf.c, c0);
      break;
    }
    case "plant_jiboia": {
      const c0 = buf.c.length;
      plantJiboia(b, w, d, h, f.variant ?? null);
      if (lightLook) keepBright(buf.c, c0);
      break;
    }
    case "plant_orquidea": {
      const c0 = buf.c.length;
      plantOrquidea(b, w, d, h, f.variant ?? null);
      if (lightLook) keepBright(buf.c, c0);
      break;
    }
    case "rug":
      rug(b, w, d);
      return; // flat, no contact shadow
    case "stairs":
      stairs(b, w, d, h);
      break;
    case "stairs_u":
      stairsU(b, w, d, h);
      break;
    case "stairwell":
      return; // only a hole in the floor (see stairHoles in build.ts), nothing to draw
    case "sideboard":
      sideboard(b, w, d, h);
      break;
    case "dresser":
      dresser(b, w, d, h);
      break;
    case "tall_cabinet":
      cabinet(b, w, d, h, 1, h * 0.5);
      break;
    case "coat_rack":
      coatRack(b, w, d, h);
      break;
    case "bench":
      bench(b, w, d, h, false);
      break;
    case "corner_bench":
      bench(b, w, d, h, true);
      break;
    case "bar_stool":
      barStool(b, w, d, h);
      break;
    case "office_chair":
      officeChair(b, w, d, h);
      break;
    case "stool":
      stool(b, w, d, h);
      break;
    case "kitchen_wall":
      kitchenWall(b, w, d, h);
      return; // hangs on the wall, no shadow on the floor
    case "kitchen_tall":
      kitchenTall(b, w, d, h);
      break;
    case "island":
      island(b, w, d, h);
      break;
    case "worktop":
      // only the 4 cm top at its height, nothing below it (no contact shadow)
      b.box(-w / 2, w / 2, Math.max(0, h - 0.04), h, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);
      return;
    case "dishwasher":
      dishwasher(b, w, d, h);
      break;
    case "washer":
      laundry(b, w, d, h, false);
      break;
    case "dryer":
      laundry(b, w, d, h, true);
      break;
    case "bunk_bed":
      bunkBed(b, w, d, h);
      break;
    case "table_round":
      roundTable(b, w, d, h);
      break;
    case "coffee_table":
      coffeeTable(b, w, d, h);
      break;
    case "tv_wall":
      tvWall(b, w, d, h);
      return;
    case "parking": {
      // only the marking of the spot: a vehicle standing in it is added by the viewer
      const y = 0.012;
      const corners: [number, number][] = [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]];
      for (let i = 0; i < 4; i++) b.seg(corners[i][0], y, corners[i][1], corners[(i + 1) % 4][0], y, corners[(i + 1) % 4][1], EDGE_FAINT);
      // an arrow head at the front: the direction the vehicle faces
      b.seg(-w * 0.15, y, d / 2 - 0.45, 0, y, d / 2 - 0.2, EDGE_FURN);
      b.seg(0, y, d / 2 - 0.2, w * 0.15, y, d / 2 - 0.45, EDGE_FURN);
      return;
    }
    case "robot_vacuum":
      // only the dock: the robot itself is drawn (and moved) by the viewer
      b.box(-w * 0.45, w * 0.45, 0, h, -d / 2, -d / 2 + d * 0.3, C.white, C.whiteTop, EDGE_FURN);
      b.box(-w * 0.2, w * 0.2, h * 0.5, h * 0.62, -d / 2 + d * 0.3, -d / 2 + d * 0.31, C.accent);
      return;
    case "radiator":
      radiator(b, w, d, h);
      return; // on the wall, no shadow on the floor
    case "ac_unit":
      acUnit(b, w, d, h);
      return;
    case "inverter":
      inverter(b, w, d, h, f.variant ?? null);
      return;
    case "grid_point":
      gridCabinet(b, w, d, h);
      break;
    case "wallbox":
      wallbox(b, w, d, h);
      return;
    case "pool_pump":
      poolPump(b, w, d, h);
      break;
    case "pool_filter":
      poolFilter(b, w, d, h, f.variant ?? null);
      break;
    case "pool_heat_pump":
      poolHeatPump(b, w, d, h);
      break;
    case "pool_dosing":
      poolDosing(b, w, d, h);
      break;
    case "pool_valve":
      poolValve(b, w, d, h);
      return;
    case "meter":
      meterCabinet(b, w, d, h);
      return;
    case "home_battery":
      homeBattery(b, w, d, h, f.variant ?? null);
      if (f.variant === "wall") return;
      break;
    default: {
      const item = packItem(f.type);
      if (item) {
        // a motorised curtain's fabric or a roll-down screen's cloth is drawn with its cover's state (pushPackMotion);
        // a pack's robot vacuum drives around as the viewer's robot (pushPackRobot), only its dock stays here (#645)
        const motion = packMotion(f.type);
        const skip = motion ? (p: PackPart) => packMovingPart(motion, p) : isRobotVacuum(f.type) && !still ? packRobotPart : null;
        packModel(b, item, w, d, h, base, null, null, skip);
        // items on furniture, walls or ceilings cast no shadow on the floor
        if (base > 0.05) return;
      } else b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
    }
  }
  contactShadow(shadow, tf, w, d, f.type === "plant" || f.type.startsWith("plant_") ? 0.35 : 0.5, roundFootprint(f), Math.min(0, base));
}

/**
 * A pack item with parts in a colour of their own ("#rrggbb", a pumpkin's orange): the light looks keep such colours
 * only while bright and strong enough, so these parts are drawn anew on a look change (#609).
 */
export function hasFixedColors(type: string): boolean {
  if (type.startsWith("plant_") || type === "bbq_indoor" || type === "alarm_keypad") return true;
  return !!packItem(type)?.parts.some((p) => p.color?.startsWith("#") || p.top?.startsWith("#"));
}

/** Colour of a pack part: a palette role (so packs follow the look) or "#rrggbb". */
function packColor(value: string | undefined, top: boolean): number | null {
  if (!value) return null;
  if (value.startsWith("#")) return parseInt(value.slice(1), 16);
  const palette = C as Record<string, number>;
  return (top ? palette[`${value}Top`] : undefined) ?? palette[value] ?? null;
}

/** Model of a pack item: its parts scaled to the item's size; glowing parts take `glow` (a lit lamp). */
function packModel(
  b: Builder,
  item: PackItem,
  w: number,
  d: number,
  h: number,
  base: number,
  glow: number | null,
  only: ((p: PackItem["parts"][number]) => boolean) | null = null,
  skip: ((p: PackItem["parts"][number]) => boolean) | null = null,
): void {
  const onlyGlow = !!only;
  const advent = item.parts.some((p) => p.advent) ? adventCandles() : 4;
  for (const q of fitParts(item, w, d, h)) {
    if (skip?.(q)) continue;
    // an Advent candle's flame burns only from its Sunday on
    if (q.advent && q.advent > advent) continue;
    // only some parts (the glowing ones of a speaker, a car's windows), a hair larger so they cover the item's own
    if (only && !only(q)) continue;
    const p = onlyGlow ? { ...q, glow: true, w: q.w + 0.006 / w, d: q.d + 0.006 / d, y: Math.max(0, q.y - 0.002 / h), h: q.h + 0.004 / h } : q;
    const lit = p.glow && glow !== null;
    const side = lit ? glow : (packColor(p.color, false) ?? C.body);
    // without a top colour, the top is the role's top shade or a little lighter
    const top = lit ? glow : (packColor(p.top, false) ?? packColor(p.color, true) ?? shade(side, 1.25).getHex());
    const y0 = base + p.y * h;
    const y1 = base + Math.min(h, (p.y + p.h) * h);
    const c0 = b.colors.length;
    // "glow" lines are as bright as the wall lines, so a pack item can be drawn like the walls
    const edges = p.edges === "glow" ? EDGE_TOP : p.edges === "faint" ? EDGE_FAINT : p.edges ? EDGE_FURN : null;
    // a turned part draws through a builder whose coordinates turn around the part's centre
    const bb = p.rot ? b.rotated(p.x * w, p.z * d, p.rot) : b;
    if (p.shape === "cyl" && (p.axis === "x" || p.axis === "z")) {
      bb.lyingCyl(p.axis, p.x * w, p.z * d, y0, y1, p.axis === "x" ? p.w * w : p.d * d, p.axis === "x" ? p.d * d : p.w * w, side, top, 14, edges);
    } else if (p.shape === "cyl") bb.cyl(p.x * w, p.z * d, (Math.min(p.w * w, p.d * d)) / 2, y0, y1, side, top, 14, edges);
    else if (p.shape === "loft") {
      const tx = p.tx ?? p.x;
      const tz = p.tz ?? p.z;
      const tw = p.tw ?? p.w;
      const td = p.td ?? p.d;
      bb.loft([(p.x - p.w / 2) * w, (p.x + p.w / 2) * w, (p.z - p.d / 2) * d, (p.z + p.d / 2) * d], [(tx - tw / 2) * w, (tx + tw / 2) * w, (tz - td / 2) * d, (tz + td / 2) * d], y0, y1, side, top, edges);
    } else bb.box((p.x - p.w / 2) * w, (p.x + p.w / 2) * w, y0, y1, (p.z - p.d / 2) * d, (p.z + p.d / 2) * d, side, top, edges);
    // a part in a colour of its own keeps it in the light looks down to the ground, like a waste bin (#609): the
    // shading towards the floor would push its lower half under the looks' signal-colour threshold (palette roles
    // follow the look and stay as they are)
    if (lightLook && !lit && !onlyGlow && (p.color?.startsWith("#") || p.top?.startsWith("#"))) keepBright(b.colors, c0);
  }
}

/**
 * A security camera into the lamp buffer: on a wall a small body with a lens looking along +z (turned
 * by `rotation`), on the ceiling a dome hanging at the ceiling height `y`.
 */
export function pushCameraModel(buf: GeoBuffer, model: "camera_wall" | "camera_ceiling", x: number, y: number, z: number, rotation: number): void {
  const a = rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const tf: Tf = (lx, lz) => [x + lx * c - lz * s, z + lx * s + lz * c];
  const b = new Builder(buf, new LineBuffer(), tf);
  const body = 0x1a2640;
  const bodyTop = 0x243660;
  const lens = 0x0b111f;
  if (model === "camera_ceiling") {
    // dome: a flat base and a half-dome below it
    b.cyl(0, 0, 0.07, y - 0.03, y, body, bodyTop, 12);
    b.loft([-0.05, 0.05, -0.05, 0.05], [-0.025, 0.025, -0.025, 0.025], y - 0.1, y - 0.03, lens, body);
    b.cyl(0, 0, 0.012, y - 0.075, y - 0.06, C.accent, C.accent, 6);
    return;
  }
  // wall camera: bracket at the wall (-z), body pointing into the room (+z), lens in front
  b.box(-0.02, 0.02, y - 0.02, y + 0.02, -0.06, -0.03, body, bodyTop);
  b.box(-0.01, 0.01, y - 0.01, y + 0.06, -0.05, -0.03, body, bodyTop);
  b.loft([-0.035, 0.035, -0.03, 0.09], [-0.04, 0.04, -0.03, 0.09], y + 0.02, y + 0.09, body, bodyTop);
  b.lyingCyl("z", 0, 0.1, y + 0.03, y + 0.08, 0.03, 0.05, lens, C.accent, 10);
  b.box(-0.006, 0.006, y + 0.075, y + 0.085, 0.085, 0.09, 0xff3b4f, 0xff3b4f);
}

/**
 * The robot of a pack's robot vacuum (the parts in front of its dock) as a model of its own, centred on the robot
 * and standing on y = 0, facing +z – the viewer drives it around (#645). Returns the robot's radius and height, for
 * the status light on top.
 */
export function pushPackRobot(buf: GeoBuffer, item: PackItem, w: number, d: number, h: number): { radius: number; top: number } {
  const cz = packRobotCentre(item) * d;
  const b = new Builder(buf, new LineBuffer(), (x, z) => [x, z - cz]);
  packModel(b, item, Math.max(0.05, w), Math.max(0.05, d), Math.max(0.005, h), 0, null, packRobotPart);
  let radius = 0;
  let top = 0;
  for (const p of fitParts(item, w, d, h)) {
    if (!packRobotPart(p)) continue;
    const r = Math.min(p.w * w, p.d * d) / 2;
    if (p.shape === "cyl" && r > radius) radius = r;
    top = Math.max(top, Math.min(h, (p.y + p.h) * h));
  }
  return { radius: radius || 0.17, top: top || 0.09 };
}

/** The glowing parts of a pack item that is no lamp (a smart speaker's light ring) in `color`: for the screen layer. */
export function pushPackGlow(buf: GeoBuffer, item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, color: number, pick: (p: PackItem["parts"][number]) => boolean = (p) => !!p.glow): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  packModel(new Builder(buf, new LineBuffer(), tf), item, Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h), base, color, pick);
}

/**
 * The moving parts of a motorised curtain or roll-down screen from a pack (#511), `open` 0 … 1 as its cover reports
 * (open = curtain drawn aside, screen rolled up). The curtain's panels gather towards both ends; the screen's cloth
 * and bar hang from the roller as far as it is down.
 */
export function pushPackMotion(buf: GeoBuffer, item: PackItem, kind: PackMotion, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror" | "variant">, base: number, open: number): void {
  const parts = packMotionParts(item, kind, open, f.variant === "left" || f.variant === "right" ? f.variant : "both");
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  packModel(new Builder(buf, new LineBuffer(), tf), { ...item, parts }, Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h), base, null);
}

/** The moving parts of such an item where they are at `open` (in the item's fractions of its size). */
export function packMotionParts(item: PackItem, kind: PackMotion, open: number, side: "both" | "left" | "right" = "both"): PackItem["parts"] {
  const t = Math.min(1, Math.max(0, open));
  const moving = item.parts.filter((p) => packMovingPart(kind, p));
  let parts: PackItem["parts"];
  if (kind === "curtain") {
    // each panel keeps its width and moves outwards: fully open, the panels bunch up in the outer fifth of each half
    parts = moving.map((p) => {
      // x is the part's centre as a share of the width, from -0.5 (left end) to 0.5 (right end, seen from the front);
      // a curtain opening to one side gathers all its panels at that end (#511)
      const edge = side === "left" ? -0.5 : side === "right" ? 0.5 : Math.sign(p.x || 1) * 0.5;
      return { ...p, x: edge - (edge - p.x) * (1 - 0.8 * t) };
    });
  } else {
    // the cloth hangs from its top edge (under the roller) and is as long as the screen is down
    const top = Math.max(...moving.map((p) => p.y + p.h));
    const down = Math.max(0.02, 1 - t);
    parts = moving.map((p) => ({ ...p, y: top - (top - p.y) * down, h: p.h * down }));
  }
  return parts;
}

/** A pack lamp into the lamp buffer: glowing parts in the light's colour (`glow`), or dark when off. */
/**
 * Where a pack lamp's light comes from (#680): the centre of its glowing parts – each weighed by its size, so the
 * glass of a lantern counts more than a small indicator – turned and mirrored like the item, as plan x and z and the
 * height y. Null for an item without glowing parts.
 */
export function packGlowCentre(item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number): [number, number, number] | null {
  const w = Math.max(0.05, f.w);
  const d = Math.max(0.05, f.d);
  const h = Math.max(0.005, f.h);
  let weight = 0;
  let sx = 0;
  let sy = 0;
  let sz = 0;
  for (const p of fitParts(item, w, d, h)) {
    if (!p.glow) continue;
    // a loft's centre lies between its bottom and its top rectangle; a turned part turns around its own centre
    const x = ((p.x + (p.shape === "loft" ? (p.tx ?? p.x) : p.x)) / 2) * w;
    const z = ((p.z + (p.shape === "loft" ? (p.tz ?? p.z) : p.z)) / 2) * d;
    const y0 = p.y * h;
    const y1 = Math.min(h, (p.y + p.h) * h);
    const k = Math.max(1e-6, p.w * w * p.d * d * Math.max(0, y1 - y0));
    weight += k;
    sx += x * k;
    sy += ((y0 + y1) / 2) * k;
    sz += z * k;
  }
  if (!weight) return null;
  const x = sx / weight;
  const z = sz / weight;
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  return [f.x + mx * x * c - z * s, base + sy / weight, f.z + mx * x * s + z * c];
}

export function pushPackLamp(buf: GeoBuffer, item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, glow: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  // mirrored: the item's own x runs the other way (the builder rewinds what needs it)
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  // lamps have no outlines: their edges are dropped
  packModel(new Builder(buf, new LineBuffer(), tf), item, Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h), base, glow);
}
