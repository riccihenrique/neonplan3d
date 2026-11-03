// Arbitrary-degree rotation of a single floor or the entire building (rooms, furniture, devices,
// outdoor areas, free walls, backgrounds, roof sections, solar fields, cables, meter and hologram).

import { generateWalls } from "./geometry/walls.ts";
import { uid, type Building, type Floor, type RoofSection, type SlopeDir, type StartView, type Vec2 } from "./model.ts";
import { turnSectionAbout } from "./roof-sections.ts";
import { GROUND, fieldSize, groundFace } from "./solar.ts";

const r3 = (v: number) => Math.round(v * 1000) / 1000;

/** Normalizes an angle in degrees into [0, 360) with 0.01° precision. */
export function normDeg(deg: number): number {
  const n = Math.round(((((deg % 360) + 360) % 360)) * 100) / 100;
  return n >= 360 ? 0 : n;
}

/** Normalizes an angle in degrees into (-180, 180] with 0.01° precision (for schemas bounded to [-360, 360]). */
export function normSignedDeg(deg: number): number {
  let d = normDeg(deg);
  if (d > 180) d -= 360;
  return Object.is(d, -0) ? 0 : d;
}

function rotateSlopeDir(dir: SlopeDir | undefined, c: number, s: number): SlopeDir | undefined {
  if (!dir) return dir;
  const map: Record<SlopeDir, Vec2> = { x: [1, 0], "-x": [-1, 0], z: [0, 1], "-z": [0, -1] };
  const [vx, vz] = map[dir];
  const rx = vx * c - vz * s;
  const rz = vx * s + vz * c;
  return Math.abs(rx) >= Math.abs(rz) ? (rx >= 0 ? "x" : "-x") : rz >= 0 ? "z" : "-z";
}

function rotateStartViewTarget(sv: StartView | null | undefined, mv: (p: Vec2) => Vec2): void {
  if (sv?.target) {
    const [tx, tz] = mv([sv.target.x, sv.target.z]);
    sv.target = { ...sv.target, x: tx, z: tz };
  }
}

/**
 * Converts a simple single roof ("gable" or "flat") into an equivalent "custom" RoofSection over the top
 * floor's rooms so it can be rotated cleanly to any non-orthogonal angle along with the walls.
 */
function materializeSingleRoofForAngle(doc: Building): void {
  const roof = doc.settings.roof;
  if (!roof || (roof.type !== "gable" && roof.type !== "flat")) return;
  const topFloor = [...doc.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3))].sort((p, q) => q.elevation - p.elevation)[0];
  if (!topFloor) return;
  const xs = topFloor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = topFloor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  if (!xs.length) return;
  const ext = doc.settings.wall_exterior;
  const x0 = r3(Math.min(...xs) - ext);
  const x1 = r3(Math.max(...xs) + ext);
  const z0 = r3(Math.min(...zs) - ext);
  const z1 = r3(Math.max(...zs) + ext);
  const longX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longX : longX;
  const top = r3(topFloor.elevation + topFloor.height);
  const secId = uid("roof");
  const sec: RoofSection = {
    id: secId,
    x0,
    z0,
    x1,
    z1,
    shape: roof.type === "flat" ? "flat" : "gable",
    axis: alongX ? "x" : "z",
    eave_a: top,
    eave_b: top,
    pitch_a: roof.pitch || 35,
    pitch_b: roof.pitch || 35,
    base: top,
    overhang: null,
  };
  roof.type = "custom";
  roof.sections = [sec];
  const remapFace = (face: string) => (face.startsWith("main:") ? `${secId}:${face.slice(5)}` : face);
  for (const sf of roof.solar ?? []) sf.face = remapFace(sf.face);
  for (const rw of roof.windows ?? []) rw.face = remapFace(rw.face);
}

/**
 * Rotates a single floor (`floorId` string) or the entire building (`floorId === null`) clockwise by `deg`
 * degrees in the 2D plan (+x right, +z down) around the bounding-box centre of the rooms.
 * Returns `true` when anything was rotated.
 */
