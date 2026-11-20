// Unified Security & Cameras Command Center (<np-camera-mosaic>) combining multi-camera feeds
// with AI/motion badges, alarm control + PIN keypad, locks, perimeter doors/windows/gates, sensors & event log.

import { css, html, LitElement, nothing } from "lit";
import { mosaicColumns } from "../camera-mosaic-data.ts";
import type { Building } from "../model.ts";
import {
  collectSecuritySnapshot,
  type SecurityAlarm,
  type SecurityCamera,
  type SecurityLock,
  type SecurityOpening,
  type SecuritySensor,
  type SecuritySnapshot,
} from "../security-data.ts";
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
  tabCameras: string;
  tabSecurity: string;
  statusOk: string;
  statusWarn: string;
  statusAlert: string;
  alarmTitle: string;
  disarm: string;
  armHome: string;
  armAway: string;
  armNight: string;
  armVacation: string;
  pinPrompt: string;
  pinClear: string;
  pinConfirm: string;
  pinCancel: string;
  locksTitle: string;
  lockAll: string;
  lock: string;
  unlock: string;
  locked: string;
  unlocked: string;
  perimeterTitle: string;
  open: string;
  closed: string;
  openCover: string;
  closeCover: string;
  showClosed: string;
  hideClosed: string;
  sensorsTitle: string;
  active: string;
  clear: string;
  eventsTitle: string;
  noEvents: string;
  detPerson: string;
  detCar: string;
  detPet: string;
  detMotion: string;
  alarmStates: Record<string, string>;
}

