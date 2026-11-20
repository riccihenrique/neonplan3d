// Pure data aggregation for the unified Security & Cameras Command Center (<np-camera-mosaic>).
// Collects alarm, cameras (with active AI/motion detections), smart locks, doors/windows/garage covers,
// and security/presence sensors directly from the 3D house plan without duplicating entities.

import { collectMosaicCameras, type MosaicCamera } from "./camera-mosaic-data.ts";
import { entityName, findAlarmEntity, isActive, openingEntities, openingState } from "./devices.ts";
import { cameraMotionSensors, detectionKind, type DetectionKind } from "./markers.ts";
import { pointInPolygon, zonesOf, type Building, type Floor } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export interface SecurityCamera extends MosaicCamera {
  detections: DetectionKind[];
}

export interface SecurityAlarm {
  entityId: string;
  name: string;
  state: string;
  isTriggered: boolean;
  isArmed: boolean;
  isPending: boolean;
  requiresCode: boolean;
  codeFormat: string | null;
  supportedFeatures: number;
}

export interface SecurityLock {
  entityId: string;
  name: string;
  locked: boolean;
  state: string;
  location: string | null;
  floorId: string;
  roomId: string | null;
}

export interface SecurityOpening {
  id: string;
  entityId: string;
  name: string;
  kind: "door" | "window" | "garage" | "gate";
  open: boolean;
  state: string;
  canControl: boolean;
  lock?: { entityId: string; locked: boolean } | null;
  location: string | null;
  floorId: string;
  roomId: string | null;
}

export interface SecuritySensor {
  entityId: string;
  name: string;
  kind: "motion" | "occupancy" | "presence" | "smoke" | "moisture" | "gas" | "tamper" | "vibration";
  active: boolean;
  critical: boolean;
  location: string | null;
  floorId: string;
  roomId: string | null;
}

export interface SecuritySummary {
  cameraCount: number;
  openCount: number;
  unlockedCount: number;
  detectionCount: number;
  criticalCount: number;
  alertLevel: "ok" | "warn" | "alert";
}

export interface SecuritySnapshot {
  alarm: SecurityAlarm | null;
  cameras: SecurityCamera[];
  locks: SecurityLock[];
  openings: SecurityOpening[];
  sensors: SecuritySensor[];
  summary: SecuritySummary;
}

const CRITICAL_CLASSES = new Set(["smoke", "gas", "moisture", "carbon_monoxide", "tamper"]);
const SECURITY_CLASSES = new Set(["motion", "occupancy", "presence", "vibration", ...CRITICAL_CLASSES]);
const OPENING_CLASSES = new Set(["door", "window", "opening", "garage_door"]);

function locationLabel(floorsCount: number, floor: Floor, roomName: string | null): string | null {
  if (roomName) return floorsCount > 1 ? `${floor.name} · ${roomName}` : roomName;
  return floorsCount > 1 ? floor.name || null : null;
}

function roomAtPoint(floor: Floor, x: number, z: number): { id: string; name: string } | null {
  for (const zItem of zonesOf(floor)) {
    if (zItem.points.length >= 3 && pointInPolygon([x, z], zItem.points)) {
      return { id: zItem.id, name: zItem.name || zItem.id };
    }
  }
  return null;
}