export function rotateBuildingOrFloor(doc: Building, floorId: string | null, deg: number): boolean {
  if (!Number.isFinite(deg) || Math.abs(deg % 360) < 1e-9) return false;
  const floors: Floor[] = floorId === null ? doc.floors : doc.floors.filter((f) => f.id === floorId);
  if (!floors.length) return false;

  let pts: Vec2[] = floors.flatMap((f) => f.rooms.flatMap((r) => r.points));
  if (!pts.length) {
    pts = floors.flatMap((f) => [
      ...f.outdoor.flatMap((a) => a.points),
      ...(f.walls ?? []).flatMap((w) => [w.a, w.b]),
      ...f.furniture.map((m): Vec2 => [m.x, m.z]),
      ...f.placements.map((p): Vec2 => [p.x, p.z]),
    ]);
  }
  if (!pts.length) return false;

  const xs = pts.map((p) => p[0]);
  const zs = pts.map((p) => p[1]);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cz = (Math.min(...zs) + Math.max(...zs)) / 2;

  const rad = (deg * Math.PI) / 180;
  const c = Math.round(Math.cos(rad) * 1e9) / 1e9;
  const s = Math.round(Math.sin(rad) * 1e9) / 1e9;
  const mv = (p: Vec2): Vec2 => [r3(cx + (p[0] - cx) * c - (p[1] - cz) * s), r3(cz + (p[0] - cx) * s + (p[1] - cz) * c)];

  const nonRightAngle = Math.abs(deg % 90) > 1e-6;
  if (floorId === null && nonRightAngle) {
    materializeSingleRoofForAngle(doc);
  }

  const thick = { exterior: doc.settings.wall_exterior, interior: doc.settings.wall_interior };
  const hasWallSolar = (doc.settings.roof.solar ?? []).some((sf) => sf.face.startsWith("wall:"));

  for (const f of floors) {
    const oldWalls = hasWallSolar ? generateWalls(f.rooms, thick, f.walls ?? []).walls : [];

    for (const r of f.rooms) {
      r.points = r.points.map(mv);
      rotateStartViewTarget(r.start_view, mv);
    }
    for (const m of f.furniture) {
      [m.x, m.z] = mv([m.x, m.z]);
      m.rotation = normDeg(m.rotation + deg);
    }
    for (const p of f.placements) {
      [p.x, p.z] = mv([p.x, p.z]);
      p.rotation = normDeg((p.rotation ?? 0) + deg);
    }
    for (const a of f.outdoor) {
      a.points = a.points.map(mv);
      if (a.slope_dir) a.slope_dir = rotateSlopeDir(a.slope_dir, c, s);
      if (a.pool) {
        for (const port of a.pool.ports ?? []) [port.x, port.z] = mv([port.x, port.z]);
        for (const pipe of a.pool.pipes ?? []) pipe.points = pipe.points.map(mv);
        for (const j of a.pool.joints ?? []) {
          [j.x, j.z] = mv([j.x, j.z]);
          if (j.nx != null && j.nz != null) {
            const nx = j.nx * c - j.nz * s;
            const nz = j.nx * s + j.nz * c;
            j.nx = r3(nx);
            j.nz = r3(nz);
          }
        }
      }
    }
    for (const w of f.walls ?? []) {
      w.a = mv(w.a);
      w.b = mv(w.b);
    }
    if (f.background) {
      [f.background.x, f.background.z] = mv([f.background.x, f.background.z]);
      f.background.rotation = normSignedDeg((f.background.rotation ?? 0) + deg);
    }
    rotateStartViewTarget(f.start_view, mv);

    if (hasWallSolar && oldWalls.length) {
      const newWalls = generateWalls(f.rooms, thick, f.walls ?? []).walls;
      const wallIdMap = new Map<string, string>();
      for (const ow of oldWalls) {
        const ra = mv(ow.a);
        const rb = mv(ow.b);
        const match = newWalls.find(
          (nw) =>
            (Math.hypot(nw.a[0] - ra[0], nw.a[1] - ra[1]) < 0.03 && Math.hypot(nw.b[0] - rb[0], nw.b[1] - rb[1]) < 0.03) ||
            (Math.hypot(nw.a[0] - rb[0], nw.a[1] - rb[1]) < 0.03 && Math.hypot(nw.b[0] - ra[0], nw.b[1] - ra[1]) < 0.03),
        );
        if (match && match.id !== ow.id) {
          wallIdMap.set(`wall:${f.id}:${ow.id}`, `wall:${f.id}:${match.id}`);
          wallIdMap.set(`wall:${f.id}:${ow.id}:back`, `wall:${f.id}:${match.id}:back`);
        }
      }
      for (const sf of doc.settings.roof.solar ?? []) {
        const mapped = wallIdMap.get(sf.face);
        if (mapped) sf.face = mapped;
      }
    }
  }

  if (floorId === null) {
    rotateStartViewTarget(doc.settings.start_view, mv);
    const roof = doc.settings.roof;
    if (roof.sections?.length) {
      roof.sections = roof.sections.map((sec) => {
        const next = turnSectionAbout(sec, deg, [cx, cz]);
        return {
          ...next,
          x0: r3(next.x0),
          z0: r3(next.z0),
          x1: r3(next.x1),
          z1: r3(next.z1),
          ...(next.pivot ? { pivot: [r3(next.pivot[0]), r3(next.pivot[1])] as Vec2 } : {}),
          ...(next.points ? { points: next.points.map((q): Vec2 => [r3(q[0]), r3(q[1])]) } : {}),
          ...(next.rotation != null ? { rotation: normSignedDeg(next.rotation) } : {}),
        };
      });
    }
    for (const sf of roof.solar ?? []) {
      if (sf.face !== GROUND) continue;
      // Rotate the ground solar field's centre around (cx, cz) and advance its heading by `deg`
      const face = groundFace(doc, sf);
      const [w, d] = fieldSize(face, sf);
      const mcx = face.eu[0] * (sf.u + w / 2) + face.es[0] * (sf.v + d / 2);
      const mcz = face.eu[2] * (sf.u + w / 2) + face.es[2] * (sf.v + d / 2);
      const [ncx, ncz] = mv([mcx, mcz]);
      const nextRot = normSignedDeg((sf.rotation ?? 0) + deg);
      const nr = (nextRot * Math.PI) / 180;
      const eu: Vec2 = [Math.cos(nr), Math.sin(nr)];
      const es: Vec2 = [-Math.sin(nr), Math.cos(nr)];
      sf.u = r3(ncx * eu[0] + ncz * eu[1] - w / 2);
      sf.v = r3(ncx * es[0] + ncz * es[1] - d / 2);
      sf.rotation = nextRot;
    }
    for (const cRoute of roof.cables ?? []) cRoute.points = cRoute.points.map(mv);
    if (doc.energy.meter) [doc.energy.meter.x, doc.energy.meter.z] = mv([doc.energy.meter.x, doc.energy.meter.z]);
    const h = roof.hologram;
    if (h && h.place === "free" && h.x != null && h.z != null) [h.x, h.z] = mv([h.x, h.z]);
  }

  return true;
}
