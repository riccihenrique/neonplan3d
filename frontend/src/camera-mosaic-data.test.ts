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
      "camera.garden": { entity_id: "camera.garden", name: null, area_id: "garden" },
      "camera.hidden_cam": { entity_id: "camera.hidden_cam", name: "Oculta", hidden: true },
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
      "camera.garden": {
        entity_id: "camera.garden",
        state: "unavailable",
        attributes: { friendly_name: "Câmera Jardim" },
      },
      "camera.hidden_cam": {
        entity_id: "camera.hidden_cam",
        state: "idle",
        attributes: { friendly_name: "Oculta" },
      },
      "light.kitchen": {
        entity_id: "light.kitchen",
        state: "on",
        attributes: { friendly_name: "Luz Cozinha" },
      },
    },
    connection: { subscribeMessage: async () => async () => {} },
    callWS: async () => undefined as never,
    callService: async () => undefined,
  };
}

test("collectMosaicCameras lists placed cameras first with floor/room context and appends remaining visible HA cameras", () => {
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

  assert.equal(countMosaicCameras(hass, b), 3);
  assert.deepEqual(
    cams.map((c) => c.entityId),
    ["camera.front_door", "camera.garden", "camera.living_room"],
  );

  // Placed camera gets custom name, room & floor location, and proxy stream URL
  assert.equal(cams[0].label, "Portão Principal");
  assert.equal(cams[0].location, "Térreo · Entrada");
  assert.equal(cams[0].floorId, "eg");
  assert.equal(cams[0].roomId, "r_entry");
  assert.equal(cams[0].online, true);
  assert.equal(cams[0].streamUrl, "/api/camera_proxy_stream/camera.front_door?token=abc");

  // Unplaced camera in "garden" area gets its HA area name and offline status
  assert.equal(cams[1].location, "Jardim");
  assert.equal(cams[1].online, false);

  // Unplaced camera whose HA area is linked to room "r_living" resolves to that room & floor
  assert.equal(cams[2].floorId, "eg");
  assert.equal(cams[2].roomId, "r_living");
  assert.equal(cams[2].location, "Térreo · Sala");
});

test("mosaicColumns adapts column count to camera count and viewport dimensions", () => {
  assert.equal(mosaicColumns(1, 1400, 800), 1);
  assert.equal(mosaicColumns(4, 390, 700), 1); // narrow phone
  assert.equal(mosaicColumns(4, 1280, 760), 2); // 2×2 fills 16:9 viewport cleanly
  assert.equal(mosaicColumns(6, 1280, 760), 3); // 3×2 grid
  assert.equal(mosaicColumns(8, 1440, 800), 4); // 4×2 grid on wide screen
});
