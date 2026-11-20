Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let n=Math.trunc(e)||0;return this[n<0?this.length+n:n]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Oa=new URL(import.meta.url),Ha=Oa.searchParams.get("v"),Ca=o=>new URL(`./fonts/${o}${Ha?`?v=${Ha}`:""}`,Oa).href,Da="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function La(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ca("figtree.woff2")}) format("woff2");unicode-range:${Da}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ca("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Da}}`,document.head.append(o)}function Wa(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function uh(o,e){return String(Number(o.toFixed(e)))}function Na(o,e=2){let n=o<0?"-":"",t=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(t/12+1e-9),r=t-i*12,s=uh(r,e>=2?1:0);return i?r<.05?`${n}${i}'`:`${n}${i}' ${s}"`:`${n}${s}"`}function Ba(o,e){let n=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!n)return null;let t=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,r=!1,s=!1,a=n;for(let l of n.matchAll(t)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];r=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=e==="imperial"?c*(s?.0254:.3048):c}return!r||/[^\s+]/.test(a)?null:i}function On(o){let e=o?.locale?.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let n=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return n?{hourCycle:n==="h11"||n==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var zo=globalThis,To=zo.ShadowRoot&&(zo.ShadyCSS===void 0||zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,or=Symbol(),Va=new WeakMap,Ln=class{constructor(e,n,t){if(this._$cssResult$=!0,t!==or)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(To&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=Va.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&Va.set(n,e))}return e}toString(){return this.cssText}},Ka=o=>new Ln(typeof o=="string"?o:o+"",void 0,or),ge=(o,...e)=>{let n=o.length===1?o[0]:e.reduce((t,i,r)=>t+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Ln(n,o,or)},Ua=(o,e)=>{if(To)o.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let t=document.createElement("style"),i=zo.litNonce;i!==void 0&&t.setAttribute("nonce",i),t.textContent=n.cssText,o.appendChild(t)}},ir=To?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let n="";for(let t of e.cssRules)n+=t.cssText;return Ka(n)})(o):o;var{is:ph,defineProperty:hh,getOwnPropertyDescriptor:fh,getOwnPropertyNames:mh,getOwnPropertySymbols:gh,getPrototypeOf:_h}=Object,Ao=globalThis,Ga=Ao.trustedTypes,bh=Ga?Ga.emptyScript:"",vh=Ao.reactiveElementPolyfillSupport,Wn=(o,e)=>o,rr={toAttribute(o,e){switch(e){case Boolean:o=o?bh:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let n=o;switch(e){case Boolean:n=o!==null;break;case Number:n=o===null?null:Number(o);break;case Object:case Array:try{n=JSON.parse(o)}catch{n=null}}return n}},qa=(o,e)=>!ph(o,e),ja={attribute:!0,type:String,converter:rr,reflect:!1,useDefault:!1,hasChanged:qa};Symbol.metadata??=Symbol("metadata"),Ao.litPropertyMetadata??=new WeakMap;var Je=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=ja){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let t=Symbol(),i=this.getPropertyDescriptor(e,t,n);i!==void 0&&hh(this.prototype,e,i)}}static getPropertyDescriptor(e,n,t){let{get:i,set:r}=fh(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ja}static _$Ei(){if(this.hasOwnProperty(Wn("elementProperties")))return;let e=_h(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Wn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wn("properties"))){let n=this.properties,t=[...mh(n),...gh(n)];for(let i of t)this.createProperty(i,n[i])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[t,i]of n)this.elementProperties.set(t,i)}this._$Eh=new Map;for(let[n,t]of this.elementProperties){let i=this._$Eu(n,t);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let t=new Set(e.flat(1/0).reverse());for(let i of t)n.unshift(ir(i))}else e!==void 0&&n.push(ir(e));return n}static _$Eu(e,n){let t=n.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let t of n.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ua(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,t){this._$AK(e,t)}_$ET(e,n){let t=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,t);if(i!==void 0&&t.reflect===!0){let r=(t.converter?.toAttribute!==void 0?t.converter:rr).toAttribute(n,t.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,n){let t=this.constructor,i=t._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=t.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:rr;this._$Em=i;let a=s.fromAttribute(n,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,n,t,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),t??=s.getPropertyOptions(e),!((t.hasChanged??qa)(r,n)||t.useDefault&&t.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,t))))return;this.C(e,n,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:t,reflect:i,wrapped:r},s){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(n=void 0),this._$AL.set(e,n)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[i,r]of t){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(n)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Je[Wn("elementProperties")]=new Map,Je[Wn("finalized")]=new Map,vh?.({ReactiveElement:Je}),(Ao.reactiveElementVersions??=[]).push("2.1.2");var pr=globalThis,Za=o=>o,Ro=pr.trustedTypes,Ya=Ro?Ro.createPolicy("lit-html",{createHTML:o=>o}):void 0,nl="$lit$",pt=`lit$${Math.random().toFixed(9).slice(2)}$`,ol="?"+pt,wh=`<${ol}>`,Dt=document,Bn=()=>Dt.createComment(""),Vn=o=>o===null||typeof o!="object"&&typeof o!="function",hr=Array.isArray,yh=o=>hr(o)||typeof o?.[Symbol.iterator]=="function",sr=`[ 	
\f\r]`,Nn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xa=/-->/g,Qa=/>/g,Ht=RegExp(`>|${sr}(?:([^\\s"'>=/]+)(${sr}*=${sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ja=/'/g,el=/"/g,il=/^(?:script|style|textarea|title)$/i,fr=o=>(e,...n)=>({_$litType$:o,strings:e,values:n}),g=fr(1),et=fr(2),H_=fr(3),Ot=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),tl=new WeakMap,Ct=Dt.createTreeWalker(Dt,129);function rl(o,e){if(!hr(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ya!==void 0?Ya.createHTML(e):e}var xh=(o,e)=>{let n=o.length-1,t=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=Nn;for(let a=0;a<n;a++){let l=o[a],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===Nn?d[1]==="!--"?s=Xa:d[1]!==void 0?s=Qa:d[2]!==void 0?(il.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Ht):d[3]!==void 0&&(s=Ht):s===Ht?d[0]===">"?(s=i??Nn,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Ht:d[3]==='"'?el:Ja):s===el||s===Ja?s=Ht:s===Xa||s===Qa?s=Nn:(s=Ht,i=void 0);let h=s===Ht&&o[a+1].startsWith("/>")?" ":"";r+=s===Nn?l+wh:u>=0?(t.push(c),l.slice(0,u)+nl+l.slice(u)+pt+h):l+pt+(u===-2?a:h)}return[rl(o,r+(o[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]},Kn=class o{constructor({strings:e,_$litType$:n},t){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,d]=xh(e,n);if(this.el=o.createElement(c,t),Ct.currentNode=this.el.content,n===2||n===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Ct.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(nl)){let p=d[s++],h=i.getAttribute(u).split(pt),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:_[2],strings:h,ctor:_[1]==="."?lr:_[1]==="?"?cr:_[1]==="@"?dr:an}),i.removeAttribute(u)}else u.startsWith(pt)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(il.test(i.tagName)){let u=i.textContent.split(pt),p=u.length-1;if(p>0){i.textContent=Ro?Ro.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],Bn()),Ct.nextNode(),l.push({type:2,index:++r});i.append(u[p],Bn())}}}else if(i.nodeType===8)if(i.data===ol)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(pt,u+1))!==-1;)l.push({type:7,index:r}),u+=pt.length-1}r++}}static createElement(e,n){let t=Dt.createElement("template");return t.innerHTML=e,t}};function sn(o,e,n=o,t){if(e===Ot)return e;let i=t!==void 0?n._$Co?.[t]:n._$Cl,r=Vn(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,n,t)),t!==void 0?(n._$Co??=[])[t]=i:n._$Cl=i),i!==void 0&&(e=sn(o,i._$AS(o,e.values),i,t)),e}var ar=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:t}=this._$AD,i=(e?.creationScope??Dt).importNode(n,!0);Ct.currentNode=i;let r=Ct.nextNode(),s=0,a=0,l=t[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Un(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new ur(r,this,e)),this._$AV.push(c),l=t[++a]}s!==l?.index&&(r=Ct.nextNode(),s++)}return Ct.currentNode=Dt,i}p(e){let n=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,n),n+=t.strings.length-2):t._$AI(e[n])),n++}},Un=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,t,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=t,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=sn(this,e,n),Vn(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Ot&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Vn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Dt.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:t}=e,i=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Kn.createElement(rl(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===i)this._$AH.p(n);else{let r=new ar(i,this),s=r.u(this.options);r.p(n),this.T(s),this._$AH=r}}_$AC(e){let n=tl.get(e.strings);return n===void 0&&tl.set(e.strings,n=new Kn(e)),n}k(e){hr(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,t,i=0;for(let r of e)i===n.length?n.push(t=new o(this.O(Bn()),this.O(Bn()),this,this.options)):t=n[i],t._$AI(r),i++;i<n.length&&(this._$AR(t&&t._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let t=Za(e).nextSibling;Za(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},an=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,t,i,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=r,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=y}_$AI(e,n=this,t,i){let r=this.strings,s=!1;if(r===void 0)e=sn(this,e,n,0),s=!Vn(e)||e!==this._$AH&&e!==Ot,s&&(this._$AH=e);else{let a=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=sn(this,a[t+l],n,l),c===Ot&&(c=this._$AH[l]),s||=!Vn(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},lr=class extends an{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},cr=class extends an{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},dr=class extends an{constructor(e,n,t,i,r){super(e,n,t,i,r),this.type=5}_$AI(e,n=this){if((e=sn(this,e,n,0)??y)===Ot)return;let t=this._$AH,i=e===y&&t!==y||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,r=e!==y&&(t===y||i);i&&this.element.removeEventListener(this.name,this,t),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ur=class{constructor(e,n,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){sn(this,e)}};var kh=pr.litHtmlPolyfillSupport;kh?.(Kn,Un),(pr.litHtmlVersions??=[]).push("3.3.3");var sl=(o,e,n)=>{let t=n?.renderBefore??e,i=t._$litPart$;if(i===void 0){let r=n?.renderBefore??null;t._$litPart$=i=new Un(e.insertBefore(Bn(),r),r,void 0,n??{})}return i._$AI(o),i};var mr=globalThis,pe=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=sl(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ot}};pe._$litElement$=!0,pe.finalized=!0,mr.litElementHydrateSupport?.({LitElement:pe});var $h=mr.litElementPolyfillSupport;$h?.({LitElement:pe});(mr.litElementVersions??=[]).push("4.2.2");var he="main",gr=o=>o&&o!==he?{plan:o}:{};async function Fo(o,e){return o.callWS({type:"neonplan3d/building/get",...gr(e)})}async function Gn(o,e,n,t){let i=r=>o.callWS({type:"neonplan3d/building/save",building:e,...gr(n),...r&&t!==void 0&&t>=0?{base_revision:t}:{}});try{return(await i(!0)).revision}catch(r){if(t===void 0||!/extra keys not allowed.*base_revision/i.test(String(r?.message??r)))throw r;return(await i(!1)).revision}}function al(o){return!!o&&typeof o=="object"&&o.code==="stale_plan"}function ll(o,e,n){return o.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe",...gr(n)})}function cl(o,e){return o.connection.subscribeMessage(n=>e(n.plan??he,n.revision),{type:"neonplan3d/building/subscribe",plan:"*"})}async function dl(o){try{return await o.callWS({type:"neonplan3d/plans/list"})}catch{return{plans:[],trash:[],locate_plan:he}}}function ul(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/plans/subscribe"})}function _r(o,e,n,t,i,r){return o.connection.subscribeMessage(s=>{"announce"in s?n?.(s.announce):"reload"in s?t?.(s.reload):"style"in s?i?.(s.style):typeof s.text=="string"&&e(s)},{type:"neonplan3d/voice/subscribe",...n?{announce:!0}:{},...t?{reload:!0}:{},...i?{style:!0}:{},...r?{view:r}:{}})}async function pl(o,e,n,t){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:n,answered:t})).taken}async function hl(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function fl(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var Sh="neonplan3d.seenOffers";function ml(o){let e=[];try{e=JSON.parse(localStorage.getItem(Sh)??"[]")}catch{}return o.filter(n=>!e.includes(n.id))}var Mh="neonplan3d.seenUpdates";function gl(o){let e=[];try{e=JSON.parse(localStorage.getItem(Mh)??"[]")}catch{}return o.filter(n=>!e.includes(`${n.id}@${n.release}`))}function _l(o){return o.callWS({type:"neonplan3d/license/get"})}var Ph="3.5.4",Ih="neonplan3d-diagnostics";var Eh="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|counter|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|sun|switch|text|time|timer|todo|update|vacuum|valve|water_heater|weather|zone",zh=[[/\b(?:https?|wss?|file|blob|data|ftp):[^\s'"<>)\]]*/gi,"<url>"],[/\beyJ[\w-]+\.[\w-]+\.[\w-]+/g,"<token>"],[/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g,"<email>"],[/\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?\b/g,"<ip>"],[/\b[0-9a-f]{1,4}(?::[0-9a-f]{0,4}){2,7}\b/gi,"<ip>"],[new RegExp(`\\b(?:${Eh})\\.[a-z0-9_]+\\b`,"g"),"<entity>"],[/\b[a-z][a-z0-9_]*\.[a-z0-9]*_[a-z0-9_]*\b/g,"<entity>"],[/\b[0-9a-f]{16,}\b/gi,"<id>"]];function Th(o){let e=String(o??"");for(let[n,t]of zh)e=e.replace(n,t);return e.replace(/\s+/g," ").trim().slice(0,200)}var Ah=/(neonplan3d[\w-]*\.js)(?:\?[^:\s)]*)?:(\d+):(\d+)/;function xl(o,e,n,t){let i=Ah.exec(o??"");if(i)return`${i[1]}:${i[2]}:${i[3]}`;let r=/(neonplan3d[\w-]*\.js)(?:\?|$)/.exec(e??"");return r?`${r[1]}:${n??0}:${t??0}`:null}function Rh(o,e,n){return/iPad|Tablet|Silk|\bKF[A-Z]{2,4}\b/.test(o)||/Macintosh/.test(o)&&n>1?"tablet":/iPhone|iPod|Windows Phone/.test(o)?"phone":/Android/.test(o)?/Mobile/.test(o)&&e<600?"phone":"tablet":n>0&&e>0&&e<500?"phone":"desktop"}function Fh(o){let e=[[/Edg(?:e|A|iOS)?\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/SamsungBrowser\/(\d+)/,"Samsung"],[/Silk\/(\d+)/,"Silk"],[/(?:Firefox|FxiOS)\/(\d+)/,"Firefox"],[/CriOS\/(\d+)/,"Chrome"],[/; wv\).*Chrome\/(\d+)/,"WebView"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+)[\d.]* (?:Mobile\/\w+ )?Safari/,"Safari"]];for(let[n,t]of e){let i=n.exec(o);if(i)return`${t} ${i[1]}`}return/AppleWebKit/.test(o)&&/iPhone|iPad|Macintosh/.test(o)?"WebKit":"other"}function Hh(o,e=0){let n;return(n=/Android (\d+)/.exec(o))?`Android ${n[1]}`:(n=/iPad.*? OS (\d+)/.exec(o))?`iPadOS ${n[1]}`:(n=/(?:iPhone|iPod).*? OS (\d+)/.exec(o))?`iOS ${n[1]}`:/Macintosh/.test(o)?e>1?"iPadOS":"macOS":(n=/Windows NT (\d+)/.exec(o))?`Windows ${n[1]}`:/CrOS/.test(o)?"ChromeOS":/Linux/.test(o)?"Linux":"other"}function Ch(o){let e=o??"";return e.trim()?/SwiftShader|llvmpipe|Software|Mali-[4T]|Mali-G(?:31|51|52|57)\b|Adreno[^\d]*[2-5]\d\d\b|PowerVR|Vivante|VideoCore|\bGC\d{3,4}\b|Intel.*\bHD Graphics(?:[2-5]\d{3})?\b/i.test(e)?"low":/RTX|GTX|GeForce|Quadro|Radeon (?:RX|Pro)|Apple (?:M\d|GPU)|Adreno[^\d]*[67]\d\d\b|Mali-G7\d|Iris Xe|Intel.*Arc/i.test(e)?"high":"mid":null}var kl,bl=!1,ft=!1,br,ht={},Ho=0,ln=0,$l=null,Sl=null,Ml=null,tt=[],vr=new Set;function wr(){return ft}function Pl(o){return vr.add(o),()=>vr.delete(o)}function Il(o){kl=o,!bl&&(bl=!0,window.addEventListener(Ih,e=>{let n=!!e.detail?.enabled;Tl(n)}),yr())}function Lt(o){ft&&(ht[o]=(ht[o]??0)+1)}function El(o){if(!ft)return;o.fps>0&&(Ho+=o.fps,ln++),$l=o.low;let e=window.devicePixelRatio||1;Sl=Math.round(o.pixelRatio/e*100)/100,o.gpu!==void 0&&(Ml=Ch(o.gpu))}function zl(o,e){if(!e)return;let n=Th(o);if(!n)return;let t=tt.find(i=>i.msg===n&&i.where===e);t?t.count++:tt.length<20&&tt.push({msg:n,where:e,count:1,version:Ph})}function vl(o){let e=o.error,n=e?`${e.name}: ${e.message}`:o.message;zl(n,xl(e?.stack,o.filename,o.lineno,o.colno))}function wl(o){let e=o.reason;e instanceof Error&&zl(`${e.name}: ${e.message}`,xl(e.stack))}function yl(){yr()}function Tl(o){if(o!==ft){ft=o,o?(window.addEventListener("error",vl),window.addEventListener("unhandledrejection",wl),window.addEventListener("pagehide",yl),br=setInterval(()=>{yr()},6e5)):(window.removeEventListener("error",vl),window.removeEventListener("unhandledrejection",wl),window.removeEventListener("pagehide",yl),clearInterval(br),br=void 0,ht={},Ho=ln=0,tt=[]);for(let e of vr)e(o)}}function Dh(){let o=navigator.userAgent,e=navigator.maxTouchPoints||0,n=Math.min(screen.width||0,screen.height||0);return{device:Rh(o,n,e),browser:Fh(o),os:Hh(o,e),low_end:$l,render_scale:Sl,fps:ln?Math.round(Ho/ln*10)/10:null,fps_n:ln,gpu_tier:Ml,views:{...ht}}}async function yr(){let o=kl;if(!o)return;let e={type:"neonplan3d/diagnostics/client"};ft&&(e.client=Dh(),e.errors=tt);let n=ht,t=tt;ft&&(ht={},Ho=ln=0,tt=[]);try{let i=await o.callWS(e);Tl(!!i?.enabled)}catch{if(ft){for(let[i,r]of Object.entries(n))ht[i]=(ht[i]??0)+r;tt=[...t,...tt].slice(0,20)}}}function Oh(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function kr(o){let e=ye(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(Oh).length>=2}function $r(o){let e=o?.parts.find(n=>n.spin==="y"||n.spin==="z");return e?e.spin:null}function Al(o=new Date){let e=o.getFullYear(),n=o.getMonth();if(n===0&&o.getDate()<=6)return 4;if(n<10)return 0;let t=new Date(e,n,o.getDate()).getTime(),i=new Date(e,11,24),r=new Date(e,11,24-i.getDay()).getTime(),s=168*3600*1e3,a=0;for(let l=1;l<=4;l++)t>=r-(4-l)*s-3600*1e3&&(a=l);return a}var Rl=[],xr=new Map,Fl=0;function Hl(o){Rl=o,xr=new Map(o.flatMap(e=>e.items.map(n=>[Lh(e.id,n.id),n]))),Fl++}function mt(){return Rl}function cn(){return Fl}function Lh(o,e){return`pack:${o}:${e}`}function gt(o){return o.startsWith("pack:")}function Do(o){return gt(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function dn(o){return o==="robot_vacuum"||gt(o)&&o.endsWith(":robot_vacuum")}function Wh(o){return o.z>.05}function Cl(o){let e=(o?.parts??[]).filter(n=>n.shape==="cyl"&&Wh(n));return e.length?e.reduce((n,t)=>t.w*t.d>n.w*n.d?t:n).z:.227}function Dl(o){return gt(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var Nh={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ol(o){return ye(o)?.parts.find(e=>e.screen)}function ye(o){if(!gt(o))return;let e=xr.get(o);if(e)return e;let[,n,...t]=o.split(":"),i=Nh[n];return i?xr.get(`pack:${i}:${t.join(":")}`):void 0}function Ll(o,e){let n=e.split("-")[0];return o.name[n]??o.name.en??Object.values(o.name)[0]??o.id}var Bh={architecture:"Architecture & Fit-out",balcony:"Balcony & Small Spaces",bath:"Bathroom",cabinet_kit:"Cabinets & Shelves \u2013 Kit",deco:"Decor & Plants",dining_hall:"Dining Room & Hallway",fun_halloween:"Fun Pack: Halloween",fun_winter:"Fun Pack: Winter & Christmas",fun_pets:"Fun Pack: Pets",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside",pro_heat:"Pro: Heat Pro",pro_household:"Pro: Household Pro",frames:"Digital Picture Frames",homelab:"Homelab & Workshop",announce:"Module: Announcements",voice_answers:"Module: The house answers",window_watch:"Module: Window watch"};function Wl(o,e){if(e.split("-")[0]==="de")return o.name;let n=o.id.replace(/^mastershort\./,""),t=n.endsWith("_sample"),i=Bh[t?n.slice(0,-7):n];return i?t?`${i} \u2013 Sampler`:i:o.name.replace(/^Modul:/,"Module:").replace(/^Fun-Pack:/,"Fun Pack:")}var Vh=.005;function fe(o,e){let n=ye(e.type);if(e.mount_y!=null)return e.mount_y;let t=Vl(e,o.height);if(t!==null)return t;if(e.type==="lamp_wall")return Nl;if(Oo.has(e.type))return Math.max(0,o.height-Lo(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));if(e.type==="plant_jiboia"&&e.variant!=="totem"||e.type==="plant_orquidea")return Co(o,e)+jn(o,e.x,e.z,e.h);switch(n?.mount){case"surface":return Co(o,e)+jn(o,e.x,e.z,e.h);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h-Vh);default:return n?Co(o,e):Bl(e)||Co(o,e)}}function Co(o,e){let n=o.rooms.filter(t=>t.points.length>=3);return!n.length||n.some(t=>V([e.x,e.z],t.points))?0:nt(o,e.x,e.z)}var qe={field:null,size:1,right:0,up:0};var Gl=["rain","snow","clouds","lightning","sky"];var Pr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Ir(o){return o==="hedge"||o==="fence"||o==="pergola"}function Er(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!Ir(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function oe(o){return[...o.rooms,...Er(o)]}function Uh(o,e,n){let t=o.slope??0;if(!t||o.type==="pool")return 0;let i=o.slope_dir??"x",r=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of o.points){let u=r(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,n)-s)/(a-s)));return t*l}function Gh(o,e,n,t){return Wo(o,e)+Pr[e.type]-jh(o,e,n,t)}var zr=-.2,Mr={set:!1,level:zr};function jl(o){let e=o?.settings.terrain??null;Mr={set:e?.level!=null,level:e?.level??zr}}function ql(o){return o.elevation>.3?0:Mr.set?Mr.level-o.elevation:zr}function Wo(o,e){return ql(o)+(e.offset??0)}function jh(o,e,n,t){return e.type==="pool"?0:Uh(e,n,t)}function nt(o,e,n){let t=(o.outdoor??[]).filter(r=>!Ir(r.type)&&r.type!=="pool"&&V([e,n],r.points)),i=[...t].reverse().find(r=>r.cut)??t[0];return i?Gh(o,i,e,n):ql(o)}function Zl(o,e){return Wo(o,e)+(e.above?Yl(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function qh(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Yl(o):1.5}function Zh(o,e){return e.above?!1:(o.outdoor??[]).some(n=>n!==e&&n.type!=="pool"&&!Ir(n.type)&&!n.cut&&n.points.length>=3&&e.points.every(t=>V(t,n.points)))}function qn(o,e){return!e.above&&!Zh(o,e)?un(o,e)-.05:Zl(o,e)-qh(e)}function un(o,e){return Zl(o,e)-.15}function Yl(o){return o.height&&o.height>.3?o.height:1.2}var Yh={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Xl={type:"none",pitch:35,overhang:.4},Xh={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Xl}};var Ql=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Jl=.3;var ec=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Nl=1.75;function tc(o){if(["lamp_pendant","lamp_fan","stairwell","parking"].includes(o.type)||Tr.has(o.type))return!1;let e=ye(o.type);return!(e?.mount==="ceiling"&&e.light&&e.light!=="panel")}var Oo=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Lo(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var Tr=new Set(["stairs","stairs_u"]);function Zn(o){return ec.has(o)||!!ye(o)?.light}var Qh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Bl(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"neon_sign":return Math.max(0,1.6-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"alarm_keypad":return 1.3;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Ul=.04,Jh=1.2;function jn(o,e,n,t=0){let i=0;for(let r of o.furniture)!(Qh.has(r.type)||ye(r.type)?.surface)||!V([e,n],Wt(r))||r.type==="worktop"&&t>0&&r.h-Ul>=Jh&&t<=r.h-Ul-.02||(i=Math.max(i,r.h));return i}var nc=new Set(["wall_switch","wall_socket"]),ef=4;function Yn(o){let e=(o.gangs??[]).slice(0,ef);return e.length?e:[{entity:null}]}function No(o){return[...new Set(Yn(o).map(e=>e.entity).filter(e=>!!e&&e!=="none"))]}var oc=new Set(["wifi_ap","water_heater"]);function Vl(o,e){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,e-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var Kh=new Set([...ec,"alarm_keypad","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","neon_sign","desk","fridge","fridge_smart","stove","bbq_indoor","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Kl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],bbq_indoor:[.95,.65,2.35],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],plant_moreia:[.65,.65,.85],plant_podocarpo:[.7,.7,2],plant_jiboia:[.38,.38,.42],plant_orquidea:[.28,.28,.56],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],neon_sign:[.9,.03,.32],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],alarm_keypad:[.14,.024,.12],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var tf=["interior","front","front_glass","sidelight","sidelights","glass","sliding","sliding_glass","passage"],nf=["standard","bars","glass_wall","slide","window_sliding"];function of(o){return o==="sliding_glass"||o==="window_sliding"||o==="slide"}function rf(o,e){return o.type==="door"?o.style&&tf.includes(o.style)?o.style:e?"front":"interior":o.style&&nf.includes(o.style)?o.style:"standard"}function sf(o,e,n,t){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=o-.04,s=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-s)/(i?2:1),l=t.sidelight_width??a,c=i?t.sidelight_width2??t.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=r-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return i?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(n?!!t.sidelight_hinge:!t.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function ic(o,e){let n=o.width,t=rf(o,!1);if(of(t))return o.leaves===2?n/2:e?Math.max(n/2,n-.12):Math.min(n/2,.12);let i=sf(n,t,e,o),r=i?.x0??0,s=i?.x1??n;return o.leaves!==2?(r+s)/2:e?r+(s-r)/4:s-(s-r)/4}function Xn(o){o.energy={...Yh,...o.energy??{}},o.presence=o.presence??[],o.settings={...Xh,...o.settings,roof:{...Xl,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(t=>({...t,panel:t.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(t=>({...t,mount:t.mount??null,rotation:t.rotation??0})),e.furniture=e.furniture.map(t=>({...t,entity:t.entity??null,power:t.power??null,...t.show_if&&!t.show_if.entity?{show_if:null}:{}}));let n=e.placements.filter(t=>t.entity_id.startsWith("light.")&&!t.pin);if(n.length){let t={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let r=t[i.mount??"ceiling"],[s,a,l]=Kl[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(t=>({...t,hinge:t.hinge??"left",leaves:t.leaves??1,swing:t.swing??"in",style:t.style??null,cover:t.cover??null,contact:t.contact??null,contact2:t.contact2??null,tilt:t.tilt??null}))}return o}function rc(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function De(o){let e=0;for(let n=0;n<o.length;n++){let[t,i]=o[n],[r,s]=o[(n+1)%o.length];e+=t*s-r*i}return e/2}function sc(o){return Math.abs(De(o))}function Sr(o,e){let n=1/0;for(let t=0;t<e.length;t++){let i=e[t],r=e[(t+1)%e.length],s=r[0]-i[0],a=r[1]-i[1],l=s*s+a*a,c=l>0?Math.max(0,Math.min(1,((o[0]-i[0])*s+(o[1]-i[1])*a)/l)):0;n=Math.min(n,Math.hypot(o[0]-i[0]-c*s,o[1]-i[1]-c*a))}return n}function Ar(o){let e=Ae(o);if(o.length<3||V(e,o)&&Sr(e,o)>=.6)return e;let n=o.map(u=>u[0]),t=o.map(u=>u[1]),[i,r,s,a]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],l=24,c=e,d=V(e,o)?Sr(e,o):-1;for(let u=0;u<=l;u++)for(let p=0;p<=l;p++){let h=[i+(r-i)*u/l,s+(a-s)*p/l];if(!V(h,o))continue;let _=Sr(h,o);_>d+1e-9&&([c,d]=[h,_])}return c}function Ae(o){let e=De(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let n=0,t=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],c=r*l-a*s;n+=(r+a)*c,t+=(s+l)*c}return[n/(6*e),t/(6*e)]}function Wt(o){let e=o.rotation*Math.PI/180,n=Math.cos(e),t=Math.sin(e),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*n-a*t,o.z+s*t+a*n])}function V(o,e){let n=!1;for(let t=0,i=e.length-1;t<e.length;i=t++){let[r,s]=e[t],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(n=!n)}return n}var ac={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var af=700,lc="neonplan3d.unsaved",_t="3.5.4",uc="floorplan-3d.unsaved",Rr=o=>o===he?lc:`${lc}.${o}`;function lf(o){try{let e=localStorage.getItem(Rr(o))??(o===he?localStorage.getItem(uc):null);return e?JSON.parse(e):null}catch{return null}}function Qn(o,e){try{e?localStorage.setItem(Rr(o),JSON.stringify(e)):(localStorage.removeItem(Rr(o)),o===he&&localStorage.removeItem(uc))}catch{}}function cc(o,e){return o&&e.some(n=>n.id===o)?o:he}var pn=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;planId=he;plans=[];trash=[];locatePlan=he;plansLoaded=!1;wanted=null;unsubscribePlans=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;onVisible=()=>{document.visibilityState!=="visible"||!this.hass||this.pending||this.saving||this.reload()};constructor(e){this.host=e,e.addController(this)}setHass(e){let n=this.hass===null;this.hass=e,n&&this.connected&&this.start()}hostConnected(){this.connected=!0,typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisible),this.hass&&this.start()}hostDisconnected(){this.connected=!1,typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisible),this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.unsubscribePlans?.(),this.unsubscribePlans=null}async switchPlan(e){if(!this.plansLoaded||!this.hass){this.wanted=e??null;return}let n=cc(e,this.plans);this.wanted=n,!(n===this.planId&&this.building)&&(await this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.planId=n,this.building=null,this.revision=-1,this.ownRevisions=new Set,this.draft=null,this.saveState="idle",this.host.requestUpdate(),await this.reload(),await this.follow())}planName(e,n){return this.plans.find(i=>i.id===e)?.name||(e===he?n:"?")}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},af),this.host.requestUpdate()}get frontendVersion(){return _t}get versionGap(){return!this.backendVersion||_t==="dev"||this.backendVersion===_t?null:cf(this.backendVersion,_t)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&_t!=="dev"&&this.backendVersion!==_t}restoreDraft(){let e=this.draft;this.draft=null,e?.conflict&&Qn(this.planId,null),e&&this.edit(Xn(e.building))}discardDraft(){this.draft=null,Qn(this.planId,null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!e||!this.hass)return;this.pending=null;let n=this.planId;for(let t of e.floors)for(let i of t.furniture)i.mount_y!=null&&i.mount_y>10&&(i.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Gn(this.hass,e,n,n===this.planId?this.revision:void 0);n===this.planId&&(this.ownRevisions.add(t),this.revision=t),this.saveState=this.pending?"saving":"saved",this.saveError=null,Qn(n,null)}catch(t){if(al(t)&&n===this.planId){let i={building:e,savedAt:Date.now(),conflict:!0};Qn(n,i),this.pending=null,this.saveState="idle",this.saveError=null,await this.reload(),this.draft=i,this.host.requestUpdate();return}this.saveState="error",this.saveError=dc(t),Qn(n,{building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}async start(){if(this.hass&&(Il(this.hass),await Promise.all([this.reloadPacks(),this.reloadPlans()]),this.planId=cc(this.wanted??this.planId,this.plans),await this.reload(),await this.follow(),!this.unsubscribePlans&&this.connected))try{this.unsubscribePlans=await ul(this.hass,e=>{this.takePlans(e),this.plans.some(n=>n.id===this.planId)||this.switchPlan(he)})}catch{}}async follow(){if(this.unsubscribe||!this.connected||!this.hass)return;let e=this.planId;try{let n=await ll(this.hass,t=>{e===this.planId&&(this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload())},e);e!==this.planId||this.unsubscribe?n():this.unsubscribe=n}catch{}}async reloadPlans(){this.hass&&this.takePlans(await dl(this.hass))}takePlans(e){this.plans=e.plans,this.trash=e.trash,this.locatePlan=e.locate_plan,this.plansLoaded=!0,this.host.requestUpdate()}async reloadPacks(){if(this.hass){try{this.packs=await fl(this.hass)}catch{this.packs=[]}Hl(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return;let e=this.planId;try{let n=await Fo(this.hass,e);if(e!==this.planId)return;this.building=Xn(n.building),this.backendVersion=n.version??null,this.draft===null&&!this.pending&&(this.draft=lf(e)),this.revision=n.revision,this.error=null}catch(n){this.error=dc(n)}this.host.requestUpdate()}};function dc(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function cf(o,e){let n=o.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),t=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(n.length,t.length);i++){let r=(n[i]??0)-(t[i]??0);if(r)return r}return 0}var pc;function Fr(){let o=new URL("./neonplan3d-editor.js?v=a604b7e83879",new URL(import.meta.url)).href;return pc??=import(o),pc}var df={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},uf=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),pf=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),hf=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Bo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],yc=new Set(["light","switch","fan"]);function xc(o){return o.slice(0,o.indexOf("."))}function W(o){return df[xc(o)]??null}function hc(o){return o!==null&&o!=="scene"&&o!=="script"}var ff=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function Vo(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!ff.has(String(o.attributes.device_class??""))}function Cr(o,e){let n=(o?.attributes.supported_features??0)|0;return n!==0&&!(n&3)&&(n&176)!==0?e==="stop"?{service:"stop_cover_tilt",data:{}}:n&(e==="open"?16:32)?{service:e==="open"?"open_cover_tilt":"close_cover_tilt",data:{}}:{service:"set_cover_tilt_position",data:{tilt_position:e==="open"?100:0}}:{service:e==="open"?"open_cover":e==="close"?"close_cover":"stop_cover",data:{}}}function Ko(o,e,n){let t=new Map;for(let i of e){let r=Cr(o.states[i],n),s=`${r.service}|${JSON.stringify(r.data)}`,a=t.get(s)??{...r,ids:[]};a.ids.push(i),t.set(s,a)}return[...t.values()].map(i=>({service:i.service,data:{...i.data,entity_id:i.ids}}))}function mf(o,e){let n=new Set,t=e;for(;t&&!n.has(t);){n.add(t);let i=o.devices?.[t];if(!i)return null;if(i.area_id)return i.area_id;t=i.parent_device_id}return null}function ze(o,e){let n=o.entities?.[e];return n?n.area_id?n.area_id:mf(o,n.device_id):null}function Uo(o,e){let n=o.entities?.[e];return!!n&&(!!n.hidden||!!n.hidden_by||!!n.disabled_by)}function fc(o,e){let n=W(e);if(!n)return!1;let t=o.entities?.[e];if(Uo(o,e)||t?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class,s=String(i.attributes.unit_of_measurement??"");return n==="sensor"?r?uf.has(r)||r==="voltage"&&s==="mV":pf.has(s):n==="binary"?r?hf.has(r):!!t?.area_id:!0}var gf=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function mc(o,e){if(W(e)!=="sensor")return!1;let n=o.entities?.[e];if(Uo(o,e)||n?.entity_category)return!1;let t=o.states[e];return!t||!t.attributes.unit_of_measurement||gf.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||Z(t)}var Hr=null;function eo(o){let e=Hr;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let n=new Map,t=new Map,i=[],r=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let c=o.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&Kr(o,l)&&(t.get(d)??t.set(d,[]).get(d)).push(l),d&&!Uo(o,l)&&!c.entity_category&&(r.get(d)??r.set(d,new Set).get(d)).add(xc(l));let u=fc(o,l),p=ze(o,l);if(!p){(u||mc(o,l))&&hc(W(l))&&i.push(l);continue}u&&(n.get(p)??n.set(p,[]).get(p)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(fc(o,l)||mc(o,l))&&hc(W(l))&&i.push(l);i.sort((l,c)=>Bo.indexOf(W(l))-Bo.indexOf(W(c))||G(o,l).localeCompare(G(o,c)));for(let[l,c]of n){let d=o.areas?.[l]?.name;c.sort((u,p)=>{let h=Bo.indexOf(W(u)),_=Bo.indexOf(W(p));return h-_||G(o,u,d).localeCompare(G(o,p,d))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Hr={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:n,power:t,unassigned:i,domains:r,hubs:a},Hr}function ke(o,e){return!e||!o.entities?[]:eo(o).areas.get(e)??[]}var _f={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},bf=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),vf=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function wf(o,e){let n=o.entities?.[e]?.device_id,t=n&&!eo(o).hubs.has(n)?eo(o).domains.get(n):void 0;return t&&[...t].some(i=>bf.has(i))?!1:!vf.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Dr(o,e,n,t){let i=n.climate?.[t];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=_f[t],s=(h,_)=>V([h,_],n.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id)),d=[...new Set([...ke(o,n.area_id).filter(h=>!c.has(h)),...l])],u=d.filter(h=>h.startsWith("sensor.")&&o.states[h]?.attributes.device_class===r&&(n.outdoor||wf(o,h)));if(u.length)return u;let p=kc[t];return p?d.filter(h=>h.startsWith("climate.")&&typeof o.states[h]?.attributes[p]=="number"):[]}var kc={temperature:"current_temperature",humidity:"current_humidity"};function yf(o,e,n){let t=o.states[e];if(e.startsWith("climate.")){let r=kc[n],s=r?Number(t?.attributes[r]):Number.NaN;return n==="temperature"?gc(s,Le(o)):s}let i=Number(t?.state);return n==="temperature"?gc(i,t?.attributes.unit_of_measurement):i}function Le(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function gc(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function bt(o,e){return Le(o)==="\xB0F"?e*9/5+32:e}function We(o,e,n,t){let i=Dr(o,e,n,t).map(r=>yf(o,r,t)).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function $c(o,e){return!!o.entities&&eo(o).hubs.has(e)}function Or(o,e){return o.entities?eo(o).power.get(e)??[]:[]}function G(o,e,n,t=!1){let i=o.states[e],r=o.entities?.[e],s=i?.attributes.friendly_name??r?.name??e;if(t&&r?.name&&r.device_id){let a=o.devices?.[r.device_id],l=(a?.name_by_user||a?.name||"").trim();l&&s.toLowerCase()===`${l} ${r.name}`.toLowerCase()&&(s=r.name)}if(n&&s.length>n.length+1&&s.toLowerCase().startsWith(n.toLowerCase()+" ")){let a=s.slice(n.length+1);return a.charAt(0).toUpperCase()+a.slice(1)}return s}function Sc(o,e){if(!e||e==="none")return null;let n=o.states[e];if(!n||Z(n))return null;let t=n.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(t))return!0;if(["off","closed","idle","false","inactive","standby"].includes(t))return!1;let i=Number(t);return Number.isFinite(i)?i>0:null}function Mc(o){let e=o.toLowerCase().trim().replace(/[\s-]+/g,"_"),n=/(^|_)(not|no|nicht|kein|keine|un|dis)_?(charging|charge|connected|plugged|verbunden|angesteckt)/.test(e),t=/charger_free|^available$|^idle$|frei|abgesteckt|no_car|kein_fahrzeug/.test(e),i=!n&&!/ready_to_charge|charger_|complete|finish|charged|fertig|beendet|voll$|full/.test(e)&&/(^|_)(charging|charge|laden|lädt|ladend|lade)($|_)/.test(e),r=i||!n&&!t&&/connect|plug|ready|insert|angesteckt|verbunden|wait|paused|suspend|preparing|complete|finish|charged|fertig|full|voll/.test(e);return{charging:i,plugged:r}}function Z(o){return!o||o.state==="unavailable"||o.state==="unknown"}var xf=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Lr(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Wr(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function He(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Wr(o.state)||o.state==="returning";switch(W(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Lr(o)&&xf.has(String(o.state).toLowerCase());default:return!1}}function Pc(o,e){if(!o||Z(o))return e?1:0;let n=String(o.state).toLowerCase();return e||n==="run"||n==="cooking"||n==="on"?1:n==="ready"||n==="standby"||n==="pause"||n==="paused"?.3:0}function Ic(o){if(!o||Z(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let n=String(o.attributes.hvac_action??"").toLowerCase(),t=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],i=["heating","cooling","drying","fan"].includes(n);return{color:t,level:i||!n?1:.45}}function Ec(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let n=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),t=a=>{let l=Math.max(...a),c=Math.min(...a),d=l-c;return l<=0||d/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/d+6)%6:l===a[1]?(a[2]-a[0])/d+2:(a[0]-a[1])/d+4)*60,d/l]},[i]=t(n),[r]=t(o.color);if(i<0||r<0)return i<0&&r<0?o:null;let s=Math.abs(i-r);return Math.min(s,360-s)<=30?o:null}function zc(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let n=[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255);return{...o,color:n}}function ot(o,e){if(!o||o.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,t=typeof n.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,n.brightness/255))):1,i=n.rgb_color,r;return i&&n.color_mode!=="color_temp"&&n.color_mode!=="brightness"&&n.color_mode!=="onoff"?r=[i[0]/255,i[1]/255,i[2]/255]:typeof n.color_temp_kelvin=="number"?r=kf(n.color_temp_kelvin):r=[1,.71,.28],{color:r,level:t}}function Tc(o){let e=o.attributes.supported_color_modes;return!Array.isArray(e)||!e.length?!0:e.some(n=>["hs","rgb","rgbw","rgbww","xy"].includes(String(n)))}function kf(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),n=[1,.66,.26],t=[.78,.9,1];return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e]}function hn(o,e,n=null){if(o==="camera")return n==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&n){if(n==="floor")return 1.95;if(n==="table")return 1.25;if(n==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var $f=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Sf=new Set(["garage","gate"]),Mf=new Set(["window","opening"]);function Jn(o,e,n=!1){let t=new Map;return e.length&&o.forEach((i,r)=>{let s=n&&e.length===1?e[0]:e[r];s&&t.set(i.id,s)}),t}function to(o,e){let n=new Map,t=(r,s)=>r==="none"?null:r??s??null,i=(r,s,a)=>{let l=t(r.cover,s);return{cover:l,contact:r.sensor==="handle"&&r.contact==null?null:t(r.contact,a),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,lock:(r.type==="door"||r.type==="window"&&r.sill<=.01)&&r.lock&&r.lock!=="none"?r.lock:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:l&&W(l)==="cover"&&r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,...r.slat_invert?{slatInvert:!0}:{},tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{}}};for(let r of e){for(let s of r.rooms){let a=r.openings.filter(x=>x.room_id===s.id).sort((x,v)=>x.edge-v.edge||x.offset-v.offset);if(!a.length)continue;let l=ke(o,s.area_id),c=x=>o.states[x]?.attributes.device_class,d=l.filter(x=>W(x)==="cover"&&$f.has(c(x))),u=a.filter(x=>x.type==="window"),p=a.filter(x=>x.type==="door"),h=a.filter(x=>x.type==="garage"),_=Jn(u,d,!0),b=Jn(u,l.filter(x=>W(x)==="binary"&&Mf.has(c(x)))),f=Jn(p,l.filter(x=>W(x)==="binary"&&c(x)==="door")),w=Jn(h,l.filter(x=>W(x)==="cover"&&Sf.has(c(x)??""))),k=Jn(h,l.filter(x=>W(x)==="binary"&&c(x)==="garage_door"));for(let x of a){let v=x.type==="window"?_:x.type==="garage"?w:null,m=x.type==="window"?b:x.type==="garage"?k:f;n.set(x.id,i(x,v?.get(x.id),m.get(x.id)))}}for(let s of r.openings)n.has(s.id)||n.set(s.id,i(s))}return n}var Pf=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function If(o){if(!o||Z(o))return null;let e=o.attributes.window_state;for(let n of[typeof e=="string"?e:null,o.state]){if(!n)continue;let t=Pf.find(([i])=>i.test(n.trim()));if(t)return t[1]}return null}var Ef=new Set(["unlocked","unlocking","open","opening"]);function Nr(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var zf=.5;function it(o,e,n="window"){e.cover&&Nr(e.cover)&&(e={...e,cover:null,position:null});let t=e.lock?o.states[e.lock]:void 0,i=t&&Ef.has(t.state)?{unlocked:!0}:{},r=v=>!!v&&o.states[v]?.state==="on",s=v=>!!v&&!!o.states[v]&&!Z(o.states[v]),a=v=>v?If(o.states[v]):null,l=v=>{let m=a(v);return e.contactInvert&&v&&v!==e.tilt&&v!==e.tilt2&&m!=="tilted"&&m?m==="open"?"closed":"open":m},c=r(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",d=l(e.contact2)==="open"&&!c?1:0,u=r(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=u?1:0,h=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let v=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,v/(e.tiltMax||15))),p<.08&&(p=0),u=p>0}let _=l(e.contact)==="open"&&!u?1:0,b=null,f=e.cover?o.states[e.cover]:void 0,w=Ac(o,e.position);if(w!==null)b=e.positionInverted?w:1-w;else if(f&&!Z(f)){let v=f.attributes.current_position;typeof v=="number"?b=1-Math.min(100,Math.max(0,v))/100:b=f.state==="closed"?1:f.state==="opening"||f.state==="closing"?.5:0}else e.cover&&(b=0);let k=f&&!Z(f)?fn(f,!!e.slatInvert):null,x=k===null?{}:{slats:k/100};if(n==="door"){let v=l(e.contact);return b!==null&&f&&Lc.has(String(f.attributes.device_class??""))?{open:v===null?1-b:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...i}:{open:v===null?e.shut?0:zf:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:b,...x,sensed:v!==null||b!==null,...i}}if(n==="garage"){let v=l(e.contact),m=b!==null||v!==null;return b===null&&(b=v===null||v==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:b,sensed:m}}return{open:_,open2:d,tilt:p,tilt2:c?1:0,cover:b,...x,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(h),...i}}function fn(o,e=!1){let n=o?.attributes.current_tilt_position;if(typeof n!="number"||!Number.isFinite(n))return null;let t=Math.min(100,Math.max(0,n));return e?100-t:t}function no(o,e){return!!o?.floors.some(n=>n.openings.some(t=>t.cover===e&&t.slat_invert))}function Ac(o,e){let n=e?o.states[e]:void 0;if(!n||Z(n))return null;let t=Number(n.state);if(!Number.isFinite(t))return null;let i=n.attributes.unit_of_measurement==="%"||t>1;return Math.min(1,Math.max(0,i?t/100:t))}function Br(o,e){let n=new Map,t=[];for(let s of e){let a=W(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=n.get(a);l||(n.set(a,l=[]),t.push(a)),l.push(s)}let i=t.map(s=>{let a=n.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function Go(o,e){return Br(o,e).map(n=>n.primary)}var _c={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Rc=new Set(["tv_board","tv_wall"]);function Fc(o,e){let n=o.states[e.entity];if(!n)return!1;let t=e.attribute?n.attributes[e.attribute]:n.state;if(t==null)return!1;let i=String(t).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Hc(o){return Rc.has(o)||!!Ol(o)}function jo(o){return Hc(o)||o==="desk"||o==="fridge_smart"}function mn(o,e){let n=new Set,t=Nt(o,e),i=e.some(r=>r.openings.some(s=>s.confirm))?to(o,e):null;for(let r of e){for(let s of r.placements)s.confirm&&n.add(s.entity_id);for(let s of r.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&n.add(a)}for(let s of r.furniture){let a=s.confirm?t.get(s.id)?.entity:null;if(a&&a!=="none"&&n.add(a),s.confirm)for(let l of s.gangs??[])l.entity&&l.entity!=="none"&&n.add(l.entity)}}return n}function Cc(o,e){let n=new Map;for(let t of e)for(let i of t.furniture){if(i.type!=="awning"&&!Do(i.type))continue;let r=i.entity&&i.entity!=="none"?i.entity:null,s=r?o.states[r]:void 0,a=i.awning_time??20;if(!s||Z(s)){n.set(i.id,{out:0,moving:0,time:a});continue}let l=p=>i.awning_invert?1-p:p,c=Ac(o,i.awning_position&&i.awning_position!=="none"?i.awning_position:null),d=s.attributes.current_position,u=s.state==="opening"?i.awning_invert?-1:1:s.state==="closing"?i.awning_invert?1:-1:0;c!==null?n.set(i.id,{out:l(c),moving:0,time:a}):typeof d=="number"&&Number.isFinite(d)?n.set(i.id,{out:l(Math.min(1,Math.max(0,d/100))),moving:0,time:a}):u?n.set(i.id,{out:null,moving:u,time:a}):n.set(i.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}for(let t of e)for(let i of t.outdoor??[])if(i.type==="fence")for(let r of i.gates??[])n.set(r.id,Tf(o,r));return n}function Tf(o,e){let n=e.time??(e.kind==="slide"?15:4),t=a=>a&&a!=="none"?o.states[a]:void 0,i=t(e.contact);if(i&&!Z(i))return{out:null,moving:i.state==="on"||i.state==="open"?1:-1,time:n,settled:!0};let r=t(e.entity);if(!r||Z(r))return{out:null,moving:-1,time:n,settled:!0};let s=r.attributes.current_position;return typeof s=="number"&&Number.isFinite(s)?{out:Math.min(1,Math.max(0,s/100)),moving:0,time:n}:r.state==="opening"?{out:null,moving:1,time:n}:r.state==="closing"?{out:null,moving:-1,time:n}:{out:null,moving:r.state==="open"||r.state==="on"?1:-1,time:n,settled:!0}}function Vr(o,e){let n=i=>{if(!i||i==="none")return!1;let r=o.states[i]?.state;return r==="on"||r==="open"},t=new Map;for(let i of e)for(let r of i.furniture)r.type==="fridge_smart"&&t.set(r.id,{left:n(r.door_left),right:n(r.door_right)});return t}var bc={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Kr(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Af(o,e){if(Kr(o,e))return e;let n=o.entities?.[e]?.device_id;return n?Or(o,n).find(t=>t!==e)??null:null}function Nt(o,e){let n=new Map;for(let t of e){let i=new Set([...t.furniture.flatMap(r=>[r.entity,r.power]),...t.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of t.furniture){let s=r.type in bc,a=s?bc[r.type]:_c[r.type]??(dn(r.type)?_c.robot_vacuum:void 0);if(!a&&r.entity==null&&r.power==null&&r.type!=="alarm_keypad")continue;let l=t.rooms.find(h=>h.points.length>=3&&V([r.x,r.z],h.points))??(r.type==="awning"?Er(t).find(h=>V([r.x,r.z],h.points)):void 0),c=l?Go(o,ke(o,l.area_id)):[],d=h=>`${h} ${G(o,h)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let h=c.filter(_=>!i.has(_));if(s){let _=h.filter(b=>W(b)==="light");u=_.find(b=>a.test(d(b)))??_[0]??null}else if(dn(r.type)){let _=l?.area_id??null;u=Object.keys(o.entities??{}).find(b=>b.startsWith("vacuum.")&&!i.has(b)&&!Uo(o,b)&&ze(o,b)===_)??null}else if(r.type==="alarm_keypad")u=Object.keys(o.states).find(_=>_.startsWith("alarm_control_panel."))??null;else if(r.type==="radiator"||r.type==="ac_unit"){let _=h.filter(b=>W(b)==="climate");u=_.find(b=>a.test(d(b)))??_[0]??null}else if(Hc(r.type)){let _=h.filter(b=>W(b)==="media");u=_.find(b=>o.states[b]?.attributes.device_class==="tv")??_.find(b=>a?.test(d(b)))??(Rc.has(r.type)?_[0]??null:null)}else r.type==="awning"?u=h.find(_=>_.startsWith("cover.")&&(a?.test(d(_))||o.states[_]?.attributes.device_class==="awning"))??null:a&&(u=h.find(_=>["switch","media","fan"].includes(W(_)??"")&&a.test(d(_)))??null);u&&i.add(u)}let p=r.power==="none"?null:r.power??null;r.power==null&&(p=u?Af(o,u):null,!p&&a&&l&&!s&&(p=ke(o,l.area_id).find(_=>Kr(o,_)&&!i.has(_)&&a.test(d(_)))??null),p&&i.add(p)),(u||p)&&n.set(r.id,{entity:u,power:p})}}return n}function gn(o,e){if(!o)return null;for(let n of e?.floors??[])for(let t of n.furniture)if(t.type==="alarm_keypad"&&t.entity&&t.entity.startsWith("alarm_control_panel.")&&o.states[t.entity])return t.entity;for(let n of e?.floors??[])for(let t of n.placements??[])if(t.entity_id?.startsWith("alarm_control_panel.")&&o.states[t.entity_id])return t.entity_id;return Object.keys(o.states).find(n=>n.startsWith("alarm_control_panel."))??null}function Ur(o){if(!o)return null;let e=String(o.state).toLowerCase();return e==="unavailable"?!1:e==="unknown"||e===""?null:!["off","disconnected","offline","not_home","disabled","down","isolated"].includes(e)}function qo(o){if(!o||o.state!=="on")return 0;let e=o.attributes.percentage;return typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.min(1,e/100)):.6}function Gr(o){if(!o||o.state==="off"||o.state==="standby"||Z(o))return null;let e=o.attributes,n=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return n.includes("netflix")?[.9,.04,.08]:n.includes("youtube")?[1,.1,.15]:n.includes("prime")||n.includes("amazon")?[.1,.6,.95]:n.includes("disney")?[.2,.35,1]:n.includes("spotify")?[.12,.85,.4]:n.includes("zdf")||n.includes("ard")||n.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function _n(o,e,n,t=[]){let i=(u,p)=>V([u,p],n.points),r=Nt(o,[e]),s=to(o,[e]),a=[...e.placements.filter(u=>i(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>i(u.x,u.z)).flatMap(u=>[r.get(u.id)?.entity,r.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===n.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...t.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...n.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(n.hidden??[]),c=[...new Set(a)].filter(u=>!l.has(u)),d=new Set(c);return{shown:c,more:ke(o,n.area_id).filter(u=>!d.has(u)&&!l.has(u))}}var vc=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Rf={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Zo(o,e){let n=e.car??{},t=u=>u&&u!=="none"?u:null,i=t(n.device)??t(e.entity),r=i?o.entities?.[i]?.device_id:null,s=r&&o.entities?Object.values(o.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,p,h)=>s.find(_=>p.includes(_.split(".")[0])&&Rf[u].test(a(_))&&(!h||h(_)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:t(n.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:t(n.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:t(n.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:t(n.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:t(n.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:t(n.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:t(n.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Ff(o){let e=o.entity_id,n=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?n==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?n==="off":n==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(n)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(n)?!1:null:n==="on"}function oo(o,e){let n=Zo(o,e),t=f=>f?o.states[f]:void 0,i=f=>{let w=Number(t(f)?.state);return f&&Number.isFinite(w)?w:null},r=i(n.soc),s=i(n.range),a=t(n.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(i(n.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=t(n.plugged),p=t(n.lock),h=t(n.climate),_=t(n.tracker),b=_?.state.toLowerCase()??"";return{entities:n,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:s,rangeUnit:String(t(n.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:u?u.state==="on":null,locked:p?Ff(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:_&&b!=="home"&&!Z(_)?b==="not_home"?"":_.state:null}}function Dc(o,e){return e.flatMap(n=>n.furniture.filter(t=>t.type==="parking"&&t.car).flatMap(t=>Object.values(Zo(o,t)))).filter(n=>!!n)}function io(o,e,n){if(n==="none")return null;if(n)return n;let t=e?o.entities?.[e]?.device_id:null;if(!t||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==t||!i.entity_id.startsWith("sensor."))&&(vc.test(i.translation_key??"")||vc.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function wc(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Oc(o,e,n,t){let i=n?o.states[n]?.attributes:void 0;for(let r of[t?o.states[t]?.state:void 0,i?.current_room,i?.room,i?.current_segment]){let s=jr(o,e,r);if(s)return s}return null}function jr(o,e,n){if(typeof n!="string"||!n||n==="unknown"||n==="unavailable")return null;let t=wc(n);if(!t)return null;let i=r=>[r.name,r.area_id??"",r.area_id&&o.areas?.[r.area_id]?.name||""].map(wc).filter(Boolean);return e.find(r=>i(r).includes(t))??e.find(r=>i(r).some(s=>s.length>=3&&(s.includes(t)||t.includes(s))))??null}var Lc=new Set(["garage","gate","door"]);function qr(o,e){let n=new Set,t=new Set,i=r=>{if(!r||r==="none"||!o.states[r])return;let s=W(r);s==="light"?n.add(r):s==="cover"&&!Lc.has(String(o.states[r].attributes.device_class??""))&&t.add(r)};for(let r of e.rooms){let s=new Set(r.hidden??[]);for(let a of Go(o,ke(o,r.area_id)))s.has(a)||i(a)}for(let r of e.placements)i(r.entity_id);for(let r of e.furniture)i(r.entity);return{lights:[...n],covers:[...t]}}function bn(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Zr(o){o!==location.pathname+location.search&&(history.pushState({from:location.pathname},"",o),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}})))}function Wc(o,e,n){let t=n.target?.trim()??"";if(n.action==="navigate"&&t)Zr(t);else if(n.action==="more_info"&&t)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}));else if(n.action==="service"&&t.includes(".")){let[i,r]=t.split(".",2);o.callService(i,r,n.data??{})}else n.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:n.data??{},bubbles:!0,composed:!0}))}function Hf(o){return o&&o.startsWith("/api/camera_proxy/")?`/api/camera_proxy_stream/${o.slice(18)}`:null}function Nc(o,e,n){for(let t of oe(o))if(t.points.length>=3&&V([e,n],t.points))return{id:t.id,name:t.name||t.id};return null}function Yo(o,e){if(!o?.states||!e)return[];let n=new Set,t=[],i=e.floors??[],r=(s,a,l,c)=>{if(!s.startsWith("camera.")||n.has(s))return;let d=o.states[s];if(!d)return;n.add(s);let u=l,p=null;if(!u){let f=ze(o,s);if(f){let w=oe(a).find(k=>k.area_id===f);w?u={id:w.id,name:w.name||w.id}:p=o.areas?.[f]?.name??null}}let h=u?i.length>1?`${a.name} \xB7 ${u.name}`:u.name:p?i.length>1?`${a.name} \xB7 ${p}`:p:a.name||null,_=typeof d.attributes.entity_picture=="string"?d.attributes.entity_picture:null,b=d.state??"unavailable";t.push({entityId:s,label:c&&c.trim()||G(o,s),location:h,floorId:a.id,floorName:a.name||a.id,roomId:u?.id??null,online:b!=="unavailable"&&b!=="unknown",state:b,pictureUrl:_,streamUrl:Hf(_)})};for(let s of i){for(let a of s.placements??[])a.entity_id.startsWith("camera.")&&r(a.entity_id,s,Nc(s,a.x,a.z),a.name);for(let a of s.furniture??[]){let l=a.look_of?.startsWith("camera.")?a.look_of:a.entity?.startsWith("camera.")?a.entity:null;l&&r(l,s,Nc(s,a.x,a.z),a.name)}for(let a of oe(s)){let l=new Set(a.hidden??[]);for(let c of a.panel??[])c.startsWith("camera.")&&!l.has(c)&&r(c,s,{id:a.id,name:a.name||a.id})}}return t}function vt(o,e){return Yo(o,e).length}function Yr(o,e,n){if(o<=1||e<480)return 1;let t=Math.min(o,e<820?2:e<1320?3:4);for(let i=1;i<=t;i++){let r=Math.ceil(o/i),s=(e-(i-1)*10)/i;if(r*(s*(9/16)+34)+(r-1)*10<=n*1.08)return i}return t}var Me=ge`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,Te=ge`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-security-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
  }
  .fp3d-sec-triggered {
    background: #ff334b !important;
    color: #ffffff !important;
    animation: fp3d-sec-pulse 1s infinite alternate !important;
    box-shadow: 0 0 14px rgba(255, 51, 75, 0.8) !important;
  }
  @keyframes fp3d-sec-pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0.88;
      transform: scale(1.04);
    }
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* the group titles of an opened list (the styles): dark too, else a white bar with light text */
  .fp3d-field select optgroup,
  select optgroup {
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-accent);
    font-style: normal;
    font-weight: 700;
  }
  /* a list to edit line by line (a module's sentences): ✕ per line, a field to add one */
  .fp3d-lines {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-lines-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 4px 4px 9px;
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    font-size: 14px;
    color: var(--fp3d-text);
  }
  .fp3d-lines-row span {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .fp3d-lines-row button {
    border: 0;
    background: none;
    color: var(--fp3d-muted);
    font: inherit;
    cursor: pointer;
    padding: 2px 8px;
    border-radius: 6px;
  }
  .fp3d-lines-row button:hover:not(:disabled) {
    color: var(--fp3d-danger);
  }
  .fp3d-lines-add {
    display: flex;
    gap: 6px;
  }
  .fp3d-lines-add input {
    flex: 1;
    min-width: 0;
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var Xr={pt:{title:"C\xE2meras",all:"Todas",live:"Ao vivo",snap:"3s",grid:"Grade",empty:"Nenhuma c\xE2mera posicionada na casa.",offline:"Indispon\xEDvel",go3d:"Ver no 3D",details:"Detalhes no Home Assistant",close:"Fechar"},de:{title:"Kameras",all:"Alle",live:"Live",snap:"3s",grid:"Raster",empty:"Keine Kameras im Haus platziert.",offline:"Nicht verf\xFCgbar",go3d:"In 3D zeigen",details:"Home-Assistant-Details",close:"Schlie\xDFen"},en:{title:"Cameras",all:"All",live:"Live",snap:"3s",grid:"Grid",empty:"No cameras placed in the house.",offline:"Unavailable",go3d:"Show in 3D",details:"Home Assistant details",close:"Close"}};function Cf(o){let e=(o??"en").toLowerCase();return e.startsWith("pt")?Xr.pt:e.startsWith("de")?Xr.de:Xr.en}var Qr=class extends pe{static properties={hass:{attribute:!1},building:{attribute:!1},open:{type:Boolean},_live:{state:!0},_floor:{state:!0},_focusId:{state:!0},_tick:{state:!0},_cols:{state:!0}};timer;ro;gridW=960;gridH=600;onKey=e=>{this.open&&(e.key==="Escape"?(e.stopPropagation(),this._focusId?this._focusId=null:this.closeModal()):this._focusId&&(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),this.stepFocus(e.key==="ArrowRight"?1:-1)))};constructor(){super(),this.hass=void 0,this.building=null,this.open=!1,this._live=!0,this._floor=null,this._focusId=null,this._tick=0,this._cols=2}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),this.syncTimer()}disconnectedCallback(){window.removeEventListener("keydown",this.onKey),this.stopTimer(),this.ro&&(this.ro.disconnect(),this.ro=void 0),super.disconnectedCallback()}updated(e){e.has("open")?(this.open||(this._focusId=null),this.syncTimer(),this.observeStage()):e.has("_live")&&this.syncTimer()}observeStage(){if(!this.open){this.ro&&(this.ro.disconnect(),this.ro=void 0);return}let e=this.renderRoot.querySelector(".np-cam-stage");!e||typeof ResizeObserver>"u"||(this.ro&&this.ro.disconnect(),this.ro=new ResizeObserver(n=>{let t=n[0]?.contentRect;if(!t||t.width<40)return;this.gridW=t.width,this.gridH=t.height;let i=Yr(this.visibleCameras().length,t.width,t.height);i!==this._cols&&(this._cols=i)}),this.ro.observe(e))}syncTimer(){this.stopTimer(),this.open&&!this._live&&(this._tick=Date.now(),this.timer=setInterval(()=>{this._tick=Date.now()},3e3))}stopTimer(){this.timer!==void 0&&(clearInterval(this.timer),this.timer=void 0)}closeModal(){this.dispatchEvent(new CustomEvent("mosaic-close",{bubbles:!0,composed:!0}))}openMoreInfo(e,n){e.stopPropagation(),this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}))}jump3d(e,n){e.stopPropagation(),this.dispatchEvent(new CustomEvent("mosaic-jump",{detail:{floorId:n.floorId,roomId:n.roomId},bubbles:!0,composed:!0}))}visibleCameras(e=Yo(this.hass,this.building)){return this._floor?e.filter(n=>n.floorId===this._floor):e}stepFocus(e){let n=this.visibleCameras();if(n.length<2||!this._focusId)return;let t=n.findIndex(i=>i.entityId===this._focusId);t<0||(this._focusId=n[(t+e+n.length)%n.length].entityId)}renderFeed(e,n){let t=this.hass?.states[e.entityId];if(!e.online||!t)return g`<div class="np-cam-off">${n.offline}</div>`;let i=typeof customElements<"u"&&!!customElements.get("ha-camera-stream");if(this._live){if(i)return g`<ha-camera-stream .hass=${this.hass} .stateObj=${t} muted allow-exoplayer></ha-camera-stream>`;let r=e.streamUrl??e.pictureUrl;if(r)return g`<img src=${r} alt=${e.label} />`}else if(e.pictureUrl){let r=e.pictureUrl.includes("?")?"&":"?",s=this._tick||1;return g`<img src=${`${e.pictureUrl}${r}_ts=${s}`} alt=${e.label} loading="lazy" />`}return g`<div class="np-cam-off">${n.offline}</div>`}renderTile(e,n,t){return g`<div
      class="np-cam-tile ${t?"np-cam-focused":""}"
      @click=${()=>this._focusId=t?null:e.entityId}
    >
      <div class="np-cam-media">${this.renderFeed(e,n)}</div>
      <div class="np-cam-bar">
        <span class="np-cam-dot ${e.online?"on":""}"></span>
        <span class="np-cam-name" title=${e.entityId}>${e.label}</span>
        ${e.location?g`<span class="np-cam-loc">${e.location}</span>`:y}
        <span class="np-cam-spacer"></span>
        ${e.floorId||e.roomId?g`<button class="np-cam-act" title=${n.go3d} @click=${i=>this.jump3d(i,e)}>📍 3D</button>`:y}
        <button class="np-cam-act" title=${n.details} @click=${i=>this.openMoreInfo(i,e.entityId)}>ⓘ</button>
      </div>
    </div>`}render(){if(!this.open)return y;let e=Cf(this.hass?.language),n=Yo(this.hass,this.building),t=new Map;for(let l of n)l.floorId&&l.floorName&&!t.has(l.floorId)&&t.set(l.floorId,l.floorName);let i=[...t.entries()],r=this._floor&&t.has(this._floor)?n.filter(l=>l.floorId===this._floor):n,s=this._focusId?r.find(l=>l.entityId===this._focusId)??null:null,a=s?1:Yr(r.length,this.gridW,this.gridH);return g`<div class="np-cam-veil" @click=${l=>l.target===l.currentTarget&&this.closeModal()}>
      <div class="np-cam-dialog" role="dialog" aria-label=${e.title}>
        <header class="np-cam-head">
          <div class="np-cam-title">📹 ${e.title} <span>(${r.length})</span></div>
          ${i.length>1?g`<div class="fp3d-seg">
                <button aria-pressed=${!this._floor} @click=${()=>(this._floor=null,this._focusId=null)}>${e.all}</button>
                ${i.map(([l,c])=>g`<button aria-pressed=${this._floor===l} @click=${()=>(this._floor=l,this._focusId=null)}>${c}</button>`)}
              </div>`:y}
          <div class="np-cam-spacer"></div>
          ${s?g`<button class="fp3d-btn" @click=${()=>this._focusId=null}>⊞ ${e.grid}</button>
                ${r.length>1?g`<button class="fp3d-btn" @click=${()=>this.stepFocus(-1)}>‹</button>
                      <button class="fp3d-btn" @click=${()=>this.stepFocus(1)}>›</button>`:y}`:y}
          <div class="fp3d-seg">
            <button aria-pressed=${this._live} @click=${()=>this._live=!0}>● ${e.live}</button>
            <button aria-pressed=${!this._live} @click=${()=>this._live=!1}>⟳ ${e.snap}</button>
          </div>
          <button class="fp3d-btn" title=${e.close} aria-label=${e.close} @click=${()=>this.closeModal()}>✕</button>
        </header>
        <div class="np-cam-stage">
          ${r.length?s?g`<div class="np-cam-single">${this.renderTile(s,e,!0)}</div>`:g`<div class="np-cam-grid" style=${`--np-cols:${a}`}>
                  ${r.map(l=>this.renderTile(l,e,!1))}
                </div>`:g`<div class="np-cam-empty">${e.empty}</div>`}
        </div>
      </div>
    </div>`}static styles=[Me,Te,ge`
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
    `]};typeof customElements<"u"&&!customElements.get("np-camera-mosaic")&&customElements.define("np-camera-mosaic",Qr);var Df={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",zoom_style:"Beim Hineinzoomen",zoom_late_early:"fr\xFCh",zoom_scope_all:"Alle R\xE4ume",zoom_scope_room:"Nur der Raum",zoom_scope_hint:"Was beim Hineinzoomen in den Stil \xFCbergeht: alle R\xE4ume oder nur der Raum, in den du zoomst oder den du antippst \u2013 der Rest des Hauses bleibt im eingestellten Look",zoom_late_late:"sp\xE4t",zoom_late_hint:"Wann der Stil beim Hineinzoomen einsetzt: fr\xFCh (schon bei einer ge\xF6ffneten Etage) bis sp\xE4t (erst nah im Raum)",zoom_style_off:"Beim Hineinzoomen: bleibt",zoom_style_hint:"Von weitem bleibt das Haus im eingestellten Look, beim Hineinzoomen in eine Etage oder einen Raum geht es flie\xDFend in diesen Stil \xFCber \u2013 ohne Neuladen. Wirkt, wenn oben Neon, Blueprint oder Tag gew\xE4hlt ist.",holo_more:"mehr",holo_less:"weniger",draft_conflict:"Der Plan wurde inzwischen auf einem anderen Ger\xE4t gespeichert \u2013 hier steht jetzt dieser neuere Stand. Deine \xC4nderung von {time} beruhte auf dem \xE4lteren und ist nicht gespeichert.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",plain_off:"Mit M\xF6beln",plain_on:"Nur Grundriss",plain_hint:"Nur Grundriss: W\xE4nde, T\xFCren, Fenster und Treppen ohne M\xF6bel \u2013 die Ger\xE4te bleiben.",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",floor_from_ha:"Etagen aus Home Assistant:",level:"Ebene {n}",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",show_menu:"Anzeige",tool_menu:"Werkzeug",view_menu:"Ansicht",fit:"Grundriss komplett",room:"Raum",rooms:"R\xE4ume",room_id:"ID (Karten-Option room:)",area:"Bereich",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",feed_drain:"Bodenablauf",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",delete:"L\xF6schen",settings:"Einstellungen",furn_extra:"Zusatzwert am Symbol (Sensor, z. B. Wassertemperatur)",roof_basics:"Dachform",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",jiboia_pot:"Topf (Tisch / Kommode)",jiboia_hanging:"H\xE4ngend (Ranken nach unten)",jiboia_totem:"Mit Moosstab (stehend)",orchid_color:"Bl\xFCtenfarbe",orchid_white:"Wei\xDF",orchid_pink:"Rosa / Pink",orchid_yellow:"Gelb",orchid_lilac:"Flieder / Violett",bbq_masonry:"Gemauert / Verkleidet",bbq_hood:"Arbeitsplatte + Edelstahlhaube & Glas",bbq_brick:"Klassischer Klinker",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",cancel:"Abbrechen",confirm_switch:"{name} wirklich schalten?",grid:"Raster (m)",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",area_m2:"{a} m\xB2",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",plan_main:"Zuhause",plan_pick:"Grundriss w\xE4hlen",plan_all:"Alle Grundrisse",plan_new:"Neuer Grundriss",plan_manage:"Grundrisse verwalten",plan_alerts_elsewhere:"{n} Warnung(en) in einem anderen Grundriss",card_plan:"Grundriss",plan_lights_on:"Lichter an",plan_open_now:"Fenster und T\xFCren offen",plan_open_n:"{n} offen",plan_site:"Grundst\xFCck",plan_alert:"{plan}: {text}",plan_alert_go:"Ansehen",card_rooms:"Nur diese R\xE4ume",card_rooms_hint:"Tippe R\xE4ume auf dem Plan an: Die Karte zeigt dann nur sie, mit ihren M\xF6beln und Ger\xE4ten \u2013 etwa f\xFCrs Kinderzimmer-Tablet oder eine Ferienwohnung. Ein einzelner Raum \xF6ffnet sich mit seinen Ger\xE4ten daneben. Leer: das ganze Haus.",card_rooms_leave:"Andere R\xE4ume d\xFCrfen ge\xF6ffnet werden",card_rooms_leave_hint:"Ohne Haken bleibt das Tablet in diesen R\xE4umen.",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",through_full:"Vollbild",through_full_hint:"Das Kamerabild auf dem ganzen Bildschirm (Esc oder Zur\xFCck beendet es). Wo der Browser das nicht kann, \xF6ffnet sich die Kameraansicht von Home Assistant \u2013 dort auch mit Ton.",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt_short:"Neigung \xB0",camera_popup_open:"Durch die Kamera schauen",state_recording:"Nimmt auf",state_streaming:"Streamt",room_cleaning:"Reinigung (Saugroboter)",panel_clean:"Saugen",panel_everything_off:"Alles aus ({n})",voice_clean_started:"Der Saugroboter f\xE4hrt los: {room}.",voice_clean_none:"F\xFCr {room} ist keine Reinigung eingestellt (Editor \u2192 Raum \u2192 Reinigung).",voice_off_done:"{room}: {n} Ger\xE4te aus.",voice_off_nothing:"{room}: Es ist schon alles aus.",voice_noroom:"Welcher Raum? Sag zum Beispiel \u201ESaug die K\xFCche\u201C, oder stell beim Tablet ein, wo es h\xE4ngt.",voice_noroom_open:"Tippe zuerst einen Raum an, dann gilt \u201Eda\u201C f\xFCr ihn.",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",view_settings:"Einstellungen",view_settings_admin:"Nur Administratoren k\xF6nnen diese Einstellungen \xE4ndern \u2013 sie gelten f\xFCr das ganze Haus.",view_settings_look:"Darstellung",glass_size:"Gr\xF6\xDFe der Glas-Kacheln",glass_size_hint:"Energie, W\xE4rmepumpe, Auto, Ger\xE4te und die anderen Glas-Kacheln in der 3D-Ansicht",view_settings_alerts:"Warnungen",view_settings_control:"Bedienung",view_settings_more:"Alle weiteren Einstellungen findest du im Editor unter \u2699 Einstellungen.",lines_add:"Hinzuf\xFCgen",lines_new:"Neuer Eintrag \u2026",sheet_mic:"Sprechen",sheet_listening:"Ich h\xF6re zu \u2026",sheet_mic_failed:"Nichts verstanden \u2013 das Mikrofon braucht HTTPS und eine Sprach-Pipeline mit Spracherkennung.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",bg_map_1:"Tippe im Bild auf eine Au\xDFenecke des Hauses.",bg_map_2:"Jetzt im Bild auf die n\xE4chste Ecke derselben Au\xDFenwand.",bg_map_3:"Jetzt dieselbe erste Ecke am gelben Umriss der Karte antippen.",bg_map_4:"Und die zweite Ecke am Umriss \u2013 das Bild wird passend gedreht, skaliert und verschoben.",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",media_play_head:"Abspielen",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",director:"Live-Regie",director_motion_off:"Aus",director_motion_person:"Nur Personen",director_motion_all:"Jede Bewegung",voice:"Sprachsteuerung",aliases:"Weitere Namen f\xFCr die Sprache",voice_showing:"Ich zeige {name}.",screen_name:"Bildschirmname (f\xFCr Assist)",screen_name_placeholder:"z. B. K\xFCche",screen_name_hint:"Fragst du Assist (\u201EZeig das Wohnzimmer\u201C) oder ruft eine Automation den Dienst neonplan3d.ask, reagiert jede offene NeonPlan-Ansicht. Nennt der Dienst einen Bildschirm, reagiert nur die Ansicht mit diesem Namen.",card_voice_area:"Raum f\xFCr \u201Ehier\u201C",card_voice_area_none:"Keiner (Einstellung des Ger\xE4ts)",card_voice_area_hint:"H\xE4ngt das Tablet mit diesem Dashboard in einem Raum, gelten S\xE4tze ohne Raumnamen (\u201ELicht an\u201C, \u201EMach hier das Licht aus\u201C) f\xFCr diesen Bereich. Ohne Auswahl gilt der Raum, der auf dem Ger\xE4t selbst eingestellt ist.",voice_button:"Sprechen",voice_listen:"Ich h\xF6re zu \u2026",voice_none:"Nichts verstanden",voice_silent:"Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch ausschalten (Motion Detection \u2192 Acoustic Detection) und neu laden.",voice_no_pipeline:"Keine Spracherkennung in Assist eingerichtet (Einstellungen \u2192 Sprachassistenten).",voice_denied:"Mikrofon nicht freigegeben \u2013 nur \xFCber https und mit Freigabe im Browser bzw. in Fully Kiosk.",voice_error:"Sprachsteuerung: {msg}",card_voice:"Sprachsteuerung (Mikrofon-Knopf)",card_voice_hint:"\u201EZeig das Wohnzimmer\u201C zeigt den Raum, andere S\xE4tze gehen an Assist. Braucht https und ein freigegebenes Mikrofon",voice_sentences_distinct:"Nur eindeutige (\u201EZeig \u2026\u201C, \u201EFrag das Haus \u2026\u201C, \u201ENeonPlan, \u2026\u201C)",voice_sentences_all:"Alle Fragen (f\xE4ngt auch S\xE4tze ab, die Home Assistant selbst beantwortet)",voice_sentences_off:"Keine (Standard \u2013 keine Satzdatei)",backdrop:"Hintergrund",backdrop_look:"Himmel des Looks (Standard)",backdrop_gradient:"Farbverlauf",backdrop_image:"Bild",card_director:"Live-Regie (Kamera-Cockpit)",card_director_hint:"Die Karte zeigt von selbst, was passiert. Welche Ereignisse, legst du im Editor unter \u201ELive-Regie\u201C fest.",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_shadow:"Sonnenbahn und Hausschatten",tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",tap_in_room_hint:"In der Haus- und Etagenansicht \xF6ffnet ein Tipp auf ein Ger\xE4t seinen Raum, statt es zu schalten \u2013 so l\xF6st ein Tipp auf die Etage nicht aus Versehen einen Rollladen aus. Im ge\xF6ffneten Raum bleibt alles wie gewohnt; langes Dr\xFCcken \xF6ffnet \xFCberall das Men\xFC.",right_click_back:"Rechtsklick geht eine Ebene zur\xFCck",right_click_back_hint:"Ein kurzer Rechtsklick in der 3D-Ansicht schlie\xDFt den Raum bzw. geht vom Stockwerk zum Haus zur\xFCck. Aus: Ein Rechtsklick wirkt wie ein Klick.",sun_shadow_hint:"\xDCber dem Haus zeigt ein Bogen den Weg der Sonne heute mit Auf- und Untergang, auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne. Braucht die Nordrichtung; auf der Stufe \u201ETablet\u201C nur der Bogen.",sky:"Echter Himmel",sky_hint:"Hinter dem Haus ein Himmel nach dem echten Sonnenstand: Abendrot, Sterne, die mit der Nacht wandern, und der Mond in seiner echten Phase. Mit \u201EWetter drau\xDFen\u201C ziehen Wolken mit dem Wind. Aus bei eigenem Hintergrund und im Bauplan-Look; auf der Stufe \u201ETablet\u201C ein ruhiges Standbild.",flyin:"Anflug aus dem All",flyin_hint:"Beim \xD6ffnen dreht sich ein Neon-Globus zu deinem Zuhause und taucht hinein, die Kamera fliegt von hoch oben aufs Haus. Einmal pro Laden der Seite; ein Tipp \xFCberspringt es. Nicht im Editor und nicht auf der Stufe \u201ETablet\u201C.",sun_arc:"Sonnenbogen um",sun_arc_house:"das Haus",sun_arc_plot:"das ganze Grundst\xFCck",sun_arc_hint:"Wo Sonnenbogen und Kompassring stehen: um das Haus (Standard) oder um alles Gezeichnete \u2013 R\xE4ume, Au\xDFenfl\xE4chen, Z\xE4une und freie W\xE4nde.",window_glow:"Fenster leuchten nachts nach drau\xDFen",window_glow_hint:"Ist es drau\xDFen dunkel, f\xE4llt das Licht beleuchteter R\xE4ume durch die Fenster als warmer Schein auf Rasen und Terrasse davor \u2013 in der Lichtfarbe des Raums, schw\xE4cher hinter heruntergelassenen Rolll\xE4den.",gpu_safe_note:"In diesem Browser sind Sonnenbahn, Hausschatten und der Fensterschein bei Nacht aus: Gleich nach dem Start ging die Grafik verloren. Die n\xE4chste NeonPlan-Version versucht es wieder.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_unavailable:"Kontakt nicht verf\xFCgbar: {name}",alert_short_contact_unavailable:"Kontakt nicht verf\xFCgbar",alert_unavailable:"Warnen, wenn ein Fenster- oder T\xFCrkontakt nicht verf\xFCgbar ist",alert_unavailable_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D zu aus, obwohl es niemand wei\xDF. Dann kommt eine Warnung.",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Winter und Haustiere",gift_text:"Die Fun-Packs Winter & Weihnachten (Lichterketten am Dach, Schnee, Weihnachtsbaum, Adventskranz und ein Silvester-Feuerwerk) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Winter und Haustiere",gift_text_free:"Lichterketten am Dach, Schnee, Weihnachtsbaum, Adventskranz und ein Silvester-Feuerwerk \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof:"Dach zeigen",card_roof_hint:"Aus: Das Haus erscheint ohne Dach, als h\xE4tte es keins \u2013 die R\xE4ume liegen offen (Solarfelder auf dem Dach entfallen mit)",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_templates:"Karten-Vorlagen",card_templates_intro:"Stell eine Dashboard-Karte einmal hier ein, zum Beispiel \u201EK\xFCche Fire-Tablet\u201C. Auf dem Tablet w\xE4hlst du im Kartenformular nur noch die Vorlage. \xC4nderst du sie hier, \xFCbernimmt jedes Tablet mit dieser Vorlage sie von selbst.",card_templates_empty:"Noch keine Vorlage. Leg mit \u201E+ Neue Vorlage\u201C die erste an.",card_templates_no_editor:"Das Kartenformular lie\xDF sich nicht laden. Lade die Seite neu (Strg+F5).",card_template_new:"Neue Vorlage",card_template_new_name:"Neue Vorlage",card_template_copy_name:"{name} (Kopie)",card_template_delete_ask:"Vorlage \u201E{name}\u201C l\xF6schen? Karten, die sie nutzen, laufen dann mit ihren eigenen Einstellungen weiter.",card_template_reloaded:"Neu laden geschickt: die offenen Bildschirme laden in den n\xE4chsten Sekunden neu.",card_template_reload_failed:"Neu laden ging nicht. L\xE4uft NeonPlan in Home Assistant schon in dieser Version (nach einem Update neu starten)?",card_template_reload_all:"Alle Bildschirme neu laden",card_template_reload_hint:"L\xE4dt jede offene NeonPlan-Ansicht neu, etwa nach einem Update. In Automationen: Aktion \u201Eneonplan3d.reload_screens\u201C.",card_template_name:"Name",card_template_duplicate:"Duplizieren",card_template_preview:"Vorschau",card_template_preview_off:"Vorschau aus",card_template_preview_on:"Vorschau zeigen",card_template_where:"Wo h\xE4ngt das Tablet?",card_template_where_hint:"Der Raum f\xFCr \u201Ehier\u201C: \u201EMach hier das Licht an\u201C gilt dann f\xFCr diesen Bereich, auch wenn die Karte immer das Erdgeschoss zeigt.",card_template_reloading:"Wird neu geladen \u2026 (ein paar Sekunden)",screen_reloading:"L\xE4dt neu \u2026",card_template_open:"Im NeonPlan-Editor bearbeiten",card_template_make:"Vorlage im NeonPlan-Editor anlegen",card_template_screen:"Bildschirm",card_template_screen_tablet:"Tablet 10\u2033 quer (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 quer (Fire 7)",card_template_screen_upright:"Tablet hochkant",card_template_screen_phone:"Handy",card_template_preview_look:"Nur zum Ansehen: Ein Tipp in die Vorschau schaltet nichts.",card_template_where_other:"Weitere Bereiche",card_template_voice_off:"Der Mikrofon-Knopf ist in dieser Vorlage aus. Ohne ihn h\xF6rt das Tablet nicht zu.",card_template_voice_on:"Mikrofon-Knopf einschalten",card_template_own:"Diese Karte hat noch alte Einstellungen, die mit der Vorlage nicht mehr gelten: {list}.",card_template_own_clear:"Aufr\xE4umen (nur die Vorlage behalten)",card_template_mode:"\xC4nderungen:",card_template_live:"Sofort auf die Tablets",card_template_manual:"Erst mit Knopf \xFCbertragen",card_template_pending:"Noch nicht \xFCbertragen: Die Tablets zeigen den alten Stand, die Vorschau schon den neuen.",card_template_publish:"Auf Tablets \xFCbertragen",card_template_discard:"Verwerfen",card_template_published:"\xDCbertragen: Die Tablets zeigen jetzt den neuen Stand.",card_template_preview_big:"Gro\xDF",card_template_preview_small:"Klein",card_template_use:"So nutzt du sie: Auf dem Tablet die NeonPlan-Karte hinzuf\xFCgen und oben die Vorlage w\xE4hlen, oder im YAML:",card_template_copy:"Kopieren",card_template_copied:"Kopiert.",card_template_reload:"Bildschirme mit dieser Vorlage neu laden",card_template:"Vorlage",card_template_none:"Keine \u2013 hier einstellen",card_template_hint:"Karten-Vorlagen baust du im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen. Dann w\xE4hlst du hier nur noch eine aus.",card_template_on:"Diese Karte wird von der Vorlage gesteuert. \xC4ndere sie im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen, jedes Tablet \xFCbernimmt das von selbst.",card_template_missing:"Die Karten-Vorlage \u201E{name}\u201C gibt es im Plan nicht mehr. Die Karte nutzt ihre eigenen Einstellungen.",card_plain:"Nur Grundriss (ohne M\xF6bel)",room_bar:"Raum-Leiste",room_bar_hint:"Unten eine Karte pro Raum: Temperatur, offene Fenster, was l\xE4uft und ein Licht-Schalter. Tippen fliegt in den Raum. Oben stehen dann nur noch die Etagen; das Auge l\xE4sst die Leiste stehen.",room_bar_none:"Ohne Raum-Leiste",room_bar_rooms:"Raum-Leiste",room_bar_all:"+ Favoriten",room_bar_hide:"Raum-Leiste einklappen",room_bar_on:"An",room_bar_off:"Aus",room_bar_light:"Licht",room_bar_activate:"Aktivieren",room_bar_lights:"{n} an",room_bar_lights_off:"Lichter im Raum ausschalten",room_bar_open:"offen",room_bar_playing:"l\xE4uft",card_room_bar:"Raum-Leiste unten",card_room_bar_favorites:"Favoriten in der Raum-Leiste",card_room_bar_favorites_hint:"Szenen, Skripte und Schalter aus den Favoriten (Einstellungen \u2192 Favoriten) vorne in der Leiste.",show_if:"Nur zeigen, wenn \u2026",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",ext_tab:"Erweiterungen",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",fun_intro:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Mit verbundenem Schl\xFCssel liegen sie oben bei deinen Packs zum Installieren; hier schaltest du sie ein und aus.",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor_auto:"Erdgeschoss",print_dot:"Neu",print_dot_hint:"Neu f\xFCr Supporter: NeonPlan Print",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",manual:"Anleitung",manual_more:"Mehr erfahren",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (Modul): Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; die Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, pH, Chlor/Redox und Salz mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor, Salz und Frost; die Pooltechnik baut sich auf Knopfdruck auf, das Wasser flie\xDFt sichtbar durch die Rohre",pool_pump:"Filterpumpe",pool_ph:"pH-Wert",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_shape_free:"Frei",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",card_room:"Start-Raum",card_room_none:"Keiner (Etage oder Haus)",card_walk:"Rundgang erlaubt",card_walk_hint:"Der Knopf f\xFCr den Rundgang auf Augenh\xF6he durchs Haus",card_tt_range:"Zeitreise beginnt",card_tt_range_24h:"vor 24 Stunden",card_tt_range_7d:"vor einer Woche",card_tt_speed:"Abspieltempo",card_tt_speed_day:"1 Tag in 6 s",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_climate:"Klima / Vorheizen",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (Einstellungen \u203A System \u203A Updates), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (Einstellungen \u203A System \u203A Updates), Home Assistant neu starten und dann noch einmal installieren.",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie jetzt",holo_house_now:"Haus jetzt",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",furn_cable_to_grid:"Kabel endet am Netzanschluss",furn_cable_to_grid_hint:"Energie Pro: Das Kabel dieses Wechselrichters l\xE4uft zum Netzanschluss statt zum Z\xE4hler \u2013 etwa wenn Wechselrichter und Netzanschluss weit vom Hausverteiler entfernt sind.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_width:"Breite Seitenteil (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_sliding_glass:"Glasschiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_window_sliding:"Schiebefenster (Glas)",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",preset_door_sliding:"Glasschiebet\xFCr",preset_door_sliding_double:"Glasschiebet\xFCr 4-teilig",preset_window_sliding:"Schiebefenster",preset_window_sliding_double:"Schiebefenster 4-teilig",sliding_leaf_side:"Laufseite Schiebefl\xFCgel",flip_sliding_leaf:"Schiebefl\xFCgel wechseln",apply_sliding_all_windows:"Alle Fenster dieser Etage als Schiebefenster",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",style_slide:"Schiebe (eine Scheibe f\xE4hrt vor die feste)",preset_terrace_slide:"Hebe-Schiebet\xFCr",preset_window_slide:"Schiebefenster",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",gate_kind_swing:"Pforte (ein Fl\xFCgel)",gate_kind_double:"Fl\xFCgeltor (zwei Fl\xFCgel)",gate_kind_slide:"Schiebetor",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_pitch_upper:"Neigung Oberdach (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_end:"Ende",roof_end_auto:"wie die Form",roof_end_gable:"Giebel",roof_end_hint:"Wie der First an diesem Ende endet: Giebel (senkrechte Wand), Walm oder Kr\xFCppelwalm \u2013 so geht zum Beispiel ein Walm nur an einer Seite.",roof_swap:"Seiten tauschen",roof_turn:"Drehung",roof_turn_hint:"Dreht diesen Dachteil im Plan (im Uhrzeigersinn), z. B. f\xFCr einen Anbau im Winkel. Gauben und Zwerchgiebel darauf drehen mit. 0\xB0 = wie bisher.",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_overhang_sides:"\xDCberstand je Seite",roof_overhang_sides_hint:"Den Dach\xFCberstand f\xFCr jede Seite selbst festlegen. Aus: automatisch \u2013 kein \xDCberstand, wo die Dachfl\xE4che an einen h\xF6heren Teil des Hauses st\xF6\xDFt.",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",angle_lock:"3D-Sperre",angle_lock_hint:"Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter \u2013 niemand dreht das Haus aus Versehen.",keep_view_hint:"Beim Wechsel zwischen Haus und Etagen bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",surround_err_busy:"Die Kartenserver sind gerade ausgelastet. Bitte in ein paar Minuten noch einmal versuchen.",surround_err_empty:"F\xFCr diesen Ort enth\xE4lt die Karte noch keine H\xE4user und Stra\xDFen.",sill_board_auto:"automatisch",sill_board_none:"keine",sill_board_inside:"nur innen",sill_board_outside:"nur au\xDFen",opening_height:"H\xF6he (m)",blind_side:"Rollladen sitzt",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",entity_auto:"Automatisch ({name})",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",lib_room_living:"Wohnen",lib_room_dining:"Essen",lib_room_kitchen:"K\xFCche",lib_room_bedroom:"Schlafen",lib_room_kids:"Kinder",lib_room_bath:"Bad",lib_room_office:"B\xFCro",lib_room_hall:"Flur",lib_room_utility:"Hauswirtschaft",lib_room_garage:"Garage",lib_room_garden:"Garten",lib_room_hobby:"Hobby & Fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Sitzm\xF6bel",lib_kind_table:"Tische",lib_kind_storage:"Schr\xE4nke & Regale",lib_kind_bed:"Betten",lib_kind_kitchen:"K\xFCche",lib_kind_appliance:"Ger\xE4te",lib_kind_bath:"Bad",lib_kind_lamp:"Leuchten",lib_kind_media:"TV & Audio",lib_kind_office:"B\xFCro",lib_kind_tech:"Technik & Smart Home",lib_kind_heating:"Heizen & Klima",lib_kind_energy:"Energie",lib_kind_household:"Haushalt",lib_kind_deco:"Deko",lib_kind_plant:"Pflanzen",lib_kind_outdoor:"Garten & Au\xDFen",lib_kind_kids:"Kinder",lib_kind_sport:"Fitness",lib_kind_pets:"Haustiere",lib_kind_vehicle:"Fahrzeuge",lib_kind_stairs:"Treppen & Gel\xE4nder",lib_kind_architecture:"Architektur",rotation:"Drehung (\xB0)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",furn_stove:"Herd",furn_bbq_indoor:"Innengrill (Churrasqueira)",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_plant_moreia:"Moreia (Dietes)",furn_plant_podocarpo:"Steineibe (Podocarpo)",furn_plant_jiboia:"Efeutute (Jiboia)",furn_plant_orquidea:"Orchidee (Phalaenopsis)",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",wall_heights:"Wandh\xF6hen",style_group_custom:"Eigene Stile",style_new:"Als eigenen Stil anlegen",style_own_suffix:"(eigener)",style_delete:"Stil l\xF6schen",style_name:"Name",style_builtin_hint:"Ein fertiger Stil. Zum Anpassen \u201EAls eigenen Stil anlegen\u201C \u2013 dann sind alle Regler da, und dein Stil steht in jeder Stil-Liste.",style_show_beside:"In \u201E3D daneben\u201C zeigen",style_natural:"Echte Materialien (Holz, Fliesen, Wandfarben)",style_dark:"Dunkler Stil \u2013 Linien leuchten",style_line:"Linien",style_surface_dark:"Fl\xE4chen dunkel",style_surface_light:"Fl\xE4chen hell",style_hue:"Farbanteil",style_lift:"Grundhelligkeit",style_contrast:"Kontrast",style_signal:"Aktive Ger\xE4te farbig",style_sun:"Licht nach Richtung",style_ao:"Raumecken",style_shadows:"Kontaktschatten unter M\xF6beln",style_floors:"Bodenstruktur",style_cut:"Schnittkanten dunkel",style_dim:"Abendstimmung",style_bg_top:"Hintergrund oben",style_bg_bottom:"Hintergrund unten",style_times:"Tageszeiten (Hausplan)",wall_exterior_short:"Au\xDFenwand",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto (Tag/Neon nach Sonne)",style:"Stil",style_neon:"Neon",style_blueprint:"Blueprint",style_day:"Tag",style_focus:"Nacht / Fokus",style_synth:"Synthwave",style_cozy:"Wohnlich",style_evening:"Wohnlich Abend",style_winter:"Winterabend",style_model:"Architekturmodell",style_pastel:"Pastell",style_warm:"Warm / Holz & Papier",style_house:"Hausplan (Tag / Abend / Nacht)",style_group_neon:"Neon & Klassik",style_group_homely:"Wohnlich \u2013 echte Materialien",style_group_designed:"Gestaltet",style_group_auto:"Automatisch",style_set:"Stil \u201E{name}\u201C ist an.",style_reset:"Stil wieder wie eingestellt.",style_none:"\u2013 keiner \u2013",style_day_label:"Tags\xFCber",style_evening_label:"Abends",style_night_label:"Nachts",style_switch:"Umschalten",style_switch_sun:"nach Sonne",style_switch_time:"nach Uhrzeit",style_morning_at:"Tag ab",style_evening_at:"Abend ab",style_night_at:"Nacht ab",style_switch_hint:"Nach Sonne: Tag, solange die Sonne scheint, dann Abend bis \u201ENacht ab\u201C. Nach Uhrzeit: die drei Zeiten.",style_entity:"Stil aus Helfer-Entit\xE4t",style_entity_hint:"Ein input_select oder input_text, dessen Zustand einen Stil nennt (z. B. \u201EWohnlich\u201C). Solange er einen Stil nennt, gilt dieser \u2013 Automationen k\xF6nnen so umschalten.",theme_evening:"Stil abends",theme_night:"Stil nachts",theme_schedule_hint:"Leer = den ganzen Tag derselbe Stil. Umgeschaltet wird wie im Hausplan eingestellt (nach Sonne oder Uhrzeit).",persons:"Personen",locate:"Ortung",persons_figure:"Figur",persons_pin:"Pin",persons_off:"aus",furnish:"Einrichten",mount_height:"H\xF6he \xFCber Boden (m)",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",markers_room:"Im Raum",pin_size:"Symbolgr\xF6\xDFe",pin_size_small:"Klein",pin_size_normal:"Normal",pin_size_large:"Gro\xDF",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_out:"Rausgestellt (Helfer)",bin_out_done:"rausgestellt \u2713",bin_out_mark:"Als rausgestellt markieren",bin_next_only:"Nur die n\xE4chste Abholung beschriften",bin_days:"Schilder erst \u2026 Tage vorher zeigen",hh_service2:"{name}: {what} f\xE4llig",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",heat_sensor:"Heizt (Sensor)",heat_sensor_hint:"Sagt der Thermostat nicht, ob er heizt (Tuya-Ventile melden einen \u201EWork state\u201C), nimm hier den Sensor: ein/opened/heating oder eine \xD6ffnung \xFCber 0 % l\xE4sst den Heizk\xF6rper gl\xFChen.",door_lock_btn:"Abschlie\xDFen",door_unlock_btn:"Aufschlie\xDFen",door_lock_confirm:"{name} wirklich abschlie\xDFen?",door_unlock_confirm:"{name} wirklich aufschlie\xDFen?",clock:"Uhr",clock_off:"Aus",clock_tl:"\u2196 Uhr",clock_tr:"\u2197 Uhr",clock_bl:"\u2199 Uhr",clock_br:"\u2198 Uhr",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",hh_moisture:"Pflanze (plant.*) oder Feuchtesensor",hh_moisture_min:"Durst unter (%)",furn_entity_moisture:"Bodenfeuchte- / Bew\xE4sserungssensor",furn_entity_irrigation:"Bew\xE4sserungsventil / -schalter",plant_water_now:"Jetzt gie\xDFen",plant_watering:"Gie\xDFt...",plant_mark_watered:"Als gegossen markieren",plant_thirsty:"Braucht Wasser",plant_healthy:"Ausreichend feucht",hh_remaining:"Restzeit (Sensor)",hh_door:"T\xFCr-Sensor",hh_fridge_door:"T\xFCr-Sensor",hh_appliance_hint:"L\xE4uft das Ger\xE4t, zeigt seine Markierung die Restzeit; danach \u201EFertig!\u201C, bis die T\xFCr aufgeht oder es wieder l\xE4uft.",hh_door_alarm:"Warnen nach (Minuten offen)",hh_service_entity:"Verbrauchsteil / Wartung (Sensor)",hh_service_min:"F\xE4llig ab (\u2264 Prozent oder Tage)",hh_service_hint:"Etwa Filter, Salz oder Klarsp\xFCler: ein Bin\xE4rsensor (an = f\xE4llig), eine Zahl (Prozent oder Tage \xFCbrig) oder ein Datum. Ist es f\xE4llig, leuchtet das Ger\xE4t gelb und steht in \u201EHeute im Haushalt\u201C.",hh_teaser_plant:"Mit Haushalt Pro zeigt die Pflanze, wann sie Wasser braucht.",hh_teaser_appliance:"Mit Haushalt Pro zeigt das Ger\xE4t seine Restzeit und \u201EFertig!\u201C, bis die T\xFCr aufgeht.",hh_teaser_fridge:"Mit Haushalt Pro warnt NeonPlan, wenn die K\xFChlschrankt\xFCr zu lange offen steht.",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_neon_sign:"Neon-Schild",sign_color:"Farbe der R\xF6hren",furn_wifi_ap:"WLAN-Access-Point",furn_water_heater:"Warmwasserspeicher",wifi_ap_std:"An der Decke",wifi_ap_wall:"An der Wand",water_heater_std:"Standspeicher",water_heater_wall:"Flachspeicher an der Wand",ap_clients:"{n} Ger\xE4te",ap_offline:"Offline",pin_standby:"Standby",furn_lamp_fan:"Deckenventilator mit Licht",furn_wall_switch:"Lichtschalter",furn_wall_socket:"Steckdose",furn_alarm_keypad:"Alarmanlage (Bedienteil)",furn_entity_alarm:"Alarmanlage (alarm_control_panel)",alarm_disarm:"Deaktivieren",alarm_state_disarmed:"Unscharf",alarm_state_armed_home:"Scharf (Zuhause)",alarm_state_armed_away:"Scharf (Abwesend)",alarm_state_armed_night:"Scharf (Nacht)",alarm_state_armed_vacation:"Scharf (Urlaub)",alarm_state_armed_custom_bypass:"Scharf (Bypass)",alarm_state_pending:"Ausl\xF6send...",alarm_state_arming:"Wird aktiviert...",alarm_state_triggered:"AUSGEL\xD6ST!",furn_group_switches:"Haustechnik",wv_cat_switches:"Schalter",furn_group_household:"Haushalt",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_post:"Post da",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",pro_name_frames:"Digitale Bilderrahmen",pro_feature_frames:"Digitale Bilderrahmen: Bilderrahmen an der Wand zeigen eine Diashow, den Kalender, eine Pinnwand, Listen oder ein Kamerabild \u2013 antippen \xF6ffnet es gro\xDF",curtain_side_both:"beiden Seiten",curtain_side_left:"links (von vorn gesehen)",curtain_side_right:"rechts (von vorn gesehen)",awning_pitch:"Neigung (\xB0)",awning_valance:"Volant (Stoffkante vorne)",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",furn_glow_color:"Feste Farbe in 3D",furn_glow_color_hint:"Die Lampe leuchtet im Plan immer in dieser Farbe, egal welche Farbe das Licht meldet \u2013 an/aus und Helligkeit kommen weiter vom Licht.",furn_only_color:"Nur leuchten, wenn das Licht diese Farbe zeigt",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",solar_pro_soon:"bald verf\xFCgbar",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",lock_plan:"\u{1F512} Grundriss",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",climate:"Raumklima",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show_always:"Immer zeigen",marker_show_active:"Nur wenn aktiv",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"Drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht um den angegebenen Winkel (\xB0) um die Mitte der R\xE4ume.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_meter_reading:"Z\xE4hlerstand (m\xB3 oder Liter)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit"},Of={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",zoom_style:"When zooming in",zoom_late_early:"early",zoom_scope_all:"All rooms",zoom_scope_room:"Only the room",zoom_scope_hint:"What turns into the style while zooming in: every room, or only the room you zoom into or tap \u2013 the rest of the house keeps the look set",zoom_late_late:"late",zoom_late_hint:"When the style sets in while zooming in: early (already on an opened floor) to late (only close up in a room)",zoom_style_off:"When zooming in: stays",zoom_style_hint:"From afar the house keeps the look set, zooming into a floor or a room blends it into this style \u2013 without reloading. Works when Neon, Blueprint or Day is chosen above.",holo_more:"more",holo_less:"less",draft_conflict:"The plan was saved on another device meanwhile \u2013 this newer plan is shown now. Your change from {time} was made on the older one and is not saved.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",plain_off:"With furniture",plain_on:"Floor plan only",plain_hint:"Floor plan only: walls, doors, windows and stairs without furniture \u2013 the devices stay.",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",floor_from_ha:"Floors from Home Assistant:",level:"Level {n}",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",show_menu:"Show",tool_menu:"Tool",view_menu:"View",fit:"Whole plan",room:"Room",rooms:"Rooms",room_id:"ID (card option room:)",area:"Area",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",feed_drain:"Bottom drain",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",delete:"Delete",settings:"Settings",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",roof_basics:"Roof shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",jiboia_pot:"Pot (table / sideboard)",jiboia_hanging:"Trailing (hanging vines)",jiboia_totem:"Moss pole (upright)",orchid_color:"Flower colour",orchid_white:"White",orchid_pink:"Pink / Magenta",orchid_yellow:"Yellow",orchid_lilac:"Lilac / Violet",bbq_masonry:"Masonry / Built-in shaft",bbq_hood:"Countertop + Steel & Glass Hood",bbq_brick:"Traditional Brick",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",cancel:"Cancel",confirm_switch:"Really switch {name}?",grid:"Grid (m)",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",area_m2:"{a} m\xB2",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",plan_main:"Home",plan_pick:"Choose floor plan",plan_all:"All floor plans",plan_new:"New floor plan",plan_manage:"Manage floor plans",plan_alerts_elsewhere:"{n} warning(s) in another floor plan",card_plan:"Floor plan",plan_lights_on:"Lights on",plan_open_now:"Windows and doors open",plan_open_n:"{n} open",plan_site:"Property",plan_alert:"{plan}: {text}",plan_alert_go:"Show",card_rooms:"Only these rooms",card_rooms_hint:"Tap rooms on the plan: the card then shows only them, with their furniture and devices \u2013 for the kids' tablet or a holiday flat, say. A single room opens with its devices beside it. Empty: the whole house.",card_rooms_leave:"Other rooms may be opened",card_rooms_leave_hint:"Unticked, the tablet stays in these rooms.",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt_short:"Tilt \xB0",camera_popup_open:"Look through the camera",state_recording:"Recording",state_streaming:"Streaming",room_cleaning:"Cleaning (robot vacuum)",panel_clean:"Vacuum",panel_everything_off:"Everything off ({n})",voice_clean_started:"The robot vacuum is on its way: {room}.",voice_clean_none:"{room} has no cleaning set (editor \u2192 room \u2192 Cleaning).",voice_off_done:"{room}: {n} devices off.",voice_off_nothing:"{room}: everything is off already.",voice_noroom:"Which room? Say e.g. \u201Cvacuum the kitchen\u201D, or set where the tablet hangs.",voice_noroom_open:"Tap into a room first, then \u201Cthere\u201D means it.",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",glass_size:"Size of the glass cards",glass_size_hint:"Energy, heat pump, car, devices and the other glass cards in the 3D view",view_settings_alerts:"Warnings",view_settings_control:"Controls",view_settings_more:"Every other setting is in the editor under \u2699 Settings.",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",bg_map_1:"Tap an outer corner of the house in the picture.",bg_map_2:"Now tap the next corner of the same outer wall in the picture.",bg_map_3:"Now tap the same first corner on the map's yellow outline.",bg_map_4:"And the second corner on the outline \u2013 the picture is turned, scaled and moved to fit.",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",media_play_head:"Play",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",voice:"Voice control",aliases:"Further names for the voice",voice_showing:"Showing {name}.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service neonplan3d.ask reaches every open NeonPlan view. When the service names a screen, only the view with that name reacts.',card_voice_area:'Room for "here"',card_voice_area_none:"None (the device's setting)",card_voice_area_hint:'When the tablet with this dashboard hangs in a room, sentences without a room name ("Lights on", "Turn off the lights here") apply to this area. Without a choice, the room set on the device itself counts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "NeonPlan, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",backdrop:"Background",backdrop_look:"The look's sky (default)",backdrop_gradient:"Gradient",backdrop_image:"Picture",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_shadow:"Sun arc and house shadow",tap_in_room:"Switch devices only in the opened room",tap_in_room_hint:"In the house and floor views a tap on a device opens its room instead of switching it \u2013 so a tap meant for the floor does not move a blind by accident. In the opened room nothing changes; a long press opens the menu everywhere.",right_click_back:"Right click goes one step back",right_click_back_hint:"A short right click in the 3D view closes the room or goes from the floor back to the house. Off: a right click works like a click.",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,sky:"Real sky",sky_hint:"A sky behind the house that follows the real sun: sunset colours, stars that move through the night and the moon in its real phase. With \u201CWeather outside\u201D clouds drift with the wind. Off with an own background and in the blueprint look; a still picture on the \u201CTablet\u201D level.",flyin:"Fly in from space",flyin_hint:"When the view opens, a neon globe turns to your home and dives in while the camera comes down onto the house. Once per page load; a tap skips it. Not in the editor and not on the \u201CTablet\u201D level.",sun_arc:"Sun arc around",sun_arc_house:"the house",sun_arc_plot:"the whole plot",sun_arc_hint:"Where the sun arc and the compass ring stand: around the house (default) or around everything drawn \u2013 rooms, outdoor areas, fences and free walls.",window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",gpu_safe_note:"In this browser the sun arc, the house shadow and the window glow at night are off: the graphics were lost right after the start. The next NeonPlan version tries again.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: winter and pets",gift_text:"The fun packs Winter & Christmas (fairy lights along the roof, snow, a Christmas tree, an Advent wreath and a New Year's Eve firework) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: winter and pets",gift_text_free:"Fairy lights along the roof, snow, a Christmas tree, an Advent wreath and a New Year's Eve firework \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_templates:"Card templates",card_templates_intro:"Set up a dashboard card here once, e.g. \u201CKitchen Fire tablet\u201D. On the tablet you only pick the template in the card dialog. When you change it here, every tablet with this template follows by itself.",card_templates_empty:"No template yet. Create the first one with \u201C+ New template\u201D.",card_templates_no_editor:"The card editor could not be loaded. Reload the page (Ctrl+F5).",card_template_new:"New template",card_template_new_name:"New template",card_template_copy_name:"{name} (copy)",card_template_delete_ask:"Delete the template \u201C{name}\u201D? Cards using it then carry on with their own settings.",card_template_reloaded:"Reload sent: the open screens reload within the next seconds.",card_template_reload_failed:"Reload failed. Does NeonPlan in Home Assistant run this version yet (restart after an update)?",card_template_reload_all:"Reload all screens",card_template_reload_hint:"Reloads every open NeonPlan view, e.g. after an update. In automations: the action \u201Cneonplan3d.reload_screens\u201D.",card_template_name:"Name",card_template_duplicate:"Duplicate",card_template_preview:"Preview",card_template_preview_off:"Preview off",card_template_preview_on:"Show preview",card_template_where:"Where does the tablet hang?",card_template_where_hint:"The room for \u201Chere\u201D: \u201CTurn on the lights here\u201D then applies to this area, even when the card always shows the ground floor.",card_template_reloading:"Reloading \u2026 (a few seconds)",screen_reloading:"Reloading \u2026",card_template_open:"Edit in the NeonPlan editor",card_template_make:"Create a template in the NeonPlan editor",card_template_screen:"Screen",card_template_screen_tablet:"Tablet 10\u2033 landscape (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 landscape (Fire 7)",card_template_screen_upright:"Tablet upright",card_template_screen_phone:"Phone",card_template_preview_look:"Only to look at: a tap in the preview switches nothing.",card_template_where_other:"Other areas",card_template_voice_off:"The microphone button is off in this template. Without it the tablet does not listen.",card_template_voice_on:"Turn on the microphone button",card_template_own:"This card still has old settings that no longer apply with the template: {list}.",card_template_own_clear:"Tidy up (keep only the template)",card_template_mode:"Changes:",card_template_live:"Straight to the tablets",card_template_manual:"Send with a button",card_template_pending:"Not sent yet: the tablets show the old state, the preview the new one.",card_template_publish:"Send to the tablets",card_template_discard:"Discard",card_template_published:"Sent: the tablets show the new state now.",card_template_preview_big:"Large",card_template_preview_small:"Small",card_template_use:"How to use it: add the NeonPlan card on the tablet and pick the template at the top, or in YAML:",card_template_copy:"Copy",card_template_copied:"Copied.",card_template_reload:"Reload screens with this template",card_template:"Template",card_template_none:"None \u2013 set it up here",card_template_hint:"Card templates are made in the NeonPlan editor under \u2699 Settings \u2192 Card templates. Then you only pick one here.",card_template_on:"This card follows its template. Change it in the NeonPlan editor under \u2699 Settings \u2192 Card templates; every tablet takes it over by itself.",card_template_missing:"The card template \u201C{name}\u201D is no longer in the plan. The card uses its own settings.",card_plain:"Floor plan only (no furniture)",room_bar:"Room bar",room_bar_hint:"A card per room at the bottom: temperature, open windows, what plays and a light switch. A tap flies into the room. The top then keeps only the floors; the eye leaves the bar in place.",room_bar_none:"No room bar",room_bar_rooms:"Room bar",room_bar_all:"+ favourites",room_bar_hide:"Fold the room bar away",room_bar_on:"On",room_bar_off:"Off",room_bar_light:"Light",room_bar_activate:"Activate",room_bar_lights:"{n} on",room_bar_lights_off:"Switch the room's lights off",room_bar_open:"open",room_bar_playing:"playing",card_room_bar:"Room bar at the bottom",card_room_bar_favorites:"Favourites in the room bar",card_room_bar_favorites_hint:"Scenes, scripts and switches from the favourites (Settings \u2192 Favourites) at the front of the bar.",show_if:"Only show while \u2026",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",ext_tab:"Extensions",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",fun_intro:"Free extras just for fun \u2013 for everyone with a customer account. With a connected key they wait among your packs above to install; switch them on and off here.",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor_auto:"Ground floor",print_dot:"New",print_dot_hint:"New for supporters: NeonPlan Print",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",manual:"Manual",manual_more:"Learn more",pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_shape_free:"Free",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",card_room:"Start room",card_room_none:"None (floor or house)",card_walk:"Allow the walk",card_walk_hint:"The button for the walk through the house at eye height",card_tt_range:"Time travel starts",card_tt_range_24h:"24 hours ago",card_tt_range_7d:"a week ago",card_tt_speed:"Replay speed",card_tt_speed_day:"1 day in 6 s",car_charging:"Charging (power, state or switch)",car_climate:"Climate / preheating",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:"This add-on needs a newer version of NeonPlan 3D. Please update first (Settings \u203A System \u203A Updates), restart Home Assistant, then install again.",license_error_needs_update:"This add-on needs a newer version of NeonPlan 3D. Please update first (Settings \u203A System \u203A Updates), restart Home Assistant, then install again.",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",furn_cable_to_grid:"Cable ends at the grid point",furn_cable_to_grid_hint:"Energy Pro: this inverter's cable runs to the grid point instead of the meter \u2013 for instance when the inverter and the grid connection are far from the house board.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_hinge:"Sidelight on the hinge side",sidelight_width:"Sidelight width (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_sliding_glass:"Sliding glass door",style_passage:"Opening (no door)",style_standard:"Standard",style_window_sliding:"Sliding window (glass)",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",preset_door_sliding:"Sliding glass door",preset_door_sliding_double:"Sliding glass door (4-pane)",preset_window_sliding:"Sliding window",preset_window_sliding_double:"Sliding window (4-pane)",sliding_leaf_side:"Sliding leaf side",flip_sliding_leaf:"Swap sliding leaf",apply_sliding_all_windows:"Set all windows on this floor to sliding",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",style_slide:"Sliding (one pane slides in front of the fixed one)",preset_terrace_slide:"Lift-and-slide door",preset_window_slide:"Sliding window",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",gate_kind_swing:"Garden gate (one leaf)",gate_kind_double:"Double gate (two leaves)",gate_kind_slide:"Sliding gate",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_pitch_upper:"Upper roof pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_overhang_sides:"Overhang per side",roof_overhang_sides_hint:"Set the roof overhang for each side yourself. Off: automatic \u2013 no overhang where the section meets a taller part of the house.",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",panel_more:"More devices of the area ({n})",panel_less:"Show less",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching between the house and the floors keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",surround_err_busy:"The map servers are busy right now. Please try again in a few minutes.",surround_err_empty:"The map has no houses or streets for this place yet.",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",opening_height:"Height (m)",blind_side:"Blind sits",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_main:"Handle sensor main leaf",entity_auto:"Automatic ({name})",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",rotation:"Rotation (\xB0)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",furn_stove:"Stove",furn_bbq_indoor:"Indoor BBQ grill (Gourmet)",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_plant_moreia:"Moreia (Dietes)",furn_plant_podocarpo:"Podocarpus (Podocarpo)",furn_plant_jiboia:"Golden pothos (Jiboia)",furn_plant_orquidea:"Orchid (Phalaenopsis)",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",wall_heights:"Wall heights",style_group_custom:"Own styles",style_new:"Make an own style from it",style_own_suffix:"(own)",style_delete:"Delete style",style_name:"Name",style_builtin_hint:"A ready style. To adjust it, \u201CMake an own style from it\u201D \u2013 then every setting is there, and your style is in every style list.",style_show_beside:"Show in \u201C3D beside\u201D",style_natural:"Real materials (wood, tiles, wall colours)",style_dark:"Dark style \u2013 lines glow",style_line:"Lines",style_surface_dark:"Surfaces dark",style_surface_light:"Surfaces light",style_hue:"Share of colour",style_lift:"Base brightness",style_contrast:"Contrast",style_signal:"Active devices in colour",style_sun:"Light by direction",style_ao:"Room corners",style_shadows:"Contact shadows under furniture",style_floors:"Floor structure",style_cut:"Dark cut edges",style_dim:"Evening mood",style_bg_top:"Background top",style_bg_bottom:"Background bottom",style_times:"Times of day (house plan)",wall_exterior_short:"exterior wall",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto (Day/Neon by the sun)",style:"Style",style_neon:"Neon",style_blueprint:"Blueprint",style_day:"Day",style_focus:"Night / Focus",style_synth:"Synthwave",style_cozy:"Homely",style_evening:"Homely evening",style_winter:"Winter evening",style_model:"Architect's model",style_pastel:"Pastel",style_warm:"Warm / Wood & paper",style_house:"House plan (day / evening / night)",style_group_neon:"Neon & classic",style_group_homely:"Homely \u2013 real materials",style_group_designed:"Designed",style_group_auto:"Automatic",style_set:"Style \u201C{name}\u201D is on.",style_reset:"Style back to the setting.",style_none:"\u2013 none \u2013",style_day_label:"By day",style_evening_label:"In the evening",style_night_label:"At night",style_switch:"Switch",style_switch_sun:"by the sun",style_switch_time:"by the clock",style_morning_at:"Day from",style_evening_at:"Evening from",style_night_at:"Night from",style_switch_hint:"By the sun: day while the sun is up, then evening until \u201CNight from\u201D. By the clock: the three times.",style_entity:"Style from a helper entity",style_entity_hint:"An input_select or input_text whose state names a style (e.g. \u201CHomely\u201D). While it names one, that style applies \u2013 automations can switch it.",theme_evening:"Style in the evening",theme_night:"Style at night",theme_schedule_hint:"Empty = the same style all day. It switches as set in the house plan (by the sun or the clock).",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",mount_height:"Height above the floor (m)",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_out:"Put out (helper)",bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",hh_service2:"{name}: {what} due",bin_none:"No pickup in sight",hh_title:"Today in the household",heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",furn_entity_moisture:"Moisture / irrigation sensor",furn_entity_irrigation:"Irrigation valve / switch",plant_water_now:"Water now",plant_watering:"Watering...",plant_mark_watered:"Mark as watered",plant_thirsty:"Needs water",plant_healthy:"Healthy",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',hh_teaser_plant:"With Household Pro the plant shows when it needs water.",hh_teaser_appliance:'With Household Pro the appliance shows its time left and "Done!" until the door opens.',hh_teaser_fridge:"With Household Pro NeonPlan warns when the fridge door stands open too long.",card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_neon_sign:"Neon sign",sign_color:"Colour of the tubes",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",furn_lamp_fan:"Ceiling fan with light",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_alarm_keypad:"Alarm keypad",furn_entity_alarm:"Alarm panel (alarm_control_panel)",alarm_disarm:"Disarm",alarm_state_disarmed:"Disarmed",alarm_state_armed_home:"Armed (Home)",alarm_state_armed_away:"Armed (Away)",alarm_state_armed_night:"Armed (Night)",alarm_state_armed_vacation:"Armed (Vacation)",alarm_state_armed_custom_bypass:"Armed (Bypass)",alarm_state_pending:"Pending...",alarm_state_arming:"Arming...",alarm_state_triggered:"TRIGGERED!",furn_group_switches:"Home technology",wv_cat_switches:"Switches",furn_group_household:"Household",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_door:"Sensor of the emptying door (optional)",mailbox_post:"Post",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',pro_name_frames:"Digital Picture Frames",pro_feature_frames:"Digital Picture Frames: frames on the wall show a slideshow, the calendar, a pin board, lists or a camera picture \u2013 a tap opens it large",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",awning_pitch:"Fall (\xB0)",awning_valance:"Valance (fabric edge at the front)",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",furn_glow_color:"Fixed colour in 3D",furn_glow_color_hint:"The lamp always glows in this colour in the plan, whatever colour the light reports \u2013 on/off and brightness still come from the light.",furn_only_color:"Glow only while the light shows this colour",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",solar_pro_soon:"coming soon",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",lock_plan:"\u{1F512} Floor plan",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",climate:"Room climate",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show_always:"Always show",marker_show_active:"Only while active",marker_show_no_power:"Without watts",marker_show_never:"Hide",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns by the given angle (\xB0) about the middle of its rooms.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence"},Lf=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","sk","zh","pt","tr"],ro=new Map,Jr=new Map;function es(o){let e=(o??navigator.language).toLowerCase(),n=e.startsWith("no")?"nb":e.slice(0,2);return Lf.includes(n)?n:null}function vn(o){let e=es(o);return!e||ro.has(e)}function Qo(o){let e=es(o);if(!e||ro.has(e))return Promise.resolve();let n=Jr.get(e);if(!n){let t=new URL(`./lang/${e}.json?v=917da1324975`,import.meta.url).href;n=fetch(t).then(i=>i.ok?i.json():{}).then(i=>{ro.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{ro.set(e,{})}).finally(()=>Jr.delete(e)),Jr.set(e,n)}return n}var Xo={de:{},en:{}};function I(o,e,n={}){let t=o?.language??navigator.language,i=t.startsWith("de")?null:es(t),r=Df,s=Of,a=i?ro.get(i):void 0,c=(t.startsWith("de")?r[e]??Xo.de[e]:a?a[e]:s[e]??Xo.en[e])??s[e]??Xo.en[e]??r[e]??Xo.de[e]??e;for(let[d,u]of Object.entries(n))c=c.replace(`{${d}}`,String(u));return c}function ie(o,e,n=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:n})}var Wf={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function rt(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}function ts(o,e){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;if(n.entity_id.startsWith("binary_sensor."))return n.state==="on"?.6:0;let t=Number(n.state);if(!Number.isFinite(t))return null;let r=String(n.attributes.unit_of_measurement??"").startsWith("in")?t*25.4:t;return r<=.1?0:Math.min(1,.3+r/10)}function Bc(o,e,n){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let i=Wf[t.state];if(!i)return null;let r=t.attributes,s=i.cloud??0;typeof r.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,r.cloud_coverage/100)));let a=i.wind??0;if(typeof r.wind_speed=="number"){let c=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;a=Math.max(a,Math.min(1,c/60))}let l=ts(o,n);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:t.entity_id,condition:t.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function Vc(o,e){let n=new Set(e??Gl);return{...o,rain:n.has("rain")?o.rain:0,snow:n.has("snow")?o.snow:0,fog:n.has("fog")?o.fog:0,cloud:n.has("clouds")?o.cloud:0,lightning:n.has("lightning")&&o.lightning,sky:n.has("sky")}}var Nf=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household","frames"],Bf=["fun_pets","fun_halloween","fun_winter"],Vf=["pool","room_bar"];function ns(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Kc(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function st(o){return!Vf.includes(o)||o!=="diagnostics"&&o!=="locate"&&o!=="room_bar"&&K(o)||ns()}var Kf=["fridge_smart"];function Uf(o){return Nf.includes(o)||Kf.includes(o)||Bf.includes(o)}function Gf(o=mt()){let e=new Set;for(let n of o)for(let t of n.features??[])Uf(t)&&e.add(t);return e}function K(o,e){return Gf(e).has(o)}var jf=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),qf=new Set(["power","plug","connectivity","running"]);function Jo(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return qf.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let n=Number(o.state);if(o.state!==""&&Number.isFinite(n))return o.attributes.unit_of_measurement==="V"&&n<100;let t=String(o.state).toLowerCase().trim();return jf.has(t)||t.startsWith("ob ")}function rs(o){let e=ye(o);if(!e)return!1;if(Zf.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let n=e.parts.filter(t=>t.color==="plant").length;return n>0&&n+e.parts.filter(t=>t.color==="pot").length>=e.parts.length/2}var Zf=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var $e=["#3a3f47","#3a3f47"],Bt=["#23262b","#23262b"],Ne=["#5a3b25","#5a3b25"],_e=["#1f4fa8","#1f4fa8"],wt=["#e3b616","#e3b616"],ne=["#2f7d3b","#2f7d3b"],Uc={default:{rest:$e,bio:Ne,paper:_e,plastic:wt,glass:ne,garden:ne,recycling:wt,other:$e},DE:{rest:Bt,bio:Ne,paper:_e,plastic:wt,glass:ne,garden:ne,recycling:wt},AT:{rest:$e,bio:Ne,paper:[$e[0],"#c0262d"],plastic:wt,glass:ne,garden:ne},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ne,paper:_e,plastic:$e,glass:ne,garden:ne},NL:{rest:$e,bio:ne,paper:_e,plastic:["#3a3f47","#e57a1f"],glass:ne,garden:ne},BE:{rest:$e,bio:ne,paper:_e,plastic:_e,glass:ne,garden:ne},GB:{rest:Bt,bio:["#3a3f47","#5a3b25"],paper:_e,plastic:_e,glass:Bt,garden:Ne,recycling:_e},US:{rest:Bt,bio:ne,paper:_e,plastic:_e,glass:_e,garden:ne,recycling:_e},CA:{rest:Bt,bio:ne,paper:_e,plastic:_e,glass:_e,garden:ne,recycling:_e},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:$e,bio:Ne,paper:[$e[0],"#e3b616"],plastic:[$e[0],"#e3b616"],recycling:[$e[0],"#e3b616"],glass:ne,garden:ne},IT:{rest:$e,bio:Ne,paper:_e,plastic:wt,glass:ne,garden:ne},ES:{rest:$e,bio:Ne,paper:_e,plastic:wt,glass:ne,garden:ne},PT:{rest:$e,bio:Ne,paper:_e,plastic:wt,glass:ne,garden:ne},DK:{rest:Bt,bio:ne,paper:_e,plastic:$e,glass:ne,garden:ne},SE:{rest:Bt,bio:Ne,paper:_e,plastic:$e,glass:ne,garden:ne},NO:{rest:$e,bio:Ne,paper:_e,plastic:$e,glass:ne,garden:ne},FI:{rest:$e,bio:Ne,paper:_e,plastic:$e,glass:ne,garden:ne}},Zc="DE";function Yc(o){Zc=o}function Xc(o){let e=o?.config?.country;if(e)return e.toUpperCase();let n=(o?.language??"").split("-")[1];return n?n.toUpperCase():"DE"}function Yf(o,e){return Uc[e]?.[o]??Uc.default[o]??$e}function Qc(o,e=Zc){let n=Yf(o.bin_kind??"rest",e),t=o.bin_color||n[0];return[t,o.bin_lid||(o.bin_color?t:n[1])]}var Xf={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function is(o,e,n){let t=` ${o.toLowerCase()} `;return n&&n.trim()?n.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&t.includes(i.trim())):e==="other"?!1:Xf[e].some(i=>t.includes(i))}function ss(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),t=n?new Date(Number(n[1]),Number(n[2])-1,Number(n[3])):new Date(e);return Number.isNaN(t.getTime())?null:new Date(t.getFullYear(),t.getMonth(),t.getDate())}function Qf(o){return o.map(e=>({day:ss(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,n)=>e.day.getTime()-n.day.getTime())}function Jc(o){let e=new Set;for(let n of o.flatMap(t=>t.furniture))n.type==="waste_bin"&&typeof n.bin_source=="string"&&n.bin_source.startsWith("calendar.")&&e.add(n.bin_source);return[...e]}async function ed(o,e,n=new Date,t=42){let i=new Map,r=o.callApi;if(!r)return i;let s=new Date(n.getFullYear(),n.getMonth(),n.getDate()),a=ni(s,t);return await Promise.all(e.map(async l=>{try{let c=await r.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,Qf(Array.isArray(c)?c:[]))}catch{}})),i}function Gc(o){let e=typeof o=="string"?o:o?.dateTime??o?.date;if(!e)return null;let n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),t=n?new Date(Number(n[1]),Number(n[2])-1,Number(n[3])):new Date(e);return Number.isNaN(t.getTime())?null:{at:t,allDay:!!n}}function Jf(o,e){return o.map(n=>{let t=Gc(n.start),i=Gc(n.end);return{summary:String(n.summary??"").trim(),calendar:e,allDay:!!t?.allDay,start:t?.at??null,end:i?.at??null}}).filter(n=>n.summary)}async function td(o,e,n=new Date){let t=o.callApi;if(!t||!e.length)return[];let i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=ni(i,1);return(await Promise.all(e.map(async a=>{try{let l=await t.call(o,"GET",`calendars/${a}?start=${encodeURIComponent(i.toISOString())}&end=${encodeURIComponent(r.toISOString())}`);return Jf(Array.isArray(l)?l:[],a)}catch{return[]}}))).flat()}function nd(o,e=new Date,n,t=6){let i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=ni(i,1),s=a=>a.toLocaleTimeString(n||void 0,{hour:"2-digit",minute:"2-digit"});return o.filter(a=>a.allDay?(!a.start||a.start<r)&&(!a.end||a.end>i):a.end&&a.end<=e?!1:!a.start||a.start<r).sort((a,l)=>Number(l.allDay)-Number(a.allDay)||(a.start?.getTime()??0)-(l.start?.getTime()??0)).filter((a,l,c)=>c.findIndex(d=>d.summary===a.summary&&d.start?.getTime()===a.start?.getTime())===l).slice(0,t).map(a=>{let l=!a.allDay&&a.start&&a.start>=i,c=!a.allDay&&!!a.start&&a.start.getTime()-e.getTime()<=36e5&&(!a.end||a.end>e);return{icon:"calendar-clock",text:l?`${s(a.start)} ${a.summary}`:a.summary,entity:a.calendar,...c?{hot:!0}:{}}})}var wn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),ni=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),ei=(o,e)=>Math.round((wn(e).getTime()-wn(o).getTime())/864e5);function os(o,e,n={}){let t=n.from??14,i=n.until??12,r=e.getHours()+e.getMinutes()/60;return o===1&&r>=t||o===0&&r<i}function od(o,e,n,t=new Date,i=3){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return[];if(r.startsWith("calendar.")){let a=wn(t);return(n.get(r)??[]).filter(l=>l.day>=a&&is(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,i)}let s=as(o,e,n,t);return s?[{day:s.day,summary:s.summary}]:[]}function as(o,e,n,t=new Date,i={}){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return null;let s=wn(t);if(r.startsWith("calendar.")){let d=(n.get(r)??[]).find(p=>p.day>=s&&is(p.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let u=ei(s,d.day);if(u===0&&t.getHours()+t.getMinutes()/60>=(i.until??12)){let p=(n.get(r)??[]).find(h=>h.day>s&&is(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:ei(s,p.day),day:p.day,summary:p.summary,glow:os(ei(s,p.day),t,i)}}return{days:u,day:d.day,summary:d.summary,glow:os(u,t,i)}}let a=e.states[r];if(!a)return null;let l=nm(a,t);if(l===null||l<0)return null;let c=ni(s,l);return{days:l,day:c,summary:String(a.attributes.friendly_name??""),glow:os(l,t,i)}}function em(o,e){let n=typeof o=="string"&&o!=="none"?o:null,t=n?e.states[n]:void 0;return!!t&&ad.has(String(t.state).toLowerCase())}function ls(o,e){return em(o.bin_out,e)}function id(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function rd(o,e=.3){let n=o.filter(a=>!a.icon),t=n.map((a,l)=>l),i=a=>t[a]===a?a:t[a]=i(t[a]);for(let a=0;a<n.length;a++)for(let l=a+1;l<n.length;l++){let c=n[a],d=n[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+e&&(t[i(l)]=i(a))}let r=new Map;n.forEach((a,l)=>r.set(i(l),[...r.get(i(l))??[],a]));let s=[];for(let a of r.values())a.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,c)=>l+c.x,0)/a.length,z:a.reduce((l,c)=>l+c.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function sd(o,e={}){let n=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,t=o.length?Math.min(...o.map(i=>i.days)):0;return new Set(o.filter(i=>(n===null||i.days<=n)&&(!e.nextOnly||i.days===t)).map(i=>i.id))}function tm(o,e=new Date){let n=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),t=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o)??/(?:^|[^\d])(\d{1,2})(-)(\d{1,2})-(\d{4})(?![\d])/.exec(o),i,r,s;if(n)[i,r,s]=[Number(n[1]),Number(n[2]),Number(n[3])];else if(t){let l=Number(t[1]),c=Number(t[3]);t[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),s=l,r=c;let d=t[4];i=d?d.length===2?2e3+Number(d):Number(d):e.getFullYear(),!d&&new Date(i,r-1,s)<wn(e)&&(i+=1)}else return null;if(r<1||r>12||s<1||s>31)return null;let a=new Date(i,r-1,s);return a.getMonth()===r-1?a:null}function nm(o,e=new Date){let n=o.attributes;if(typeof n.daysTo=="number")return n.daysTo;for(let l of["Days_until","days_until"]){let c=n[l];if(typeof c=="number"&&Number.isFinite(c))return Math.round(c);if(typeof c=="string"&&/^-?\d+$/.test(c.trim()))return Number(c.trim())}let t=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(t))return Math.round(Number(t));let i=/^\d{4}-\d{2}-\d{2}T/.test(t)?ss(t):tm(t,e);if(i)return ei(e,i);let r=t.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(r))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(r))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(r)??/\bin\s+(\d+)/.exec(r);if(s)return Number(s[1]);let a=r.match(/\d+/g);return a?Number(a[a.length-1]):null}var ad=new Set(["on","open","true","detected","home"]);function jc(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function ld(o,e,n=Date.now()){let t=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!t)return!1;let i=e.states[t];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let r=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!r){let l=Number(i.state);return ad.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=jc(i),a=jc(e.states[r]);return s===null||n-s>7*864e5?!1:a===null||s>a+1e3}function cd(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:sm(o)}function dd(o){if(o==="washer"||o==="dryer"||o==="dishwasher")return o;let e=ye(o)?.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var cs=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null},om=new Set(["problem","low","dry","thirsty","needs_water","precisa_agua","regar","seco","seca"]);function oi(o,e){let n=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,t=n?e.states[n]:void 0;if(!n||!t||t.state==="unavailable"||t.state==="unknown")return!1;let i=String(t.state).toLowerCase(),r=t.attributes??{};if(n.startsWith("plant.")){let l=String(r.problem??"").toLowerCase();return String(r.moisture_status??"").toLowerCase()==="low"||i==="problem"&&l.includes("moisture")&&!l.includes("high")}if(n.startsWith("binary_sensor.")||r.device_class==="problem"){if(i==="problem")return!0;if(i==="on"){if(String(r.device_class??"").toLowerCase()==="problem")return!0;let c=`${n} ${String(r.friendly_name??"")}`.toLowerCase();return/problem|problema|dry|seco|seca|thirsty|sede|regar|rega|water|moisture/.test(c),!0}return!1}if(om.has(i))return!0;if(r.problem){let l=String(r.problem).toLowerCase();if(/moisture|water|agua|água|dry|seco|seca|low|baixa|sede|regar|rega/.test(l))return!0}if(r.moisture_status&&String(r.moisture_status).toLowerCase()==="low")return!0;let s=o.moisture_min??20,a=cs(t);return a!==null?a<s:typeof r.moisture=="number"?r.moisture<s:!!(n.startsWith("input_boolean.")&&i==="on")}function ii(o,e){let n=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,t=n?e.states[n]:void 0;if(!n||!t)return null;let i=oi(o,e),r=cs(t);r===null&&typeof t.attributes?.moisture=="number"&&(r=t.attributes.moisture);let s=null;typeof t.attributes?.battery=="number"?s=t.attributes.battery:typeof t.attributes?.battery_level=="number"&&(s=t.attributes.battery_level);let a=typeof o.irrigation=="string"&&o.irrigation!=="none"&&e.states[o.irrigation]?o.irrigation:null,l=r!==null?`${Math.round(r)}%`:i?I(e,"plant_thirsty"):I(e,"plant_healthy");return{thirsty:i,pct:r,statusText:l,entity:n,irrigationEntity:a,battery:s}}function ds(o){return o.startsWith("button.")||o.startsWith("input_button.")}function ud(o,e){let n=e.slice(0,e.indexOf("."));return ds(e)?o.callService(n,"press",{entity_id:e}):n==="script"?o.callService("script","turn_on",{entity_id:e}):o.callService(n,"toggle",{entity_id:e})}function us(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let n=String(o.state).trim(),t=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(n)){let s=Number(n),a=t==="s"?s/60:t==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(n);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let r=Date.parse(n);return Number.isFinite(r)&&/\d{4}-\d{2}-\d{2}T/.test(n)?Math.max(0,Math.round((r-e)/6e4)):null}var im=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function ps(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return im.has(e)}var rm=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function hs(o,e,n){let t=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(t!==null&&rm.has(t))return!0;let i=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),r=!!o&&!i&&t!==null&&(t==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(t));return e!==null&&e<=n&&!r}function pd(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function qc(o,e,n,t){let i=typeof o=="string"&&o!=="none"?o:null,r=i?n.states[i]:void 0;if(!i||!r||r.state==="unavailable"||r.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return r.state==="on";let s=cs(r);if(s!==null)return s<=(e??10);let a=ss(r.state);return!!a&&a.getTime()<=wn(t).getTime()}function hd(o,e,n=new Date){let t=[];return qc(o.service,o.service_min,e,n)&&t.push(o.service),o.service2!==o.service&&qc(o.service2,o.service2_min,e,n)&&t.push(o.service2),t}var yt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),fd=o=>!!o&&(o.state==="on"||o.state==="open");function ri(o,e,n=Date.now()){let t=(o.door_alarm??2)*6e4;for(let i of yt(o)){let r=e.states[i];if(fd(r)&&r?.last_changed&&n-Date.parse(r.last_changed)>=t)return i}return null}function md(o,e,n=Date.now()){let t=null;for(let i of o)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let r of yt(i)){let s=e.states[r];if(!fd(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-n;a>0&&(t===null||a<t)&&(t=a)}return t}var ti=class{running=new Map;ended=new Map;update(e,n,t,i=Date.now()){let r=this.running.get(e);if(this.running.set(e,n),n)return this.ended.delete(e),!1;r===!0&&this.ended.set(e,i);let s=this.ended.get(e);return s===void 0?!1:i-s>12*36e5||t(s)?(this.ended.delete(e),!1):!0}};function sm(o){return[o.moisture??null,o.irrigation??null,o.remaining??null,o.service??null,o.service2??null]}var am=10*6e4,lm=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),gd={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function so(o,e,n){let t=[];for(let d of e.floors)for(let u of d.rooms){let p=ke(o,u.area_id).filter(h=>h.startsWith("binary_sensor.")&&!!gd[String(o.states[h]?.attributes.device_class)]);p.length&&t.push({floorId:d.id,roomId:u.id,sensors:p})}let i=Object.keys(o.states),r=e.settings.rain_warning===!1?null:rt(o,n??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=K("household")?e.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&yt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(p=>p.points.length>=3&&V([u.x,u.z],p.points))?.id??null,furnitureId:u.id,ids:yt(u)}))):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,c=l&&o.states[l]?l:null;return{rooms:t,alarms:i.filter(d=>d.startsWith("alarm_control_panel.")),weather:r,outage:s,rain:c,fridges:a}}function fs(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(e=>e.ids)]}function si(o,e,n,t){let i=[];for(let a of n.rooms)for(let l of a.sensors){let c=o.states[l];c?.state==="on"&&i.push({kind:gd[String(c.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let r=n.rain?ts(o,n.rain):null;if(r!==null?r>0:!!n.weather&&lm.has(o.states[n.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=t.get(l.id);if(!c)continue;let d=it(o,c,"window");d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5||i.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:a.id})}if(n.outage&&Jo(o.states[n.outage])&&i.push({kind:"power_outage",entity:n.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let c of e.floors)for(let d of c.openings){let u=t.get(d.id);if(u)for(let p of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!p||l.has(p))continue;let h=o.states[p];if(!h||h.state!=="unavailable"&&h.state!=="unknown")continue;let _=Date.parse(h.last_changed??"");Number.isFinite(_)&&a-_<am||(l.add(p),i.push({kind:"contact_unavailable",entity:p,roomId:d.room_id,floorId:c.id}))}}}for(let a of n.fridges??[]){let l=e.floors.find(d=>d.id===a.floorId)?.furniture.find(d=>d.id===a.furnitureId),c=l?ri(l,o):null;c&&i.push({kind:"fridge_door",entity:c,roomId:a.roomId,floorId:a.floorId})}for(let a of n.alarms){let l=o.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return i}function _d(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Vt(o,e,n){let t=n.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===n.roomId):null;if(n.text!==void 0)return t?`${t.name} \xB7 ${n.text}`:n.text;let i=o?G(o,n.entity):n.entity,r=I(o,`alert_${n.kind}`,{name:i});return t?e.settings.alert_names===!1?`${t.name} \xB7 ${I(o,`alert_short_${n.kind}`)}`:`${t.name} \xB7 ${r}`:r}function cm(o,e,n){let t=o.q[0]-o.p[0],i=o.q[1]-o.p[1],r=t*t+i*i,s=r>0?Math.min(1,Math.max(0,((e-o.p[0])*t+(n-o.p[1])*i)/r)):0;return o.h0+(o.h1-o.h0)*s}var Re=(o,e)=>[o[0]-e[0],o[1]-e[1]],xt=(o,e)=>[o[0]+e[0],o[1]+e[1]],at=(o,e)=>[o[0]*e,o[1]*e],gs=(o,e)=>o[0]*e[0]+o[1]*e[1],yn=(o,e)=>o[0]*e[1]-o[1]*e[0],ao=o=>Math.hypot(o[0],o[1]),kt=o=>{let e=ao(o)||1;return[o[0]/e,o[1]/e]},bd=o=>[-o[1],o[0]],vd=o=>[o[1],-o[0]];function $t(o,e,n=[]){let t=e.eps??.005,i=[],r=n.filter($=>Math.hypot($.b[0]-$.a[0],$.b[1]-$.a[1])>.05),s=[],a=$=>{for(let E=0;E<s.length;E++)if(Math.abs(s[E][0]-$[0])<=t&&Math.abs(s[E][1]-$[1])<=t)return E;return s.push([$[0],$[1]]),s.length-1},l=[];for(let $ of o){let E=$.points;if(E.length<3||Math.abs(De(E))<1e-6)continue;let H=De(E)>0,D=E.map(a);for(let F=0;F<E.length;F++){let j=D[F],q=D[(F+1)%E.length];j!==q&&l.push(H?{u:j,v:q,room:$.id,edge:F,forward:!0}:{u:q,v:j,room:$.id,edge:F,forward:!1})}}let c=r.map($=>[a($.a),a($.b)]),d=new Set;for(let $ of o){let E=$.points;E.length<3||($.wall_splits??[]).forEach((H,D)=>{if(!H||D>=E.length)return;let F=E[D],j=Re(E[(D+1)%E.length],F),q=ao(j);for(let B of H)B>t&&B<q-t&&d.add(a(xt(F,at(j,B/q))))})}let u=[];for(let $ of l){let E=s[$.u],H=s[$.v],D=Re(H,E),F=ao(D),j=at(D,1/F),q=[];for(let O=0;O<s.length;O++){if(O===$.u||O===$.v)continue;let Q=Re(s[O],E),L=gs(Q,j);L<=t||L>=F-t||Math.abs(yn(j,Q))<=t&&q.push({t:L,id:O})}q.sort((O,Q)=>O.t-Q.t);let B=[{t:0,id:$.u},...q,{t:F,id:$.v}];for(let O=0;O+1<B.length;O++){let Q=B[O],L=B[O+1],se=$.forward?Q.t:F-L.t,te=$.forward?L.t:F-Q.t;u.push({u:Q.id,v:L.id,room:$.room,edge:$.edge,t0:se,t1:te})}}let p=new Map;for(let $ of u){let E=$.u<$.v?`${$.u}-${$.v}`:`${$.v}-${$.u}`,H=p.get(E);H||p.set(E,H=[]),H.push($)}let h=$=>({room_id:$.room,edge:$.edge,t0:$.t0,t1:$.t1}),_=new Map;for(let $ of u){let E=`${$.room}:${$.edge}`;_.set(E,[..._.get(E)??[],$.t0].sort((H,D)=>H-D))}let b=$=>{let E=o.find(D=>D.id===$.room)?.wall_heights?.[$.edge];if(!Array.isArray(E))return E;let H=_.get(`${$.room}:${$.edge}`)??[];return E[H.indexOf($.t0)]??null},f=$=>{let E=$.map(b).filter(D=>typeof D=="number"&&D>0);if(E.length)return Math.min(...E);let H=$.map(D=>o.find(F=>F.id===D.room)?.ceiling_height);return H.every(D=>typeof D=="number"&&D>0)?Math.max(...H):void 0},w=$=>{let E=$.map(H=>o.find(D=>D.id===H.room)?.wall_thickness?.[H.edge]).filter(H=>typeof H=="number"&&H>0);return E.length?Math.max(...E):void 0},k=$=>{for(let E of $){let H=o.find(q=>q.id===E.room),D=H?.wall_slopes?.[E.edge];if(!H||!D)continue;let F=H.points[E.edge],j=H.points[(E.edge+1)%H.points.length];return{p:[F[0],F[1]],q:[j[0],j[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},x=$=>$.some(E=>b(E)===0),v=$=>{let E=k($);return E?{height:Math.max(E.h0,E.h1),slope:E}:{height:f($)}},m=[],M=[],P=[];for(let $ of p.values()){let E=$[0],H=$.find(D=>D!==E&&D.u===E.v&&D.v===E.u&&D.room!==E.room);for(let D of $)D!==E&&D!==H&&D.room!==E.room&&i.push(`overlap:${E.room}:${D.room}`);if(x(H?[E,H]:[E])){H&&m.push([E.room,H.room]),M.push(H?[h(E),h(H)]:[h(E)]);continue}if(H){let D=w([E,H])??e.interior;P.push({a:E.u,b:E.v,left:D/2,right:D/2,exterior:!1,roomLeft:E.room,roomRight:H.room,sources:[h(E),h(H)],...v([E,H])})}else P.push({a:E.u,b:E.v,left:0,right:w([E])??e.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[h(E)],...v([E])})}let z=$=>kt(Re(s[$.b],s[$.a]));for(let $ of P){if($.exterior||$.free)continue;let E=new Set;for(let D of[$.a,$.b])for(let F of P)!F.exterior||F.free||F.a!==D&&F.b!==D||Math.abs(yn(z($),z(F)))>1e-6||(F.roomLeft===$.roomLeft?E.add("left"):F.roomLeft===$.roomRight&&E.add("right"));if(E.size!==1)continue;let H=$.left+$.right;E.has("left")?($.left=0,$.right=H):($.left=H,$.right=0)}r.forEach(($,E)=>{let[H,D]=c[E];if(H===D)return;let F=[($.a[0]+$.b[0])/2,($.a[1]+$.b[1])/2],j=o.find(L=>L.points.length>=3&&V(F,L.points))?.id??null,q=($.thickness??e.interior)/2,B=typeof $.height=="number"&&$.height>0?$.height:void 0,O=$.slope,Q=O?{p:[$.a[0],$.a[1]],q:[$.b[0],$.b[1]],h0:Math.max(.05,O[0]),h1:Math.max(.05,O[1])}:void 0;P.push({free:$.id,a:H,b:D,left:q,right:q,exterior:!1,roomLeft:j,roomRight:j,sources:[],...Q?{height:Math.max(Q.h0,Q.h1),slope:Q}:{height:B}})}),P=um(P,s,d);let R=hm(P,s);return{walls:P.map(($,E)=>{let H=s[$.a],D=s[$.b],F=R.get(`${E}:a`),j=R.get(`${E}:b`),q=fm([F.right,j.left,D,j.right,F.left,H],1e-6);return{id:dm(H,D),a:[H[0],H[1]],b:[D[0],D[1]],left:$.left,right:$.right,exterior:$.exterior,roomLeft:$.roomLeft,roomRight:$.roomRight,sources:$.sources,footprint:q,...$.free?{free:$.free}:{},...$.height!==void 0?{height:$.height}:{},...$.slope?{slope:$.slope}:{}}}),warnings:[...new Set(i)],open:m,noWalls:M}}function dm(o,e){let n=r=>Math.round(r*100),[t,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${n(t[0])}_${n(t[1])}_${n(i[0])}_${n(i[1])}`}function ms(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function um(o,e,n=new Set){let t=o.slice(),i=!0;for(;i;){i=!1;let r=new Map;t.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[s,a]of r){if(a.length!==2||n.has(s))continue;let l=t[a[0]],c=t[a[1]],d=l.b!==s&&c.a!==s;if(l.b!==s&&(l=ms(l)),c.a!==s&&(c=ms(c)),l.a===c.b)continue;let u=kt(Re(e[l.b],e[l.a])),p=kt(Re(e[c.b],e[c.a]));if(Math.abs(yn(u,p))>1e-6||gs(u,p)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:pm(l.sources,c.sources)},_=d?ms(h):h,b=t.filter((f,w)=>w!==a[0]&&w!==a[1]);b.push(_),t.length=0,t.push(...b),i=!0;break}}return t}function pm(o,e){let n=o.map(t=>({...t}));for(let t of e){let i=n.find(r=>r.room_id===t.room_id&&r.edge===t.edge&&(Math.abs(r.t1-t.t0)<1e-6||Math.abs(t.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,t.t0),i.t1=Math.max(i.t1,t.t1)):n.push({...t})}return n}function hm(o,e){let n=new Map;o.forEach((i,r)=>{let s=kt(Re(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:at(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=n.get(l);d||n.set(l,d=[]),d.push(c)}});let t=new Map;for(let[i,r]of n){let s=e[i];r.sort((c,d)=>c.angle-d.angle);let a=c=>({left:xt(s,at(bd(c.d),c.left)),right:xt(s,at(vd(c.d),c.right))});for(let c of r)t.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=xt(s,at(bd(d.d),d.left)),h=xt(s,at(vd(u.d),u.right)),_=yn(d.d,u.d);if(Math.abs(_)<1e-4)continue;let b=yn(Re(h,p),u.d)/_,f=xt(p,at(d.d,b));ao(Re(f,s))>l||(t.get(d.key).left=f,t.get(u.key).right=f)}}return t}function fm(o,e){let n=o.filter((i,r)=>ao(Re(i,o[(r+1)%o.length]))>e),t=!0;for(;t&&n.length>3;){t=!1;for(let i=0;i<n.length;i++){let r=n[(i+n.length-1)%n.length],s=n[i],a=n[(i+1)%n.length],l=Re(s,r),c=Re(a,s);if(Math.abs(yn(kt(l),kt(c)))<1e-7&&gs(l,c)>0){n=n.filter((d,u)=>u!==i),t=!0;break}}}return n}function ai(o,e,n){let t=o.points[e],i=o.points[(e+1)%o.points.length],r=kt(Re(i,t));return xt(t,at(r,n))}function wd(o,e,n){if(o.wall){let i=n.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=kt(Re(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,xt(i.a,[-r[1],r[0]])]},edge:0}}let t=e.find(i=>i.id===o.room_id);return t&&o.edge<t.points.length?{room:t,edge:o.edge}:null}function yd(o,e,n,t){let i=e.rotation*Math.PI/180,r=[-Math.sin(i),Math.cos(i)],s=Math.max(.005,e.d),a=null;for(let c of o){let d=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(d<.05)continue;let u=[(c.b[0]-c.a[0])/d,(c.b[1]-c.a[1])/d],p=(e.x-c.a[0])*u[0]+(e.z-c.a[1])*u[1];if(p<-.02||p>d+.02)continue;let h=[-u[1],u[0]],_=(e.x-c.a[0])*h[0]+(e.z-c.a[1])*h[1],b=r[0]*h[0]+r[1]*h[1]>=0?1:-1;if(Math.abs(r[0]*h[0]+r[1]*h[1])<.5)continue;let f=b>0?c.left:-c.right,w=_>-c.right-1e-4&&_<c.left+1e-4,k=Math.abs(_-(f+b*(s/2)));if(!w&&k>.03||a&&k>=a.off)continue;let x=c.a[0]+u[0]*p,v=c.a[1]+u[1]*p,m=w?f+b*(s/2):_,M=c.slope?cm(c.slope,e.x,e.z):Math.min(n,c.height??n);a={x:x+h[0]*m,z:v+h[1]*m,top:M,off:k}}if(!a)return{x:e.x,z:e.z,y:t};let l=e.mount_y==null?Math.max(.02,Math.min(t,a.top-.1,a.top-e.h-.02)):t;return{x:a.x,z:a.z,y:l}}var lt=Math.PI/180;function xn(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let n=e*lt;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(n),s:Math.sin(n)}}function Be(o,e,n=!1){if(!o)return e;let t=e[0]-o.p[0],i=e[1]-o.p[1],r=n?-o.s:o.s;return[o.p[0]+t*o.c-i*r,o.p[1]+t*r+i*o.c]}function ct(o){let e=Math.min(o.x0,o.x1),n=Math.max(o.x0,o.x1),t=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1),r=xn(o),s=o.axis==="x"?(l,c)=>[l,o.flip?i-c:t+c]:(l,c)=>[o.flip?n-c:e+c,l],a=r?(l,c)=>Be(r,s(l,c)):s;return o.axis==="x"?{u0:e,u1:n,w:i-t,at:a}:{u0:t,u1:i,w:n-e,at:a}}function mm(o,e,n,t=1e-6){let[i,r]=Td(o,e,n),s=ct({...o,rotation:0});return i>=s.u0-t&&i<=s.u1+t&&r>=-t&&r<=s.w+t}function kn(o){let e=ct(o).w,n=o.eave_a,t=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*lt),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*lt);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:n,y:()=>n};if(o.shape==="pent")return{vr:e,rh:n+e*i,y:l=>n+l*i};if(o.shape==="mansard"){let l=Ed(e,n,t,i,r,Id(o));return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+r>1e-6?Math.min(e,Math.max(0,(t-n+e*r)/(i+r))):e/2,a=n+s*i;return{vr:s,rh:a,y:l=>l<=s?n+l*i:t+(e-l)*r}}function _s(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var kd=.14,gm=.03;function $d(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function bs(o,e){return kn(o).rh-kd>e+.01}function Sd(o,e,n,t){let i=null,r=[],s=[],a=Math.max(0,o.settings.roof.overhang??0),l=_s(o);for(let d of l){if(d.open||t!==void 0&&!bs(d,t))continue;let u=d.points&&d.points.length>=3?null:d.overhang_sides??null,p=H=>typeof u?.[H]=="number"?Math.max(0,u[H]):null,[h,_]=Td(d,e,n),b=ct({...d,rotation:0}),f=1e-6,[w,k,x,v]=[b.u0-(p(2)??0),b.u1+(p(3)??0),-(p(0)??0),b.w+(p(1)??0)],m=Math.max(w-h,h-k,x-_,_-v),M=!!d.points&&d.points.length>=3;if(m>(M?f:gm)||M&&!V([e,n],d.points))continue;let P=d.shape==="flat"||d.shape==="parapet",z=Math.max(0,d.overhang??a),[R,A]=[Math.min(k,Math.max(w,h)),Math.min(v,Math.max(x,_))],E=((P?null:km(xm(d,{a:p(0)??z,b:p(1)??z,u0:p(2)??z,u1:p(3)??z}),R,A))??kn(d).y(A))-kd;m>f?r.push({s:d,y:E}):(i=i===null?E:Math.max(i,E),s.push(d))}let c=null;if(i!==null)for(let{s:d,y:u}of r){if(c!==null&&u<=c)continue;let p=ys(l,d);p&&s.includes(p)||(c=u)}return i!==null&&c!==null&&c>i?c:i}function Md(o,e){let n=o.length;if(n<3||Math.abs(e)<1e-9)return o.map(r=>[r[0],r[1]]);let t=sc(o)>=0?1:-1,i=[];for(let r=0;r<n;r++){let s=o[(r+n-1)%n],a=o[r],l=o[(r+1)%n],c=xd([a[0]-s[0],a[1]-s[1]]),d=xd([l[0]-a[0],l[1]-a[1]]),u=[c[1]*t,-c[0]*t],p=[d[1]*t,-d[0]*t],h=u[0]+p[0],_=u[1]+p[1],b=Math.hypot(h,_);if(b<1e-6){i.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let f=(h*u[0]+_*u[1])/b,w=Math.min(4,1/Math.max(.25,f));i.push([a[0]+h/b*e*w,a[1]+_/b*e*w])}return i}function xd(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function Pd(o,e){if(o.points&&o.points.length>=3)return Md(o.points,e);let n=Math.min(o.x0,o.x1)-e,t=Math.max(o.x0,o.x1)+e,i=Math.min(o.z0,o.z1)-e,r=Math.max(o.z0,o.z1)+e,s=xn(o);return[[n,i],[t,i],[t,r],[n,r]].map(a=>Be(s,a))}function _m(o){let e=o.map(t=>t[0]),n=o.map(t=>t[1]);return{x0:Math.min(...e),z0:Math.min(...n),x1:Math.max(...e),z1:Math.max(...n)}}var bm=30,vm=5,wm=60;function ym(o){let e=o.pitch_upper;return typeof e=="number"&&Number.isFinite(e)?Math.min(wm,Math.max(vm,e)):bm}function Id(o){return Math.tan(ym(o)*lt)}function Ed(o,e,n,t,i,r){let s=Math.min(o*.3,t>1e-6?2.4/t:o*.3),a=Math.min(o*.3,i>1e-6?2.4/i:o*.3),l=e+s*t,c=n+a*i,d=Math.min(o-a,Math.max(s,(c-l+r*(o-a+s))/(2*r))),u=l+(d-s)*r;return{vla:s,vlb:a,yla:l,ylb:c,vr:d,rh:u,y:h=>h<=s?e+h*t:h<=d?l+(h-s)*r:h<=o-a?c+(o-a-h)*r:n+(o-h)*i}}function xm(o,e){let n=ct(o),t=kn(o),i=n.w,r=Math.max(0,e.a),s=Math.max(0,e.b),a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=(B,O)=>[B,O,t.y(O)],d=c(a,-r),u=c(l,-r),p=c(l,i+s),h=c(a,i+s),_=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*lt),b=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*lt);if(o.shape==="pent"){let B=[d,u,p,h],O=[[0,t.y(0)],[i,t.y(i)]];return{faces:[B],rim:B,ridges:[[p,h]],gable:O,gables:[O,O]}}if(o.shape==="pyramid"){let B=[(n.u0+n.u1)/2,t.vr,t.rh];return{faces:[[d,u,B],[u,p,B],[p,h,B],[h,d,B]],rim:[d,u,p,h],ridges:[[d,B],[h,B],[u,B],[p,B]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let B=Ed(i,o.eave_a,o.eave_b,_,b,Id(o)),O=[[0,t.y(0)],[B.vla,B.yla],[B.vr,B.rh],[i-B.vlb,B.ylb],[i,t.y(i)]],Q=[a,B.vla,B.yla],L=[l,B.vla,B.yla],se=[a,i-B.vlb,B.ylb],te=[l,i-B.vlb,B.ylb],xe=[a,B.vr,B.rh],Fe=[l,B.vr,B.rh];return{faces:[[d,u,L,Q],[Q,L,Fe,xe],[xe,Fe,te,se],[se,te,p,h]],rim:[d,u,L,Fe,te,p,h,se,xe,Q],ridges:[[xe,Fe],[Q,L],[se,te]],gable:O,gables:[O,O]}}let[f,w]=vs(o)??["gable","gable"],k=ws(o,[f,w]),x=f==="gable"?[a,t.vr,t.rh]:[n.u0+k.d0,t.vr,t.rh],v=w==="gable"?[l,t.vr,t.rh]:[n.u1-k.d1,t.vr,t.rh],m=[a,k.vah,k.yh],M=[a,k.vbh,k.yh],P=[l,k.vah,k.yh],z=[l,k.vbh,k.yh],R=f==="halfhip",A=w==="halfhip",$=[[d,u,...A?[P]:[],v,x,...R?[m]:[]],[x,v,...A?[z]:[],p,h,...R?[M]:[]]];f==="hip"&&$.push([h,d,x]),R&&$.push([M,m,x]),w==="hip"&&$.push([u,p,v]),A&&$.push([P,z,v]);let E=[d,u,...w==="gable"?[v]:A?[P,z]:[],p,h,...f==="gable"?[x]:R?[M,m]:[]],H=[[x,v]];f==="hip"&&H.push([d,x],[h,x]),R&&H.push([m,x],[M,x]),w==="hip"&&H.push([u,v],[p,v]),A&&H.push([P,v],[z,v]);let D=[[0,t.y(0)],[t.vr,t.rh],[i,t.y(i)]],F=[[0,t.y(0)],[k.vah,k.yh],[k.vbh,k.yh],[i,t.y(i)]],j=B=>B==="gable"?D:B==="halfhip"?F:null,q=[j(f),j(w)];return{faces:$,rim:E,ridges:H,gable:q[0]??q[1],gables:q}}function vs(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,n=t=>t==="gable"||t==="hip"||t==="halfhip"?t:e;return[n(o.end_u0),n(o.end_u1)]}function ws(o,e){let n=ct(o),t=kn(o),i=n.w,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*lt),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*lt),a=n.u1-n.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,c=Math.min(t.y(0),t.y(i)),d=c+(t.rh-c)*.55,u=r>1e-6?Math.min(t.vr,(d-o.eave_a)/r):t.vr,p=s>1e-6?Math.max(t.vr,i-(d-o.eave_b)/s):t.vr,h=Math.min(l,Math.min(t.vr,i-t.vr)||i/2),_=Math.min(l-.1,(t.rh-d)/Math.max(.2,r)),b=f=>f==="hip"?h:f==="halfhip"?_:0;return{d0:b(e[0]),d1:b(e[1]),yh:d,vah:u,vbh:p}}function km(o,e,n){let t=null;for(let i of o.faces){if(!V([e,n],i.map(k=>[k[0],k[1]])))continue;let[r,s]=i,a=i.slice(2).find(k=>Math.abs((s[0]-r[0])*(k[1]-r[1])-(s[1]-r[1])*(k[0]-r[0]))>1e-9);if(!a)continue;let l=s[0]-r[0],c=s[2]-r[2],d=s[1]-r[1],u=a[0]-r[0],p=a[2]-r[2],h=a[1]-r[1],_=c*h-d*p,b=d*u-l*h,f=l*p-c*u;if(Math.abs(b)<1e-9)continue;let w=r[2]-(_*(e-r[0])+f*(n-r[1]))/b;t=t===null?w:Math.min(t,w)}return t}function zd(o,e,n){let t=e*lt,i={p:n,c:Math.cos(t),s:Math.sin(t)};if(o.points&&o.points.length>=3)return{...o,points:o.points.map(d=>Be(i,d)),..._m(o.points.map(d=>Be(i,d)))};let r=o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],s=Be(i,r),a=s[0]-r[0],l=s[1]-r[1],c=(((o.rotation??0)+e)%360+360)%360;return c>180&&(c-=360),{...o,x0:o.x0+a,x1:o.x1+a,z0:o.z0+l,z1:o.z1+l,pivot:s,rotation:Math.abs(c)<1e-9?0:c}}function Td(o,e,n){let[t,i]=Be(xn(o),[e,n],!0),r=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[t,o.flip?l-i:i-a]:[i,o.flip?s-t:t-r]}function ys(o,e){let[n,t]=Be(xn(e),[(e.x0+e.x1)/2,(e.z0+e.z1)/2]),i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),r=null;for(let s of o)s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(e)*1.5||mm(s,n,t)&&(!r||i(s)<i(r))&&(r=s);return r}function Ad(o,e,n){let t=ct(e),i=o.floors.flatMap(b=>b.rooms.filter(f=>f.points.length>=3&&b.elevation+b.height>e.base+.05)),r=o.settings.wall_exterior,s=i.map(b=>Md(b.points,Math.max(r,...(b.wall_thickness??[]).map(f=>f??0))+.01)),a=.35,l=(b,f)=>{if(i.some(k=>V(b(a),k.points)))return!0;let w=b(-Math.min(.3,f/2));return s.some(k=>!V(w,k)&&[.05,.2,a].some(x=>V(b(x),k)))},c=[.15,.5,.85],d=c.map(b=>t.u0+(t.u1-t.u0)*b),u=c.map(b=>t.w*b),p=b=>b==="a"?d.some(f=>l(w=>t.at(f,-w),t.w)):b==="b"?d.some(f=>l(w=>t.at(f,t.w+w),t.w)):b==="u0"?u.some(f=>l(w=>t.at(t.u0-w,f),t.u1-t.u0)):u.some(f=>l(w=>t.at(t.u1+w,f),t.u1-t.u0)),h=e.overhang_sides??null,_=(b,f)=>{let w=h?.[b];return typeof w=="number"?Math.max(0,w):p(f)?0:n};return{a:_(0,"a"),b:_(1,"b"),u0:_(2,"u0"),u1:_(3,"u1")}}function Rd(o,e){let n=o.floors.filter(i=>i.rooms.length>0).sort((i,r)=>i.elevation-r.elevation),t=[...n].reverse().filter(i=>i.elevation<e.base-.05);if(e.x0!==void 0&&e.z0!==void 0&&e.x1!==void 0&&e.z1!==void 0){let i=Pd({x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,points:e.points,rotation:e.rotation,pivot:e.pivot},0),r=i.reduce((u,p)=>u+p[0],0)/i.length,s=i.reduce((u,p)=>u+p[1],0)/i.length,a=[[r,s],...i.map(u=>[r+(u[0]-r)*.6,s+(u[1]-s)*.6])],l=u=>u.rooms.some(p=>p.points.length>=3&&a.some(h=>V(h,p.points))),c=n.find(u=>Math.abs(u.elevation-e.base)<=.05&&l(u));if(c)return c;let d=t.length>1?t.find(l):void 0;if(d)return d}return t[0]??n[0]}function Fd(o,e=n=>`roof_${n+1}`){let n=o.settings.roof?.pitch??35,t=o.settings.wall_exterior,i=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),r=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(x=>x.points.length>=3),d=[...new Set(c.flatMap(x=>x.points.map(v=>a(v[0]))))].sort((x,v)=>x-v),u=[...new Set(c.flatMap(x=>x.points.map(v=>a(v[1]))))].sort((x,v)=>x-v),p=d.length-1,h=u.length-1,_=(x,v)=>x.some(m=>V(v,m.points)),b=[];for(let x=0;x<h;x++){b.push([]);for(let v=0;v<p;v++){let m=[(d[v]+d[v+1])/2,(u[x]+u[x+1])/2];b[x].push(_(c,m)&&!_(s,m))}}let f=b.map(x=>x.map(()=>!1)),w=(x,v)=>b[v][x]&&!f[v][x],k=l.elevation+l.height;for(let x=0;x<h;x++)for(let v=0;v<p;v++){if(!w(v,x))continue;let m=v;for(;m+1<p&&w(m+1,x);)m++;let M=x;for(;M+1<h&&Array.from({length:m-v+1},($,E)=>w(v+E,M+1)).every(Boolean);)M++;for(let $=x;$<=M;$++)for(let E=v;E<=m;E++)f[$][E]=!0;let P=d[v]-t,z=d[m+1]+t,R=u[x]-t,A=u[M+1]+t;Math.min(z-P,A-R)<.8||r.push({id:e(r.length),x0:a(P),z0:a(R),x1:a(z),z1:a(A),shape:"gable",axis:z-P>=A-R?"x":"z",eave_a:a(k),eave_b:a(k),pitch_a:n,pitch_b:n,base:a(k),overhang:null})}s.push(...c)}return r}var ci=Math.PI/180,$m=1.13,Sm=1.72,di=.025,Kt=.07,Hd=.25;function co(o,e){let n=[];for(let t of o.floors){if(e&&t.id!==e)continue;let{walls:i}=$t(t.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},t.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,d=-s/l,u=Math.min(t.height,r.height??t.height),p=r.sources.find(b=>b.room_id===r.roomLeft)?.edge??null,h={floorId:t.id,room:r.roomLeft,edge:p,free:!!r.free},_=(b,f,w,k)=>n.push({key:b,section:null,side:"top",flat:!1,o:f,eu:w,es:[0,1,0],n:k,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[k[0],k[2]],wall:h});_(`wall:${t.id}:${r.id}`,[r.a[0]+c*r.right,t.elevation,r.a[1]+d*r.right],[s/l,0,a/l],[c,0,d]),r.free&&_(`wall:${t.id}:${r.id}:back`,[r.b[0]-c*r.left,t.elevation,r.b[1]-d*r.left],[-s/l,0,-a/l],[-c,0,-d])}}return n}var Cd="ground";function Mm(o){let e=[...o.floors.filter(n=>n.rooms.some(t=>t.points.length>=3))].sort((n,t)=>n.elevation-t.elevation);return e.find(n=>n.elevation>-.5)??e[0]??o.floors[0]??null}function Pm(o,e){let n=(e.rotation??0)*Math.PI/180,t=[Math.cos(n),0,Math.sin(n)],i=[-Math.sin(n),0,Math.cos(n)],r=Mm(o),s=t[0]*e.u+i[0]*e.v,a=t[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:nt(r,s,a)):e.base??0;return{key:Cd,section:null,side:"top",flat:!0,o:[0,l,0],eu:t,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Gt(o,e,n=Mt(o)){return e.face===Cd?Pm(o,e):e.face.startsWith("wall:")?co(o,e.face.split(":")[1]).find(t=>t.key===e.face)??null:n.find(t=>t.key===e.face)??null}function xs(o){return o.floors.filter(n=>n.rooms.some(t=>t.points.length>=3)).sort((n,t)=>t.elevation-n.elevation)[0]??null}function Im(o,e){let n=o.settings.roof?.frame;if(n&&n.length===4&&n.every(r=>Number.isFinite(r)))return n;let t=e.rooms.flatMap(r=>r.points.map(s=>s[0])),i=e.rooms.flatMap(r=>r.points.map(s=>s[1]));return[Math.min(...t),Math.min(...i),Math.max(...t),Math.max(...i)]}function Mt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>Em(v,Ad(o,v,v.overhang??e.overhang)));let n=xs(o);if(!n)return[];let[t,i,r,s]=Im(o,n),a=o.settings.wall_exterior+e.overhang,l=t-a,c=r+a,d=i-a,u=s+a,p=n.elevation+n.height;if(e.type==="flat")return[Dd("main",null,l,d,c,u,p+Hd)];let h=c-l>=u-d,_=e.ridge==="short"?!h:h,b=(_?u-d:c-l)/2,f=b*Math.tan(e.pitch*ci),w=(v,m,M)=>_?[v,p+M,(d+u)/2+m]:[(l+c)/2+m,p+M,v],[k,x]=_?[l,c]:[d,u];return[-1,1].map(v=>li(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",w(k,v*b,0),w(x,v*b,0),w(k,0,f),e.pitch,()=>[0,x-k]))}function Em(o,e){let n=ct(o),t=kn(o),i=(x,v,m)=>{let[M,P]=n.at(x,v);return[M,m,P]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let x=ct({...o,rotation:0}),v=x.at(a,-r),m=x.at(l,n.w+s),M=Dd(o.id,o.id,Math.min(v[0],m[0]),Math.min(v[1],m[1]),Math.max(v[0],m[0]),Math.max(v[1],m[1]),o.eave_a+Hd);return[Tm(M,xn(o))]}if(o.shape==="pent")return[li(`${o.id}:a`,o.id,"a",i(a,-r,t.y(-r)),i(l,-r,t.y(-r)),i(a,n.w+s,t.y(n.w+s)),o.pitch_a,()=>[0,c])];let d=vs(o),u=d?ws(o,d):null,p=o.shape==="pyramid"||d?.[0]==="hip",h=o.shape==="pyramid"||d?.[1]==="hip",_=o.shape==="pyramid"?(n.u1-n.u0)/2:p?u.d0:0,b=o.shape==="pyramid"?(n.u1-n.u0)/2:h?u.d1:0,f=p?n.u0+_-a:0,w=h?l-(n.u1-b):0,k=[];if(t.vr>.3){let x=Math.hypot(t.vr+r,t.rh-t.y(-r));k.push(li(`${o.id}:a`,o.id,"a",i(a,-r,t.y(-r)),i(l,-r,t.y(-r)),i(a,t.vr,t.rh),o.pitch_a,v=>[f*(v/x),c-w*(v/x)]))}if(n.w-t.vr>.3){let x=Math.hypot(n.w+s-t.vr,t.rh-t.y(n.w+s));k.push(li(`${o.id}:b`,o.id,"b",i(l,n.w+s,t.y(n.w+s)),i(a,n.w+s,t.y(n.w+s)),i(l,t.vr,t.rh),o.pitch_b,v=>[w*(v/x),c-f*(v/x)]))}if(p||h){let x=t.y(-r),v=t.y(n.w+s),m=[];p&&m.push([`${o.id}:c`,"c",i(a,n.w+s,v),i(a,-r,x),i(n.u0+_,t.vr,t.rh)]),h&&m.push([`${o.id}:d`,"d",i(l,-r,x),i(l,n.w+s,v),i(n.u1-b,t.vr,t.rh)]);for(let[M,P,z,R,A]of m){let $=zm(M,o.id,P,z,R,A);$&&k.push($)}}return k}function zm(o,e,n,t,i,r){let s=lo(Ut(i,t));if(s<.3)return null;let a=St(Ut(i,t)),l=Ut(r,t),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=lo(d);if(u<.3)return null;let p=St(d),h=St(Wd(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let _=St([-p[0],0,-p[2]]),b=Math.atan2(p[1],Math.hypot(p[0],p[2]))/ci;return{key:o,section:e,side:n,flat:!1,o:t,eu:a,es:p,n:h,lu:s,ls:u,pitch:b,span:w=>{let k=Math.min(1,Math.max(0,w/u));return[c*k,s-(s-c)*k]},facing:[_[0],_[2]]}}function li(o,e,n,t,i,r,s,a){let l=St(Ut(i,t)),c=St(Ut(r,t)),d=St(Wd(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=St([-c[0],0,-c[2]]);return{key:o,section:e,side:n,flat:!1,o:t,eu:l,es:c,n:d,lu:lo(Ut(i,t)),ls:lo(Ut(r,t)),pitch:s,span:a,facing:[u[0],u[2]]}}function Tm(o,e){if(!e)return o;let n=a=>{let[l,c]=Be({p:[0,0],c:e.c,s:e.s},[a[0],a[2]]);return[l,a[1],c]},[t,i]=Be(e,[o.o[0],o.o[2]]),[r,s]=Be({p:[0,0],c:e.c,s:e.s},o.facing);return{...o,o:[t,o.o[1],i],eu:n(o.eu),es:n(o.es),n:n(o.n),facing:[r,s]}}function Dd(o,e,n,t,i,r,s){let a=i-n>=r-t,l=a?i-n:r-t,c=a?r-t:i-n;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[n,s,t],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function ks(o){let e=o.module_w||$m,n=o.module_h||Sm;return o.portrait===!1?[n,e]:[e,n]}function Od(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function $s(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*ci:o.wall?Math.min(90,Math.max(0,e.tilt??0))*ci:0}function jt(o,e){let[n,t]=ks(e),i=Od(e),r=Math.max(1,...i),a=(i.length-1)*Ld(o,e)+t*Math.cos($s(o,e));return[r*n+(r-1)*di,a]}function Ld(o,e){let[,n]=ks(e),t=$s(o,e);return o.wall?n*Math.cos(t)+di:o.flat?n*Math.cos(t)+Math.max(.3,2*n*Math.sin(t)):n+di}function Am(o,e,n=!1){let[t,i]=ks(e),r=[],s=$s(o,e),a=i*Math.cos(s),l=Ld(o,e),c=Od(e),d=Math.max(1,...c),u=new Set(e.skip??[]),p=!!o.wall&&t>o.lu+1e-6,h=(b,f,w)=>[o.o[0]+o.eu[0]*b+o.es[0]*f+o.n[0]*w,o.o[1]+o.eu[1]*b+o.es[1]*f+o.n[1]*w,o.o[2]+o.eu[2]*b+o.es[2]*f+o.n[2]*w],_=(b,f)=>{if(o.unbounded)return!0;if(f<-1e-6||f>o.ls+1e-6)return!1;let[w,k]=o.span(f);return b>=w-1e-6&&b<=k+1e-6};return c.forEach((b,f)=>{let w=e.align==="right"?d-b:e.align==="center"?(d-b)/2:0;for(let k=0;k<b;k++){let x=`${f}:${k}`,v=u.has(x);if(v&&!n)continue;let m=e.u+(k+w)*(t+di),M=e.v+f*l,P=m+t,z=M+(o.flat||o.wall?a:i);if(p){if(!(_((m+P)/2,M)&&_((m+P)/2,z)))continue}else if(![[m,M],[P,M],[P,z],[m,z]].every(([D,F])=>_(D,F)))continue;if(o.wall&&s>.001){let D=Kt+i*Math.sin(s),[F,j]=e.flip?[D,Kt]:[Kt,D],q=[h(m,M,F),h(P,M,F),h(P,z,j),h(m,z,j)],B=e.flip?M:z,O=[m+.05,P-.05].map(Q=>[h(Q,B,0),h(Q,B,D)]);r.push({corners:q,posts:O,cell:x,skipped:v});continue}if(!o.flat){r.push({corners:[h(m,M,Kt),h(P,M,Kt),h(P,z,Kt),h(m,z,Kt)],posts:[],cell:x,skipped:v});continue}let R=.15,A=R+i*Math.sin(s),[$,E]=e.flip?[z,M]:[M,z],H=[h(m,$,R),h(P,$,R),h(P,E,A),h(m,E,A)];r.push({corners:H,posts:[m+.05,P-.05].flatMap(D=>[[h(D,$,0),h(D,$,R)],[h(D,E,0),h(D,E,A)]]),cell:x,skipped:v})}}),r}function Ut(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function lo(o){return Math.hypot(o[0],o[1],o[2])}function St(o){let e=lo(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Wd(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var Rm=.78,Fm=1.18;function Hm(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,tilt:0,module_w:o.w||Rm,module_h:o.h||Fm}}function Cm(o,e){let n=Am(o,Hm(e))[0];if(!n)return null;let t=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[t(n.corners[0]),t(n.corners[1]),t(n.corners[2]),t(n.corners[3])]}function Ss(o,e,n){let t=e?Cm(e,n):null;if(!t)return null;let i=(t[0][0]+t[2][0])/2,r=(t[0][1]+t[2][1])/2,s=(t[0][2]+t[2][2])/2;for(let a of[...o.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(c=>V([i,s],c.points));if(l)return{floor:a,roomId:l.id,corners:t}}return null}function ui(o,e){let n=o.settings.roof?.windows??[];if(!n.length)return[];let t=new Map(Mt(o).map(i=>[i.key,i]));return n.filter(i=>Ss(o,t.get(i.face),i)?.roomId===e)}function Nd(o,e){let[n,t]=jt(o,e);return[o.o[0]+o.eu[0]*(e.u+n/2)+o.es[0]*(e.v+t/2),o.o[2]+o.eu[2]*(e.u+n/2)+o.es[2]*(e.v+t/2)]}var Dm=new Set(["window","door","opening","garage_door"]),$n=null;function Om(o,e,n,t){(!$n||$n.entities!==o.entities||$n.building!==e)&&($n={entities:o.entities,building:e,rooms:new Map});let i=$n.rooms.get(t.id);return i||(i=_n(o,n,t,ui(e,t.id)).shown,$n.rooms.set(t.id,i)),i}function pi(o,e,n){let t=n?e.floors.filter(r=>r.id===n):[...e.floors].sort((r,s)=>r.elevation-s.elevation),i=[];for(let r of t)for(let[s,a]of oe(r).entries()){if(!a.name?.trim()||a.outdoor&&oe(r).findIndex(f=>f.outdoor&&f.area_id===a.area_id&&f.name===a.name)<s)continue;let l=Om(o,e,r,a),c=l.filter(f=>W(f)==="light"&&o.states[f]),d=c.filter(f=>o.states[f].state==="on"),u=l.filter(f=>{let w=o.states[f];return W(f)==="binary"&&w?.state==="on"&&Dm.has(String(w.attributes.device_class??""))}).length,p=l.some(f=>W(f)==="media"&&o.states[f]?.state==="playing"),h=We(o,r,a,"temperature"),_=h===null?null:bt(o,h);if(_===null&&a.climate?.temperature!=="none"){let f=l.filter(w=>W(w)==="climate").map(w=>o.states[w]?.attributes.current_temperature).find(w=>typeof w=="number");typeof f=="number"&&(_=f)}let b=We(o,r,a,"humidity");i.push({floorId:r.id,roomId:a.id,name:a.name,temp:_,humidity:b,lights:c,lightsOn:d,open:u,playing:p,active:d.length>0||u>0||p})}return i}function Bd(o){return o.lightsOn.length?["turn_off",o.lightsOn]:["turn_on",o.lights]}function Vd(o,e){return(e.settings.favorites??[]).filter(n=>o.states[n]).map(n=>{let[t,i]=bn(n);return{id:n,domain:t,service:i,on:t==="homeassistant"&&o.states[n].state==="on"}})}function hi(o,e){let n=pi(o,e,null),t=n.map(r=>r.temp).filter(r=>r!==null),i=si(o,e,so(o,e),new Map).filter(r=>r.roomId!==null);return{rooms:n.length,lightsOn:n.reduce((r,s)=>r+s.lightsOn.length,0),open:n.reduce((r,s)=>r+s.open,0),playing:n.filter(r=>r.playing).length,temp:t.length?Math.round(t.reduce((r,s)=>r+s,0)/t.length*10)/10:null,alerts:i}}var fi=o=>o?.icon||"\u{1F3E0}";function Sn(o,e,n){return e.find(i=>i.id===n)?.name||(n===he?I(o,"plan_main"):"?")}var Ms=class extends pe{static properties={hass:{attribute:!1},plans:{attribute:!1},current:{attribute:!1},admin:{type:Boolean},alerts:{attribute:!1},site:{type:Boolean},hasSite:{type:Boolean},_open:{state:!0}};constructor(){super(),this.plans=[],this.current=he,this.admin=!1,this.alerts=null,this.site=!1,this.hasSite=!1,this._open=!1}t(e,n){return I(this.hass,e,n)}fire(e,n={}){this._open=!1,this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}close=e=>{e.composedPath().includes(this)||(this._open=!1)};connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.close)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.close)}render(){let e=this.plans.find(t=>t.id===this.current),n=[...this.alerts??new Map].filter(([t,i])=>t!==this.current&&i>0).reduce((t,[,i])=>t+i,0);return g`<button
        class="fp3d-pp-btn"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        title=${this.t("plan_pick")}
        @click=${()=>this._open=!this._open}
      >
        <span class="fp3d-pp-icon">${this.site?"\u{1F3D8}":fi(e)}</span>
        <span class="fp3d-pp-name">${this.site?this.t("plan_site"):Sn(this.hass,this.plans,this.current)}</span>
        ${n?g`<span class="fp3d-pp-alert" title=${this.t("plan_alerts_elsewhere",{n})}>${n}</span>`:y}
        <span class="fp3d-pp-caret">▾</span>
      </button>
      ${this._open?g`<div class="fp3d-pp-menu" role="listbox">
            ${this.plans.map(t=>g`<button role="option" aria-selected=${!this.site&&t.id===this.current} @click=${()=>this.fire("plan-pick",{plan:t.id})}>
                <span class="fp3d-pp-icon">${fi(t)}</span>
                <span class="fp3d-pp-name">${Sn(this.hass,this.plans,t.id)}</span>
                ${this.alerts?.get(t.id)?g`<span class="fp3d-pp-alert">${this.alerts.get(t.id)}</span>`:y}
                <span class="fp3d-pp-size">${this.t(t.rooms===1?"floor_rooms_one":"floor_rooms",{n:t.rooms})}</span>
              </button>`)}
            ${this.hasSite?g`<button role="option" aria-selected=${this.site} @click=${()=>this.fire("plan-site")}>
                  <span class="fp3d-pp-icon">🏘</span><span class="fp3d-pp-name">${this.t("plan_site")}</span>
                </button>`:y}
            ${this.plans.length>1?g`<button class="fp3d-pp-extra" @click=${()=>this.fire("plan-overview")}>▦ ${this.t("plan_all")}</button>`:y}
            ${this.admin?g`<hr />
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-new")}>＋ ${this.t("plan_new")}</button>
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-manage")}>⚙ ${this.t("plan_manage")}</button>`:y}
          </div>`:y}`}static styles=[Me,Te,ge`
      :host {
        position: relative;
        display: inline-block;
        min-width: 0;
      }
      .fp3d-pp-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        max-width: 260px;
        min-height: 36px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-pp-btn:hover,
      .fp3d-pp-btn[aria-expanded="true"] {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pp-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-pp-caret {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-pp-alert {
        min-width: 18px;
        padding: 0 5px;
        border-radius: 9px;
        background: var(--fp3d-alert, #ff4d6d);
        color: #fff;
        font-size: 11.5px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
      }
      .fp3d-pp-menu {
        position: absolute;
        z-index: 20;
        top: calc(100% + 6px);
        left: 0;
        display: grid;
        min-width: 240px;
        max-width: min(340px, 90vw);
        max-height: 60vh;
        overflow: auto;
        padding: 6px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      }
      .fp3d-pp-menu button {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 40px;
        padding: 6px 10px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-pp-menu button:hover,
      .fp3d-pp-menu button[aria-selected="true"] {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-pp-menu .fp3d-pp-name {
        flex: 1;
      }
      .fp3d-pp-size {
        color: var(--fp3d-muted);
        font-size: 12px;
        white-space: nowrap;
      }
      .fp3d-pp-extra {
        color: var(--fp3d-muted) !important;
      }
      hr {
        width: 100%;
        margin: 4px 0;
        border: 0;
        border-top: 1px solid var(--fp3d-line);
      }
    `]};customElements.get("fp3d-plan-picker")||customElements.define("fp3d-plan-picker",Ms);var Ps=class extends pe{static properties={hass:{attribute:!1},plans:{attribute:!1},buildings:{attribute:!1},current:{attribute:!1}};t(e,n){return I(this.hass,e,n)}fire(e,n={}){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}render(){let e=String(this.hass?.config?.unit_system?.temperature??"\xB0C");return g`<div class="fp3d-po-veil" @click=${n=>n.target===n.currentTarget&&this.fire("close")}>
      <section class="fp3d-po" role="dialog" aria-label=${this.t("plan_all")}>
        <header>
          <h2>${this.t("plan_all")}</h2>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>✕</button>
        </header>
        <div class="fp3d-po-grid">
          ${this.plans.map(n=>{let t=this.buildings.get(n.id),i=t&&this.hass?hi(this.hass,t):null;return g`<button class="fp3d-po-tile ${i?.alerts.length?"fp3d-po-alert":""} ${n.id===this.current?"fp3d-po-current":""}" @click=${()=>this.fire("plan-pick",{plan:n.id})}>
              <span class="fp3d-po-head"><span class="fp3d-po-icon">${fi(n)}</span><strong>${Sn(this.hass,this.plans,n.id)}</strong></span>
              ${i?g`<span class="fp3d-po-facts">
                      <span>${this.t(i.rooms===1?"floor_rooms_one":"floor_rooms",{n:i.rooms})}</span>
                      <span title=${this.t("plan_lights_on")}>💡 ${i.lightsOn}</span>
                      ${i.open?g`<span title=${this.t("plan_open_now")}>${this.t("plan_open_n",{n:i.open})}</span>`:y}
                      ${i.playing?g`<span>♪ ${i.playing}</span>`:y}
                      ${i.temp!==null?g`<span>🌡 ${ie(this.hass,i.temp,1)} ${e}</span>`:y}
                    </span>
                    ${i.alerts.slice(0,3).map(r=>g`<span class="fp3d-po-warn">⚠ ${Vt(this.hass,t,r)}</span>`)}`:g`<span class="fp3d-po-facts">…</span>`}
            </button>`})}
        </div>
      </section>
    </div>`}static styles=[Me,Te,ge`
      .fp3d-po-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(0, 0, 0, 0.55);
      }
      .fp3d-po {
        width: min(920px, 100%);
        max-height: 90vh;
        overflow: auto;
        padding: 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
      }
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      h2 {
        margin: 0;
        font-family: var(--fp3d-title-font);
        font-size: 20px;
      }
      .fp3d-po-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 12px;
      }
      .fp3d-po-tile {
        display: grid;
        align-content: start;
        gap: 8px;
        min-height: 120px;
        padding: 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-po-tile:hover,
      .fp3d-po-current {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 18px -6px var(--fp3d-accent);
      }
      .fp3d-po-alert {
        border-color: var(--fp3d-alert, #ff4d6d);
        box-shadow: 0 0 20px -6px var(--fp3d-alert, #ff4d6d);
      }
      .fp3d-po-head {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-po-icon {
        font-size: 24px;
      }
      .fp3d-po-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .fp3d-po-warn {
        color: var(--fp3d-alert, #ff4d6d);
        font-size: 13px;
        font-weight: 600;
      }
    `]};customElements.get("fp3d-plan-overview")||customElements.define("fp3d-plan-overview",Ps);var Is=":",Lm=.05;function Ud(o,e){let n=o.indexOf(Is);return n>0?{plan:o.slice(0,n),id:o.slice(n+1)}:{plan:e,id:o}}function Wm(o,e){let n=e.rot*Math.PI/180,t=Math.cos(n),i=Math.sin(n),r=s=>Math.round(s*1e3)/1e3;return[r(o[0]*t-o[1]*i+e.x),r(o[0]*i+o[1]*t+e.y)]}function Nm(o,e,n){let t=s=>`${e}${Is}${s}`,i=s=>Wm(s,n),r=s=>(((s??0)+n.rot)%360+360)%360;return{...o,id:t(o.id),rooms:o.rooms.map(s=>({...s,id:t(s.id),points:s.points.map(i),start_view:null})),openings:o.openings.map(s=>({...s,id:t(s.id),room_id:t(s.room_id),wall:s.wall?t(s.wall):s.wall})),furniture:o.furniture.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,id:t(s.id),x:a,z:l,rotation:r(s.rotation)}}),placements:o.placements.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,x:a,z:l,rotation:r(s.rotation)}}),outdoor:(o.outdoor??[]).map(s=>({...s,id:t(s.id),points:s.points.map(i)})),walls:(o.walls??[]).map(s=>({...s,id:t(s.id),a:i(s.a),b:i(s.b)})),background:null,start_view:null}}function Kd(o,e=""){let n=o.settings.roof;if(!n||n.type==="none")return[];if(n.type===void 0||n.type==="custom")return n.sections??[];let t=Fd(o,i=>`${e}roof_${i+1}`);return n.type==="flat"?t.map(i=>({...i,shape:"flat"})):t}function Bm(o,e,n){let t=n.rot?zd(o,n.rot,[0,0]):o,i=r=>[r[0]+n.x,r[1]+n.y];return{...t,id:`${e}${Is}${o.id}`,x0:t.x0+n.x,x1:t.x1+n.x,z0:t.z0+n.y,z1:t.z1+n.y,pivot:t.pivot?i(t.pivot):t.pivot,points:t.points?t.points.map(i):t.points}}function Gd(o,e){let n=o.floors.map(c=>({...c,rooms:[...c.rooms],openings:[...c.openings],furniture:[...c.furniture],placements:[...c.placements],outdoor:[...c.outdoor??[]],walls:[...c.walls??[]]}));for(let c of e)if(c.site?.on)for(let d of c.building.floors){let u=Nm(d,c.id,c.site),p=n.find(h=>Math.abs(h.elevation-d.elevation)<Lm);if(!p){n.push(u);continue}p.rooms.push(...u.rooms),p.openings.push(...u.openings),p.furniture.push(...u.furniture),p.placements.push(...u.placements),p.outdoor.push(...u.outdoor),p.walls=[...p.walls??[],...u.walls??[]]}n.sort((c,d)=>c.elevation-d.elevation);let t=c=>c.floors.some(d=>d.rooms.some(u=>u.points.length>=3)),i=t(o)?Kd(o):[],r=o.settings.roof.type!=="custom"&&o.settings.roof.type!==void 0,s=(o.settings.roof.solar??[]).map(c=>r&&i[0]&&c.face.startsWith("main:")?{...c,face:`${i[0].id}:${c.face.slice(5)}`}:c),a=[...i,...e.filter(c=>c.site?.on&&t(c.building)).flatMap(c=>Kd(c.building).map(d=>Bm(d,c.id,c.site)))],l={...o.settings.roof,type:"custom",sections:a,solar:s};return{...o,floors:n,card_templates:[],settings:{...o.settings,start_view:null,roof:l}}}var Mn=class{others=new Map;watched="";unsubscribe=null;siteOf=null;host;constructor(e){this.host=e}watch(e,n){let t=n.plans.map(s=>s.id).filter(s=>s!==n.planId),i=`${n.planId}|${t.join(",")}`;if(!e||i===this.watched)return;this.watched=i;let r=s=>Fo(e,s).then(a=>{!n.plans.some(l=>l.id===s)||s===n.planId||(this.others=new Map(this.others).set(s,Xn(a.building)),this.host.requestUpdate())},()=>{});this.others=new Map([...this.others].filter(([s])=>t.includes(s)));for(let s of t)r(s);t.length&&!this.unsubscribe&&cl(e,s=>{s!==n.planId&&n.plans.some(a=>a.id===s)&&r(s)}).then(s=>this.unsubscribe=s,()=>{})}stop(){this.unsubscribe?.(),this.unsubscribe=null,this.watched=""}all(e){let n=new Map(this.others);return e.building&&n.set(e.planId,e.building),n}site(e){let n=this.all(e),t=n.get(he);if(!t)return null;let i=e.plans.filter(a=>a.id!==he&&a.site?.on).map(a=>({id:a.id,site:a.site,building:n.get(a.id)}));if(i.some(a=>!a.building))return null;let r=[t,...i.flatMap(a=>[a.building,a.site?.x,a.site?.y,a.site?.rot])];if(this.siteOf&&this.siteOf.key.length===r.length&&this.siteOf.key.every((a,l)=>a===r[l]))return this.siteOf.to;let s=Gd(t,i.map(a=>({id:a.id,site:a.site,building:a.building})));return this.siteOf={key:r,to:s},s}};var jd={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Pn(o){return jd[o]}function Ze(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function qt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${jd[o]}"/></svg>`}var qd="neonplan3d.roombar_min",Vm="M5 4h14v16H5zM12 4v16M5 12h14",Zd="M8 5.5v13l10.5-6.5z",mi=o=>g`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${et`<path d=${o} />`}</svg>`,Es=class extends pe{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},favorites:{type:Boolean},readOnly:{type:Boolean},_min:{state:!0},_fired:{state:!0}};constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.favorites=!1,this.readOnly=!1,this._fired=null;try{this._min=localStorage.getItem(qd)==="1"}catch{this._min=!1}}t(e,n){return I(this.hass,e,n)}setMin(e){this._min=e;try{localStorage.setItem(qd,e?"1":"0")}catch{}}toggleLights(e,n){if(e.stopPropagation(),this.readOnly)return;let[t,i]=Bd(n);i.length&&this.hass.callService("light",t,{entity_id:i})}pick(e,n){this.dispatchEvent(new CustomEvent("room-pick",{detail:{floorId:e,roomId:n},bubbles:!0,composed:!0}))}render(){let e=this.building;if(!e||!this.hass)return y;if(this._min)return g`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${()=>this.setMin(!1)}>▴ ${this.t("room_bar_rooms")}</button>`;let n=this.hass,t=pi(n,e,this.floorId),i=this.favorites?Vd(n,e):[],r=!this.floorId&&e.floors.length>1,s=a=>e.floors.find(l=>l.id===a)?.name??"";return g`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${()=>this.setMin(!0)}>▾</button>
      ${i.map(a=>{let l=n.states[a.id],c=a.domain!=="homeassistant",d=this.readOnly||Z(l),u=()=>{d||(n.callService(a.domain,a.service,{entity_id:a.id}),this._fired=a.id,setTimeout(()=>this._fired=null,700))};return g`<div class="fp3d-rb-card fp3d-rb-fav ${a.on||this._fired===a.id?"fp3d-rb-on":""} ${d?"fp3d-rb-off":""}">
          <div class="fp3d-rb-top"><b class="fp3d-rb-name">${G(n,a.id)}</b></div>
          <div class="fp3d-rb-row"></div>
          ${c?g`<button class="fp3d-rb-act" ?disabled=${d} @click=${u}>${mi(Zd)} ${this.t("room_bar_activate")}</button>`:g`<button class="fp3d-rb-switch" role="switch" aria-checked=${a.on} ?disabled=${d} @click=${u}>
                <span>${a.on?this.t("room_bar_on"):this.t("room_bar_off")}</span><i aria-hidden="true"></i>
              </button>`}
        </div>`})}
      ${i.length&&t.length?g`<span class="fp3d-rb-sep" aria-hidden="true"></span>`:y}
      ${t.map(a=>{let l=a.temp===null&&!a.lights.length&&!a.open&&!a.playing,c=a.lightsOn.length>0;return g`<div
          class="fp3d-rb-card ${l?"fp3d-rb-quiet":""} ${a.active?"fp3d-rb-active":""} ${a.roomId===this.roomId?"fp3d-rb-sel":""}"
          role="button"
          tabindex="0"
          title=${r?`${a.name} \xB7 ${s(a.floorId)}`:a.name}
          aria-pressed=${a.roomId===this.roomId}
          @click=${()=>this.pick(a.floorId,a.roomId)}
          @keydown=${d=>d.target===d.currentTarget&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),this.pick(a.floorId,a.roomId))}
        >
          <div class="fp3d-rb-top">
            <b class="fp3d-rb-name">${a.name}</b>
            ${a.temp===null?y:g`<span class="fp3d-rb-temp">${ie(n,a.temp,1)}°</span>`}
          </div>
          <div class="fp3d-rb-row">
            ${r?g`<span class="fp3d-rb-floor">${s(a.floorId)}</span>`:y}
            ${a.humidity===null?y:g`<span>${ie(n,a.humidity,0)} %</span>`}
            ${a.open?g`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${mi(Vm)}${a.open>1?a.open:""}</span>`:y}
            ${a.playing?g`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${mi(Zd)}</span>`:y}
          </div>
          ${a.lights.length?g`<button
                class="fp3d-rb-switch"
                role="switch"
                aria-checked=${c}
                aria-label=${`${this.t("room_bar_light")} ${a.name}`}
                ?disabled=${this.readOnly}
                @click=${d=>this.toggleLights(d,a)}
                @keydown=${d=>d.stopPropagation()}
              >
                <span>${mi(Pn("light"))} ${c?`${this.t("room_bar_light")} \xB7 ${this.t("room_bar_lights",{n:a.lightsOn.length})}`:this.t("room_bar_light")}</span><i aria-hidden="true"></i>
              </button>`:g`<div class="fp3d-rb-switch-gap"></div>`}
        </div>`})}
    </div>`}static styles=[Me,Te,ge`
      :host {
        display: block;
        pointer-events: none;
      }
      .fp3d-rb,
      .fp3d-rb-open {
        pointer-events: auto;
      }
      /* one row of even cards, solid like the room panel, scrolling sideways */
      .fp3d-rb {
        display: flex;
        align-items: stretch;
        gap: 8px;
        padding: 2px;
        overflow-x: auto;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
      }
      .fp3d-rb::-webkit-scrollbar {
        display: none;
      }
      .fp3d-rb-min {
        flex: none;
        width: 26px;
        padding: 0;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: inherit;
        cursor: pointer;
      }
      .fp3d-rb-sep {
        flex: none;
        width: 1px;
        margin: 8px 0;
        background: var(--fp3d-line);
      }
      .fp3d-rb-card {
        flex: none;
        box-sizing: border-box;
        width: 164px;
        height: 96px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 9px 10px 8px 12px;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        color: var(--fp3d-text);
        cursor: pointer;
        user-select: none;
      }
      .fp3d-rb-top {
        display: flex;
        align-items: baseline;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-rb-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 700;
      }
      .fp3d-rb-temp {
        flex: none;
        color: var(--fp3d-accent);
        font-family: var(--fp3d-title-font);
        font-size: 19px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rb-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 16px;
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-rb-floor {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-ico {
        width: 14px;
        height: 14px;
        flex: none;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
        vertical-align: -2px;
      }
      .fp3d-rb-state {
        display: inline-flex;
        align-items: center;
        gap: 2px;
      }
      .fp3d-rb-win {
        color: var(--fp3d-danger);
      }
      .fp3d-rb-play {
        color: var(--fp3d-accent);
      }
      /* the switch at the foot of a card: a label and a small toggle */
      .fp3d-rb-switch,
      .fp3d-rb-act {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        height: 26px;
        padding: 0 4px 0 9px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 11px;
        cursor: pointer;
      }
      .fp3d-rb-switch span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-switch i {
        flex: none;
        position: relative;
        width: 28px;
        height: 16px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.14);
        transition: background 0.15s;
      }
      .fp3d-rb-switch i::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #c9d6ee;
        transition: transform 0.15s;
      }
      .fp3d-rb-switch[aria-checked="true"] {
        color: var(--fp3d-warm);
        border-color: rgba(255, 181, 71, 0.45);
        background: rgba(255, 181, 71, 0.1);
      }
      .fp3d-rb-switch[aria-checked="true"] i {
        background: var(--fp3d-warm);
      }
      .fp3d-rb-switch[aria-checked="true"] i::after {
        transform: translateX(12px);
        background: #1a1200;
      }
      .fp3d-rb-act {
        justify-content: center;
        padding: 0 10px;
        color: var(--fp3d-text);
      }
      .fp3d-rb-switch:disabled,
      .fp3d-rb-act:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-rb-switch-gap {
        height: 26px;
      }
      /* something on or open: a warm edge; the open room: the accent */
      .fp3d-rb-active,
      .fp3d-rb-on {
        border-color: rgba(255, 181, 71, 0.65);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.2), var(--fp3d-shadow);
      }
      .fp3d-rb-sel {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 0 1px var(--fp3d-accent) inset, var(--fp3d-shadow);
      }
      .fp3d-rb-quiet .fp3d-rb-name {
        color: var(--fp3d-muted);
      }
      .fp3d-rb-fav {
        cursor: default;
      }
      .fp3d-rb-off {
        opacity: 0.55;
      }
      @media (max-width: 600px) {
        .fp3d-rb-card {
          width: 132px;
          height: 86px;
          padding: 7px 8px 6px 10px;
        }
        .fp3d-rb-temp {
          font-size: 16px;
        }
      }
    `]};customElements.get("fp3d-room-bar")||customElements.define("fp3d-room-bar",Es);function zs(o){return o?.settings.person_look??"figure"}function _i(o){return zs(o)!=="off"}var Yd=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function gi(o){let e=0;for(let n of o)e=e*31+n.charCodeAt(0)>>>0;return Yd[e%Yd.length]}var Xd=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Km(o,e,n){let t=Xd(n);if(!t||t==="unknown"||t==="unavailable"||t==="not home"||t==="away")return null;for(let i of e.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(Xd).includes(t))return{floorId:i.id,room:r};return null}function Qd(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Um(o,e){return["home","on","unknown","unavailable",""].includes(o)?!1:!(e&&o!=="not_home"&&Gm(e,o))}function Gm(o,e){let n=o.states["zone.home"]?.attributes;if(!n||typeof n.latitude!="number"||typeof n.longitude!="number")return!1;let t=Math.PI/180;for(let[i,r]of Object.entries(o.states)){if(!i.startsWith("zone.")||i==="zone.home")continue;let s=r.attributes;if(s.friendly_name!==e||typeof s.latitude!="number"||typeof s.longitude!="number")continue;let a=(s.latitude-n.latitude)*t,l=(s.longitude-n.longitude)*t,c=Math.sin(a/2)**2+Math.cos(n.latitude*t)*Math.cos(s.latitude*t)*Math.sin(l/2)**2;if(2*6371e3*Math.asin(Math.sqrt(c))<=(typeof n.radius=="number"?n.radius:100)+(typeof s.radius=="number"?s.radius:0))return!0}return!1}function Jd(o,e){let n=[],t=new Map;for(let i of e.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=Km(o,e,s.state);if(!a)continue;let l=t.get(a.room.id)??0;t.set(a.room.id,l+1);let[c,d]=Ar(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=r.attributes.friendly_name??i.person;n.push({id:i.person,name:h,initials:Qd(h),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*p,z:d+Math.sin(u)*p})}return n}function bi(o,e,n=new Set,t=Date.now()){let i=[];for(let[u,p]of Object.entries(o.states)){let h=p.attributes;if(!u.startsWith("sensor.")||h.neonplan_locate!==!0||typeof h.room_id!="string")continue;let _=null;for(let w of e.floors){let k=oe(w).find(x=>x.id===h.room_id);k&&(_={floorId:w.id,room:k})}if(!_)continue;let b=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,f=typeof h.since=="string"?Date.parse(h.since):NaN;i.push({entityId:u,name:typeof h.device_name=="string"?h.device_name:u,person:typeof h.person=="string"?h.person:null,floorId:_.floorId,room:_.room,seen:Number.isFinite(b)?b:0,since:Number.isFinite(f)?f:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let r=[],s=new Map,a=new Map,l=(u,p)=>{let h=s.get(u.room.id)??0;if(s.set(u.room.id,h+1),!p.thing){let v=a.get(u.room.id);if(!v){try{v=Xm(o,e,u.floorId,u.room)}catch{v=[]}a.set(u.room.id,v)}let m=v.shift();for(;m&&!V(m,u.room.points);)m=v.shift();if(m){r.push({...p,floorId:u.floorId,roomId:u.room.id,x:m[0],z:m[1]});return}}let[_,b]=Ar(u.room.points),f=-Math.PI/2+.9+h*1.15,w=[_+Math.cos(f)*.75,b+Math.sin(f)*.75],[k,x]=V(w,u.room.points)?w:[_,b];r.push({...p,floorId:u.floorId,roomId:u.room.id,x:k,z:x})},c=(u,p)=>l(u,{id:u.entityId,name:u.name,initials:u.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:u.entityId,tag:u.name,thing:!0}),d=new Map;for(let u of i)u.person?d.set(u.person,[...d.get(u.person)??[],u]):c(u,gi(u.entityId));for(let[u,p]of d){if(n.has(u))continue;let h=o.states[u];if(h&&Um(h.state,o)){for(let v of p)c(v,gi(u));continue}let _=v=>v.reduce((m,M)=>M.seen>m.seen?M:m),b=p.filter(v=>v.worn&&t-v.seen<12e4),f=_(b.length?b:p),w=v=>t-v.seen<3e4&&t-f.seen<3e4&&v.since>=f.since-12e4,k=null;if(f.worn){let v=p.filter(M=>!M.worn&&M.room.id!==f.room.id&&w(M)),m=v.length?v.reduce((M,P)=>P.probability>M.probability?P:M):null;m&&t-f.since>=6e5&&m.since>f.since+12e4?(k=f,f=m):m&&m.probability>f.probability+.15&&(f=m)}let x=h?.attributes.friendly_name??f.name;l(f,{id:u,name:x,initials:Qd(x),picture:h?.attributes.entity_picture??null,color:gi(u),entity:f.entityId,tag:x.split(/\s+/)[0]});for(let v of p)v===f||v.room.id===f.room.id||v!==k&&(v.worn&&t-v.seen<12e4||w(v))||c(v,gi(u))}return r}var jm=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],qm=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function Zm(o,e){let n=[],[t,i]=Ae(e.points),r=(s,a)=>s.points.some((l,c)=>{let d=s.points[(c+1)%s.points.length],[u,p]=[d[0]-l[0],d[1]-l[1]],h=u*u+p*p||1,_=Math.max(0,Math.min(1,((a[0]-l[0])*u+(a[1]-l[1])*p)/h));return Math.hypot(l[0]+_*u-a[0],l[1]+_*p-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(_=>_.id===s.room_id);if(!a)continue;let l=a.points[s.edge],c=a.points[(s.edge+1)%a.points.length];if(!l||!c)continue;let d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[l[0]+(c[0]-l[0])*s.offset/d,l[1]+(c[1]-l[1])*s.offset/d];if(!r(e,u))continue;let p=o.rooms.find(_=>_.id!==e.id&&r(_,u)),h=.6/(Math.hypot(t-u[0],i-u[1])||1);n.push({to:p?In(p.name):null,spot:[u[0]+(t-u[0])*h,u[1]+(i-u[1])*h]})}return n}var Ym=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],In=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function Xm(o,e,n,t){let i=e.floors.find(c=>c.id===n);if(!i||!t.area_id)return[];let r=i.furniture.filter(c=>V([c.x,c.z],t.points)),s=Zm(i,t),a=[],l=new Set([...In(t.name),...In(o.areas?.[t.area_id]?.name??""),...In(t.area_id),...Ym]);for(let[c,d]of Object.entries(o.states)){if(!c.startsWith("binary_sensor.")||d.state!=="on")continue;let u=d.attributes.device_class;if(u!=="occupancy"&&u!=="presence"||ze(o,c)!==t.area_id)continue;let h=new Set(In(String(d.attributes.friendly_name??c.slice(14))).filter(w=>!l.has(w))),_=r.find(w=>w.name&&In(w.name).some(k=>h.has(k))||jm.some(([k,x])=>k.test(w.type.split(":").pop()??"")&&x.some(v=>h.has(v)))),b=_?null:s.find(w=>w.to?w.to.some(k=>h.has(k)):[...h].some(k=>qm.some(x=>k.includes(x)))),f=_?[_.x,_.z]:b?b.spot:null;f&&!a.some(([w,k])=>w===f[0]&&k===f[1])&&a.push(f)}return a}function eu(o,e,n,t){let i=new Map,r=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Go(o,ke(o,c.area_id)))W(d)==="light"&&a.add(d);for(let c of s.placements)W(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=n.get(c.id);if(!d)return!1;if(c.type==="garage")return(it(o,d,"garage").cover??1)<.95;if(c.type==="door")return r(d.contact)||r(d.contact2??null);let u=it(o,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:t.filter(c=>c.floorId===s.id).length})}return i}function tu(o,e){let n=[e.rooms===1?I(o,"floor_rooms_one"):I(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&n.push(I(o,"floor_lights",{n:e.lightsOn})),e.open&&n.push(I(o,"floor_open",{n:e.open})),e.persons&&n.push(I(o,"floor_persons",{n:e.persons})),n.join(" \xB7 ")}var Pt=(o,e)=>I(o,e);function be(o,e){if(!e||Z(e))return Pt(o,"state_unavailable");let n=e.attributes;switch(W(e.entity_id)){case"light":return e.state!=="on"?Pt(o,"state_off"):typeof n.brightness=="number"?`${Math.round(n.brightness/255*100)} %`:Pt(o,"state_on");case"switch":case"fan":return Pt(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof n.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${n.current_position} %`:vi(o,e.state);case"climate":{let t=typeof n.current_temperature=="number"?`${ie(o,n.current_temperature,1)} ${o?Le(o):"\xB0C"}`:null;return e.state==="off"?t?`${t} \xB7 ${Pt(o,"state_off")}`:Pt(o,"state_off"):t??vi(o,e.state)}case"media":{let t=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[n.app_name,n.media_title,n.source].find(r=>typeof r=="string"&&r);return t&&i?i:vi(o,e.state)}case"lock":case"camera":return vi(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(n.device_class)?Pt(o,e.state==="on"?"state_open":"state_closed"):Pt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let t=Number(e.state),i=n.unit_of_measurement??"",r=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(t)?`${ie(o,t,r)}${i?` ${i}`:""}`:e.state}default:return""}}function vi(o,e){let n=`state_${e}`,t=I(o,n);return t===n?e:t}function nu(o,e){let n=[],t=new Set(e.floors.flatMap(i=>i.furniture.map(r=>r.look_of).filter(r=>!!r)));for(let i of e.floors)for(let r of i.placements){let s=W(r.entity_id),a=o.states[r.entity_id];if(!s||!a)continue;let l=i.rooms.find(d=>d.points.length>=3&&V([r.x,r.z],d.points))??null,c=l?.area_id?o.areas?.[l.area_id]?.name:void 0;n.push({id:r.entity_id,floorId:i.id,roomId:l?.id??null,x:r.x,z:r.z,y:r.y??hn(s,i.height,r.mount??null),lamp:s==="light"?r.mount??"ceiling":null,model:s==="camera"?r.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...s==="camera"&&t.has(r.entity_id)?{ownLook:!0}:{},motion:s==="camera"?Qm(o,r.entity_id):void 0,fov:r.fov??void 0,reach:r.reach??void 0,tilt:r.tilt??void 0,rotation:r.rotation??0,icon:r.icon?Ze(r.icon):qt(s),cone:s==="camera"&&r.cone===!1?!1:void 0,name:r.name||G(o,r.entity_id,c),ownName:r.name||void 0,showName:!!r.show_name,text:be(o,a),active:He(a),unavailable:Z(a),glow:s==="light"?Ts(ot(a),r.glow_scale):null,show:r.marker??void 0,fixed:!!r.locked})}return n}function uo(o,e){let n=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(n)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(n)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(n)?"pet":"motion"}function Qm(o,e){return Ve(o,e).some(n=>o.states[n]?.state==="on")}var ou=new Map;function iu(o){ou=new Map(o?.floors.flatMap(e=>e.placements.filter(n=>Array.isArray(n.detect_sensors)).map(n=>[n.entity_id,n.detect_sensors]))??[])}function Ve(o,e){return ou.get(e)??Jm(o,e)}function Jm(o,e){let n=o.entities?.[e]?.device_id;return n?Object.values(o.entities??{}).filter(t=>t.device_id===n&&t.entity_id.startsWith("binary_sensor.")).map(t=>t.entity_id).filter(t=>["motion","occupancy","presence"].includes(String(o.states[t]?.attributes.device_class))):[]}function ru(o){return o.floors.flatMap(e=>e.placements.map(n=>n.entity_id))}function ve(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function su(o){let e=new Map;if(o.forEach((t,i)=>{if(t.pin===!1||!t.lamp&&W(t.id)!=="light"||t.id.startsWith("lamp:"))return;let r=`${t.floorId}:${t.id}`,s=e.get(r);s?s.push(i):e.set(r,[i])}),![...e.values()].some(t=>t.length>1))return o;let n=new Set;for(let t of e.values()){if(t.length<=1)continue;let i=t.reduce((l,c)=>l+o[c].x,0)/t.length,r=t.reduce((l,c)=>l+o[c].z,0)/t.length,s=t[0],a=1/0;for(let l of t){let c=Math.hypot(o[l].x-i,o[l].z-r);c<a&&(a=c,s=l)}n.add(s)}return o.map((t,i)=>{if(t.pin===!1||!t.lamp&&W(t.id)!=="light"||t.id.startsWith("lamp:"))return t;let r=e.get(`${t.floorId}:${t.id}`);return!r||r.length<=1||n.has(i)?t:{...t,pin:!1}})}function wi(o,e){let n=e.slice(0,e.indexOf("."));return o.callService(n,"toggle",{entity_id:e})}function Ts(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function yi(o,e,n){let{shown:t,more:i}=_n(o,e,n),r=(_,b)=>V([_,b],n.points),s=new Set(e.furniture.filter(_=>r(_.x,_.z)&&Zn(_.type)&&_.entity?.startsWith("switch.")).map(_=>_.entity)),a=[],l=[],c=[],d=[],u=[];for(let _ of new Set([...t,...i])){let b=o.states[_];if(!b||Z(b))continue;let f=_.split(".")[0];f==="light"&&b.state==="on"?a.push(_):f==="fan"&&b.state==="on"?l.push(_):f==="switch"&&b.state==="on"&&s.has(_)?c.push(_):f==="media_player"&&b.state!=="off"&&b.state!=="standby"&&(b.attributes.device_class==="tv"?d.push(_):b.state==="playing"&&u.push(_))}let p=[],h=(_,b,f)=>f.length&&p.push({domain:_,service:b,data:{entity_id:f}});return h("light","turn_off",a),h("fan","turn_off",l),h("switch","turn_off",c),h("media_player","turn_off",d),h("media_player","media_pause",u),p}function xi(o){return o.reduce((e,n)=>e+n.data.entity_id.length,0)}function ki(o,e){let n=e.cleaning;if(!n||!o.states[n])return null;let[t,i]=bn(n);return{domain:t,service:i,data:{entity_id:n}}}function au(o,e){if(!e)return null;for(let n of o){let t=n.rooms.find(i=>i.area_id===e);if(t)return{floor:n,room:t}}return null}var eg=4,tg=3e3,ng=8,og=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],ig=o=>g`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Pn(o)} />
  </svg>`,$i={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},As=o=>g`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,Rs=class extends pe{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},walk:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},tg)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,n){return I(this.hass,e,n)}call(e,n,t){this.readOnly||this.hass.callService(e,n,t)}renderRoomActions(e){if(this.readOnly)return y;let n=ki(this.hass,e),t=this.floor?yi(this.hass,this.floor,e):[];if(!n&&!t.length)return y;let i=r=>r.forEach(s=>this.call(s.domain,s.service,s.data));return g`<div class="fp3d-rp-sheets">
      ${n?g`<button class="fp3d-rp-sheet" @click=${()=>i([n])}><span aria-hidden="true">🧹</span>${this.t("panel_clean")}</button>`:y}
      ${t.length?g`<button class="fp3d-rp-sheet" @click=${()=>i(t)}><span aria-hidden="true">⏻</span>${this.t("panel_everything_off",{n:xi(t)})}</button>`:y}
    </div>`}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return G(this.hass,e,this.areaName,!0)}nameButton(e){return g`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&ve(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,n,t){let i=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||t()};return g`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${n?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${Z(e)}
      @click=${i}
    ></button>`}renderHere(e){if(!this.building||!st("locate")||!_i(this.building))return y;let n=bi(this.hass,this.building).filter(t=>t.roomId===e.id);return n.length?g`<p class="fp3d-rp-facts fp3d-rp-here">
      ${n.map((t,i)=>g`${i?", ":""}<span style="color:${t.color}">●</span> ${t.name}`)}
    </p>`:y}render(){let e=this.room;if(!e||!this.hass)return y;let n=ke(this.hass,e.area_id),t=this.memo,{shown:i,more:r}=t&&t.entities===this.hass.entities&&t.floor===this.floor&&t.building===this.building&&t.room===e?t:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?_n(this.hass,this.floor,e,this.building?ui(this.building,e.id):[]):{shown:n,more:[]}},s=Br(this.hass,r).map(v=>v.primary),a=s.length,l=this._showAll?[...i,...s]:i,c=v=>l.filter(m=>v.includes(W(m))).map(m=>this.hass.states[m]).filter(m=>!!m),d=c(["light"]),u=c(["cover"]),p=c(["climate"]),h=c(["media"]),_=c(["switch","fan","lock"]),b=c(["sensor","binary"]),f=c(["camera"]);this.hasCameras=f.length>0;let w=c(["scene","script"]),k=this.facts(p),x=d.filter(v=>v.state==="on");return g`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${k.length?g`<p class="fp3d-rp-facts">${k.join(" \xB7 ")}</p>`:y}
          ${this.renderHere(e)}
          ${this.renderRoomActions(e)}
          ${this.readOnly?g`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:y}
          ${this.sheets?.length&&!this.readOnly?g`<div class="fp3d-rp-sheets">
                ${this.sheets.map(v=>g`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:v.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${v.icon}</span>${v.title}
                  </button>`)}
              </div>`:y}
        </div>
        ${this.walk&&!this.readOnly&&e.points.length>=3?g`<button class="fp3d-rp-close fp3d-rp-walk" title=${this.t("walk_start")} aria-label=${this.t("walk_start")} @click=${()=>this.fire("walk-here")}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
            </button>`:y}
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?y:g`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:g`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(v=>this.lightRow(v)),g`${x.length<d.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(v=>!Z(v)).map(v=>v.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:y}${x.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:x.map(v=>v.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:y}`):y}
        ${u.length?this.section("panel_covers",u.map(v=>this.coverRow(v)),u.length>1?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"open")}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"close")}>
                      ${this.t("panel_all_close")}
                    </button>`:y):y}
        ${p.length?this.section("panel_climate",p.map(v=>this.climateRow(v))):y}
        ${h.length?this.section("panel_media",h.map(v=>this.mediaRow(v))):y}
        ${_.length?this.section("panel_switches",_.map(v=>this.switchRow(v))):y}
        ${f.length?this.section("panel_cameras",f.map(v=>this.cameraTile(v))):y}
        ${b.length?this.section("panel_sensors",b.map(v=>this.sensorRow(v))):y}
        ${w.length?this.section("panel_scenes",[g`<div class="fp3d-rp-scenes">
                  ${w.map(v=>g`<button
                      class="fp3d-btn"
                      ?disabled=${Z(v)}
                      @click=${()=>this.call(W(v.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:v.entity_id})}
                    >
                      ${this.name(v.entity_id)}
                    </button>`)}
                </div>`]):y}
        ${a?g`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:y}
      </div>
    </section>`}facts(e){let n=[],t=this.room,i=(l,c)=>{let d=We(this.hass,this.floor,t,l);if(d===null)return null;if(l==="temperature")return`${ie(this.hass,bt(this.hass,d),1)} ${Le(this.hass)}`;let u=Dr(this.hass,this.floor,t,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${ie(this.hass,d,1)} ${p}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?n.push(s):r&&t.climate?.temperature!=="none"&&n.push(`${ie(this.hass,r.attributes.current_temperature,1)} ${Le(this.hass)}`);let a=i("humidity","%");return a&&n.push(a),n}section(e,n,t=y){return g`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${t}</div>
      ${n}
    </div>`}rowIcon(e,n){let t=this.floor,i=t?.furniture.find(s=>s.icon&&(s.entity===n||s.fan===n))?.icon??t?.placements.find(s=>s.icon&&s.entity_id===n)?.icon;if(!i)return ig(e);let r=i.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"");return g`<ha-icon icon=${`mdi:${r}`} style="--mdc-icon-size:18px"></ha-icon>`}lightRow(e){let n=e.attributes,t=e.state==="on",i=n.supported_color_modes??[],r=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof n.brightness=="number"?Math.round(n.brightness/255*100):100,c=n.min_color_temp_kelvin??2200,d=n.max_color_temp_kelvin??6500,u=e.entity_id;return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t?"fp3d-rp-on":""}">${this.rowIcon("light",u)}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,t,()=>this.call("light","toggle",{entity_id:u}))}
      ${t&&r?g`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:y}
      ${t&&s?g`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(n.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:y}
      ${t&&a?g`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${og.map(p=>g`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:y}
    </div>`}covers(e,n){let t=e.filter(i=>!Z(i)).map(i=>i.entity_id);for(let i of Ko(this.hass,t,n))this.call("cover",i.service,i.data)}coverRow(e){let n=e.attributes,t=n.supported_features??0,i=e.entity_id,r=Z(e);return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${this.rowIcon("cover",e.entity_id)}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"open")}>${this.t("cover_open")}</button>
        ${t&ng||t&64&&!(t&3)?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.covers([e],"stop")}>${this.t("cover_stop")}</button>`:y}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"close")}>${this.t("cover_close")}</button>
      </div>
      ${t&eg&&typeof n.current_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(n.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:y}
      ${t&128&&typeof n.current_tilt_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(fn(e,no(this.building,i))??0)}
              @change=${s=>{let a=Number(s.target.value);this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:no(this.building,i)?100-a:a})}}
          /></label>`:Vo(this.hass?.states[i])?g`<div class="fp3d-rp-buttons">
              ${t&16?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:y}
              ${t&32?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:y}
            </div>`:y}
    </div>`}climateRow(e){let n=e.attributes,t=e.entity_id,i=typeof n.temperature=="number"?n.temperature:null,r=n.target_temp_step??.5,s=n.min_temp??5,a=n.max_temp??30,l=n.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:t,temperature:Math.min(a,Math.max(s,Math.round(d/r)*r))});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n.hvac_action==="heating"?"fp3d-rp-on":""}">${this.rowIcon("climate",e.entity_id)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?g`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ie(this.hass,i,1)} ${Le(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+r)}>+</button>
          </div>`:y}
      ${l.length>1?g`<div class="fp3d-rp-chips">
            ${l.map(d=>g`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:t,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:y}
    </div>`}stateOf(e,n=be(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let t=W(e.entity_id);return e.state==="unknown"&&t!=="sensor"&&t!=="binary"?"":n}stateLabel(e){let n=`state_${e}`,t=this.t(n);return t===n?e:t}mediaRow(e){let n=e.attributes,t=e.entity_id,i=Z(e)||e.state==="off",r=[n.media_title,n.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${this.rowIcon("media",e.entity_id)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?g`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:y}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:t})}>
          ${As($i.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${Z(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:t})}>
          ${As(e.state==="playing"?$i.pause:$i.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:t})}>
          ${As($i.next)}
        </button>
      </div>
      ${typeof n.volume_level=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(n.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:t,volume_level:Number(s.target.value)/100})}
          /></label>`:y}
    </div>`}switchRow(e){let n=e.entity_id,t=W(n),i=n.slice(0,n.indexOf(".")),r=t==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>t==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:n}):this.call(i,"toggle",{entity_id:n});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${this.rowIcon(t,n)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){let n=e.attributes.entity_picture,t=n&&!Z(e)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return g`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&ve(this,e.entity_id)}>
        ${t?g`<img src=${t} alt=${this.name(e.entity_id)} loading="lazy" />`:g`<span class="fp3d-rp-note">${be(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i&&K("camera_cockpit")?g`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${this.t("through_camera")}
          </button>`:y}
    </div>`}sensorRow(e){let n=W(e.entity_id),t=n==="binary"&&e.state==="on";return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t?"fp3d-rp-on":""}">${this.rowIcon(n,e.entity_id)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Me,Te,ge`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      /* time travel: the controls show the past and take no touches (the list still scrolls) */
      .fp3d-rp-ro .fp3d-rp-body :is(button, input, select) {
        pointer-events: none;
      }
      .fp3d-rp-ro-note {
        color: #ffb020;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      .fp3d-rp-sheets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-rp-sheet {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 32px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 12%, transparent);
        color: inherit;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
      }
      .fp3d-rp-sheet:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-walk {
        margin-right: 6px;
        color: #37e0ff;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Rs);function lu(o,e,n,t,i=!1){let r=s=>{let a=s?.value.trim();!s||!a||(s.value="",t([...o,a]))};return g`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${n.label}>
    ${n.label}
    ${o.map((s,a)=>g`<div class="fp3d-lines-row">
        <span>${s}</span>
        <button type="button" title=${n.remove} aria-label=${`${n.remove}: ${s}`} ?disabled=${e} @click=${()=>t(o.filter((l,c)=>c!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${n.placeholder}
        aria-label=${n.placeholder}
        ?disabled=${e}
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),r(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${s=>r(s.currentTarget.previousElementSibling)}>
        ${n.add}
      </button>
    </div>
  </div>`}var rg="#ff3fb4";function du(o){let e=String(o??"").split(/\s*(?:\||\n)\s*/).map(n=>n.trim().slice(0,40)).filter(Boolean).slice(0,2);return e.length?e:["Neon"]}function cu(o){return!o||!/^#[0-9a-f]{6}$/i.test(o)?null:[1,3,5].map(e=>parseInt(o.slice(e,e+2),16)/255)}function uu(o,e,n){let t=cu(o.sign_color)??cu(rg);if(!n)return{on:!0,color:t,level:1};if(!e)return{on:!1,color:t,level:0};if(e.entity_id.split(".")[0]==="light"){let s=ot(e);if(!s)return{on:!1,color:t,level:0};let a=e.attributes.color_mode;return{on:!0,color:Array.isArray(e.attributes.rgb_color)&&a!=="color_temp"&&a!=="brightness"&&a!=="onoff"&&a!=="white"?s.color:t,level:s.level}}let r=["on","open","home","playing","heat","cool","auto"].includes(e.state);return{on:r,color:t,level:r?1:0}}var po=new Map;function pu(o,e,n,t,i){let r=Math.min(8,Math.max(.25,Number.isFinite(i)&&i>0?i:3)),s=n?Math.round(Math.min(1,Math.max(.2,t))*10)/10:0,a=`${o.join(`
`)}|${e.map(v=>Math.round(v*32)).join(",")}|${s}|${r.toFixed(2)}`,l=po.get(a);if(l)return l;if(typeof document>"u")return null;let c=r>=1?1024:Math.round(1024*r),d=r>=1?Math.round(1024/r):1024,u=document.createElement("canvas");u.width=c,u.height=d;let p=u.getContext("2d");if(!p)return null;let h="'Dancing Script', 'Segoe Script', 'Brush Script MT', 'Comic Sans MS', cursive";p.font=`600 100px ${h}`;let _=Math.max(...o.map(v=>p.measureText(v).width),1),b=Math.max(12,Math.min(c*.86*100/_,d*.78/(o.length*1.15)));p.font=`600 ${b}px ${h}`,p.textAlign="center",p.textBaseline="middle",p.lineJoin="round";let f=(v,m,M=1)=>`rgba(${v.map(P=>Math.round(Math.min(1,Math.max(0,P*m))*255)).join(",")},${M})`,w=e.map(v=>v+(1-v)*.65),k=d/2-(o.length-1)*b*1.15/2;o.forEach((v,m)=>{let M=k+m*b*1.15;n?(p.shadowColor=f(e,1),p.shadowBlur=b*.45*s,p.strokeStyle=f(e,1,.55*s),p.lineWidth=b*.12,p.strokeText(v,c/2,M),p.shadowBlur=b*.2*s,p.fillStyle=f(w,.55+.45*s),p.fillText(v,c/2,M)):(p.shadowBlur=0,p.fillStyle=f(e.map(P=>.12+P*.22),1),p.fillText(v,c/2,M))});let x=u.toDataURL("image/png");return po.size>40&&po.delete(po.keys().next().value),po.set(a,x),x}var Ce=.03,Si=o=>o&&o!=="none"?o:null;function zn(o,e=n=>Si(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let t of o.floors)for(let i of t.furniture){let r=e(i);if(i.type==="meter")n.grid??=r,n.gridExport??=Si(i.export);else if(i.type==="inverter"&&r&&!n.solar.includes(r))n.solar.push(r);else if(i.type==="home_battery"){r&&!n.battery.includes(r)&&n.battery.push(r);let s=Si(i.charge);s&&!n.charge.includes(s)&&n.charge.push(s),(r||s)&&n.batteries.push({power:r,charge:s});let a=Si(i.soc);a&&!n.soc.includes(a)&&n.soc.push(a)}}return n}function Hs(o){if(sg(o))return o.energy.meter;for(let e of o.floors){let n=e.furniture.find(t=>t.type==="meter");if(n)return{floor_id:e.id,x:n.x,z:n.z}}return o.energy.meter}function sg(o){let e=o.energy.meter;return!!o.energy.hub_point&&!!e&&o.floors.some(n=>n.id===e.floor_id)}async function vu(o,e){let n=new Date;n.setHours(0,0,0,0);try{let t=await o.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),i=new Map;for(let r of e)i.set(r,(t?.[r]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return i}catch{return null}}var wu=.07;function ce(o,e=!1){if(!o)return null;let n=Number(o.state);if(!Number.isFinite(n))return null;let t=String(o.attributes.unit_of_measurement??"W"),i=t==="kW"?n*1e3:t==="MW"?n*1e6:n;return e?-i:i}function ag(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function go(o,e){if(ag(o,e))return e;if(e.startsWith("binary_sensor."))return null;let n=o.entities?.[e]?.device_id;if(!n)return null;let t=$c(o,n),i=ze(o,e),r=Or(o,n).filter(l=>l!==e),s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(r.includes(s))return s;let a=r.find(l=>i!==null&&ze(o,l)===i);return a||t?a??null:r.find(l=>i===null||ze(o,l)===null||ze(o,l)===i)??null}function yu(o,e){let n=e.energy,t=new Set([n.grid,n.solar,n.battery].filter(Boolean)),i=[],r=new Set;for(let s of e.floors)for(let a of s.placements){let l=go(o,a.entity_id);!l||t.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ce(o.states[l])??0)}))}return i}function Ii(o,e,n){let t=(e.settings.roof.strings??[]).filter(i=>(n===void 0||i.inverter===n)&&i.entity&&i.entity!=="none").map(i=>ce(o.states[i.entity])).filter(i=>i!==null);return t.length?t.reduce((i,r)=>i+Math.max(0,r),0):null}function Ei(o,e){return e===null?o:o===null||Math.max(0,o)<5&&e>50?e:o}function xu(o,e,n,t=zn(e)){let i=e.energy,r=i.grid??t.grid,s=r?ce(o.states[r],i.grid_invert):null;if(!i.grid&&t.gridExport){let b=Math.max(0,ce(o.states[t.gridExport])??0);s=Math.max(0,s??0)-b}let a=i.solar?ce(o.states[i.solar]):null;if(!i.solar&&t.solar.length){let b=t.solar.map(f=>ce(o.states[f])).filter(f=>f!==null);a=b.length?b.reduce((f,w)=>f+w,0):null}a=Ei(a,Ii(o,e));let l=i.battery?ce(o.states[i.battery],i.battery_invert):null;if(!i.battery&&t.batteries.length){let b=t.batteries.map(f=>{if(f.charge){let w=f.power?Math.max(0,ce(o.states[f.power])??0):0,k=Math.max(0,ce(o.states[f.charge])??0);return w-k}return f.power?ce(o.states[f.power],i.battery_invert):null}).filter(f=>f!==null);l=b.length?b.reduce((f,w)=>f+w,0):null}let d=(i.battery_soc?[i.battery_soc]:t.soc).map(b=>Number(o.states[b]?.state)).filter(b=>Number.isFinite(b)),u=d.length?d.reduce((b,f)=>b+f,0)/d.length:NaN,p=i.tariff?o.states[i.tariff]:void 0,h=Number(p?.state),_=i.consumption?ce(o.states[i.consumption]):null;return _!==null?_=Math.max(0,_):s!==null||a!==null||l!==null?_=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):n.length&&(_=n.reduce((b,f)=>b+f.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:_}}function Zt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function It(o,e,n){let t=Math.hypot(o.pos[e][0]-o.pos[n][0],o.pos[e][1]-o.pos[n][1]);o.adj[e].push({to:n,w:t}),o.adj[n].push({to:e,w:t})}function lg(o,e){let n=o.length,t=o.map((i,r)=>{let s=o[(r+1)%n],a=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[i[0]+d*e[r],i[1]+u*e[r]],d:[a/c,l/c],n:[d,u]}});return o.map((i,r)=>{let s=t[(r-1+n)%n],a=t[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function cg(o){return De(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Cs(o,e,n){let t={pos:[],adj:[],rings:new Map},{walls:i}=$t(o.rooms,{exterior:e,interior:n},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=cg(r),l=s.length,c=s.map((p,h)=>{let _=a?(l-2-h+l)%l:h,b=i.some(f=>!f.exterior&&f.sources.some(w=>w.room_id===r.id&&w.edge===_));return wu+(b?n/2:0)}),d=lg(s,c).map(p=>Zt(t,p)),u=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of u)It(t,p,h);t.rings.set(r.id,u)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=fo(t,r.roomLeft,s),l=fo(t,r.roomRight,s);a!==null&&l!==null&&It(t,a,l)}return ug(t),t}var dg=1;function ug(o){let e=[...o.rings.entries()];for(;;){let n=new Array(o.pos.length).fill(-1),t=0;for(let s=0;s<o.pos.length;s++){if(n[s]>=0)continue;let a=[s];for(n[s]=t;a.length;)for(let{to:l}of o.adj[a.pop()])n[l]<0&&(a.push(l),n[l]=t);t++}if(t<2)return;let i=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,c]of e)if(n[c[0][0]]!==n[a])for(let[d,u]of c){let p=o.pos[a],h=o.pos[d],_=o.pos[u],b=_[0]-h[0],f=_[1]-h[1],w=Math.min(1,Math.max(0,((p[0]-h[0])*b+(p[1]-h[1])*f)/(b*b+f*f||1))),k=Math.hypot(p[0]-h[0]-b*w,p[1]-h[1]-f*w);(!i||k<i.d)&&(i={a,room:l,d:k})}if(!i||i.d>dg+2*wu)return;let r=fo(o,i.room,o.pos[i.a]);if(r===null)return;It(o,i.a,r)}}function fo(o,e,n){let t=o.rings.get(e);if(!t)return null;let i=null;for(let s of t){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((n[0]-a[0])*c+(n[1]-a[1])*d)/u)),h=[a[0]+c*p,a[1]+d*p],_=Math.hypot(n[0]-h[0],n[1]-h[1]);(!i||_<i.d)&&(i={seg:s,q:h,d:_})}if(!i)return null;let r=Zt(o,i.q);return It(o,r,i.seg[0]),It(o,r,i.seg[1]),r}function Mi(o,e,n){let t=o.pos[n],i=fo(o,e.id,t);if(i===null)return!1;let r=o.pos[i],s=o.pos[o.adj[i][0].to],a=o.pos[o.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(t[0]-r[0])*c[0]+(t[1]-r[1])*c[1],u=(t[1]-r[1])*c[0]-(t[0]-r[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return It(o,n,i),!0;let p=[r[0]+c[0]*d,r[1]+c[1]*d],h=[r[0]-c[1]*u,r[1]+c[0]*u],_=Zt(o,V(h,e.points)||!V(p,e.points)?h:p);return It(o,i,_),It(o,_,n),!0}function mo(o,e){let n=o.rooms.filter(r=>r.points.length>=3),t=n.find(r=>V(e,r.points));if(t)return t;let i=null;for(let r of n)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function ku(o,e){let n=o.pos.map(()=>1/0),t=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(n[e]=0;;){let r=-1;for(let s=0;s<n.length;s++)!i[s]&&n[s]<1/0&&(r<0||n[s]<n[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])n[r]+a<n[s]-1e-9&&(n[s]=n[r]+a,t[s]=r)}return{dist:n,prev:t}}function hu(o,e){return o.every(n=>e[n].kind==="battery")?"battery":o.every(n=>e[n].kind==="wallbox")?"wallbox":"consumer"}var fu=new WeakMap;function pg(o,e){let n=Hs(o),t=o.floors.find(d=>d.id===n.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===t.id)continue;let u=d.elevation>t.elevation,p=l.get(d.id),h=hu(p,e);i.push({floorId:t.id,a:[n.x,Ce,n.z],b:[n.x,u?t.height:-.2,n.z],dist:0,members:p,kind:h});let _=Math.abs(d.elevation-t.elevation);i.push({floorId:d.id,a:[n.x,u?-.2:d.height,n.z],b:[n.x,Ce,n.z],dist:_,members:p,kind:h}),a.set(d.id,_+.25)}for(let d of c){let u=Cs(d,r,s),p=mo(d,[n.x,n.z]);if(!p)continue;let h=Zt(u,[n.x,n.z]);if(!Mi(u,p,h))continue;let _=[];for(let x of l.get(d.id)){let v=e[x],m=mo(d,[v.x,v.z]);if(!m)continue;let M=Zt(u,[v.x,v.z]);Mi(u,m,M)&&_.push({node:M,member:x})}let{dist:b,prev:f}=ku(u,h),w=new Map;for(let x of _)if(Number.isFinite(b[x.node]))for(let v=x.node;f[v]>=0;v=f[v]){let m=f[v],M=`${m}>${v}`,P=w.get(M)??{a:m,b:v,members:[]};P.members.push(x.member),w.set(M,P)}let k=a.get(d.id)??0;for(let{a:x,b:v,members:m}of w.values()){let M=u.pos[x],P=u.pos[v],z=hu(m,e);i.push({floorId:d.id,a:[M[0],Ce,M[1]],b:[P[0],Ce,P[1]],dist:k+b[x],members:m,kind:z})}}return i}function $u({building:o,consumers:e,summary:n,battery:t,fieldPower:i,devicePower:r}){let s=Hs(o);if(!s)return[];let a=o.floors.find(A=>A.id===s.floor_id);if(!a)return[];let l=A=>r?.get(A),c=Fs(o,"inverter"),d=Fs(o,"home_battery");!d.length&&t&&d.push({id:"battery",type:"home_battery",floorId:t.floorId,x:t.x,z:t.z,h:1.1,variant:null});let u=A=>{let $=null;for(let E of c)E.floorId===A.floorId&&(!$||Math.hypot(E.x-A.x,E.z-A.z)<Math.hypot($.x-A.x,$.z-A.z))&&($=E);return $},p=A=>l(A.id)??(d.length===1?n.battery??0:0),h=new Map;for(let A of d){let $=u(A);$&&h.set(A.id,$)}let _=e.map(A=>({floorId:A.floorId,x:A.x,z:A.z,kind:A.wallbox?"wallbox":"consumer",power:A.power}));for(let A of d)!h.has(A.id)&&n.battery!==null&&_.push({floorId:A.floorId,x:A.x,z:A.z,kind:"battery",power:Math.abs(p(A))});let b=`${s.floor_id}:${s.x},${s.z}|${_.map(A=>`${A.floorId}:${A.x},${A.z}:${A.kind}`).join(";")}`,f=fu.get(o);f||fu.set(o,f=new Map);let w=f.get(b);w||(w=pg(o,_),f.clear(),f.set(b,w));let k=w.map(A=>({floorId:A.floorId,a:A.a,b:A.b,dist:A.dist,power:A.members.reduce(($,E)=>$+_[E].power,0),kind:A.kind})),x=n.grid!==null?Pi(o):null,v=o.settings.roof.cables??[],m=A=>v.find($=>$.id===A),M=(A,$)=>A.map(E=>({...E,key:$}));if(x){let A=n.grid>=0,$=m("grid"),E=$?ho(o,$,[x.end[0],a.elevation+Math.max(Ce,x.height),x.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...x.height>.05?[[x.end[0],x.height,x.end[1]]]:[],[x.end[0],Ce,x.end[1]],[x.wall[0],Ce,x.wall[1]],[s.x,Ce,s.z]],H=$?En(o,A?E:[...E].reverse(),Math.abs(n.grid),A?"grid":"export",a):Mu(a.id,A?E:[...E].reverse(),Math.abs(n.grid),A?"grid":"export",0);k.push(...M(H,"grid"))}if(n.battery!==null&&n.battery>0)for(let A of k)A.kind==="battery"&&([A.a,A.b]=[A.b,A.a]);let P=o.settings.roof.solar??[],z=o.settings.roof.strings??[],R=new Map;if(i&&P.length){let A=[...Mt(o),...co(o)];for(let $ of P){let E=i.get($.id)??0,H=$.string?z.find(L=>L.id===$.string)?.inverter:null,D=H?d.find(L=>L.id===H)??null:null,F=H&&!D?c.find(L=>L.id===H)??null:null;if(D){let L=h.get(D.id);L&&R.set(L.id,(R.get(L.id)??0)+E);let se=D.variant==="wall"?.5+D.h:.9,te=m(`solar:${$.id}`),xe=te?_u(o,$):null,Fe=o.floors.find(Tt=>Tt.id===D.floorId);te&&xe&&Fe?k.push(...M(En(o,ho(o,te,xe,[D.x,Fe.elevation+se,D.z]),E,"solar",Fe),`solar:${$.id}`)):k.push(...M(bu(o,$,E,D,se),`solar:${$.id}`));continue}if(!F&&c.length){let L=Gt(o,$,A),se=L?Nd(L,$):[$.u,$.v];F=c.reduce((te,xe)=>!te||Math.hypot(xe.x-se[0],xe.z-se[1])<Math.hypot(te.x-se[0],te.z-se[1])?xe:te,null)}F&&R.set(F.id,(R.get(F.id)??0)+E);let j=F??{floorId:s.floor_id,x:s.x,z:s.z},q=F?1.1+F.h:1.5,B=m(`solar:${$.id}`),O=B?_u(o,$):null,Q=o.floors.find(L=>L.id===j.floorId);B&&O&&Q?k.push(...M(En(o,ho(o,B,O,[j.x,Q.elevation+q,j.z]),E,"solar",Q),`solar:${$.id}`)):k.push(...M(bu(o,$,E,j,q),`solar:${$.id}`))}}else n.solar!==null&&!c.length&&k.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Ce,s.z+.08],dist:0,power:n.solar,kind:"solar"});for(let A of c){let $=1.1+A.h,E=d.filter(F=>h.get(F.id)===A),H=l(A.id);if(H===void 0){H=R.get(A.id)??(c.length===1?n.solar??0:0);for(let F of E)H+=p(F)}let D=o.floors.find(F=>F.id===A.floorId);if(n.solar!==null||n.battery!==null){let F=m(`inv:${A.id}`),j=hg(o,A.id)?Pi(o):null,q=j?{floorId:j.floorId,x:j.end[0],z:j.end[1],y:Math.max(Ce,j.height)}:{floorId:s.floor_id,x:s.x,z:s.z,y:1.5},B=j?o.floors.find(Q=>Q.id===j.floorId)??a:a,O=F&&D?En(o,ho(o,F,[A.x,D.elevation+$,A.z],[q.x,B.elevation+q.y,q.z]),Math.max(0,H),"inverter",D):gu(o,A,$,q,q.y,Math.max(0,H),"inverter",0);k.push(...M(O,`inv:${A.id}`))}for(let F of E){let j=p(F);if(n.battery===null&&l(F.id)===void 0)continue;let q=F.variant==="wall"?.5+F.h:.9,B=m(`bat:${F.id}`),O=B&&D?En(o,ho(o,B,[A.x,D.elevation+$-.1,A.z],[F.x,D.elevation+q,F.z]),Math.abs(j),"battery",D):gu(o,A,$-.1,F,q,Math.abs(j),"battery",0);k.push(...M(j<=0?O:O.map(Q=>({...Q,a:Q.b,b:Q.a})).reverse(),`bat:${F.id}`))}}return k}function Pi(o){let e=Hs(o),n=e?o.floors.find(h=>h.id===e.floor_id):void 0;if(!e||!n)return null;let{wall_exterior:t,wall_interior:i}=o.settings,{walls:r}=$t(n.rooms,{exterior:t,interior:i},n.walls??[]),s=Fs(o,"grid_point")[0],a=r.filter(h=>h.exterior);if(s){let h=null;for(let f of a){let w=f.b[0]-f.a[0],k=f.b[1]-f.a[1],x=s.x-e.x,v=s.z-e.z,m=x*k-v*w;if(Math.abs(m)<1e-9)continue;let M=((f.a[0]-e.x)*k-(f.a[1]-e.z)*w)/m,P=((f.a[0]-e.x)*v-(f.a[1]-e.z)*x)/m;if(M<=0||M>1||P<0||P>1||h&&M>=h.t)continue;let z=Math.hypot(w,k)||1;h={q:[e.x+x*M,e.z+v*M],out:[k/z,-w/z],t:M}}let _=h?[h.q[0]+h.out[0]*(t/2+.05),h.q[1]+h.out[1]*(t/2+.05)]:[e.x,e.z],b=o.floors.flatMap(f=>f.furniture).find(f=>f.id===s.id)?.mount_y??0;return{floorId:n.id,wall:_,end:[s.x,s.z],height:Math.max(0,b)}}let l=null;for(let h of a){let _=h.b[0]-h.a[0],b=h.b[1]-h.a[1],f=_*_+b*b||1,w=Math.min(1,Math.max(0,((e.x-h.a[0])*_+(e.z-h.a[1])*b)/f)),k=[h.a[0]+_*w,h.a[1]+b*w],x=Math.hypot(e.x-k[0],e.z-k[1]),v=Math.sqrt(f);(!l||x<l.d)&&(l={q:k,out:[b/v,-_/v],d:x})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let h of o.floors)for(let _ of h.outdoor??[]){let b=_.points.length;for(let f=0;f<b;f++){let w=_.points[f],k=_.points[(f+1)%b],x=k[0]-w[0],v=k[1]-w[1],m=d[0]*v-d[1]*x;if(Math.abs(m)<1e-9)continue;let M=((w[0]-c[0])*v-(w[1]-c[1])*x)/m,P=((w[0]-c[0])*d[1]-(w[1]-c[1])*d[0])/m;M>0&&P>=0&&P<=1&&(u=Math.max(u,Math.min(15,M)))}}let p=u>t+1?u:t+2.5;return{floorId:n.id,wall:[c[0]+d[0]*(t/2+.05),c[1]+d[1]*(t/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function hg(o,e){return o.floors.some(n=>n.furniture.some(t=>t.id===e&&t.type==="inverter"&&t.cable_to==="grid"))}function Fs(o,e){let n=[];for(let t of o.floors)for(let i of t.furniture)i.type===e&&n.push({id:i.id,type:i.type,floorId:t.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return n}var mu=new WeakMap;function Su(o,e,n,t){let i=`${e.id}:${n.join(",")}>${t.join(",")}`,r=mu.get(o);r||mu.set(o,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=Cs(e,a,l),d=[n,t],u=mo(e,n),p=mo(e,t);if(u&&p){let h=Zt(c,n),_=Zt(c,t);if(Mi(c,u,h)&&Mi(c,p,_)){let{dist:b,prev:f}=ku(c,h);if(Number.isFinite(b[_])){d.length=0;for(let w=_;w>=0;w=f[w])d.unshift(c.pos[w])}}}return r.set(i,d),d}function gu(o,e,n,t,i,r,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==t.floorId)return[];let c=Su(o,l,[e.x,e.z],[t.x,t.z]),d=[[e.x,n,e.z],...c.map(u=>[u[0],Ce,u[1]]),[t.x,i,t.z]];return Mu(l.id,d,r,s,a)}function Mu(o,e,n,t,i){let r=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(r.push({floorId:o,a,b:l,dist:i,power:n,kind:t}),i+=c)}return r}function ho(o,e,n,t){let r=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Ce,e.height);return[n,...e.points.map(s=>[s[0],r,s[1]]),t]}function _u(o,e){let n=Gt(o,e,[...Mt(o),...co(o)]);if(!n)return null;let[t,i]=jt(n,e),r=e.u+t/2,s=n.unbounded?e.v+i/2:e.v;return[n.o[0]+n.eu[0]*r+n.es[0]*s,n.o[1]+n.eu[1]*r+n.es[1]*s,n.o[2]+n.eu[2]*r+n.es[2]*s]}function fg(o,e,n){let{wall_exterior:t,wall_interior:i}=o.settings,r=Cs(e,t,i),s=mo(e,n),a=s?fo(r,s.id,n):null;return a===null?n:r.pos[a]}function En(o,e,n,t,i){let r=[...o.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let u of r)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-d[1])>.01){let _=Math.min(d[1],u[1]),b=Math.max(d[1],u[1]);for(let f of r)f.elevation>_+.01&&f.elevation<b-.01&&h.push(f.elevation);u[1]<d[1]&&h.reverse()}for(let _ of[...h,u[1]]){let b=(_-d[1])/(u[1]-d[1]||1),f=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*b,_,d[2]+(u[2]-d[2])*b]:u,w=s((d[1]+f[1])/2),k=Math.hypot(f[0]-d[0],f[1]-d[1],f[2]-d[2]);k>1e-4&&a.push({floorId:w.id,a:[d[0],d[1]-w.elevation,d[2]],b:[f[0],f[1]-w.elevation,f[2]],dist:l,power:n,kind:t}),l+=k,d=f}}return a}function bu(o,e,n,t,i){let r=[...Mt(o),...co(o)],s=Gt(o,e,r),a=o.floors.find(f=>f.id===t.floorId);if(!s||!a)return[];let[l,c]=jt(s,e),d=(f,w)=>[s.o[0]+s.eu[0]*f+s.es[0]*w,s.o[1]+s.eu[1]*f+s.es[1]*w,s.o[2]+s.eu[2]*f+s.es[2]*w],u=e.u+l/2,p=a.elevation+Ce,h=[],_;if(s.unbounded){let f=d(u,e.v+c/2);_=[f[0],p,f[2]],h.push(_)}else if(s.wall){let f=d(u,e.v);_=[f[0],p,f[2]],h.push(f,_)}else{let f=d(u,e.v),w=xs(o)??a,k=Math.max(a.elevation+.5,Math.min(f[1]-.25,w.elevation+w.height-.12));_=[f[0],k,f[2]],h.push(f)}let b=fg(o,a,[_[0],_[2]]);h.push([b[0],_[1],b[1]]),Math.abs(_[1]-p)>.05&&h.push([b[0],p,b[1]]);for(let f of Su(o,a,b,[t.x,t.z]).slice(1))h.push([f[0],p,f[1]]);return h.push([t.x,a.elevation+i,t.z]),En(o,h,n,"solar",a)}function Pu(o,e=new Date){let n=new Date(e);n.setHours(0,0,0,0);let t=Math.max(1,Math.floor((e.getTime()-n.getTime())/3e5)+1),i=new Array(t).fill(0),r=-1;for(let a of Object.values(o))for(let l of a){let c=typeof l.start=="number"?l.start:Date.parse(l.start),d=Math.floor((c-n.getTime())/3e5);d<0||d>=t||typeof l.mean!="number"||(i[d]+=Math.max(0,l.mean),r=Math.max(r,d))}return i.length=Math.max(r+1,t-3,1),{kwh:i.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Iu(o,e){let n=new Date;n.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Ds(o,e){let t=l=>42-(e>0?l/e*36:0),i=o.map((l,c)=>[c/288*220,t(l)]),r=i.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Eu(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var mg=400;function zu(o,e){let n=new Map;for(let t of o.settings.roof.solar??[]){let i=Math.min(1,(e.get(t.id)??0)/(Eu(t)*(t.wp??mg)));n.set(t.id,i>.003?Math.pow(i,.6):0)}return n}function Tu(o,e,n){let t=new Map,i=e.settings.roof.solar??[],r=e.settings.roof.strings??[],s=Eu,a=[],l=0,c=new Map;for(let p of i){let h=p.entity&&p.entity!=="none"?ce(o.states[p.entity]):null;if(h!==null){t.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let _=p.string?r.find(f=>f.id===p.string):void 0,b=_?.entity&&_.entity!=="none"?ce(o.states[_.entity]):null;if(_&&b!==null){c.set(_.id,[...c.get(_.id)??[],p]);continue}a.push(p)}for(let[p,h]of c){let _=r.find(w=>w.id===p),b=Math.max(0,ce(o.states[_.entity])??0),f=h.reduce((w,k)=>w+s(k),0);for(let w of h)t.set(w.id,b*s(w)/f);l+=b}let d=Math.max(0,(n??0)-l),u=a.reduce((p,h)=>p+s(h),0);for(let p of a)t.set(p.id,u?d*s(p)/u:0);return t}var Ke={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Au(o,e){if(o==="grid")return Ke.import;if(o==="export")return Ke.export;if(o==="solar")return Ke.solar;if(o==="battery")return Ke.battery;if(o==="wallbox")return Ke.wallbox;if(o==="inverter")return(e.solar??0)>5?Ke.solar:Ke.battery;let n=[[Math.max(0,e.grid??0),Ke.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Ke.solar],[Math.max(0,e.battery??0),Ke.battery]],[t]=n.reduce((i,r)=>r[0]>i[0]?r:i);return t>0?n.find(i=>i[0]===t)[1]:Ke.house}var _o={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Os={natural:!0,signal:!0,shadows:!0,floors:1,cutDark:!0,sun:.45,ao:.45},Ti=[{id:"neon",base:"neon",group:"neon",aliases:["neon","standard"]},{id:"blueprint",base:"blueprint",group:"neon",aliases:["blueprint","bauplan","blaupause"]},{id:"day",base:"day",group:"neon",aliases:["tag","day","hell","light"]},{id:"focus",base:"neon",group:"neon",palette:{line:"#394150",dark:"#07090d",light:"#2c313a",hue:0,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#030407","#0b0e14"],aliases:["fokus","focus","nacht","night","dunkel","dark"]},{id:"synth",base:"neon",group:"neon",palette:{line:"#ff3fd2",dark:"#12051f",light:"#3a1460",hue:.2,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#08010f","#2a0838"],aliases:["synthwave","synth","retro","party"]},{id:"cozy",base:"day",group:"homely",...Os,palette:null,bg:["#f1efeb","#d9d5ce"],aliases:["wohnlich","gem\xFCtlich","cozy","homely","echt","real"]},{id:"evening",base:"neon",group:"homely",...Os,sun:.4,dim:.75,bg:["#14161c","#272630"],aliases:["wohnlich abend","abend","abendstimmung","evening","cozy evening"]},{id:"winter",base:"neon",group:"homely",...Os,sun:.4,dim:.8,bg:["#0b1322","#1d2a40"],aliases:["winterabend","winter","advent","weihnachten","christmas"]},{id:"model",base:"day",group:"designed",palette:{line:"#8a8f98",dark:"#cfcac2",light:"#fbfaf7",hue:.08,lift:.35,contrast:3.2},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#eeece8","#d6d2cb"],aliases:["architekturmodell","modell","model","architect","wei\xDF","white"]},{id:"pastel",base:"day",group:"designed",palette:{line:"#3b3f5c",dark:"#b7c4e6",light:"#fff4ea",hue:.55,lift:.3,contrast:3},signal:!0,sun:.25,ao:.2,shadows:!0,bg:["#f4efe8","#e3e7f2"],aliases:["pastell","pastel","bunt","kids"]},{id:"warm",base:"day",group:"designed",palette:{line:"#5a4632",dark:"#b0906c",light:"#f4ead9",hue:.15,lift:.3,contrast:3},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#f0e7d7","#d9cbb3"],aliases:["warm","holz","papier","holz und papier","wood","paper"]}],nv=Ti.map(o=>o.id),gg=new Map(Ti.map(o=>[o.id,o])),Ai=[];function Tn(o){Ai=(o??[]).filter(e=>e&&typeof e.id=="string"&&e.id.startsWith("my_")&&typeof e.name=="string").map(e=>({...e,group:"custom",aliases:[e.name]}))}function Yt(){return Ai.length?[...Ti,...Ai]:Ti}function Et(o){return o?gg.get(o)??Ai.find(e=>e.id===o):void 0}function Ls(o){let e=/^(\d{1,2}):(\d{2})$/.exec(o?.trim()??"");if(!e)return null;let n=Number(e[1]),t=Number(e[2]);return n<24&&t<60?n*60+t:null}function _g(o,e,n){let t=e.getHours()*60+e.getMinutes(),i=Ls(o?.style_morning_at)??420,r=Ls(o?.style_evening_at)??1080,s=Ls(o?.style_night_at)??1380,a=s>i?t>=s||t<i:t>=s&&t<i;return(o?.style_switch??"sun")==="sun"&&n!==null?n?"day":e.getHours()<12||a?"night":"evening":a?"night":t>=r?"evening":"day"}function zi(o){return o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"")}function Ri(o,e={}){if(!o)return null;let n=zi(o);if(!n)return null;for(let t of Yt())if(zi(t.id)===n||t.aliases.some(i=>zi(i)===n)||(e[t.id]??[]).some(i=>zi(i)===n))return t.id;return null}function Ru(o){let e=c=>Et(c)?c:null,n=e(o.override);if(n)return n;let t=Ri(o.entityState,o.names);if(t)return t;let i=o.choice||"neon";if(i==="auto")return o.sunUp===!1?"neon":o.sunUp===!0?"day":"neon";let r=(c,d,u,p)=>{let h=_g(p,o.now,o.sunUp);return h==="night"?u??d??c??"neon":h==="evening"?d??c??"neon":c??"neon"};if(i==="house"){let c=o.plan;return r(e(c?.style_day),e(c?.style_evening),e(c?.style_night),c)}let s=e(i)??"neon",a=e(o.evening),l=e(o.night);return a||l?r(s,a,l,o.plan):s}var Fi={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Fu(o,e){let n=Fi[o].stops;if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++){let[i,r]=n[t],[s,a]=n[t-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return n[n.length-1][1]}function Hu(o,e,n){let t=new Map;for(let i of e.floors)for(let r of i.rooms){let s=We(o,i,r,n);s!==null&&t.set(r.id,s)}return t}function Cu(o){let e=Fi[o].stops,n=e[0][0],t=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-n)/(t-n)*100)}%`).join(", ")})`}function we(o,e){if(!gt(e))return I(o,`furn_${e}`);let n=ye(e);return n?Ll(n,o?.language??navigator.language):I(o,"pack_missing_item")}var Ws=.06;function Ou(o,e,n){let t=n[0]-e[0],i=n[1]-e[1],r=Math.hypot(t,i)||1e-9,s=((o[0]-e[0])*t+(o[1]-e[1])*i)/r;return{off:Math.abs((o[0]-e[0])*i-(o[1]-e[1])*t)/r,at:s,len:r}}function Du(o,e){for(let n=0;n<e.length;n++){let t=Ou(o,e[n],e[(n+1)%e.length]);if(t.off<Ws&&t.at>-Ws&&t.at<t.len+Ws)return n}return-1}function bg(o,e,n){let t=o.points[e],i=o.points[(e+1)%o.points.length];if(!t||!i)return null;let r=Math.hypot(i[0]-t[0],i[1]-t[1])||1e-9;return[t[0]+(i[0]-t[0])*n/r,t[1]+(i[1]-t[1])*n/r]}function Hi(o,e){if(!o||!e?.length)return[];let n=new Set(o.floors.flatMap(t=>[...t.rooms.map(i=>i.id),...(t.outdoor??[]).map(i=>i.id)]));return e.filter(t=>n.has(t))}function Ci(o,e){o.settings.surroundings&&(o={...o,settings:{...o.settings,surroundings:null}});let n=new Set(e),t=o.settings.wall_interior??.12,i=[];for(let h of o.floors){let _=h.rooms.filter(P=>n.has(P.id)),b=(h.outdoor??[]).filter(P=>n.has(P.id));if(!_.length&&!b.length)continue;let f=[..._.map(P=>P.points),...b.map(P=>P.points)].filter(P=>P.length>=3),w=(P,z)=>f.some(R=>V([P,z],R)),k=h.rooms.filter(P=>!n.has(P.id)&&P.points.length>=3),x=_.map(P=>{let z=P.points.length,R=Array.from({length:z},($,E)=>P.wall_thickness?.[E]??null),A=!1;for(let $=0;$<z;$++){if(R[$]!==null)continue;let E=P.points[$],H=P.points[($+1)%z],D=[(E[0]+H[0])/2,(E[1]+H[1])/2];k.some(F=>Du(D,F.points)>=0)&&(R[$]=t,A=!0)}return A?{...P,wall_thickness:R}:P}),v=(h.walls??[]).filter(P=>w((P.a[0]+P.b[0])/2,(P.a[1]+P.b[1])/2)),m=new Set(v.map(P=>P.id)),M=[];for(let P of h.openings){if(P.wall){m.has(P.wall)&&M.push(P);continue}if(n.has(P.room_id)){M.push(P);continue}let z=h.rooms.find(A=>A.id===P.room_id),R=z?bg(z,P.edge,P.offset):null;if(R)for(let A of _){let $=Du(R,A.points);if($<0)continue;let E=Ou(R,A.points[$],A.points[($+1)%A.points.length]);M.push({...P,room_id:A.id,edge:$,offset:E.at,hinge:P.hinge==="left"?"right":"left",swing:P.swing==="in"?"out":"in"});break}}i.push({...h,rooms:x,outdoor:b,walls:v,openings:M,furniture:h.furniture.filter(P=>w(P.x,P.z)),placements:h.placements.filter(P=>w(P.x,P.z))})}let r=vg(o),s=o.settings.roof;if(s?.type==="custom"&&s.sections?.length){let h=new Set(i.map(w=>w.id)),_=s.sections,b=new Set(_.filter(w=>h.has(Rd(o,w)?.id??""))),f=_.filter(w=>b.has(w.dormer&&ys(_,w)||w));return f.length===_.length?{...o,floors:i}:{...o,floors:i,settings:{...o.settings,roof:f.length?{...s,sections:f}:{...s,type:"none"}}}}if(!(!s||s.type==="none"||r===null||i.some(h=>h.id===r)))return{...o,floors:i,settings:{...o.settings,roof:{...s,type:"none"}}};let c=s&&(s.type==="flat"||s.type==="gable")&&r!==null?(o.floors.find(h=>h.id===r)?.rooms??[]).filter(h=>h.points.length>=3):[];if(!c.length)return{...o,floors:i};let d=c.flatMap(h=>h.points.map(_=>_[0])),u=c.flatMap(h=>h.points.map(_=>_[1])),p=[Math.min(...d),Math.min(...u),Math.max(...d),Math.max(...u)];return{...o,floors:i,settings:{...o.settings,roof:{...s,frame:p}}}}function vg(o){return o.floors.filter(n=>n.rooms.some(t=>t.points.length>=3)).sort((n,t)=>t.elevation-n.elevation)[0]?.id??null}function wg(o,e){let n=o?.states[e.entity]?.state;if(n===void 0)return!1;let t=(e.state??"").trim(),i=t.startsWith("!");i&&(t=t.slice(1).trim());let r=t?t.split(",").map(l=>l.trim()).filter(Boolean):["on"],s=Number(n),a=r.some(l=>{let c=/^([<>]=?)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);if(c){if(!Number.isFinite(s)||n.trim()==="")return!1;let d=Number(c[2].replace(",","."));return c[1]==="<"?s<d:c[1]==="<="?s<=d:c[1]===">"?s>d:s>=d}return n.toLowerCase()===l.toLowerCase()});return i?!a:a}function Ns(o,e){return!e.show_if?.entity||wg(o,e.show_if)}function Bs(o,e){if(!e)return"";let n="";for(let t of e.floors)for(let i of t.furniture)i.show_if?.entity&&(n+=`${i.id}:${Ns(o,i)?1:0};`);return n}var Xt=o=>o?.settings?.winter??{},yg=o=>Al(o)>0;function Wu(o,e,n=new Date){let t=Xt(e);if(!K("fun_winter")||t.roof_lights===!1)return!1;if(t.roof_entity)return o.states[t.roof_entity]?.state==="on";let i=o.states["sun.sun"],r=i?i.state==="below_horizon":n.getHours()>=16||n.getHours()<7;return yg(n)&&r}var xg=new Set(["snowy","snowy-rainy"]),Lu="neonplan3d.winter_last_snow";function kg(o,e){let n=e?o.states[e]:void 0,t=n?.attributes.temperature;return typeof t!="number"?null:String(n.attributes.temperature_unit??"\xB0C").includes("F")?(t-32)*5/9:t}function Nu(o,e,n,t=Date.now(),i=$g()){if(!K("fun_winter")||Xt(e).snow===!1||!n)return 0;let r=o.states[n]?.state??"";if(xg.has(r)){try{i?.setItem(Lu,String(t))}catch{}return 1}let s=Number(i?.getItem(Lu)??0);if(!s||t-s>72*36e5)return 0;let a=kg(o,n);return a===null||a<=1?1:Math.max(0,1-(t-s)/(6*36e5))}function $g(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Bu(o,e){if(e<=0)return[];let n=[];for(let t of o.floors)for(let i of t.outdoor??[])i.type==="lawn"&&i.points.length>=3&&n.push({floorId:t.id,points:i.points,y:Wo(t,i)+Pr[i.type]+.025,color:[.93,.96,1],opacity:.78*e,...i.slope?{follow:{areaId:i.id,lift:.025}}:{}});return n}function Vu(o,e=new Date){if(!K("fun_winter")||Xt(o).firework===!1)return!1;if(typeof location<"u"&&new URLSearchParams(location.search).has("fp3d_firework"))return!0;let n=e.getMonth(),t=e.getDate(),i=e.getHours()*60+e.getMinutes();return n===11&&t===31&&i>=1439||n===0&&t===1&&i<10}var Oi=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Di(o){return o&&o!=="none"?o:null}function An(o,e){if(e.type!=="parking")return null;let n=Di(e.entity);if(n){let r=o.states[n];if(!r||!Oi.has(r.state.toLowerCase()))return null}let t=e.vehicle??null,i=Di(e.type_entity);if(i&&e.types?.length){let r=(o.states[i]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===r)??e.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(t=a.vehicle)}}return t&&ye(t)?t:null}function Vs(o,e){let n=new Map;for(let t of e.floors)for(let i of t.furniture){let r=An(o,i);r&&n.set(i.id,r)}return n}function Ku(o){return o.flatMap(e=>e.furniture.filter(n=>n.type==="parking").flatMap(n=>[Di(n.entity),Di(n.type_entity)])).filter(e=>!!e)}function Uu(o,e){let n=ye(e);if(!n)return null;let t=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:n.size[0]*t,d:n.size[1]*t,h:n.size[2]*t,variant:null,entity:null,power:null}}var bo=1800*1e3,Sg=new Set(["motion","occupancy","presence"]);function Gu(o,e){return e.startsWith("binary_sensor.")&&Sg.has(String(o.states[e]?.attributes.device_class))}function vo(o,e){let n=[],t=new Set,i=(r,s,a,l)=>{t.has(r)||(t.add(r),n.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(Gu(o,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(W(s.entity_id)==="camera")for(let a of Ve(o,s.entity_id))i(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ae(s.points);for(let c of ke(o,s.area_id))Gu(o,c)&&i(c,r.id,a,l)}return n}function ju(o,e,n,t=bo){let i=n-t,r=[];for(let[s,a]of Object.entries(o)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=i&&d<=n&&r.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=n)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function qu(o,e,n,t=bo){let i=new Map(o.map(s=>[s.entity,s])),r=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(n-s.time)/t))})}return r.slice(-40)}function Li(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit",...On(o)})}var Zu='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Wi=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Ni(o,e){let n=[],t=Nt(o,e.floors),i=e.floors.length>1;for(let r of e.floors){let s=(d,u)=>r.rooms.find(p=>p.points.length>=3&&V([d,u],p.points))??null,a=(d,u)=>[s(d,u)?.name,i?r.name:null].filter(Boolean).join(" \xB7 ");for(let d of r.rooms){if(d.points.length<3)continue;let[u,p]=Ae(d.points);n.push({kind:"room",name:d.name,where:i?r.name:"",floorId:r.id,roomId:d.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,c=(d,u,p,h)=>{l.has(d)||!o.states[d]||(l.add(d),n.push({kind:"device",name:G(o,d),where:a(u,p),floorId:r.id,roomId:s(u,p)?.id??null,entity:d,icon:W(d),x:u,z:p,y:h}))};for(let d of r.placements)c(d.entity_id,d.x,d.z,d.y??hn(W(d.entity_id)??"sensor",r.height,d.mount));for(let d of r.furniture){let u=t.get(d.id),p=u?.entity??u?.power;p&&c(p,d.x,d.z,Math.min(r.height-.3,Math.max(.5,d.h)))}}return n}function Yu(o,e,n=8){let t=Wi(e).split(/\s+/).filter(Boolean);if(!t.length)return[];let i=o.filter(a=>{let l=Wi(`${a.name} ${a.where} ${a.entity??""}`);return t.every(c=>l.includes(c))}),r=Wi(e.trim()),s=a=>(Wi(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,n)}var Ye=new Map,Ks=new Map,Xu=new Map;async function Mg(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function Pg(o,e){let n=await Mg(o,e.id);if(n.api!==1)return null;let t=URL.createObjectURL(new Blob([n.code],{type:"text/javascript"}));try{let r=(await import(t)).default;if(!r||r.api!==1||typeof r.id!="string")return null;let s=Xu.get(e.id);s&&URL.revokeObjectURL(s),Xu.set(e.id,t);let a={id:e.id,release:n.release,module:r};return Ye.set(e.id,a),a}catch(i){throw URL.revokeObjectURL(t),i}}async function Us(o,e){let n=new Map(e.filter(t=>t.module&&t.module.api===1&&t.module.approved===!0).map(t=>[t.id,t]));for(let t of[...Ye.keys()])n.has(t)||Ye.delete(t);await Promise.all([...n.values()].map(t=>{let i=Ye.get(t.id);if(i&&i.release===(t.release??1))return Promise.resolve(i);let r=Ks.get(t.id);return r||(r=Pg(o,t).catch(s=>(console.warn(`NeonPlan 3D: module ${t.id} did not load`,s),null)).finally(()=>Ks.delete(t.id)),Ks.set(t.id,r)),r}))}async function Qu(o,e){for(let n of Ye.values())if(n.module.voice)try{let t=await n.module.voice(o,e);if(t)return t}catch(t){console.warn(`NeonPlan 3D: module ${n.id} failed on "${o}"`,t)}return null}function Ju(o){return Jt(e=>e.scene?.(o))}function ep(o){return[...Ye.values()].flatMap(e=>e.module.popups?.(o)??[])}function tp(o){return Jt(e=>e.cards?.(o))}function np(o){return Jt(e=>e.alerts?.(o))}function op(o){return Jt(e=>e.watched?.(o))}function Gs(o,e){return Jt(n=>n.roomSheets?.(o,e))}function js(o){return Jt(e=>e.menuSheets?.(o))}function qs(){return[...Ye.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function ip(o,e){let n=Ye.get(o);if(!n?.module.settings)return[];try{return n.module.settings(e)??[]}catch(t){return console.warn(`NeonPlan 3D: module ${n.id} failed`,t),[]}}function rp(o){return Jt(e=>e.pools?.(o))}function Qt(){return Ye.size>0}function Jt(o){let e=[];for(let n of Ye.values())try{e.push(...o(n.module)??[])}catch(t){console.warn(`NeonPlan 3D: module ${n.id} failed`,t)}return e}function ap(o,e,n){let t=o.filter(l=>Number.isFinite(l));if(t.length<2)return"";let i=Math.min(...t),s=Math.max(...t)-i||1,a=l=>Math.round(l*10)/10;return t.map((l,c)=>`${a(c/(t.length-1)*e)},${a(n-1-(l-i)/s*(n-2))}`).join(" ")}function sp(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let n=Math.min(1,Math.max(0,e))*(o.length-1),t=Math.min(o.length-2,Math.floor(n)),i=n-t,[r,s]=[o[t],o[t+1]];return[r[0]+(s[0]-r[0])*i,r[1]+(s[1]-r[1])*i,r[2]+(s[2]-r[2])*i]}function lp(o){let e=[];for(let n of o){let t=n.points;if(t.length<2)continue;let i=[],r=0;for(let l=1;l<t.length;l++){let c=Math.hypot(t[l][0]-t[l-1][0],t[l][1]-t[l-1][1],t[l][2]-t[l-1][2]);i.push(c),r+=c}if(r<.01)continue;let s=n.colors.length===t.length,a=0;for(let l=1;l<t.length;l++){let c=i[l-1];if(c<.005)continue;let d=s?sp([n.colors[l-1],n.colors[l]],.5):sp(n.colors,(a+c/2)/r);e.push({floorId:n.floorId,a:[...t[l-1]],b:[...t[l]],dist:a,power:Math.max(0,n.flow),color:d,...n.width?{width:Math.min(3,Math.max(.5,n.width))}:{},...n.look==="pipe"?{pipe:!0}:{},...n.views==="house"?{house:!0}:n.views==="floor"?{floor:!0}:{}}),a+=c}}return e}function cp(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function dp(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function Bi(o,e){return(o??[]).filter(n=>!e||!n.minor)}var up="https://www.openstreetmap.org/copyright";var Ig=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Eg=[2200,2700,3200,4e3,5e3,6500],zg=["hs","rgb","rgbw","rgbww","xy"],Tg=4,Ag=16,Rg=32,Fg=128;function Ys(o){let e=o.attributes.supported_color_modes??[],n=e.some(t=>zg.includes(t));return{dim:e.some(t=>t!=="onoff"),color:n,temp:e.includes("color_temp")}}function Xs(o){return((o.attributes.supported_features??0)&Tg)!==0&&typeof o.attributes.current_position=="number"}var Zs=class extends pe{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},slatInvert:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{W(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let n=e.attributes.entity_picture,t=n?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${t?g`<img src=${t} alt=${G(this.hass,this.entity)} />`:g`<span class="qm-note">${be(this.hass,e)}</span>`}
      </button>
      ${this.pro?g`<button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
            ${this.t("through_camera")}
          </button>`:y}`}t(e,n){return I(this.hass,e,n)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:G(this.hass,this.entity)}))}call(e,n,t={}){this.hass.callService(e,n,{entity_id:this.entity,...t})}cover(e,n){let t=Cr(e,n);this.call("cover",t.service,t.data)}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){ve(this,this.entity),this.close()}ring(e){let n=e.length;return e.map((t,i)=>{let r=i/n*Math.PI*2-Math.PI/2;return g`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${t}</div>`})}renderLight(e){let n=Ys(e),t=e.state==="on",i=t&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):t?100:0,r=n.color?Ig.map(s=>g`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):n.temp?Eg.map(s=>g`<button class="qm-swatch" style="background:${Hg(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return g`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${t?"qm-on":""}" aria-pressed=${t} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${t?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${n.dim?g`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:y}`}renderCover(e){let n=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,t=e.state==="opening"||e.state==="closing",i=Xs(e),r=(d,u,p,h=!1)=>g`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${u} @click=${p}>${d}</button>`,s=d=>n!==null&&Math.abs(n-d)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.cover(e,"open"),s(100)),...i?[75,50].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.cover(e,"close"),s(0)),...i?[25].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25A0",this.t("cover_stop"),()=>this.cover(e,"stop"),t)],l=fn(e,this.slatInvert),c=n!==null?100-n:l!==null?100-l:e.state==="closed"?100:0;return g`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${c<100?"qm-on":""}"
          style="--closed:${c}%"
          aria-label=${t?this.t("cover_stop"):c>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>t?this.cover(e,"stop"):this.ask()&&this.cover(e,c>50?"open":"close")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${n!==null?`${n} %`:be(this.hass,e)}</b>
        </button>
      </div>
      ${i?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(n??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:y}
      ${this.renderTilt(e)}`}renderTilt(e){let n=(e.attributes.supported_features??0)|0,t=fn(e,this.slatInvert),i=r=>this.slatInvert?100-r:r;return n&Fg&&t!==null?g`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${t} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(t)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:i(Number(r.target.value))})}
      /></label>`:Vo(e)?g`<div class="qm-tilt-buttons">
        ${n&Ag?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:y}
        ${n&Rg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:y}
      </div>`:y}renderCar(e){let n=e.entities,t=(u,p,h,_={})=>{this.hass.callService(u,p,{entity_id:h,..._})},i=n.lock,r=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=n.climate,l=!!a&&a.startsWith("climate."),c=n.charging&&s(n.charging)?n.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return g`<p class="qm-car-line">${d||be(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||i&&s(i)?g`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(r?t("lock","unlock",i):t("homeassistant","turn_off",i)):r?t("lock","lock",i):t("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:y}
        ${a?g`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>t(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:y}
        ${c?g`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>t("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:y}
        ${!r&&!a&&!c?g`<p class="qm-note">${this.t("car_no_controls")}</p>`:y}
      </div>`}renderMedia(e){let n=e.attributes,t=e.state==="playing",i=e.state==="off"||e.state==="standby",r=typeof n.volume_level=="number"?Math.round(n.volume_level*100):null,s=[n.media_title,n.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof n.entity_picture=="string"?n.entity_picture:null;return g`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${t?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":t?"media_pause":"media_play")}>
          <span>${i?"\u23FB":t?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?g`<p class="qm-media-title">${s}</p>`:y}
      ${r!==null?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:y}
      ${this.renderPlay(e)}`}renderPlay(e){if(!K("sound"))return y;let n=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],t=this.presets??[];if(!n.length&&!t.length)return y;let i=e.attributes.source;return g`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${t.map(r=>g`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${n.map(r=>g`<button class="qm-chip ${r===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderDoorLock(e){let n=e.state==="locked"||e.state==="locking"||e.state==="jammed",t=G(this.hass,this.entity),i=()=>{confirm(this.t(n?"door_unlock_confirm":"door_lock_confirm",{name:t}))&&(this.call("lock",n?"unlock":"lock"),this.close())};return g`<p class="qm-car-line">${be(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${n?"qm-slot-on":""}" @click=${i}>${n?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let n=e.state==="on"||e.state==="unlocked"||e.state==="playing",t=e.entity_id.split(".")[0];return g`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${n?"qm-on":""}"
        aria-pressed=${n}
        @click=${()=>this.ask()&&(t==="lock"?this.call("lock",n?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${be(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return y;let n=W(this.entity),t=this.car?this.renderCar(this.car):Z(e)?g`<p class="qm-note">${be(this.hass,e)}</p>`:this.doorLock&&n==="lock"?this.renderDoorLock(e):n==="light"?this.renderLight(e):n==="cover"?this.renderCover(e):n==="camera"?this.renderCamera(e):n==="media"&&K("sound")?this.renderMedia(e):this.renderToggle(e);return g`<div class="qm" role="dialog" aria-label=${G(this.hass,this.entity)}>
      <div class="qm-title">${G(this.hass,this.entity)}</div>
      ${t}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Me,ge`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--fp3d-accent, #37e0ff);
      color: var(--fp3d-accent, #37e0ff);
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function Hg(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),n=(t,i)=>Math.round(t+(i-t)*e);return`rgb(${n(255,200)},${n(170,225)},${n(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Zs);var Cg=new URL(import.meta.url),Dg=new URL("./neonplan3d-3d.js?v=3df227b03288",Cg).href,pp;function wo(){return pp??=import(Dg),pp}var Qs;function Js(){let o=new URL("./neonplan3d-fun.js?v=a26da389272e",new URL(import.meta.url)).href;return Qs??=import(o).catch(e=>{throw Qs=void 0,e}),Qs}function hp(o,e){let n=o.points,t=n[e],i=n[(e+1)%n.length],r=Math.hypot(i[0]-t[0],i[1]-t[1])||1,s=[(i[0]-t[0])/r,(i[1]-t[1])/r],a=[-s[1],s[0]],l=[(t[0]+i[0])/2,(t[1]+i[1])/2];V([l[0]+a[0]*.02,l[1]+a[1]*.02],n)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:t,b:i,u:s,n:a,length:r,rightward:s[0]*c[0]+s[1]*c[1]>0}}function Vi(o,e){let n=e[0]-o.a[0],t=e[1]-o.a[1];return{s:n*o.u[0]+t*o.u[1],d:n*o.n[0]+t*o.n[1]}}function ea(o,e,n){return[o.a[0]+o.u[0]*e+o.n[0]*n,o.a[1]+o.u[1]*e+o.n[1]*n]}var Og=.45;function fp(o,e){let n=[];for(let t of e.openings){if(t.wall)continue;let i=e.rooms.find(a=>a.id===t.room_id);if(!i||t.edge>=i.points.length)continue;let{s:r,d:s}=Vi(o,ai(i,t.edge,t.offset));Math.abs(s)>.4||r<-.05||r>o.length+.05||n.push(Lg(t,r))}return n}function Lg(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function mp(o,e,n,t=Og){let i=[];for(let r of e.furniture){if(r.type==="stairwell"||r.type==="parking")continue;let s=V([r.x,r.z],n.points),a=Wt(r).map(h=>Vi(o,h)),l=Math.min(...a.map(h=>h.d)),c=Math.min(...a.map(h=>h.s)),d=Math.max(...a.map(h=>h.s)),u=Vi(o,[r.x,r.z]);if(!s&&u.d<=0||u.d<=0||l>t||l<-.3||d<.02||c>o.length-.02)continue;let p=fe(e,r);i.push({kind:"furniture",id:r.id,s0:c,s1:d,y0:p,y1:p+r.h,d:l})}return i}var gp=.3;function yo(o,e){let n=o.from?e(o.from):null,t=o.to?e(o.to):null,i=o.height??gp,r=[];if(o.heights)n&&r.push([n.x,n.y,n.z]),o.points.forEach(([s,a],l)=>r.push([s,o.heights?.[l]??i,a])),t&&r.push([t.x,t.y,t.z]);else{if(!n||!t)return[];r.push([n.x,n.y,n.z],[n.x,i,n.z]);for(let[s,a]of o.points)r.push([s,i,a]);r.push([t.x,i,t.z],[t.x,t.y,t.z])}return r.filter((s,a)=>a===0||ta(s,r[a-1])>.001)}function ta(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Ki(o){let e=0;for(let n=1;n<o.length;n++)e+=ta(o[n-1],o[n]);return e}function Ui(o,e){if(o.length<2)return null;let n=Math.max(0,e);for(let t=1;t<o.length;t++){let[i,r]=[o[t-1],o[t]],s=ta(i,r);if(!(s<1e-6)){if(n<=s||t===o.length-1){let a=Math.min(1,n/s),l=[(r[0]-i[0])/s,(r[1]-i[1])/s,(r[2]-i[2])/s];return{p:[i[0]+(r[0]-i[0])*a,i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a],dir:l,seg:t-1}}n-=s}}return null}function en(o){let[e="",n="",t]=o.split(":");return{kind:e,id:n,port:t||null}}function Wg(o,e){let{w:n,d:t,h:i}=o;if(o.type==="pool_pump")return e==="suction"?[n*.5,i*.55,0]:e==="pressure"?[n*.05,i*.9,0]:null;if(o.type==="pool_filter"){let r=Math.min(n,t)/2;if(o.variant==="side6"){let l=r+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=r*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let r=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return r==="back"?[e==="in"?-n*.15:n*.15,s,-t/2-.04]:[(r==="left"?-1:1)*(n/2+.04),s,-t*.2]}return null}function _p(o,e){let n=Wg(o,e);if(!n)return null;let t=o.rotation*Math.PI/180,[i,r]=[Math.cos(t),Math.sin(t)];return{x:o.x+n[0]*i-n[2]*r,y:n[1],z:o.z+n[0]*r+n[2]*i}}function xo(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let n=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*n,y:o.y,z:o.z-(o.nz??0)*n}}}return{x:o.x,y:o.y,z:o.z}}function vp(o){return o.flatMap(e=>(e.outdoor??[]).filter(n=>n.type==="pool"&&n.pool&&n.points.length>=3).map(n=>({floor:e,area:n})))}var na=[.25,.7,1],Ng=900;function wp(o,e,n,t=i=>i){let i=[];for(let r of o){let s=t(yo(r,n),r);if(s.length<2)continue;let a=e.get(r.id),l=a?.color??na,c=0;for(let d=1;d<s.length;d++){let[u,p]=[s[d-1],s[d]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(i.push({floorId:r.floor_id,a:u,b:p,dist:c,power:a?.active?Ng:0,color:l}),c+=h)}}return i}function Gi(o,e,n){let t=n.pool??{},i=un(e,n);return r=>{let{kind:s,id:a,port:l}=en(r);if(s==="port"){let c=t.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?qn(e,n)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=t.joints?.find(d=>d.id===a);return c?xo(c,l):null}if(s!=="dev")return null;for(let c of o.floors){let d=c.furniture.find(_=>_.id===a);if(!d||!Ql.includes(d.type))continue;let u=l?_p(d,l):null,p=c.elevation-e.elevation;if(u)return{...u,y:u.y+fe(c,d)+p};let h=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?Jl:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:h+fe(c,d)+p}}return null}}function oa(o,e,n,t){let i=d=>{let{kind:u,id:p}=en(d);return u==="port"?n.pool?.ports?.find(h=>h.id===p)?.kind:void 0},r=d=>i(d)==="drain",s=d=>i(d)==="inlet"||i(d)==="skimmer",a=d=>{if(d.length<2)return d;let u=d[0],p=ia(n,[u[0],u[2]]);if(!p)return d;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],_=1;for(;_<d.length&&Math.hypot(d[_][0]-u[0],d[_][2]-u[2])<.01;)_++;let b=d.slice(_).map(w=>[...w]);for(let w=0;w<b.length-1;w++){let k=(b[w][0]-u[0])*p[0]+(b[w][2]-u[2])*p[1];if(k>=.349999)break;b[w][0]+=p[0]*(.35-k),b[w][2]+=p[1]*(.35-k)}let f=b[0]??d[d.length-1];return[u,h,[h[0],f[1],h[2]],...b]},l=d=>{if(d.length<2)return d;let u=d[0];if(!V([u[0],u[2]],n.points))return d;let p=qn(t,n)-.15,h=d.findIndex((w,k)=>k>0&&Math.hypot(w[0]-u[0],w[2]-u[2])>.01);if(h<0)return d;let _=d[h],b=[_[0],_[2]];for(let w=0;w<n.points.length;w++){let k=n.points[w],x=n.points[(w+1)%n.points.length],v=Bg([u[0],u[2]],[_[0],_[2]],k,x);v&&(b=v)}let f=Math.hypot(b[0]-u[0],b[1]-u[2])>1e-6?[b[0]+(b[0]-u[0])*.02,b[1]+(b[1]-u[2])*.02]:b;return[u,[u[0],p,u[2]],[f[0],p,f[1]],[f[0],_[1],f[1]],...d.slice(h)]},c=o;return e.from&&r(e.from)&&(c=l(c)),e.to&&r(e.to)&&(c=l([...c].reverse()).reverse()),e.from&&s(e.from)&&(c=a(c)),e.to&&s(e.to)&&(c=a([...c].reverse()).reverse()),c}function ia(o,e){let n=o.points;if(n.length<3)return null;let t=0;for(let r=0;r<n.length;r++){let s=n[r],a=n[(r+1)%n.length];t+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let r=0;r<n.length;r++){let s=n[r],a=n[(r+1)%n.length],l=a[0]-s[0],c=a[1]-s[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*c)/(d*d))),p=Math.hypot(s[0]+l*u-e[0],s[1]+c*u-e[1]),h=t>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!i||p<i.d)&&(i={d:p,n:h})}return i?i.n:null}function Bg(o,e,n,t){let i=[e[0]-o[0],e[1]-o[1]],r=[t[0]-n[0],t[1]-n[1]],s=i[0]*r[1]-i[1]*r[0];if(Math.abs(s)<1e-9)return null;let a=((n[0]-o[0])*r[1]-(n[1]-o[1])*r[0])/s,l=((n[0]-o[0])*i[1]-(n[1]-o[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+i[0]*a,o[1]+i[1]*a]:null}var Pe=o=>Math.round(o*1e3)/1e3;var yp=-.3;function xp(o,e,n,t,i){let r=[],s=[],a=f=>e(f),l=[],c=o.from,d=[];for(let f of o.vias){if(f.kind!=="hole"){d.push(f.kind);continue}let w=n.find(M=>M.id===f.joint),k=a(c);if(!w||!k)continue;let x=a(`joint:${w.id}:inside`),v=a(`joint:${w.id}:outside`),m=f.dir?f.dir==="out":Math.hypot(k.x-x.x,k.z-x.z)<=Math.hypot(k.x-v.x,k.z-v.z);l.push({a:c,b:`joint:${w.id}:${m?"inside":"outside"}`,fits:d}),d=[],c=`joint:${w.id}:${m?"outside":"inside"}`}let u=o.to;if(u.length>1){let f=a(c),w=u.map(a).filter(k=>!!k);if(f&&w.length===u.length){let k=w.reduce((z,R)=>z+R.x,0)/w.length,x=w.reduce((z,R)=>z+R.z,0)/w.length,v=Math.hypot(f.x-k,f.z-x)||1,m=Math.min(1,v/2)/v,M=f.y<0||w.some(z=>z.y<0),P={id:i("joint"),kind:"tee",x:Pe(k+(f.x-k)*m),z:Pe(x+(f.z-x)*m),y:M?yp:Pe(f.y)};s.push(P),l.push({a:c,b:`joint:${P.id}:in`,fits:d}),d=[],u.forEach((z,R)=>l.push({a:`joint:${P.id}:out${R+1}`,b:z,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let p=f=>{let{kind:w,id:k,port:x}=en(f),v=w==="joint"?s.find(m=>m.id===k):void 0;return v?xo(v,x):a(f)},h=f=>t(f)==="source",_=f=>t(f)==="sink",b=o.to.some(h)&&!h(o.from)||_(o.from)&&!o.to.some(_);for(let f of l){let w=p(f.a),k=p(f.b);if(!w||!k)continue;let x=Vg(w,k,bp(f.a,n),bp(f.b,n)),v={id:i("pipe"),from:f.a,to:f.b,floor_id:o.floorId,points:x.map(M=>[M[0],M[2]]),heights:x.map(M=>M[1])},m=Ki(yo(v,p));v.fittings=f.fits.map((M,P)=>({id:i("fit"),kind:M,at:Pe(Math.min(m/2,.4+P*.25)),...M==="valve"?{open:!0}:{}})),b&&(v={...v,from:v.to,to:v.from,points:[...v.points].reverse(),heights:[...v.heights??[]].reverse(),fittings:v.fittings?.map(M=>({...M,at:Pe(Math.max(0,m-M.at))}))}),r.push(v)}return{pipes:r,joints:s}}function bp(o,e){let{kind:n,id:t,port:i}=en(o),r=n==="joint"&&i==="outside"?e.find(s=>s.id===t):void 0;return r?.kind==="wall"?[-(r.nx??0),-(r.nz??0)]:null}function Vg(o,e,n=null,t=null){let i=o.y<0||e.y<0?yp:Pe(Math.max(o.y,e.y)),r=[],[s,a]=[o.x,o.z];n&&([s,a]=[Pe(s+n[0]*.5),Pe(a+n[1]*.5)],r.push([s,Pe(o.y),a]));let[l,c]=[e.x,e.z],d=[];return t&&([l,c]=[Pe(l+t[0]*.5),Pe(c+t[1]*.5)],d.push([l,Pe(e.y),c])),r.push([Pe(s),i,Pe(a)]),Math.abs(l-s)>.01&&r.push([Pe(l),i,Pe(a)]),Math.abs(c-a)>.01&&r.push([Pe(l),i,Pe(c)]),r.push(...d),r.filter((u,p)=>p===0||Math.hypot(u[0]-r[p-1][0],u[1]-r[p-1][1],u[2]-r[p-1][2])>.001)}var Kg=2e3;function kp(o){return Math.max(0,Kg-o)}var $p=120;var Sp="neonplan3d.gpu_lost",ji="3.5.4";function Mp(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function ra(o,e=Mp()){try{return!!e&&e.getItem(Sp)===o}catch{return!1}}function Pp(o,e,n,t,i=Mp()){if(t||n-e>2e4||n<e||!i)return!1;try{return i.setItem(Sp,o),!0}catch{return!1}}function Ip(o,e,n,t=12,i=180){let r=Math.max(i,e),s=Math.max(i*.5625,n),a={cols:1,tile:Math.min(r,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let c=Math.ceil(o/l),d=(r-t*(l-1))/l,u=(s-t*(c-1))/c*16/9,p=Math.min(d,u);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<i){let l=Math.max(1,Math.floor((r+t)/(i+t)));return{cols:Math.min(l,Math.max(1,o)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function sa(o,e,n){let t=[...n.openings.values()].flatMap(z=>[z.cover,z.contact,z.tilt,z.contact2??null,z.tilt2??null,z.position??null,z.tiltAngle??null,z.lock??null]),i=ru(e),r=i.filter(z=>W(z)==="camera").flatMap(z=>Ve(o,z)),s=i.map(z=>go(o,z)),a=e.energy,l=e.presence.flatMap(z=>[z.person,z.sensor]),c=e.floors.flatMap(z=>z.rooms.flatMap(R=>ke(o,R.area_id).filter(A=>W(A)==="light"))),d=[...n.furniture.values()].flatMap(z=>[z.entity,z.power]),u=e.floors.flatMap(z=>z.furniture.flatMap(R=>[R.state_entity??null,R.state_entity2??null,R.color_entity??null])),p=e.floors.flatMap(z=>z.furniture.flatMap(R=>[R.door_left??null,R.door_right??null,R.soc??null,R.status??null,R.charge??null,R.export??null])),h=e.floors.flatMap(z=>z.furniture.flatMap(R=>Object.values(R.binds??{}))),_=(e.settings.roof?.windows??[]).flatMap(z=>[z.cover,z.contact,z.tilt]).filter(z=>!!z&&z!=="none"),b=[...(e.settings.roof?.solar??[]).map(z=>z.entity),...(e.settings.roof?.strings??[]).map(z=>z.entity)].filter(z=>!!z&&z!=="none"),f=e.floors.flatMap(z=>z.furniture.filter(R=>R.type==="robot_vacuum").map(R=>io(o,n.furniture.get(R.id)?.entity??null,R.room_sensor))),w=e.floors.flatMap(z=>z.furniture.flatMap(R=>(R.pictures??[]).flatMap(A=>[A.entity,...A.image.startsWith("camera:")?[A.image.slice(7)]:[]]))),k=n.heat?e.floors.flatMap(z=>z.rooms.flatMap(R=>ke(o,R.area_id).filter(A=>A.startsWith("sensor.")))):[],x=[...Ku(e.floors),...K("auto_pro")?Dc(o,e.floors):[]],v=vo(o,e).map(z=>z.entity),m=K("household")?[...e.floors.flatMap(z=>z.furniture.flatMap(cd)),e.settings.household?.notes??null].filter(z=>!!z&&z!=="none"):[],M=rt(o,n.weatherEntityId??e.settings.weather_entity),P=[...i,...r,...t,...s,...d,...u,...p,...h,...f,..._,...b,...w,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...c,...k,...n.warnings,...x,...v,...m,M,"sun.sun"];return[...new Set(P.filter(z=>!!z))]}var Ep=/^#[0-9a-f]{3,8}$/i;function Ug(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function zp(o){if(!o||!o.kind)return null;let e=o.color&&Ep.test(o.color)?o.color:"#0b1426",n=o.color2&&Ep.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${n})`;let t=Ug(o.image);if(!t)return null;let i=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${t}") center / cover no-repeat`}var aa;function dt(){let o=new URL("./neonplan3d-voice.js?v=dd713f15a364",new URL(import.meta.url)).href;return aa??=import(o).catch(e=>{throw aa=void 0,e}),aa}function qi(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function la(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function ca(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function Xe(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function da(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function Zi(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var Gg=[[/KFTRWI|KFTRPWI|KFMAWI|KFSNWI|KFTUWI/,"Fire HD 10"],[/KFONWI|KFRAWI|KFRAPWI|KFTBWI|KFDOWI/,"Fire HD 8"],[/KFQUWI|KFMUWI|KFKAWI|KFGIWI/,"Fire 7"]];function Tp(o=typeof navigator>"u"?"":navigator.userAgent){if(!o)return null;let e=/Fully/i.test(o)?"Fully Kiosk":/Home ?Assistant/i.test(o)?"HA app":/Silk\//.test(o)?"Silk":/Edg\//.test(o)?"Edge":/Firefox\//.test(o)?"Firefox":/Chrome\//.test(o)?"Chrome":/Safari\//.test(o)?"Safari":null,i=[Gg.find(([r])=>r.test(o))?.[1]??(/KF[A-Z]{2,5}WI|Silk\//.test(o)?"Fire tablet":null)??(/iPad/.test(o)?"iPad":/iPhone/.test(o)?"iPhone":/Android/.test(o)?/Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(o)?.[1]?.trim()??"Android":/Windows/.test(o)?"Windows":/Mac OS X/.test(o)?"Mac":/Linux/.test(o)?"Linux":null),e].filter(Boolean).join(" \xB7 ");return i?i.slice(0,80):null}var jg=.25,Ap=o=>Math.round(o*1e3)/1e3;function ua(o,e,n,t,i){let r=o.rooms.find(s=>s.points.length>=3&&V([e,n],s.points));return!r||V([t,i],r.points)?[t,i]:V([t,n],r.points)?[t,n]:V([e,i],r.points)?[e,i]:[e,n]}function Rp(o,e,n,t){let i=Math.hypot(t[0]-n[0],t[1]-n[1]);if(i<.01)return!1;let r=[(t[0]-n[0])/i,(t[1]-n[1])/i],s=l=>Math.abs(-(l[0]-n[0])*r[1]+(l[1]-n[1])*r[0]),a=l=>(l[0]-n[0])*r[0]+(l[1]-n[1])*r[1];return o.rooms.some(l=>l.id!==e&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(i,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Fp(o,e,n,t=jg){let i=o.rooms.find(c=>c.points.length>=3&&V([e.x,e.z],c.points));if(!i)return null;let r=i.points,s=De(r)>=0?1:-1,a=n/2,l=null;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let h=[(u[0]-d[0])/p,(u[1]-d[1])/p],_=[-h[1]*s,h[0]*s],b=(e.x-d[0])*h[0]+(e.z-d[1])*h[1];if(b<0||b>p)continue;let w=o.rooms.some(z=>z.id!==i.id&&z.points.some((R,A)=>{let $=z.points[(A+1)%z.points.length],E=Math.abs((R[0]-d[0])*_[0]+(R[1]-d[1])*_[1]),H=Math.abs(($[0]-d[0])*_[0]+($[1]-d[1])*_[1]);return E<.02&&H<.02}))?a:0,k=(e.x-d[0])*_[0]+(e.z-d[1])*_[1]-w,x=Math.atan2(-_[0],_[1])*180/Math.PI,v=z=>Math.abs((e.rotation-z+540)%360-180),M=[{rotation:x,extent:e.d/2},{rotation:x+90,extent:e.w/2},{rotation:x-90,extent:e.w/2}].reduce((z,R)=>v(R.rotation)<v(z.rotation)?R:z);if(v(M.rotation)>50)continue;let P=k-M.extent;Math.abs(P)>t||l&&Math.abs(P)>=Math.abs(l.gap)||(l={x:Ap(e.x-_[0]*P),z:Ap(e.z-_[1]*P),rotation:(Math.round(M.rotation*10)/10%360+360)%360,gap:P})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function qg(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var pa={walls(o,e,n){let t=o.floors.find(r=>r.id===e),i=t?.rooms.find(r=>r.id===n);return!t||!i||i.points.length<3?[]:i.points.map((r,s)=>{let a=hp(i,s),l=Rp(t,i.id,a.a,a.b),c=[...mp(a,t,i).map(d=>[d.s0,d.s1]),...fp(a,t).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:c}})},onWall(o,e,n){return ea(qg(o),e,n)},freeSpot(o,e,n=.1){let t=r=>r>=n&&r+e<=o.length-n&&!o.taken.some(([s,a])=>r<a+.05&&r+e>s-.05),i=o.length/2-e/2;for(let r=0;r<=o.length;r+=.05){if(t(i-r))return Math.round((i-r)*100)/100;if(t(i+r))return Math.round((i+r)*100)/100}return null},nodeAt(o,e,n){let t=o.floors.find(a=>a.id===e),i=t?.outdoor.find(a=>a.id===n);if(!t||!i)return()=>null;let r=Gi(o,t,i),s=i.pool??{};return a=>{let{kind:l,id:c,port:d}=en(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===c):void 0;if(u)return xo(u,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===c):void 0;return p?r(a)??{x:p.x,y:.02,z:p.z}:r(a)}},connect(o,e,n,t,i,r){let s=o.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===n);return!s||!a?{pipes:[],joints:[]}:xp({...t,floorId:e},pa.nodeAt(o,e,n),a.pool?.joints??[],i,r)}};var Yi=30,Zg=10,Yg=600,Hp={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},Xg={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},Qg=2e4,Jg=3*6e4,ha=new Set(["unavailable","unknown",""]),e_="neonplan3d.director";function fa(){try{return localStorage.getItem(e_)==="1"}catch{return!1}}function Dp(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var t_=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Op(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(n=>{let t=o.states[n];if(n.startsWith("event."))return t.attributes.device_class==="doorbell";if(!n.startsWith("binary_sensor."))return!1;let i=`${n} ${String(t.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return t_.test(i)}).sort()}function ma(o,e,n=Date.now()){if(!o||!e||ha.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let t=Date.parse(e.state);return Number.isFinite(t)&&n-t<3e4}return o.state==="off"&&e.state==="on"}var Cp=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function Lp(o,e,n=Date.now()){return!o||!e||ha.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?ma(o,e,n):ha.has(o.state)?!1:Cp.has(e.state)&&!Cp.has(o.state)}function Wp(o,e,n,t){if(t)return t;let i=o.entities??{},r=i[e]?.device_id,s=n.filter(d=>d.startsWith("camera.")),a=r?s.find(d=>i[d]?.device_id===r):void 0;if(a)return a;let l=d=>ze(o,d),c=l(e);return c&&s.find(d=>l(d)===c)||null}var ko=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,n,t){let i=this.seen.has(e),r=this.seen.get(e);return this.seen.set(e,n),i&&r!==n&&t(r,n)}stopped(e,n,t){let i=this.runs.get(e);return n?(i?.run||this.runs.set(e,{run:!0,since:t,ran:!0}),!1):!i||i.run?(this.runs.set(e,{run:!1,since:t,ran:!!i?.run}),!1):i.ran&&t-i.since>=Jg?(i.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,n,t=Yi){let i=this.shown.get(e.key);if(i!==void 0&&n-i<Xg[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&n-this.touchedAt<Qg)return!1;let s=this.current;if(s&&n<s.until&&Hp[s.shot.kind]>Hp[e.kind])return!1;let a=Math.min(Yg,Math.max(Zg,t))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:n,until:n+a,touched:!1},this.shown.set(e.key,n),!0}due(e){let n=this.current;return!n||e<n.until?null:(this.current=null,{shot:n.shot,back:!n.touched})}clear(){this.current=null}};var Se=Math.PI/180,Xi=-.833;function n_(o,e,n){let t=(o/864e5+24405875e-1-2451545)/36525,i=((280.46646+t*(36000.76983+t*3032e-7))%360+360)%360,r=357.52911+t*(35999.05029-1537e-7*t),s=.016708634-t*(42037e-9+1267e-10*t),a=Math.sin(r*Se)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*r*Se)*(.019993-101e-6*t)+Math.sin(3*r*Se)*289e-6,l=125.04-1934.136*t,c=i+a-.00569-.00478*Math.sin(l*Se),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(l*Se),p=Math.asin(Math.sin(u*Se)*Math.sin(c*Se)),h=Math.tan(u/2*Se)**2,_=4*(h*Math.sin(2*i*Se)-2*s*Math.sin(r*Se)+4*s*h*Math.sin(r*Se)*Math.cos(2*i*Se)-.5*h*h*Math.sin(4*i*Se)-1.25*s*s*Math.sin(2*r*Se))/Se,b=new Date(o),k=(((b.getUTCHours()*60+b.getUTCMinutes()+b.getUTCSeconds()/60+_+4*n)%1440+1440)%1440/4-180)*Se,x=e*Se,v=Math.sin(x)*Math.sin(p)+Math.cos(x)*Math.cos(p)*Math.cos(k),m=90-Math.acos(Math.min(1,Math.max(-1,v)))/Se;return{azimuth:(Math.atan2(Math.sin(k),Math.cos(k)*Math.sin(x)-Math.tan(p)*Math.cos(x))/Se+180+360)%360,elevation:m}}function Np(o,e,n){let t=new Date(o);t.setHours(0,0,0,0);let i=t.getTime(),r=10*6e4,s=u=>({...n_(u,e,n),t:u}),a=[],l=null,c=null,d=s(i);for(let u=i+r;u<=i+24*36e5;u+=r){let p=s(u),h=p.elevation>Xi,_=d.elevation>Xi;if(h!==_){let b=d.t,f=p.t;for(let k=0;k<12;k++){let x=(b+f)/2;s(x).elevation>Xi===_?b=x:f=x}let w=s(Math.round((b+f)/2));h?(l??=w,a.push(w)):(c=w,a.push(w))}h&&a.push(p),d=p}return!l&&a.length&&s(i).elevation>Xi&&a.unshift(s(i)),{points:a,rise:l,set:c}}var ga=Math.PI/180;function Bp(o,e,n,t){let i=o*ga,r=(e-t)*ga,s=n*ga;return Math.sin(s)*Math.sin(i)+Math.cos(s)*Math.cos(i)*Math.cos(r)<0?null:[Math.cos(i)*Math.sin(r),Math.cos(s)*Math.sin(i)-Math.sin(s)*Math.cos(i)*Math.cos(r)]}var Vp=o=>o<0?0:o>1?1:o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,o_={turn:1500,dive:1300,fade:600},_a=class extends pe{static properties={lat:{type:Number},lon:{type:Number}};raf=0;t0=0;dove=!1;ended=!1;constructor(){super(),this.lat=50,this.lon=10}firstUpdated(){this.t0=performance.now();let e=()=>{this.ended||(this.draw(performance.now()-this.t0),this.raf=requestAnimationFrame(e))};this.raf=requestAnimationFrame(e)}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this.raf)}skip=()=>this.finish(!0);finish(e){this.ended||(this.ended=!0,cancelAnimationFrame(this.raf),this.dove||this.dispatchEvent(new CustomEvent("flyin-dive",{detail:{fast:!0}})),this.dispatchEvent(new CustomEvent("flyin-done",{detail:{skipped:e}})))}draw(e){let n=this.renderRoot.querySelector("canvas"),t=n?.getContext("2d");if(!n||!t)return;let i=1,r=Math.round(n.clientWidth*i),s=Math.round(n.clientHeight*i);(n.width!==r||n.height!==s)&&(n.width=r,n.height=s);let{turn:a,dive:l,fade:c}=o_;if(e>a+l*.55&&!this.dove&&(this.dove=!0,this.dispatchEvent(new CustomEvent("flyin-dive",{detail:{fast:!1}}))),e>a+l+c)return this.finish(!1);t.clearRect(0,0,r,s);let d=e<a+l?0:(e-a-l)/c;t.globalAlpha=1-d,t.fillStyle="#02040a",t.fillRect(0,0,r,s);let u=Vp(e/a),p=this.lon-100*(1-u),h=this.lat*u,_=e<a?0:Vp((e-a)/l),f=Math.min(r,s)*.32*Math.pow(14,_),w=Bp(this.lat,this.lon,h,p),k=r/2-(w?w[0]*f*_:0),x=s/2+(w?w[1]*f*_:0);if(f<Math.max(r,s)){let m=t.createRadialGradient(k,x,f*.95,k,x,f*1.25);m.addColorStop(0,"rgba(62,232,255,0.35)"),m.addColorStop(1,"rgba(62,232,255,0)"),t.fillStyle=m;let M=f*1.25,P=Math.max(0,k-M),z=Math.max(0,x-M);t.fillRect(P,z,Math.min(r,k+M)-P,Math.min(s,x+M)-z)}t.fillStyle="#06101f",t.beginPath(),t.arc(k,x,f,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(62,232,255,${.5*(1-_*.7)})`,t.lineWidth=Math.max(1,i);let v=m=>{let M=!1;t.beginPath();for(let[P,z]of m){let R=Bp(P,z,h,p);if(!R){M=!1;continue}let A=k+R[0]*f,$=x-R[1]*f;M?t.lineTo(A,$):t.moveTo(A,$),M=!0}t.stroke()};if(_<.8){for(let m=-75;m<=75;m+=15)v(Array.from({length:73},(M,P)=>[m,P*5-180]));for(let m=-180;m<180;m+=15)v(Array.from({length:37},(M,P)=>[P*5-90,m]))}if(w){let m=k+w[0]*f,M=x-w[1]*f,P=.5+.5*Math.sin(e/140),z=t.createLinearGradient(m,M,m,M-s*.35);z.addColorStop(0,`rgba(255,95,210,${.8*u})`),z.addColorStop(1,"rgba(255,95,210,0)"),t.fillStyle=z,t.fillRect(m-2*i,M-s*.35,4*i,s*.35),t.fillStyle=`rgba(255,95,210,${.9*u})`,t.beginPath(),t.arc(m,M,(4+3*P)*i,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(255,95,210,${.6*u*(1-P)})`,t.beginPath(),t.arc(m,M,(8+16*P)*i,0,Math.PI*2),t.stroke()}t.globalAlpha=1}render(){return g`<canvas @pointerdown=${this.skip} aria-hidden="true"></canvas>`}static styles=ge`
    :host {
      position: absolute;
      inset: 0;
      z-index: 30;
      cursor: pointer;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `};customElements.get("fp3d-flyin")||customElements.define("fp3d-flyin",_a);function Kp(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function r_(o,e){return g`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${et`<polyline points=${ap(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function s_(o,e,n){return(n==="m\xB3"||n==="m3")&&e<10?`${ie(o,e*1e3,0)} l`:`${ie(o,e,e<10?2:0)} ${n}`}var a_=12e4,l_=600*1e3,Up={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},c_='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',d_='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function $o(o,e,n){return o.rooms.find(t=>t.points.length>=3&&V([e,n],t.points))?.id??null}function u_(o,e){let n=e.action==="more_info"?e.target:e.data?.entity_id;return typeof n=="string"&&He(o.states[n])}function p_(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function h_(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function Gp(o,e){let n=s=>s&&s!=="none"?s:null,t=it(o,{cover:n(e.cover),contact:n(e.contact),tilt:n(e.tilt)},"window"),i=n(e.window)?o.states[n(e.window)]:void 0,r=t.open;if(i&&!Z(i)){let s=i.attributes.current_position;r=typeof s=="number"?Math.min(1,Math.max(0,s/100)):i.state==="open"||i.state==="opening"?1:0}return{open:r,tilt:t.tilt,cover:t.cover??0}}function f_(o){let{card_templates:e,...n}=o;return JSON.stringify(n)}var jp=new Set,qp=new Set;async function m_(){let o=window.AudioContext??window.webkitAudioContext;if(!o)return;let e=new o;try{if(await Promise.race([e.resume(),new Promise(t=>setTimeout(t,300))]),e.state!=="running")return;let n=e.currentTime;for(let[t,i]of[[784,0],[523,.45]]){let r=e.createOscillator(),s=e.createGain();r.frequency.value=t,s.gain.setValueAtTime(1e-4,n+i),s.gain.exponentialRampToValueAtTime(.3,n+i+.02),s.gain.exponentialRampToValueAtTime(1e-4,n+i+.9),r.connect(s).connect(e.destination),r.start(n+i),r.stop(n+i+.95)}await new Promise(t=>setTimeout(t,1300))}finally{e.close().catch(()=>{})}}function g_(o){let e=o?.settings.label_scale;return typeof e=="number"&&Number.isFinite(e)?Math.min(2,Math.max(.5,e)):1}var ba=18,wa=class extends pe{static properties={hass:{attribute:!1},building:{attribute:!1},planId:{attribute:!1},rooms:{attribute:!1,hasChanged:(e,n)=>(e??[]).join(",")!==(n??[]).join(",")},noSave:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},plain:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},themeEvening:{attribute:!1},themeNight:{attribute:!1},styleEntity:{attribute:!1},zoomStyle:{attribute:!1},zoomLate:{attribute:!1},zoomScope:{attribute:!1},_styleOverride:{state:!0},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},sunFx:{attribute:!1},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_camPop:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_popup:{state:!0},popupValues:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},template:{attribute:!1},viewKind:{attribute:!1},voiceArea:{attribute:!1},_voice:{state:!0},_announce:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_flyIn:{state:!0},_spotHint:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_plantInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;unwatchDiag=null;detecting=!1;syncMs=0;morph=0;clockTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;moduleFull=new Set(w_());cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;popSeen=new Set;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;announceTimer;plantInfoTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;popupTimer;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeFar=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;dayEvents=[];pickupKey="";householdTimer;binHolos=[];finished=new ti;appliances=new Map;directing=new ko;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;winterTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.planId=null,this.rooms=null,this.noSave=!1,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.plain=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.sunFx=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null,this._popup=null,this.popupValues={};try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this.template=null,this.viewKind="panel",this.voiceArea=null,this._voice=null,this._micProbe=qi(),this._alerts=[],this._household=[],this._hhFolded=p_("neonplan3d.hhFolded"),this._binInfo=null,this._plantInfo=null,this._gangMenu=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null,this._flyIn=null,this._spotHint=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.unwatchDiag=Pl(e=>this.viewer?.setStats(this.showStats||e)),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible);try{let e=JSON.parse(localStorage.getItem(va)??"null");this._styleOverride=e&&(e.until===null||e.until>Date.now())&&Et(e.style)?e:null}catch{this._styleOverride=null}this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!e?.connection||!this.isConnected||(this.unsubAsk=_r(e,n=>{this.onAsk(n)},n=>{this.onAnnounce(n)},n=>this.onReload(n),n=>this.onStyle(n),this.viewInfo()).catch(()=>_r(e,n=>{this.onAsk(n)},n=>{this.onAnnounce(n)},n=>this.onReload(n),void 0,this.viewInfo())).catch(()=>(this.unsubAsk=null,async()=>{})))}viewInfo(){return{kind:this.viewKind,screen:this.screen,template:this.template,device:Tp(),version:_t,...this.planId&&this.planId!==he?{plan:this.planId}:{}}}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e?.then(n=>n()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),this.watchWinter(!1),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchDiag?.(),this.unwatchDiag=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",this.tintSig="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&dt().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",n=>{let t=n;if(!t.target?.closest?.(".fp3d-holo"))return;let i=this.renderRoot.querySelector("canvas");i&&(t.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(n=>{let t=(n[0]?.contentRect.width??1e3)<700;t!==this._narrowStage&&(this._narrowStage=t,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await wo();if(!this.isConnected)return;let n=this.renderRoot.querySelector(".fp3d-stage");n.addEventListener("pointerdown",i=>{this._central&&!i.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)});let t=Date.now();this.viewer=e.createViewer(n,{quality:this.quality,explode:this.explode,safeFx:ra(ji),onContextLost:()=>Pp(ji,t,Date.now(),document.hidden),onRoomTap:(i,r)=>this.fire("room-tap",{floorId:i,roomId:r}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?I(this.hass,"floor_rooms_one"):I(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,r,s)=>this.onDeviceTap(i,r,s),onDeviceHold:(i,r,s)=>this.onDeviceHold(i,r,s),onRoomDoubleTap:(i,r)=>this.onRoomDoubleTap(i,r),onDeviceSwipe:(i,r,s,a,l)=>this.onDeviceSwipe(i,r,s,a,l),onMorph:i=>{this.morph=i;let r=this.renderRoot.querySelector(".fp3d-zoom-bg");r&&(r.style.opacity=String(i))},onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,r,s)=>this.fire("furniture-move",{id:i,x:r,z:s}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,r,s)=>this.fire("device-move",{id:i,x:r,z:s}),onStats:i=>{this.showStats&&(this._stats=i),El(i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setStyle(this.effectiveStyle()),this.viewer.setZoomStyle(this.zoomDef()),this.viewer.setZoomLate((this.zoomLate??50)/100),this.viewer.setZoomScope(this.zoomScope==="room"?"room":"all"),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,r,s,a,l,c)=>this.placeHolo(i,r,s,a,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats||wr()),Lt("3d"),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...mt()]),this.hass&&Us(this.hass,mt()).then(()=>this.syncDevices(!0)),this.shownPacks=cn(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding()),this.maybeFlyIn()),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&(jl(this.building??null),iu(this.building)),e.has("hass")&&this.hass&&Yc(Xc(this.hass))}updated(e){if(e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),e.has("_holos")){let l=this._holos.map(c=>c.kind).join(",");if(l!==this.holoShape){this.holoShape=l;for(let c of this.renderRoot.querySelectorAll(".fp3d-holo"))c.hidden=!0;for(let c of this.renderRoot.querySelectorAll(".fp3d-holo-link"))c.toggleAttribute("hidden",!0);this.viewer?.invalidate()}}(e.has("screen")||e.has("template")||e.has("viewKind")||e.has("planId"))&&this.unsubAsk&&this.hasUpdated?(this.unwatchAsk(),this.watchAsk()):e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let n=this.viewer;if(!n)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),e.has("_through")&&!this._through&&e.get("_through")&&n.endLook(),this.shownPacks!==cn()&&(this.shownPacks=cn(),n.setPacks([...mt()]),this.hass&&Us(this.hass,mt()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&n.setParked(Vs(this.hass,this.building)),this.syncDevices(!0));let t=e.has("building")&&this.building?f_(this.building):this.drawnPlan,i=e.has("building")&&t===this.drawnPlan;if(this.drawnPlan=t,e.has("building")&&this.building&&!i){let l=JSON.stringify(this.startViewOf()),c=this.shownStartView!==void 0&&this.shownStartView!==l;this.shownStartView=l,n.setStartView(this.startViewOf()),n.setBuilding(this.shownBuilding()),c&&this.floorId===null&&n.resetView(),this.maybeFlyIn()}else(e.has("plain")&&e.get("plain")!==void 0||e.has("rooms")&&e.get("rooms")!==void 0)&&this.building?(n.setBuilding(this.shownBuilding()),e.has("rooms")&&(this.syncDevices(!0),n.resetView())):e.has("hass")&&this.building&&Bs(this.hass,this.building)!==this.shownSig&&(n.setBuilding(this.shownBuilding()),this.syncDevices(!0));(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let r=["building","markerMode","heatMode","flows","alerts","dimmed"].some(l=>e.has(l))||this.markerMode==="room"&&e.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(r||e.has("hass")||s)&&this.syncDevices(r,s&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&n.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&n.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&n.selectRoom(this.roomId),e.has("wallMode")&&n.setWallMode(this.wallMode),e.has("keepView")&&n.setKeepView(this.keepView),e.has("angleLock")&&n.setAngleLock(this.angleLock),e.has("explode")&&n.setExplode(this.explode),e.has("keepRoof")&&n.setKeepRoof(this.keepRoof),e.has("hideRoof")&&n.setHideRoof(this.hideRoof),e.has("floorStack")&&n.setFloorStack(this.floorStack),["theme","themeEvening","themeNight"].some(l=>e.has(l)&&e.get(l)!==void 0)&&this._styleOverride&&this.setStyleOverride("reset",null),(e.has("theme")||e.has("themeEvening")||e.has("themeNight")||e.has("styleEntity")||e.has("_styleOverride")||e.has("building"))&&n.setStyle(this.effectiveStyle()),(e.has("zoomStyle")||e.has("building"))&&n.setZoomStyle(this.zoomDef()),e.has("zoomLate")&&n.setZoomLate((this.zoomLate??50)/100),e.has("zoomScope")&&n.setZoomScope(this.zoomScope==="room"?"room":"all"),e.has("accent")&&n.setAccent(this.accent??null),e.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&n.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low,this.replay?.setQuality(this.quality,n.low)),e.has("showStats")&&n.setStats(this.showStats||wr()),e.has("building")&&(this.findIndex=null)}watchWinter(e){e&&!this.winterTimer?this.winterTimer=setInterval(()=>this.syncDevices(!1,!0),6e4):!e&&this.winterTimer&&(clearInterval(this.winterTimer),this.winterTimer=void 0)}syncDevices(e,n=!1){let t=this.viewer,i=this.conditioned();if(!t||!i||!this.hass)return;let r=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==r.entities){this.openingLinks=to(r,i.floors),this.furnitureLinks=Nt(r,i.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?so(r,i,this.weatherEntityId):null,this.watchHousehold(r,i),this.watched=sa(r,i,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?fs(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Qt()&&(this.watched=[...new Set([...this.watched,...op(this.sceneHost(r,i))])]);let S=this.styleEntity||i.settings.style_entity;if(S&&!this.watched.includes(S)&&(this.watched=[...this.watched,S]),K("fun_winter")){let T=[Xt(i).roof_entity,rt(r,this.weatherEntityId??i.settings.weather_entity),"sun.sun"].filter(N=>!!N);this.watched=[...new Set([...this.watched,...T])]}e=!0}let s=e||n,a=!s;if(!s){for(let S of this.watched)if(this.shownStates.get(S)!==r.states[S]&&(s=!0,!S.startsWith("sensor."))){a=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!s)return;if(!e&&!this.replay&&t.cameraBusy()){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},$p);return}if(a&&this._low&&!this.replay){let S=kp(performance.now()-this.lastSync);if(S>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},S);return}}this.lastSync=performance.now();let c=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(S=>[S,r.states[S]])),this.scene=Qt()?Ju(this.sceneHost(r,i)):[];let d=yu(r,i),u=nu(r,i),p=this.furnitureMarkers(r,i,new Set(u.map(S=>S.id)),new Set(d.map(S=>S.powerEntity)));d.push(...p.consumers),this.lastConsumers=d;let h=xu(r,i,d,zn(i,S=>this.furnitureLinks?.get(S.id)?.power??null)),_=new Map(d.filter(S=>S.id!==S.powerEntity).map(S=>[S.id,S.power]));this.confirmSet=mn(r,i.floors);let b=this.trail?this.trailNow(r,i):[],f=K("camera_cockpit")&&!this.dimmed?this.detectionPins(r,u):[];this.detecting=f.length>0;let w=K("energy_pro"),k=new Set(K("auto_pro")?i.floors.flatMap(S=>S.furniture.filter(T=>T.type==="parking"&&T.car&&An(r,T)).map(T=>T.id)):[]);t.setDevices([...su([...u,...p.markers,...this.lockMarkers(r,i)].map(S=>{let T=S.show==="no_power"||"energyDevice"in S&&S.energyDevice||"standby"in S&&S.standby?null:_.get(S.id)??null,N={...S,power:T,powerText:T===null?void 0:de(r,T),effect:this.dimmed?!1:S.effect},ee=S.ownName&&(S.showName||this.markerNames)?S.ownName:"",C=this.cardsOn()&&(K("sound")&&this.mediaCardUp(r,S.id)||K("auto_pro")&&!!S.furnitureId&&k.has(S.furnitureId));return{...N,pin:this.showPin(N)&&!C,full:S.show==="always"||S.full===!0,caption:ee}})),...(w&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(r,i,h.grid)]:[]).filter(S=>!!S),...f,...b.map((S,T)=>({id:`trail:${T}`,floorId:S.floorId,roomId:null,x:S.x,z:S.z,y:.3+.4*b.slice(0,T).filter(N=>N.entity===S.entity).length,icon:Zu,name:G(r,S.entity),text:Li(r,S.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(i)]);for(let S of this.scene)S.kind==="marker"&&S.card&&S.furnitureId&&!p.targets.has(S.furnitureId)&&p.targets.set(S.furnitureId,`module:${S.id}`);t.setTrail(b,this.replay?this.robotPaths(r,i):[]),t.setPickTargets(p.targets,this.openingTargets()),t.setScreens(p.screens),t.setAcFlows(p.acFlows),t.setFridgeDoors(Vr(r,i.floors)),t.setAwnings(Cc(r,i.floors)),t.setProjections(this.projectedCameras(r,i)),t.setRobots(this.robotInfos(r,i));let x=new Map;for(let S of i.settings.roof?.windows??[])x.set(S.id,Gp(r,S));t.setRoofWindows(x),t.setParked(Vs(r,i));let v=new Map(i.floors.flatMap(S=>S.openings.map(T=>[T.id,T.type]))),m=new Map([...this.openingLinks].map(([S,T])=>[S,it(r,T,v.get(S))]));t.setOpeningStates(m,l);let M=this.alertSrc?si(r,i,this.alertSrc,this.openingLinks):[],P=this.alerts&&Qt()?np(this.sceneHost(r,i)).map(S=>({kind:S.kind,entity:S.entity,roomId:S.roomId,floorId:S.floorId,text:S.text,color:S.color,quiet:!S.roomId})):[];this.setAlerts([...M,...P]),clearTimeout(this.fridgeTimer);let z=K("household")&&!this.replay?md(i.floors.flatMap(S=>S.furniture),r):null;z!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),z+500));let R=[...u,...p.markers].map(S=>`${S.id}:${S.glow?`${S.glow.level.toFixed(1)}/${S.glow.color.map(T=>T.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...m].map(([S,T])=>`${S}:${T.open}:${T.cover===null?"-":T.cover.toFixed(1)}`).join(";");if(R!==this.thumbSig){let S=this.thumbSig==="";this.thumbSig=R,S||this.scheduleThumbs(1500)}let A=i.floors.flatMap(S=>S.furniture.filter(T=>T.type==="home_battery").map(T=>({floorId:S.id,x:T.x,z:T.z})))[0]??(i.energy.battery?i.floors.flatMap(S=>S.placements.filter(T=>T.entity_id===i.energy.battery).map(T=>({floorId:S.id,x:T.x,z:T.z})))[0]:null),$=w?Tu(r,i,h.solar):null,E=i.settings.roof.hologram??qe,H=[...i.settings.roof.solar??[]].sort((S,T)=>T.rows*T.cols-S.rows*S.cols),D=i.settings.roof.strings??[],F=S=>(S.string?D.find(T=>T.id===S.string)?.inverter:null)??null,j=E.plant_floor?"all":"house",q=(S,T,N,ee)=>{let C=Gt(i,S);if(!C)return null;let[X,ae]=jt(C,S),le=S.u+X/2+T,me=S.v+ae/2+N,Ge=[C.o[0]+C.eu[0]*le+C.es[0]*me,C.o[1]+C.eu[1]*le+C.es[1]*me,C.o[2]+C.eu[2]*le+C.es[2]*me],ue=C.wall?.floorId??(C.unbounded?i.floors.find(Ee=>Ee.elevation===Math.min(...i.floors.map(rn=>rn.elevation)))?.id??i.floors[0].id:[...i.floors].sort((Ee,rn)=>rn.elevation-Ee.elevation)[0].id);return{p:[Ge[0]+C.n[0]*.05,Ge[1]+C.n[1]*.05,Ge[2]+C.n[2]*.05],n:[C.n[0],C.n[1],C.n[2]],floorId:ue,size:ee,roof:!0,views:j}},B=[],O=[],Q=h.grid!==null||h.battery!==null||h.solar!==null,L=E.place==="free"&&Number.isFinite(E.x)&&Number.isFinite(E.z),se=w&&h.solar!==null&&!L?H.find(S=>S.id===E.field)??H[0]:void 0,te=se?F(se):null,xe=!!se&&!!te&&!H.some(S=>S.id!==se.id&&F(S)===te)&&E.right===0&&E.up===0,Fe=(()=>{if(!xe||!se)return 0;let S=Gt(i,se);return S?jt(S,se)[0]/2+1.2:0})(),Tt=se?q(se,E.right+Fe,E.up,E.size):null,Fn=this.devicePowers(r,i),tn=i.energy.solar?[i.energy.solar]:zn(i,S=>this.furnitureLinks?.get(S.id)?.power??null).solar,Ue=tn.map(S=>ce(r.states[S])).filter(S=>S!==null),ut=(i.settings.roof.strings??[]).flatMap(S=>S.entity&&S.entity!=="none"?[S.entity]:[]),Hn=Ei(Ue.length?Ue.reduce((S,T)=>S+T,0):null,Ii(r,i))!==(Ue.length?Ue.reduce((S,T)=>S+T,0):null),nn=w&&h.solar!==null?Hn?ut:tn:[];if(Tt)B.push(Tt),O.push({kind:"main",name:I(r,"holo_title"),w:null,dayIds:nn,battery:null});else if(w&&Q&&L){let S=0,T=0,N=0,ee=1/0,C=i.floors[0];for(let me of i.floors){me.rooms.length&&(ee=Math.min(ee,me.elevation)),me.rooms.length&&(!C.rooms.length||me.elevation+me.height>C.elevation+C.height)&&(C=me);for(let Ge of me.rooms)for(let[ue,Ee]of Ge.points)S+=ue,T+=Ee,N++}N&&(S/=N,T/=N);let X=E.x-S,ae=E.z-T,le=Math.hypot(X,ae);B.push({p:[E.x,(Number.isFinite(ee)?ee:0)+(E.height??3),E.z],n:le>.01?[X/le,0,ae/le]:[1,0,0],floorId:C.id,size:E.size,roof:!0,views:j}),O.push({kind:"main",name:I(r,"holo_title"),w:null,dayIds:nn,battery:null})}else if(w&&Q&&i.floors.some(S=>S.rooms.length)){let S=-1/0,T=1/0,N=-1/0,ee=0,C=i.floors[0];for(let X of i.floors){for(let ae of X.rooms)for(let[le,me]of ae.points)S=Math.max(S,le),T=Math.min(T,me),N=Math.max(N,me);X.rooms.length&&X.elevation+X.height>ee&&(ee=X.elevation+X.height,C=X)}B.push({p:[S+.6,ee+.4,(T+N)/2],n:[1,0,0],floorId:C.id,size:E.size,roof:!0,views:j}),O.push({kind:"main",name:I(r,"holo_title"),w:null,dayIds:nn,battery:null})}if(w&&h.solar!==null){let S=new Set;for(let T of i.floors)for(let N of T.furniture.filter(ee=>ee.type==="inverter")){if(N.plant_card===!1||S.has(N.id))continue;S.add(N.id);let ee=H.filter(ue=>F(ue)===N.id),C=(se&&N.id===te?ee.find(ue=>ue.id!==se.id):null)??ee[0],X=this.furnitureLinks?.get(N.id)?.power??null,ae=C?q(C,N.plant_right??0,N.plant_up??0,E.size*.85):null,le=Ii(r,i,N.id);if(!ae||!X&&le===null)continue;let me=T.furniture.filter(ue=>ue.type==="home_battery").sort((ue,Ee)=>Math.hypot(ue.x-N.x,ue.z-N.z)-Math.hypot(Ee.x-N.x,Ee.z-N.z))[0],Ge=me?.soc&&me.soc!=="none"?Number(r.states[me.soc]?.state):NaN;B.push(ae),O.push({kind:"plant",name:N.name||we(r,N.type),w:Math.max(0,Ei(X?ce(r.states[X]):null,le)??0),dayIds:X?[X]:[],battery:me?{soc:Number.isFinite(Ge)?Ge:null,w:Fn.get(me.id)??null}:null})}}let So=E.device_house===!1?"floor":"all";if(w)for(let S of i.floors){for(let T of S.furniture){if(!T.holo)continue;let N=this.furnitureLinks?.get(T.id)?.power??null,ee=d.find(X=>X.id===T.id);if(!N&&!ee)continue;let C=S.elevation+fe(S,T)+T.h;B.push({p:[T.x,C+.1,T.z],n:[0,1,0],floorId:S.id,size:E.size*.7,roof:!1,views:So,room:$o(S,T.x,T.z)}),O.push({kind:"device",name:T.name||we(r,T.type),w:ee?.power??(N?ce(r.states[N]):null),dayIds:N?[N]:[],battery:null})}for(let T of S.placements){if(!T.holo)continue;let N=go(r,T.entity_id);if(!N)continue;let ee=S.elevation+(T.y??.4)+.2;B.push({p:[T.x,ee,T.z],n:[0,1,0],floorId:S.id,size:E.size*.7,roof:!1,views:So,room:$o(S,T.x,T.z)}),O.push({kind:"device",name:T.name||G(r,T.entity_id),w:ce(r.states[N]),dayIds:[N],battery:null})}}let Oe=[];if(K("sound")){let S=new Set,T=(i.settings.roof.hologram??qe).size,N=(C,X,ae,le,me,Ge)=>{let ue=r.states[X];if(!ue||W(X)!=="media")return;if(S.has(X)){let Ft=Oe.find(nr=>nr.id===X);Ft&&Oe.push({...Ft,id:`${X}#${Oe.filter(nr=>nr.id.startsWith(`${X}#`)).length+2}`,floorId:C.id,x:ae,z:le,members:[X]});return}S.add(X);let Ee=this.ro?void 0:this.mediaGrace.get(X),rn=[ue.attributes.media_title,ue.attributes.app_name,ue.attributes.source].find(Ft=>typeof Ft=="string"&&!!Ft.trim())??"";if(!(!Z(ue)&&(ue.state==="playing"||ue.state==="paused"&&!!rn&&this.pausedRecently(ue)||ue.state==="on"&&!!ue.attributes.source))){Ee&&Ee.until>Date.now()?(Oe.push({...Ee.source,playing:!1,level:0}),B.push(Ee.anchor),O.push({...Ee.card,media:{...Ee.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Ee.until-Date.now()+100))):Z(ue)||(this.mediaGrace.delete(X),Oe.push({id:X,floorId:C.id,x:ae,z:le,level:0,playing:!1,members:[]}));return}let tr=ue.state==="playing",je=ue.attributes,Aa=typeof je.volume_level=="number"?Math.min(1,Math.max(0,je.volume_level)):.5,ch=Array.isArray(je.group_members)?je.group_members.filter(Ft=>Ft!==X):[];Oe.push({id:X,floorId:C.id,x:ae,z:le,level:tr?.3+.7*Aa:0,playing:tr,members:ch});let dh=rn||I(r,"holo_media_playing"),Ra={p:[ae,C.elevation+me+.12,le],n:[0,1,0],floorId:C.id,size:T*.7,roof:!1,views:"all",room:$o(C,ae,le)},Fa={kind:"media",name:Ge,w:null,dayIds:[],battery:null,media:{id:X,title:dh,artist:typeof je.media_artist=="string"?je.media_artist:typeof je.media_album_name=="string"?je.media_album_name:"",picture:typeof je.entity_picture=="string"?je.entity_picture:null,volume:Math.round(Aa*100),playing:tr}};B.push(Ra),O.push(Fa),this.ro||this.mediaGrace.set(X,{until:Date.now()+45e3,card:Fa,source:Oe[Oe.length-1],anchor:Ra})},ee=(C,X)=>{for(let ae of C.furniture){if((ae.entity!=null&&ae.entity!=="none")!==X)continue;let le=this.furnitureLinks?.get(ae.id)?.entity;le&&N(C,le,ae.x,ae.z,fe(C,ae)+ae.h,ae.name||we(r,ae.type))}};for(let C of i.floors)ee(C,!0);for(let C of i.floors)for(let X of C.placements)N(C,X.entity_id,X.x,X.z,X.y??1.1,X.name||G(r,X.entity_id));for(let C of i.floors)ee(C,!1)}if(K("auto_pro")){let S=(i.settings.roof.hologram??qe).size;for(let T of i.floors)for(let N of T.furniture){if(N.type!=="parking"||!N.car)continue;let ee=An(r,N);if(!ee)continue;let C=oo(r,N);if(C.soc===null&&C.range===null&&C.locked===null&&C.climateOn===null)continue;let X=Uu(N,ee),ae=fe(T,N)+(X?.h??1.6);B.push({p:[N.x,T.elevation+ae+.25,N.z],n:[0,1,0],floorId:T.id,size:S*.7,roof:!1,views:"all"});let le=C.entities;O.push({kind:"car",name:N.name||we(r,ee),w:null,dayIds:[],battery:null,car:{spot:N.id,soc:C.soc,range:C.range,rangeUnit:C.rangeUnit,chargingW:C.chargingW,charging:C.charging,locked:C.locked,climateOn:C.climateOn,lock:le.lock,climate:le.climate,charge:le.charging&&/^(switch|input_boolean)\./.test(le.charging)?le.charging:null}})}}let At=this.scene.filter(S=>S.kind==="water").map(S=>({...S,level:this.dimmed?S.level*.4:S.level}));if(t.setPools(At),Qt()){let S=(i.settings.roof.hologram??qe).size;for(let T of tp(this.sceneHost(r,i))){let N=i.floors.find(C=>C.id===T.anchor.floorId);if(!N)continue;let ee=null;if(T.anchor.areaId){let C=N.outdoor.find(me=>me.id===T.anchor.areaId);if(!C||C.points.length<3)continue;let[X,ae]=Ae(C.points),le=C.type==="pool"?un(N,C):nt(N,X,ae);ee=[X,N.elevation+Math.max(le,0)+(C.above?.6:1.1),ae]}else if(T.anchor.furnitureId){let C=N.furniture.find(X=>X.id===T.anchor.furnitureId);if(!C)continue;ee=[C.x,N.elevation+fe(N,C)+C.h+.25,C.z]}ee&&(B.push({p:ee,n:[0,1,0],floorId:N.id,size:S*.7,roof:!1,views:"all"}),O.push({kind:"module",name:T.title,w:null,dayIds:[],battery:null,module:T}))}for(let T of this.scene){if(T.kind!=="tag")continue;let N=i.floors.find(ee=>ee.id===T.floorId);N&&(B.push({p:[T.at[0],N.elevation+T.at[1],T.at[2]],n:[0,1,0],floorId:N.id,size:S*.75,roof:!1,views:T.views??"all"}),O.push({kind:"bin",name:T.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:T.color??"#37e0ff",when:T.text,name:T.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(K("household")){let S=(i.settings.roof.hologram??qe).size;for(let T of rd(this.binHolos)){let N=i.floors.find(C=>C.id===T.floorId);if(!N)continue;B.push({p:[T.x,N.elevation+T.y+.04,T.z],n:[0,1,0],floorId:T.floorId,size:S*.75,roof:!1,views:"all",room:$o(N,T.x,T.z)});let ee=T.lines.map(C=>({color:C.color,when:C.when,name:C.name,soon:!!C.soon&&!C.out,out:!!C.out}));O.push({kind:"bin",name:T.lines.map(C=>C.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:ee,soon:ee.some(C=>C.soon),icon:T.lines.length===1?T.lines[0].icon??null:null}})}}t.setSound(Oe);let U=this._walk?this.walkRoomPts:null,J=B.map(S=>!this._walk||!!U&&V([S.p[0],S.p[2]],U)),re=O.filter((S,T)=>J[T]);t.setAnchors(B.filter((S,T)=>J[T])),JSON.stringify(re)!==JSON.stringify(this._holos)&&(this._holos=re),t.setSolarLevels($&&!this.dimmed?zu(i,$):new Map);let Ie=!w||!(this.flows??this._flows)||this.dimmed?[]:$u({building:i,consumers:d,summary:h,battery:A??null,fieldPower:$,devicePower:this.devicePowers(r,i)}).map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.power,color:Au(S.kind,h)})),Qe=this.poolPipes(i),er=this.scene.filter(S=>S.kind==="line"),Rt=K("fun_winter")&&!this.replay;t.setRoofLights(Rt&&Wu(r,i)?Xt(i).roof_color?"color":"warm":"off",Xt(i).roof_outline!==!1);let Mo=Rt?Nu(r,i,rt(r,this.weatherEntityId??i.settings.weather_entity)):0;t.setRoofSnow(Mo),t.setFirework(Rt&&Vu(i)),this.watchWinter(Rt),t.setFlows(this.dimmed?Ie:[...Ie,...Qe.flows,...lp(er)]),t.setPipes(Qe.tubes),t.setPatches([...this.scene.filter(S=>S.kind==="patch").map(S=>({floorId:S.floorId,points:S.points,y:S.y,color:S.color,opacity:this.dimmed?S.opacity*.4:S.opacity,...S.glow?{glow:!0}:{}})),...Bu(i,Mo)]);let Cn=[],on=st("locate")&&_i(i)?[...Cn,...bi(r,i,new Set(Cn.map(S=>S.id)))]:Cn;t.setPersonLook(zs(i)==="pin"?"pin":"figure"),t.setPersons([...on,...this.moduleFigures(i)]),this.lastPersons=on.map(S=>({id:S.id,floorId:S.floorId,roomId:S.roomId}));let ah=eu(r,i,this.openingLinks,on);t.setFloorInfo(new Map([...ah].map(([S,T])=>[S,tu(r,T)])));let Po=r.states["sun.sun"]?.attributes,Io=typeof Po?.elevation=="number"?Po.elevation:null;t.setSun(this.sunFx!==!1&&Io!==null&&typeof Po?.azimuth=="number"?{elevation:Io,azimuth:Po.azimuth}:null);let Eo=S=>I(r,S).charAt(0).toUpperCase();t.setSunPath(this.sunFx===!1?null:this.sunPathToday(r),[Eo("compass_n"),Eo("compass_e"),Eo("compass_s"),Eo("compass_w")],On(r)),t.setStyle(this.effectiveStyle());let Pa=this.weather&&!this.dimmed&&K("weather")?Bc(r,rt(r,this.weatherEntityId??i.settings.weather_entity),i.settings.rain_entity):null,Dn=Pa?Vc(Pa,i.settings.weather_effects):null;this.cloud=Dn?.cloud??0,this._sky=(Io===null?0:Math.min(1,Math.max(0,(Io+4)/16)))*(1-.45*this.cloud);let lh=Dn?Dn.sky:(i.settings.weather_effects??["sky"]).includes("sky");t.setWeather(this.weather&&!this.dimmed&&K("weather")?{...Dn??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:lh}:null),this.watchLightning(!!Dn?.lightning),this.applyTint();let Ia=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(Ia)!==JSON.stringify(this._energy)&&(this._energy=Ia);let Ea=d.some(S=>S.wallbox)?d.filter(S=>S.wallbox).reduce((S,T)=>S+T.power,0):null,za=i.floors.flatMap(S=>S.furniture.filter(T=>T.type==="inverter")).map(S=>{let T=this.furnitureLinks?.get(S.id)?.power,N=T?ce(r.states[T]):null;return N===null?null:{name:S.name||we(r,S.type),w:Math.max(0,N)}}).filter(S=>!!S);JSON.stringify(za)!==JSON.stringify(this._plants)&&(this._plants=za),Ea!==this._wallboxW&&(this._wallboxW=Ea),this.watchSolarDay([...new Set(O.flatMap(S=>S.dayIds))]);let Ta=K("energy_pro");this.watchMeters(Ta?i.energy.gas??null:null,Ta?i.energy.water??null:null),c&&(this.syncMs=this.syncMs*.8+(performance.now()-c)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let n=this.hass,t=this.building;if(!n||!t)return;let i=(this.findIndex??=Ni(n,t)).find(s=>s.entity===e);if(i){this.goTo(i);return}let r=ze(n,e);for(let s of t.floors){let a=s.openings.find(u=>{let p=this.openingLinks?.get(u.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!r&&u.area_id===r));if(!l)continue;let[c,d]=Ae(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,n=this.hass;if(!e||!n)return{entities:[],openings:[],furniture:[],low:this._low};let t=!this.openingLinks||this.linkedRegistry!==n.entities,i=t?to(n,e.floors):this.openingLinks,r=t?Nt(n,e.floors):this.furnitureLinks,s=fs(so(n,e,this.weatherEntityId)),a=sa(n,e,{openings:i,furniture:r,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=K("auto_pro")?e.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?Zo(n,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker."))):[];return{entities:a,openings:[...i],furniture:[...r],low:this._low,cars:l,energy:K("energy_pro"),auto:K("auto_pro")}}proHint(e){}showInfo(e,n,t){this._menu=null,this._info={entity:e,x:n,y:t},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return y;let n=this.hass,t=n.states[e.entity],i=be(n,t),r=W(e.entity)==="light"&&t?.state==="on"&&i.endsWith("%")?`${I(n,"state_on")} \xB7 ${i}`:i,s=t?.last_changed?I(n,"tt_since",{time:Li(n,Date.parse(t.last_changed))}):"";return g`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${G(n,e.entity)}</span>
      <b>${s?`${r} \xB7 ${s}`:r}</b>
    </div>`}devicePowers(e,n){let t=new Map;for(let i of n.floors)for(let r of i.furniture){if(r.type!=="inverter"&&r.type!=="home_battery")continue;let s=this.furnitureLinks?.get(r.id)?.power,a=r.type==="home_battery"&&r.charge&&r.charge!=="none"?ce(e.states[r.charge]):null,l=s?ce(e.states[s],r.type==="home_battery"&&n.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&t.set(r.id,l)}return t}detectionPins(e,n){let t=[],i=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_pins===!1).map(a=>a.entity_id))??[]),r=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_popup).map(a=>a.entity_id))??[]);for(let s of n){if(r.has(s.id)&&s.model?.startsWith("camera")&&this.popOnDetection(e,s.id),!s.model?.startsWith("camera")||i.has(s.id))continue;let a=this.now(),l=Ve(e,s.id).filter(_=>{let b=e.states[_];return b?b.state==="on"?!0:b.state==="off"&&!!b.last_changed&&a-Date.parse(b.last_changed)<a_:!1}),c=new Map;for(let _ of l){let b=uo(e,_);c.has(b)||c.set(b,_)}c.size>1&&c.delete("motion");let d=(s.rotation??0)*Math.PI/180,u=[-Math.sin(d),Math.cos(d)],p=s.model==="camera_ceiling",h=0;for(let[_,b]of c){let f=e.states[b],w=f?.last_changed?Li(e,Date.parse(f.last_changed)):"";t.push({id:`detect:${b}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(p?0:u[0]*1.1),z:s.z+(p?0:u[1]*1.1),y:1.4+.4*h++,icon:Up[_]??Up.motion,name:G(e,b),text:`${I(e,`detect_${_}`)}${w?` \xB7 ${w}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return t}gridPin(e,n,t){let i=Pi(n);if(!i)return null;let r=Math.abs(t)<5,s=n.settings.outage_entity;return s&&Jo(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:d_,name:I(e,"holo_grid"),text:I(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:c_,name:I(e,"holo_grid"),text:r?de(e,0):`${I(e,t<0?"energy_grid_export":"energy_grid_import")} ${de(e,Math.abs(t))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,n){let t=[e,n].filter(s=>!!s),i=this.replay?"":t.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let s=await vu(this.hass,t);this.meterKey===i&&s&&(this._meters={gas:e?s.get(e)??null:null,water:n?s.get(n)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}poolPipes(e){let n=[],t=[],i=new Map(this.scene.filter(r=>r.kind==="pipeflow").map(r=>[r.areaId,r.flows]));for(let{floor:r,area:s}of vp(e.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],c=new Map(Object.entries(i.get(s.id)??{})),d=Gi(e,r,s),u=(p,h)=>oa(p,h,s,r);n.push(...wp(a.pipes??[],c,d,u));for(let p of l){if(p.kind!=="inlet")continue;let h=d(`port:${p.id}`),_=h&&ia(s,[h.x,h.z]);if(!h||!_)continue;let b=(a.pipes??[]).find(w=>w.to===`port:${p.id}`),f=b?c.get(b.id):void 0;t.push({floorId:r.id,points:[[h.x+_[0]*.03,h.y,h.z+_[1]*.03],[h.x-_[0]*.09,h.y,h.z-_[1]*.09]],radius:.035,water:f?.active?f.color:null,fittings:[]})}for(let p of a.joints??[]){if(p.kind!=="wall"&&p.kind!=="floor")continue;let h=d(`joint:${p.id}:inside`),_=d(`joint:${p.id}:outside`),b=p.kind==="floor"?.03:h.y;t.push({floorId:r.id,points:[[h.x,b,h.z],[_.x,_.y,_.z]],radius:.05,water:null,fittings:[]})}for(let p of a.pipes??[]){let h=oa(yo(p,d),p,s,r);if(h.length<2)continue;let _=c.get(p.id),b=[],f=Ki(h);for(let[w,k]of[[p.from,.04],[p.to,f-.04]]){let x=w.startsWith("dev:")||w.startsWith("joint:")?Ui(h,k):null;x&&b.push({kind:"sleeve",p:x.p,dir:x.dir})}for(let w of p.fittings??[]){let k=Ui(h,w.at);k&&b.push({kind:w.kind,p:k.p,dir:k.dir,open:w.open!==!1})}t.push({floorId:p.floor_id,points:h,radius:.025,water:_?.active?_.color??na:null,fittings:b})}}return{flows:n,tubes:t}}watchSolarDay(e){let n=this.replay;if(n){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(n.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?n.stats(e,new Date(n.t).setHours(0,0,0,0),n.t+1):null;return}let t=e.join(",");if(t===this.holoIds)return;if(this.holoIds=t,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let r=await Iu(this.hass,e);this.holoIds===t&&(this._rows=r)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoShape="";holoBoxes=[];holoSizes=new Map;holoStage={w:0,h:0,at:0};placeHolo(e,n,t,i,r,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&i!==this._holoOn&&(this._holoOn=i);let d=this._holos[e],u=(this.building?.settings.roof.hologram??qe).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(i=!1);let p=!i;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!i)return;if(d?.kind==="bin"){let F=Math.max(.6,r*.8),j=!!d.bin?.icon&&r*.8<.62;a.classList.contains("fp3d-holo-far")!==j&&(a.classList.toggle("fp3d-holo-far",j),this.holoSizes.delete(e)),j&&(F=1);let q=this.holoSizes.get(e),B=performance.now();(!q||B-q.at>2e3)&&(q={w:a.offsetWidth||90,h:a.offsetHeight||40,at:B},this.holoSizes.set(e,q));let O=q.w*F,Q=q.h*F,L=t;for(let se=0;se<6;se++){let te=this.holoBoxes.find(xe=>n-O/2<xe.x1+3&&n+O/2>xe.x0-3&&L-Q<xe.y1+3&&L>xe.y0-3);if(!te)break;L=te.y0-4}this.holoBoxes.push({i:e,x0:n-O/2,x1:n+O/2,y0:L-Q,y1:L}),a.style.transform=`translate(${n.toFixed(1)}px, ${L.toFixed(1)}px) scale(${F.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=r*.8,_=34*h,b=46*h,f=n+(s?_:-_),w=t-b,k=this.holoSizes.get(e),x=performance.now();(!k||x-k.at>2e3)&&(k={w:a.offsetWidth||184,h:a.offsetHeight||90,at:x},this.holoSizes.set(e,k));let v=k.w*h,m=k.h*h;if(x-this.holoStage.at>2e3){let F=a.parentElement;this.holoStage={w:F?.clientWidth||innerWidth,h:F?.clientHeight||innerHeight,at:x}}let M=8,P=this.holoStage.w,z=this.holoStage.h,R=s?f:f-v,A=P>v+2*M?Math.max(0,M-R)-Math.max(0,R+v-(P-M)):0;R+=A,f+=A;let $=R+v;for(let F=0;F<6;F++){let j=this.holoBoxes.find(q=>R<q.x1+4&&$>q.x0-4&&w-m<q.y1+4&&w>q.y0-4);if(!j)break;w=j.y0-6}let E=60,H=w-m<E;if(H){w=t+b+m;for(let F=0;F<6;F++){let j=this.holoBoxes.find(q=>R<q.x1+4&&$>q.x0-4&&w-m<q.y1+4&&w>q.y0-4);if(!j)break;w=j.y1+6+m}z>m+E+M&&(w=Math.min(w,z-M)),w=Math.max(w,E+m)}this.holoBoxes.push({i:e,x0:R,x1:$,y0:w-m,y1:w});let D=s||(this.building?.settings.roof.hologram??qe).mirror!==!1;if(a.style.transform=D?`translate(${f.toFixed(1)}px, ${w.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${R.toFixed(1)}px, ${w.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let F=l.firstElementChild,j=l.lastElementChild;F?.setAttribute("x1",n.toFixed(1)),F?.setAttribute("y1",t.toFixed(1)),F?.setAttribute("x2",f.toFixed(1)),F?.setAttribute("y2",(H?w-m:w).toFixed(1)),j?.setAttribute("cx",n.toFixed(1)),j?.setAttribute("cy",t.toFixed(1))}}renderHologram(){let e=this._energy,n=()=>this._holos.map((s,a)=>s.kind==="bin"?this.renderBinCard(s,a):y),t=this._holos.some(s=>s.kind==="module"||s.tag);if(!(t||K("energy_pro")||K("sound")||K("auto_pro")||K("pool")||K("household"))||!this.cardsOn())return K("household")||t?n():y;if(this.roomId&&!(this.building?.settings.roof.hologram??qe).device_room)return this._holos.map((s,a)=>s.kind==="media"?this.renderMediaCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):y);let i=this.floorId===null||(this.building?.floors.length??0)<=1,r=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&i;return this._holos.map((s,a)=>s.kind==="module"?this.renderModuleCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):s.kind==="car"?this.renderCarCard(s,a):s.kind==="media"?this.renderMediaCard(s,a):s.kind==="device"?this.renderDeviceCard(s,a):r?this.renderHoloCard(s,a,e):y)}renderBinCard(e,n){let t=e.bin,i=t.lines.length===1?t.lines[0]:null,r=t.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return g`<div class="fp3d-holo fp3d-holo-bin ${t.soon?"":"fp3d-holo-later"} ${i?.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="note" aria-label=${r} style="--bin:${t.lines[0].color}">
      ${t.icon?g`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${t.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:y}
      ${i?g`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:g`<div class="fp3d-holo-body fp3d-holo-lines">
            ${t.lines.map(s=>g`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,n){let t=this.hass,i=_=>I(t,_),r=e.car,s=!this.mediaFolded.has(r.spot),a=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(_,b,f)=>{t.callService(_,b,{entity_id:f})},c=(_,b)=>_.startsWith("climate.")?l("climate",b?"turn_on":"turn_off",_):l("homeassistant",b?"turn_on":"turn_off",_),d=()=>{if(!r.lock)return;let _=r.lock.startsWith("lock.");if(r.locked){if(!confirm(i("car_unlock_confirm")))return;_?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else _?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},u=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",p=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),h=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${i("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${ie(t,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${de(t,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?g`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${u}"></i></div>`:y}
          ${s&&!this.ro&&(p||h||r.charge)?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?g`<button title=${r.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${d}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:y}
                ${h?g`<button class=${r.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>c(r.climate,!r.climateOn)}>❄</button>`:y}
                ${r.charge?g`<button class=${r.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>c(r.charge,!r.charging)}>⚡</button>`:y}
              </div>`:y}
        </div>
      </div>`}renderModuleCard(e,n){let t=e.module,i=!this.mediaFolded.has(t.id),r=()=>{this.mediaFolded.has(t.id)?this.mediaFolded.delete(t.id):this.mediaFolded.add(t.id),this.requestUpdate()},s=f=>f?`color:${f}`:"",a=this._low||this.clientWidth<600,l=a&&!this.moduleFull.has(t.id),c=a&&[...t.rows??[],...t.cells??[],...t.chain?.items??[],...t.spark?[t.spark]:[]].some(f=>f.minor),d=()=>{this.moduleFull.has(t.id)?this.moduleFull.delete(t.id):this.moduleFull.add(t.id);try{localStorage.setItem(Yp,JSON.stringify([...this.moduleFull]))}catch{}this.requestUpdate()},u=Bi(t.rows,l),p=Bi(t.cells,l),h=t.chain?Bi(t.chain.items,l):[],_=t.spark&&t.spark.values.length>1&&!(l&&t.spark.minor)?t.spark:null,b=!!(t.chain||t.cells?.length||t.status);return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${b?"fp3d-holo-mod-wide":""} ${this.cardPing===t.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${t.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${r}><span>${t.icon} ${t.title}</span><span class="fp3d-holo-live" style=${s(t.liveColor)}>${t.live??""}</span></div>
          ${t.status?g`<div class="fp3d-holo-status" style=${t.status.color?`--st:${t.status.color}`:""}>
                ${t.status.icon?g`<i>${t.status.icon}</i>`:y}<b>${t.status.text}</b>${t.status.since?g`<span>${t.status.since}</span>`:y}
              </div>`:y}
          ${t.main?g`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(t.main.color)}>${t.main.text}</b><span>${t.main.sub??""}</span>
                ${t.main.side?g`<em style=${s(t.main.side.color)}><b>${t.main.side.text}</b>${t.main.side.sub?g`<small>${t.main.side.sub}</small>`:y}</em>`:y}
              </div>`:y}
          ${i&&h.length?g`<div class="fp3d-holo-chain">
                  ${h.map((f,w)=>g`${w?g`<s>→</s>`:y}<div><small>${f.label}</small><b style=${s(f.color)}>${f.value}</b></div>`)}
                </div>
                ${t.chain.note?g`<div class="fp3d-holo-chain-note" style=${s(t.chain.noteColor)}>${t.chain.note}</div>`:y}`:y}
          ${i?u.map(f=>g`<div class="fp3d-holo-mrow"><span>${f.label}</span><b style=${s(f.color)}>${f.value}</b>${f.at!==void 0?f.fill?g`<i class="fp3d-holo-mrow-fill"><s style="width:${f.at}%;background:${f.color??"#37e0ff"}"></s></i>`:g`<i><em style="left:${f.at}%;background:${f.color??"#37e0ff"};color:${f.color??"#37e0ff"}"></em></i>`:g`<i class="fp3d-holo-mrow-none"></i>`}</div>`):y}
          ${i&&p.length?g`<div class="fp3d-holo-cells">${p.map(f=>g`<div><small>${f.label}</small><b style=${s(f.color)}>${f.value}</b></div>`)}</div>`:y}
          ${i&&t.hint?g`<div class="fp3d-holo-hint" style=${t.hint.color?`--hint:${t.hint.color}`:""}>${t.hint.text}</div>`:y}
          ${i?(t.lines??[]).map(f=>g`<div class="fp3d-holo-mline">${f}</div>`):y}
          ${i&&_?g`${_.label?g`<div class="fp3d-holo-spark-label">${_.label}</div>`:y}${r_(_.values,_.color??"#ffb347")}`:y}
          ${i&&t.chips?.length?g`<div class="fp3d-holo-chips">
                ${t.chips.map(f=>g`<div class="fp3d-holo-mline">${f.title}</div>
                    <div class="fp3d-holo-chip-row">${f.items.map(w=>g`<button class=${w.on?"fp3d-holo-on":""} title=${w.title??""} @click=${()=>w.onTap()}>${w.label}</button>`)}</div>`)}
              </div>`:y}
          ${i&&c?g`<button class="fp3d-holo-more" @click=${d}>${I(this.hass,l?"holo_more":"holo_less")}</button>`:y}
          ${i&&!this.ro&&t.buttons?.length?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${t.buttons.map(f=>g`<button class=${f.on?"fp3d-holo-on":""} title=${f.title??""} @click=${()=>f.onTap()}>${f.label}</button>`)}</div>`:y}
        </div>
      </div>`}serviceFailed(e,n){let t=n&&typeof n=="object"&&"message"in n?String(n.message):String(n);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${t}`},bubbles:!0,composed:!0}))}renderMediaCard(e,n){let t=this.hass,i=x=>I(t,x),r=e.media,s=!this.mediaFolded.has(r.id),a=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(x,v={})=>{Promise.resolve(t.callService("media_player",x,{entity_id:r.id,...v})).catch(m=>this.serviceFailed(`media_player.${x}`,m))},c={down:x=>x.currentTarget.dataset.pressed=String(x.pointerId),up:x=>v=>{let m=v.currentTarget;m.dataset.pressed===String(v.pointerId)&&(delete m.dataset.pressed,v.stopPropagation(),m.dataset.acted=String(Date.now()),x())},key:x=>v=>{let m=v.currentTarget;Date.now()-Number(m.dataset.acted??0)<700||(m.dataset.acted=String(Date.now()),x())}},d=t.states[r.id]?.attributes.supported_features,u=x=>typeof d!="number"||(d&x)!==0,p=this.mediaIntent.get(r.id);p&&(p.playing===r.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(r.id);let h=this.mediaIntent.get(r.id)?.playing??r.playing,_=u(16384)||u(1),b=()=>{this.mediaIntent.set(r.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},f=this.mediaVolume.get(r.id);f&&(Math.abs(f.v-r.volume)<=2||Date.now()-f.at>3e4)&&this.mediaVolume.delete(r.id);let w=this.mediaVolume.get(r.id)?.v??r.volume,k=(x,v)=>{this.mediaVolume.set(r.id,{v:x,at:Date.now()}),this.requestUpdate(),(v||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:x/100}))};return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?g`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:g`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?g`<span>${r.artist}</span>`:y}</div>
        </div>
        ${s&&!this.ro?g`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${h?!u(1):!_} @pointerdown=${c.down} @pointerup=${c.up(b)} @click=${c.key(b)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(w)}
                  aria-label=${i("volume")}
                  @input=${x=>k(Number(x.target.value),!1)}
                  @change=${x=>k(Number(x.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${w} %</span>
              </div>`:y}
      </div>
    </div>`}renderDeviceCard(e,n){let t=this.hass,i=c=>I(t,c),r=!this.holoFolded.has(n),s=this.dayOf(e),a=s&&s.curve.length>1?Ds(s.curve,s.peak):null,l=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()};return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${de(t,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${r&&s?g`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ie(t,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${de(t,s.peak)}</b></div>`:y}
        ${r&&a?et`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${n})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:y}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let n=Object.fromEntries(e.dayIds.filter(t=>this._rows[t]).map(t=>[t,this._rows[t]]));return Object.keys(n).length?Pu(n,new Date(this.now())):null}renderHoloCard(e,n,t){let i=this.hass,r=f=>I(i,f),s=!this.holoFolded.has(n),a=this.dayOf(e),l=e.kind==="main",c=l&&t.grid!==null&&t.consumption!==null&&t.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,t.grid)/t.consumption)*100))):null,d=a&&a.curve.length>1?Ds(a.curve,a.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()},_=l?t.solar??t.consumption??0:e.w??0,b=l?t.battery!==null||t.soc!==null?{soc:t.soc,w:t.battery}:null:e.battery;return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${de(i,_)}</b><span>${r(l&&t.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?g`${l&&this._plants.length>1?g`<div class="fp3d-holo-plants">${this._plants.map(f=>g`<span>${f.name}</span><b>${de(i,f.w)}</b>`)}</div>`:y}
              ${a?g`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ie(i,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${de(i,a.peak)}</b></div>`:y}
              ${d?et`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${n})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:y}
              <div class="fp3d-holo-grid">
                ${b?g`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${b.soc!==null?`${Math.round(b.soc)} %`:de(i,Math.abs(b.w??0))}</b>
                      ${b.w!==null&&Math.abs(b.w)>=5?g`<span>${b.w<0?"\u25B2":"\u25BC"} ${de(i,Math.abs(b.w))}</span>`:y}
                    </div>`:y}
                ${l&&t.grid!==null?g`<div class="fp3d-holo-cell ${t.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${de(i,Math.abs(t.grid))}</b> <span>${Math.abs(t.grid)<5?"":r(t.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:y}
                ${l&&t.consumption!==null?g`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${de(i,t.consumption)}</b></div>`:y}
                ${l&&this._wallboxW!==null?g`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${de(i,this._wallboxW)}</b></div>`:y}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?g`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?g`<span>🔥 ${r("holo_gas")} <b>${ie(i,this._meters.gas,this._meters.gas<10?2:1)} ${Kp(i,this.building?.energy.gas)}</b></span>`:y}
                    ${this._meters.water!==null?g`<span>💧 ${r("holo_water")} <b>${s_(i,this._meters.water,Kp(i,this.building?.energy.water))}</b></span>`:y}
                    <span>${r("holo_today_short")}</span>
                  </div>`:y}
              ${c!==null?g`<div class="fp3d-holo-bar"><div style="width:${c}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${c} %</b></div>`:y}`:y}
      </div>
    </div>`}setAlerts(e){let n=e.map(s=>`${s.kind}:${s.entity}`),t=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(n[a]));this.ro||(this.seenAlerts=new Set(n)),n.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let i=e.some(s=>!s.quiet);if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!t.length)return;let r=this.directorSettings();if(r?.alerts){let s=t[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),r.hold??Yi)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(t[0])}directorSettings(){let e=this.building?.settings.director;return this.director&&!this.ro&&K("camera_cockpit")&&Dp(e)?e:null}direct(){let e=this.directorSettings(),n=this.hass,t=this.building;if(!e||!n||!t){this.directorSrc&&(this.directing=new ko,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),r=e.hold??Yi,s=`${JSON.stringify(e)}|${t.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==n.entities||this.directorSrc.building!==t||this.directorSrc.sig!==s){let c=[...new Set(t.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],d=e.motion??"off";this.directorSrc={registry:n.entities,building:t,sig:s,bells:(e.doorbell?Op(n,e.doorbell_entity):[]).map(u=>({id:u,camera:Wp(n,u,c,e.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>Ve(n,u).filter(p=>d==="all"||uo(n,p)==="person").map(p=>({sensor:p,cam:u})))}}let a=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,n.states[c.id],(d,u)=>ma(d,u,i))&&a.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of e.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,n.states[c.entity],(d,u)=>Lp(d,u,i))&&a.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,n.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(e.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,i)&&a.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of a)if(this.directing.offer(c,i,r)){this.directorShow(()=>this.directorGo(c));break}}directorShow(e){let n=this.viewer;if(!n)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:n.getView()}),n.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let t=this.directing.current;t&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,t.until-Date.now())+50))}directorGo(e){let n=this.building;if(n){if(e.camera&&n.floors.some(t=>t.placements.some(i=>i.entity_id===e.camera))){let t=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(t),250)):this.lookThrough(t);return}if(e.kind==="appliance"){let t=this.appliances.get(e.key.slice(4));t&&this.goTo({kind:"device",name:"",where:"",floorId:t.floorId,roomId:null,entity:t.entity,icon:null,x:t.x,z:t.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),n=this.directorBack;e&&(this.directorBack=null,!(!e.back||!n)&&(this._through&&(this._through=null),this.floorId!==n.floorId&&this.fire("floor-tap",{floorId:n.floorId}),n.roomId?setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:n.roomId}),60):this.roomId&&n.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(n.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,n){let t=this.building,i=this.hass,r=t?.floors.find(d=>d.id===e),s=r?oe(r).find(d=>d.id===n):void 0;if(!t||!i||!r||!s||this.ro)return;let a=new Set(ke(i,s.area_id).filter(d=>W(d)==="light"));for(let d of r.placements)W(d.entity_id)==="light"&&V([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of r.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Zn(d.type)&&V([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>i.states[d]?.state==="on");i.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:n,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,n=this.building,t=this.hass;if(!e||!n||!t)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Hu(t,n,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([c,d])=>[c,Fu(a,d)]))}let r=new Map;if(this.heatMode==="values")for(let a of n.floors)for(let l of oe(a)){let c=We(t,a,l,"temperature"),d=We(t,a,l,"humidity"),u=We(t,a,l,"co2"),p=[c!==null?`${ie(t,bt(t,c),1)} ${Le(t)}`:null,d!==null?`${ie(t,d,0)} %`:null,u!==null?`${ie(t,u,0)} ppm`:null].filter(h=>!!h);p.length&&r.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=_d(l).map(d=>d*a);if(l.roomId)i.set(l.roomId,c);else for(let d of n.floors)if(!l.floorId||d.id===l.floorId)for(let u of d.rooms)i.set(u.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,n,t,i){let r=[],s=[],a=new Map,l=new Map,c=[],d=new Set(t),u=K("household"),p=[];this.binHolos=[];let h=new Map(this.scene.filter(v=>v.kind==="glow").map(v=>[v.furnitureId,v]));for(let v of n.floors)for(let m of v.furniture){let M=this.furnitureLinks.get(m.id),P=this.stateFaces(e,m);if(P.length&&a.set(m.id,{color:P[0].color,level:P[0].level,faces:P}),Zn(m.type)){let U=this.lampMarker(e,v,m,M?.entity??null);r.push(U);let J=(m.type==="lamp_fan"||$r(ye(m.type)))&&m.fan&&m.fan!=="none"?m.fan:null;if(J&&!t.has(J)){t.add(J);let re=e.states[J],Ie=m.rotation*Math.PI/180,Qe=Math.min(.45,m.w*.3);r.push({id:J,floorId:v.id,roomId:U.roomId,x:m.x+Math.cos(Ie)*Qe,z:m.z+Math.sin(Ie)*Qe,y:U.y,icon:m.icon?Ze(m.icon):qt("fan"),name:G(e,J),text:re&&qo(re)>0&&typeof re.attributes.percentage=="number"?`${Math.round(re.attributes.percentage)} %`:re?be(e,re):"",active:re?He(re):!1,unavailable:re?Z(re):!1,glow:null,furnitureId:m.id,show:m.marker??"always",fromFurniture:!0})}continue}if(oc.has(m.type)){let U=this.techItem(e,v,m,a,t);U&&(r.push(U),l.set(m.id,U.id));continue}if(nc.has(m.type)){let U=this.gangItem(e,v,m,s,a,i);U&&(r.push(U),l.set(m.id,U.id));continue}if(m.type==="alarm_keypad"){let U=(m.entity&&m.entity!=="none"?m.entity:null)??gn(e,n);U&&l.set(m.id,U);continue}let z=h.get(m.id);if(z&&a.set(m.id,{color:z.color,level:z.level}),(m.type==="plant"||m.type.startsWith("plant_")||rs(m.type))&&!!m.moisture&&m.moisture!=="none"){l.set(m.id,`plant:${m.id}`);let U=ii(m,e);if(U?.thirsty){let J=v.rooms.find(Ie=>Ie.points.length>=3&&V([m.x,m.z],Ie.points)),re=U.pct!==null?`${Math.round(U.pct)}%`:I(e,"plant_thirsty");r.push({id:`plant:${m.id}`,floorId:v.id,roomId:J?.id??null,x:m.x,z:m.z,y:fe(v,m)+m.h+.18,icon:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',name:m.name||we(e,m.type),text:`\u{1F4A7} ${re}`,active:!0,unavailable:!1,glow:{color:[1,.55,.15],level:.9},furnitureId:m.id,show:"always",fromFurniture:!0}),p.push({icon:"watering-can-outline",text:I(e,"hh_plant",{name:m.name||we(e,m.type)}),entity:m.moisture??null,hot:!0})}continue}if(m.type==="waste_bin"||m.type==="mailbox"){let U=u?this.householdState(e,v,m):null;U?.screen&&a.set(m.id,U.screen),U?.marker&&r.push(U.marker);let J=m.type==="waste_bin"?m.bin_source:m.entity;u&&typeof J=="string"&&J!=="none"&&l.set(m.id,`hh:${J}#${m.id}`),U?.item&&p.push(U.item);continue}if(u){let U=hd(m,e);U.length&&!a.has(m.id)&&a.set(m.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let J of U){let re=m.name||we(e,m.type);p.push({icon:"wrench-outline",text:J===m.service?I(e,"hh_service",{name:re}):I(e,"hh_service2",{name:re,what:G(e,J)}),entity:J})}(m.type==="fridge"||m.type==="fridge_smart")&&ri(m,e)&&(a.set(m.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),p.push({icon:"fridge-alert-outline",text:I(e,"hh_fridge_open",{name:m.name||we(e,m.type)}),entity:yt(m)[0]??null}))}let $=m.type==="parking"&&K("auto_pro")&&!!m.car?oo(e,m):null,E=dd(m.type),H=!!E,D=m.type==="home_battery"?m.soc:m.type==="wallbox"?m.status:m.type==="parking"&&$?m.car?.device??$.entities.soc:u&&H?m.remaining??null:null,F=D&&D!=="none"?D:null,j=m.extra&&m.extra!=="none"&&e.states[m.extra]?m.extra:null,q=j?be(e,e.states[j]):"",B=U=>q?U?`${U} \xB7 ${q}`:q:U,O=M??(F||j?{entity:null,power:null}:void 0);if(!O)continue;let Q=m.type==="home_battery"?F??O.entity??O.power:O.entity??O.power??F??j;l.set(m.id,Q);let L=O.entity?e.states[O.entity]:void 0,se=m.type==="meter"?n.energy.grid_invert&&!m.export:m.type==="home_battery"?n.energy.battery_invert&&!m.charge:!1,te=O.power?ce(e.states[O.power],se):null,xe=m.type==="home_battery"&&m.charge&&m.charge!=="none"?m.charge:m.type==="meter"&&m.export&&m.export!=="none"?m.export:null,Fe=xe?ce(e.states[xe]):null;Fe!==null&&(te=Math.max(0,te??0)-Math.max(0,Fe)),O.power&&te!==null&&!i.has(O.power)&&(i.add(O.power),s.push({id:Q,powerEntity:O.power,floorId:v.id,x:m.x,z:m.z,power:Math.max(0,te),wallbox:m.type==="wallbox"||void 0}));let Tt=typeof m.run_w=="number"&&m.run_w>0?m.run_w:10,Fn=typeof m.run_w=="number"&&m.run_w>0&&te!==null&&te<=m.run_w,tn=!!O.entity&&/^(switch|input_boolean)\./.test(O.entity)&&te!==null,Ue=(te??0)>Tt||!tn&&(L?.state==="on"||L?.state==="running"||Lr(L)&&He(L));H&&this.appliances.set(m.id,{floorId:v.id,x:m.x,z:m.z,entity:O.entity??O.power??m.id,running:Ue});let ut=null;if(u&&H){let U=m.remaining&&m.remaining!=="none"?e.states[m.remaining]:void 0,J=us(U),re=Ue||!O.power&&!O.entity&&(J??0)>0,Ie=yt(m),Qe=Mo=>Ie.some(Cn=>{let on=e.states[Cn];return!!on?.last_changed&&Date.parse(on.last_changed)>Mo}),er=this.finished.update(m.id,re,Qe),Rt=m.name||(O.entity?G(e,O.entity):we(e,m.type));re?(Ue||a.set(m.id,Zp(E)),J!==null&&!hs(L,O.power?te:null,Tt)&&(ut=I(e,"hh_left",{t:pd(J)}),p.push({icon:"timer-outline",text:`${Rt}: ${ut}`,entity:m.remaining??O.entity}))):(ps(L)||ps(U)||er)&&(ut=I(e,"hh_done"),a.set(m.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),p.push({icon:"check-circle-outline",text:I(e,"hh_finished",{name:Rt}),entity:O.entity??O.power}))}if($&&An(e,m)){let U=[];if($.soc!==null){let J=$.soc>=50?[.3,1,.5]:$.soc>=20?[1,.8,.25]:[1,.3,.25];U.push({part:"band",color:J,level:$.charging?1:.6})}if($.locked===!1&&U.push({part:"lights",color:[1,.42,.02],level:1}),$.climateOn){let J=$.entities.climate?e.states[$.entities.climate]:void 0,re=!!J&&(J.attributes.hvac_action==="cooling"||J.state==="cool");U.push({part:"cabin",color:re?[.45,.8,1]:[1,.55,.22],level:.35})}U.length&&a.set(`${m.id}:vehicle`,{color:U[0].color,level:U[0].level,faces:U})}if(m.type==="radiator"&&(L&&W(L.entity_id)==="climate"||m.heat_sensor)){let U=L&&W(L.entity_id)==="climate"?L.attributes:null;if(Sc(e,m.heat_sensor)??U?.hvac_action==="heating"){let re=U&&typeof U.temperature=="number"&&typeof U.current_temperature=="number"?U.temperature-U.current_temperature:1;a.set(m.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,re))})}else h.has(m.id)&&a.delete(m.id)}else if(m.type==="ac_unit"&&L&&W(L.entity_id)==="climate"){let U=Ic(L);U&&a.set(m.id,U);let J=String(L.attributes.hvac_action??"").toLowerCase(),re=String(L.state??"").toLowerCase(),Ie=J==="cooling"||!J&&re==="cool"?"cool":J==="heating"||!J&&re==="heat"?"heat":J==="fan"||J==="drying"||!J&&(re==="fan_only"||re==="dry")?"fan":null;Ie&&c.push({id:m.id,floorId:v.id,x:m.x,z:m.z,y:(m.mount_y??2.05)+.03,w:m.w,d:m.d,rotation:m.rotation,mode:Ie})}else if(E&&Ue)a.set(m.id,Zp(E));else if(m.type==="stove"||kr(m.type)){let U=Pc(L,Ue);U>0&&a.set(m.id,{color:[1,.05,.01],level:U,faces:[{part:"burners",color:[1,.05,.01],level:U}]})}let Hn=ye(m.type),nn=!!Hn&&!Hn.light&&Hn.parts.some(U=>U.glow);if(L&&nn&&K("sound")&&W(L.entity_id)==="media"&&L.state==="playing"&&!jo(m.type)){let U=typeof L.attributes.volume_level=="number"?L.attributes.volume_level:.5;a.set(m.id,{color:Gr(L)??[.22,.88,1],level:.5+.5*U,ring:!0,plain:!0})}if(L&&jo(m.type)&&!kr(m.type)&&!(Do(m.type)&&W(L.entity_id)==="cover")){let U=K("screens"),J=W(L.entity_id)==="light"?ot(L):null,re=W(L.entity_id)==="media"&&["playing","on","paused","idle"].includes(L.state),Ie=U&&W(L.entity_id)==="media"?Gr(L):J?J.color:He(L)||re?[.22,.88,1]:null,Qe=U&&W(L.entity_id)==="media"?L.attributes.entity_picture??null:null;Ie&&a.set(m.id,{color:Ie,level:L.state==="playing"?1:.6,picture:Qe,ring:nn&&K("sound")&&L.state==="playing"})}if(d.has(Q))continue;t.add(Q);let So=O.entity?W(O.entity):null,Oe=v.rooms.find(U=>U.points.length>=3&&V([m.x,m.z],U.points)),At=L&&Dl(m.type)&&L.entity_id.startsWith("water_heater.")?__(e,L):null;r.push({id:Q,floorId:v.id,roomId:Oe?.id??null,x:m.x,z:m.z,y:v_(m)+fe(v,m),icon:m.icon?Ze(m.icon):At?Ze("water-boiler"):qt(So??"switch"),name:m.name||(O.entity?G(e,O.entity):we(e,m.type)),ownName:m.name||void 0,showName:!!m.show_name,text:B(ut??($?this.carText(e,$,!!L&&!Oi.has(L.state.toLowerCase())):m.type==="home_battery"?this.batteryText(e,F,te):m.type==="wallbox"?this.wallboxText(e,F,te):m.type==="meter"?this.meterText(e,te):At?At.text:L&&!tn?be(e,L):Fn?I(e,"pin_standby"):te!==null?de(e,Math.max(0,te)):"")),active:ut?!0:$?$.charging:At?At.on:L&&!tn?He(L):(te??0)>(typeof m.run_w=="number"&&m.run_w>0?m.run_w:5),unavailable:L?Z(L):!1,glow:null,furnitureId:m.id,energyDevice:m.type==="inverter"||m.type==="home_battery"||m.type==="wallbox"||m.type==="meter"||!!$||!!j,...Fn?{standby:Fn}:{},show:m.marker??($||ut?"always":void 0),fromFurniture:!0})}let _=n.settings.household;if(_?.bin_next_only||typeof _?.bin_days=="number"){let v=sd(this.binHolos.filter(m=>!m.icon),{nextOnly:_.bin_next_only,ahead:_.bin_days});this.binHolos=this.binHolos.filter(m=>m.icon||v.has(m.id))}let b=n.settings.household?.notes,f=b&&b!=="none"?e.states[b]:void 0;if(u&&f&&!Z(f)&&f.state.trim()){let v=f.state.split(/\s*(?:\||\n|;)\s*/).map(m=>m.trim()).filter(Boolean).slice(0,8);p.unshift(...v.map(m=>({icon:"pin-outline",text:m,entity:b})))}if(u&&this.dayEvents.length){let v=p.findIndex(m=>m.icon!=="pin-outline");p.splice(v<0?p.length:v,0,...nd(this.dayEvents,new Date,e.language))}this._household=p.filter((v,m)=>p.findIndex(M=>M.text===v.text)===m),this.cameraScreens=0;let w=Vr(e,n.floors),k=K("screens");for(let v of n.floors)for(let m of v.furniture){if(!k||!m.pictures?.length||!jo(m.type)||m.type==="fridge_smart"&&w.get(m.id)?.right)continue;let M=m.pictures.find(R=>Fc(e,R));if(!M)continue;let P=this.pictureUrl(M.image),z=m.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];P&&a.set(m.id,{color:z,level:1,picture:P,plain:!0})}for(let v of n.floors)for(let m of v.furniture){if(m.type!=="neon_sign")continue;let M=this.furnitureLinks.get(m.id)?.entity??null,P=uu(m,M?e.states[M]:void 0,!!M),z=pu(du(m.sign_text),P.color,P.on,P.level,Math.max(.05,m.w)/Math.max(.05,m.h));a.set(m.id,{color:[.015,.015,.03],level:1,picture:z,plain:!0})}let x=new Map;for(let v of n.floors)for(let m of v.furniture){if(!$r(ye(m.type)))continue;let M=m.fan&&m.fan!=="none"?m.fan:this.furnitureLinks.get(m.id)?.entity??null,P=M?e.states[M]:void 0,z=M?.split(".")[0];x.set(m.id,z==="fan"?qo(P):z!=="light"&&P&&He(P)?.6:0)}this.viewer?.setSpinSpeeds(x),this.viewer?.setLiveStates(e.states,v=>this.furnitureLinks.get(v)?.entity??null);for(let v of h.values())v.top?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"strata",color:v.color,top:v.top,level:v.level}]}):v.plate?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"plate",color:v.color,level:v.level}]}):v.band&&a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"band",color:v.color,level:v.level}]});for(let v of this.scene)v.kind==="screen"&&(a.set(v.furnitureId,{color:v.color??[.06,.08,.14],level:v.level??1,picture:v.picture,plain:!0}),v.popup&&l.set(v.furnitureId,`popup:${v.popup}`));return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:r,consumers:s,screens:a,targets:l,acFlows:c}}watchHousehold(e,n){let t=n.floors.flatMap(c=>c.furniture).filter(c=>c.type==="waste_bin"||c.type==="mailbox"),i=(n.settings.household?.calendars??[]).filter(c=>typeof c=="string"&&c.startsWith("calendar.")),r=K("household")&&(t.length>0||i.length>0)&&!this.replay,s=r?Jc(n.floors):[],a=`${s.join(",")}|${i.join(",")}`;if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="",this.dayEvents=[];return}let l=async c=>{let[d,u]=await Promise.all([s.length?ed(c,s):null,i.length?td(c,i):null]);d&&(this.pickups=d),this.dayEvents=u??[],this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void l(this.hass??e),6e5),s.length||i.length?l(e):this.dayEvents=[])}gangItem(e,n,t,i,r,s){let a=Yn(t),l=t.type==="wall_socket",c=[],d=0,u=0,p=null,h=!1;if(a.forEach((v,m)=>{let M=v.entity&&v.entity!=="none"?v.entity:null,P=v.power&&v.power!=="none"?v.power:null;if(!M&&!P)return;u++;let z=M?e.states[M]:void 0,R=P?ce(e.states[P]):null;if(P&&R!==null&&(p=(p??0)+Math.max(0,R),s.has(P)||(s.add(P),i.push({id:M??P,powerEntity:P,floorId:n.id,x:t.x,z:t.z,power:Math.max(0,R)}))),z&&!Z(z)&&(h=!0),!(z?He(z):(R??0)>5))return;d++;let $=z&&W(z.entity_id)==="light"?ot(z):null;if(!l){c.push({part:"gang",index:m,of:a.length,color:$?$.color:[.22,.88,1],level:.5,accent:!$});return}let E=$?$.color:[.35,1,.55];c.push({part:"gang",index:m,of:a.length,color:E,level:R!==null?Math.min(1,.55+R/1500):.8})}),c.length&&r.set(t.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let _=No(t),b=_[0]??null,f=b?e.states[b]:void 0,w=n.rooms.find(v=>v.points.length>=3&&V([t.x,t.z],v.points)),k=p,x=yd(this.floorWalls(n),t,n.height,fe(n,t));return{id:`gangs:${t.id}`,floorId:n.id,roomId:w?.id??null,x:x.x,z:x.z,y:t.h+.2+x.y,icon:Ze(t.icon||(l?"power-socket-de":"light-switch")),name:t.name||(_.length===1&&b?G(e,b):we(e,t.type)),ownName:t.name||void 0,showName:!!t.show_name,text:u>1?`${d}/${u}${k!==null?` \xB7 ${de(e,k)}`:""}`:k!==null?de(e,k):f?be(e,f):"",active:d>0,unavailable:!!b&&!h,glow:null,power:k??void 0,furnitureId:t.id,show:t.marker??void 0,fromFurniture:!0}}techItem(e,n,t,i,r){let s=M=>typeof M=="string"&&M!=="none"?M:null,a=s(t.entity),l=a?e.states[a]:void 0,c=n.rooms.find(M=>M.points.length>=3&&V([t.x,t.z],M.points)),d={floorId:n.id,roomId:c?.id??null,x:t.x,z:t.z,ownName:t.name||void 0,showName:!!t.show_name,glow:null,furnitureId:t.id,fromFurniture:!0};if(t.type==="wifi_ap"){let M=s(t.clients),P=M?e.states[M]:void 0,z=P&&Number.isFinite(Number(P.state))?Math.round(Number(P.state)):null,R=a?Ur(l):P?Ur(P):null;if(R!==null){let $=R?[.25,.6,1]:[1,.25,.2];i.set(t.id,{color:$,level:.85,faces:[{part:"apring",color:$,level:.85}]})}let A=a??M;return!A||r.has(A)?null:(r.add(A),{...d,id:A,y:fe(n,t)-(t.variant==="wall"?-t.h-.2:.3),icon:Ze(t.icon||"access-point"),name:t.name||G(e,A),text:R===!1?I(e,"ap_offline"):z!==null?I(e,"ap_clients",{n:z}):l?be(e,l):"",active:R===!0,unavailable:R===!1,show:t.marker??(R===!1?"always":void 0),energyDevice:z!==null})}let u=l?W(l.entity_id):null,p=s(t.power),h=p?ce(e.states[p]):null,_=typeof t.run_w=="number"&&t.run_w>0?t.run_w:30,b=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(h??0)>_;(b||l&&!["off","unavailable","unknown"].includes(l.state))&&i.set(t.id,{color:[1,.45,.15],level:b?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:b?.9:.3}]});let w=s(t.water_temp),k=w?e.states[w]:void 0,x=k&&Number.isFinite(Number(k.state))?Number(k.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,v=k?.attributes.unit_of_measurement??"\xB0C",m=a??w??p;return!m||r.has(m)?null:(r.add(m),{...d,id:m,y:fe(n,t)+t.h+.25,icon:Ze(t.icon||"water-boiler"),name:t.name||(a?G(e,a):we(e,t.type)),text:x!==null?`${ie(e,Math.round(x))} ${v}${b?" \xB7 \u{1F525}":""}`:l?be(e,l):"",active:b,unavailable:l?Z(l):!1,power:h??void 0,show:t.marker??void 0,energyDevice:x!==null})}floorWalls(e){let n=this.wallCache.get(e);if(!n){let t=this.building?.settings;n=$t(e.rooms,{exterior:t?.wall_exterior??.24,interior:t?.wall_interior??.12},e.walls??[]).walls,this.wallCache.set(e,n)}return n}wallCache=new WeakMap;renderGangMenu(){let e=this._gangMenu,n=this.hass,t=e&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.furnitureId);if(!e||!n||!t)return y;let i=t.type==="wall_socket";return g`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${e.x}px;top:${e.y}px">
        <span>${t.name||we(n,t.type)}</span>
        ${Yn(t).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,c=l?n.states[l]:void 0,d=s.power&&s.power!=="none"?ce(n.states[s.power]):null,u=`${i?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?G(n,l):"\u2013"}`;return g`<button class="fp3d-chip ${c&&He(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?Z(c):!0)}
            @click=${()=>{l&&(this.confirmSet.has(l)&&!confirm(I(n,"confirm_switch",{name:G(n,l)}))||wi(n,l))}}>${u}${c?g` <small>${be(n,c)}${d!==null?` \xB7 ${de(n,Math.max(0,d))}`:""}</small>`:y}</button>`})}
      </div>`}householdState(e,n,t){let i=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(t.type==="waste_bin"){let l=typeof t.bin_source=="string"&&t.bin_source!=="none"?t.bin_source:null;if(!l)return null;let c=as(t,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until});if(!c)return null;let d=c.days===0?I(e,"bin_today"):c.days===1?I(e,"bin_tomorrow"):I(e,"bin_in_days",{n:c.days}),u=i(Qc(t)[1]),p=Math.max(...u),_=p-Math.min(...u)<.12?[.92,.95,1]:u.map(x=>Math.min(1,x/Math.max(.001,p)*1.05)),b=t.name||I(e,`bin_kind_${t.bin_kind??"rest"}`),f=ls(t,e),w=`#${_.map(x=>Math.round(x*255).toString(16).padStart(2,"0")).join("")}`,k=f?I(e,"bin_out_done"):d;return this.binHolos.push({id:t.id,floorId:n.id,x:t.x,z:t.z,y:fe(n,t)+t.h,r:Math.max(t.w,t.d)/2,name:b,color:w,when:k,soon:c.days<=1&&!f,days:c.days,out:f}),{item:c.days<=1?{icon:f?"check-circle-outline":"trash-can-outline",text:`${b}: ${k}`,entity:l,hot:c.glow&&!f}:void 0}}if(t.type!=="mailbox"){let l=oi(t,e),c=t.name||we(e,t.type);return l?{item:{icon:"watering-can-outline",text:I(e,"hh_plant",{name:c}),entity:t.moisture??null,hot:!0}}:null}let r=typeof t.entity=="string"&&t.entity!=="none"?t.entity:null;if(!r)return null;let s=ld(t,e),a=[1,.62,.15];return s&&this.binHolos.push({id:t.id,floorId:n.id,x:t.x,z:t.z,y:fe(n,t)+t.h,r:Math.max(t.w,t.d)/2,name:t.name||we(e,t.type),color:"#ffb547",when:I(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:t.name?`${t.name}: ${I(e,"mailbox_post")}`:I(e,"mailbox_post"),entity:r,hot:!0}:void 0}}robotPaths(e,n){let t=this.replay;if(!t)return[];let i=[];for(let r of n.floors){let s=r.rooms.filter(a=>a.points.length>=3);for(let a of r.furniture){if(!dn(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let c=t.robotRooms(l,io(e,l,a.room_sensor)),d=[];for(let u of c){let p=jr(e,s,u),h=p?Ae(p.points):null,_=d[d.length-1];h&&(!_||_[0]!==h[0]||_[1]!==h[1])&&d.push([h[0],h[1]])}d.length&&i.push({floorId:r.id,points:d})}}return i}trailNow(e,n){let t=this.now(),i=vo(e,n),r=this.replay?this.replay.rows(i.map(a=>a.entity),t-bo,t):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return qu(i,ju(r,s,t),t)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail||!K("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let n=this.hass,t=this.building;if(!n||!t||document.hidden)return;let i=vo(n,t).map(r=>r.entity);if(i.length){try{let r=await n.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-bo).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,n){let t=[];if(Kc()){let i=new Set(n.floors.flatMap(r=>r.placements.map(s=>s.entity_id)).filter(r=>W(r)==="camera"));for(let r of i){let s=e.states[r],a=s?.attributes.entity_picture;!a||Z(s)||t.push({id:r,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=t.length>0,t}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let n=this.hass.states[e.slice(7)],t=n?.attributes.entity_picture;return!t||Z(n)?null:(this.cameraScreens++,t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),hl(this.hass,e).then(n=>{this.pictureUrls.set(e,n),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,n){let t=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(t.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||fe(e,i)>.12)return!1;let r=ye(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:V([i.x,i.z],n)||Wt(i).some(s=>V(s,n))}).map(i=>Wt(i))}robotInfos(e,n){let t=[];for(let i of n.floors)for(let r of i.furniture){if(!dn(r.type))continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=Wr(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=r.rotation*Math.PI/180,d=gt(r.type),u=r.d*(d?Cl(ye(r.type)):.14),p=[r.x-Math.sin(c)*u,r.z+Math.cos(c)*u],h=i.rooms.filter(w=>w.points.length>=3),b=(l==="cleaning"?Oc(e,h,s,io(e,s,r.room_sensor)):null)??h.find(w=>V(p,w.points)),f=l==="cleaning"&&b?this.robotObstacles(i,b.points):[];t.push({id:r.id,floorId:i.id,rest:p,restHeading:-c,mode:l,room:b?.points??null,roomId:b?.id??null,obstacles:f,...d?{model:{type:r.type,w:r.w,d:r.d,h:r.h}}:{}})}return t}batteryText(e,n,t){let i=n?Number(e.states[n]?.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${ie(e,i,0)} %`),t!==null&&Math.abs(t)>=10&&r.push(`${t<0?"\u25B2":"\u25BC"} ${de(e,Math.abs(t))}`),r.join(" \xB7 ")}meterText(e,n){return n===null?"":Math.abs(n)<5?de(e,0):`${I(e,n<0?"energy_grid_export":"energy_grid_import")} ${de(e,Math.abs(n))}`}wallboxText(e,n,t){let i=n?e.states[n]:void 0,r=String(i?.state??"").toLowerCase(),s=Mc(r),a=(t??0)>50||s.charging,l=i?.entity_id.startsWith("binary_sensor.")?r==="on":s.plugged,c=a?I(e,"wallbox_charging"):l?I(e,"wallbox_plugged"):i&&!Z(i)&&!i.entity_id.startsWith("binary_sensor.")?be(e,i):"",d=t!==null&&t>50?de(e,t):"";return[c,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,n){let t=[],i=n.state_entity&&n.state_entity!=="none"&&n.state_entity2&&n.state_entity2!=="none"?[[n.state_entity,n.state_split==="top_bottom"?"bottom":"left"],[n.state_entity2,n.state_split==="top_bottom"?"top":"right"]]:[[n.state_entity,"all"]];for(let[r,s]of i){if(!r||r==="none")continue;let a=e.states[r];if(!a||Z(a)||!(He(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=W(r)==="light"?ot(a):null;t.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return t}carText(e,n,t){let i=s=>I(e,s);if(t||n.away!==null){let s=n.away?` \xB7 ${n.away}`:"";return`${i("car_away")}${s}`}let r=[];return n.soc!==null&&r.push(`${ie(e,n.soc,0)} %`),n.range!==null&&r.push(`${ie(e,n.range,0)} ${n.rangeUnit}`),n.charging?r.push(n.chargingW!==null?`\u26A1 ${de(e,n.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):n.plugged&&r.push("\u{1F50C}"),n.locked!==null&&r.push(n.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,n,t){let r=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&V([n,t],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!_s(s).some(l=>$d(l,e.elevation+r)&&bs(l,e.elevation)))return r;let a=Sd(s,n,t,e.elevation);return a===null?r:Math.max(.5,Math.min(r,a-e.elevation))}lampMarker(e,n,t,i){let r=i?e.states[i]:void 0,s=ye(t.type),a=ac[t.type]??s?.light??"floor",l=n.rooms.some(k=>k.points.length>=3&&V([t.x,t.z],k.points)),c=a==="strip"&&!l?nt(n,t.x,t.z)+(t.mount_y??0):t.mount_y!=null&&!s?t.mount_y:s||a==="wall"||a==="strip"?fe(n,t):a==="table"?jn(n,t.x,t.z,t.h):a==="bollard"||a==="garden"?nt(n,t.x,t.z):0,d=n.rooms.find(k=>k.points.length>=3&&V([t.x,t.z],k.points)),u=this.ceilingAt(n,t.x,t.z),p=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&t.mount_y==null,h=p?n.height-u:0,_=s&&p?Math.max(0,c-h):c,b=Oo.has(t.type)&&t.mount_y!=null?Math.min(n.height,t.mount_y+Lo(t.type,t.h)):Math.abs(h)>.01?u:void 0,f=b??n.height,w=s?s.mount==="ceiling"?Math.max(.5,_-.15):_+t.h+.2:{ceiling:f-.3,downlight:f-.25,spot:f-.35,panel:f-.25,pendant:Math.max(.6,f-t.h-.25),fan:Math.max(.6,f-t.h-.25),floor:_+t.h+.25,uplight:_+t.h+.25,table:_+t.h+.2,wall:_+t.h+.2,strip:t.upright?_+t.w+.15:Math.max(.3,_-.2),bollard:_+t.h+.25,garden:_+t.h+.25}[a];return{id:i??`lamp:${t.id}`,floorId:n.id,roomId:d?.id??null,x:t.x,z:t.z,y:w,icon:t.icon?Ze(t.icon):qt("light"),name:t.name||(i?G(e,i):we(e,t.type)),text:r?be(e,r):"",active:r?He(r):!1,unavailable:r?Z(r):!1,glow:r?Ts(zc(Ec(ot(r,t.color_entity&&t.color_entity!=="none"?e.states[t.color_entity]:void 0),t.only_color),t.glow_color),t.glow_scale):null,lamp:a,rotation:t.rotation,mirror:!!t.mirror,roll:t.tilt??0,upright:!!t.upright,rise:t.rise??0,fanSpeed:a==="fan"?qo(t.fan&&t.fan!=="none"?e.states[t.fan]:void 0):void 0,size:[t.w,t.d,t.h],base:_,top:b,pickable:!!i,furnitureId:t.id,pack:s?t.type:null,finish:s?t.finish??null:null,lightY:s?s.mount==="ceiling"?_:_+t.h*.85:void 0,effect:!!r&&r.state==="on"&&!t.glow_color&&Tc(r)&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(r.attributes.effect.trim()),variant:t.variant,show:t.marker??void 0,fromFurniture:!0}}inOpenRoom(e){if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let n=this.building?.floors.find(i=>i.id===e.floorId),t=n?oe(n).find(i=>i.id===this.roomId):void 0;return!!t&&V([e.x,e.z],t.points)}showPin(e){if(e.id.startsWith("lamp:"))return!1;if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="active")return e.active;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let n=W(e.id);return n==="light"?!1:e.id.startsWith("plant:")?!0:e.fromFurniture?(e.power??0)>=1||n==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[n,t]of this.openingLinks??[]){if(t.lock&&!t.cover||Nr(t.cover)){e.set(n,`opening:${n}`);continue}let i=t.cover??t.contact??t.tilt;i&&e.set(n,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let n=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||n<2){this._thumbs=[];return}let t=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},t)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return y;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),n=[...this._thumbs].sort((r,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===r.floorId)?.elevation??0)),t=this._thumbsCompact,i=()=>{this._thumbsCompact=!t;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return g`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${t?"fp3d-thumbs-compact":""}" aria-label=${I(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${I(this.hass,t?"thumbs_show":"thumbs_fold")} aria-label=${I(this.hass,t?"thumbs_show":"thumbs_fold")} @click=${i}>${t?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${I(this.hass,"all_floors")}</span>
      </button>
      ${n.map(r=>g`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${t?y:g`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,n,t){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),n,t,!0);if(e.startsWith("gangs:")){let r=this.building?.floors.flatMap(a=>a.furniture).find(a=>a.id===e.slice(6)),s=r?No(r):[];s.length===1?this.onDeviceHold(s[0],n,t):this.onDeviceTap(e,n,t);return}if(this.ro){this.onDeviceTap(e,n,t);return}if(K("auto_pro")&&this.hass&&this.building)for(let r of this.building.floors)for(let s of r.furniture){if(s.type!=="parking"||!s.car)continue;let a=oo(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:n,y:t,car:a};return}}let i=W(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:n,y:t}:ve(this,e)}onDeviceSwipe(e,n,t,i,r){let s=this.hass?.states[e];if(this.ro)return!1;if(n==="start"){if(!s||Z(s)||this.confirmSet.has(e))return!1;let l=W(e);if(l==="light"&&Ys(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:i,y:r},this.swipeFar=0,!0}if(l==="cover"&&Xs(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:i,y:r},this.swipeFar=0,!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(n==="move"){this.swipeFar=Math.max(this.swipeFar,Math.abs(t));let l=Math.abs(t)<=ba?0:t-Math.sign(t)*ba,c=Math.round(Math.min(100,Math.max(0,a.start-l/220*100)));c!==a.value&&(this._swipe={...a,value:c});let d=performance.now();a.kind==="light"&&c!==a.start&&d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else{if(clearTimeout(this.swipeTimer),this.swipeFar<=ba)return this._swipe=null,this.onDeviceTap(e,i,r),!0;a.value!==a.start&&this.applySwipe(),this.swipeTimer=setTimeout(()=>this._swipe=null,700)}return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,n=this.hass,t=e&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId);if(!e||!n||!t)return y;let i=od(t,n,this.pickups),r=new Date;r.setHours(0,0,0,0);let s=d=>{let u=Math.round((d.getTime()-r.getTime())/864e5);return u===0?I(n,"bin_today"):u===1?I(n,"bin_tomorrow"):d.toLocaleDateString(n.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=t.name||I(n,`bin_kind_${t.bin_kind??"rest"}`),l=ls(t,n),c=d=>{d.stopPropagation(),typeof t.bin_out=="string"&&wi(n,t.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return g`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(d=>g`<b>${s(d.day)}${d.summary&&d.summary!==a?g` <small>· ${d.summary}</small>`:y}</b>`):g`<b>${I(n,"bin_none")}</b>`}
      ${id(t)&&!this.ro?g`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?I(n,"bin_out_done"):I(n,"bin_out_mark")}</button>`:l?g`<small>${I(n,"bin_out_done")}</small>`:y}
    </div>`}onPlantTap(e,n=0,t=0){let i=this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e);if(!i||!this.hass)return;let r=ii(i,this.hass);r&&(r.irrigationEntity?(this._plantInfo={furnitureId:e,x:n,y:t},clearTimeout(this.plantInfoTimer),this.plantInfoTimer=setTimeout(()=>this._plantInfo=null,8e3)):this.ro?this.showInfo(r.entity,n,t):ve(this,r.entity))}renderPlantInfo(){let e=this._plantInfo,n=this.hass,t=e&&this.building?.floors.flatMap(u=>u.furniture).find(u=>u.id===e.furnitureId);if(!e||!n||!t)return y;let i=ii(t,n);if(!i)return y;let r=t.name||we(n,t.type),s=i.irrigationEntity?n.states[i.irrigationEntity]:void 0,a=!!i.irrigationEntity&&ds(i.irrigationEntity),l=!a&&s?.state==="on",c=u=>{if(u.stopPropagation(),i.irrigationEntity&&ud(n,i.irrigationEntity),clearTimeout(this.plantInfoTimer),a){this._plantInfo=null;return}this.plantInfoTimer=setTimeout(()=>this._plantInfo=null,8e3)},d=u=>{u.stopPropagation(),this._plantInfo=null,this.ro?this.showInfo(i.entity,e.x,e.y):ve(this,i.entity)};return g`<div class="fp3d-swipe fp3d-info fp3d-plant-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._plantInfo=null}>
      <span class="fp3d-plant-title">🌿 ${r}</span>
      <div class="fp3d-plant-status ${i.thirsty?"fp3d-plant-thirsty":"fp3d-plant-healthy"}">
        <span>${i.thirsty?"\u{1F4A7} "+I(n,"plant_thirsty"):"\u{1F331} "+I(n,"plant_healthy")}</span>
        ${i.pct!==null?g`<b>${Math.round(i.pct)}%</b>`:y}
      </div>
      ${i.battery!==null?g`<small class="fp3d-plant-sub">🔋 ${Math.round(i.battery)}%</small>`:y}
      <div class="fp3d-plant-actions">
        ${i.irrigationEntity&&!this.ro?g`<button class="fp3d-chip fp3d-plant-act ${l?"fp3d-watering-on":""}" @click=${c}>
              ${a?"\u2705 "+I(n,"plant_mark_watered"):l?"\u{1F4A7} "+I(n,"plant_watering"):"\u{1F6BF} "+I(n,"plant_water_now")}
            </button>`:y}
        <button class="fp3d-chip fp3d-plant-sub-btn" title=${I(n,"details")} @click=${d}>ⓘ</button>
      </div>
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!K("household")||this.panelOpen)return y;let e=()=>{this._hhFolded=!this._hhFolded,h_("neonplan3d.hhFolded",this._hhFolded)};return g`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${I(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?y:this._household.map(n=>g`<button class="fp3d-hh-row ${n.hot?"fp3d-hh-hot":""}" ?disabled=${!n.entity} @click=${()=>n.entity&&(this.ro?this.showInfo(n.entity,0,0):ve(this,n.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${n.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${n.text}</span>
            </button>`)}
    </div>`}renderClock(){let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),y;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let n=new Date(this.now()),t=(this.hass.language||"en").replace("_","-"),i=this.hass.config?.time_zone,r=s=>{try{return n.toLocaleString(t,i?{...s,timeZone:i}:s)}catch{return n.toLocaleString(t,s)}};return g`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${r({hour:"2-digit",minute:"2-digit",...On(this.hass)})}</b><span>${r({weekday:"short",day:"numeric",month:"short"})}</span></div>`}onAlertClick(e){if(e.kind==="alarm"||e.kind==="alarm_pending"){ve(this,e.entity);return}this.jumpTo(e)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return y;let n=this._alerts.slice(0,3);return g`<div class="fp3d-alert-banner" role="alert">
      ${n.map(t=>{let i=t.kind==="alarm"||t.kind==="alarm_pending";return g`<button
          class="fp3d-alert fp3d-alert-${t.kind} ${i?"fp3d-alert-actionable":""}"
          title=${Vt(this.hass,e,t)}
          @click=${()=>this.onAlertClick(t)}
        >
          <span>${Vt(this.hass,e,t)}</span>
          ${i?g`<span class="fp3d-alert-action-badge">🛡️ ${I(this.hass,"alarm_disarm")}</span>`:y}
        </button>`})}
      ${this._alerts.length>3?g`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:y}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return y;let n=e.floors.flatMap(r=>oe(r)).find(r=>r.id===this.roomId),t=n?ke(this.hass,n.area_id).filter(r=>W(r)==="scene"||W(r)==="script").slice(0,6):[];if(!t.length)return y;let i=n?.area_id?this.hass.areas?.[n.area_id]?.name:void 0;return g`<div class="fp3d-scenes">
      ${t.map(r=>g`<button class="fp3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${G(this.hass,r,i)}</button>`)}
    </div>`}async syncPets(){let e=this.building,n=this.viewer,t=e?.settings.pets?.on!==!1&&this.petsOn!==!1,i=t?e?.settings.pets?.list??[]:[],r=t&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!n||!e||!K("fun_pets")||!i.length&&!r){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([Js(),wo()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,c)=>fe(l,c),closedDoors:()=>{let l=new Set,c=this.hass?.states??{};for(let d of this.building?.floors??[])for(let u of d.openings)u.type==="door"&&u.contact&&c[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("NeonPlan 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,n=!!e&&K("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||!n){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[t,i]=await Promise.all([Js(),wo()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=t.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(t){console.error("NeonPlan 3D: the ghost failed to load",t)}finally{this.ghostLoading=!1}}}walkHere(){this.startWalk()}async startWalk(){Lt("walk");let e=this.building,n=this.viewer;if(!e||!n||this._walk)return;let t=this.roomId,i=e.floors.filter(p=>p.rooms.some(h=>h.points.length>=3)),s=(t?i.find(p=>p.rooms.some(h=>h.id===t)):void 0)??i.find(p=>p.id===this.floorId)??[...i].sort((p,h)=>Math.abs(p.elevation)-Math.abs(h.elevation))[0];if(!s)return;let a=await wo();this._walk={room:null,hint:!0},this.walkChanged(!0),await this.updateComplete;let l=this.renderRoot.querySelector(".fp3d-walk-surface");if(!l)return;n.setFloor(s.id,!1),n.setWallMode("auto");let c=new a.FloorMap(e,s),d=t?s.rooms.find(p=>p.id===t):void 0,u;if(d){let p=c.freeNear(Ae(d.points));u={x:p[0],z:p[1],yaw:c.openYaw(p),pitch:-.05}}this.walker=new a.WalkCamera(n,c,l,{start:u,onRoom:p=>{this.walkRoomPts=p?.points??null,this._walk&&(this._walk={...this._walk,room:p?.name??null}),this.syncDevices(!0)}}),this.walkKeys=p=>{p.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}walkChanged(e){this.dispatchEvent(new CustomEvent("walk-change",{detail:{walking:e},bubbles:!0,composed:!0}))}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null,this.walkChanged(!1);let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return y;let e=r=>I(this.hass,r);if(!this._walk&&this.panelOpen)return y;if(!this._walk)return g`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let n=this._walk,t=null,i=(r,s)=>{if(!t)return;let a=44,l=r.clientX-t.cx,c=r.clientY-t.cy,d=Math.hypot(l,c);d>a&&([l,c]=[l/d*a,c/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/a,y:c/a})};return g`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${n.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${n.hint?g`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:y}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let s=r.currentTarget,a=s.getBoundingClientRect();t={id:r.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(r.pointerId),i(r,s)}}
        @pointermove=${r=>i(r,r.currentTarget)}
        @pointerup=${r=>{t=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${r=>{t=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return y;if(this._find===null)return g`<button class="fp3d-find-btn" title=${I(this.hass,"find")} aria-label=${I(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let n=Yu(this.findIndex??=Ni(this.hass,e),this._find);return g`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${I(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${t=>this._find=t.target.value}
        @keydown=${t=>{t.key==="Escape"&&(this._find=null),t.key==="Enter"&&n[0]&&this.goTo(n[0])}}
      />
      <button class="fp3d-find-close" aria-label=${I(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?g`<div class="fp3d-find-list">
            ${n.length?n.map(t=>g`<button @click=${()=>this.goTo(t)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${t.icon?Pn(t.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${t.name}</b>${t.where?g`<small>${t.where}</small>`:y}</span>
                  </button>`):g`<p>${I(this.hass,"find_none")}</p>`}
          </div>`:y}
    </div>`}renderCentral(){let e=this.building,n=this.hass;if(!e||!n||!this.central||this._find!==null||this.ro)return y;let t=(f,w)=>I(n,f,w),i=g`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${t("central")}
      aria-label=${t("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let r=this.floorId?e.floors.find(f=>f.id===this.floorId):void 0,s=r?[r]:e.floors,a=s.flatMap(f=>qr(n,f).lights),l=s.flatMap(f=>qr(n,f).covers),c=a.filter(f=>n.states[f]?.state==="on").length,d=!r,u=(f,w,k,x)=>{if(x.length){if(d&&this._armed!==f){this._armed=f,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}if(this._armed=null,w==="cover"&&(k==="open_cover"||k==="close_cover")){for(let v of Ko(n,x,k==="open_cover"?"open":"close"))n.callService("cover",v.service,v.data);return}n.callService(w,k,{entity_id:x})}},p=(f,w,k,x,v)=>g`<button class="fp3d-btn ${this._armed===f?"fp3d-central-armed":""}" ?disabled=${!v.length} @click=${()=>u(f,k,x,v)}>
        ${this._armed===f?t("central_sure"):t(w)}
      </button>`,h=(e.settings.favorites??[]).filter(f=>n.states[f]),_=this.buttons??e.settings.buttons??[],b=Qt()?js(this.sceneHost(n,e)):[];return g`${i}
      <div class="fp3d-central" role="dialog" aria-label=${t("central")}>
        <div class="fp3d-central-top">
          <b>${r?r.name:t("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${t("view_settings")} aria-label=${t("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${t("view_settings")}</button>
        </div>
        ${b.length?g`<div class="fp3d-central-favs">
              ${b.map(f=>g`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:f.id,floorId:null,roomId:null}}}><span aria-hidden="true">${f.icon}</span> ${f.title}</button>`)}
            </div>`:y}
        <div class="fp3d-central-row">
          <span>${t("central_lights")}${a.length?g` <small>${c}/${a.length}</small>`:y}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(f=>n.states[f]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(f=>n.states[f]?.state==="on"))}
        </div>
        ${l.length?g`<div class="fp3d-central-row">
              <span>${t("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:y}
        <b>${t("central_favorites")}</b>
        ${h.length?g`<div class="fp3d-central-favs">
              ${h.map(f=>{let[w,k]=bn(f),x=n.states[f],v=w==="homeassistant"&&x?.state==="on";return g`<button
                  class="fp3d-chip"
                  aria-pressed=${v||this._sceneFired===f}
                  ?disabled=${Z(x)}
                  @click=${()=>{n.callService(w,k,{entity_id:f}),this._sceneFired=f,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${G(n,f)}
                </button>`})}
            </div>`:_.length?y:g`<p class="fp3d-central-hint">${t("central_no_favorites")}</p>`}
        ${_.length?g`<div class="fp3d-central-favs">
              ${_.map(f=>g`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${u_(n,f)}
                  @click=${w=>{Wc(n,w.currentTarget,f),f.action!=="service"&&(this._central=!1)}}
                >
                  ${f.icon?g`<ha-icon .icon=${f.icon.startsWith("mdi:")?f.icon:`mdi:${f.icon}`}></ha-icon>`:y}${f.label}
                </button>`)}
            </div>`:y}
      </div>`}maybeFlyIn(e=!1){let n=this.viewer,t=this.hass?.config?.latitude,i=this.hass?.config?.longitude;!n||!e&&(this.flownIn||!this.building?.settings.flyin)||this.walkable===!1||this.ro||this._low||typeof t!="number"||typeof i!="number"||matchMedia("(prefers-reduced-motion: reduce)").matches||(this.flownIn=!0,n.flyInStart(),this._flyIn={lat:t,lon:i})}flownIn=!1;renderFlyIn(){let e=this._flyIn;return e?g`<fp3d-flyin
      .lat=${e.lat}
      .lon=${e.lon}
      @flyin-dive=${n=>this.viewer?.flyInLand(n.detail.fast)}
      @flyin-done=${()=>this._flyIn=null}
    ></fp3d-flyin>`:y}mediaCardUp(e,n){let t=e.states[n];if(!t||W(n)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(n)?.until??0)>Date.now()&&Z(t))return!0;let i=[t.attributes.media_title,t.attributes.app_name,t.attributes.source].some(r=>typeof r=="string"&&!!r.trim());return!Z(t)&&(t.state==="playing"||t.state==="paused"&&i&&this.pausedRecently(t))}pausedRecently(e){let n=Date.parse(e.last_changed??"");if(!Number.isFinite(n))return!0;let t=n+l_-Date.now();if(t<=0)return!1;let i=Date.now()+t+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},t+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return y;let e=I(this.hass,this.clean?"controls_show":"controls_hide");return g`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?et`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:et`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return y;let n=this._voice,t=n?.phase==="wait"||n?.phase==="listen",i=I(e,"voice_button"),r=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return g`<button class="fp3d-mic ${n?.phase==="listen"?"fp3d-mic-on":""}" style="left:${r}px" title=${i} aria-label=${i} ?disabled=${t} @click=${()=>{this.onMic()}}>
        ${et`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${n?g`<div class="fp3d-mic-say ${n.phase==="error"?"fp3d-mic-err":""}" style="left:${r}px">${n.text}</div>`:y}`}sayVoice(e,n){this._voice={phase:e,text:n},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let n=this.hass,t=this.building;if(!n||!t)return;let i=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==i)return;if(e.show_rooms){(!e.admins_only||n.user?.is_admin)&&this.showRooms(t,e.show_rooms);return}let r=null;try{let s=await dt();r=await this.handleSentence(n,t,s,e.text,e.speak),r===null&&this.sayVoice("error",I(n,"voice_none"))}catch(s){this.sayVoice("error",I(n,"voice_error",{msg:String(s?.message??s)}))}try{await pl(n,e.ask_id,r??"",r!==null)}catch{}}async onAnnounce(e){let n=this.hass;if(!n)return;let t=(this.screen??"").trim().toLowerCase();if(!(e.screens.length&&!e.screens.some(i=>i.trim().toLowerCase()===t))&&!jp.has(e.id)){jp.add(e.id),this._announce=e.message,clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announce=null,12e3);try{await m_(),await(await dt()).speak(n,e.message,Xe())}catch{}}}onReload(e){e.plan&&e.plan!==(this.planId??he)||e.templates.length&&!(this.template&&e.templates.includes(this.template))||qp.has(e.id)||(qp.add(e.id),!(Date.now()-(window.fp3dReloadSent??0)<15e3)&&(this._announce=I(this.hass,"screen_reloading"),setTimeout(()=>location.reload(),500+Math.random()*4e3)))}openRoom(e){if(!this.roomId)return null;for(let n of e.floors){let t=oe(n).find(i=>i.id===this.roomId);if(t)return{floor:n,room:t}}return null}async roomAction(e,n,t){let i=()=>au(n.floors,this.voiceArea??da()),r=d=>{let u=n.floors.find(h=>h.id===d.floorId),p=u&&oe(u).find(h=>h.id===d.roomId);return u&&p?{floor:u,room:p}:null},s=t.room==="there"?this.openRoom(n):t.room==="here"?i():t.room?r(t.room):i()??this.openRoom(n);if(!s)return I(e,t.room==="there"?"voice_noroom_open":"voice_noroom");let a=s.room.name,l=async d=>{await Promise.all(d.map(u=>e.callService(u.domain,u.service,u.data)))};if(t.action==="clean"){let d=ki(e,s.room);return d?(await l([d]),I(e,"voice_clean_started",{room:a})):I(e,"voice_clean_none",{room:a})}let c=yi(e,s.floor,s.room);return c.length?(await l(c),I(e,"voice_off_done",{room:a,n:xi(c)})):I(e,"voice_off_nothing",{room:a})}async onMic(){let e=this.hass,n=this.building;if(!e||!n||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let t=(r,s)=>this.sayVoice(r,s);t("wait","\u2026"),this.tourToken++;let i;try{let r=window.AudioContext??window.webkitAudioContext;i=new r,i.resume().catch(()=>{})}catch{i=void 0}try{let r=await dt(),s=await r.listenOnce(e,()=>t("listen",I(e,"voice_listen")),Xe(),i);if(!s){t("error",I(e,"voice_none"));return}if(await this.handleSentence(e,n,r,s,!0)!==null)return;t("wait",`\u201C${s}\u201D \u2026`);let a=this.voiceArea??da(),l=s,c=this.openRoom(n);c?.room.area_id&&r.saysThere(s,e.language)&&(a=c.room.area_id,l=r.withoutThere(s,e.language));let d=await r.converse(e,l,a);t("done",d?`\u201C${s}\u201D \u2013 ${d}`:`\u201C${s}\u201D`)}catch(r){let s=r,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;t("error",a?I(e,a):I(e,"voice_error",{msg:String(s?.message??s?.name??r)}))}}async handleSentence(e,n,t,i,r){let s=(u,p)=>this.sayVoice(u,p),a=this.replay?null:this.styleSentence(i);if(a)return s("done",`\u201C${i}\u201D \u2013 ${a}`),r&&t.speak(e,a,Xe()),a;let{devices:l,items:c}=this.spokenDevices(e,n,t.SYNONYMS),d=this.replay?null:t.roomIntent(i,n,e.language,u=>u.area_id?e.areas?.[u.area_id]?.name:null);if(d){let u=await this.roomAction(e,n,d);return s("done",`\u201C${i}\u201D \u2013 ${u}`),r&&t.speak(e,u,Xe()),u}{let u=t.showTarget(i,n,l,b=>b.area_id?e.areas?.[b.area_id]?.name:null);if(u){let b=u.kind==="house"?I(e,"all_floors"):u.kind==="cameras"?I(e,"camera_wall_title"):u.name;if(s("done",`\u201C${i}\u201D \u2192 ${b}`),this.directing.touch(Date.now()),u.kind==="cameras")K("camera_cockpit")&&this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}));else if(u.kind==="device"){let f=c.get(u.id);u.camera&&u.entity&&K("camera_cockpit")?this.lookThrough(u.entity):f&&this.goTo(f)}else u.kind==="house"?this.fire("floor-tap",{floorId:null}):u.kind==="floor"?this.fire("floor-tap",{floorId:u.floorId}):(this.floorId!==u.floorId&&this.fire("floor-tap",{floorId:u.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:u.floorId,roomId:u.roomId}),60));return I(e,"voice_showing",{name:b})}let p=await e.callWS({type:"neonplan3d/locate/ask",text:i,language:e.language}).catch(()=>null);if(p)return s("done",`\u201C${i}\u201D \u2013 ${p.text}`),p.rooms.length&&(!p.admins_only||e.user?.is_admin)&&this.showRooms(n,p.rooms),r&&t.speak(e,p.text,Xe()),p.text;let h=this.moduleHost(e,n,t.SYNONYMS,b=>t.showTarget(b,n,l,f=>f.area_id?e.areas?.[f.area_id]?.name:null)),_=await Qu(i,h);if(_){s("done",_.text?`\u201C${i}\u201D \u2013 ${_.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),_.highlight?.length&&this.viewer?.flashDevices(_.highlight);let b=_.focus,f=_.spoken??_.text??"";if(_.tour?.length){let w=r&&_.speak!==!1?x=>t.speak(e,x,Xe()):null,k=_.spoken??_.text;return k&&w&&await w(k),this.runTour(_.tour,n,c,w),f}if(b?.roomId&&b.floorId)this.floorId!==b.floorId&&this.fire("floor-tap",{floorId:b.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:b.floorId,roomId:b.roomId}),60);else if(b?.floorId&&!b.entity&&!b.furnitureId)this.fire("floor-tap",{floorId:b.floorId});else if(b?.entity||b?.furnitureId){let w=c.get(b.entity??`furniture:${b.furnitureId}`);w&&this.goTo(w)}return _.text&&_.speak!==!1&&r&&t.speak(e,_.text,Xe()),f}}return null}spokenDevices(e,n,t){let i=this.findIndex??=Ni(e,n),r=new Map(n.floors.flatMap(u=>oe(u).map(p=>[p.id,p.name]))),s=[],a=[],l=new Map;for(let u of i)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of n.floors){let p=oe(u);for(let h of u.furniture){if(b_.has(h.type))continue;let _=this.furnitureLinks.get(h.id),b=_?.entity??_?.power??null,f=b??`furniture:${h.id}`,w=p.find(z=>z.points.length>=3&&V([h.x,h.z],z.points)),k=we(e,h.type),x=[h.name,...h.aliases??[],k,b?G(e,b):null,...t[h.type]??[]].filter(z=>!!z),v=h.name||(b?G(e,b):k);s.push({id:f,entity:b,name:v,names:x,room:w?.name??"",camera:!!b&&W(b)==="camera"});let m=(h.type==="plant"||h.type.startsWith("plant_")||rs(h.type))&&!!h.moisture&&h.moisture!=="none",M=hs(_?.entity?e.states[_.entity]:void 0,_?.power?ce(e.states[_.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),P=K("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!M?us(e.states[h.remaining]):null;a.push({id:f,entity:b,name:v,names:x,room:w?.name??"",floorId:u.id,roomId:w?.id??null,power:_?.power??null,type:h.type,remaining:P,thirsty:m&&K("household")?oi(h,e):null}),b?c.add(b):l.set(f,{kind:"device",name:v,where:"",floorId:u.id,roomId:w?.id??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let d=new Map(n.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&r.get(p.roomId)||"",_=d.get(u),b=[_?.name,..._?.aliases??[],p.name].filter(f=>!!f);s.push({id:u,entity:u,name:p.name,names:b,room:h,camera:W(u)==="camera"}),a.push({id:u,entity:u,name:p.name,names:b,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,n){let t=[];for(let i of n.floors)for(let r of i.openings){let s=this.openingLinks?.get(r.id)?.lock;if(!s)continue;let a=this.openingSpot(n,r.id,!0);if(!a)continue;let l=e.states[s];t.push({id:s,floorId:i.id,roomId:r.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:qt("lock"),name:G(e,s),text:l?be(e,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||Z(l),glow:null,full:!0,fromFurniture:!1})}return t}openingSpot(e,n,t=!1){for(let i of e.floors){let r=i.openings.find(w=>w.id===n);if(!r)continue;let s=wd(r,i.rooms,i.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],c=a[(s.edge+1)%a.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],h=De(a)>0?[-u[1],u[0]]:[u[1],-u[0]],_=r.offset;if(t){let w=u[0]*h[1]-u[1]*h[0]>0;_=r.offset-r.width/2+ic(r,r.hinge==="left"===w)}let[b,f]=ai(s.room,s.edge,_);return{floorId:i.id,x:b+h[0]*.2,z:f+h[1]*.2,y:Math.max(.5,r.sill+r.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,n){let t=n.map(l=>({roomId:l,floorId:e.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!t.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let r=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};r?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of t.entries()){if(i!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await a(150)),i!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<t.length-1&&await a(4e3)}r?.removeEventListener("pointerdown",s)}async runTour(e,n,t,i){let r=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(d=>{if(d.openingId){let p=this.openingSpot(n,d.openingId);return p?{...p,entity:null,say:d.say,inside:!0}:null}let u=t.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of s){if(r!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),r!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),r!==this.tourToken))break;let u=d.say&&i?await i(d.say):!1;if(r!==this.tourToken)break;await c(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(e,n){let t=[],i=a=>I(e,a);for(let a of n.floors){let l=new Map(oe(a).map(c=>[c.id,c.name]));for(let c of a.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",p=it(e,d,c.type),h=p.open>.02||p.open2>.02||c.type==="garage"&&(p.cover??0)>.02,_=!h&&(p.tilt>.02||p.tilt2>.02);for(let b of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])b&&b!=="none"&&t.push({id:c.id,entity:b,kind:u,name:i(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:a.id,roomId:c.room_id,open:h,tilted:_})}}let r=n.settings.roof?.windows??[],s=r.length?new Map(Mt(n).map(a=>[a.key,a])):null;for(let a of r){let l=Gp(e,a),c=l.open>.02,d=!c&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(f=>!!f&&f!=="none"),p=u.map(f=>ze(e,f)).filter(f=>!!f).map(f=>n.floors.flatMap(w=>w.rooms.filter(k=>k.area_id===f).map(k=>({floor:w,room:k})))).find(f=>f.length===1)?.[0],h=p?null:Ss(n,s?.get(a.face),a),_=p?.floor??h?.floor??n.floors[n.floors.length-1],b=p?.room??(h?_?.rooms.find(f=>f.id===h.roomId):void 0);for(let f of u)t.push({id:a.id,entity:f,kind:"roof_window",name:a.name||i("roof_window"),room:b?.name??"",floorId:_?.id??"",roomId:b?.id??null,open:c,tilted:d})}return t}sceneHost(e,n){return this.moduleHost(e,n,{},()=>null)}moduleHost(e,n,t,i){let r=null,s=()=>r??=this.spokenDevices(e,n,t).spoken,a={api:1,stage:2,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let c=i(l);return c?.kind==="device"&&c.id?s().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>!!this.hass?.user?.is_admin&&!this.ro&&!this.noSave,updateBuilding:l=>{let c=this.building;if(!c||!this.hass||this.ro||this.noSave||!this.hass.user?.is_admin)return;let d=structuredClone(c);l(d),this.building=d,Gn(this.hass,d,this.planId??void 0).catch(u=>this.serviceFailed("neonplan3d/building/save",u))},callService:(l,c,d)=>this.hass?this.hass.callService(l,c,d):Promise.resolve(),newId:l=>rc(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(p=>p.id===l),u=d?.outdoor.find(p=>p.id===c);return!d||!u||u.type!=="pool"?null:{y:un(d,u),floorY:qn(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(p=>p.id===l);return u?nt(u,c,d):0},openPopup:(l,c)=>this.openModulePopup(l,c),closePopup:()=>this.closeModulePopup(),imageUrl:l=>this.pictureUrl(l),people:()=>this.lastPersons.flatMap(l=>{let c=this.building?.floors.find(d=>d.id===l.floorId)?.rooms.find(d=>d.id===l.roomId);return c?[{id:l.id,floorId:l.floorId,roomId:l.roomId,roomName:c.name}]:[]}),look:()=>this.effectiveTheme()==="day"?"light":"dark",lowPower:()=>this._low,refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:pa,openings:()=>this.spokenOpenings(e,n),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??G(e,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,n),cars:()=>this.spokenCars(e,n),pools:()=>rp(a),weather:()=>rt(e,this.weatherEntityId??n.settings.weather_entity),listen:async l=>{try{return(await(await dt()).listenOnce(e,l,Xe())).trim()||null}catch{return null}},notify:l=>this.showNote(l),tour:(l,c)=>{let d=this.spokenDevices(e,n,t).items,u=c?p=>dt().then(h=>h.speak(e,p,Xe())):null;this.runTour(l,n,d,u)},occupied:()=>this.occupiedRooms(e,n),speakers:()=>this.planSpeakers(e,n),cameras:()=>this.planCameras(e,n),pickSpot:l=>this.pickSpot(l)};return a}pickSpot(e){return new Promise(n=>{let t=this.viewer;if(!t)return n(null);clearTimeout(this.spotTimer);let i=r=>{clearTimeout(this.spotTimer),this._spotHint=null,n(r)};t.pickSpot(i),this._spotHint=e,this.spotTimer=setTimeout(()=>t.pickSpot(null),6e4)})}spotTimer;planCameras(e,n){return n.floors.flatMap(t=>t.placements.filter(i=>i.entity_id.startsWith("camera.")).map(i=>{let r=i.mount==="ceiling";return{entity:i.entity_id,floorId:t.id,x:i.x,z:i.z,height:r?t.height-.1:i.y??2.2,heading:i.rotation??0,tilt:i.tilt??(r?65:20),fov:i.fov??(r?120:90),reach:i.reach??(r?3:4.5),dome:r,detections:Ve(e,i.entity_id).map(s=>({sensor:s,kind:uo(e,s),on:e.states[s]?.state==="on"}))}}))}moduleFigures(e){let n=[];for(let t of this.scene){if(t.kind!=="figure")continue;let i=e.floors.find(s=>s.id===t.floorId);if(!i)continue;let r=t.look==="person";n.push({id:`module:${t.id}`,name:t.name,initials:r?"":t.look==="car"?"\u{1F697}":"\u{1F43E}",picture:null,floorId:t.floorId,roomId:$o(i,t.at[0],t.at[1])??"",x:t.at[0],z:t.at[1],color:t.color??(r?"#ff5fd2":"#3ee8ff"),...t.entity?{entity:t.entity}:{},...r?{}:{thing:!0}})}return n}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,n){let t=new Map;for(let i of this.lastPersons)i.roomId&&t.set(i.roomId,i);for(let i of n.floors)for(let r of i.rooms){if(t.has(r.id)||!r.area_id)continue;ke(e,r.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&t.set(r.id,{floorId:i.id,roomId:r.id})}return[...t.values()]}planSpeakers(e,n){let t=[],i=new Set;for(let r of n.floors){let s=(a,l)=>oe(r).find(c=>c.points.length>=3&&V([a,l],c.points))?.id??null;for(let a of r.placements)!a.entity_id.startsWith("media_player.")||i.has(a.entity_id)||!e.states[a.entity_id]||(i.add(a.entity_id),t.push({entity:a.entity_id,name:G(e,a.entity_id),floorId:r.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of r.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||i.has(l)||!e.states[l]||(i.add(l),t.push({entity:l,name:G(e,l),floorId:r.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:fe(r,a)+a.h}))}}return t}roomSheets(e){let n=this.hass,t=this.building;if(!n||!t||this.ro||!Qt())return[];let i=t.floors.find(r=>oe(r).some(s=>s.id===e));return i?Gs(this.sceneHost(n,t),{floorId:i.id,roomId:e}).map(r=>({id:r.id,icon:r.icon,title:r.title})):[]}plainOf=null;drawnPlan="";condOf=null;shownSig="";conditioned(){let e=this.building,n=Bs(this.hass,e);this.shownSig=n;let t=Hi(e,this.rooms),i=`${n}|${t.join(",")}`;if(!e||!n&&!t.length)return e;if(this.condOf?.from===e&&this.condOf.sig===i)return this.condOf.to;let r=n?{...e,floors:e.floors.map(s=>({...s,furniture:s.furniture.filter(a=>Ns(this.hass,a))}))}:e;return t.length&&(r=Ci(r,t)),this.condOf={from:e,sig:i,to:r},r}shownBuilding(){let e=this.conditioned();if(!e||!this.plain)return e;if(this.plainOf?.from===e)return this.plainOf.to;let n=i=>Tr.has(i.type)||i.type==="stairwell"||!!ye(i.type)?.hole,t={...e,floors:e.floors.map(i=>({...i,furniture:i.furniture.filter(n)}))};return this.plainOf={from:e,to:t},t}openRoomSheet(e,n){let t=this.building?.floors.find(i=>i.rooms.some(r=>r.id===e));this._sheet={id:n,floorId:t?.id??null,roomId:e}}currentSheet(e,n){let t=this._sheet;if(!t)return null;let i=this.sceneHost(e,n);return(t.roomId&&t.floorId?Gs(i,{floorId:t.floorId,roomId:t.roomId}):js(i)).find(s=>s.id===t.id)??null}openModulePopup(e,n=6e4){clearTimeout(this.popupTimer),this._popup={id:e},this.popupValues={},this.popupTimer=setTimeout(()=>this._popup=null,n)}closeModulePopup(){clearTimeout(this.popupTimer),this._popup=null,this.popupValues={}}renderModulePopup(){let e=this.hass,n=this.building,t=this._popup;if(!e||!n||!t)return y;let i=ep(this.sceneHost(e,n)).find(l=>l.id===t.id);if(!i)return y;let r=()=>this.closeModulePopup(),s=l=>I(e,l),a=l=>{switch(l.kind){case"image":{let c=l.live&&K("camera_cockpit")&&n.settings.director?.live?this.liveFor(l.live):null;return c?g`<div class="fp3d-pop-big fp3d-pop-live">${c}</div>`:g`<img class="fp3d-pop-big" src=${l.src} alt="" />`}case"text":return g`<p class=${l.muted?"fp3d-sub":"fp3d-pop-text"}>${l.text}</p>`;case"heading":return g`<h4 class="fp3d-pop-h">${l.text}</h4>`;case"line":return g`<div class="fp3d-pop-line"><span>${l.text}</span>${l.sub?g`<span>${l.sub}</span>`:y}${l.note?g`<em>${l.note}</em>`:y}</div>`;case"groups":return l.groups.length?g`<div class="fp3d-pop-groups">
                ${l.groups.map(c=>g`<section class=${c.strong?"fp3d-pop-strong":""}>
                    <h4 role=${c.onToggle?"button":y} tabindex=${c.onToggle?0:y} @click=${()=>c.onToggle?.()}>${c.title} ${c.onToggle?g`<small>${c.open?"\u25BE":"\u25B8"}</small>`:y}</h4>
                    ${c.rows.map(d=>g`<div class="fp3d-pop-row ${d.leadStrong?"fp3d-pop-rowlive":""}" style=${d.color?`--cal:${d.color}`:""}>
                        <span class="fp3d-pop-lead">${d.lead}</span>
                        <span class="fp3d-pop-sum">${d.text}${d.sub?g`<small> · ${d.sub}</small>`:y}${c.open&&d.detail?g`<em>${d.detail}</em>`:y}</span>
                      </div>`)}
                  </section>`)}
              </div>`:g`<p class="fp3d-sub">${l.empty??""}</p>`;case"checklist":return g`<div class="fp3d-pop-todo">
            ${l.items.length?l.items.map(c=>g`<label class="fp3d-pop-todoitem ${c.done?"fp3d-pop-done":""}">
                    <input type="checkbox" .checked=${c.done} ?disabled=${this.ro} @change=${()=>{c.onToggle()}} />
                    <span>${c.text}</span>
                  </label>`):g`<p class="fp3d-sub">${l.empty??""}</p>`}
          </div>`;case"people":return g`<div class="fp3d-pop-people">
            ${l.items.map(c=>g`<div class="fp3d-pop-personrow ${c.bright?"fp3d-pop-bright":""}">
                ${c.picture?g`<img src=${c.picture} alt="" />`:g`<span class="fp3d-pop-initial">${c.name.slice(0,1)}</span>`}
                <div><b>${c.name}</b><span>${c.sub}</span></div>
              </div>`)}
          </div>`;case"tiles":return g`<div class="fp3d-pop-tiles">${l.items.map(c=>g`<div><small>${c.label}</small><span>${c.symbol}</span><b>${c.main}</b>${c.sub?g`<small>${c.sub}</small>`:y}</div>`)}</div>`;case"media":return g`<div class="fp3d-pop-media">
            ${l.picture?g`<img class="fp3d-pop-cover" src=${l.picture} alt="" />`:y}
            <div class="fp3d-pop-mediatext">
              <b>${l.title}</b>
              ${l.sub?g`<span>${l.sub}</span>`:y}
              ${l.buttons?.length?g`<div class="fp3d-pop-ctl">${l.buttons.map(c=>g`<button class="fp3d-chip" @click=${()=>{c.onTap()}}>${c.label}</button>`)}</div>`:y}
            </div>
          </div>`;case"form":{if(this.ro)return y;if(!l.open)return g`<button class="fp3d-btn fp3d-pop-addbtn" @click=${()=>l.onOpen()}>${l.button}</button>`;let c=u=>this.popupValues[`${l.id}:${u.id}`]??u.value,d=(u,p)=>this.popupValues={...this.popupValues,[`${l.id}:${u.id}`]:p};return g`<form class="fp3d-pop-form" @submit=${u=>{u.preventDefault(),l.onSubmit(Object.fromEntries(l.fields.map(p=>[p.id,c(p)])))}}>
            ${l.fields.map(u=>u.kind==="select"?g`<select class="fp3d-pop-in" @change=${p=>d(u,p.target.value)}>
                    ${(u.options??[]).map(p=>g`<option value=${p.id} ?selected=${p.id===c(u)}>${p.label}</option>`)}
                  </select>`:g`<input class="fp3d-pop-in" type=${u.kind} placeholder=${u.placeholder??""} .value=${c(u)} @input=${p=>d(u,p.target.value)} />`)}
            <div class="fp3d-pop-ctl"><button class="fp3d-btn fp3d-primary" type="submit">${l.submit}</button><button class="fp3d-btn" type="button" @click=${()=>l.onCancel()}>${s("cancel")}</button></div>
          </form>`}case"input":return this.ro?y:g`<form class="fp3d-pop-form" @submit=${c=>{c.preventDefault();let d=c.target.querySelector("input");l.onSubmit(d.value),d.value=""}}>
                <input class="fp3d-pop-in" placeholder=${l.placeholder} />
                <button class="fp3d-btn fp3d-primary" type="submit">${l.button}</button>
              </form>`;default:return y}};return g`<div class="fp3d-sheet-backdrop" @click=${r}></div>
      <div class="fp3d-sheet fp3d-pop ${i.wide?"fp3d-pop-wide":""}" role="dialog" aria-label=${i.title}>
        <header><span>${i.icon?`${i.icon} `:""}${i.title}</span><button class="fp3d-sheet-x" aria-label=${s("close")} @click=${r}>✕</button></header>
        ${i.sections.map(a)}
      </div>`}renderSheet(){let e=this.hass,n=this.building;if(!e||!n||!this._sheet)return y;let t=this.currentSheet(e,n);if(!t)return y;let i=d=>I(e,d),r=this._sheet.roomId?n.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async d=>{s();try{await d()}catch(u){console.warn("NeonPlan 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&t.input&&a(()=>t.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=i("sheet_listening");let p=await this.sceneHost(e,n).listen?.(()=>d.placeholder=i("sheet_listening"));d.placeholder=t.input?.placeholder??"",p?d.value=p:this.showNote(i("sheet_mic_failed"))};return g`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${t.title}>
        <header>
          <b><span aria-hidden="true">${t.icon}</span> ${t.title}${r?` \xB7 ${r.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${s}>✕</button>
        </header>
        ${t.choice?g`<div class="fp3d-sheet-choice">
              ${t.choice.options.map(d=>g`<button class="fp3d-chip" aria-pressed=${d.id===t.choice.value} @click=${()=>{t.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:y}
        ${t.chips?.length?g`<div class="fp3d-sheet-chips">${t.chips.map(d=>g`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>d.onTap())}}>${d.label}</button>`)}</div>`:y}
        ${t.input?g`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${t.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${t.input.mic?g`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:y}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${t.input.button}</button>
            </div>`:y}
        ${t.lines?.length?g`<div class="fp3d-sheet-lines">${t.lines.map(d=>g`<p>${d}</p>`)}</div>`:y}
        ${e.user?.is_admin&&!this.ro&&qs().length?g`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${i("view_settings")}</button>`:y}
      </div>`}setPlanSettings(e){let n=this.building;if(!n||!this.hass?.user?.is_admin||this.ro||this.noSave)return;let t=structuredClone(n);Object.assign(t.settings,e),this.building=t,Gn(this.hass,t,this.planId??void 0).catch(i=>this.serviceFailed("neonplan3d/building/save",i))}renderSettings(){let e=this.hass,n=this.building;if(!e||!n||!this._settingsOpen)return y;let t=d=>I(e,d),i=!!e.user?.is_admin&&!this.ro&&!this.noSave,r=n.settings,s=(d,u,p,h)=>g`<label class="fp3d-set-check" title=${h?t(h):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!i} @change=${_=>this.setPlanSettings(p(_.target.checked))} /> ${t(d)}</label
      >`,a=this.sceneHost(e,n),l=mt(),c=qs().map(d=>{let u=ip(d,a);if(!u.length||u[0].kind==="heading")return u;let p=l.find(_=>_.id===d);return[{kind:"heading",text:p?Wl(p,e.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return g`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${t("view_settings")}>
        <header>
          <b>⚙ ${t("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${t("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${i?y:g`<p class="fp3d-set-note">${t("view_settings_admin")}</p>`}
        <h4>${t("view_settings_look")}</h4>
        ${s("sky",r.sky!==!1,d=>({sky:d}),"sky_hint")}
        ${s("flyin",!!r.flyin,d=>(d&&setTimeout(()=>this.maybeFlyIn(!0),300),{flyin:d||void 0}),"flyin_hint")}
        ${s("sun_shadow",r.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${r.sun_shadow!==!1?g`<label class="fp3d-set-field" title=${t("sun_arc_hint")}
              >${t("sun_arc")}
              <select ?disabled=${!i} @change=${d=>this.setPlanSettings({sun_arc:d.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${r.sun_arc!=="plot"}>${t("sun_arc_house")}</option>
                <option value="plot" ?selected=${r.sun_arc==="plot"}>${t("sun_arc_plot")}</option>
              </select></label
            >`:y}
        ${s("window_glow",r.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${ra(ji)?g`<p class="fp3d-set-note">${t("gpu_safe_note")}</p>`:y}
        ${s("sun_patches",r.sun_patches!==!1,d=>({sun_patches:d}))}
        ${this.renderGlassSize(t,i,r)}
        <h4>${t("view_settings_control")}</h4>
        ${s("tap_in_room",!!r.tap_in_room,d=>({tap_in_room:d}),"tap_in_room_hint")}
        ${s("right_click_back",!!r.right_click_back,d=>({right_click_back:d}),"right_click_back_hint")}
        <h4>${t("view_settings_alerts")}</h4>
        ${s("rain_warning",r.rain_warning!==!1,d=>({rain_warning:d}))}
        ${s("alert_unavailable",!!r.alert_unavailable,d=>({alert_unavailable:d}))}
        ${s("alert_names",r.alert_names!==!1,d=>({alert_names:d}))}
        ${c.map(d=>g`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(e,u,i))}</div>`)}
        <p class="fp3d-set-note">${t("view_settings_more")}</p>
      </div>`}renderGlassSize(e,n,t){let i=t.roof.hologram??qe,r=[.75,1,1.25,1.5,2],s=r.includes(i.size)?r:[...r,i.size].sort((a,l)=>a-l);return g`<label class="fp3d-set-field" title=${e("glass_size_hint")}
      >${e("glass_size")}
      <select ?disabled=${!n} @change=${a=>this.setPlanSettings({roof:{...t.roof,hologram:{...i,size:Number(a.target.value)}}})}>
        ${s.map(a=>g`<option value=${a} ?selected=${a===i.size}>${Math.round(a*100)} %</option>`)}
      </select></label
    >`}renderViewField(e,n,t){switch(n.kind){case"heading":return g`<h4>${n.text}</h4>`;case"text":return g`<p class="fp3d-set-note">${n.text}</p>`;case"check":return g`<label class="fp3d-set-check"><input type="checkbox" .checked=${n.value} ?disabled=${!t} @change=${i=>n.set(i.target.checked)} /> ${n.label}</label>`;case"select":return g`<label class="fp3d-set-field"
          >${n.label}
          <select ?disabled=${!t} @change=${i=>n.set(i.target.value)}>
            ${n.options.map(i=>g`<option value=${i.id} ?selected=${i.id===n.value}>${i.label}</option>`)}
          </select></label
        >`;case"entity":{let i=Object.keys(e.states).filter(r=>n.filter(r)).sort((r,s)=>G(e,r).localeCompare(G(e,s)));return g`<label class="fp3d-set-field"
          >${n.label}
          <select ?disabled=${!t} @change=${r=>{let s=r.target.value;n.set(s===""?null:s)}}>
            <option value="" ?selected=${!n.value}>${n.auto?I(e,"entity_auto",{name:G(e,n.auto)}):"\u2014"}</option>
            ${i.map(r=>g`<option value=${r} ?selected=${r===n.value}>${G(e,r)}</option>`)}
          </select></label
        >`}case"lines":return lu(n.value,!t,{label:n.label,placeholder:n.placeholder??I(e,"lines_new"),add:I(e,"lines_add"),remove:I(e,"delete")},i=>n.set(i));case"button":return g`<button class="fp3d-btn ${n.primary?"fp3d-primary":""}" ?disabled=${!t} title=${n.title??""} @click=${()=>n.onTap()}>${n.label}</button>`}}renderNote(){return this._note?g`<div class="fp3d-note" role="status">${this._note}</div>`:y}spokenAlerts(e,n){let t=new Map(n.floors.flatMap(i=>oe(i).map(r=>[r.id,r.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:G(e,i.entity),...i.text?{text:i.text}:{},room:i.roomId?t.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(e,n){if(!K("auto_pro"))return[];let t=[];for(let i of n.floors)for(let r of i.furniture){if(r.type!=="parking"||!r.car)continue;let s=An(e,r),a=oo(e,r),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,c=!!s&&!(l&&!Oi.has(l.state.toLowerCase()));t.push({name:r.name||(s?we(e,s):we(e,"car")),spot:r.id,floorId:i.id,present:c,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return t}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return y;let n=e.kind==="light"&&e.value<=0;return g`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${G(this.hass,e.entity)}</span>
      <b>${n?I(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let n=this.viewer,t=this.building;if(!n||!t||this.ro)return;if(!K("camera_cockpit")){this._menu=null;return}let i=t.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e,ready:!1}:this._through={entity:e,back:n.getView(),ready:!1},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r),setTimeout(()=>{this._through?.entity===e&&(this._through={...this._through,ready:!0})},r+950)}endThrough(){let e=this._through;e&&(this._through=null,this.live?.id===e.entity&&(this.live=null),this.viewer?.endLook(),this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return this._proHint,y}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro||!K("camera_cockpit"))return y;let e=this.hass,n=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))},t=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>W(d)==="camera"))];this.watchCameras(!0);let i=d=>{let u=e.states[d],p=u?.attributes.entity_picture;return p&&u&&!Z(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=d=>{let u=e.states[d];return g`${G(e,d)}${u?.state==="recording"?g` <b>● ${I(e,"state_recording")}</b>`:y}`},s=this._wallBig&&t.includes(this._wallBig)?this._wallBig:null;if(s){let d=i(s),u=this.liveFor(s),p=()=>{this.throughWall=!0,n(),this.lookThrough(s)};return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${I(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${r(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${I(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?g`<img src=${d} alt="" />`:g`<div class="fp3d-wall-none">${I(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=Ip(t.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return g`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${I(e,"camera_wall_title")} · ${t.length} <span class="fp3d-still">${I(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${t.map(d=>{let u=i(d),p=Ve(e,d).some(h=>e.states[h]?.state==="on");return g`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${I(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?g`<img src=${u} alt="" />`:g`<div class="fp3d-wall-none">${I(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let n={id:e,el:null,failed:!1};this.live=n;let t=window;t.loadCardHelpers?t.loadCardHelpers().then(i=>{if(this.live!==n)return;let r=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});r.hass=this.hass,n.el=r,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}popOnDetection(e,n){let t=this.now();for(let i of Ve(e,n)){let r=e.states[i];if(r?.state!=="on"||!r.last_changed)continue;let s=Date.parse(r.last_changed),a=`${i}@${r.last_changed}`;if(this.popSeen.has(a)||t-s>3e4)continue;this.popSeen.add(a),this.popSeen.size>200&&(this.popSeen=new Set([...this.popSeen].slice(-50)));let l=e.states[n],c=l?.attributes.entity_picture,d=c&&!Z(l)?c.startsWith("data:")?c:`${c}${c.includes("?")?"&":"?"}fp3d=${Date.now()}`:null;this._camPop={entity:n,text:`${I(e,`detect_${uo(e,i)}`)} \xB7 ${G(e,n)}`,until:t+2e4,src:d},clearTimeout(this.camPopTimer),this.camPopTimer=setTimeout(()=>this._camPop=null,2e4);return}}camPopTimer;renderCamPop(){let e=this._camPop;return!e||!this.hass||this._through?y:g`<div class="fp3d-campop" role="status">
      <button class="fp3d-campop-img" title=${I(this.hass,"camera_popup_open")} @click=${()=>(this._camPop=null,this.lookThrough(e.entity))}>
        ${e.src?g`<img src=${e.src} alt="" />`:y}
      </button>
      <div class="fp3d-campop-bar"><span>${e.text}</span><button class="fp3d-chip" aria-label=${I(this.hass,"close")} @click=${()=>this._camPop=null}>✕</button></div>
    </div>`}zoomDef(){return Tn(this.building?.settings.styles_custom),this.zoomStyle?Et(this.zoomStyle)??null:null}renderZoomBackground(){let e=this.morph,n=this.zoomDef()?.bg;return n?g`<div class="fp3d-zoom-bg" style="opacity:${e};background:linear-gradient(180deg, ${n[0]}, ${n[1]})"></div>`:y}renderThrough(){let e=this._through;if(!e||!this.hass)return y;let n=this.hass.states[e.entity],t=n?.attributes.entity_picture,i=t&&!Z(n)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,r=this.building?.settings.director?.live?this.liveFor(e.entity):null;return g`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${e.ready?r?g`<div class="fp3d-through-img fp3d-through-live">${r}</div>`:i?g`<img class="fp3d-through-img" src=${i} alt="" />`:y:y}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${G(this.hass,e.entity)}</span>
        <span class="fp3d-still">${r?"\u25CF Live":I(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${I(this.hass,"through_blend")}
          @input=${s=>this._blend=Number(s.target.value)/100}
        />
        <button class="fp3d-chip" title=${I(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${I(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${I(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let n=this.renderRoot.querySelector(".fp3d-through-img");n&&typeof n.requestFullscreen=="function"?n.requestFullscreen().catch(()=>ve(this,e)):ve(this,e)}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return y;let n=this.renderRoot.querySelector(".fp3d-stage"),t=n?.clientWidth??800,i=n?.clientHeight??600,r=Math.max(8,Math.min(t-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return g`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        ?slatInvert=${no(this.building,e.entity)}
        .presets=${K("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${K("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){let n=[];for(let t of this.scene){if(t.kind!=="marker")continue;let i=e.floors.find(d=>d.id===t.floorId),r=t.furnitureId?i?.furniture.find(d=>d.id===t.furnitureId):void 0;if(!i||!r&&!t.at)continue;let[s,a]=r?[r.x,r.z]:t.at,l=dp(t.path),c=cp(t.emoji);n.push({id:`module:${t.id}`,floorId:i.id,roomId:i.rooms.find(d=>d.points.length>=3&&V([s,a],d.points))?.id??null,x:s,z:a,y:t.y??(r?fe(i,r)+r.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:t.name,text:t.text??"",active:!!t.active&&!this.dimmed,unavailable:!1,glow:t.color&&t.active&&!this.dimmed?{color:t.color,level:1}:null,pin:!0,full:!0,...r?{furnitureId:r.id}:{}})}return n}openModuleCard(e){let n=this.scene.find(r=>r.kind==="marker"&&r.id===e);if(!n)return;if(n.sheet){this.openRoomSheet(n.sheet.roomId,n.sheet.id);return}n.card&&(this.mediaFolded.delete(n.card),this.cardPing=n.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let t=this.building?.floors.find(r=>r.id===n.floorId),i=t?.furniture.find(r=>r.id===n.furnitureId);t&&i&&this.viewer?.focus(t.id,i.x,i.z,fe(t,i)+i.h*.6,`module:${n.id}`)}onDeviceTap(e,n=0,t=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("popup:"))return this.openModulePopup(e.slice(6));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),n,t,!1);if(e.startsWith("gangs:")){let r=e.slice(6),s=this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===r);if(!s)return;let a=No(s);if(a.length===1)return this.onDeviceTap(a[0],n,t);if(a.length>1){this._gangMenu={furnitureId:r,x:n,y:t};return}let l=Yn(s).find(c=>c.power&&c.power!=="none")?.power;l&&(this.ro?this.showInfo(l,n,t):ve(this,l));return}if(e.startsWith("plant:")){let r=e.slice(6);this.onPlantTap(r,n,t);return}if(e.startsWith("hh:")){let[r,s]=e.slice(3).split("#");this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===s&&l.type==="waste_bin")?(this._binInfo={furnitureId:s,x:n,y:t},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(r,n,t):ve(this,r);return}if(this.ro){let r=this.building,s=r?r.energy.grid??zn(r,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,n,t);return}if(e==="grid"){let r=this.building,s=r?r.energy.grid??zn(r,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&ve(this,s);return}if(e.startsWith("detect:")){ve(this,e.slice(7));return}let i=W(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:n,y:t};return}if(i&&yc.has(i)){if(this.confirmSet.has(e)&&!confirm(I(this.hass,"confirm_switch",{name:G(this.hass,e)})))return;wi(this.hass,e)}else ve(this,e)}onOpeningTap(e,n,t,i){let r=this.openingLinks?.get(e);if(!r||!this.hass)return;if(r.lock&&!r.cover){this.ro?this.showInfo(r.lock,n,t):this._menu={entity:r.lock,x:n,y:t,doorLock:!0};return}let s=r.cover;if(!s)return;if(this.ro){this.showInfo(r.contact??s,n,t);return}if(i){ve(this,s);return}let a=this.hass.states[s];if(!a||Z(a)){ve(this,s);return}if(this.confirmSet.has(s)&&!confirm(I(this.hass,"confirm_switch",{name:G(this.hass,s)})))return;let[l]=s.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s})}effectiveTheme(){return this.effectiveStyle().base}effectiveStyle(){let e=this.hass,n=this.building?.settings,t=this._styleOverride,i=t&&(t.until===null||t.until>Date.now())?t.style:null,r=this.styleEntity||n?.style_entity||null;Tn(n?.styles_custom);let s={};for(let c of Yt())s[c.id]=[c.name??I(e,`style_${c.id}`)];let a=e?.states["sun.sun"]?.state,l=Ru({choice:this.theme,evening:this.themeEvening,night:this.themeNight,plan:n,entityState:r?e?.states[r]?.state??null:null,override:i,now:new Date,sunUp:a==="above_horizon"?!0:a==="below_horizon"?!1:null,names:s});return Et(l)??Et("neon")}setStyleOverride(e,n){let t=e===""||e==="reset"||e==="auto_reset"?null:Et(e)?e:Ri(e);this._styleOverride=t?{style:t,until:n?Date.now()+n*6e4:null}:null;try{this._styleOverride?localStorage.setItem(va,JSON.stringify(this._styleOverride)):localStorage.removeItem(va)}catch{}return this.viewer?.setStyle(this.effectiveStyle()),t}onStyle(e){let n=(this.screen??"").trim().toLowerCase();e.screens.length&&!e.screens.some(t=>t.trim().toLowerCase()===n)||this.setStyleOverride(e.style,e.minutes??null)}styleSentence(e){let n=this.hass,t=e.toLowerCase().trim(),i=/\b(stil|style|look|design|farbstil|ansicht|optik)\b/.test(t),r=t.replace(/\b(neon ?plan|haus|house|bitte|please|stelle?|schalte?|mach|setze?|set|switch|change|to|auf|zu|um|in|den|die|das|the|an|on|ein|als|modus|mode|stil|style|look|design|farbstil|ansicht|optik)\b/g," ").replace(/\s+/g," ").trim();if(i&&/^(zurück|zurueck|normal|reset|back|standard|automatisch|auto)$/.test(r))return this.setStyleOverride("reset",null),I(n,"style_reset");Tn(this.building?.settings.styles_custom);let s={};for(let l of Yt())s[l.id]=[l.name??I(n,`style_${l.id}`)];let a=Ri(r,s);return a?(this.setStyleOverride(a,null),I(n,"style_set",{name:Et(a)?.name??I(n,`style_${a}`)})):null}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}cardsOn(){return(this.showEnergy||!!this.holograms)&&this.holoVisible()}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!K("energy_pro")||!e||this.roomId||!this.showEnergy)return y;let n=i=>I(this.hass,i),t=[];if(e.consumption!==null&&t.push({cls:"total",label:n("energy_consumption"),value:de(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;t.push({cls:i?"export":"grid",label:n(i?"energy_grid_export":"energy_grid_import"),value:de(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&t.push({cls:"solar",label:n("energy_solar"),value:de(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?de(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);t.push({cls:"battery",label:n("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&t.push({cls:"tariff",label:n("energy_tariff"),value:`${ie(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?y:t.map(i=>g`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${n("flows_hint")} (${n(this._flows?"flow_on":"flow_off")})`} aria-label=${n("flows")} @click=${()=>this.toggleFlows()}>
        <span>${n("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${n("holos_hint")} aria-label=${n("holos")} @click=${()=>this.toggleHolos()}>
        <span>${n("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return y;let e=Fi[this.heatMode],n=this.heatMode==="temperature",t=n?bt(this.hass,e.stops[0][0]):e.stops[0][0],i=n?bt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=n?Le(this.hass):e.unit,s=a=>I(this.hass,a);return g`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Cu(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ie(this.hass,t,0)} ${r}</span><span>${ie(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?y:g`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){let n=e.config?.latitude,t=e.config?.longitude;if(typeof n!="number"||typeof t!="number")return null;let i=`${new Date().toDateString()},${n},${t}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=Np(Date.now(),n,t)),this.sunPathCache}skyColor(){let e=_o[this.effectiveTheme()]??_o.neon,n=this._sky;return e.night[0].map((t,i)=>Math.round(t+(e.day[0][i]-t)*n))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let n=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),n()},5e3+Math.random()*9e3)};n()}render(){let e=this._sky,n=(l,c)=>`rgb(${l.map((d,u)=>Math.round(d+(c[u]-d)*e)).join(",")})`,t=_o[this.effectiveTheme()]??_o.neon,i=this.effectiveStyle().bg,r=zp(this.building?.settings.backdrop)??(i?`linear-gradient(180deg, ${i[0]}, ${i[1]})`:null),a=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-room-scale:${g_(this.building)};--fp3d-sky:${n(t.night[0],t.day[0])};--fp3d-ground:${n(t.night[1],t.day[1])}${r?`;background:${r}`:""}`;return g`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.effectiveTheme()==="day"?"fp3d-bright":""} ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""} ${this._spotHint?"fp3d-picking":""}"
      style=${a}
    >
      ${this.renderZoomBackground()}
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:y} ${this.clean?y:this.renderEnergy()} ${this.renderHologram()} ${this.clean?y:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?y:g`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?y:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderPlantInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCamPop()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderModulePopup()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?y:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()} ${this.building?.settings.surroundings?.on?g`<a class="fp3d-osm-credit" href=${up} target="_blank" rel="noopener">© OpenStreetMap</a>`:y}
      ${this.renderMic()} ${this.renderFlyIn()}
      ${this._spotHint?g`<button class="fp3d-spot-hint" @click=${()=>this.viewer?.pickSpot(null)}>📍 ${this._spotHint} <span aria-hidden="true">✕</span></button>`:y}
      ${this._announce?g`<div class="fp3d-announce" role="status" @click=${()=>this._announce=null}>📢 ${this._announce}</div>`:y}
      ${this.pivotMark&&!this._walk?g`<span class="fp3d-pivot" aria-hidden="true"></span>`:y}
      ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Zi())}></fp3d-mic-probe>`:y}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?I(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):I(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?g`(${this._stats.busy.map(l=>I(this.hass,`stats_busy_${l}`)).join(", ")})`:y} ·
            ${I(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${I(this.hass,this._stats.low?"stats_low":"stats_full",{r:ie(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ie(this.hass,this.syncMs,1)} ms`:""}</span
          >`:y}
    </div>`}static styles=[Me,Te,ge`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      /* a tag: light text on a solid dark plate, the bin's colour as its edge and a soft glow (coloured text – a
         blue paper bin's – was hard to read) */
      .fp3d-holo.fp3d-holo-bin {
        min-width: 0;
        width: auto;
        padding: 0;
        border-radius: 8px;
        pointer-events: none;
        border: 1.5px solid color-mix(in srgb, var(--bin) 85%, white);
        border-left-width: calc(6px * var(--fp3d-pin-k, 1));
        background: rgba(9, 13, 22, 0.94);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: 0 0 16px color-mix(in srgb, var(--bin) 50%, transparent), 0 2px 6px rgba(0, 0, 0, 0.5);
        color: #f5f8ff;
        text-shadow: none;
      }
      /* the tags of bins, mailboxes and plants follow the symbol size like the pins' labels (#645) */
      .fp3d-holo-bin .fp3d-holo-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: calc(4px * var(--fp3d-pin-k, 1)) calc(10px * var(--fp3d-pin-k, 1));
        white-space: nowrap;
      }
      .fp3d-holo.fp3d-holo-later {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        border-color: color-mix(in srgb, var(--bin) 60%, #3a4252);
      }
      .fp3d-holo-bin b {
        font-size: calc(19px * var(--fp3d-pin-k, 1));
        font-weight: 700;
        line-height: 1.15;
        color: #ffffff;
      }
      .fp3d-holo-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-bin span {
        font-size: calc(13px * var(--fp3d-pin-k, 1));
        line-height: 1.2;
        color: #cfd7e6;
      }
      /* put out already: a calm green edge, no glow */
      .fp3d-holo.fp3d-holo-out {
        border-color: #4ddf7a;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      }
      .fp3d-holo-out b,
      .fp3d-holo-line-out b {
        color: #a8ffc2;
      }
      /* bins standing together: one plate, one line each in pickup order with its own colour edge */
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-multi {
        border-color: rgba(190, 205, 230, 0.55);
        border-left-width: 1.5px;
      }
      .fp3d-holo-bin .fp3d-holo-lines {
        align-items: stretch;
        gap: calc(3px * var(--fp3d-pin-k, 1));
        padding: calc(5px * var(--fp3d-pin-k, 1)) calc(9px * var(--fp3d-pin-k, 1)) calc(5px * var(--fp3d-pin-k, 1)) calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line {
        display: flex;
        align-items: baseline;
        gap: calc(7px * var(--fp3d-pin-k, 1));
        border-left: calc(5px * var(--fp3d-pin-k, 1)) solid var(--bin);
        padding-left: calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line b {
        font-size: calc(16px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-line-later {
        border-left-color: color-mix(in srgb, var(--bin) 65%, #3a4252);
      }
      /* a mailbox's or a plant's tag from afar: a round symbol (the text comes back close up) */
      .fp3d-holo-sym {
        display: none;
      }
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-far {
        border-radius: 50%;
        border-width: 2px;
      }
      .fp3d-holo-far .fp3d-holo-body {
        display: none;
      }
      .fp3d-holo-far .fp3d-holo-sym {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(34px * var(--fp3d-pin-k, 1));
        height: calc(34px * var(--fp3d-pin-k, 1));
        color: #ffffff;
      }
      .fp3d-holo-far .fp3d-holo-sym svg {
        width: 62%;
        height: 62%;
      }
      .fp3d-holo-link[style*="--bin"] line,
      .fp3d-holo-link[style*="--bin"] circle {
        stroke: var(--bin);
      }
      /* two classes, like the bin bubble: the info bubbles' rule (.fp3d-swipe) lets taps through – its buttons must
         take them (#868) */
      .fp3d-swipe.fp3d-gang-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        z-index: 6;
        pointer-events: auto;
      }
      .fp3d-gang-menu .fp3d-chip {
        text-align: left;
      }
      .fp3d-gang-menu .fp3d-gang-on {
        border-color: var(--fp3d-accent, #37e0ff);
        box-shadow: 0 0 10px rgba(55, 224, 255, 0.35);
      }
      .fp3d-gang-menu small {
        opacity: 0.7;
      }
      .fp3d-pivot {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 22px;
        height: 22px;
        margin: -11px 0 0 -11px;
        border: 1.5px solid color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
      }
      .fp3d-pivot::before,
      .fp3d-pivot::after {
        content: "";
        position: absolute;
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
      }
      .fp3d-pivot::before {
        left: 50%;
        top: -6px;
        bottom: -6px;
        width: 1.5px;
        margin-left: -0.75px;
      }
      .fp3d-pivot::after {
        top: 50%;
        left: -6px;
        right: -6px;
        height: 1.5px;
        margin-top: -0.75px;
      }
      /* two classes: the info bubbles' own rule (.fp3d-swipe, further down) lets taps through to the house and
         would win over a single class – this bubble has a button (#793) */
      .fp3d-swipe.fp3d-bin-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-swipe.fp3d-bin-info .fp3d-bin-out {
        pointer-events: auto;
      }
      .fp3d-bin-info small {
        opacity: 0.7;
        font-weight: 400;
      }
      .fp3d-bin-info .fp3d-bin-out {
        margin-top: 6px;
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(190, 205, 230, 0.55);
        background: rgba(255, 255, 255, 0.08);
        color: #f5f8ff;
        font: inherit;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-bin-info .fp3d-bin-out-on {
        border-color: #4ddf7a;
        background: rgba(77, 223, 122, 0.16);
        color: #a8ffc2;
      }
      .fp3d-swipe.fp3d-plant-info {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 170px;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-plant-title {
        font-weight: 600;
        font-size: 13.5px;
      }
      .fp3d-plant-status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 12.5px;
        padding: 4px 8px;
        border-radius: 8px;
      }
      .fp3d-plant-thirsty {
        background: rgba(255, 140, 31, 0.18);
        color: #ff9933;
        font-weight: 600;
      }
      .fp3d-plant-healthy {
        background: rgba(56, 217, 169, 0.16);
        color: #38d9a9;
        font-weight: 500;
      }
      .fp3d-plant-sub {
        opacity: 0.75;
        font-size: 11.5px;
      }
      .fp3d-plant-actions {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
      }
      .fp3d-plant-act {
        flex: 1;
        font-weight: 600;
        font-size: 12px;
        padding: 5px 12px;
        border-radius: 999px;
        background: #0284c7;
        color: #ffffff;
        cursor: pointer;
        border: none;
      }
      .fp3d-watering-on {
        background: #0284c7 !important;
        color: #ffffff !important;
        animation: fp3d-sec-pulse 1s infinite alternate;
      }
      .fp3d-plant-sub-btn {
        padding: 5px 9px;
        font-size: 12px;
        cursor: pointer;
      }
      .fp3d-hh {
        position: absolute;
        right: 12px;
        top: 58px;
        z-index: 3;
        width: min(250px, calc(100% - 24px));
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: rgba(10, 18, 34, 0.72);
        border: 1px solid rgba(110, 220, 255, 0.28);
        backdrop-filter: blur(8px);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);
      }
      .fp3d-hh-folded {
        width: auto;
      }
      .fp3d-hh button {
        font: inherit;
        color: inherit;
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
        border-radius: 9px;
      }
      .fp3d-hh-head {
        font-size: 12px;
        font-weight: 600;
        padding: 3px 6px;
        opacity: 0.9;
      }
      .fp3d-hh-head b {
        margin-left: 4px;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-hh-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        padding: 5px 6px;
      }
      .fp3d-hh-row:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.06);
      }
      .fp3d-hh-row:disabled {
        cursor: default;
      }
      .fp3d-hh-hot .fp3d-hh-icon {
        color: #ffb547;
      }
      .fp3d-hh-icon {
        flex: none;
        display: inline-flex;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .fp3d-alert-actionable {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-alert-action-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        padding: 2px 7px;
        border-radius: 8px;
        background: rgba(255, 59, 79, 0.28);
        border: 1px solid rgba(255, 59, 79, 0.6);
        color: #fff;
        font-size: 11.5px;
        font-weight: 700;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
        isolation: isolate;
      }
      /* under everything on the stage, above the stage's own background (the stage isolates its layers) */
      .fp3d-zoom-bg {
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
      }
      /* while a spot is picked, names and pins on the view let the tap through to the plan */
      .fp3d-picking .fp3d-labels,
      .fp3d-picking .fp3d-labels * {
        pointer-events: none !important;
      }
      .fp3d-picking .fp3d-canvas {
        cursor: crosshair;
      }
      /* a module asks for a spot: the hint stands at the top until the tap (a tap on it cancels) */
      .fp3d-spot-hint {
        position: absolute;
        top: calc(12px + env(safe-area-inset-top, 0px));
        left: 50%;
        transform: translateX(-50%);
        z-index: 25;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid rgba(62, 232, 255, 0.6);
        background: rgba(6, 12, 24, 0.85);
        color: #e6ecff;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 0 18px rgba(62, 232, 255, 0.25);
      }
      /* the real sky (drawn by the 3D view): first on the stage, so the zoom style's background lies over it */
      .fp3d-sky {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: -1;
        pointer-events: none;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: calc(11px * var(--fp3d-room-scale, 1));
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      /* the house's size of the room names (idea: Banhammer1919) */
      .fp3d-pin[data-room] {
        font-size: calc(12.5px * var(--fp3d-room-scale, 1));
        padding: calc(5px * var(--fp3d-room-scale, 1)) calc(10px * var(--fp3d-room-scale, 1));
        border-radius: calc(10px * var(--fp3d-room-scale, 1));
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        /* the symbol size (small 0.8, normal 1, large 1.25) scales the pin from inside, not its position */
        font: 600 calc(12px * var(--fp3d-pin-k, 1)) var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: calc(24px * var(--fp3d-pin-k, 1));
        height: calc(24px * var(--fp3d-pin-k, 1));
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev-icon svg {
        width: calc(18px * var(--fp3d-pin-k, 1));
        height: calc(18px * var(--fp3d-pin-k, 1));
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        pointer-events: auto;
      }
      .fp3d-person-tap {
        cursor: pointer;
      }
      .fp3d-person-face {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        background: var(--fp3d-pc, #ff5fd2);
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 55%, transparent),
          0 0 18px var(--fp3d-pc, #ff5fd2);
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person-figure {
        width: auto;
        height: auto;
      }
      .fp3d-person-figure .fp3d-person-face {
        display: none;
      }
      .fp3d-person-figure .fp3d-person-tag {
        position: static;
        display: block;
        transform: none;
      }
      .fp3d-person-tag {
        position: absolute;
        left: 50%;
        top: calc(100% + 4px);
        transform: translateX(-50%);
        padding: 1px 7px;
        border-radius: 8px;
        background: rgba(8, 14, 28, 0.82);
        border: 1px solid color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 60%, transparent);
        color: #fff;
        font: 600 11px var(--fp3d-font);
        white-space: nowrap;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      /* room names off: the pins go, but the "values" stay (without the name) */
      .fp3d-no-room-names .fp3d-pin:not(.fp3d-pin-info),
      .fp3d-no-room-names .fp3d-pin-info .fp3d-pin-name {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      /* a shadow that pulses repaints the warning every frame: it glows steadily on the tablet level */
      .fp3d-low .fp3d-alert {
        animation: none;
      }
      .fp3d-low .fp3d-holo-link line,
      .fp3d-low .fp3d-holo-link circle,
      .fp3d-low .fp3d-holo-curve {
        filter: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .fp3d-thumbs-compact .fp3d-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .fp3d-thumbs-compact .fp3d-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      /* at the top right, clear of the floor pictures and the switch rows (a card moves it beside its own buttons) */
      .fp3d-walk-btn {
        position: absolute;
        z-index: 3;
        top: 12px;
        right: var(--fp3d-walk-right, 12px);
        height: 38px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 14px 0 10px;
        font: inherit;
        font-weight: 700;
        font-size: 14px;
        border: 1px solid rgba(55, 224, 255, 0.45);
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-walk-surface {
        position: absolute;
        inset: 0;
        z-index: 4;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-walk-top {
        position: absolute;
        z-index: 5;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        white-space: nowrap;
      }
      .fp3d-walk-room,
      .fp3d-walk-exit,
      .fp3d-walk-hint {
        padding: 8px 14px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font: inherit;
        font-weight: 700;
      }
      .fp3d-walk-exit {
        border: 0;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-walk-hint {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 62px;
        transform: translateX(-50%);
        max-width: min(560px, calc(100% - 32px));
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-walk-stick {
        position: absolute;
        z-index: 5;
        right: 18px;
        bottom: calc(18px + var(--fp3d-bottom-inset, 0px));
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: rgba(14, 21, 38, 0.55);
        border: 1px solid var(--fp3d-line);
        display: grid;
        place-items: center;
        touch-action: none;
      }
      .fp3d-walk-stick span {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--fp3d-accent);
        box-shadow: 0 0 16px rgba(55, 224, 255, 0.5);
        pointer-events: none;
      }
      /* with a mouse the stick is not needed */
      @media (pointer: fine) {
        .fp3d-walk-stick {
          display: none;
        }
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-osm-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        z-index: 3;
        font-size: 10px;
        color: var(--fp3d-muted, rgba(200, 210, 230, 0.7));
        opacity: 0.75;
        text-decoration: none;
      }
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      /* the clock in a corner of the view (view settings / card option clock) */
      .fp3d-clock {
        position: absolute;
        z-index: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        padding: 8px 14px;
        border-radius: 14px;
        background: rgba(4, 16, 24, 0.55);
        color: var(--fp3d-text);
        line-height: 1.1;
        pointer-events: none;
        backdrop-filter: blur(6px);
      }
      .fp3d-clock b {
        font-size: 30px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.02em;
      }
      .fp3d-clock span {
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      /* at the top it sits under the energy strip and the walk button */
      .fp3d-clock-tl {
        top: 64px;
        left: 12px;
      }
      .fp3d-clock-tr {
        top: 64px;
        right: 12px;
      }
      .fp3d-clock-bl {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        left: 12px;
      }
      .fp3d-clock-br {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        right: 12px;
      }
      .fp3d-mic {
        position: absolute;
        bottom: calc(6px + var(--fp3d-bottom-inset, 0px));
        /* a big target: it is tapped from across the room, often with a thumb */
        width: 52px;
        height: 52px;
        touch-action: manipulation;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-mic-on {
        color: #ff5a6a;
        border-color: #ff5a6a;
        box-shadow: 0 0 12px rgba(255, 90, 106, 0.7);
      }
      .fp3d-mic-say {
        position: absolute;
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        max-width: min(420px, calc(100% - 80px));
        padding: 6px 12px;
        border-radius: 14px;
        background: rgba(8, 16, 34, 0.85);
        border: 1px solid rgba(160, 240, 255, 0.35);
        color: var(--fp3d-text);
        font-size: 14px;
        z-index: 4;
      }
      .fp3d-announce {
        position: absolute;
        left: 50%;
        top: 18%;
        transform: translateX(-50%);
        max-width: min(640px, calc(100% - 32px));
        padding: 16px 26px;
        border-radius: 18px;
        background: rgba(8, 16, 34, 0.9);
        border: 1px solid rgba(160, 240, 255, 0.6);
        box-shadow: 0 0 24px rgba(0, 229, 255, 0.35);
        color: var(--fp3d-text);
        font-size: clamp(20px, 4vw, 34px);
        text-align: center;
        z-index: 6;
      }
      .fp3d-mic-err {
        border-color: rgba(255, 90, 106, 0.7);
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      /* time travel: the clock sits at the top centre, the warnings below it */
      .fp3d-replay .fp3d-alert-banner {
        top: 74px;
      }
      /* the time bar takes the bottom: the heat legend moves up under the energy values */
      .fp3d-replay .fp3d-legend,
      .fp3d-replay.fp3d-has-alerts .fp3d-legend {
        bottom: auto;
        top: 62px;
      }
      .fp3d-replay .fp3d-energy {
        max-width: calc(50% - 96px);
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        pointer-events: auto;
      }
      .fp3d-replay .fp3d-energy > * {
        flex: none;
      }
      /* the warnings sit below the clock, so the energy values stay at the top */
      .fp3d-replay.fp3d-has-alerts .fp3d-energy {
        top: 10px;
      }
      @container fp3d (max-width: 700px) {
        .fp3d-replay .fp3d-energy,
        .fp3d-replay.fp3d-has-alerts .fp3d-energy {
          top: 68px;
          max-width: calc(100% - 24px);
        }
        .fp3d-replay .fp3d-alert-banner,
        .fp3d-replay .fp3d-legend {
          top: 116px;
        }
        .fp3d-replay.fp3d-has-alerts .fp3d-legend {
          top: 164px;
        }
      }
      .fp3d-info {
        grid-template-columns: auto;
        z-index: 5;
      }
      .fp3d-swipe.fp3d-info b {
        font-size: 15px;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-central-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-central-top > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-central-gear {
        padding: 4px 10px;
        font-size: 12px;
      }
      /* a module's sheet and the ⚙ settings: a glass box in the middle, over a dim backdrop */
      .fp3d-sheet-backdrop {
        position: absolute;
        inset: 0;
        z-index: 7;
        background: rgba(4, 8, 16, 0.35);
      }
      .fp3d-pop {
        width: min(560px, calc(100% - 24px));
      }
      .fp3d-pop.fp3d-pop-wide {
        width: min(960px, calc(100% - 24px));
      }
      .fp3d-pop-big {
        display: block;
        width: 100%;
        max-height: calc(100vh - 160px);
        object-fit: contain;
        border-radius: 12px;
        background: #000;
      }
      .fp3d-pop-groups {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-pop-groups h4 {
        margin: 0 0 6px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-strong h4 {
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-pop-row {
        display: grid;
        grid-template-columns: 96px 1fr;
        gap: 10px;
        align-items: baseline;
        padding: 6px 0 6px 12px;
        border-left: 3px solid var(--cal, #37e0ff);
        margin-bottom: 4px;
      }
      .fp3d-pop-lead {
        font-variant-numeric: tabular-nums;
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-pop-sum {
        font-size: 15px;
      }
      .fp3d-pop-sum small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-media,
      .fp3d-pop-person {
        display: flex;
        gap: 16px;
        align-items: center;
      }
      .fp3d-pop-cover {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 12px;
        background: #000;
        flex: none;
      }
      .fp3d-pop-sym {
        font-size: 72px;
        line-height: 1;
        flex: none;
      }
      .fp3d-pop-mediatext {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-pop-mediatext b {
        font-size: 18px;
      }
      .fp3d-pop-mediatext span {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-ctl {
        display: flex;
        gap: 8px;
        margin-top: 6px;
      }
      .fp3d-pop-rowlive .fp3d-pop-lead {
        color: var(--fp3d-accent, #37e0ff);
        font-weight: 700;
      }
      .fp3d-pop-groups h4 {
        cursor: pointer;
      }
      .fp3d-pop-sum em {
        display: block;
        font-style: normal;
        font-size: 13px;
        color: var(--fp3d-muted, #8fa0c0);
        margin-top: 2px;
      }
      .fp3d-pop-form {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pop-in {
        flex: 1 1 140px;
        min-width: 0;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.06);
        color: inherit;
        font: inherit;
      }
      .fp3d-pop-addbtn {
        align-self: flex-start;
        margin-top: 4px;
      }
      .fp3d-pop-todo {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .fp3d-pop-todoitem {
        display: flex;
        gap: 12px;
        align-items: center;
        padding: 8px 6px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
      }
      .fp3d-pop-todoitem:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-pop-todoitem input {
        width: 22px;
        height: 22px;
        accent-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-pop-done span {
        text-decoration: line-through;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-people {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .fp3d-pop-personrow {
        display: flex;
        gap: 12px;
        align-items: center;
        opacity: 0.6;
      }
      .fp3d-pop-personrow.fp3d-pop-bright {
        opacity: 1;
      }
      .fp3d-pop-personrow img,
      .fp3d-pop-initial {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        background: rgba(255, 255, 255, 0.1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        flex: none;
      }
      .fp3d-pop-personrow div {
        display: flex;
        flex-direction: column;
      }
      .fp3d-pop-personrow span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-pop-h {
        margin: 10px 0 4px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-line {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
        align-items: baseline;
        font-size: 18px;
      }
      .fp3d-pop-line span + span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 14px;
      }
      .fp3d-pop-line em,
      .fp3d-pop-mediatext em {
        font-style: normal;
        color: var(--fp3d-accent, #37e0ff);
        font-size: 14px;
      }
      .fp3d-pop-waste {
        margin: 0;
      }
      .fp3d-pop-tiles {
        display: flex;
        gap: 10px;
        margin-top: 12px;
      }
      .fp3d-pop-tiles div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 8px 4px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-pop-tiles span {
        font-size: 26px;
      }
      .fp3d-pop-tiles small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-live {
        aspect-ratio: 16 / 9;
        overflow: hidden;
      }
      .fp3d-sheet {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(440px, calc(100% - 24px));
        max-height: calc(100% - 40px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 14px 16px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(12px);
        z-index: 8;
      }
      .fp3d-sheet header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-sheet-x {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        cursor: pointer;
      }
      .fp3d-sheet-choice,
      .fp3d-sheet-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-sheet-chip {
        min-height: 40px;
        padding: 0 14px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 10%, transparent);
        color: inherit;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
      }
      .fp3d-sheet-chip:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-sheet-row {
        display: flex;
        gap: 6px;
      }
      .fp3d-sheet-input {
        flex: 1;
        min-width: 0;
        min-height: 38px;
        padding: 0 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(0, 0, 0, 0.18);
        color: inherit;
        font: inherit;
      }
      .fp3d-sheet-lines p,
      .fp3d-set-note {
        margin: 0;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-settings h4 {
        margin: 6px 0 0;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-set-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      .fp3d-set-field {
        display: grid;
        gap: 4px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-set-field select,
      .fp3d-set-field textarea {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(0, 0, 0, 0.18);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 6px 8px;
      }
      .fp3d-sheet-gear {
        align-self: flex-start;
        border: 0;
        background: none;
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 13px;
        padding: 4px 0;
        cursor: pointer;
      }
      .fp3d-sheet-gear:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-set-module {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-note {
        position: absolute;
        left: 50%;
        bottom: calc(80px + var(--fp3d-bottom-inset, 0px));
        transform: translateX(-50%);
        max-width: calc(100% - 32px);
        padding: 8px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        color: var(--fp3d-text);
        font-size: 13px;
        box-shadow: var(--fp3d-shadow);
        z-index: 9;
        pointer-events: none;
      }
      /* a camera's new detection as a small picture (#442) */
      .fp3d-campop {
        position: absolute;
        right: 12px;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 64px);
        z-index: 5;
        width: min(360px, 70vw);
        border-radius: 14px;
        overflow: hidden;
        background: rgba(8, 16, 34, 0.9);
        border: 1px solid rgba(255, 120, 120, 0.6);
        box-shadow: 0 0 26px rgba(255, 80, 80, 0.35);
      }
      .fp3d-campop-img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        padding: 0;
        border: 0;
        background: #000;
        cursor: pointer;
      }
      .fp3d-campop-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-campop-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 10px;
        font-size: 13px;
        color: #ffd6d6;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* left: 50% leaves only half the width to shrink into: a width of its own keeps the buttons inside */
        width: min(320px, calc(100% - 60px));
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-live {
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
      .fp3d-through-live > * {
        width: 100%;
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-through-img:fullscreen {
        opacity: 1;
        object-fit: contain;
        background: #000;
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls button:disabled {
        opacity: 0.3;
        cursor: default;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-meters {
        display: flex;
        flex-wrap: wrap;
        gap: 2px 10px;
      }
      .fp3d-holo-mrow {
        display: grid;
        grid-template-columns: 50px 64px 1fr;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
        font-size: 12px;
      }
      .fp3d-holo-mrow span {
        opacity: 0.8;
      }
      .fp3d-holo-mrow b {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-mrow i {
        position: relative;
        height: 4px;
        border-radius: 2px;
        /* red – yellow – green (the ideal range in the middle) – yellow – red */
        background: linear-gradient(90deg, rgba(255, 77, 64, 0.35), rgba(255, 204, 64, 0.35) 25%, rgba(77, 255, 128, 0.45) 40%, rgba(77, 255, 128, 0.45) 60%, rgba(255, 204, 64, 0.35) 75%, rgba(255, 77, 64, 0.35));
      }
      .fp3d-holo-mrow-none {
        visibility: hidden;
      }
      .fp3d-holo-mrow em {
        position: absolute;
        top: -2px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-more {
        display: block;
        margin: 6px 0 0 auto;
        padding: 2px 9px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent, #37e0ff) 45%, transparent);
        border-radius: 9px;
        background: transparent;
        color: var(--fp3d-accent, #37e0ff);
        font: 600 11px var(--fp3d-font);
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-holo-mline {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
      }
      /* a bright style (Day, Homely, Architect's model, Pastel, Wood & paper): the darker glass of the module cards,
         so the light text stays readable over a light house and sky (#1126) */
      .fp3d-bright .fp3d-holo:not(.fp3d-holo-plain) {
        background: linear-gradient(140deg, rgba(40, 80, 130, 0.62) 0%, rgba(12, 28, 58, 0.78) 55%, rgba(8, 18, 40, 0.82) 100%);
      }
      /* a module's richer card: a state line, a second big value, a chain, cells, a hint */
      .fp3d-holo.fp3d-holo-mod-wide {
        width: 236px;
        /* a denser card: darker glass, so its many small values stay readable over a bright room */
        background: linear-gradient(140deg, rgba(40, 80, 130, 0.62) 0%, rgba(12, 28, 58, 0.78) 55%, rgba(8, 18, 40, 0.82) 100%);
      }
      .fp3d-holo-mod-wide .fp3d-holo-mrow {
        grid-template-columns: 74px 78px 1fr;
      }
      .fp3d-holo-ping {
        box-shadow:
          0 0 0 2px var(--fp3d-accent, #37e0ff),
          0 0 26px rgba(55, 224, 255, 0.55);
      }
      .fp3d-holo-status {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        padding: 4px 8px;
        border-radius: 9px;
        font-size: 13.5px;
        color: var(--st, #37e0ff);
        background: color-mix(in srgb, var(--st, #37e0ff) 14%, transparent);
        border: 1px solid color-mix(in srgb, var(--st, #37e0ff) 45%, transparent);
      }
      .fp3d-holo-status i {
        font-style: normal;
      }
      .fp3d-holo-status span {
        margin-left: auto;
        font-size: 11px;
        color: inherit;
        opacity: 0.8;
        white-space: nowrap;
      }
      .fp3d-holo-mod-main em {
        margin-left: auto;
        display: grid;
        justify-items: end;
        font-style: normal;
        line-height: 1.1;
      }
      .fp3d-holo-mod-main em b {
        font-size: 18px;
      }
      .fp3d-holo-mod-main em small {
        font-size: 10.5px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .fp3d-holo-chain {
        display: flex;
        align-items: stretch;
        gap: 3px;
        margin-top: 7px;
      }
      .fp3d-holo-chain > div,
      .fp3d-holo-cells > div {
        flex: 1;
        min-width: 0;
        display: grid;
        padding: 3px 5px;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(160, 240, 255, 0.16);
      }
      .fp3d-holo-chain small,
      .fp3d-holo-cells small {
        font-size: 10px;
        opacity: 0.75;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-holo-chain b,
      .fp3d-holo-cells b {
        font-size: 12.5px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-chain s {
        align-self: center;
        text-decoration: none;
        opacity: 0.6;
        font-size: 11px;
      }
      .fp3d-holo-chain-note {
        margin-top: 3px;
        font-size: 11px;
        text-align: right;
        opacity: 0.9;
      }
      .fp3d-holo-cells {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        margin-top: 7px;
      }
      .fp3d-holo-hint {
        margin-top: 6px;
        padding: 4px 7px;
        border-radius: 7px;
        font-size: 11.5px;
        color: var(--hint, #ffc04d);
        background: color-mix(in srgb, var(--hint, #ffc04d) 13%, transparent);
        border-left: 3px solid var(--hint, #ffc04d);
      }
      .fp3d-holo-mrow-fill {
        background: rgba(160, 240, 255, 0.14) !important;
        overflow: hidden;
      }
      .fp3d-holo-mrow-fill s {
        display: block;
        height: 100%;
        border-radius: 2px;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-spark-label {
        margin-top: 6px;
        font-size: 10.5px;
        opacity: 0.7;
      }
      .fp3d-holo-spark-label + .fp3d-holo-spark {
        margin-top: 1px;
      }
      .fp3d-holo-spark {
        display: block;
        width: 100%;
        height: 22px;
        margin-top: 6px;
      }
      .fp3d-holo-spark polyline {
        fill: none;
        stroke-width: 1.6;
        vector-effect: non-scaling-stroke;
        stroke-linejoin: round;
      }
      /* a module's chips (Pool Pro: ball valves and the six-way valve, set by hand) */
      .fp3d-holo-chips {
        display: grid;
        gap: 4px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
        pointer-events: auto;
      }
      .fp3d-holo-chip,
      .fp3d-holo-chip-row button {
        font: inherit;
        font-size: 11.5px;
        color: inherit;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(91, 124, 255, 0.35);
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-holo-chip {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-holo-chip i {
        font-style: normal;
        color: #ff6b5a;
      }
      .fp3d-holo-chip.fp3d-holo-on i {
        color: #4dff9a;
      }
      .fp3d-holo-chip small {
        opacity: 0.75;
      }
      .fp3d-holo-valve-pos {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* the view's own controls on the right (#285); the room panel opens there, so they make way for it */
      .fp3d-side-right :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        left: auto;
        right: 12px;
      }
      .fp3d-side-right .fp3d-eye {
        left: auto;
        right: 56px;
      }
      .fp3d-side-right.fp3d-panel-open :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        display: none;
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",wa);function __(o,e){let n=e.attributes.current_temperature,t=typeof n=="number"&&Number.isFinite(n)?`${ie(o,Math.round(n))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(e.state);return{text:[be(o,e),t].filter(Boolean).join(" \xB7 "),on:i}}function de(o,e){return Math.abs(e)>=1e3?`${ie(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function Zp(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var b_=new Set(["rug","stairwell","grid_point","worktop"]);function v_(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var va="neonplan3d.style_override",Yp="neonplan3d.module_full";function w_(){try{let o=JSON.parse(localStorage.getItem(Yp)??"[]");return Array.isArray(o)?o.filter(e=>typeof e=="string"):[]}catch{return[]}}function ya(o,e,n={}){let t=["neon","homely","designed","custom"],i=Yt();return g`${n.none?g`<option value="" ?selected=${!e}>${o("style_none")}</option>`:y}
    ${n.auto||n.house?g`<optgroup label=${o("style_group_auto")}>
          ${n.house?g`<option value="house" ?selected=${e==="house"}>${o("style_house")}</option>`:y}
          ${n.auto?g`<option value="auto" ?selected=${e==="auto"}>${o("theme_auto")}</option>`:y}
        </optgroup>`:y}
    ${t.filter(r=>i.some(s=>s.group===r)).map(r=>g`<optgroup label=${o(`style_group_${r}`)}>
            ${i.filter(s=>s.group===r).map(s=>g`<option value=${s.id} ?selected=${e===s.id}>${s.name??o(`style_${s.id}`)}</option>`)}
          </optgroup>`)}`}function Xp(o){return typeof o=="string"&&(o==="auto"||o==="house"||o.startsWith("my_")||Yt().some(e=>e.id===o))}var xa;function Qp(){let o=new URL("./neonplan3d-locate.js?v=ecf1a592e9b8",new URL(import.meta.url)).href;return xa??=import(o).catch(e=>{throw xa=void 0,e}),xa}var y_=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function Jp(o){let e=document.createElement("style");e.textContent=y_;let n=document.createElement("div");n.className="fp3d-loclab",document.body.append(e,n);let t=null,i="",r=!0,s=async(c,d={})=>{let u=o().hass;if(u){try{t=await u.callWS({type:"neonplan3d/locate/rec",action:c,...d}),i=""}catch(p){i=p.message??String(p)}a()}},a=()=>{let c=o().building,d=t,u=d?.mark?.room??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${r?"\u25BE":"\u25B8"}</span></h4>`;if(!r){n.innerHTML=p;return}let h=(d?.devices??[]).map(b=>{let f=b.t?Math.round(Date.now()/1e3-b.t):null;return`<div>\u231A ${zt(b.title)}: ${f===null?"<small>noch nicht geh\xF6rt</small>":`${b.rssi} dBm \xB7 ${zt(b.scanner??"")} <small>vor ${f} s</small>`}</div>`}).join(""),_=(c?.floors??[]).map(b=>`<div class="fl">${zt(b.name)}</div>`+b.rooms.map(f=>`<button data-room="${zt(f.id)}" data-name="${zt(f.name)}" class="${u===f.id?"on":""}">${zt(f.name)}</button>`).join("")).join("");n.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${d?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(d.seconds/60)}:${String(d.seconds%60).padStart(2,"0")} \xB7 ${d.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${i?`<div style="color:#ff8fa3">${zt(i)}</div>`:""}
      ${h||(d?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${d?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${x_(Date.now()/1e3-d.mark.t)}</b> in <b>${zt(d.mark.name)}</b> ${Date.now()/1e3-d.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${_}`};n.addEventListener("click",c=>{let d=c.target.closest("button,h4");if(!d)return;let u=d.dataset.a;if(u==="toggle")r=!r,a();else if(u==="start")s("start",{note:"lab walk"});else if(u==="stop")s("stop");else if(u==="setup"){let{hass:p,building:h}=o();p&&h&&Qp().then(_=>_.openLocateSetup(p,h,()=>o().hass))}else d.dataset.room!==void 0&&s("mark",d.dataset.room?{room:d.dataset.room,name:d.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),n.remove(),e.remove()}}function x_(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function zt(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var eh="neonplan3d.print_seen";function th(o,e){return o&&!e}function nh(){try{return localStorage.getItem(eh)==="1"}catch{return!0}}function oh(){try{localStorage.setItem(eh,"1")}catch{}}var ka;function k_(){let o=new URL("./neonplan3d-timetravel.js?v=cfab6be070d4",new URL(import.meta.url)).href;return ka??=import(o).catch(e=>{throw ka=void 0,e}),ka}var Rn=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),k_().then(n=>{this.starting&&(this.starting=!1,this.session=n.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},n=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",n),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var $_={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},Y={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},$a=class extends pe{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_printDot:{state:!0},_readyPacks:{state:!0},_shopConnected:{state:!0},_giftLater:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_walking:{state:!0},_overview:{state:!0},_site:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_plain:{state:!0},_roomBar:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_zoomStyle:{state:!0},_zoomLate:{state:!0},_zoomScope:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_mosaicOpen:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};offersChecked=!1;watch=new Mn(this);otherAlerts={at:0,list:[]};pendingRoom=null;data=new pn(this);locateLab=null;tt=new Rn(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._printDot=!1,this._readyPacks=0,this._shopConnected=null,this._giftLater=!1,this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._walking=!1,this._overview=!1,this._site=new URLSearchParams(location.search).get("plan")==="site",this.data.switchPlan(new URLSearchParams(location.search).get("plan")??Y.get("plan")),this._wallMode=Y.get("walls")==="cut"?"cut":"auto",this._explode=Y.get("explode")!=="0",this._keepRoof=Y.get("roof")==="1",this._plain=Y.get("plain")==="1";let e=Y.get("roombar");this._roomBar=e==="rooms"||e==="all"?e:"off";let n=Y.get("quality");this._quality=n==="low"||n==="high"?n:"auto",this._stats=Y.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=Y.get("markers");this._markers=t==="none"||t==="all"||t==="room"?t:"important";let i=Y.get("pinSize");this._pinSize=i==="small"||i==="large"?i:"normal";let r=Y.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let s=Y.get("theme");this._theme=Xp(s)?s:"neon",this._zoomStyle=Y.get("zoom_style")??"";let a=Number(Y.get("zoom_late"));this._zoomLate=Number.isFinite(a)&&Y.get("zoom_late")!==null?Math.min(100,Math.max(0,a)):50,this._zoomScope=Y.get("zoom_scope")==="room"?"room":"all";let l=Y.get("clock");this._clock=l==="tl"||l==="tr"||l==="bl"||l==="br"?l:"off";let c=Y.get("accent");this._accent=c&&/^#[0-9a-f]{6}$/i.test(c)?c:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let d=Y.get("floor_stack");this._floorStack=d==="stacked"||d==="single"?d:"dim",this._roomNames=Y.get("room_names")!=="0",this._controlsRight=Y.get("controls")==="right",this._keepView=Y.get("keep_view")==="1",this._angleLock=Y.get("angle_lock")==="1",this._trail=Y.get("trail")==="1",this._cameraWall=!1,this._mosaicOpen=!1,this._clean=Y.get("clean")==="1",this._navWrap=Y.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=Y.get("weather")!=="0",this._director=fa(),this._micProbe=!1,this._voiceHere=la(),this._screen=ca()}t(e,n){return I(this.hass,e,n)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!vn(this.hass.language)&&Qo(this.hass.language).then(()=>this.requestUpdate());let n=this.data.building;n&&this._floorId&&!n.floors.some(t=>t.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e,e==="extensions"&&this.printOpened(),Lt(e))}onRoomTap(e){let{floorId:n,roomId:t}=e.detail;if(this._site){if(!t)return;let i=Ud(t,he);this.pendingRoom={plan:i.plan,floorId:null,roomId:i.id},this._site=!1,i.plan===this.data.planId?this.requestUpdate():this.pickPlan(i.plan);return}if((this.data.building?.floors.length??0)>1&&n&&this._floorId!==n){this._floorId=n,this._roomId=null;return}t&&(this._roomId=t===this._roomId?null:t)}setWallMode(e){this._wallMode=e,Y.set("walls",e)}setRoomBar(e){this._roomBar=e,Y.set("roombar",e)}setPlain(e){this._plain=e,Y.set("plain",e?"1":"0")}setKeepRoof(e){this._keepRoof=e,Y.set("roof",e?"1":"0")}setExplode(e){this._explode=e,Y.set("explode",e?"1":"0")}setQuality(e){this._quality=e,Y.set("quality",e)}editFurniture(e,n){let t=this.data.building;if(!t)return;let i=structuredClone(t);for(let r of i.floors){let s=r.furniture.find(a=>a.id===e);s&&n(s,r)}this.data.edit(i)}editDevice(e,n){let t=this.data.building;if(!t)return;let i=structuredClone(t);for(let r of i.floors){let s=r.placements.find(a=>a.entity_id===e);s&&n(s,r)}this.data.edit(i)}moveDevice(e){let{id:n,x:t,z:i}=e.detail;this.editDevice(n,(r,s)=>{let[a,l]=ua(s,r.x,r.z,t,i);Object.assign(r,{x:a,z:l})})}turnStep(){return W(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,n=>n.rotation=(((n.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let i of t.floors)i.placements=i.placements.filter(r=>r.entity_id!==e);this.data.edit(t),this._selDevice=null}renderDeviceFields(e){let t=this.data.building?.floors.find(u=>u.placements.some(p=>p.entity_id===e)),i=t?.placements.find(u=>u.entity_id===e);if(!t||!i)return y;let r=W(e),s=r==="light",a=r==="camera",l=i.mount==="ceiling",c=r?hn(r,t.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,d=(u,p,h,_,b,f)=>g`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${_}
          max=${b}
          .value=${String(Math.round(p*100)/100)}
          @change=${w=>{let k=parseFloat(w.target.value.replace(",","."));Number.isFinite(k)&&f(Math.min(b,Math.max(_,k)))}}
        />
      </label>`;return g`${s?g`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>g`<option value=${u} ?selected=${u===(i.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:y}
      ${a?g`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${d(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${d(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:y}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??c)*100)/100)}
          @change=${u=>{let p=parseFloat(u.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,h=>h.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?g`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:y}`}furnitureName(e){let n=this.data.building?.floors.flatMap(t=>t.furniture).find(t=>t.id===e);return n?we(this.hass,n.type):""}moveFurniture(e){let{id:n,x:t,z:i}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(n,(s,a)=>{let[l,c]=ua(a,s.x,s.z,t,i);Object.assign(s,{x:l,z:c});let d=Fp(a,s,r);d&&Object.assign(s,d)})}renderSizeFields(e){let n=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!n)return y;let t=Wa(this.hass,this.data.building?.settings.units)==="imperial",i=l=>t?Na(l):String(Math.round(l*100)/100),r=l=>t?Ba(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,c)=>g`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${c}
      <input
        type=${t?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(n[l])}
        @change=${d=>{let u=r(d.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,p=>p[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(c=>c.id===e));return g`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&tc(n)?g`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${t?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(n.mount_y??fe(a,n))}
              @change=${l=>{let c=r(l.target.value)??NaN;Number.isFinite(c)&&c>=0&&this.editFurniture(e,d=>d.mount_y=Math.round(c*1e3)/1e3)}}
          /></label>
          ${n.mount_y!=null?g`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:y}`:y}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,n=>n.rotation=((n.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let i of t.floors)i.furniture=i.furniture.filter(r=>r.id!==e);this.data.edit(t),this._selFurniture=null}rememberStartView(e=!1){let n=this.data.building;if(!n)return;let t=e?null:this.view3d()?.currentView();!e&&!t||this.data.edit({...n,settings:{...n.settings,start_view:t??null}})}openFunSettings(e="fun",n=null){this.setMode("editor");let t=0,i=()=>{let r=this.renderRoot.querySelector("fp3d-editor");r?.openSettings?r.openSettings(e,n):t++<60&&setTimeout(i,100)};this.updateComplete.then(i)}siteBuilding(){return this.watch.site(this.data)}showSite(){this.tt.active&&this.tt.stop(),this._site=!0,this._floorId=null,this._roomId=null,this._mode="view"}planBuildings(){return this.watch.all(this.data)}alertsElsewhere(){if(!this.hass||this.data.plans.length<2)return[];let e=Date.now();if(e-this.otherAlerts.at<2e3)return this.otherAlerts.list;let n=[];for(let[t,i]of this.watch.others)if(t!==this.data.planId)for(let r of hi(this.hass,i).alerts)n.push({plan:t,alert:r});return this.otherAlerts={at:e,list:n},n}alertCounts(){let e=new Map;for(let{plan:n}of this.alertsElsewhere())e.set(n,(e.get(n)??0)+1);return e}pickPlan(e){this._site&&(this._site=!1,this._floorId=null,this._roomId=null),e!==this.data.planId&&(this.tt.active&&this.tt.stop(),Y.set("plan",e),this._floorId=null,this._roomId=null,this.data.switchPlan(e))}showElsewhere(e,n){this.pendingRoom={plan:e,floorId:n.floorId,roomId:n.roomId},this.pickPlan(e)}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let n=this.view3d(),t=this.data.building;if(!(!n||!t||!this.hass)){if(!K("time_travel")){n.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this._mosaicOpen=!1,this.tt.start({live:this.hass,building:t,spec:n.historyEntities(),quality:this._quality,at:e,t:(i,r)=>I(this.hass,i,r)})}}updated(){this.data.plans.length>1&&this.watch.watch(this.hass,this.data);let e=this.pendingRoom;if(e&&this.data.planId===e.plan&&this.data.building&&(this.pendingRoom=null,this._floorId=e.floorId??this.data.building.floors.find(t=>oe(t).some(i=>i.id===e.roomId))?.id??null,this._roomId=e.roomId),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&ns()&&(this.locateLab=Jp(()=>({hass:this.hass,building:this.data.building}))),this.pendingTemplate!==null&&this.hass?.user&&this.data.building){let t=this.pendingTemplate;this.pendingTemplate=null,this.hass.user.is_admin&&this.openFunSettings("cards",t||null)}if(this.ttLinked||!this.data.building||!cn()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let n=new URLSearchParams(location.search).get("tt");n!==null&&K("time_travel")&&this.toggleTimeTravel(n)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey);let e=new URLSearchParams(location.search);e.get("tab")==="extensions"&&(this._mode="extensions"),e.get("settings")==="cards"&&(this.pendingTemplate=e.get("template")??"")}pendingTemplate=null;checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,_l(this.hass).then(e=>{this._shopConnected=!!e.active;let n=(e.packs??[]).some(t=>!/^(mastershort\.)?fun_|_sample$/.test(t.id));this._newOffers=e.active&&n?ml(e.offers??[]).length:0,this._printDot=th(!!(e.active&&e.supporter),nh()),this._mode==="extensions"&&this.printOpened(),this._readyPacks=e.active?gl(e.updates??[]).length+(e.packs??[]).filter(t=>t.installed===null).length:0}).catch(()=>{}))}printOpened(){this._printDot&&(this._printDot=!1,oh())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!vn(this.hass.language))return y;this.checkOffers();let e=this.data.building;Tn(e?.settings.styles_custom);let n=this.data.saveState;return g`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Zi())}></fp3d-mic-probe>`:y}
        ${this._clean&&this._mode==="view"?y:g`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.data.plans.length>1||this.isAdmin&&this.data.plans.length>0?g`<fp3d-plan-picker
                .hass=${this.hass}
                .plans=${this.data.plans}
                .current=${this.data.planId}
                ?admin=${this.isAdmin}
                @plan-pick=${t=>this.pickPlan(t.detail.plan)}
                .alerts=${this.alertCounts()}
                @plan-new=${()=>this.openFunSettings("plans")}
                @plan-manage=${()=>this.openFunSettings("plans")}
                @plan-overview=${()=>this._overview=!0}
                @plan-site=${()=>this.showSite()}
                .site=${this._site}
                .hasSite=${this.data.plans.some(t=>t.site?.on)}
              ></fp3d-plan-picker>`:y}
          ${this._overview?g`<fp3d-plan-overview
                .hass=${this.hass}
                .plans=${this.data.plans}
                .buildings=${this.planBuildings()}
                .current=${this.data.planId}
                @plan-pick=${t=>{this._overview=!1,this.pickPlan(t.detail.plan)}}
                @close=${()=>this._overview=!1}
              ></fp3d-plan-overview>`:y}
          ${this.isAdmin?g`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}${this._readyPacks?g`<span class="fp3d-badge" title=${this.t("ext_badge_ready_hint")}>⬇ ${this.t("ext_badge_ready",{n:this._readyPacks})}</span>`:this._newOffers?g`<span class="fp3d-badge" title=${this.t("offers_dot")}>${this.t("ext_badge_new",{n:this._newOffers})}</span>`:this._printDot?g`<span class="fp3d-badge" title=${this.t("print_dot_hint")}>${this.t("print_dot")}</span>`:y}
                </button>
              </div>`:y}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(t=>t.rooms.length)?g`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(t=>g`<button aria-pressed=${this._quality===t} @click=${()=>this.setQuality(t)}>${this.t(`quality_${t}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("style")}>
                <label class="fp3d-style-pick" title=${this.t("style")}>
                  <span aria-hidden="true">🎨</span>
                  <select
                    aria-label=${this.t("style")}
                    @change=${t=>{this._theme=t.target.value,Y.set("theme",this._theme)}}
                  >
                    ${ya(t=>this.t(t),this._theme,{auto:!0,house:!0})}
                  </select>
                </label>
                <label class="fp3d-style-pick" title=${this.t("zoom_style_hint")}>
                  <span aria-hidden="true">🔍</span>
                  <select
                    aria-label=${this.t("zoom_style")}
                    @change=${t=>{this._zoomStyle=t.target.value,Y.set("zoom_style",this._zoomStyle)}}
                  >
                    <option value="" ?selected=${!this._zoomStyle}>${this.t("zoom_style_off")}</option>
                    ${ya(t=>this.t(t),this._zoomStyle,{})}
                  </select>
                </label>
                ${this._zoomStyle?g`<label class="fp3d-style-pick fp3d-zoom-late" title=${this.t("zoom_late_hint")}>
                      <span>${this.t("zoom_late_early")}</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        aria-label=${this.t("zoom_late_hint")}
                        .value=${String(this._zoomLate)}
                        @input=${t=>{this._zoomLate=Number(t.target.value),Y.set("zoom_late",String(this._zoomLate))}}
                      />
                      <span>${this.t("zoom_late_late")}</span>
                    </label>
                    <label class="fp3d-style-pick" title=${this.t("zoom_scope_hint")}>
                      <select
                        aria-label=${this.t("zoom_scope_hint")}
                        @change=${t=>{this._zoomScope=t.target.value,Y.set("zoom_scope",this._zoomScope)}}
                      >
                        <option value="all" ?selected=${this._zoomScope!=="room"}>${this.t("zoom_scope_all")}</option>
                        <option value="room" ?selected=${this._zoomScope==="room"}>${this.t("zoom_scope_room")}</option>
                      </select>
                    </label>`:y}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${t=>{this._accent=t.target.value,Y.set("accent",this._accent)}}
                  />
                  ${this._accent?g`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,Y.set("accent","")}}
                      >
                        ↺
                      </button>`:y}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(t=>g`<button aria-pressed=${this._clock===t} title=${this.t(`clock_${t}`)} aria-label=${this.t(`clock_${t}`)} @click=${()=>{this._clock=t,Y.set("clock",t)}}>
                      ${t==="off"?this.t("clock_off"):$_[t]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(t=>g`<button
                      aria-pressed=${this._markers===t}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=t,Y.set("markers",t)}}
                    >
                      ${this.t(`markers_${t}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(t=>g`<button
                      aria-pressed=${this._pinSize===t}
                      @click=${()=>{this._pinSize=t,Y.set("pinSize",t)}}
                    >
                      ${this.t(`pin_size_${t}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(t=>g`<button
                      aria-pressed=${this._controlsRight===t}
                      title=${this.t(t?"controls_right":"controls_left")}
                      aria-label=${this.t(t?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=t,Y.set("controls",t?"right":"left")}}
                    >
                      ${t?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?g`<button
                        title=${`${this.t("start_view")}: ${this.t("start_view_set")}`}
                        aria-label=${this.t("start_view_set")}
                        @click=${()=>this.rememberStartView()}
                        @mouseenter=${()=>this._pinHover=!0}
                        @mouseleave=${()=>this._pinHover=!1}
                        @focus=${()=>this._pinHover=!0}
                        @blur=${()=>this._pinHover=!1}
                      >
                        📌
                      </button>
                      ${this.data.building?.settings.start_view?g`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:y}`:y}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,Y.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,Y.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Y.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:y}
          ${this._mode==="editor"&&n!=="idle"?g`<span class="fp3d-save fp3d-save-${n}">${this.t(n==="saving"?"saving":n==="saved"?"saved":"save_error")}</span>`:y}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?y:this.renderNotices()}
        ${this.data.error&&!e?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:y}
        ${!e&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:y}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(this._site?this.siteBuilding()??e:e):y}
        ${this.renderGift()}
      </div>
    `}renderGift(){return this._giftLater,this._shopConnected,y}renderNotices(){let e=this.data,n=[];for(let{plan:t,alert:i}of this.alertsElsewhere()){let r=this.watch.others.get(t);r&&n.push(g`<div class="fp3d-notice fp3d-notice-error">
          <span>⚠ ${this.t("plan_alert",{plan:Sn(this.hass,e.plans,t),text:Vt(this.hass,r,i)})}</span>
          <button class="fp3d-btn" @click=${()=>this.showElsewhere(t,i)}>${this.t("plan_alert_go")}</button>
        </div>`)}if(e.needsRestart&&(e.versionGap==="frontend"?n.push(g`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):n.push(g`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&n.push(g`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let t=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);n.push(g`<div class="fp3d-notice">
          <span>${this.t(e.draft.conflict?"draft_conflict":"draft_found",{time:t})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return n.length?g`<div class="fp3d-notices">${n}</div>`:y}renderExtensions(){return this._editorReady?g`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @open-fun-settings=${()=>this.openFunSettings()}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
      @packs-ready=${e=>this._readyPacks=e.detail}
    ></fp3d-extensions>`:(Fr().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?g`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .planId=${this.data.planId}
      .plans=${this.data.plans}
      .trash=${this.data.trash}
      .locatePlan=${this.data.locatePlan}
      @plan-pick=${n=>this.pickPlan(n.detail.plan)}
      @plans-changed=${()=>{this.data.reloadPlans()}}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=fa()}
      @voice-here=${()=>{this._voiceHere=la(),this._screen=ca()}}
      @mic-probe=${()=>dt().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${n=>this.data.edit(n.detail.building)}
    ></fp3d-editor>`:(Fr().then(()=>this._editorReady=!0,n=>this.data.error=String(n)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let n=e.currentTarget;n.scrollWidth<=n.clientWidth||(n.scrollLeft+=e.deltaY,e.preventDefault())};renderSecurityChip(e){let n=gn(this.hass,e);if(!n||!this.hass)return y;let t=this.hass.states[n];if(!t)return y;let i=t.state;if(i==="unavailable"||i==="unknown")return y;let r=i==="triggered",s=i==="pending"||i==="arming",a=i.startsWith("armed_"),l=r?"\u{1F6A8}":s?"\u23F3":a?"\u{1F512}":"\u{1F6E1}\uFE0F",c=`alarm_state_${i}`,d=this.t(c),u=d!==c?d:i.replace("_"," ");return g`<button
      class="fp3d-chip fp3d-security-chip ${r?"fp3d-sec-triggered":""}"
      title="${G(this.hass,n)}: ${u}"
      aria-label="${G(this.hass,n)}: ${u}"
      @click=${()=>ve(this,n)}
    >
      ${l} ${u}
    </button>`}renderView(e){if(!e.floors.length||!e.floors.some(l=>l.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:y}
      </div>`;let n=e.floors.find(l=>l.id===this._floorId),t=n?[n]:e.floors,i=this.tt.active,r=st("room_bar")?this._roomBar:"off",s=r!=="off"&&!i,a=r==="off";return g`
      ${this._clean||!a&&e.floors.length<2?y:g`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?g`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(l=>g`<button
                  class="fp3d-chip"
                  aria-pressed=${l.id===this._floorId}
                  @click=${()=>{this._floorId=l.id,this._roomId=null}}
                >
                  ${l.name}
                </button>`)}
              ${a?g`<span class="fp3d-sep"></span>`:y}`:y}
        ${(a?t:[]).flatMap(l=>[t.length>1&&oe(l).some(c=>c.name.trim())?g`<span class="fp3d-nav-floor">${l.name}</span>`:y,...oe(l).filter((c,d,u)=>c.name.trim()&&!(c.outdoor&&u.findIndex(p=>p.outdoor&&p.area_id===c.area_id&&p.name===c.name)<d)).map(c=>g`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${c.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=l.id),this._roomId=c.id===this._roomId?null:c.id}}
            >
              ${c.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,Y.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""} ${s?"fp3d-has-bar":""}">
        <fp3d-view3d
          class="fp3d-body"
          @walk-change=${l=>this._walking=l.detail.walking}
          .pivotMark=${this._pinHover}
          .hass=${this.tt.hass(this.hass)}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .planId=${this._site?null:this.data.planId}
          .noSave=${this._site}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          .angleLock=${this._angleLock}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,Y.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen||null}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .plain=${this._plain}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .zoomStyle=${this._zoomStyle}
          .zoomLate=${this._zoomLate}
          .zoomScope=${this._zoomScope}
          .clock=${this._clock}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!i}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${l=>this._selFurniture=l.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${l=>this._selDevice=l.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${l=>{this._floorId=l.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId&&!this._walking?g`<fp3d-room-panel
              ?walk=${!0}
              @walk-here=${()=>this.view3d()?.walkHere()}
              class="fp3d-room-panel"
              @camera-look=${l=>this.view3d()?.lookThrough(l.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${i}
              .room=${e.floors.flatMap(l=>oe(l)).find(l=>l.id===this._roomId)??null}
              .floor=${e.floors.find(l=>oe(l).some(c=>c.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${mn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${l=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,l.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${s?g`<fp3d-room-bar
              class="fp3d-room-bar"
              .hass=${this.hass}
              .building=${e}
              .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
              .roomId=${this._roomId}
              ?favorites=${r==="all"}
              @room-pick=${l=>{e.floors.length>1&&(this._floorId=l.detail.floorId),this._roomId=l.detail.roomId===this._roomId?null:l.detail.roomId}}
            ></fp3d-room-bar>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${this._clean?y:g`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?g`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          <div class="fp3d-seg" title=${this.t("plain_hint")}>
            <button aria-pressed=${!this._plain} @click=${()=>this.setPlain(!1)}>${this.t("plain_off")}</button>
            <button aria-pressed=${this._plain} @click=${()=>this.setPlain(!0)}>${this.t("plain_on")}</button>
          </div>
          ${st("room_bar")?g`<div class="fp3d-seg" title=${this.t("room_bar_hint")}>
                <button aria-pressed=${this._roomBar==="off"} @click=${()=>this.setRoomBar("off")}>${this.t("room_bar_none")}</button>
                <button aria-pressed=${this._roomBar==="rooms"} @click=${()=>this.setRoomBar("rooms")}>${this.t("room_bar_rooms")}</button>
                <button aria-pressed=${this._roomBar==="all"} @click=${()=>this.setRoomBar("all")}>${this.t("room_bar_all")}</button>
              </div>`:y}
          ${e.floors.length>1&&!this._floorId?g`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:y}
          ${!this._floorId&&e.settings.roof.type!=="none"?g`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:y}
          ${e.floors.length>1&&this._floorId?g`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(l=>g`<button
                      aria-pressed=${this._floorStack===l}
                      @click=${()=>{this._floorStack=l,Y.set("floor_stack",l)}}
                    >
                      ${this.t(`floor_stack_short_${l}`)}
                    </button>`)}
              </div>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(l=>g`<button
                  aria-pressed=${this._heat===l}
                  @click=${()=>{this._heat=l,Y.set("heat",l)}}
                >
                  ${this.t(l==="none"?"heat_off":`heat_short_${l}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,Y.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          ${K("camera_cockpit")?g`<button
                  class="fp3d-chip"
                  aria-pressed=${this._trail}
                  title=${this.t("trail_hint")}
                  @click=${()=>{this._trail=!this._trail,Y.set("trail",this._trail?"1":"0")}}
                >
                  ${this.t("trail_short")}
                </button>
                <button
                  class="fp3d-chip"
                  aria-pressed=${this._cameraWall}
                  title=${this.t("camera_wall_hint")}
                  @click=${()=>this._cameraWall=!this._cameraWall}
                >
                  ${this.t("cameras_short")}
                </button>`:y}
          ${K("weather")?g`<button
                class="fp3d-chip"
                aria-pressed=${this._weather}
                title=${this.t("weather_hint")}
                @click=${()=>{this._weather=!this._weather,Y.set("weather",this._weather?"1":"0")}}
              >
                ${this.t("weather_short")}
              </button>`:y}
                  </div>`:y}
          </div>
          ${this.renderSecurityChip(e)}
          ${!K("camera_cockpit")&&vt(this.hass,e)>0?g`<button class="fp3d-chip" aria-pressed=${this._mosaicOpen} @click=${()=>this._mosaicOpen=!this._mosaicOpen}>
                📹 ${this.t("cameras_short")} (${vt(this.hass,e)})
              </button>`:y}
          ${K("time_travel")?g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                ⏪ ${this.t("tt_chip")}
              </button>`:y}
          ${this._roomId||this._floorId&&e.floors.length>1?g`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:y}
        </div>`}
        ${this._furnish?g`<div class="fp3d-furnish-bar">
              ${this._selFurniture?g`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,l=>l.mirror=!l.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?g`<span>${G(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:g`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:y}
        ${K("camera_cockpit")?y:g`<np-camera-mosaic
              .hass=${this.hass}
              .building=${e}
              .open=${this._mosaicOpen}
              @mosaic-close=${()=>this._mosaicOpen=!1}
              @mosaic-jump=${l=>{this._floorId=l.detail.floorId,this._roomId=l.detail.roomId,this._mosaicOpen=!1}}
            ></np-camera-mosaic>`}
      </div>
    `}static styles=[Me,Te,ge`
      .fp3d-badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        box-shadow: 0 0 10px rgba(255, 181, 71, 0.7);
        vertical-align: middle;
        white-space: nowrap;
        animation: fp3d-badge-in 1.6s ease-out 2;
      }
      @keyframes fp3d-badge-in {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 181, 71, 0.9);
        }
        100% {
          box-shadow: 0 0 0 10px rgba(255, 181, 71, 0);
        }
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      /* dvh only where the browser knows it: a line with var() is not dropped while it is read, so a WebView without
         dvh (Chrome before 108, the Fire 7) lost the height altogether and the 3D view stayed empty (idea: CasaNeon) */
      @supports (height: 100dvh) {
        :host {
          height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        }
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
        /* the header's menus (the floor plan picker) open over the editor's tool bar and the 3D view below */
        position: relative;
        z-index: 30;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
      .fp3d-opts-btn {
        display: grid;
        place-items: center;
        order: 3;
        width: 36px;
        height: 36px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font-size: 17px;
        cursor: pointer;
      }
      .fp3d-opts-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-view-opts {
        display: none;
      }
      .fp3d-view-opts.fp3d-opts-open {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        order: 5;
        width: 100%;
      }
      /* phones: version and grow move with it */
      @media (max-width: 700px) {
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-style-pick {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 0 6px;
      }
      .fp3d-zoom-late {
        font-size: 12px;
        color: var(--fp3d-muted, var(--fp3d-text));
      }
      .fp3d-zoom-late input {
        width: 110px;
      }
      .fp3d-style-pick select {
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 6px 8px;
        font: inherit;
        max-width: 230px;
      }
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar. Its room is kept all the time (an
         invisible thumb), so the bar does not grow on hover and the 3D view below does not jump; the bottom padding
         gives that room back (idea from TRusselo, #1053). Touch screens keep their overlay scrollbars. */
      @media (hover: hover) and (pointer: fine) {
        .fp3d-nav:not(.fp3d-nav-wrap) {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          padding-bottom: 3px;
        }
        .fp3d-nav:not(.fp3d-nav-wrap):hover {
          scrollbar-color: color-mix(in srgb, var(--fp3d-text) 35%, transparent) transparent;
        }
      }
      /* wrapped (several lines, scrolling up and down): the thin scrollbar on hover as before */
      .fp3d-nav-wrap:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* the room bar: above the switches, beside the view's own buttons (search, eye, microphone) – nothing moves for it;
         beside an open room panel */
      .fp3d-room-bar {
        position: absolute;
        left: 148px;
        right: 12px;
        bottom: 56px;
      }
      .fp3d-side-right .fp3d-room-bar {
        left: 12px;
        right: 148px;
      }
      /* the eye tidied the switches away: the room bar sits at the bottom */
      .fp3d-clean .fp3d-room-bar {
        bottom: 12px;
      }
      .fp3d-room-open .fp3d-room-bar {
        right: calc(14px + min(360px, calc(100% - 28px)) + 10px);
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-open .fp3d-room-bar {
          display: none;
        }
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-seg-label {
        display: inline-flex;
        align-items: center;
        padding: 0 4px 0 8px;
        opacity: 0.75;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",$a);function Qi(o,e){let n=e?.trim(),t=o?.card_templates;return n?t?.find(i=>i.id===n)??t?.find(i=>i.aliases?.includes(n)):void 0}var S_=["fill","height","fullscreen_button","plan"];function Sa(o,e){let n=Qi(e,o.template);if(!n)return o;let t=Object.fromEntries(S_.filter(i=>o[i]!==void 0).map(i=>[i,o[i]]));return{...n.config,...t,screen:n.config.screen||n.name,type:o.type,template:o.template}}function Ji(o,e,n=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let t=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!t)return!1;let i=Number(t[1])*60+Number(t[2]),r=Number(t[3])*60+Number(t[4]),s=n.getHours()*60+n.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var ih;function rh(){let o=new URL("./neonplan3d-card-editor.js?v=2f5b99cb76d1",new URL(import.meta.url)).href;return ih??=import(o),ih}function sh(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}function M_(o){let e=o;for(let n=0;e&&n<40;n++){if(e.localName==="hui-grid-section")return!0;e=e.parentElement??e.getRootNode().host??null}return!1}var Ma=class extends pe{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_walking:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_mosaicOpen:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0},_stretch:{state:!0}};yaml=null;appliedTemplate="";roomApplied=!1;cleanTimer;cellObserver=null;idleTimer;nightTimer;data=new pn(this);watch=new Mn(this);yamlPlan=null;tt=new Rn(this);constructor(){super(),this._roomId=null,this._walking=!1,this._floorId=void 0,this._walls=sh(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._mosaicOpen=!1,this._clean=!1,this._night=!1,this._orbit=!1,this._stretch=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let n=this._config?.controls_hide_after??0;n>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,n*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),n=this.data.building;if(!e||!n||!this.hass)return;if(!K("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1,this._mosaicOpen=!1;let t=this._config;this.tt.start({live:this.hass,building:n,spec:e.historyEntities(),quality:t?.quality??"auto",speed:t?.time_travel_speed??null,range:t?.time_travel_range??null,t:(i,r)=>I(this.hass,i,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this.homeRoom(),this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){Zr(e)}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let n=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(n-this._top)>1)&&(this._top=n)}};preview=!1;connectedCallback(){super.connectedCallback(),this.preview||Lt("card"),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.cellObserver??=new ResizeObserver(()=>{let e=this._config?.height??420,n=!this._config?.fill&&this.clientHeight>e+4&&M_(this);n!==this._stretch&&(this._stretch=n)}),this.cellObserver.observe(this),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Ji(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.cellObserver?.disconnect(),this.cellObserver=null,this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card"),n=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e?.requestFullscreen?e.requestFullscreen().catch(n):n()}static async getConfigElement(){return await rh(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this.yaml=e,e.plan!==this.yamlPlan&&(this.yamlPlan=e.plan,this.roomApplied=!1,this._floorId=void 0,this._roomId=null,this.data.switchPlan(e.plan==="site"?he:e.plan??null)),this.appliedTemplate=this.templateKey(),this.applyConfig(Sa(e,this.data.building))}templateKey(){let e=Qi(this.data.building,this.yaml?.template);return e?JSON.stringify([e.name,e.config]):""}applyConfig(e,n){let t=i=>!n||JSON.stringify(n[i])!==JSON.stringify(e[i]);this._config=e,t("floor")&&(this._floorId=void 0),(t("room")||t("rooms"))&&(this.roomApplied=!1),t("rooms")&&(this._floorId=void 0),t("walls")&&(this._walls=sh()),t("heatmap")&&(this._heat=null),t("explode")&&(this._explode=null),this._orbit=!1,this._night=Ji(e.night,this.hass),t("controls_hidden")&&(this._clean=e.controls_hidden===!0),(t("controls_hide_after")||t("controls_hidden"))&&this.armClean(),(t("idle_return")||t("idle_orbit"))&&this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(this.yaml?.template){let n=this.templateKey();n!==this.appliedTemplate&&(this.appliedTemplate=n,this.applyConfig(Sa(this.yaml,this.data.building),this._config))}if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),vn(this.hass.language)||Qo(this.hass.language).then(()=>this.requestUpdate());let n=Ji(this._config?.night,this.hass);n!==this._night&&(this._night=n)}}get shownRooms(){return Hi(this.data.building,this._config?.rooms)}get roomsLocked(){return this.shownRooms.length>0&&this._config?.rooms_lock!==!1}get roomFloors(){let e=new Set(this.shownRooms);return(this.data.building?.floors??[]).filter(n=>oe(n).some(t=>e.has(t.id))).map(n=>n.id)}homeRoom(){if(this._config?.room)return this._config.room;let e=this.shownRooms;return e.length===1&&this._config?.room_panel!==!1?e[0]:null}allowed(e){return!e||!this.roomsLocked||this.shownRooms.includes(e)}roomsOf=null;shownBuilding(e){let n=this.shownRooms;if(!n.length)return e;let t=n.join(",");return(this.roomsOf?.from!==e||this.roomsOf.key!==t)&&(this.roomsOf={from:e,key:t,to:Ci(e,n)}),this.roomsOf.to}get canSwitch(){return this.shownRooms.length?this.roomFloors.length>1:!this._config?.floor||this.thumbs}get thumbs(){return this.shownRooms.length?!1:this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let e=this.data.building,n=this._floorId===void 0?this._config?.floor??null:this._floorId,t=this.roomFloors;return this.shownRooms.length?t.length===1?t[0]:n&&t.includes(n)?n:null:e&&e.floors.length===1?e.floors[0].id:e?.floors.some(i=>i.id===n)?n:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}renderSecurityChip(e){let n=gn(this.hass,e);if(!n||!this.hass)return y;let t=this.hass.states[n];if(!t)return y;let i=t.state;if(i==="unavailable"||i==="unknown")return y;let r=i==="triggered",s=i==="pending"||i==="arming",a=i.startsWith("armed_"),l=r?"\u{1F6A8}":s?"\u23F3":a?"\u{1F512}":"\u{1F6E1}\uFE0F",c=`alarm_state_${i}`,d=I(this.hass,c),u=d!==c?d:i.replace("_"," ");return g`<button
      class="fp3d-chip fp3d-security-chip ${r?"fp3d-sec-triggered":""}"
      title="${G(this.hass,n)}: ${u}"
      aria-label="${G(this.hass,n)}: ${u}"
      @click=${()=>ve(this,n)}
    >
      ${l} ${u}
    </button>`}get isSite(){return this._config?.plan==="site"}updated(){this.isSite&&this.data.plans.length>1&&this.watch.watch(this.hass,this.data);let e=this.shadowRoot?.querySelector("fp3d-view3d");if(e){let n=Math.min(...[...this.shadowRoot?.querySelectorAll(".fp3d-card-full")??[]].map(i=>i.offsetLeft),1/0),t=Number.isFinite(n)?Math.max(104,e.clientWidth-n+8):104;e.style.getPropertyValue("--fp3d-walk-right")!==`${t}px`&&e.style.setProperty("--fp3d-walk-right",`${t}px`)}}render(){if(this.hass&&!vn(this.hass.language))return y;let e=this.isSite?this.watch.site(this.data)??this.data.building:this.data.building,n=this._config?.height??420,t=this._config,i=e?this.homeRoom():null;!this.roomApplied&&e&&i&&(this.roomApplied=!0,e.floors.some(m=>oe(m).some(M=>M.id===i))&&(this._roomId=i));let r=this.shownRooms,s=r.length===1?e?.floors.flatMap(m=>oe(m)).find(m=>m.id===r[0])?.area_id??null:null,a=this.currentFloor(),l=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!a&&(e?.floors.length??0)>1,c=m=>t?.controls===!0||Array.isArray(t?.controls)&&t.controls.includes(m),d=["temperature","humidity","co2"].filter(m=>c(m)),u=this._walls??t?.walls??"auto",p=this._heat??t?.heatmap??"none",h=this._explode??t?.explode??!0,_=this._fullscreen?"100%":t?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":this._stretch?"100%":`${n}px`,b=!!e&&!this._clean&&(l||(!!t?.controls||!!t?.time_travel||!!t?.camera_wall)&&!(this._roomId&&t.room_panel!==!1)),f=this.tt.active,w=!!e&&!!t?.room_bar&&st("room_bar")&&!f&&!(this._roomId&&t.room_panel!==!1),k=t?.controls_hidden!==void 0||(t?.controls_hide_after??0)>0,x=m=>I(this.hass,m),v=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null;return g`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${v?`--fp3d-accent:${v}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${f?"fp3d-tt":""}" style="height:${_}">
        ${e&&e.floors.some(m=>m.rooms.length)?g`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .planId=${this.isSite?null:this.data.planId}
              .noSave=${this.isSite}
              .rooms=${r.length?r:null}
              .packs=${this.data.packs}
              .floorId=${a}
              .roomId=${this._roomId}
              .wallMode=${u}
              .explode=${h}
              .keepRoof=${t?.roof_fade===!1}
              .plain=${t?.plain===!0}
              .hideRoof=${t?.roof===!1||r.length>0}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .pinSize=${this._config?.marker_size??"normal"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              @walk-change=${m=>this._walking=m.detail.walking}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map((m,M)=>({id:`card_${M}`,...m}))??null}
              .heatMode=${p}
              .theme=${this._config?.theme??"neon"}
              .zoomStyle=${this._config?.zoom_style??null}
              .zoomLate=${this._config?.zoom_late??null}
              .zoomScope=${this._config?.zoom_scope??null}
              .themeEvening=${this._config?.theme_evening??null}
              .themeNight=${this._config?.theme_night??null}
              .styleEntity=${this._config?.style_entity??null}
              .clock=${this._config?.clock??null}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${t?.room_names!==!1}
              .controlsRight=${t?.controls_side==="right"}
              .keepView=${t?.keep_view===!0}
              .angleLock=${t?.angle_lock===!0}
              .floorStack=${t?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&t?.room_panel!==!1}
              .alerts=${t?.alerts!==!1}
              .householdCard=${t?.household_card!==!1}
              .alertJump=${!!t?.alert_jump}
              .director=${!!t?.director}
              .voice=${!!t?.voice}
              .screen=${t?.screen?.trim()||null}
              .template=${t?.template?.trim()||null}
              .viewKind=${this.preview?"preview":"card"}
              .voiceArea=${t?.voice_area?.trim()||s}
              @open-extensions=${()=>this.openDashboard("/neonplan3d?tab=extensions")}
              .scenes=${t?.scenes!==!1}
              ?trail=${!!t?.motion_trail}
              .cameraWall=${this._cameraWall&&!f}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${k}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${t?.weather!==!1}
              .weatherEntityId=${t?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${t?.start_view??null}
              style=${f?`--fp3d-bottom-inset: ${b?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:b?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${m=>{if(this.allowed(m.detail.roomId)){if(this.canSwitch&&(e?.floors.length??0)>1&&m.detail.floorId&&this.currentFloor()!==m.detail.floorId){if(this.roomsLocked&&!this.roomFloors.includes(m.detail.floorId))return;this._floorId=m.detail.floorId,this._roomId=null;return}m.detail.roomId&&(this._roomId=m.detail.roomId===this._roomId?null:m.detail.roomId)}}}
              @floor-tap=${m=>{this.roomsLocked&&m.detail.floorId&&!this.roomFloors.includes(m.detail.floorId)||(this._floorId=m.detail.floorId,this._roomId=null)}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(e?I(this.hass,"no_building"):I(this.hass,"loading"))}</p>`}
        ${e&&t?.template&&!Qi(e,t.template)?g`<div class="fp3d-card-tpl-missing">${I(this.hass,"card_template_missing",{name:t.template})}</div>`:y}
        ${w?g`<fp3d-room-bar
              class="fp3d-card-room-bar"
              style="bottom:${b?54:8}px"
              .hass=${this.hass}
              .building=${this.shownBuilding(e)}
              .floorId=${a}
              .roomId=${this._roomId}
              ?favorites=${t?.room_bar_favorites===!0}
              @room-pick=${m=>{if(this.allowed(m.detail.roomId)){if(m.detail.floorId!==this.currentFloor()){if(!this.canSwitch)return;this._floorId=m.detail.floorId}this._roomId=m.detail.roomId===this._roomId?null:m.detail.roomId}}}
            ></fp3d-room-bar>`:y}
        ${this._roomId&&e&&this._config?.room_panel!==!1&&!this._walking?g`<fp3d-room-panel
              ?walk=${this._config?.walk!==!1}
              @walk-here=${()=>this.view3d()?.walkHere()}
              @camera-look=${m=>this.view3d()?.lookThrough(m.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${f}
              .room=${e.floors.flatMap(m=>oe(m)).find(m=>m.id===this._roomId)??null}
              .floor=${e.floors.find(m=>oe(m).some(M=>M.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${mn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${m=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,m.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${b&&e?g`<div class="fp3d-card-controls">
              ${l?g`<button class="fp3d-chip" @click=${()=>this.back()}>${x("back")}</button>`:y}
              ${t?.time_travel&&K("time_travel")?g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${f} title=${x("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ⏪ ${x("tt_chip")}
                  </button>`:y}
              ${this.renderSecurityChip(e)}
              ${t?.camera_wall?K("camera_cockpit")?g`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${x("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${x("cameras_short")}</button>`:vt(this.hass,e)>0?g`<button class="fp3d-chip" aria-pressed=${this._mosaicOpen} @click=${()=>this._mosaicOpen=!this._mosaicOpen}>📹 ${x("cameras_short")} (${vt(this.hass,e)})</button>`:y:vt(this.hass,e)>0?g`<button class="fp3d-chip" aria-pressed=${this._mosaicOpen} @click=${()=>this._mosaicOpen=!this._mosaicOpen}>📹 ${x("cameras_short")} (${vt(this.hass,e)})</button>`:y}
              ${c("walls")?g`<div class="fp3d-seg">
                    <button aria-pressed=${u==="auto"} @click=${()=>this.setWalls("auto")}>${x("walls_auto")}</button>
                    <button aria-pressed=${u==="cut"} @click=${()=>this.setWalls("cut")}>${x("walls_cut")}</button>
                  </div>`:y}
              ${c("floors")&&e.floors.length>1&&!a?g`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${x("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${x("floors_stacked")}</button>
                  </div>`:y}
              ${d.length?g`<div class="fp3d-seg" role="group" aria-label=${x("heatmap")}>
                    ${["none",...d].map(m=>g`<button aria-pressed=${p===m} @click=${()=>this._heat=m}>
                          ${x(m==="none"?"heat_off":`heat_short_${m}`)}
                        </button>`)}
                  </div>`:y}
            </div>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${t?.fullscreen_button&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?g`<button class="fp3d-card-full" title=${x(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${x(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:y}
        ${t?.dashboard&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?g`<button class="fp3d-card-full fp3d-card-dash ${t.fullscreen_button?"fp3d-card-dash-2":""}" title=${t.dashboard_label||t.dashboard} aria-label=${t.dashboard_label||t.dashboard} @click=${()=>this.openDashboard(t.dashboard)}>
              ${t.dashboard_label?g`<span>${t.dashboard_label}</span>`:"\u2302"}
            </button>`:y}
        ${K("camera_cockpit")?y:g`<np-camera-mosaic
              .hass=${this.hass}
              .building=${e}
              .open=${this._mosaicOpen}
              @mosaic-close=${()=>this._mosaicOpen=!1}
              @mosaic-jump=${m=>{this._floorId=m.detail.floorId,this._roomId=m.detail.roomId,this._mosaicOpen=!1}}
            ></np-camera-mosaic>`}
      </div>
    </ha-card>`}static styles=[Me,Te,ge`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      /* the dashboard button: after the rule above, so its own width wins and, beside the full screen button, it
         steps to the left instead of covering it (D1002) */
      .fp3d-card-full.fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-full.fp3d-card-dash-2 {
        right: 56px;
      }
      /* full screen made by the card itself (iPad, the app on iOS): over the whole page */
      ha-card.fp3d-pseudo-full {
        position: fixed;
        inset: 0;
        z-index: 9999;
        height: 100vh !important;
        max-height: none !important;
        border-radius: 0;
      }
      @supports (height: 100dvh) {
        ha-card.fp3d-pseudo-full {
          height: 100dvh !important;
        }
      }
      /* a block, so the dashboard's grid cell gives it its height (and the card can measure it, #926) */
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-tpl-missing {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 40px);
        padding: 6px 12px;
        border-radius: 10px;
        background: var(--fp3d-chrome-solid, rgba(10, 16, 30, 0.92));
        border: 1px solid rgba(255, 170, 60, 0.6);
        color: var(--fp3d-text, #fff);
        font-size: 13px;
        z-index: 5;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      /* beside the view's own buttons (search, eye) at the bottom left: nothing moves for the room bar */
      .fp3d-card-room-bar {
        position: absolute;
        left: 148px;
        right: 10px;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Ma);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:I(void 0,"card_name"),description:I(void 0,"card_description"),preview:!1})}La();qi();
