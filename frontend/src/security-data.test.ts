import assert from "node:assert/strict";
import test from "node:test";
import { emptyBuilding, newFloor } from "./model.ts";
import { collectSecuritySnapshot } from "./security-data.ts";
import type { HomeAssistant } from "./types.ts";

test("collectSecuritySnapshot aggregates alarm, cameras, locks, openings and sensors with alertLevel", () => {
  const floor = newFloor("eg", "Térreo", 0);
  floor.rooms = [
    { id: "sala", name: "Sala", area_id: "sala_area", points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "tiles" },
  ];
  floor.placements = [
    { entity_id: "camera.entrada", x: 1, z: 1 },
    { entity_id: "lock.porta_principal", x: 2, z: 0 },
    { entity_id: "binary_sensor.porta_sala", x: 2.5, z: 0 },
    { entity_id: "binary_sensor.movimento_sala", x: 3, z: 2 },
  ] as typeof floor.placements;

  const building = {
    ...emptyBuilding(),
    floors: [floor],
    settings: { ...emptyBuilding().settings, alarm: "alarm_control_panel.casa" },
  };

  const hass = {
    states: {
      "alarm_control_panel.casa": {
        entity_id: "alarm_control_panel.casa",
        state: "armed_away",
        attributes: { friendly_name: "Alarme Casa", code_format: "number", supported_features: 15 },
      },
      "camera.entrada": {
        entity_id: "camera.entrada",
        state: "idle",
        attributes: { friendly_name: "Câmera Entrada", entity_picture: "/api/camera_proxy/camera.entrada" },
      },
      "lock.porta_principal": {
        entity_id: "lock.porta_principal",
        state: "unlocked",
        attributes: { friendly_name: "Fechadura Principal" },
      },
      "binary_sensor.porta_sala": {
        entity_id: "binary_sensor.porta_sala",
        state: "on",
        attributes: { friendly_name: "Porta Sala", device_class: "door" },
      },
      "binary_sensor.movimento_sala": {
        entity_id: "binary_sensor.movimento_sala",
        state: "off",
        attributes: { friendly_name: "Movimento Sala", device_class: "motion" },
      },
    },
  } as unknown as HomeAssistant;

  const snap = collectSecuritySnapshot(hass, building);
  assert.equal(snap.alarm?.state, "armed_away");
  assert.equal(snap.alarm?.requiresCode, true);
  assert.equal(snap.cameras.length, 1);
  assert.equal(snap.locks.length, 1);
  assert.equal(snap.locks[0].locked, false);
  assert.equal(snap.openings.length, 1);
  assert.equal(snap.openings[0].open, true);
  assert.equal(snap.sensors.length, 1);
  assert.equal(snap.summary.openCount, 1);
  assert.equal(snap.summary.unlockedCount, 1);
  assert.equal(snap.summary.alertLevel, "warn");

  // Triggered alarm escalates alertLevel to "alert"
  hass.states["alarm_control_panel.casa"].state = "triggered";
  const snapAlert = collectSecuritySnapshot(hass, building);
  assert.equal(snapAlert.summary.alertLevel, "alert");
});
