// Custom multi-camera mosaic modal (<np-camera-mosaic>) for viewing all Home Assistant camera.* feeds at once.

import { css, html, LitElement, nothing } from "lit";
import { collectMosaicCameras, mosaicColumns, type MosaicCamera } from "../camera-mosaic-data.ts";
import type { Building } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

interface Labels {
  title: string;
  all: string;
  live: string;
  snap: string;
  grid: string;
  empty: string;
  offline: string;
  go3d: string;
  details: string;
  close: string;
}

const LABELS: Record<"pt" | "de" | "en", Labels> = {
  pt: {
    title: "Câmeras",
    all: "Todas",
    live: "Ao vivo",
    snap: "3s",
    grid: "Grade",
    empty: "Nenhuma câmera posicionada na casa.",
    offline: "Indisponível",
    go3d: "Ver no 3D",
    details: "Detalhes no Home Assistant",
    close: "Fechar",
  },
  de: {
    title: "Kameras",
    all: "Alle",
    live: "Live",
    snap: "3s",
    grid: "Raster",
    empty: "Keine Kameras im Haus platziert.",
    offline: "Nicht verfügbar",
    go3d: "In 3D zeigen",
    details: "Home-Assistant-Details",
    close: "Schließen",
  },
  en: {
    title: "Cameras",
    all: "All",
    live: "Live",
    snap: "3s",
    grid: "Grid",
    empty: "No cameras placed in the house.",
    offline: "Unavailable",
    go3d: "Show in 3D",
    details: "Home Assistant details",
    close: "Close",
  },
};

function labelsFor(lang: string | undefined): Labels {
  const l = (lang ?? "en").toLowerCase();
  if (l.startsWith("pt")) return LABELS.pt;
  if (l.startsWith("de")) return LABELS.de;
  return LABELS.en;
}

