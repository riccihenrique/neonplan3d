import assert from "node:assert/strict";
import { test } from "node:test";
import { generateWalls } from "./geometry/walls.ts";
import { buildPlan, type RawPlan } from "./import/builder.ts";
import { emptyBuilding, newFloor, type Furniture, type Opening, type Vec2 } from "./model.ts";
import { normDeg, normSignedDeg, rotateBuildingOrFloor } from "./rotate-plan.ts";
import { GROUND, fieldSize, groundFace } from "./solar.ts";

const dist = (a: Vec2, b: Vec2) => Math.hypot(b[0] - a[0], b[1] - a[1]);

const makeFurn = (id: string, x: number, z: number, rotation = 0): Furniture => ({
  id,
  type: "sofa",
  x,
  z,
  rotation,
  w: 2,
  d: 0.9,
  h: 0.85,
  variant: null,
});

const makeDoor = (id: string, roomId: string, edge: number, offset: number): Opening => ({
  id,
  room_id: roomId,
  edge,
  offset,
  width: 0.9,
  type: "door",
  sill: 0,
  height: 2.05,
  hinge: "left",
  leaves: 1,
  swing: "in",
  cover: null,
  contact: null,
  contact2: null,
  tilt: null,
});

test("normDeg and normSignedDeg wrap positive, negative and decimal angles cleanly", () => {
  assert.equal(normDeg(0), 0);
  assert.equal(normDeg(360), 0);
  assert.equal(normDeg(-45), 315);
  assert.equal(normDeg(23.456), 23.46);
  assert.equal(normSignedDeg(0), 0);
  assert.equal(normSignedDeg(-0), 0);
  assert.equal(normSignedDeg(180), 180);
  assert.equal(normSignedDeg(-180), 180);
  assert.equal(normSignedDeg(207.25), -152.75);
  assert.equal(normSignedDeg(-32.5), -32.5);
});

test("rotateBuildingOrFloor rotates a single floor by an arbitrary decimal angle and remaps wall solar faces", () => {
  const doc = emptyBuilding();
  doc.settings.roof = { ...doc.settings.roof };
  const eg = newFloor("eg", "EG", 0);
  eg.rooms = [
    {
      id: "r1",
      name: "Sala",
      area_id: null,
      points: [
        [0, 0],
        [6, 0],
        [6, 4],
        [0, 4],
      ],
      floor_material: "wood",
    },
  ];
  eg.openings = [makeDoor("d1", "r1", 0, 2.4)];
  eg.furniture = [makeFurn("f1", 2, 1.5, 15)];
  eg.placements = [{ entity_id: "camera.entry", x: 1, z: 0.5, y: 2.2, rotation: 350 }];
  eg.walls = [{ id: "w1", a: [1, 1], b: [3, 1] }];
  eg.background = { image_id: "bg1", x: 3, z: 2, width: 8, opacity: 0.5, rotation: 170 };

  const og = newFloor("og", "OG", 2.8);
  og.rooms = [
    {
      id: "r2",
      name: "Quarto",
      area_id: null,
      points: [
        [0, 0],
        [6, 0],
        [6, 4],
        [0, 4],
      ],
      floor_material: "wood",
    },
  ];
  doc.floors = [eg, og];

  const thick = { exterior: doc.settings.wall_exterior, interior: doc.settings.wall_interior };
  const initialWalls = generateWalls(eg.rooms, thick, eg.walls);
  const southWall = initialWalls.walls.find((w) => Math.abs(w.a[1] - 4) < 0.01 && Math.abs(w.b[1] - 4) < 0.01)!;
  doc.settings.roof.solar = [
    {
      id: "sf_wall",
      face: `wall:eg:${southWall.id}`,
      u: 0.5,
      v: 0.5,
      rows: 1,
      cols: 2,
      portrait: true,
    },
  ];

  assert.equal(rotateBuildingOrFloor(doc, "eg", 32.5), true);

  // Upper floor stays untouched when only "eg" is rotated
  assert.deepEqual(og.rooms[0].points, [
    [0, 0],
    [6, 0],
    [6, 4],
    [0, 4],
  ]);

  // Room edge lengths and opening offset remain preserved (within 2 mm rounding)
  const pts = eg.rooms[0].points;
  assert.ok(Math.abs(dist(pts[0], pts[1]) - 6) < 0.003);
  assert.ok(Math.abs(dist(pts[1], pts[2]) - 4) < 0.003);
  assert.equal(eg.openings[0].offset, 2.4);

  // Furniture, placement and background angles advance by 32.5°
  assert.equal(eg.furniture[0].rotation, 47.5);
  assert.equal(eg.placements[0].rotation, 22.5);
  // 170 + 32.5 = 202.5 -> normalized into (-180, 180] = -157.5
  assert.equal(eg.background.rotation, -157.5);

  // Wall solar face ID matches one of the newly generated rotated walls
  const rotatedWalls = generateWalls(eg.rooms, thick, eg.walls);
  const validFaces = new Set(rotatedWalls.walls.map((w) => `wall:eg:${w.id}`));
  assert.ok(validFaces.has(doc.settings.roof.solar[0].face));

  // Rotating back by -32.5° restores the room to its original coordinates (within mm precision)
  assert.equal(rotateBuildingOrFloor(doc, "eg", -32.5), true);
  assert.ok(Math.abs(eg.rooms[0].points[0][0] - 0) < 0.003);
  assert.ok(Math.abs(eg.rooms[0].points[0][1] - 0) < 0.003);
  assert.equal(eg.furniture[0].rotation, 15);
  assert.equal(eg.background.rotation, 170);
});