const LABELS: Record<"pt" | "de" | "en", Labels> = {
  pt: {
    title: "Segurança & Câmeras",
    all: "Todas",
    live: "Ao vivo",
    snap: "3s",
    grid: "Grade",
    empty: "Nenhuma câmera posicionada na casa.",
    offline: "Indisponível",
    go3d: "Ver no 3D",
    details: "Detalhes no Home Assistant",
    close: "Fechar",
    tabCameras: "Câmeras",
    tabSecurity: "Alarme & Perímetro",
    statusOk: "Tudo seguro",
    statusWarn: "Atenção",
    statusAlert: "Alerta ativo",
    alarmTitle: "Alarme",
    disarm: "Desarmar",
    armHome: "Em Casa",
    armAway: "Ausente",
    armNight: "Noite",
    armVacation: "Férias",
    pinPrompt: "Digite o código PIN",
    pinClear: "Limpar",
    pinConfirm: "Confirmar",
    pinCancel: "Cancelar",
    locksTitle: "Fechaduras",
    lockAll: "Trancar todas",
    lock: "Trancar",
    unlock: "Destrancar",
    locked: "Trancada",
    unlocked: "Destrancada",
    perimeterTitle: "Portas, Janelas & Portões",
    open: "Aberto(a)",
    closed: "Fechado(a)",
    openCover: "Abrir",
    closeCover: "Fechar",
    showClosed: "Mostrar fechados",
    hideClosed: "Ocultar fechados",
    sensorsTitle: "Sensores & Presença",
    active: "Detectado",
    clear: "Livre",
    eventsTitle: "Eventos Recentes",
    noEvents: "Nenhum evento registrado nesta sessão.",
    detPerson: "Pessoa",
    detCar: "Carro",
    detPet: "Pet",
    detMotion: "Movimento",
    alarmStates: {
      disarmed: "Desarmado",
      armed_home: "Armado (Casa)",
      armed_away: "Armado (Ausente)",
      armed_night: "Armado (Noite)",
      armed_vacation: "Armado (Férias)",
      arming: "Armando…",
      pending: "Aguardando…",
      triggered: "Disparado!",
    },
  },
  de: {
    title: "Sicherheit & Kameras",
    all: "Alle",
    live: "Live",
    snap: "3s",
    grid: "Raster",
    empty: "Keine Kameras im Haus platziert.",
    offline: "Nicht verfügbar",
    go3d: "In 3D zeigen",
    details: "Home-Assistant-Details",
    close: "Schließen",
    tabCameras: "Kameras",
    tabSecurity: "Alarm & Sensoren",
    statusOk: "Alles sicher",
    statusWarn: "Achtung",
    statusAlert: "Alarm aktiv",
    alarmTitle: "Alarmanlage",
    disarm: "Unscharf",
    armHome: "Zuhause",
    armAway: "Abwesend",
    armNight: "Nacht",
    armVacation: "Urlaub",
    pinPrompt: "PIN-Code eingeben",
    pinClear: "Leeren",
    pinConfirm: "OK",
    pinCancel: "Abbrechen",
    locksTitle: "Schlösser",
    lockAll: "Alle abschließen",
    lock: "Abschließen",
    unlock: "Aufschließen",
    locked: "Abgeschlossen",
    unlocked: "Offen",
    perimeterTitle: "Türen, Fenster & Tore",
    open: "Offen",
    closed: "Geschlossen",
    openCover: "Öffnen",
    closeCover: "Schließen",
    showClosed: "Geschlossene zeigen",
    hideClosed: "Geschlossene ausblenden",
    sensorsTitle: "Sensoren & Bewegung",
    active: "Erkannt",
    clear: "Ruhig",
    eventsTitle: "Letzte Ereignisse",
    noEvents: "Keine Ereignisse in dieser Sitzung.",
    detPerson: "Person",
    detCar: "Auto",
    detPet: "Haustier",
    detMotion: "Bewegung",
    alarmStates: {
      disarmed: "Unscharf",
      armed_home: "Scharf (Zuhause)",
      armed_away: "Scharf (Abwesend)",
      armed_night: "Scharf (Nacht)",
      armed_vacation: "Scharf (Urlaub)",
      arming: "Wird geschärft…",
      pending: "Verzögerung…",
      triggered: "Ausgelöst!",
    },
  },
  en: {
    title: "Security & Cameras",
    all: "All",
    live: "Live",
    snap: "3s",
    grid: "Grid",
    empty: "No cameras placed in the house.",
    offline: "Unavailable",
    go3d: "Show in 3D",
    details: "Home Assistant details",
    close: "Close",
    tabCameras: "Cameras",
    tabSecurity: "Alarm & Perimeter",
    statusOk: "All secure",
    statusWarn: "Attention",
    statusAlert: "Active alert",
    alarmTitle: "Alarm",
    disarm: "Disarm",
    armHome: "Home",
    armAway: "Away",
    armNight: "Night",
    armVacation: "Vacation",
    pinPrompt: "Enter PIN code",
    pinClear: "Clear",
    pinConfirm: "Confirm",
    pinCancel: "Cancel",
    locksTitle: "Locks",
    lockAll: "Lock all",
    lock: "Lock",
    unlock: "Unlock",
    locked: "Locked",
    unlocked: "Unlocked",
    perimeterTitle: "Doors, Windows & Gates",
    open: "Open",
    closed: "Closed",
    openCover: "Open",
    closeCover: "Close",
    showClosed: "Show closed",
    hideClosed: "Hide closed",
    sensorsTitle: "Motion & Safety Sensors",
    active: "Detected",
    clear: "Clear",
    eventsTitle: "Recent Events",
    noEvents: "No events recorded in this session.",
    detPerson: "Person",
    detCar: "Car",
    detPet: "Pet",
    detMotion: "Motion",
    alarmStates: {
      disarmed: "Disarmed",
      armed_home: "Armed Home",
      armed_away: "Armed Away",
      armed_night: "Armed Night",
      armed_vacation: "Armed Vacation",
      arming: "Arming…",
      pending: "Pending…",
      triggered: "Triggered!",
    },
  },
};

function labelsFor(lang: string | undefined): Labels {
  const l = (lang ?? "en").toLowerCase();
  if (l.startsWith("pt")) return LABELS.pt;
  if (l.startsWith("de")) return LABELS.de;
  return LABELS.en;
}

interface SecurityEventItem {
  time: string;
  icon: string;
  text: string;
}

