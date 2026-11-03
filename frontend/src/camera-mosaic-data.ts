// Camera discovery and responsive grid sizing for the custom <np-camera-mosaic> overview.
// Pure functions using Home Assistant's standard state/entity/area registries (no Lit or DOM dependencies).

import { entityAreaId, entityName, hiddenInHa } from "./devices.ts";
import { pointInPolygon, zonesOf, type Building, type Floor } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export interface MosaicCamera {
  entityId: string;
  label: string;
  location: string | null;
  floorId: string | null;
  floorName: string | null;
  roomId: string | null;
  online: boolean;
  state: string;
  pictureUrl: string | null;
  streamUrl: string | null;
}

function toStreamUrl(pictureUrl: string | null): string | null {
  if (!pictureUrl) return null;
  if (pictureUrl.startsWith("/api/camera_proxy/")) {
    return `/api/camera_proxy_stream/${pictureUrl.slice("/api/camera_proxy/".length)}`;
  }
  return null;
}

function findRoomAt(floor: Floor, x: number, z: number): { id: string; name: string } | null {
  for (const r of zonesOf(floor)) {
    if (r.points.length >= 3 && pointInPolygon([x, z], r.points)) {
      return { id: r.id, name: r.name || r.id };
    }
  }
  return null;
}

/**
 * Collects all cameras for the custom mosaic: first any `camera.*` entities explicitly placed on the 3D plan
 * (even if hidden in HA's registry), followed by all remaining visible `camera.*` entities in Home Assistant.
 */
export function collectMosaicCameras(hass: HomeAssistant | undefined, building: Building | null | undefined): MosaicCamera[] {
  if (!hass?.states) return [];
  const seen = new Set<string>();
  const placed: MosaicCamera[] = [];
  const floors = building?.floors ?? [];

  for (const floor of floors) {
    for (const p of floor.placements ?? []) {
      const id = p.entity_id;
      if (!id.startsWith("camera.") || seen.has(id)) continue;
      seen.add(id);
      const st = hass.states[id];
      const room = findRoomAt(floor, p.x, p.z);
      const label = (p.name && p.name.trim()) || entityName(hass, id);
      const pic = typeof st?.attributes.entity_picture === "string" ? st.attributes.entity_picture : null;
      const state = st?.state ?? "unavailable";
      placed.push({
        entityId: id,
        label,
        location: room ? (floors.length > 1 ? `${floor.name} · ${room.name}` : room.name) : floor.name || null,
        floorId: floor.id,
        floorName: floor.name || floor.id,
        roomId: room?.id ?? null,
        online: !!st && state !== "unavailable" && state !== "unknown",
        state,
        pictureUrl: pic,
        streamUrl: toStreamUrl(pic),
      });
    }
  }

  const extra: MosaicCamera[] = [];
  for (const id of Object.keys(hass.states)) {
    if (!id.startsWith("camera.") || seen.has(id) || hiddenInHa(hass, id)) continue;
    seen.add(id);
    const st = hass.states[id];
    const areaId = entityAreaId(hass, id);
    const area = areaId ? hass.areas?.[areaId] : undefined;
    let matchedFloor: Floor | null = null;
    let matchedRoom: { id: string; name: string } | null = null;
    if (areaId) {
      for (const f of floors) {
        const z = zonesOf(f).find((r) => r.area_id === areaId);
        if (z) {
          matchedFloor = f;
          matchedRoom = { id: z.id, name: z.name || area?.name || z.id };
          break;
        }
      }
      if (!matchedFloor && area?.floor_id) {
        matchedFloor = floors.find((f) => f.ha_floor === area.floor_id) ?? null;
      }
    }
    const loc = matchedRoom
      ? floors.length > 1 && matchedFloor
        ? `${matchedFloor.name} · ${matchedRoom.name}`
        : matchedRoom.name
      : area?.name ?? matchedFloor?.name ?? null;
    const pic = typeof st?.attributes.entity_picture === "string" ? st.attributes.entity_picture : null;
    const state = st?.state ?? "unavailable";
    extra.push({
      entityId: id,
      label: entityName(hass, id),
      location: loc,
      floorId: matchedFloor?.id ?? null,
      floorName: matchedFloor ? matchedFloor.name || matchedFloor.id : null,
      roomId: matchedRoom?.id ?? null,
      online: !!st && state !== "unavailable" && state !== "unknown",
      state,
      pictureUrl: pic,
      streamUrl: toStreamUrl(pic),
    });
  }

  extra.sort((a, b) => a.label.localeCompare(b.label));
  return [...placed, ...extra];
}

/** Quick count of available camera entities for toolbar badge display. */
export function countMosaicCameras(hass: HomeAssistant | undefined, building: Building | null | undefined): number {
  return collectMosaicCameras(hass, building).length;
}

/** Optimal column count so `count` 16:9 tiles fit without unnecessary scrolling in `width × height` pixels. */
export function mosaicColumns(count: number, width: number, height: number): number {
  if (count <= 1 || width < 480) return 1;
  const maxCols = Math.min(count, width < 820 ? 2 : width < 1320 ? 3 : 4);
  for (let cols = 1; cols <= maxCols; cols++) {
    const rows = Math.ceil(count / cols);
    const tileW = (width - (cols - 1) * 10) / cols;
    const totalH = rows * (tileW * (9 / 16) + 34) + (rows - 1) * 10;
    if (totalH <= height * 1.08) return cols;
  }
  return maxCols;
}