test("rotateBuildingOrFloor rotates the whole house by a non-90° angle including roof, ground solar, cables and meter", () => {
  const doc = emptyBuilding();
  doc.settings.roof = { ...doc.settings.roof };
  const eg = newFloor("eg", "EG", 0);
  eg.rooms = [
    {
      id: "r1",
      name: "EG",
      area_id: null,
      points: [
        [0, 0],
        [8, 0],
        [8, 6],
        [0, 6],
      ],
      floor_material: "tile",
    },
  ];
  eg.outdoor = [
    {
      id: "pool1",
      name: "Pool",
      type: "pool",
      points: [
        [9, 1],
        [13, 1],
        [13, 4],
        [9, 4],
      ],
      slope_dir: "x",
      pool: {
        ports: [{ id: "p1", kind: "skimmer", x: 9, z: 2.5 }],
        pipes: [{ id: "pp1", from: "port:p1", to: "", floor_id: "eg", points: [[9, 2.5], [8, 2.5]] }],
        joints: [{ id: "j1", x: 9, z: 2.5, y: 0.3, nx: 1, nz: 0 }],
      },
    },
  ];
  const og = newFloor("og", "OG", 2.8);
  og.rooms = [
    {
      id: "r2",
      name: "OG",
      area_id: null,
      points: [
        [0, 0],
        [8, 0],
        [8, 6],
        [0, 6],
      ],
      floor_material: "wood",
    },
  ];
  doc.floors = [eg, og];
  doc.settings.roof.type = "gable";
  doc.settings.roof.pitch = 35;
  doc.settings.roof.solar = [
    { id: "sf_roof", face: "main:a", u: 1, v: 0.5, rows: 2, cols: 4, portrait: true },
    { id: "sf_gnd", face: GROUND, u: 10, v: 2, rows: 1, cols: 3, portrait: true, rotation: 10 },
  ];
  doc.settings.roof.cables = [{ id: "solar:sf_roof", floor_id: "eg", height: 2.4, points: [[4, 0], [4, 3]] }];
  doc.settings.roof.hologram = { place: "free", field: null, x: 4, z: -1, size: 1, right: 0, up: 0 };
  doc.energy.meter = { floor_id: "eg", x: 0.5, z: 0.5 };
  doc.settings.start_view = { theta: 0.8, phi: 0.9, radius: 14, target: { x: 4, y: 1.4, z: 3 } };

  // Record ground solar centre distance to house centre (4, 3) before rotation
  const gndBefore = doc.settings.roof.solar[1];
  const faceBefore = groundFace(doc, gndBefore);
  const [gw, gd] = fieldSize(faceBefore, gndBefore);
  const gcxBefore = faceBefore.eu[0] * (gndBefore.u + gw / 2) + faceBefore.es[0] * (gndBefore.v + gd / 2);
  const gczBefore = faceBefore.eu[2] * (gndBefore.u + gw / 2) + faceBefore.es[2] * (gndBefore.v + gd / 2);
  const distBefore = dist([4, 3], [gcxBefore, gczBefore]);

  assert.equal(rotateBuildingOrFloor(doc, null, 27), true);

  // Both floors rotated identically around (4, 3)
  assert.deepEqual(eg.rooms[0].points, og.rooms[0].points);

  // Single gable roof materialized into a custom section rotated by 27°, with solar face remapped from main:a
  assert.equal(doc.settings.roof.type, "custom");
  assert.equal(doc.settings.roof.sections?.length, 1);
  const sec = doc.settings.roof.sections![0];
  assert.equal(sec.rotation, 27);
  assert.equal(doc.settings.roof.solar[0].face, `${sec.id}:a`);

  // Ground solar field rotated rigidly around (4, 3) and heading advanced to 37°
  assert.equal(gndBefore.rotation, 37);
  const faceAfter = groundFace(doc, gndBefore);
  const gcxAfter = faceAfter.eu[0] * (gndBefore.u + gw / 2) + faceAfter.es[0] * (gndBefore.v + gd / 2);
  const gczAfter = faceAfter.eu[2] * (gndBefore.u + gw / 2) + faceAfter.es[2] * (gndBefore.v + gd / 2);
  assert.ok(Math.abs(dist([4, 3], [gcxAfter, gczAfter]) - distBefore) < 0.005);

  // Start view target at centre (4, 3) stays at (4, 3); meter, cables, hologram and pool joint rotated
  assert.deepEqual(doc.settings.start_view?.target, { x: 4, y: 1.4, z: 3 });
  assert.notEqual(doc.energy.meter?.x, 0.5);
  assert.notEqual(doc.settings.roof.hologram?.x, 4);
  const joint = eg.outdoor[0].pool!.joints![0];
  assert.ok(Math.abs(Math.hypot(joint.nx!, joint.nz!) - 1) < 0.003);
});