export class NpCameraMosaic extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    open: { type: Boolean },
    _live: { state: true },
    _floor: { state: true },
    _focusId: { state: true },
    _tick: { state: true },
    _cols: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null | undefined;
  declare open: boolean;
  private declare _live: boolean;
  private declare _floor: string | null;
  private declare _focusId: string | null;
  private declare _tick: number;
  private declare _cols: number;

  private timer: ReturnType<typeof setInterval> | undefined;
  private ro: ResizeObserver | undefined;
  private gridW = 960;
  private gridH = 600;

  private onKey = (e: KeyboardEvent) => {
    if (!this.open) return;
    if (e.key === "Escape") {
      e.stopPropagation();
      if (this._focusId) this._focusId = null;
      else this.closeModal();
    } else if (this._focusId && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      e.preventDefault();
      this.stepFocus(e.key === "ArrowRight" ? 1 : -1);
    }
  };

  constructor() {
    super();
    this.hass = undefined;
    this.building = null;
    this.open = false;
    this._live = true;
    this._floor = null;
    this._focusId = null;
    this._tick = 0;
    this._cols = 2;
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
    this.syncTimer();
  }

  disconnectedCallback(): void {
    window.removeEventListener("keydown", this.onKey);
    this.stopTimer();
    if (this.ro) {
      this.ro.disconnect();
      this.ro = undefined;
    }
    super.disconnectedCallback();
  }

  updated(changed: Map<string, unknown>): void {
    if (changed.has("open")) {
      if (!this.open) this._focusId = null;
      this.syncTimer();
      this.observeStage();
    } else if (changed.has("_live")) {
      this.syncTimer();
    }
  }

  private observeStage(): void {
    if (!this.open) {
      if (this.ro) {
        this.ro.disconnect();
        this.ro = undefined;
      }
      return;
    }
    const el = this.renderRoot.querySelector(".np-cam-stage");
    if (!el || typeof ResizeObserver === "undefined") return;
    if (this.ro) this.ro.disconnect();
    this.ro = new ResizeObserver((entries) => {
      const r = entries[0]?.contentRect;
      if (!r || r.width < 40) return;
      this.gridW = r.width;
      this.gridH = r.height;
      const next = mosaicColumns(this.visibleCameras().length, r.width, r.height);
      if (next !== this._cols) this._cols = next;
    });
    this.ro.observe(el);
  }

  private syncTimer(): void {
    this.stopTimer();
    if (this.open && !this._live) {
      this._tick = Date.now();
      this.timer = setInterval(() => {
        this._tick = Date.now();
      }, 3000);
    }
  }

  private stopTimer(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private closeModal(): void {
    this.dispatchEvent(new CustomEvent("mosaic-close", { bubbles: true, composed: true }));
  }

  private openMoreInfo(e: Event, entityId: string): void {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
  }

  private jump3d(e: Event, cam: MosaicCamera): void {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("mosaic-jump", {
        detail: { floorId: cam.floorId, roomId: cam.roomId },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private visibleCameras(all = collectMosaicCameras(this.hass, this.building)): MosaicCamera[] {
    if (!this._floor) return all;
    return all.filter((c) => c.floorId === this._floor);
  }

  private stepFocus(dir: -1 | 1): void {
    const list = this.visibleCameras();
    if (list.length < 2 || !this._focusId) return;
    const idx = list.findIndex((c) => c.entityId === this._focusId);
    if (idx < 0) return;
    this._focusId = list[(idx + dir + list.length) % list.length].entityId;
  }

  private renderFeed(cam: MosaicCamera, lb: Labels) {
    const st = this.hass?.states[cam.entityId];
    if (!cam.online || !st) {
      return html`<div class="np-cam-off">${lb.offline}</div>`;
    }
    const canHaStream = typeof customElements !== "undefined" && !!customElements.get("ha-camera-stream");
    if (this._live) {
      if (canHaStream) {
        return html`<ha-camera-stream .hass=${this.hass} .stateObj=${st} muted allow-exoplayer></ha-camera-stream>`;
      }
      const url = cam.streamUrl ?? cam.pictureUrl;
      if (url) return html`<img src=${url} alt=${cam.label} />`;
    } else if (cam.pictureUrl) {
      const sep = cam.pictureUrl.includes("?") ? "&" : "?";
      const ts = this._tick || 1;
      return html`<img src=${`${cam.pictureUrl}${sep}_ts=${ts}`} alt=${cam.label} loading="lazy" />`;
    }
    return html`<div class="np-cam-off">${lb.offline}</div>`;
  }

  private renderTile(cam: MosaicCamera, lb: Labels, focused: boolean) {
    return html`<div
      class="np-cam-tile ${focused ? "np-cam-focused" : ""}"
      @click=${() => (this._focusId = focused ? null : cam.entityId)}
    >
      <div class="np-cam-media">${this.renderFeed(cam, lb)}</div>
      <div class="np-cam-bar">
        <span class="np-cam-dot ${cam.online ? "on" : ""}"></span>
        <span class="np-cam-name" title=${cam.entityId}>${cam.label}</span>
        ${cam.location ? html`<span class="np-cam-loc">${cam.location}</span>` : nothing}
        <span class="np-cam-spacer"></span>
        ${cam.floorId || cam.roomId
          ? html`<button class="np-cam-act" title=${lb.go3d} @click=${(e: Event) => this.jump3d(e, cam)}>📍 3D</button>`
          : nothing}
        <button class="np-cam-act" title=${lb.details} @click=${(e: Event) => this.openMoreInfo(e, cam.entityId)}>ⓘ</button>
      </div>
    </div>`;
  }

  render() {
    if (!this.open) return nothing;
    const lb = labelsFor(this.hass?.language);
    const all = collectMosaicCameras(this.hass, this.building);
    const floorMap = new Map<string, string>();
    for (const c of all) if (c.floorId && c.floorName && !floorMap.has(c.floorId)) floorMap.set(c.floorId, c.floorName);
    const floors = [...floorMap.entries()];
    const list = this._floor && floorMap.has(this._floor) ? all.filter((c) => c.floorId === this._floor) : all;
    const focused = this._focusId ? list.find((c) => c.entityId === this._focusId) ?? null : null;
    const cols = focused ? 1 : mosaicColumns(list.length, this.gridW, this.gridH);

    return html`<div class="np-cam-veil" @click=${(e: Event) => e.target === e.currentTarget && this.closeModal()}>
      <div class="np-cam-dialog" role="dialog" aria-label=${lb.title}>
        <header class="np-cam-head">
          <div class="np-cam-title">📹 ${lb.title} <span>(${list.length})</span></div>
          ${floors.length > 1
            ? html`<div class="fp3d-seg">
                <button aria-pressed=${!this._floor} @click=${() => ((this._floor = null), (this._focusId = null))}>${lb.all}</button>
                ${floors.map(
                  ([fid, fname]) =>
                    html`<button aria-pressed=${this._floor === fid} @click=${() => ((this._floor = fid), (this._focusId = null))}>${fname}</button>`,
                )}
              </div>`
            : nothing}
          <div class="np-cam-spacer"></div>
          ${focused
            ? html`<button class="fp3d-btn" @click=${() => (this._focusId = null)}>⊞ ${lb.grid}</button>
                ${list.length > 1
                  ? html`<button class="fp3d-btn" @click=${() => this.stepFocus(-1)}>‹</button>
                      <button class="fp3d-btn" @click=${() => this.stepFocus(1)}>›</button>`
                  : nothing}`
            : nothing}
          <div class="fp3d-seg">
            <button aria-pressed=${this._live} @click=${() => (this._live = true)}>● ${lb.live}</button>
            <button aria-pressed=${!this._live} @click=${() => (this._live = false)}>⟳ ${lb.snap}</button>
          </div>
          <button class="fp3d-btn" title=${lb.close} aria-label=${lb.close} @click=${() => this.closeModal()}>✕</button>
        </header>
        <div class="np-cam-stage">
          ${!list.length
            ? html`<div class="np-cam-empty">${lb.empty}</div>`
            : focused
              ? html`<div class="np-cam-single">${this.renderTile(focused, lb, true)}</div>`
              : html`<div class="np-cam-grid" style=${`--np-cols:${cols}`}>
                  ${list.map((cam) => this.renderTile(cam, lb, false))}
                </div>`}
        </div>
      </div>
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .np-cam-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px;
        background: rgba(3, 7, 15, 0.78);
        backdrop-filter: blur(8px);
      }
      .np-cam-dialog {
        display: flex;
        flex-direction: column;
        width: min(1480px, 100%);
        height: min(900px, calc(100vh - 28px));
        background: var(--fp3d-bg2);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      @supports (height: 100dvh) {
        .np-cam-dialog {
          height: min(900px, calc(100dvh - 28px));
        }
      }
      .np-cam-head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        background: var(--fp3d-chrome-solid);
        border-bottom: 1px solid var(--fp3d-line);
      }
      .np-cam-title {
        font-family: var(--fp3d-title-font);
        font-size: 16px;
        font-weight: 700;
        margin-right: 4px;
      }
      .np-cam-title span {
        color: var(--fp3d-muted);
        font-weight: 500;
      }
      .np-cam-spacer {
        flex: 1;
      }
      .np-cam-stage {
        flex: 1;
        min-height: 0;
        padding: 12px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
      .np-cam-grid {
        display: grid;
        grid-template-columns: repeat(var(--np-cols, 2), minmax(0, 1fr));
        gap: 10px;
        align-content: start;
      }
      .np-cam-single {
        flex: 1;
        min-height: 0;
        display: flex;
      }
      .np-cam-tile {
        position: relative;
        display: flex;
        flex-direction: column;
        background: #050811;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
      }
      .np-cam-tile:hover {
        border-color: var(--fp3d-accent);
      }
      .np-cam-focused {
        flex: 1;
        min-height: 0;
      }
      .np-cam-media {
        position: relative;
        aspect-ratio: 16 / 9;
        width: 100%;
        background: #04070e;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .np-cam-focused .np-cam-media {
        aspect-ratio: auto;
        flex: 1;
        min-height: 0;
      }
      .np-cam-media img,
      .np-cam-media ha-camera-stream {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }
      .np-cam-off,
      .np-cam-empty {
        margin: auto;
        padding: 20px;
        text-align: center;
        color: var(--fp3d-muted);
        font-size: 14px;
      }
      .np-cam-bar {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 7px 10px;
        background: rgba(10, 16, 30, 0.92);
        border-top: 1px solid rgba(120, 170, 255, 0.1);
        font-size: 13px;
      }
      .np-cam-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--fp3d-danger);
        flex-shrink: 0;
      }
      .np-cam-dot.on {
        background: #34d399;
        box-shadow: 0 0 8px rgba(52, 211, 153, 0.7);
      }
      .np-cam-name {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .np-cam-loc {
        padding: 2px 7px;
        border-radius: 999px;
        background: rgba(55, 224, 255, 0.12);
        color: var(--fp3d-accent);
        font-size: 11px;
        white-space: nowrap;
      }
      .np-cam-act {
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
        border-radius: 7px;
        padding: 3px 8px;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }
      .np-cam-act:hover {
        border-color: var(--fp3d-accent);
      }
    `,
  ];
}

if (typeof customElements !== "undefined" && !customElements.get("np-camera-mosaic")) {
  customElements.define("np-camera-mosaic", NpCameraMosaic);
}
