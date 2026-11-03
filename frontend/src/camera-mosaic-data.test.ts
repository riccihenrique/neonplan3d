import assert from "node:assert/strict";
import { test } from "node:test";
import { collectMosaicCameras, countMosaicCameras, mosaicColumns } from "./camera-mosaic-data.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

function fakeHass(): HomeAssistant {
  return {
    language: "pt",
    areas: {
      living: { area_id: "living", name: "Sala de Estar", floor_id: "f_ground" },
      garden: { area_id: "garden", name: "Jardim", floor_id: null },
    },
    entities: {
      "camera.front_door": { entity_id: "camera.front_door", name: "Porta da Frente", area_id: null },
      "camera.living_room": { entity_id: "camera.living_room", name: "Câmera Sala", area_id: "living" },
      "camera.garden_unplaced": { entity_id: "camera.garden_unplaced", name: "Câmera Solta", area_id: "garden" },
      "camera.vacuum_map": { entity_id: "camera.vacuum_map", name: "Mapa Aspirador", area_id: "living" },
    },
    states: {
      "camera.front_door": {
        entity_id: "camera.front_door",
        state: "streaming",
        attributes: { friendly_name: "Porta da Frente", entity_picture: "/api/camera_proxy/camera.front_door?token=abc" },
      },
      "camera.living_room": {
        entity_id: "camera.living_room",
        state: "idle",
        attributes: { friendly_name: "Câmera Sala", entity_picture: "/api/camera_proxy/camera.living_room?token=def" },
      },
      "camera.garden_unplaced": {
        entity_id: "camera.garden_unplaced",
        state: "idle",
        attributes: { friendly_name: "Câmera Solta" },
      },
      "camera.vacuum_map": {
        entity_id: "camera.vacuum_map",
        state: "idle",
        attributes: { friendly_name: "Mapa Aspirador" },
      },
    },
    connection: { subscribeMessage: async () => async () => {} },
    callWS: async () => undefined as never,
    callService: async () => undefined,
  };
}

test("collectMosaicCameras includes only cameras placed or linked in the house and ignores unrelated HA cameras", () => {
  const b = emptyBuilding();
  const eg = newFloor("eg", "Térreo", 0);
  eg.rooms = [
    {
      id: "r_entry",
      name: "Entrada",
      area_id: null,
      points: [
        [0, 0],
        [4, 0],
        [4, 3],
        [0, 3],
      ],
      floor_material: "tile",
    },
    {
      id: "r_living",
      name: "Sala",
      area_id: "living",
      panel: ["camera.living_room"],
      points: [
        [4, 0],
        [9, 0],
        [9, 5],
        [4, 5],
      ],
      floor_material: "wood",
    },
  ];
  eg.placements = [{ entity_id: "camera.front_door", name: "Portão Principal", x: 2, z: 1.5, y: 2.2 }];
  const og = newFloor("og", "1º Andar", 2.8);
  b.floors = [eg, og];

  const hass = fakeHass();
  const cams = collectMosaicCameras(hass, b);

  // Only the 2 house cameras are returned; camera.garden_unplaced and camera.vacuum_map are ignored
  assert.equal(countMosaicCameras(hass, b), 2);
  assert.deepEqual(
    cams.map((c) => c.entityId),
    ["camera.front_door", "camera.living_room"],
  );

  assert.equal(cams[0].label, "Portão Principal");
  assert.equal(cams[0].location, "Térreo · Entrada");
  assert.equal(cams[0].floorId, "eg");
  assert.equal(cams[0].roomId, "r_entry");
  assert.equal(cams[0].streamUrl, "/api/camera_proxy_stream/camera.front_door?token=abc");

  assert.equal(cams[1].floorId, "eg");
  assert.equal(cams[1].roomId, "r_living");
  assert.equal(cams[1].location, "Térreo · Sala");
});

test("mosaicColumns adapts column count to camera count and viewport dimensions", () => {
  assert.equal(mosaicColumns(1, 1400, 800), 1);
  assert.equal(mosaicColumns(4, 390, 700), 1);
  assert.equal(mosaicColumns(4, 1280, 760), 2);
  assert.equal(mosaicColumns(6, 1280, 760), 3);
  assert.equal(mosaicColumns(8, 1440, 800), 4);
});