/** Builds a complete live snapshot of security devices, cameras, locks, openings and sensors in the building. */
export function collectSecuritySnapshot(hass: HomeAssistant | undefined, building: Building | null | undefined): SecuritySnapshot {
  const empty: SecuritySnapshot = {
    alarm: null,
    cameras: [],
    locks: [],
    openings: [],
    sensors: [],
    summary: { cameraCount: 0, openCount: 0, unlockedCount: 0, detectionCount: 0, criticalCount: 0, alertLevel: "ok" },
  };
  if (!hass?.states || !building) return empty;

  const floors = building.floors ?? [];

  // 1. Alarm control panel
  const alarmId = findAlarmEntity(hass, building);
  let alarm: SecurityAlarm | null = null;
  if (alarmId) {
    const st = hass.states[alarmId];
    if (st && st.state !== "unavailable" && st.state !== "unknown") {
      const codeFormat = typeof st.attributes.code_format === "string" ? st.attributes.code_format : null;
      const codeArmReq = st.attributes.code_arm_required;
      alarm = {
        entityId: alarmId,
        name: entityName(hass, alarmId),
        state: st.state,
        isTriggered: st.state === "triggered",
        isArmed: st.state.startsWith("armed_"),
        isPending: st.state === "pending" || st.state === "arming",
        requiresCode: !!codeFormat && (st.state.startsWith("armed_") || codeArmReq !== false),
        codeFormat,
        supportedFeatures: typeof st.attributes.supported_features === "number" ? st.attributes.supported_features : 0,
      };
    }
  }

  // 2. Cameras + active AI/motion detections
  const baseCameras = collectMosaicCameras(hass, building);
  const cameras: SecurityCamera[] = baseCameras.map((cam) => {
    const detections: DetectionKind[] = [];
    const seenKinds = new Set<DetectionKind>();
    for (const sid of cameraMotionSensors(hass, cam.entityId)) {
      if (hass.states[sid]?.state === "on") {
        const k = detectionKind(hass, sid);
        if (!seenKinds.has(k)) {
          seenKinds.add(k);
          detections.push(k);
        }
      }
    }
    return { ...cam, detections };
  });

  // 3. Locks, Openings (doors/windows/garages/gates), and Security/Presence Sensors
  const locks: SecurityLock[] = [];
  const seenLocks = new Set<string>();
  const openings: SecurityOpening[] = [];
  const seenOpenings = new Set<string>();
  const sensors: SecuritySensor[] = [];
  const seenSensors = new Set<string>();

  const pushLock = (id: string, floor: Floor, room: { id: string; name: string } | null) => {
    if (!id.startsWith("lock.") || seenLocks.has(id)) return;
    const st = hass.states[id];
    if (!st || st.state === "unavailable") return;
    seenLocks.add(id);
    locks.push({
      entityId: id,
      name: entityName(hass, id),
      locked: st.state === "locked",
      state: st.state,
      location: locationLabel(floors.length, floor, room?.name ?? null),
      floorId: floor.id,
      roomId: room?.id ?? null,
    });
  };

  for (const floor of floors) {
    const opMap = openingEntities(hass, [floor]);
    const roomsById = new Map(zonesOf(floor).map((r) => [r.id, r]));

    for (const o of floor.openings ?? []) {
      const ents = opMap.get(o.id);
      const room = roomsById.get(o.room_id) ?? null;
      const roomObj = room ? { id: room.id, name: room.name || room.id } : null;
      const loc = locationLabel(floors.length, floor, roomObj?.name ?? null);

      if (ents?.lock) pushLock(ents.lock, floor, roomObj);

      const primary = o.type === "garage" ? (ents?.cover ?? ents?.contact) : (ents?.contact ?? (o.type === "door" ? ents?.cover : null));
      if (ents && primary && !seenOpenings.has(primary)) {
        const st = hass.states[primary];
        if (st && st.state !== "unavailable") {
          seenOpenings.add(primary);
          const cur = openingState(hass, ents, o.type);
          const lockSt = ents.lock ? hass.states[ents.lock] : undefined;
          const lock = ents.lock && lockSt && lockSt.state !== "unavailable" ? { entityId: ents.lock, locked: lockSt.state === "locked" } : null;
          openings.push({
            id: o.id,
            entityId: primary,
            name: entityName(hass, primary),
            kind: o.type,
            open: cur.open > 0 || cur.open2 > 0 || cur.tilt > 0 || cur.tilt2 > 0,
            state: st.state,
            canControl: primary.startsWith("cover."),
            lock,
            location: loc,
            floorId: floor.id,
            roomId: roomObj?.id ?? null,
          });
        }
      }
    }

    for (const area of floor.outdoor ?? []) {
      for (const gate of area.gates ?? []) {
        const gateLockId = gate.entity && gate.entity.startsWith("lock.") ? gate.entity : null;
        if (gateLockId) pushLock(gateLockId, floor, null);
        const gateEnt = gate.contact || (gate.entity && !gate.entity.startsWith("lock.") ? gate.entity : null);
        if (gateEnt && !seenOpenings.has(gateEnt)) {
          const st = hass.states[gateEnt];
          if (st && st.state !== "unavailable") {
            seenOpenings.add(gateEnt);
            const isOpen = gateEnt.startsWith("cover.") ? st.state === "open" || st.state === "opening" : st.state === "on";
            const gateLockSt = gateLockId ? hass.states[gateLockId] : undefined;
            const lock = gateLockId && gateLockSt && gateLockSt.state !== "unavailable" ? { entityId: gateLockId, locked: gateLockSt.state === "locked" } : null;
            openings.push({
              id: gate.id,
              entityId: gateEnt,
              name: entityName(hass, gateEnt),
              kind: "gate",
              open: isOpen,
              state: st.state,
              canControl: gateEnt.startsWith("cover."),
              lock,
              location: locationLabel(floors.length, floor, null),
              floorId: floor.id,
              roomId: null,
            });
          }
        }
      }
    }

    for (const pl of floor.placements ?? []) {
      const id = pl.entity_id;
      const st = hass.states[id];
      if (!st || st.state === "unavailable") continue;
      const room = roomAtPoint(floor, pl.x, pl.z);
      const loc = locationLabel(floors.length, floor, room?.name ?? null);

      if (id.startsWith("lock.")) {
        pushLock(id, floor, room);
        continue;
      }

      if (id.startsWith("binary_sensor.")) {
        const dc = String(st.attributes.device_class ?? "").toLowerCase();
        if (OPENING_CLASSES.has(dc) && !seenOpenings.has(id)) {
          seenOpenings.add(id);
          openings.push({
            id,
            entityId: id,
            name: pl.name || entityName(hass, id),
            kind: dc === "window" ? "window" : dc === "garage_door" ? "garage" : "door",
            open: st.state === "on",
            state: st.state,
            canControl: false,
            location: loc,
            floorId: floor.id,
            roomId: room?.id ?? null,
          });
        } else if (SECURITY_CLASSES.has(dc) && !seenSensors.has(id)) {
          seenSensors.add(id);
          const critical = CRITICAL_CLASSES.has(dc);
          sensors.push({
            entityId: id,
            name: pl.name || entityName(hass, id),
            kind: (dc === "carbon_monoxide" ? "gas" : dc) as SecuritySensor["kind"],
            active: isActive(st),
            critical,
            location: loc,
            floorId: floor.id,
            roomId: room?.id ?? null,
          });
        }
      }
    }

    for (const f of floor.furniture ?? []) {
      if (f.entity && f.entity.startsWith("lock.")) {
        pushLock(f.entity, floor, roomAtPoint(floor, f.x, f.z));
      }
    }
  }

  // Sort: open/unlocked/active/critical first for instant situational awareness
  locks.sort((a, b) => Number(a.locked) - Number(b.locked) || a.name.localeCompare(b.name));
  openings.sort((a, b) => Number(b.open) - Number(a.open) || a.name.localeCompare(b.name));
  sensors.sort((a, b) => Number(b.critical && b.active) - Number(a.critical && a.active) || Number(b.active) - Number(a.active) || a.name.localeCompare(b.name));

  const openCount = openings.filter((o) => o.open).length;
  const unlockedCount = locks.filter((l) => !l.locked).length;
  const detectionCount = cameras.filter((c) => c.detections.length > 0).length;
  const criticalCount = sensors.filter((s) => s.critical && s.active).length;

  const alertLevel: SecuritySummary["alertLevel"] =
    alarm?.isTriggered || criticalCount > 0 || detectionCount > 0
      ? "alert"
      : openCount > 0 || unlockedCount > 0
        ? "warn"
        : "ok";

  return {
    alarm,
    cameras,
    locks,
    openings,
    sensors,
    summary: {
      cameraCount: cameras.length,
      openCount,
      unlockedCount,
      detectionCount,
      criticalCount,
      alertLevel,
    },
  };
}