type AlarmAction = "alarm_disarm" | "alarm_arm_home" | "alarm_arm_away" | "alarm_arm_night" | "alarm_arm_vacation";

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
    _tab: { state: true },
    _pinAction: { state: true },
    _pin: { state: true },
    _showClosed: { state: true },
    _events: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null | undefined;
  declare open: boolean;
  private declare _live: boolean;
  private declare _floor: string | null;
  private declare _focusId: string | null;
  private declare _tick: number;
  private declare _cols: number;
  private declare _tab: "cameras" | "security";
  private declare _pinAction: AlarmAction | null;
  private declare _pin: string;
  private declare _showClosed: boolean;
  private declare _events: SecurityEventItem[];

  private timer: ReturnType<typeof setInterval> | undefined;
  private ro: ResizeObserver | undefined;
  private gridW = 720;
  private gridH = 560;
  private prevSnap: SecuritySnapshot | null = null;

  private onKey = (e: KeyboardEvent) => {
    if (!this.open) return;
    if (e.key === "Escape") {
      e.stopPropagation();
      if (this._pinAction) {
        this._pinAction = null;
        this._pin = "";
      } else if (this._focusId) {
        this._focusId = null;
      } else {
        this.closeModal();
      }
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
    this._tab = "cameras";
    this._pinAction = null;
    this._pin = "";
    this._showClosed = false;
    this._events = [];
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    this.stopTimer();
    this.ro?.disconnect();
    this.ro = undefined;
  }

  protected updated(changed: Map<string, unknown>): void {
    if (changed.has("open")) {
      if (this.open) {
        this._tick = Date.now();
        this.startTimer();
        this.observeGrid();
      } else {
        this.stopTimer();
        this._focusId = null;
        this._pinAction = null;
        this._pin = "";
      }
    }
    if (changed.has("_live") && this.open) {
      this._tick = Date.now();
      this.startTimer();
    }
    if (this.hass && this.building && (changed.has("hass") || changed.has("building"))) {
      this.trackEvents(collectSecuritySnapshot(this.hass, this.building));
    }
  }

  private trackEvents(cur: SecuritySnapshot): void {
    const prev = this.prevSnap;
    this.prevSnap = cur;
    if (!prev) return;

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const lb = labelsFor(this.hass?.language);
    const added: SecurityEventItem[] = [];

    if (prev.alarm && cur.alarm && prev.alarm.state !== cur.alarm.state) {
      added.push({
        time,
        icon: cur.alarm.isTriggered ? "🚨" : cur.alarm.isArmed ? "🔒" : "🛡️",
        text: `${cur.alarm.name}: ${lb.alarmStates[cur.alarm.state] ?? cur.alarm.state}`,
      });
    }
    const prevLocks = new Map(prev.locks.map((l) => [l.entityId, l.locked]));
    for (const l of cur.locks) {
      const old = prevLocks.get(l.entityId);
      if (old !== undefined && old !== l.locked) {
        added.push({ time, icon: l.locked ? "🔒" : "🔓", text: `${l.name}: ${l.locked ? lb.locked : lb.unlocked}` });
      }
    }
    const prevOpenings = new Map(prev.openings.map((o) => [o.entityId, o.open]));
    for (const o of cur.openings) {
      const old = prevOpenings.get(o.entityId);
      if (old !== undefined && old !== o.open) {
        added.push({ time, icon: o.open ? "🚪" : "✅", text: `${o.name}: ${o.open ? lb.open : lb.closed}` });
      }
    }
    const prevCams = new Map(prev.cameras.map((c) => [c.entityId, c.detections.join(",")]));
    for (const c of cur.cameras) {
      const old = prevCams.get(c.entityId) ?? "";
      const nowDet = c.detections.join(",");
      if (c.detections.length > 0 && nowDet !== old) {
        const label = c.detections.map((d) => this.detLabel(d, lb)).join(", ");
        added.push({ time, icon: "📹", text: `${c.label}: ${label}` });
      }
    }
    if (added.length) {
      this._events = [...added, ...this._events].slice(0, 12);
    }
  }

  private detLabel(kind: string, lb: Labels): string {
    if (kind === "person") return `🚶 ${lb.detPerson}`;
    if (kind === "car") return `🚗 ${lb.detCar}`;
    if (kind === "pet") return `🐾 ${lb.detPet}`;
    return `⚡ ${lb.detMotion}`;
  }

  private observeGrid(): void {
    void this.updateComplete.then(() => {
      const stage = this.renderRoot.querySelector<HTMLElement>(".np-cam-stage");
      if (!stage) return;
      this.ro?.disconnect();
      this.ro = new ResizeObserver((entries) => {
        const rect = entries[0]?.contentRect;
        if (!rect || rect.width < 10 || rect.height < 10) return;
        this.gridW = rect.width;
        this.gridH = rect.height;
        this.requestUpdate();
      });
      this.ro.observe(stage);
    });
  }

  private startTimer(): void {
    this.stopTimer();
    if (!this.open || this._live) return;
    this.timer = setInterval(() => {
      this._tick = Date.now();
    }, 3000);
  }

  private stopTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private stepFocus(delta: number): void {
    const snap = collectSecuritySnapshot(this.hass, this.building);
    const list = this._floor ? snap.cameras.filter((c) => c.floorId === this._floor) : snap.cameras;
    if (list.length <= 1 || !this._focusId) return;
    const idx = list.findIndex((c) => c.entityId === this._focusId);
    if (idx < 0) return;
    const next = list[(idx + delta + list.length) % list.length];
    this._focusId = next.entityId;
  }

  private closeModal(): void {
    this.dispatchEvent(new CustomEvent("mosaic-close", { bubbles: true, composed: true }));
  }

  private openMoreInfo(e: Event, entityId: string): void {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
  }

  private jump3d(e: Event, target: { floorId: string | null; roomId: string | null; entityId?: string }): void {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("mosaic-jump", {
        detail: { floorId: target.floorId, roomId: target.roomId, entityId: target.entityId ?? null },
        bubbles: true,
        composed: true,
      }),
    );
    this.closeModal();
  }

  private callAlarm(alarm: SecurityAlarm, action: AlarmAction): void {
    if (!this.hass) return;
    const needsPin = alarm.requiresCode && (action === "alarm_disarm" || alarm.codeFormat === "number");
    if (needsPin && this._pinAction !== action) {
      this._pinAction = action;
      this._pin = "";
      return;
    }
    const data: Record<string, unknown> = { entity_id: alarm.entityId };
    if (this._pin) data.code = this._pin;
    this.hass.callService("alarm_control_panel", action, data);
    this._pinAction = null;
    this._pin = "";
  }

  private submitPin(alarm: SecurityAlarm): void {
    if (!this._pinAction || !this.hass) return;
    const data: Record<string, unknown> = { entity_id: alarm.entityId };
    if (this._pin) data.code = this._pin;
    this.hass.callService("alarm_control_panel", this._pinAction, data);
    this._pinAction = null;
    this._pin = "";
  }

  private toggleLock(l: SecurityLock): void {
    if (!this.hass) return;
    this.hass.callService("lock", l.locked ? "unlock" : "lock", { entity_id: l.entityId });
  }

  private lockAll(locks: SecurityLock[]): void {
    if (!this.hass) return;
    for (const l of locks) {
      if (!l.locked) this.hass.callService("lock", "lock", { entity_id: l.entityId });
    }
  }

  private toggleCover(o: SecurityOpening): void {
    if (!this.hass || !o.canControl) return;
    this.hass.callService("cover", o.open ? "close_cover" : "open_cover", { entity_id: o.entityId });
  }

  private renderFeed(cam: SecurityCamera, lb: Labels) {
    const st = this.hass?.states[cam.entityId];
    if (!cam.online || !st) return html`<div class="np-cam-off">${lb.offline}</div>`;
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

  private renderTile(cam: SecurityCamera, lb: Labels, focused: boolean) {
    const hasDet = cam.detections.length > 0;
    return html`<div
      class="np-cam-tile ${focused ? "np-cam-focused" : ""} ${hasDet ? "np-cam-alert" : ""}"
      @click=${() => (this._focusId = focused ? null : cam.entityId)}
    >
      <div class="np-cam-media">
        ${this.renderFeed(cam, lb)}
        ${hasDet
          ? html`<div class="np-cam-dets">${cam.detections.map((d) => html`<span class="np-det-badge">${this.detLabel(d, lb)}</span>`)}</div>`
          : nothing}
      </div>
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

  private renderAlarmCard(alarm: SecurityAlarm | null, lb: Labels) {
    if (!alarm) return nothing;
    const label = lb.alarmStates[alarm.state] ?? alarm.state.replace(/_/g, " ");
    const stateCls = alarm.isTriggered ? "alert" : alarm.isArmed ? "armed" : alarm.isPending ? "warn" : "off";
    const icon = alarm.isTriggered ? "🚨" : alarm.isArmed ? "🔒" : alarm.isPending ? "⏳" : "🛡️";

    return html`<section class="np-sec-card">
      <div class="np-sec-card-head">
        <span>${icon} ${lb.alarmTitle}</span>
        <span class="np-sec-badge ${stateCls}">${label}</span>
      </div>
      <div class="np-alarm-btns">
        ${alarm.state !== "disarmed"
          ? html`<button class="fp3d-btn np-btn-disarm" @click=${() => this.callAlarm(alarm, "alarm_disarm")}>${lb.disarm}</button>`
          : nothing}
        ${alarm.state !== "armed_home"
          ? html`<button class="fp3d-btn" @click=${() => this.callAlarm(alarm, "alarm_arm_home")}>🏠 ${lb.armHome}</button>`
          : nothing}
        ${alarm.state !== "armed_away"
          ? html`<button class="fp3d-btn" @click=${() => this.callAlarm(alarm, "alarm_arm_away")}>🚪 ${lb.armAway}</button>`
          : nothing}
        ${alarm.state !== "armed_night"
          ? html`<button class="fp3d-btn" @click=${() => this.callAlarm(alarm, "alarm_arm_night")}>🌙 ${lb.armNight}</button>`
          : nothing}
        ${alarm.state !== "armed_vacation"
          ? html`<button class="fp3d-btn" @click=${() => this.callAlarm(alarm, "alarm_arm_vacation")}>✈️ ${lb.armVacation}</button>`
          : nothing}
      </div>
      ${this._pinAction
        ? html`<div class="np-pin-box">
            <div class="np-pin-head">
              <span>${lb.pinPrompt}</span>
              <span class="np-pin-dots">${"●".repeat(this._pin.length) || "—"}</span>
            </div>
            <div class="np-pin-pad">
              ${["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "✓"].map((k) =>
                k === "C"
                  ? html`<button class="fp3d-btn" @click=${() => (this._pin = "")}>${lb.pinClear}</button>`
                  : k === "✓"
                    ? html`<button class="fp3d-btn np-pin-ok" @click=${() => this.submitPin(alarm)}>${lb.pinConfirm}</button>`
                    : html`<button class="fp3d-btn" @click=${() => (this._pin += k)}>${k}</button>`,
              )}
            </div>
            <button class="fp3d-link np-pin-cancel" @click=${() => ((this._pinAction = null), (this._pin = ""))}>${lb.pinCancel}</button>
          </div>`
        : nothing}
    </section>`;
  }

  private renderLocksCard(locks: SecurityLock[], lb: Labels) {
    if (!locks.length) return nothing;
    const unlockedCount = locks.filter((l) => !l.locked).length;
    return html`<section class="np-sec-card">
      <div class="np-sec-card-head">
        <span>🔐 ${lb.locksTitle} (${locks.length})</span>
        ${unlockedCount > 0
          ? html`<button class="fp3d-btn np-btn-sm" @click=${() => this.lockAll(locks)}>🔒 ${lb.lockAll}</button>`
          : nothing}
      </div>
      <div class="np-sec-list">
        ${locks.map(
          (l) => html`<div class="np-sec-row ${l.locked ? "" : "warn"}">
            <span class="np-row-icon">${l.locked ? "🔒" : "🔓"}</span>
            <div class="np-row-info">
              <div class="np-row-name">${l.name}</div>
              <div class="np-row-sub">${l.location ? `${l.location} · ` : ""}${l.locked ? lb.locked : lb.unlocked}</div>
            </div>
            <button class="fp3d-btn np-btn-sm" @click=${() => this.toggleLock(l)}>${l.locked ? lb.unlock : lb.lock}</button>
            <button class="np-cam-act" title=${lb.go3d} @click=${(e: Event) => this.jump3d(e, l)}>📍</button>
          </div>`,
        )}
      </div>
    </section>`;
  }

  private renderPerimeterCard(openings: SecurityOpening[], lb: Labels) {
    if (!openings.length) return nothing;
    const openItems = openings.filter((o) => o.open);
    const closedItems = openings.filter((o) => !o.open);
    const shown = this._showClosed ? openings : openItems.length ? openItems : openings.slice(0, 4);
    const kindIcon = (k: SecurityOpening["kind"]) => (k === "window" ? "🪟" : k === "garage" ? "🚗" : k === "gate" ? "🚧" : "🚪");

    return html`<section class="np-sec-card">
      <div class="np-sec-card-head">
        <span>🚪 ${lb.perimeterTitle}</span>
        <span class="np-sec-badge ${openItems.length ? "warn" : "ok"}">${openItems.length} ${lb.open.toLowerCase()}</span>
      </div>
      <div class="np-sec-list">
        ${shown.map(
          (o) => html`<div class="np-sec-row ${o.open || (o.lock && !o.lock.locked) ? "warn" : ""}">
            <span class="np-row-icon">${kindIcon(o.kind)}</span>
            <div class="np-row-info">
              <div class="np-row-name">${o.name}</div>
              <div class="np-row-sub">
                ${o.location ? `${o.location} · ` : ""}${o.open ? lb.open : lb.closed}${o.lock
                  ? ` · ${o.lock.locked ? `🔒 ${lb.locked}` : `🔓 ${lb.unlocked}`}`
                  : ""}
              </div>
            </div>
            ${o.canControl
              ? html`<button class="fp3d-btn np-btn-sm" @click=${() => this.toggleCover(o)}>${o.open ? lb.closeCover : lb.openCover}</button>`
              : nothing}
            ${o.lock
              ? html`<button
                  class="fp3d-btn np-btn-sm"
                  @click=${() => this.toggleLock({ entityId: o.lock!.entityId, locked: o.lock!.locked } as SecurityLock)}
                >
                  ${o.lock.locked ? lb.unlock : lb.lock}
                </button>`
              : nothing}
            <button class="np-cam-act" title=${lb.go3d} @click=${(e: Event) => this.jump3d(e, o)}>📍</button>
          </div>`,
        )}
      </div>
      ${closedItems.length > 0 && (openItems.length > 0 || openings.length > 4)
        ? html`<button class="fp3d-link np-toggle-closed" @click=${() => (this._showClosed = !this._showClosed)}>
            ${this._showClosed ? lb.hideClosed : `${lb.showClosed} (${closedItems.length})`}
          </button>`
        : nothing}
    </section>`;
  }

  private renderSensorsCard(sensors: SecuritySensor[], lb: Labels) {
    if (!sensors.length) return nothing;
    const activeSensors = sensors.filter((s) => s.active);
    const shown = activeSensors.length ? activeSensors : sensors.slice(0, 5);
    const sensorIcon = (s: SecuritySensor) =>
      s.kind === "smoke" || s.kind === "gas" ? "🔥" : s.kind === "moisture" ? "💧" : s.active ? "👁️" : "⚪";

    return html`<section class="np-sec-card">
      <div class="np-sec-card-head">
        <span>👁️ ${lb.sensorsTitle}</span>
        <span class="np-sec-badge ${activeSensors.some((s) => s.critical) ? "alert" : activeSensors.length ? "warn" : "ok"}">
          ${activeSensors.length ? `${activeSensors.length} ${lb.active.toLowerCase()}` : lb.clear}
        </span>
      </div>
      <div class="np-sec-list">
        ${shown.map(
          (s) => html`<div class="np-sec-row ${s.critical && s.active ? "alert" : s.active ? "warn" : ""}">
            <span class="np-row-icon">${sensorIcon(s)}</span>
            <div class="np-row-info">
              <div class="np-row-name">${s.name}</div>
              <div class="np-row-sub">${s.location ? `${s.location} · ` : ""}${s.active ? lb.active : lb.clear}</div>
            </div>
            <button class="np-cam-act" title=${lb.go3d} @click=${(e: Event) => this.jump3d(e, s)}>📍</button>
          </div>`,
        )}
      </div>
    </section>`;
  }

  private renderEventsCard(lb: Labels) {
    return html`<section class="np-sec-card">
      <div class="np-sec-card-head"><span>🕒 ${lb.eventsTitle}</span></div>
      ${this._events.length
        ? html`<div class="np-sec-list">
            ${this._events.map(
              (ev) => html`<div class="np-event-row">
                <span class="np-ev-time">${ev.time}</span>
                <span>${ev.icon}</span>
                <span class="np-ev-text">${ev.text}</span>
              </div>`,
            )}
          </div>`
        : html`<div class="np-ev-empty">${lb.noEvents}</div>`}
    </section>`;
  }

  render() {
    if (!this.open) return nothing;
    const lb = labelsFor(this.hass?.language);
    const snap = collectSecuritySnapshot(this.hass, this.building);
    const floorMap = new Map<string, string>();
    for (const c of snap.cameras) if (c.floorId && c.floorName && !floorMap.has(c.floorId)) floorMap.set(c.floorId, c.floorName);
    const floors = [...floorMap.entries()];
    const list = this._floor && floorMap.has(this._floor) ? snap.cameras.filter((c) => c.floorId === this._floor) : snap.cameras;
    const focused = this._focusId ? list.find((c) => c.entityId === this._focusId) ?? null : null;
    const cols = focused ? 1 : mosaicColumns(list.length, this.gridW, this.gridH);
    const statusText = snap.summary.alertLevel === "alert" ? lb.statusAlert : snap.summary.alertLevel === "warn" ? lb.statusWarn : lb.statusOk;
    const hasSecurityPane = !!(snap.alarm || snap.locks.length || snap.openings.length || snap.sensors.length);

    return html`<div class="np-cam-veil" @click=${(e: Event) => e.target === e.currentTarget && this.closeModal()}>
      <div class="np-cam-dialog ${hasSecurityPane ? "" : "np-cam-only"}" role="dialog" aria-label=${lb.title}>
        <header class="np-cam-head">
          <div class="np-cam-title">
            🛡️ ${lb.title}
            <span class="np-head-pill ${snap.summary.alertLevel}">${statusText}</span>
          </div>
          ${hasSecurityPane
            ? html`<div class="fp3d-seg np-mobile-tabs">
                <button aria-pressed=${this._tab === "cameras"} @click=${() => (this._tab = "cameras")}>📹 ${lb.tabCameras} (${list.length})</button>
                <button aria-pressed=${this._tab === "security"} @click=${() => (this._tab = "security")}>🛡️ ${lb.tabSecurity}</button>
              </div>`
            : nothing}
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
        <div class="np-hub-body">
          <div class="np-cam-stage ${this._tab === "security" ? "np-hide-mobile" : ""}">
            ${!list.length
              ? html`<div class="np-cam-empty">${lb.empty}</div>`
              : focused
                ? html`<div class="np-cam-single">${this.renderTile(focused, lb, true)}</div>`
                : html`<div class="np-cam-grid" style=${`--np-cols:${cols}`}>
                    ${list.map((cam) => this.renderTile(cam, lb, false))}
                  </div>`}
          </div>
          ${hasSecurityPane
            ? html`<aside class="np-sec-side ${this._tab === "cameras" ? "np-hide-mobile" : ""}">
                ${this.renderAlarmCard(snap.alarm, lb)}
                ${this.renderLocksCard(snap.locks, lb)}
                ${this.renderPerimeterCard(snap.openings, lb)}
                ${this.renderSensorsCard(snap.sensors, lb)}
                ${this.renderEventsCard(lb)}
              </aside>`
            : nothing}
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
        z-index: 40;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: clamp(8px, 2vw, 22px);
        background: rgba(4, 7, 15, 0.78);
        backdrop-filter: blur(10px);
      }
      .np-cam-dialog {
        width: min(1420px, 100%);
        height: min(880px, 100%);
        display: flex;
        flex-direction: column;
        border-radius: 14px;
        border: 1px solid var(--fp-border);
        background: var(--fp-panel-strong);
        box-shadow: var(--fp-shadow);
        overflow: hidden;
        color: var(--fp-ink);
        font: 13px/1.4 var(--fp-font);
      }
      .np-cam-head {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        padding: 12px 16px;
        border-bottom: 1px solid var(--fp-border);
        background: rgba(8, 12, 24, 0.72);
      }
      .np-cam-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.01em;
      }
      .np-head-pill {
        font-size: 11px;
        font-weight: 600;
        padding: 2px 9px;
        border-radius: 999px;
        border: 1px solid transparent;
      }
      .np-head-pill.ok {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.12);
        border-color: rgba(74, 222, 128, 0.3);
      }
      .np-head-pill.warn {
        color: #fbbf24;
        background: rgba(251, 191, 36, 0.14);
        border-color: rgba(251, 191, 36, 0.35);
      }
      .np-head-pill.alert {
        color: #f87171;
        background: rgba(248, 113, 113, 0.18);
        border-color: rgba(248, 113, 113, 0.45);
      }
      .np-cam-spacer {
        flex: 1;
      }
      .np-mobile-tabs {
        display: none;
      }
      .np-hub-body {
        flex: 1;
        min-height: 0;
        display: grid;
        grid-template-columns: minmax(0, 1fr) 340px;
      }
      .np-cam-only .np-hub-body {
        grid-template-columns: minmax(0, 1fr);
      }
      .np-cam-stage {
        min-height: 0;
        padding: 12px;
        display: flex;
        align-items: stretch;
        justify-content: center;
        overflow: hidden;
      }
      .np-cam-grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(var(--np-cols, 2), minmax(0, 1fr));
        grid-auto-rows: minmax(0, 1fr);
        gap: 10px;
      }
      .np-cam-single {
        width: 100%;
        height: 100%;
        display: flex;
      }
      .np-cam-tile {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 0;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 1px solid var(--fp-border);
        background: #060913;
        overflow: hidden;
        cursor: pointer;
        transition: border-color 140ms ease, box-shadow 140ms ease;
      }
      .np-cam-tile:hover {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .np-cam-tile.np-cam-alert {
        border-color: rgba(248, 113, 113, 0.8);
        box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.35);
      }
      .np-cam-media {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #04060d;
        position: relative;
        overflow: hidden;
      }
      .np-cam-media img,
      .np-cam-media ha-camera-stream {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }
      .np-cam-dets {
        position: absolute;
        top: 8px;
        left: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      .np-det-badge {
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        color: #fff;
        background: rgba(220, 38, 38, 0.85);
        border: 1px solid rgba(254, 202, 202, 0.4);
      }
      .np-cam-off {
        color: var(--fp-muted);
        font-size: 12px;
      }
      .np-cam-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 7px 10px;
        background: rgba(9, 14, 28, 0.92);
        border-top: 1px solid rgba(110, 145, 255, 0.14);
        font-size: 12px;
      }
      .np-cam-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #64748b;
        flex-shrink: 0;
      }
      .np-cam-dot.on {
        background: #34d399;
        box-shadow: 0 0 6px #34d399;
      }
      .np-cam-name {
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .np-cam-loc {
        color: var(--fp-muted);
        font-size: 11px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .np-cam-act {
        padding: 3px 8px;
        border-radius: 6px;
        border: 1px solid var(--fp-border);
        background: rgba(18, 25, 48, 0.72);
        color: var(--fp-ink);
        font-size: 11px;
        cursor: pointer;
        flex-shrink: 0;
      }
      .np-cam-act:hover {
        border-color: var(--fp-accent);
      }
      .np-cam-empty {
        margin: auto;
        color: var(--fp-muted);
        font-size: 14px;
      }
      .np-sec-side {
        border-left: 1px solid var(--fp-border);
        background: rgba(8, 12, 24, 0.55);
        padding: 12px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .np-sec-card {
        border: 1px solid var(--fp-border);
        border-radius: 10px;
        background: rgba(14, 20, 38, 0.75);
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .np-sec-card-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-weight: 700;
        font-size: 12.5px;
      }
      .np-sec-badge {
        font-size: 11px;
        font-weight: 600;
        padding: 1px 7px;
        border-radius: 999px;
      }
      .np-sec-badge.ok {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.12);
      }
      .np-sec-badge.armed {
        color: #38bdf8;
        background: rgba(56, 189, 248, 0.14);
      }
      .np-sec-badge.warn {
        color: #fbbf24;
        background: rgba(251, 191, 36, 0.15);
      }
      .np-sec-badge.alert {
        color: #f87171;
        background: rgba(248, 113, 113, 0.18);
      }
      .np-sec-badge.off {
        color: var(--fp-muted);
        background: rgba(148, 163, 184, 0.14);
      }
      .np-alarm-btns {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 6px;
      }
      .np-btn-disarm {
        grid-column: 1 / -1;
        border-color: rgba(56, 189, 248, 0.45);
      }
      .np-btn-sm {
        padding: 3px 8px;
        font-size: 11px;
      }
      .np-pin-box {
        border-top: 1px solid var(--fp-border);
        padding-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .np-pin-head {
        display: flex;
        justify-content: space-between;
        font-size: 11.5px;
        color: var(--fp-muted);
      }
      .np-pin-dots {
        letter-spacing: 3px;
        color: var(--fp-ink);
        font-weight: 700;
      }
      .np-pin-pad {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 5px;
      }
      .np-pin-ok {
        border-color: rgba(74, 222, 128, 0.5);
        color: #4ade80;
      }
      .np-pin-cancel {
        align-self: flex-end;
        font-size: 11px;
      }
      .np-sec-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .np-sec-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(9, 13, 26, 0.65);
        border: 1px solid rgba(110, 145, 255, 0.1);
      }
      .np-sec-row.warn {
        border-color: rgba(251, 191, 36, 0.4);
        background: rgba(251, 191, 36, 0.08);
      }
      .np-sec-row.alert {
        border-color: rgba(248, 113, 113, 0.55);
        background: rgba(248, 113, 113, 0.12);
      }
      .np-row-icon {
        font-size: 14px;
        flex-shrink: 0;
      }
      .np-row-info {
        flex: 1;
        min-width: 0;
      }
      .np-row-name {
        font-weight: 600;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .np-row-sub {
        font-size: 11px;
        color: var(--fp-muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .np-toggle-closed {
        align-self: flex-start;
        font-size: 11px;
      }
      .np-event-row {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11.5px;
      }
      .np-ev-time {
        color: var(--fp-muted);
        font-variant-numeric: tabular-nums;
        flex-shrink: 0;
      }
      .np-ev-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .np-ev-empty {
        font-size: 11.5px;
        color: var(--fp-muted);
      }
      @media (max-width: 900px) {
        .np-mobile-tabs {
          display: inline-flex;
        }
        .np-hub-body {
          grid-template-columns: minmax(0, 1fr);
        }
        .np-sec-side {
          border-left: none;
        }
        .np-hide-mobile {
          display: none !important;
        }
      }
    `,
  ];
}

if (!customElements.get("np-camera-mosaic")) {
  customElements.define("np-camera-mosaic", NpCameraMosaic);
}
