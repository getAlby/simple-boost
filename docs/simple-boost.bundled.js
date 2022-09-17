/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class o{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const l=window,h=l.trustedTypes,a=h?h.emptyScript:"",d=l.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:c};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=p){var e;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:u).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(r=l.reactiveElementVersions)&&void 0!==r?r:l.reactiveElementVersions=[]).push("1.4.1");const b=window,m=b.trustedTypes,g=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,y="?"+w,x=`<${y}>`,k=document,S=(t="")=>k.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,E=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),j=/'/g,N=/"/g,O=/^(?:script|style|textarea|title)$/i,P=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),U=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),R=new WeakMap,T=k.createTreeWalker(k,129,null,!1),I=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=A;for(let i=0;i<s;i++){const s=t[i];let l,h,a=-1,d=0;for(;d<s.length&&(r.lastIndex=d,h=r.exec(s),null!==h);)d=r.lastIndex,r===A?"!--"===h[1]?r=M:void 0!==h[1]?r=E:void 0!==h[2]?(O.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=_):void 0!==h[3]&&(r=_):r===_?">"===h[0]?(r=null!=o?o:A,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?_:'"'===h[3]?N:j):r===N||r===j?r=_:r===M||r===E?r=A:(r=_,o=void 0);const u=r===_&&t[i+1].startsWith("/>")?" ":"";n+=r===A?s+x:a>=0?(e.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+w+u):s+w+(-2===a?(e.push(void 0),i):u)}const l=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(l):l,e]};class L{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=I(t,i);if(this.el=L.createElement(h,s),T.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=T.nextNode())&&l.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const s=a[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?K:"?"===i[1]?H:"@"===i[1]?V:q})}else l.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(O.test(e.tagName)){const t=e.textContent.split(w),i=t.length-1;if(i>0){e.textContent=m?m.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],S()),T.nextNode(),l.push({type:2,index:++o});e.append(t[i],S())}}}else if(8===e.nodeType)if(e.data===y)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(w,t+1));)l.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,i){const s=k.createElement("template");return s.innerHTML=t,s}}function B(t,i,s=t,e){var o,n,r,l;if(i===U)return i;let h=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const a=$(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,e)),void 0!==e?(null!==(r=(l=s)._$Cl)&&void 0!==r?r:l._$Cl=[])[e]=h:s._$Cu=h),void 0!==h&&(i=B(t,h._$AS(t,i.values),h,e)),i}class D{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:k).importNode(s,!0);T.currentNode=o;let n=T.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new W(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new J(n,this,t)),this.v.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(n=T.nextNode(),r++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class W{constructor(t,i,s,e){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=B(this,t,i),$(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==z&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(k.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=L.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new D(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=R.get(t.strings);return void 0===i&&R.set(t.strings,i=new L(t)),i}O(t){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new W(this.S(S()),this.S(S()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class q{constructor(t,i,s,e,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,i,0),n=!$(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const e=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=B(this,e[s+r],i,r),l===U&&(l=this._$AH[r]),n||(n=!$(l)||l!==this._$AH[r]),l===z?t=z:t!==z&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!e&&this.P(t)}P(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends q{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===z?void 0:t}}const F=m?m.emptyScript:"";class H extends q{constructor(){super(...arguments),this.type=4}P(t){t&&t!==z?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class V extends q{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=B(this,t,i,0))&&void 0!==s?s:z)===U)return;const e=this._$AH,o=t===z&&e!==z||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==z&&(e===z||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const Y=b.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,G;null==Y||Y(L,W),(null!==(v=b.litHtmlVersions)&&void 0!==v?v:b.litHtmlVersions=[]).push("2.3.1");class Q extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new W(i.insertBefore(S(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}Q.finalized=!0,Q._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):tt(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var st;function et(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function ot(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function nt(t,i,s){return i&&ot(t.prototype,i),s&&ot(t,s),t}function rt(t){return+t.replace(/px/,"")}function lt(t,i){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=Math.random()*(i-t)+t;return Math.floor(e*Math.pow(10,s))/Math.pow(10,s)}function ht(t){return t[lt(0,t.length)]}null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;var at=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function dt(t){return Math.log(t)/Math.log(1920)}var ut=function(){function t(i){et(this,t);var s=i.initialPosition,e=i.direction,o=i.confettiRadius,n=i.confettiColors,r=i.emojis,l=i.emojiSize,h=i.canvasWidth,a=lt(.9,1.7,3)*dt(h);this.confettiSpeed={x:a,y:a},this.finalConfettiSpeedX=lt(.2,.6,3),this.rotationSpeed=r.length?.01:lt(.03,.07,3)*dt(h),this.dragForceCoefficient=lt(5e-4,9e-4,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle="left"===e?lt(0,.2,3):lt(-.2,0,3),this.emojiSize=l,this.emojiRotationAngle=lt(0,2*Math.PI),this.radiusYUpdateDirection="down";var d="left"===e?lt(82,15)*Math.PI/180:lt(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var u=lt(-150,0),c={x:s.x+("left"===e?-u:u)*this.absCos,y:s.y-u*this.absSin};this.currentPosition=Object.assign({},c),this.initialPosition=Object.assign({},c),this.color=r.length?null:ht(n),this.emoji=r.length?ht(r):null,this.createdAt=(new Date).getTime(),this.direction=e}return nt(t,[{key:"draw",value:function(t){var i=this.currentPosition,s=this.radius,e=this.color,o=this.emoji,n=this.rotationAngle,r=this.emojiRotationAngle,l=this.emojiSize,h=window.devicePixelRatio;e?(t.fillStyle=e,t.beginPath(),t.ellipse(i.x*h,i.y*h,s.x*h,s.y*h,n,0,2*Math.PI),t.fill()):o&&(t.font="".concat(l,"px serif"),t.save(),t.translate(h*i.x,h*i.y),t.rotate(r),t.textAlign="center",t.fillText(o,0,0),t.restore())}},{key:"updatePosition",value:function(t,i){var s=this.confettiSpeed,e=this.dragForceCoefficient,o=this.finalConfettiSpeedX,n=this.radiusYUpdateDirection,r=this.rotationSpeed,l=this.createdAt,h=this.direction,a=i-l;s.x>o&&(this.confettiSpeed.x-=e*t),this.currentPosition.x+=s.x*("left"===h?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-s.y*this.absSin*a+.00125*Math.pow(a,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji?this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI):"down"===n?(this.radius.y-=t*r,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*r,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+100}}]),t}();function ct(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function pt(t){var i=t.confettiRadius,s=void 0===i?6:i,e=t.confettiNumber,o=void 0===e?t.confettiesNumber||(t.emojis?40:250):e,n=t.confettiColors,r=void 0===n?at:n,l=t.emojis,h=void 0===l?t.emojies||[]:l,a=t.emojiSize,d=void 0===a?80:a;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:s,confettiNumber:o,confettiColors:r,emojis:h,emojiSize:d}}var ft=function(){function t(i){var s=this;et(this,t),this.canvasContext=i,this.shapes=[],this.promise=new Promise((function(t){return s.resolvePromise=t}))}return nt(t,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return!this.shapes.length&&(null===(t=this.resolvePromise)||void 0===t||t.call(this),!0)}},{key:"processShapes",value:function(t,i,s){var e=this,o=t.timeDelta,n=t.currentTime;this.shapes=this.shapes.filter((function(t){return t.updatePosition(o,n),t.draw(e.canvasContext),!s||t.getIsVisibleOnCanvas(i)}))}}]),t}(),vt=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};et(this,t),this.activeConfettiBatches=[],this.canvas=i.canvas||ct(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=(new Date).getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return nt(t,[{key:"loop",value:function(){var t,i,s,e,o;this.requestAnimationFrameRequested=!1,t=this.canvas,i=window.devicePixelRatio,s=getComputedStyle(t),e=rt(s.getPropertyValue("width")),o=rt(s.getPropertyValue("height")),t.setAttribute("width",(e*i).toString()),t.setAttribute("height",(o*i).toString());var n=(new Date).getTime(),r=n-this.lastUpdated,l=this.canvas.offsetHeight,h=this.iterationIndex%10==0;this.activeConfettiBatches=this.activeConfettiBatches.filter((function(t){return t.processShapes({timeDelta:r,currentTime:n},l,h),!h||!t.complete()})),this.iterationIndex++,this.queueAnimationFrameIfNeeded(n)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||(new Date).getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=pt(t),s=i.confettiRadius,e=i.confettiNumber,o=i.confettiColors,n=i.emojis,r=i.emojiSize,l=this.canvas.getBoundingClientRect(),h=l.width,a=l.height,d=5*a/7,u={x:0,y:d},c={x:h,y:d},p=new ft(this.canvasContext),f=0;f<e/2;f++){var v=new ut({initialPosition:u,direction:"right",confettiRadius:s,confettiColors:o,confettiNumber:e,emojis:n,emojiSize:r,canvasWidth:h}),b=new ut({initialPosition:c,direction:"left",confettiRadius:s,confettiColors:o,confettiNumber:e,emojis:n,emojiSize:r,canvasWidth:h});p.addShapes(v,b)}return this.activeConfettiBatches.push(p),this.queueAnimationFrameIfNeeded(),p.getBatchCompletePromise()}}]),t}();const bt=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new o(e,t,s)})`
  :host {
  }

  ::slotted(*) {
  }

  .simple-boost-button.default {
    display: inline-block;
    outline: none;
    cursor: pointer;
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color, border-color, color, box-shadow,
      filter;
    transition-duration: 0.3s;
    border: 1px solid transparent;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    padding: 16px 14px 18px;
    color: #616467;
    box-shadow: inset 0 0 0 2px #616467;
    background-color: transparent;
  }
  .simple-boost-button.default:hover {
    color: #fff;
    background-color: #616467;
  }

  .simple-boost-button.hey {
    display: inline-block;
    outline: 0;
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 9px 22px;
    font-size: 22px;
    height: 50px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    line-height: normal;
    background: linear-gradient(90deg, #5522fa 0, #0074e4 100%);
    border-radius: 50px;
    transition: color 0.2s ease, background-color 0.2s ease,
      box-shadow 0.2s ease;
  }
  .simple-boost-button.hey:hover {
    box-shadow: 0 0 0 0.15rem #5ceace;
  }

  .simple-boost-button.figma {
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-weight: 700;
    line-height: 1;
    transition: transform 200ms, background 200ms;
    background: transparent;
    color: #000000;
    box-shadow: 0 0 0 3px #000000 inset;
  }
  .simple-boost-button.figma:hover {
    transform: translateY(-2px);
  }

  .simple-boost-button.figma-filled {
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: #000000;
    color: #ffffff;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-weight: 700;
    line-height: 1;
    transition: transform 200ms, background 200ms;
  }
  .simple-boost-button.figma-filled:hover {
    transform: translateY(-2px);
  }

  .simple-boost-button.next {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0 56px;
    line-height: 45px;
    border-radius: 7px;
    font-weight: 400;
    background: #fff;
    color: #696969;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }
  .simple-boost-button.next:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }

  .simple-boost-button.next-filled {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0 56px;
    line-height: 45px;
    border-radius: 7px;
    background-color: #0070f3;
    color: white;
    font-weight: 400;
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }
  .simple-boost-button.next-filled:hover {
    background: rgba(0, 118, 255, 0.9);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  .simple-boost-button.bootstrap-filled {
    cursor: pointer;
    outline: 0;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .simple-boost-button.bootstrap-filled:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  .simple-boost-button.bootstrap {
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #0d6efd;
    border-color: #0d6efd;
  }
  .simple-boost-button.bootstrap:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  .simple-boost-button.gumroad {
    outline: 0;
    grid-gap: 8px;
    align-items: center;
    background: 0 0;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    gap: 8px;
    justify-content: center;
    line-height: 1.5;
    overflow: hidden;
    padding: 12px 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: all 0.14s ease-out;
    white-space: nowrap;
  }
  .simple-boost-button.gumroad:hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px, -4px);
  }
  .simple-boost-button.gumroad:focus-visible {
    outline-offset: 1px;
  }

  .simple-boost-button > .simple-boost-icon {
    vertical-align: middle;
  }
  .simple-boost-icon-spin {
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear;
  }

  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .simple-boost-button,
  .simple-boost-button:active,
  .simple-boost-button:focus {
    outline: 0;
  }
  .simple-boost-button:not([disabled]):hover {
    text-decoration: none;
  }
  .simple-boost-button:not([disabled]):active {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .simple-boost-button.disabled,
  .simple-boost-button[disabled] {
    cursor: not-allowed;
  }
  .simple-boost-button.disabled > *,
  .simple-boost-button[disabled] > * {
    pointer-events: none;
  }
  .inline {
    display: inline;
  }
`;var mt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let gt=class extends Q{constructor(){super(...arguments),this.address="",this.amount=100,this.currency="sats",this.method="lnurl",this.customKey=null,this.customValue=null,this.noConfetti=!1,this.theme="default",this.isLoading=!1,this.jsConfetti=new vt}get formattedAmount(){if("sats"===this.currency)return`${this.amount} sats`;const t=navigator.language;return new Intl.NumberFormat(t,{style:"currency",currency:this.currency}).format(this.amount)}async getAmountInSats(){return"sats"===this.currency?Promise.resolve(this.amount):fetch(`https://getalby.com/api/rates/${this.currency}`).then((t=>t.json())).then((t=>{const i=t[this.currency.toUpperCase()].rate_float;return this.amount/i*1e8}))}isWeblnSupported(){return!!window.webln}isKeysendSupported(){return this.isWeblnSupported()&&!!window.webln.keysend}async clickHandler(t){let i;t.preventDefault(),this.isLoading=!0;try{i=await this.getAmountInSats()}catch(t){return console.error(t),void alert("Could not fetch invoice")}if("lnurl"===this.method){const t=await((t,i)=>{let s=t;if(t.match(/@/)){const[i,e]=t.split("@");s=`https://${e}/.well-known/lnurlp/${i}`}return fetch(s).then((t=>{if(t.ok)return t.json();throw new Error("Network response was not OK")})).then((t=>{const s=new URL(t.callback),e=1e3*i;return s.searchParams.set("amount",e.toString()),fetch(s.toString()).then((t=>{if(t.ok)return t.json();throw new Error("Invoice creation failed")}))}))})(this.address,i),s=t.pr;if(this.isWeblnSupported())try{await window.webln.enable();let i=await window.webln.sendPayment(s);i.preimage&&(this.noConfetti||this.jsConfetti.addConfetti(),this.dispatchEvent(new CustomEvent("success",{detail:{pr:t.pr,preimage:i.preimage}})))}catch(t){this.isLoading=!1}else(t=>{const i=`lightning:${t}`,s=document.createElement("a");s.href=i,s.target="_blank",document.body.appendChild(s),s.click(),document.body.removeChild(s)})(s)}else if("keysend"===this.method)if(this.isKeysendSupported()){let t={};this.customKey&&this.customValue&&(t[this.customKey]=this.customValue);try{let s=await window.webln.keysend({destination:this.address,amount:i,customRecords:t});s.preimage&&(this.noConfetti||this.jsConfetti.addConfetti(),this.dispatchEvent(new CustomEvent("success",{detail:{preimage:s.preimage}})))}catch(t){console.error(t)}}else alert("A Lightning wallet with WebLN support is required. Please install Alby (https://getalby.com)");else alert("Invalid method");this.isLoading=!1}render(){const t=`simple-boost-button ${this.theme} ${this.isLoading&&"simple-boost-button-loading"}`;return P`
      <button class=${t} type="button" @click=${this.clickHandler}>
        <div class="inline">
          <slot>Boost ${this.formattedAmount}</slot>
        </div>
        <div class="inline">
          ${this.isLoading?P`
                <i
                  aria-label="icon: loading"
                  class="simple-boost-icon simple-boost-icon-loading"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    class="simple-boost-icon-spin"
                    data-icon="loading"
                    width="0.9em"
                    height="0.9em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                    ></path>
                  </svg>
                </i>
              `:""}
        </div>
      </button>
    `}};gt.styles=bt,mt([it({type:String})],gt.prototype,"address",void 0),mt([it({type:Number})],gt.prototype,"amount",void 0),mt([it({type:String})],gt.prototype,"currency",void 0),mt([it({type:String})],gt.prototype,"method",void 0),mt([it({type:String,attribute:"custom-key"})],gt.prototype,"customKey",void 0),mt([it({type:String,attribute:"custom-value"})],gt.prototype,"customValue",void 0),mt([it({type:Boolean,attribute:"no-confetti"})],gt.prototype,"noConfetti",void 0),mt([it({type:String})],gt.prototype,"theme",void 0),mt([it({type:Boolean,attribute:!1})],gt.prototype,"isLoading",void 0),gt=mt([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i))("simple-boost")],gt);export{gt as SimpleBoost};