export interface SecurityChipView {
  icon: string;
  label: string;
  alertLevel: SecuritySummary["alertLevel"];
  title: string;
}

/**
 * Formats the single unified Security & Cameras chip shown on the home panel and dashboard cards.
 * Returns null if the building has no alarm, cameras, locks, openings or security sensors.
 */
export function securityChipModel(
  hass: HomeAssistant | undefined,
  building: Building | null | undefined,
  alarmLabel?: string,
): SecurityChipView | null {
  if (!hass || !building) return null;
  const snap = collectSecuritySnapshot(hass, building);
  const { alarm, summary } = snap;
  if (!alarm && !summary.cameraCount && !snap.locks.length && !snap.openings.length && !snap.sensors.length) {
    return null;
  }
  const lang = (hass.language ?? "en").toLowerCase();
  const isPt = lang.startsWith("pt");
  const isDe = lang.startsWith("de");

  const icon =
    summary.alertLevel === "alert"
      ? "🚨"
      : summary.alertLevel === "warn"
        ? "⚠️"
        : alarm?.isPending
          ? "⏳"
          : alarm?.isArmed
            ? "🔒"
            : "🛡️";

  let text: string;
  if (alarm?.isTriggered || summary.criticalCount > 0) {
    text = isPt ? "Alerta!" : isDe ? "Alarm!" : "Alert!";
  } else if (summary.detectionCount > 0) {
    text = isPt ? `${summary.detectionCount} det.` : isDe ? `${summary.detectionCount} Erk.` : `${summary.detectionCount} det.`;
  } else if (summary.openCount > 0) {
    text = isPt ? `${summary.openCount} aberta${summary.openCount > 1 ? "s" : ""}` : isDe ? `${summary.openCount} offen` : `${summary.openCount} open`;
  } else if (summary.unlockedCount > 0) {
    text = isPt ? `${summary.unlockedCount} destr.` : isDe ? `${summary.unlockedCount} entsp.` : `${summary.unlockedCount} unl.`;
  } else if (alarm && alarmLabel) {
    text = alarmLabel;
  } else {
    text = isPt ? "Segurança" : isDe ? "Sicherheit" : "Security";
  }

  const label = summary.cameraCount > 0 ? `${text} · 📹 ${summary.cameraCount}` : text;
  const title = alarm ? `${alarm.name}: ${text}` : label;
  return { icon, label, alertLevel: summary.alertLevel, title };
}