test("rotateBuildingOrFloor keeps a single gable roof intact on exact 90° turns", () => {
  const doc = emptyBuilding();
  doc.settings.roof = { ...doc.settings.roof, type: "gable" };
  const eg = newFloor("eg", "EG", 0);
  eg.rooms = [
    {
      id: "r1",
      name: "EG",
      area_id: null,
      points: [
        [0, 0],
        [6, 0],
        [6, 4],
        [0, 4],
      ],
      floor_material: "wood",
    },
  ];
  doc.floors = [eg];
  assert.equal(rotateBuildingOrFloor(doc, null, 90), true);
  assert.equal(doc.settings.roof.type, "gable");
  // Bounding-box centre is (3, 2): [0,0] -> [3 - (0-2), 2 + (0-3)] = [5, -1]
  assert.deepEqual(eg.rooms[0].points, [
    [5, -1],
    [5, 5],
    [1, 5],
    [1, -1],
  ]);
});

test("buildPlan honours arbitrary turn angles even when square-up is active", () => {
  const raw: RawPlan = {
    source: "test",
    floors: [
      {
        name: "EG",
        elevation: 0,
        rooms: [
          {
            name: "Living",
            points: [
              [0, 0],
              [5, 0],
              [5, 4],
              [0, 4],
            ],
          },
        ],
        walls: [],
        openings: [{ kind: "door", at: [2.5, 0], width: 0.9, height: 2.05, sill: 0 }],
        furniture: [{ name: "Sofa", type: "sofa", x: 2.5, z: 2, w: 2, d: 0.9, h: 0.85, rotation: 0 }],
      },
    ],
  };

  // Even a small 2.5° turn (< squareUp's 4° snap threshold) is preserved rather than snapped back to 0°
  const res = buildPlan(raw, { turn: 2.5, square: true });
  const room = res.building.floors[0].rooms[0];
  const angles = room.points.map((p, i) => {
    const q = room.points[(i + 1) % room.points.length];
    return (Math.atan2(q[1] - p[1], q[0] - p[0]) * 180) / Math.PI;
  });
  assert.ok(angles.some((a) => Math.abs(Math.abs(a) - 2.5) < 0.2));
  assert.equal(res.building.floors[0].furniture[0].rotation, 2.5);
  assert.equal(res.building.floors[0].openings.length, 1);
});
