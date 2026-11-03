// Camera discovery and responsive grid sizing for the custom <np-camera-mosaic> overview.
// Pure functions using only cameras placed or linked inside the 3D house plan (no Lit or DOM dependencies).

import { entityAreaId, entityName } from "./devices.ts";
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
 * Collects ONLY the `camera.*` entities that belong to the house plan:
 * 1. Cameras placed on a floor (`floor.placements`),
 * 2. Cameras linked to furniture on a floor (`f.entity` or `f.look_of`),
 * 3. Cameras explicitly added to a room/outdoor area's `panel` list in the house.
 * Unrelated `camera.*` entities enabled elsewhere in Home Assistant are ignored.
 */
export function collectMosaicCameras(hass: HomeAssistant | undefined, building: Building | null | undefined): MosaicCamera[] {
  if (!hass?.states || !building) return [];
  const seen = new Set<string>();
  const out: MosaicCamera[] = [];
  const floors = building.floors ?? [];

  const pushCamera = (
    id: string,
    floor: Floor,
    room: { id: string; name: string } | null,
    customName?: string | null,
  ) => {
    if (!id.startsWith("camera.") || seen.has(id)) return;
    const st = hass.states[id];
    if (!st) return;
    seen.add(id);

    let resolvedRoom = room;
    let fallbackAreaName: string | null = null;
    if (!resolvedRoom) {
      const areaId = entityAreaId(hass, id);
      if (areaId) {
        const z = zonesOf(floor).find((r) => r.area_id === areaId);
        if (z) resolvedRoom = { id: z.id, name: z.name || z.id };
        else fallbackAreaName = hass.areas?.[areaId]?.name ?? null;
      }
    }

    const loc = resolvedRoom
      ? floors.length > 1
        ? `${floor.name} · ${resolvedRoom.name}`
        : resolvedRoom.name
      : fallbackAreaName
        ? floors.length > 1
          ? `${floor.name} · ${fallbackAreaName}`
          : fallbackAreaName
        : floor.name || null;

    const pic = typeof st.attributes.entity_picture === "string" ? st.attributes.entity_picture : null;
    const state = st.state ?? "unavailable";
    out.push({
      entityId: id,
      label: (customName && customName.trim()) || entityName(hass, id),
      location: loc,
      floorId: floor.id,
      floorName: floor.name || floor.id,
      roomId: resolvedRoom?.id ?? null,
      online: state !== "unavailable" && state !== "unknown",
      state,
      pictureUrl: pic,
      streamUrl: toStreamUrl(pic),
    });
  };

  for (const floor of floors) {
    for (const p of floor.placements ?? []) {
      if (!p.entity_id.startsWith("camera.")) continue;
      pushCamera(p.entity_id, floor, findRoomAt(floor, p.x, p.z), p.name);
    }
    for (const f of floor.furniture ?? []) {
      const camId = f.look_of?.startsWith("camera.") ? f.look_of : f.entity?.startsWith("camera.") ? f.entity : null;
      if (camId) pushCamera(camId, floor, findRoomAt(floor, f.x, f.z), f.name);
    }
    for (const r of zonesOf(floor)) {
      const hidden = new Set(r.hidden ?? []);
      for (const id of r.panel ?? []) {
        if (id.startsWith("camera.") && !hidden.has(id)) {
          pushCamera(id, floor, { id: r.id, name: r.name || r.id });
        }
      }
    }
  }

  return out;
}

/** Quick count of cameras placed/linked in the house for toolbar badge display. */
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
