var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var i,n,r,o=i={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,h=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?h=c.concat(h):d=-1,h.length&&p())}function p(){if(!u){var t=l(f);u=!0;for(var e=h.length;e;){for(c=h,h=[];++d<e;)c&&c[d].run();d=-1,e=h.length}c=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];h.push(new m(t,e)),1!==h.length||u||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[i++]=r:r<2048?(e[i++]=r>>6|192,e[i++]=63&r|128):55296==(64512&r)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++n)),e[i++]=r>>18|240,e[i++]=r>>12&63|128,e[i++]=r>>6&63|128,e[i++]=63&r|128):(e[i++]=r>>12|224,e[i++]=r>>6&63|128,e[i++]=63&r|128)}return e},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let e=0;e<t.length;e+=3){const r=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,h=(3&r)<<4|s>>4;let u=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(u=64)),n.push(i[c],i[h],i[u],i[d])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let i=0,n=0;for(;i<t.length;){const r=t[i++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[i++];e[n++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(1023&o))}else{const o=t[i++],s=t[i++];e[n++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let e=0;e<t.length;){const r=i[t.charAt(e++)],o=e<t.length?i[t.charAt(e)]:0;++e;const s=e<t.length?i[t.charAt(e)]:64;++e;const a=e<t.length?i[t.charAt(e)]:64;if(++e,null==r||null==o||null==s||null==a)throw new b;const l=r<<2|o>>4;if(n.push(l),64!==s){const t=o<<4&240|s>>2;if(n.push(t),64!==a){const t=s<<6&192|a;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w=function(t){return function(t){const e=y(t);return v.encodeByteArray(e,!0)}(t).replace(/\./g,"")},x=function(t){try{return v.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,I=()=>{try{return k()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&x(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},E=t=>{var e,i;return null===(i=null===(e=I())||void 0===e?void 0:e.emulatorHosts)||void 0===i?void 0:i[t]},T=()=>{var t;return null===(t=I())||void 0===t?void 0:t.config},N=t=>{var e;return null===(e=I())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function S(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function A(){const t=C();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R(){try{return"object"==typeof indexedDB}catch(t){return!1}}class L extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,r=this.errors[t],o=r?function(t,e){return t.replace(D,((t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",s=`${this.serviceName}: ${o} (${n}).`;return new L(n,s,i)}}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const r of i){if(!n.includes(r))return!1;const i=t[r],o=e[r];if(z(i)&&z(o)){if(!M(i,o))return!1}else if(i!==o)return!1}for(const t of n)if(!i.includes(t))return!1;return!0}function z(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){const e=[];for(const[i,n]of Object.entries(t))Array.isArray(n)?n.forEach((t=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function j(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[i,n]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)}})),e}function F(t){const e=t.indexOf("?");if(!e)return"";const i=t.indexOf("#",e);return t.substring(e,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){const i=new W(t,e);return i.subscribe.bind(i)}class W{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,i){let n;if(void 0===t&&void 0===e&&void 0===i)throw new Error("Missing Observer.");n=function(t,e){if("object"!=typeof t||null===t)return!1;for(const i of e)if(i in t&&"function"==typeof t[i])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:i},void 0===n.next&&(n.next=H),void 0===n.error&&(n.error=H),void 0===n.complete&&(n.complete=H);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}})),this.observers.push(n),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t){return t&&t._delegate?t._delegate:t}class X{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new _;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:$})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(t){}}}}clearInstance(t=$){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=$){return this.instances.has(t)}getOptions(t=$){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[t,e]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(t)&&e.resolve(n)}return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(t),this.onInitCallbacks.set(n,r);const o=this.instances.get(n);return o&&t(o,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const n of i)try{n(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t,n===$?void 0:n),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var n;return i||null}normalizeInstanceIdentifier(t=$){return this.component?this.component.multipleInstances?t:$:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class K{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new q(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=[];var J,Y;(Y=J||(J={}))[Y.DEBUG=0]="DEBUG",Y[Y.VERBOSE=1]="VERBOSE",Y[Y.INFO=2]="INFO",Y[Y.WARN=3]="WARN",Y[Y.ERROR=4]="ERROR",Y[Y.SILENT=5]="SILENT";const Q={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Z=J.INFO,tt={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},et=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),r=tt[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${n}]  ${t.name}:`,...i)};class it{constructor(t){this.name=t,this._logLevel=Z,this._logHandler=et,this._userLogHandler=null,G.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Q[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const nt=(t,e)=>e.some((e=>t instanceof e));let rt,ot;const st=new WeakMap,at=new WeakMap,lt=new WeakMap,ct=new WeakMap,ht=new WeakMap;let ut={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return at.get(t);if("objectStoreNames"===e)return t.objectStoreNames||lt.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return pt(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function dt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ot||(ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(mt(this),e),pt(st.get(this))}:function(...e){return pt(t.apply(mt(this),e))}:function(e,...i){const n=t.call(mt(this),e,...i);return lt.set(n,e.sort?e.sort():[e]),pt(n)}}function ft(t){return"function"==typeof t?dt(t):(t instanceof IDBTransaction&&function(t){if(at.has(t))return;const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),n()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));at.set(t,e)}(t),nt(t,rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,ut):t)}function pt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(pt(t.result)),n()},o=()=>{i(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&st.set(e,t)})).catch((()=>{})),ht.set(e,t),e}(t);if(ct.has(t))return ct.get(t);const e=ft(t);return e!==t&&(ct.set(t,e),ht.set(e,t)),e}const mt=t=>ht.get(t);function gt(t,e,{blocked:i,upgrade:n,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=pt(s);return n&&s.addEventListener("upgradeneeded",(t=>{n(pt(s.result),t.oldVersion,t.newVersion,pt(s.transaction),t)})),i&&s.addEventListener("blocked",(t=>i(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const yt=["get","getKey","getAll","getAllKeys","count"],vt=["put","add","delete","clear"],bt=new Map;function wt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(bt.get(e))return bt.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,r=vt.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!yt.includes(i))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let s=o.store;return n&&(s=s.index(e.shift())),(await Promise.all([s[i](...e),r&&o.done]))[0]};return bt.set(e,o),o}ut=(t=>({...t,get:(e,i,n)=>wt(e,i)||t.get(e,i,n),has:(e,i)=>!!wt(e,i)||t.has(e,i)}))(ut);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const kt="@firebase/app",It="0.9.15",Et=new it("@firebase/app"),Tt="[DEFAULT]",Nt={[kt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},_t=new Map,Ct=new Map;function St(t,e){try{t.container.addComponent(e)}catch(i){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function At(t){const e=t.name;if(Ct.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Ct.set(e,t);for(const e of _t.values())St(e,t);return!0}function Rt(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt=new O("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new X("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="10.1.0";function Pt(t,e={}){let i=t;if("object"!=typeof e){e={name:e}}const n=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Lt.create("bad-app-name",{appName:String(r)});if(i||(i=T()),!i)throw Lt.create("no-options");const o=_t.get(r);if(o){if(M(i,o.options)&&M(n,o.config))return o;throw Lt.create("duplicate-app",{appName:r})}const s=new K(r);for(const t of Ct.values())s.addComponent(t);const a=new Ot(i,n,s);return _t.set(r,a),a}function Mt(t=Tt){const e=_t.get(t);if(!e&&t===Tt&&T())return Pt();if(!e)throw Lt.create("no-app",{appName:t});return e}function zt(t,e,i){var n;let r=null!==(n=Nt[t])&&void 0!==n?n:t;i&&(r+=`-${i}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Et.warn(t.join(" "))}At(new X(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut="firebase-heartbeat-database",jt=1,Ft="firebase-heartbeat-store";let Bt=null;function Wt(){return Bt||(Bt=gt(Ut,jt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Ft)}}).catch((t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})}))),Bt}async function Ht(t,e){try{const i=(await Wt()).transaction(Ft,"readwrite"),n=i.objectStore(Ft);await n.put(e,Vt(t)),await i.done}catch(t){if(t instanceof L)Et.warn(t.message);else{const e=Lt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Et.warn(e.message)}}}function Vt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=$t();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=$t(),{heartbeatsToSend:e,unsentEntries:i}=function(t,e=1024){const i=[];let n=t.slice();for(const r of t){const t=i.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Kt(i)>e){t.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),Kt(i)>e){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=w(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function $t(){return(new Date).toISOString().substring(0,10)}class qt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!R()&&new Promise(((t,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await Wt();return await e.transaction(Ft).objectStore(Ft).get(Vt(t))}catch(t){if(t instanceof L)Et.warn(t.message);else{const e=Lt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Et.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}}}function Kt(t){return w(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;Gt="",At(new X("platform-logger",(t=>new xt(t)),"PRIVATE")),At(new X("heartbeat",(t=>new Xt(t)),"PRIVATE")),zt(kt,It,Gt),zt(kt,It,"esm2017"),zt("fire-js","");var Jt,Yt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Qt={},Zt=Zt||{},te=Yt||self;function ee(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ie(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ne="closure_uid_"+(1e9*Math.random()>>>0),re=0;function oe(t,e,i){return t.call.apply(t.bind,arguments)}function se(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ae(t,e,i){return(ae=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oe:se).apply(null,arguments)}function le(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ce(t,e){function i(){}i.prototype=e.prototype,t.$=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.ac=function(t,i,n){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.prototype[i].apply(t,r)}}function he(){this.s=this.s,this.o=this.o}he.prototype.s=!1,he.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ne)&&t[ne]||(t[ne]=++re))},he.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ue=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1};function de(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function fe(t,e){for(let e=1;e<arguments.length;e++){const i=arguments[e];if(ee(i)){const e=t.length||0,n=i.length||0;t.length=e+n;for(let r=0;r<n;r++)t[e+r]=i[r]}else t.push(i)}}function pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",(()=>{}),e),te.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function ge(t){return/^[\s\xa0]*$/.test(t)}function ye(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function ve(t){return-1!=ye().indexOf(t)}function be(t){return be[" "](t),t}be[" "]=function(){};var we,xe,ke,Ie=ve("Opera"),Ee=ve("Trident")||ve("MSIE"),Te=ve("Edge"),Ne=Te||Ee,_e=ve("Gecko")&&!(-1!=ye().toLowerCase().indexOf("webkit")&&!ve("Edge"))&&!(ve("Trident")||ve("MSIE"))&&!ve("Edge"),Ce=-1!=ye().toLowerCase().indexOf("webkit")&&!ve("Edge");function Se(){var t=te.document;return t?t.documentMode:void 0}t:{var Ae="",Re=(xe=ye(),_e?/rv:([^\);]+)(\)|;)/.exec(xe):Te?/Edge\/([\d\.]+)/.exec(xe):Ee?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(xe):Ce?/WebKit\/(\S+)/.exec(xe):Ie?/(?:Version)[ \/]?(\S+)/.exec(xe):void 0);if(Re&&(Ae=Re?Re[1]:""),Ee){var Le=Se();if(null!=Le&&Le>parseFloat(Ae)){we=String(Le);break t}}we=Ae}if(te.document&&Ee){var Oe=Se();ke=Oe||(parseInt(we,10)||void 0)}else ke=void 0;var De=ke;function Pe(t,e){if(pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_e){t:{try{be(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Me[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pe.$.h.call(this)}}ce(Pe,pe);var Me={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function je(t,e,i,n,r){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.la=r,this.key=++Ue,this.fa=this.ia=!1}function Fe(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Be(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function We(t){const e={};for(const i in t)e[i]=t[i];return e}const He="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ve(t,e){let i,n;for(let e=1;e<arguments.length;e++){for(i in n=arguments[e],n)t[i]=n[i];for(let e=0;e<He.length;e++)i=He[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function Xe(t){this.src=t,this.g={},this.h=0}function $e(t,e){var i=e.type;if(i in t.g){var n,r=t.g[i],o=ue(r,e);(n=0<=o)&&Array.prototype.splice.call(r,o,1),n&&(Fe(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function qe(t,e,i,n){for(var r=0;r<t.length;++r){var o=t[r];if(!o.fa&&o.listener==e&&o.capture==!!i&&o.la==n)return r}return-1}Xe.prototype.add=function(t,e,i,n,r){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var s=qe(t,e,n,r);return-1<s?(e=t[s],i||(e.ia=!1)):((e=new je(e,this.src,o,!!n,r)).ia=i,t.push(e)),e};var Ke="closure_lm_"+(1e6*Math.random()|0),Ge={};function Je(t,e,i,n,r){if(n&&n.once)return Qe(t,e,i,n,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)Je(t,e[o],i,n,r);return null}return i=oi(i),t&&t[ze]?t.O(e,i,ie(n)?!!n.capture:!!n,r):Ye(t,e,i,!1,n,r)}function Ye(t,e,i,n,r,o){if(!e)throw Error("Invalid event type");var s=ie(r)?!!r.capture:!!r,a=ni(t);if(a||(t[Ke]=a=new Xe(t)),(i=a.add(e,i,n,s,o)).proxy)return i;if(n=function(){function t(i){return e.call(t.src,t.listener,i)}const e=ii;return t}(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)me||(r=s),void 0===r&&(r=!1),t.addEventListener(e.toString(),n,r);else if(t.attachEvent)t.attachEvent(ei(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function Qe(t,e,i,n,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Qe(t,e[o],i,n,r);return null}return i=oi(i),t&&t[ze]?t.P(e,i,ie(n)?!!n.capture:!!n,r):Ye(t,e,i,!0,n,r)}function Ze(t,e,i,n,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)Ze(t,e[o],i,n,r);else n=ie(n)?!!n.capture:!!n,i=oi(i),t&&t[ze]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(i=qe(o=t.g[e],i,n,r))&&(Fe(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=ni(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qe(e,i,n,r)),(i=-1<t?e[t]:null)&&ti(i))}function ti(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ze])$e(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(ei(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=ni(e))?($e(i,t),0==i.h&&(i.src=null,e[Ke]=null)):Fe(t)}}}function ei(t){return t in Ge?Ge[t]:Ge[t]="on"+t}function ii(t,e){if(t.fa)t=!0;else{e=new Pe(e,this);var i=t.listener,n=t.la||t.src;t.ia&&ti(t),t=i.call(n,e)}return t}function ni(t){return(t=t[Ke])instanceof Xe?t:null}var ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function oi(t){return"function"==typeof t?t:(t[ri]||(t[ri]=function(e){return t.handleEvent(e)}),t[ri])}function si(){he.call(this),this.i=new Xe(this),this.S=this,this.J=null}function ai(t,e){var i,n=t.J;if(n)for(i=[];n;n=n.J)i.push(n);if(t=t.S,n=e.type||e,"string"==typeof e)e=new pe(e,t);else if(e instanceof pe)e.target=e.target||t;else{var r=e;Ve(e=new pe(n,t),r)}if(r=!0,i)for(var o=i.length-1;0<=o;o--){var s=e.g=i[o];r=li(s,n,!0,e)&&r}if(r=li(s=e.g=t,n,!0,e)&&r,r=li(s,n,!1,e)&&r,i)for(o=0;o<i.length;o++)r=li(s=e.g=i[o],n,!1,e)&&r}function li(t,e,i,n){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==i){var a=s.listener,l=s.la||s.src;s.ia&&$e(t.i,s),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}ce(si,he),si.prototype[ze]=!0,si.prototype.removeEventListener=function(t,e,i,n){Ze(this,t,e,i,n)},si.prototype.N=function(){if(si.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)Fe(i[n]);delete e.g[t],e.h--}}this.J=null},si.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},si.prototype.P=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var ci=te.JSON.stringify;function hi(){var t=yi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ui=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new di),(t=>t.reset()));class di{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function fi(t){var e=1;t=t.split(":");const i=[];for(;0<e&&t.length;)i.push(t.shift()),e--;return t.length&&i.push(t.join(":")),i}function pi(t){te.setTimeout((()=>{throw t}),0)}let mi,gi=!1,yi=new class{constructor(){this.h=this.g=null}add(t,e){const i=ui.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}},vi=()=>{const t=te.Promise.resolve(void 0);mi=()=>{t.then(bi)}};var bi=()=>{for(var t;t=hi();){try{t.h.call(t.g)}catch(t){pi(t)}var e=ui;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gi=!1};function wi(t,e){si.call(this),this.h=t||1,this.g=e||te,this.j=ae(this.qb,this),this.l=Date.now()}function xi(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function ki(t,e,i){if("function"==typeof t)i&&(t=ae(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ae(t.handleEvent,t)}return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Ii(t){t.g=ki((()=>{t.g=null,t.i&&(t.i=!1,Ii(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ce(wi,si),(Jt=wi.prototype).ga=!1,Jt.T=null,Jt.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ai(this,"tick"),this.ga&&(xi(this),this.start()))}},Jt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Jt.N=function(){wi.$.N.call(this),xi(this),delete this.g};class Ei extends he{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(t){he.call(this),this.h=t,this.g={}}ce(Ti,he);var Ni=[];function _i(t,e,i,n){Array.isArray(i)||(i&&(Ni[0]=i.toString()),i=Ni);for(var r=0;r<i.length;r++){var o=Je(e,i[r],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Ci(t){Be(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ti(t)}),t),t.g={}}function Si(){this.g=!0}function Ai(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<r.length;s++)r[s]=""}}}return ci(i)}catch(t){return e}}(t,i)+(n?" "+n:"")}))}Ti.prototype.N=function(){Ti.$.N.call(this),Ci(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Si.prototype.Ea=function(){this.g=!1},Si.prototype.info=function(){};var Ri={},Li=null;function Oi(){return Li=Li||new si}function Di(t){pe.call(this,Ri.Ta,t)}function Pi(t){const e=Oi();ai(e,new Di(e))}function Mi(t,e){pe.call(this,Ri.STAT_EVENT,t),this.stat=e}function zi(t){const e=Oi();ai(e,new Mi(e,t))}function Ui(t,e){pe.call(this,Ri.Ua,t),this.size=e}function ji(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return te.setTimeout((function(){t()}),e)}Ri.Ta="serverreachability",ce(Di,pe),Ri.STAT_EVENT="statevent",ce(Mi,pe),Ri.Ua="timingevent",ce(Ui,pe);var Fi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Bi={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wi(){}function Hi(t){return t.h||(t.h=t.i())}function Vi(){}Wi.prototype.h=null;var Xi,$i={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qi(){pe.call(this,"d")}function Ki(){pe.call(this,"c")}function Gi(){}function Ji(t,e,i,n){this.l=t,this.j=e,this.m=i,this.W=n||1,this.U=new Ti(this),this.P=Qi,t=Ne?125:void 0,this.V=new wi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yi}function Yi(){this.i=null,this.g="",this.h=!1}ce(qi,pe),ce(Ki,pe),ce(Gi,Wi),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},Xi=new Gi;var Qi=45e3,Zi={},tn={};function en(t,e,i){t.L=1,t.v=xn(gn(e)),t.s=i,t.S=!0,nn(t,null)}function nn(t,e){t.G=Date.now(),an(t),t.A=gn(t.v);var i=t.A,n=t.W;Array.isArray(n)||(n=[String(n)]),Dn(i.i,"t",n),t.C=0,i=t.l.J,t.h=new Yi,t.g=Or(t.l,i?e:null,!t.s),0<t.O&&(t.M=new Ei(ae(t.Pa,t,t.g),t.O)),_i(t.U,t.g,"readystatechange",t.nb),e=t.I?We(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Pi(),function(t,e,i,n,r,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");s=2<=u.length&&"type"==u[1]?s+(h+"=")+c+"&":s+(h+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+e+"\n"+i+"\n"+s}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function rn(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function on(t,e,i){let n,r=!0;for(;!t.J&&t.C<i.length;){if(n=sn(t,i),n==tn){4==e&&(t.o=4,zi(14),r=!1),Ai(t.j,t.m,null,"[Incomplete Response]");break}if(n==Zi){t.o=4,zi(15),Ai(t.j,t.m,i,"[Invalid Chunk]"),r=!1;break}Ai(t.j,t.m,n,null),dn(t,n)}rn(t)&&n!=tn&&n!=Zi&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,zi(16),r=!1),t.i=t.i&&r,r?0<i.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),Tr(e),e.M=!0,zi(11))):(Ai(t.j,t.m,i,"[Invalid Chunked Response]"),un(t),hn(t))}function sn(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?tn:(i=Number(e.substring(i,n)),isNaN(i)?Zi:(n+=1)+i>e.length?tn:(e=e.slice(n,n+i),t.C=n+i,e))}function an(t){t.Y=Date.now()+t.P,ln(t,t.P)}function ln(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ji(ae(t.lb,t),e)}function cn(t){t.B&&(te.clearTimeout(t.B),t.B=null)}function hn(t){0==t.l.H||t.J||Cr(t.l,t)}function un(t){cn(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,xi(t.V),Ci(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function dn(t,e){try{var i=t.l;if(0!=i.H&&(i.g==t||Fn(i.i,t)))if(!t.K&&Fn(i.i,t)&&3==i.H){try{var n=i.Ja.g.parse(e)}catch(t){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){t:if(!i.u){if(i.g){if(!(i.g.G+3e3<t.G))break t;_r(i),yr(i)}Er(i),zi(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=ji(ae(i.ib,i),6e3));if(1>=jn(i.i)&&i.oa){try{i.oa()}catch(t){}i.oa=void 0}}else Ar(i,11)}else if((t.K||i.g==t)&&_r(i),!ge(e))for(r=i.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(i.V=c[0],c=c[1],2==i.H)if("c"==c[0]){i.K=c[1],i.pa=c[2];const e=c[3];null!=e&&(i.ra=e,i.l.info("VER="+i.ra));const r=c[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(n=1.5*h,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=n.i;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Bn(o,o.h),o.h=null))}if(n.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.Da=t,wn(n.I,n.F,t))}}i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-t.G,i.l.info("Handshake RTT: "+i.S+"ms"));var s=t;if((n=i).wa=Lr(n,n.J?n.pa:null,n.Y),s.K){Wn(n.i,s);var a=s,l=n.L;l&&a.setTimeout(l),a.B&&(cn(a),an(a)),n.g=s}else Ir(n);0<i.j.length&&br(i)}else"stop"!=c[0]&&"close"!=c[0]||Ar(i,7);else 3==i.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ar(i,7):gr(i):"noop"!=c[0]&&i.h&&i.h.Aa(c),i.A=0)}Pi()}catch(t){}}function fn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ee(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var i=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ee(t)||"string"==typeof t){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const n in t)e[i++]=n;return e}}}(t),n=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ee(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}(t),r=n.length,o=0;o<r;o++)e.call(void 0,n[o],i&&i[o],t)}(Jt=Ji.prototype).setTimeout=function(t){this.P=t},Jt.nb=function(t){t=t.target;const e=this.M;e&&3==hr(t)?e.l():this.Pa(t)},Jt.Pa=function(t){try{if(t==this.g)t:{const h=hr(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||Ne||this.g&&(this.h.h||this.g.ja()||ur(this.g)))){this.J||4!=h||7==e||Pi(),cn(this);var i=this.g.da();this.ca=i;e:if(rn(this)){var n=ur(this.g);t="";var r=n.length,o=4==hr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){un(this),hn(this);var s="";break e}this.h.i=new te.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:o&&e==r-1});n.splice(0,r),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==i,function(t,e,i,n,r,o,s){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+e+"\n"+i+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.W,h,i),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(a)){var c=a;break e}}c=null}if(!(i=c)){this.i=!1,this.o=3,zi(12),un(this),hn(this);break t}Ai(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dn(this,i)}this.S?(on(this,h,s),Ne&&this.i&&3==h&&(_i(this.U,this.V,"tick",this.mb),this.V.start())):(Ai(this.j,this.m,s,null),dn(this,s)),4==h&&un(this),this.i&&!this.J&&(4==h?Cr(this.l,this):(this.i=!1,an(this)))}else(function(t){const e={};t=(t.g&&2<=hr(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<t.length;n++){if(ge(t[n]))continue;var i=fi(t[n]);const r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();const o=e[r]||[];e[r]=o,o.push(i)}!function(t,e){for(const i in t)e.call(void 0,t[i],i,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==i&&0<s.indexOf("Unknown SID")?(this.o=3,zi(12)):(this.o=0,zi(13)),un(this),hn(this)}}}catch(t){}},Jt.mb=function(){if(this.g){var t=hr(this.g),e=this.g.ja();this.C<e.length&&(cn(this),on(this,t,e),this.i&&4!=t&&an(this))}},Jt.cancel=function(){this.J=!0,un(this)},Jt.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Pi(),zi(17)),un(this),this.o=2,hn(this)):ln(this,this.Y-t)};var pn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mn){this.h=t.h,yn(this,t.j),this.s=t.s,this.g=t.g,vn(this,t.m),this.l=t.l;var e=t.i,i=new An;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),bn(this,i),this.o=t.o}else t&&(e=String(t).match(pn))?(this.h=!1,yn(this,e[1]||"",!0),this.s=kn(e[2]||""),this.g=kn(e[3]||"",!0),vn(this,e[4]),this.l=kn(e[5]||"",!0),bn(this,e[6]||"",!0),this.o=kn(e[7]||"")):(this.h=!1,this.i=new An(null,this.h))}function gn(t){return new mn(t)}function yn(t,e,i){t.j=i?kn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bn(t,e,i){e instanceof An?(t.i=e,function(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(Ln(this,e),Dn(this,i,t))}),t)),t.j=e}(t.i,t.h)):(i||(e=In(e,Cn)),t.i=new An(e,t.h))}function wn(t,e,i){t.i.set(e,i)}function xn(t){return wn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function In(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,En),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function En(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}mn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(In(e,Tn,!0),":");var i=this.g;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(In(e,Tn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&t.push("/"),t.push(In(i,"/"==i.charAt(0)?_n:Nn,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.o)&&t.push("#",In(i,Sn)),t.join("")};var Tn=/[#\/\?@]/g,Nn=/[#\?:]/g,_n=/[#\?]/g,Cn=/[#\?@]/g,Sn=/#/g;function An(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),r=null;if(0<=n){var o=t[i].substring(0,n);r=t[i].substring(n+1)}else o=t[i];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function Ln(t,e){Rn(t),e=Pn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function On(t,e){return Rn(t),e=Pn(t,e),t.g.has(e)}function Dn(t,e,i){Ln(t,e),0<i.length&&(t.i=null,t.g.set(Pn(t,e),de(i)),t.h+=i.length)}function Pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Jt=An.prototype).add=function(t,e){Rn(this),this.i=null,t=Pn(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},Jt.forEach=function(t,e){Rn(this),this.g.forEach((function(i,n){i.forEach((function(i){t.call(e,i,n,this)}),this)}),this)},Jt.ta=function(){Rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let n=0;n<e.length;n++){const r=t[n];for(let t=0;t<r.length;t++)i.push(e[n])}return i},Jt.Z=function(t){Rn(this);let e=[];if("string"==typeof t)On(this,t)&&(e=e.concat(this.g.get(Pn(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},Jt.set=function(t,e){return Rn(this),this.i=null,On(this,t=Pn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Jt.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Jt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var n=e[i];const o=encodeURIComponent(String(n)),s=this.Z(n);for(n=0;n<s.length;n++){var r=o;""!==s[n]&&(r+="="+encodeURIComponent(String(s[n]))),t.push(r)}}return this.i=t.join("&")};function Mn(t){this.l=t||zn,te.PerformanceNavigationTiming?t=0<(t=te.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zn=10;function Un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function jn(t){return t.h?1:t.g?t.g.size:0}function Fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Bn(t,e){t.g?t.g.add(e):t.h=e}function Wn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Hn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.F);return e}return de(t.i)}Mn.prototype.cancel=function(){if(this.i=Hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Vn=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function Xn(){this.g=new Vn}function $n(t,e,i){const n=i||"";try{fn(t,(function(t,i){let r=t;ie(t)&&(r=ci(t)),e.push(n+i+"="+encodeURIComponent(r))}))}catch(t){throw e.push(n+"type="+encodeURIComponent("_badmap")),t}}function qn(t,e,i,n,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(n)}catch(t){}}function Kn(t){this.l=t.fc||null,this.j=t.ob||!1}function Gn(t,e){si.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(Kn,Wi),Kn.prototype.g=function(){return new Gn(this.l,this.j)},Kn.prototype.i=function(t){return function(){return t}}({}),ce(Gn,si);var Jn=0;function Yn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Qn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zn(t)}function Zn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Jt=Gn.prototype).open=function(t,e){if(this.readyState!=Jn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zn(this)},Jt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Jt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qn(this)),this.readyState=Jn},Jt.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==te.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Jt.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qn(this):Zn(this),3==this.readyState&&Yn(this)}},Jt.Za=function(t){this.g&&(this.response=this.responseText=t,Qn(this))},Jt.Ya=function(t){this.g&&(this.response=t,Qn(this))},Jt.ka=function(){this.g&&Qn(this)},Jt.setRequestHeader=function(t,e){this.v.append(t,e)},Jt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Jt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var tr=te.JSON.parse;function er(t){si.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ir,this.L=this.M=!1}ce(er,si);var ir="",nr=/^https?$/i,rr=["POST","PUT"];function or(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sr(t),lr(t)}function sr(t){t.F||(t.F=!0,ai(t,"complete"),ai(t,"error"))}function ar(t){if(t.h&&void 0!==Zt&&(!t.C[1]||4!=hr(t)||2!=t.da()))if(t.v&&4==hr(t))ki(t.La,0,t);else if(ai(t,"readystatechange"),4==hr(t)){t.h=!1;try{const s=t.da();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===s){var r=String(t.I).match(pn)[1]||null;!r&&te.self&&te.self.location&&(r=te.self.location.protocol.slice(0,-1)),n=!nr.test(r?r.toLowerCase():"")}i=n}if(i)ai(t,"complete"),ai(t,"success");else{t.m=6;try{var o=2<hr(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.da()+"]",sr(t)}}finally{lr(t)}}}function lr(t,e){if(t.g){cr(t);const i=t.g,n=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ai(t,"ready");try{i.onreadystatechange=n}catch(t){}}}function cr(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function hr(t){return t.g?t.g.readyState:0}function ur(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ir:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function dr(t){let e="";return Be(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}function fr(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=dr(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):wn(t,e,i))}function pr(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function mr(t){this.Ga=0,this.j=[],this.l=new Si,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pr("baseRetryDelayMs",5e3,t),this.hb=pr("retryDelaySeedMs",1e4,t),this.eb=pr("forwardChannelMaxRetries",2,t),this.xa=pr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Mn(t&&t.concurrentRequestLimit),this.Ja=new Xn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function gr(t){if(vr(t),3==t.H){var e=t.W++,i=gn(t.I);if(wn(i,"SID",t.K),wn(i,"RID",e),wn(i,"TYPE","terminate"),xr(t,i),(e=new Ji(t,t.l,e)).L=2,e.v=xn(gn(i)),i=!1,te.navigator&&te.navigator.sendBeacon)try{i=te.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!i&&te.Image&&((new Image).src=e.v,i=!0),i||(e.g=Or(e.l,null),e.g.ha(e.v)),e.G=Date.now(),an(e)}Rr(t)}function yr(t){t.g&&(Tr(t),t.g.cancel(),t.g=null)}function vr(t){yr(t),t.u&&(te.clearTimeout(t.u),t.u=null),_r(t),t.i.cancel(),t.m&&("number"==typeof t.m&&te.clearTimeout(t.m),t.m=null)}function br(t){if(!Un(t.i)&&!t.m){t.m=!0;var e=t.Na;mi||vi(),gi||(mi(),gi=!0),yi.add(e,t),t.C=0}}function wr(t,e){var i;i=e?e.m:t.W++;const n=gn(t.I);wn(n,"SID",t.K),wn(n,"RID",i),wn(n,"AID",t.V),xr(t,n),t.o&&t.s&&fr(n,t.o,t.s),i=new Ji(t,t.l,i,t.C+1),null===t.o&&(i.I=t.s),e&&(t.j=e.F.concat(t.j)),e=kr(t,i,1e3),i.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bn(t.i,i),en(i,n,e)}function xr(t,e){t.na&&Be(t.na,(function(t,i){wn(e,i,t)})),t.h&&fn({},(function(t,i){wn(e,i,t)}))}function kr(t,e,i){i=Math.min(t.j.length,i);var n=t.h?ae(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<i;s++){let i=r[s].g;const a=r[s].map;if(i-=e,0>i)e=Math.max(0,r[s].g-100),o=!1;else try{$n(a,t,"req"+i+"_")}catch(t){n&&n(a)}}if(o){n=t.join("&");break t}}}return t=t.j.splice(0,i),e.F=t,n}function Ir(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;mi||vi(),gi||(mi(),gi=!0),yi.add(e,t),t.A=0}}function Er(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=ji(ae(t.Ma,t),Sr(t,t.A)),t.A++,!0)}function Tr(t){null!=t.B&&(te.clearTimeout(t.B),t.B=null)}function Nr(t){t.g=new Ji(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);wn(e,"RID","rpc"),wn(e,"SID",t.K),wn(e,"AID",t.V),wn(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&wn(e,"TO",t.qa),wn(e,"TYPE","xmlhttp"),xr(t,e),t.o&&t.s&&fr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var i=t.g;t=t.pa,i.L=1,i.v=xn(gn(e)),i.s=null,i.S=!0,nn(i,t)}function _r(t){null!=t.v&&(te.clearTimeout(t.v),t.v=null)}function Cr(t,e){var i=null;if(t.g==e){_r(t),Tr(t),t.g=null;var n=2}else{if(!Fn(t.i,e))return;i=e.F,Wn(t.i,e),n=1}if(0!=t.H)if(e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;ai(n=Oi(),new Ui(n,i)),br(t)}else Ir(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==n&&function(t,e){return!(jn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=ji(ae(t.Na,t,e),Sr(t,t.C)),t.C++,0)))}(t,e)||2==n&&Er(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),r){case 1:Ar(t,5);break;case 4:Ar(t,10);break;case 3:Ar(t,6);break;default:Ar(t,2)}}function Sr(t,e){let i=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(i*=2),i*e}function Ar(t,e){if(t.l.info("Error code "+e),2==e){var i=null;t.h&&(i=null);var n=ae(t.pb,t);i||(i=new mn("//www.google.com/images/cleardot.gif"),te.location&&"http"==te.location.protocol||yn(i,"https"),xn(i)),function(t,e){const i=new Si;if(te.Image){const n=new Image;n.onload=le(qn,i,n,"TestLoadImage: loaded",!0,e),n.onerror=le(qn,i,n,"TestLoadImage: error",!1,e),n.onabort=le(qn,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=le(qn,i,n,"TestLoadImage: timeout",!1,e),te.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}(i.toString(),n)}else zi(2);t.H=0,t.h&&t.h.za(e),Rr(t),vr(t)}function Rr(t){if(t.H=0,t.ma=[],t.h){const e=Hn(t.i);0==e.length&&0==t.j.length||(fe(t.ma,e),fe(t.ma,t.j),t.i.i.length=0,de(t.j),t.j.length=0),t.h.ya()}}function Lr(t,e,i){var n=i instanceof mn?gn(i):new mn(i);if(""!=n.g)e&&(n.g=e+"."+n.g),vn(n,n.m);else{var r=te.location;n=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var o=new mn(null);n&&yn(o,n),e&&(o.g=e),r&&vn(o,r),i&&(o.l=i),n=o}return i=t.F,e=t.Da,i&&e&&wn(n,i,e),wn(n,"VER",t.ra),xr(t,n),n}function Or(t,e,i){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=i&&t.Ha&&!t.va?new er(new Kn({ob:!0})):new er(t.va)).Oa(t.J),e}function Dr(){}function Pr(){if(Ee&&!(10<=Number(De)))throw Error("Environmental error: no available transport.")}function Mr(t,e){si.call(this),this.g=new mr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ge(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ge(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new jr(this)}function zr(t){qi.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ur(){Ki.call(this),this.status=1}function jr(t){this.g=t}function Fr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Br(t,e,i){i||(i=0);var n=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)n[r]=e.charCodeAt(i++)|e.charCodeAt(i++)<<8|e.charCodeAt(i++)<<16|e.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=e[i++]|e[i++]<<8|e[i++]<<16|e[i++]<<24;e=t.g[0],i=t.g[1],r=t.g[2];var o=t.g[3],s=e+(o^i&(r^o))+n[0]+3614090360&4294967295;s=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=(i=(r=(o=(e=i+(s<<7&4294967295|s>>>25))+((s=o+(r^e&(i^r))+n[1]+3905402710&4294967295)<<12&4294967295|s>>>20))+((s=r+(i^o&(e^i))+n[2]+606105819&4294967295)<<17&4294967295|s>>>15))+((s=i+(e^r&(o^e))+n[3]+3250441966&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^i&(r^o))+n[4]+4118548399&4294967295)<<7&4294967295|s>>>25))+((s=o+(r^e&(i^r))+n[5]+1200080426&4294967295)<<12&4294967295|s>>>20))+((s=r+(i^o&(e^i))+n[6]+2821735955&4294967295)<<17&4294967295|s>>>15))+((s=i+(e^r&(o^e))+n[7]+4249261313&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^i&(r^o))+n[8]+1770035416&4294967295)<<7&4294967295|s>>>25))+((s=o+(r^e&(i^r))+n[9]+2336552879&4294967295)<<12&4294967295|s>>>20))+((s=r+(i^o&(e^i))+n[10]+4294925233&4294967295)<<17&4294967295|s>>>15))+((s=i+(e^r&(o^e))+n[11]+2304563134&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^i&(r^o))+n[12]+1804603682&4294967295)<<7&4294967295|s>>>25))+((s=o+(r^e&(i^r))+n[13]+4254626195&4294967295)<<12&4294967295|s>>>20))+((s=r+(i^o&(e^i))+n[14]+2792965006&4294967295)<<17&4294967295|s>>>15))+((s=i+(e^r&(o^e))+n[15]+1236535329&4294967295)<<22&4294967295|s>>>10))+((s=e+(r^o&(i^r))+n[1]+4129170786&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^r&(e^i))+n[6]+3225465664&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^i&(o^e))+n[11]+643717713&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^e&(r^o))+n[0]+3921069994&4294967295)<<20&4294967295|s>>>12))+((s=e+(r^o&(i^r))+n[5]+3593408605&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^r&(e^i))+n[10]+38016083&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^i&(o^e))+n[15]+3634488961&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^e&(r^o))+n[4]+3889429448&4294967295)<<20&4294967295|s>>>12))+((s=e+(r^o&(i^r))+n[9]+568446438&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^r&(e^i))+n[14]+3275163606&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^i&(o^e))+n[3]+4107603335&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^e&(r^o))+n[8]+1163531501&4294967295)<<20&4294967295|s>>>12))+((s=e+(r^o&(i^r))+n[13]+2850285829&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^r&(e^i))+n[2]+4243563512&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^i&(o^e))+n[7]+1735328473&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^e&(r^o))+n[12]+2368359562&4294967295)<<20&4294967295|s>>>12))+((s=e+(i^r^o)+n[5]+4294588738&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^i^r)+n[8]+2272392833&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^i)+n[11]+1839030562&4294967295)<<16&4294967295|s>>>16))+((s=i+(r^o^e)+n[14]+4259657740&4294967295)<<23&4294967295|s>>>9))+((s=e+(i^r^o)+n[1]+2763975236&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^i^r)+n[4]+1272893353&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^i)+n[7]+4139469664&4294967295)<<16&4294967295|s>>>16))+((s=i+(r^o^e)+n[10]+3200236656&4294967295)<<23&4294967295|s>>>9))+((s=e+(i^r^o)+n[13]+681279174&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^i^r)+n[0]+3936430074&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^i)+n[3]+3572445317&4294967295)<<16&4294967295|s>>>16))+((s=i+(r^o^e)+n[6]+76029189&4294967295)<<23&4294967295|s>>>9))+((s=e+(i^r^o)+n[9]+3654602809&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^i^r)+n[12]+3873151461&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^i)+n[15]+530742520&4294967295)<<16&4294967295|s>>>16))+((s=i+(r^o^e)+n[2]+3299628645&4294967295)<<23&4294967295|s>>>9))+((s=e+(r^(i|~o))+n[0]+4096336452&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(e|~r))+n[7]+1126891415&4294967295)<<10&4294967295|s>>>22))+((s=r+(e^(o|~i))+n[14]+2878612391&4294967295)<<15&4294967295|s>>>17))+((s=i+(o^(r|~e))+n[5]+4237533241&4294967295)<<21&4294967295|s>>>11))+((s=e+(r^(i|~o))+n[12]+1700485571&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(e|~r))+n[3]+2399980690&4294967295)<<10&4294967295|s>>>22))+((s=r+(e^(o|~i))+n[10]+4293915773&4294967295)<<15&4294967295|s>>>17))+((s=i+(o^(r|~e))+n[1]+2240044497&4294967295)<<21&4294967295|s>>>11))+((s=e+(r^(i|~o))+n[8]+1873313359&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(e|~r))+n[15]+4264355552&4294967295)<<10&4294967295|s>>>22))+((s=r+(e^(o|~i))+n[6]+2734768916&4294967295)<<15&4294967295|s>>>17))+((s=i+(o^(r|~e))+n[13]+1309151649&4294967295)<<21&4294967295|s>>>11))+((o=(e=i+((s=e+(r^(i|~o))+n[4]+4149444226&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(e|~r))+n[11]+3174756917&4294967295)<<10&4294967295|s>>>22))^((r=o+((s=r+(e^(o|~i))+n[2]+718787259&4294967295)<<15&4294967295|s>>>17))|~e))+n[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+o&4294967295}function Wr(t,e){this.h=e;for(var i=[],n=!0,r=t.length-1;0<=r;r--){var o=0|t[r];n&&o==e||(i[r]=o,n=!1)}this.g=i}(Jt=er.prototype).Oa=function(t){this.M=t},Jt.ha=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xi.g(),this.C=this.u?Hi(this.u):Hi(Xi),this.g.onreadystatechange=ae(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void or(this,t)}if(t=i||"",i=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else{if("function"!=typeof n.keys||"function"!=typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const t of n.keys())i.set(t,n.get(t))}n=Array.from(i.keys()).find((t=>"content-type"==t.toLowerCase())),r=te.FormData&&t instanceof te.FormData,!(0<=ue(rr,e))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of i)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cr(this),0<this.B&&((this.L=function(t){return Ee&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ae(this.ua,this)):this.A=ki(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){or(this,t)}},Jt.ua=function(){void 0!==Zt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ai(this,"timeout"),this.abort(8))},Jt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ai(this,"complete"),ai(this,"abort"),lr(this))},Jt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lr(this,!0)),er.$.N.call(this)},Jt.La=function(){this.s||(this.G||this.v||this.l?ar(this):this.kb())},Jt.kb=function(){ar(this)},Jt.isActive=function(){return!!this.g},Jt.da=function(){try{return 2<hr(this)?this.g.status:-1}catch(t){return-1}},Jt.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Jt.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),tr(e)}},Jt.Ia=function(){return this.m},Jt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Jt=mr.prototype).ra=8,Jt.H=1,Jt.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ji(this,this.l,t);let o=this.s;if(this.U&&(o?(o=We(o),Ve(o,this.U)):o=this.U),null!==this.o||this.O||(r.I=o,o=null),this.P)t:{for(var e=0,i=0;i<this.j.length;i++){var n=this.j[i];if(void 0===(n="__data__"in n.map&&"string"==typeof(n=n.map.__data__)?n.length:void 0))break;if(4096<(e+=n)){e=i;break t}if(4096===e||i===this.j.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=kr(this,r,e),wn(i=gn(this.I),"RID",t),wn(i,"CVER",22),this.F&&wn(i,"X-HTTP-Session-Id",this.F),xr(this,i),o&&(this.O?e="headers="+encodeURIComponent(String(dr(o)))+"&"+e:this.o&&fr(i,this.o,o)),Bn(this.i,r),this.bb&&wn(i,"TYPE","init"),this.P?(wn(i,"$req",e),wn(i,"SID","null"),r.aa=!0,en(r,i,null)):en(r,i,e),this.H=2}}else 3==this.H&&(t?wr(this,t):0==this.j.length||Un(this.i)||wr(this))},Jt.Ma=function(){if(this.u=null,Nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ji(ae(this.jb,this),t)}},Jt.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zi(10),yr(this),Nr(this))},Jt.ib=function(){null!=this.v&&(this.v=null,yr(this),Er(this),zi(19))},Jt.pb=function(t){t?(this.l.info("Successfully pinged google.com"),zi(2)):(this.l.info("Failed to ping google.com"),zi(1))},Jt.isActive=function(){return!!this.h&&this.h.isActive(this)},(Jt=Dr.prototype).Ba=function(){},Jt.Aa=function(){},Jt.za=function(){},Jt.ya=function(){},Jt.isActive=function(){return!0},Jt.Va=function(){},Pr.prototype.g=function(t,e){return new Mr(t,e)},ce(Mr,si),Mr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,i=this.h||void 0;zi(0),t.Y=e,t.na=i||{},t.G=t.aa,t.I=Lr(t,null,t.Y),br(t)},Mr.prototype.close=function(){gr(this.g)},Mr.prototype.u=function(t){var e=this.g;if("string"==typeof t){var i={};i.__data__=t,t=i}else this.v&&((i={}).__data__=ci(t),t=i);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&br(e)},Mr.prototype.N=function(){this.g.h=null,delete this.j,gr(this.g),delete this.g,Mr.$.N.call(this)},ce(zr,qi),ce(Ur,Ki),ce(jr,Dr),jr.prototype.Ba=function(){ai(this.g,"a")},jr.prototype.Aa=function(t){ai(this.g,new zr(t))},jr.prototype.za=function(t){ai(this.g,new Ur)},jr.prototype.ya=function(){ai(this.g,"b")},ce(Fr,(function(){this.blockSize=-1})),Fr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Fr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var i=e-this.blockSize,n=this.m,r=this.h,o=0;o<e;){if(0==r)for(;o<=i;)Br(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(n[r++]=t.charCodeAt(o++),r==this.blockSize){Br(this,n),r=0;break}}else for(;o<e;)if(n[r++]=t[o++],r==this.blockSize){Br(this,n),r=0;break}}this.h=r,this.i+=e},Fr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var i=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&i,i/=256;for(this.j(t),t=Array(16),e=i=0;4>e;++e)for(var n=0;32>n;n+=8)t[i++]=this.g[e]>>>n&255;return t};var Hr={};function Vr(t){return-128<=t&&128>t?function(t,e){var i=Hr;return Object.prototype.hasOwnProperty.call(i,t)?i[t]:i[t]=e(t)}(t,(function(t){return new Wr([0|t],0>t?-1:0)})):new Wr([0|t],0>t?-1:0)}function Xr(t){if(isNaN(t)||!isFinite(t))return qr;if(0>t)return Qr(Xr(-t));for(var e=[],i=1,n=0;t>=i;n++)e[n]=t/i|0,i*=$r;return new Wr(e,0)}var $r=4294967296,qr=Vr(0),Kr=Vr(1),Gr=Vr(16777216);function Jr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Yr(t){return-1==t.h}function Qr(t){for(var e=t.g.length,i=[],n=0;n<e;n++)i[n]=~t.g[n];return new Wr(i,~t.h).add(Kr)}function Zr(t,e){return t.add(Qr(e))}function to(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function eo(t,e){this.g=t,this.h=e}function io(t,e){if(Jr(e))throw Error("division by zero");if(Jr(t))return new eo(qr,qr);if(Yr(t))return e=io(Qr(t),e),new eo(Qr(e.g),Qr(e.h));if(Yr(e))return e=io(t,Qr(e)),new eo(Qr(e.g),e.h);if(30<t.g.length){if(Yr(t)||Yr(e))throw Error("slowDivide_ only works with positive integers.");for(var i=Kr,n=e;0>=n.X(t);)i=no(i),n=no(n);var r=ro(i,1),o=ro(n,1);for(n=ro(n,2),i=ro(i,2);!Jr(n);){var s=o.add(n);0>=s.X(t)&&(r=r.add(i),o=s),n=ro(n,1),i=ro(i,1)}return e=Zr(t,r.R(e)),new eo(r,e)}for(r=qr;0<=t.X(e);){for(i=Math.max(1,Math.floor(t.ea()/e.ea())),n=48>=(n=Math.ceil(Math.log(i)/Math.LN2))?1:Math.pow(2,n-48),s=(o=Xr(i)).R(e);Yr(s)||0<s.X(t);)s=(o=Xr(i-=n)).R(e);Jr(o)&&(o=Kr),r=r.add(o),t=Zr(t,s)}return new eo(r,t)}function no(t){for(var e=t.g.length+1,i=[],n=0;n<e;n++)i[n]=t.D(n)<<1|t.D(n-1)>>>31;return new Wr(i,t.h)}function ro(t,e){var i=e>>5;e%=32;for(var n=t.g.length-i,r=[],o=0;o<n;o++)r[o]=0<e?t.D(o+i)>>>e|t.D(o+i+1)<<32-e:t.D(o+i);return new Wr(r,t.h)}(Jt=Wr.prototype).ea=function(){if(Yr(this))return-Qr(this).ea();for(var t=0,e=1,i=0;i<this.g.length;i++){var n=this.D(i);t+=(0<=n?n:$r+n)*e,e*=$r}return t},Jt.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Jr(this))return"0";if(Yr(this))return"-"+Qr(this).toString(t);for(var e=Xr(Math.pow(t,6)),i=this,n="";;){var r=io(i,e).g,o=((0<(i=Zr(i,r.R(e))).g.length?i.g[0]:i.h)>>>0).toString(t);if(Jr(i=r))return o+n;for(;6>o.length;)o="0"+o;n=o+n}},Jt.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Jt.X=function(t){return Yr(t=Zr(this,t))?-1:Jr(t)?0:1},Jt.abs=function(){return Yr(this)?Qr(this):this},Jt.add=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0,r=0;r<=e;r++){var o=n+(65535&this.D(r))+(65535&t.D(r)),s=(o>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);n=s>>>16,o&=65535,s&=65535,i[r]=s<<16|o}return new Wr(i,-2147483648&i[i.length-1]?-1:0)},Jt.R=function(t){if(Jr(this)||Jr(t))return qr;if(Yr(this))return Yr(t)?Qr(this).R(Qr(t)):Qr(Qr(this).R(t));if(Yr(t))return Qr(this.R(Qr(t)));if(0>this.X(Gr)&&0>t.X(Gr))return Xr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,i=[],n=0;n<2*e;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<t.g.length;r++){var o=this.D(n)>>>16,s=65535&this.D(n),a=t.D(r)>>>16,l=65535&t.D(r);i[2*n+2*r]+=s*l,to(i,2*n+2*r),i[2*n+2*r+1]+=o*l,to(i,2*n+2*r+1),i[2*n+2*r+1]+=s*a,to(i,2*n+2*r+1),i[2*n+2*r+2]+=o*a,to(i,2*n+2*r+2)}for(n=0;n<e;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=e;n<2*e;n++)i[n]=0;return new Wr(i,0)},Jt.gb=function(t){return io(this,t).h},Jt.and=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)&t.D(n);return new Wr(i,this.h&t.h)},Jt.or=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)|t.D(n);return new Wr(i,this.h|t.h)},Jt.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)^t.D(n);return new Wr(i,this.h^t.h)},Pr.prototype.createWebChannel=Pr.prototype.g,Mr.prototype.send=Mr.prototype.u,Mr.prototype.open=Mr.prototype.m,Mr.prototype.close=Mr.prototype.close,Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,Bi.COMPLETE="complete",Vi.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",si.prototype.listen=si.prototype.O,er.prototype.listenOnce=er.prototype.P,er.prototype.getLastError=er.prototype.Sa,er.prototype.getLastErrorCode=er.prototype.Ia,er.prototype.getStatus=er.prototype.da,er.prototype.getResponseJson=er.prototype.Wa,er.prototype.getResponseText=er.prototype.ja,er.prototype.send=er.prototype.ha,er.prototype.setWithCredentials=er.prototype.Oa,Fr.prototype.digest=Fr.prototype.l,Fr.prototype.reset=Fr.prototype.reset,Fr.prototype.update=Fr.prototype.j,Wr.prototype.add=Wr.prototype.add,Wr.prototype.multiply=Wr.prototype.R,Wr.prototype.modulo=Wr.prototype.gb,Wr.prototype.compare=Wr.prototype.X,Wr.prototype.toNumber=Wr.prototype.ea,Wr.prototype.toString=Wr.prototype.toString,Wr.prototype.getBits=Wr.prototype.D,Wr.fromNumber=Xr,Wr.fromString=function t(e,i){if(0==e.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==e.charAt(0))return Qr(t(e.substring(1),i));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xr(Math.pow(i,8)),r=qr,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),a=parseInt(e.substring(o,o+s),i);8>s?(s=Xr(Math.pow(i,s)),r=r.R(s).add(Xr(a))):r=(r=r.R(n)).add(Xr(a))}return r};Qt.createWebChannelTransport=function(){return new Pr},Qt.getStatEventTarget=function(){return Oi()},Qt.ErrorCode=Fi,Qt.EventType=Bi,Qt.Event=Ri,Qt.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qt.FetchXmlHttpFactory=Kn,Qt.WebChannel=Vi,Qt.XhrIo=er,Qt.Md5=Fr;var oo=Qt.Integer=Wr;const so="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ao.UNAUTHENTICATED=new ao(null),ao.GOOGLE_CREDENTIALS=new ao("google-credentials-uid"),ao.FIRST_PARTY=new ao("first-party-uid"),ao.MOCK_USER=new ao("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let lo="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new it("@firebase/firestore");function ho(t,...e){if(co.logLevel<=J.DEBUG){const i=e.map(fo);co.debug(`Firestore (${lo}): ${t}`,...i)}}function uo(t,...e){if(co.logLevel<=J.ERROR){const i=e.map(fo);co.error(`Firestore (${lo}): ${t}`,...i)}}function fo(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t="Unexpected state"){const e=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: `+t;throw uo(e),new Error(e)}function mo(t,e){t||po()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const go={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yo extends L{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ao.UNAUTHENTICATED)))}shutdown(){}}class xo{constructor(t){this.t=t,this.currentUser=ao.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let r=new vo;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vo,t.enqueueRetryable((()=>n(this.currentUser)))};const o=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},s=t=>{ho("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(ho("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vo)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ho("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(mo("string"==typeof e.accessToken),new bo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return mo(null===t||"string"==typeof t),new ao(t)}}class ko{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ao.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Io{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new ko(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(ao.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Eo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class To{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=t=>{null!=t.error&&ho("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.R;return this.R=t.token,ho("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{ho("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?n(t):ho("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(mo("string"==typeof t.token),this.R=t.token,new Eo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function No(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let i="";for(;i.length<20;){const n=No(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<e&&(i+=t.charAt(n[r]%62))}return i}}function Co(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t,e,i){void 0===e?e=0:e>t.length&&po(),void 0===i?i=t.length-e:i>t.length-e&&po(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===So.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof So?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),r=e.get(n);if(i<r)return-1;if(i>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ao extends So{construct(t,e,i){return new Ao(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new yo(go.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new Ao(e)}static emptyPath(){return new Ao([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(t){this.path=t}static fromPath(t){return new Ro(Ao.fromString(t))}static fromName(t){return new Ro(Ao.fromString(t).popFirst(5))}static empty(){return new Ro(Ao.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ao.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ao.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ro(new Ao(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}Lo.UNKNOWN_ID=-1;function Oo(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Po(t){return 0===t&&1/t==-1/0}Do.ae=-1;const Mo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zo=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Uo=zo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t,e){this.comparator=t,this.root=e||Bo.EMPTY}insert(t,e){return new jo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bo.BLACK,null,null))}remove(t){return new jo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fo(this.root,t,this.comparator,!0)}}class Fo{constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&n&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bo{constructor(t,e,i,n,r){this.key=t,this.value=e,this.color=null!=i?i:Bo.RED,this.left=null!=n?n:Bo.EMPTY,this.right=null!=r?r:Bo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,n,r){return new Bo(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const r=i(t,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===r?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Bo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return Bo.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw po();if(this.right.isRed())throw po();const t=this.left.check();if(t!==this.right.check())throw po();return t+(this.isRed()?0:1)}}Bo.EMPTY=null,Bo.RED=!0,Bo.BLACK=!1,Bo.EMPTY=new class{constructor(){this.size=0}get key(){throw po()}get value(){throw po()}get color(){throw po()}get left(){throw po()}get right(){throw po()}copy(t,e,i,n,r){return this}insert(t,e,i){return new Bo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo{constructor(t){this.comparator=t,this.data=new jo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ho(this.data.getIterator())}getIteratorFrom(t){return new Ho(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Wo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Wo(this.comparator);return e.data=t,e}}class Ho{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Vo("Invalid base64 string: "+t):t}}(t);return new Xo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new Xo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Co(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xo.EMPTY_BYTE_STRING=new Xo("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $o(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function qo(t){return"string"==typeof t?Xo.fromBase64String(t):Xo.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(t,e,i,n,r,o,s,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=l}}class Go{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Go("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Go&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new jo(Ro.comparator);new jo(Ro.comparator);new jo(Ro.comparator),new Wo(Ro.comparator);new Wo(Co);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yo,Qo;(Qo=Yo||(Yo={}))[Qo.OK=0]="OK",Qo[Qo.CANCELLED=1]="CANCELLED",Qo[Qo.UNKNOWN=2]="UNKNOWN",Qo[Qo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qo[Qo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qo[Qo.NOT_FOUND=5]="NOT_FOUND",Qo[Qo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qo[Qo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qo[Qo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qo[Qo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qo[Qo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qo[Qo.ABORTED=10]="ABORTED",Qo[Qo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qo[Qo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qo[Qo.INTERNAL=13]="INTERNAL",Qo[Qo.UNAVAILABLE=14]="UNAVAILABLE",Qo[Qo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new oo([4294967295,4294967295],0);Error;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt($o(t.integerValue));else if("doubleValue"in t){const i=$o(t.doubleValue);isNaN(i)?this.Et(e,13):(this.Et(e,15),Po(i)?e.dt(0):e.dt(i))}else if("timestampValue"in t){const i=t.timestampValue;this.Et(e,20),"string"==typeof i?e.At(i):(e.At(`${i.seconds||""}`),e.dt(i.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(qo(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.Et(e,45),e.dt(i.latitude||0),e.dt(i.longitude||0)}else"mapValue"in t?Jo(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):po()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const i=t.fields||{};this.Et(e,55);for(const t of Object.keys(i))this.Rt(t,e),this.It(i[t],e)}wt(t,e){const i=t.values||[];this.Et(e,50);for(const t of i)this.It(t,e)}gt(t,e){this.Et(e,37),Ro.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Zo.bt=new Zo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class ts{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new ts(t,ts.DEFAULT_COLLECTION_PERCENTILE,ts.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ts.DEFAULT_COLLECTION_PERCENTILE=10,ts.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ts.DEFAULT=new ts(41943040,ts.DEFAULT_COLLECTION_PERCENTILE,ts.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ts.DISABLED=new ts(-1,0,0);function es(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t,e,i=1e3,n=1.5,r=6e4){this.ii=t,this.timerId=e,this.So=i,this.bo=n,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),n=Math.max(0,e-i);n>0&&ho("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,n,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(t,e,i,n,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new vo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,i,n,r){const o=Date.now()+i,s=new ns(t,e,o,n,r);return s.start(i),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new yo(go.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rs(t,e){if(uo("AsyncQueue",`${e}: ${t}`),Oo(t))return new yo(go.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=ao.UNAUTHENTICATED,this.clientId=_o.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{ho("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(ho("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new yo(go.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=rs(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ss(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const as=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(t){var e,i;if(void 0===t.host){if(void 0!==t.ssl)throw new yo(go.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new yo(go.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,i,n){if(!0===e&&!0===n)throw new yo(go.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ss(null!==(i=t.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new yo(go.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new yo(go.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new yo(go.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,e.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,i}}class cs{constructor(t,e,i,n){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ls({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new yo(go.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new yo(go.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ls(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new wo;switch(t.type){case"firstParty":return new Io(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new yo(go.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=as.get(t);e&&(ho("ComponentProvider","Removing Datastore"),as.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new is(this,"async_queue_retry"),this.Xa=()=>{const t=es();t&&ho("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=es();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=es();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new vo;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Oo(t))throw t;ho("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;throw uo("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,i){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const n=ns.createAndSchedule(this,t,e,i,(t=>this.ru(t)));return this.ja.push(n),n}eu(){this.Ha&&po()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class us extends cs{constructor(t,e,i,n){super(t,e,i,n),this.type="firestore",this._queue=new hs,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ds(this),this._firestoreClient.terminate()}}function ds(t){var e,i,n;const r=t._freezeSettings(),o=(s=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",l=t._persistenceKey,new Ko(s,a,l,(c=r).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ss(c.experimentalLongPollingOptions),c.useFetchStreams));var s,a,l,c;t._firestoreClient=new os(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(i=r.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=r.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){lo=Dt,At(new X("firestore",((t,{instanceIdentifier:i,options:n})=>{const r=t.getProvider("app").getImmediate(),o=new us(new xo(t.getProvider("auth-internal")),new To(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new yo(go.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(t.options.projectId,e)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),o._setSettings(n),o}),"PUBLIC").setMultipleInstances(!0)),zt(so,"4.1.0",t),zt(so,"4.1.0","esm2017")}();var fs,ps,ms={formAuth:document.querySelector(".modal-form-auth"),inputAuthLogin:document.querySelector('[type="text"]'),inputAuthEmail:document.querySelector('[type="email"]'),inputAuthPassword:document.querySelector('[type="password"]'),submitBtn:document.querySelector(".sign-button-auth-submit"),signUp:document.querySelector("[sign-up]"),signIn:document.querySelector("[sign-in]"),modalAuth:document.querySelector("[data-modal]"),userNoneBtn:document.querySelector(".auth-logon-noneuser"),userNameBtn:document.querySelector(".auth-logon-isuser"),userNone:document.querySelector(".auth-logon-noneuser-text"),userName:document.querySelector(".auth-logon-isuser-text"),userLogout:document.querySelector(".auth-logout"),checkTheme:document.querySelector(".check-theme"),scrollUp:document.querySelector(".scroll-up"),burgerBtn:document.querySelector(".js-burger"),iconClose:document.querySelector(".close-menu"),iconBurger:document.querySelector(".open-menu"),mobileMenu:document.querySelector(".mobile-menu"),shoppingList:document.querySelector(".js-shopping-list"),homeLink:document.querySelector(".js-home-link"),headerCont:document.querySelector(".header-container")},gs={};function ys(t){e(gs).Notify.failure(`📌 ${t}`)}fs=void 0===t?"undefined"==typeof window?gs:window:t,ps=function(t){if(void 0===t&&void 0===t.document)return!1;var e,i,n,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",h="Warning",u="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",I="Hourglass",E="Circle",T="Arrows",N="Dots",_="Pulse",C="Custom",S="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",O="Circle",D="Arrows",P="Dots",M="Pulse",z={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},j=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},F=function(e){return e||(e="head"),null!==t.document[e]||(U('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},B=function(e,i){if(!F("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var n=t.document.createElement("style");n.id=i,n.innerHTML=e(),t.document.head.appendChild(n)}},W=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=e&&"[object Object]"===Object.prototype.toString.call(i[n])?W(t[n],i[n]):i[n])};i<arguments.length;i++)n(arguments[i]);return t},H=function(e){var i=t.document.createElement("div");return i.innerHTML=e,i.textContent||i.innerText||""},V=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(i,n,r,o){if(!F("body"))return!1;e||lt.Notify.init({});var s=W(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),e=W(!0,e,f)}var p=e[i.toLocaleLowerCase("en")];Y++,"string"!=typeof n&&(n="Notiflix "+i),e.plainText&&(n=H(n)),!e.plainText&&n.length>e.messageMaxLength&&(e=W(!0,e,{closeButton:!0,messageMaxLength:150}),n='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),n.length>e.messageMaxLength&&(n=n.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+Y,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+n+"</span>"+(e.closeButton?v:"");else{var b="";i===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===h?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===u&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+n+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+n+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,I,E=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},T=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(I)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){E();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),E();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var N=function(){k=setTimeout((function(){E()}),e.timeout),I=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};N(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(I)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),N()})))}}if(e.showOnlyTheLastOne&&0<Y)for(var _,C=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Y+"])"),S=0;S<C.length;S++)null!==(_=C[S]).parentNode&&_.parentNode.removeChild(_);e=W(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,n,r,o,s,l){if(!F("body"))return!1;i||lt.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var h={};"object"==typeof s?h=s:"object"==typeof l&&(h=l),c=W(!0,i,{}),i=W(!0,i,h)}var u=i[e.toLocaleLowerCase("en")];"string"!=typeof n&&(n="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),i.plainText&&(n=H(n),r=H(r),o=H(o)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>i.buttonMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonMaxLength&&(o=o.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=i.className,d.style.zIndex=i.zindex,d.style.borderRadius=i.borderRadius,d.style.fontFamily='"'+i.fontFamily+'", '+a,i.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===i.backOverlayClickToClose;i.backOverlay&&(v='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(u.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===f?(w=i.svgSize,x=u.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor)),d.innerHTML=v+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+k+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+u.titleColor+';">'+n+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+u.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+u.buttonBackground+"; color:"+u.buttonColor+';">'+o+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var I=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(n)}),i.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),I()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){I()}))}i=W(!0,i,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},it=function(e,i,r,o,s,l,c,h,u){if(!F("body"))return!1;n||lt.Confirm.init({});var d=W(!0,n,{});"object"!=typeof u||Array.isArray(u)||(n=W(!0,n,u)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof h&&(h=void 0),n.plainText&&(i=H(i),r=H(r),s=H(s),l=H(l)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>n.buttonsMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonsMaxLength&&(s=s.substring(0,n.buttonsMaxLength)+"..."),l.length>n.buttonsMaxLength&&(l=l.substring(0,n.buttonsMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=n.className+(n.cssAnimation?" nx-with-animation nx-"+n.cssAnimationStyle:""),f.style.zIndex=n.zindex,f.style.padding=n.distance,n.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof n.position?n.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+n.fontFamily+'", '+a;var m="";n.backOverlay&&(m='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+'" style="background:'+n.backOverlayColor+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+n.cancelButtonColor+";background:"+n.cancelButtonBackground+";font-size:"+n.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=o||"";var I=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+I+'" style="font-size:'+n.messageFontSize+";border-radius: "+n.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+n.className+'-content" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+"ms; border-radius: "+n.borderRadius+';"><div class="'+n.className+'-head"><h5 style="color:'+n.titleColor+";font-size:"+n.titleFontSize+';">'+i+'</h5><div style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+r+y+'</div></div><div class="'+n.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+n.okButtonColor+";background:"+n.okButtonBackground+";font-size:"+n.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var E=t.document.getElementById(f.id),T=t.document.getElementById("NXConfirmButtonOk"),N=t.document.getElementById("NXConfirmValidationInput");N&&(N.focus(),N.setSelectionRange(0,(N.value||"").length),N.addEventListener("keyup",(function(t){var i=t.target.value;e===b&&i!==v?(t.preventDefault(),N.classList.add("nx-validation-failure"),N.classList.remove("nx-validation-success")):(e===b&&(N.classList.remove("nx-validation-failure"),N.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&T.dispatchEvent(new Event("click")))}))),T.addEventListener("click",(function(t){if(e===b&&v&&N){if((N.value||"").toString()!==v)return N.focus(),N.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;N.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&N&&(k=N.value||""),c(k)),E.classList.add("nx-remove");var i=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(i))}),n.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof h&&(e===w&&N&&(k=N.value||""),h(k)),E.classList.add("nx-remove");var t=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(t))}),n.cssAnimationDuration)}))}n=W(!0,n,d)},nt=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,i,n,o,s){if(!F("body"))return!1;r||lt.Loading.init({});var l=W(!0,r,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof n&&!Array.isArray(n)){var c={};"object"==typeof i?c=i:"object"==typeof n&&(c=n),r=W(!0,r,c)}var h="";if("string"==typeof i&&0<i.length&&(h=i),o){var u="";0<(h=h.length>r.messageMaxLength?H(h).toString().substring(0,r.messageMaxLength)+"...":H(h).toString()).length&&(u='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+h+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=V(r.svgSize,r.svgColor);else if(e===I)d=X(r.svgSize,r.svgColor);else if(e===E)d=$(r.svgSize,r.svgColor);else if(e===T)d=q(r.svgSize,r.svgColor);else if(e===N)d=K(r.svgSize,r.svgColor);else if(e===_)d=G(r.svgSize,r.svgColor);else if(e===C&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===C&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===C&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,i){return t||(t="60px"),e||(e="#f8f8f8"),i||(i="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+i+'" stroke="'+i+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<h.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+u,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),s);r=W(!0,r,l)},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},st=0,at=function(e,i,n,r,s,l){var c;if(Array.isArray(n)){if(1>n.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;c=n}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,n)){if(1>n.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(n)}else{if("string"!=typeof n||1>(n||"").length||1===(n||"").length&&("#"===(n||"")[0]||"."===(n||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var h=t.document.querySelectorAll(n);if(1>h.length)return U('You called the "Notiflix.Block..." function with "'+n+'" selector, but there is no such element(s) in the document.'),!1;c=h}o||lt.Block.init({});var u=W(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),o=W(!0,o,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=z.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=c[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+z.ID+"]");if(1>x.length){var k="";i&&(k=i===L?X(o.svgSize,o.svgColor):i===O?$(o.svgSize,o.svgColor):i===D?q(o.svgSize,o.svgColor):i===P?K(o.svgSize,o.svgColor):i===M?G(o.svgSize,o.svgColor):V(o.svgSize,o.svgColor));var I='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",E="";0<f.length&&(f=f.length>o.messageMaxLength?H(f).substring(0,o.messageMaxLength)+"...":H(f),E='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),st++;var T=t.document.createElement("div");T.id=z.ID+"-"+st,T.className=p+(o.cssAnimation?" nx-with-animation":""),T.style.position=o.position,T.style.zIndex=o.zindex,T.style.background=o.backgroundColor,T.style.animationDuration=o.cssAnimationDuration+"ms",T.style.fontFamily='"'+o.fontFamily+'", '+a,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",o.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=I+E;var N,_=t.getComputedStyle(v).getPropertyValue("position"),C="string"==typeof _?_.toLocaleLowerCase("en"):"relative",S=Math.round(1.25*parseInt(o.svgSize))+40,A="";S>(v.offsetHeight||0)&&(A="min-height:"+S+"px;"),N=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",B=-1>=["absolute","relative","fixed","sticky"].indexOf(C);if(B||0<A.length){if(!F("head"))return!1;B&&(R="position:relative!important;");var J='<style id="Style-'+z.ID+"-"+st+'">'+N+"."+y+"{"+R+A+"}</style>",Y=t.document.createRange();Y.selectNode(t.document.head);var Q=Y.createContextualFragment(J);t.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(T)}}}else var Z=function(e){var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var n=e.getAttribute("id"),r=t.document.getElementById("Style-"+n);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(i)}),o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,i=0;i<t.length;i++)(e=t[i])&&(e.classList.add("nx-remove"),Z(e));else j("string"==typeof n?'"Notiflix.Block.remove();" function called with "'+n+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+n+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),o.cssAnimationDuration+300)},it=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+z.ID+"]"),tt(x));clearTimeout(it)}),l);o=W(!0,o,u)},lt={Notify:{init:function(t){e=W(!0,d,t),B(J,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=W(!0,e,t)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,i){Q(l,t,e,i)},failure:function(t,e,i){Q(c,t,e,i)},warning:function(t,e,i){Q(h,t,e,i)},info:function(t,e,i){Q(u,t,e,i)}},Report:{init:function(t){i=W(!0,y,t),B(Z,"NotiflixReportInternalCSS")},merge:function(t){return i?void(i=W(!0,i,t)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,i,n,r){tt(f,t,e,i,n,r)},failure:function(t,e,i,n,r){tt(p,t,e,i,n,r)},warning:function(t,e,i,n,r){tt(m,t,e,i,n,r)},info:function(t,e,i,n,r){tt(g,t,e,i,n,r)}},Confirm:{init:function(t){n=W(!0,x,t),B(et,"NotiflixConfirmInternalCSS")},merge:function(t){return n?void(n=W(!0,n,t)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,i,n,r,o,s){it(v,t,e,null,i,n,r,o,s)},ask:function(t,e,i,n,r,o,s,a){it(b,t,e,i,n,r,o,s,a)},prompt:function(t,e,i,n,r,o,s,a){it(w,t,e,i,n,r,o,s,a)}},Loading:{init:function(t){r=W(!0,A,t),B(nt,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=W(!0,r,t)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(I,t,e,!0,0)},circle:function(t,e){rt(E,t,e,!0,0)},arrows:function(t,e){rt(T,t,e,!0,0)},dots:function(t,e){rt(N,t,e,!0,0)},pulse:function(t,e){rt(_,t,e,!0,0)},custom:function(t,e){rt(C,t,e,!0,0)},notiflix:function(t,e){rt(S,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var i=t.document.getElementById(A.ID);if(i)if(0<e.length){e=e.length>r.messageMaxLength?H(e).substring(0,r.messageMaxLength)+"...":H(e);var n=i.getElementsByTagName("p")[0];if(n)n.innerHTML=e;else{var o=t.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=e,i.appendChild(o)}}else U("Where is the new message?")}(e)}},Block:{init:function(t){o=W(!0,z,t),B(ot,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=W(!0,o,t)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,i){at(!0,R,t,e,i)},hourglass:function(t,e,i){at(!0,L,t,e,i)},circle:function(t,e,i){at(!0,O,t,e,i)},arrows:function(t,e,i){at(!0,D,t,e,i)},dots:function(t,e,i){at(!0,P,t,e,i)},pulse:function(t,e,i){at(!0,M,t,e,i)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?W(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return ps(fs)})):"object"==typeof gs?gs=ps(fs):fs.Notiflix=ps(fs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
zt("firebase","10.1.0","app");function vs(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]])}return i}Object.create;Object.create;function bs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ws=bs,xs=new O("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ks=new it("@firebase/auth");function Is(t,...e){ks.logLevel<=J.ERROR&&ks.error(`Auth (${Dt}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t,...e){throw _s(t,...e)}function Ts(t,...e){return _s(t,...e)}function Ns(t,e,i){const n=Object.assign(Object.assign({},ws()),{[e]:i});return new O("auth","Firebase",n).create(e,{appName:t.name})}function _s(t,...e){if("string"!=typeof t){const i=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(i,...n)}return xs.create(t,...e)}function Cs(t,e,...i){if(!t)throw _s(e,...i)}function Ss(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Is(e),new Error(e)}function As(t,e){t||Ss(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Ls(){return"http:"===Os()||"https:"===Os()}function Os(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ls()||S()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(t,e){this.shortDelay=t,this.longDelay=e,As(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ds()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e){As(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ss("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ss("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ss("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},js=new Ps(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,i,n,r={}){return Ws(t,r,(async()=>{let r={},o={};n&&("GET"===e?o=n:r={body:JSON.stringify(n)});const s=U(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),zs.fetch()(Vs(t,t.config.apiHost,i,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ws(t,e,i){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Us),e);try{const e=new Xs(t),r=await Promise.race([i(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $s(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[i,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw $s(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===i)throw $s(t,"email-already-in-use",o);if("USER_DISABLED"===i)throw $s(t,"user-disabled",o);const a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Ns(t,a,s);Es(t,a)}}catch(e){if(e instanceof L)throw e;Es(t,"network-request-failed",{message:String(e)})}}async function Hs(t,e,i,n,r={}){const o=await Bs(t,e,i,n,r);return"mfaPendingCredential"in o&&Es(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Vs(t,e,i,n){const r=`${e}${i}?${n}`;return t.config.emulator?Ms(t.config,r):`${t.config.apiScheme}://${r}`}class Xs{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Ts(this.auth,"network-request-failed"))),js.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(t,e,i){const n={appName:t.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=Ts(t,e,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){return 1e3*Number(t)}function Gs(t){const[e,i,n]=t.split(".");if(void 0===e||void 0===i||void 0===n)return Is("JWT malformed, contained fewer than 3 sections"),null;try{const t=x(i);return t?JSON.parse(t):(Is("Failed to decode base64 JWT payload"),null)}catch(t){return Is("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Js(t,e,i=!1){if(i)return e;try{return await e}catch(e){throw e instanceof L&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ys{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t){var e;const i=t.auth,n=await t.getIdToken(),r=await Js(t,async function(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}(i,{idToken:n}));Cs(null==r?void 0:r.users.length,i,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map((t=>{var{providerId:e}=t,i=vs(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const a=(l=t.providerData,c=s,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const h=t.isAnonymous,u=!(t.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Qs(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Cs(t.idToken,"internal-error"),Cs(void 0!==t.idToken,"internal-error"),Cs(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Gs(t);return Cs(e,"internal-error"),Cs(void 0!==e.exp,"internal-error"),Cs(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return Cs(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:n,expiresIn:r}=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(t,e){const i=await Ws(t,{},(async()=>{const i=U({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:r}=t.config,o=Vs(t,n,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",zs.fetch()(o,{method:"POST",headers:s,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(t,e);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(t,e){const{refreshToken:i,accessToken:n,expirationTime:r}=e,o=new ta;return i&&(Cs("string"==typeof i,"internal-error",{appName:t}),o.refreshToken=i),n&&(Cs("string"==typeof n,"internal-error",{appName:t}),o.accessToken=n),r&&(Cs("number"==typeof r,"internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ta,this.toJSON())}_performRefresh(){return Ss("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e){Cs("string"==typeof t||void 0===t,"internal-error",{appName:e})}class ia{constructor(t){var{uid:e,auth:i,stsTokenManager:n}=t,r=vs(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ys(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Qs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Js(this,this.stsTokenManager.getToken(this.auth,t));return Cs(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const i=V(t),n=await i.getIdToken(e),r=Gs(n);Cs(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:n,authTime:qs(Ks(r.auth_time)),issuedAtTime:qs(Ks(r.iat)),expirationTime:qs(Ks(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=V(t);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Cs(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ia(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Cs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Zs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Js(this,async function(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,n,r,o,s,a,l,c;const h=null!==(i=e.displayName)&&void 0!==i?i:void 0,u=null!==(n=e.email)&&void 0!==n?n:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;Cs(v&&k,t,"internal-error");const I=ta.fromJSON(this.name,k);Cs("string"==typeof v,t,"internal-error"),ea(h,t.name),ea(u,t.name),Cs("boolean"==typeof b,t,"internal-error"),Cs("boolean"==typeof w,t,"internal-error"),ea(d,t.name),ea(f,t.name),ea(p,t.name),ea(m,t.name),ea(g,t.name),ea(y,t.name);const E=new ia({uid:v,auth:t,email:u,emailVerified:b,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(E.providerData=x.map((t=>Object.assign({},t)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(t,e,i=!1){const n=new ta;n.updateFromServerResponse(e);const r=new ia({uid:e.localId,auth:t,stsTokenManager:n,isAnonymous:i});return await Zs(r),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map;function ra(t){As(t instanceof Function,"Expected a class definition");let e=na.get(t);return e?(As(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,na.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}oa.type="NONE";const sa=oa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t,e,i){return`firebase:${t}:${e}:${i}`}class la{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=aa(this.userKey,n.apiKey,r),this.fullPersistenceKey=aa("persistence",n.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ia._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new la(ra(sa),t,i);const n=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=n[0]||ra(sa);const o=aa(i,t.config.apiKey,t.name);let s=null;for(const i of e)try{const e=await i._get(o);if(e){const n=ia._fromJSON(t,e);i!==r&&(s=n),r=i;break}}catch(t){}const a=n.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(o)}catch(t){}}))),new la(r,t,i)):new la(r,t,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ha(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ma(e))return"Blackberry";if(ga(e))return"Webos";if(ua(e))return"Safari";if((e.includes("chrome/")||da(e))&&!e.includes("edge/"))return"Chrome";if(pa(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(e);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function ha(t=C()){return/firefox\//i.test(t)}function ua(t=C()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function da(t=C()){return/crios\//i.test(t)}function fa(t=C()){return/iemobile/i.test(t)}function pa(t=C()){return/android/i.test(t)}function ma(t=C()){return/blackberry/i.test(t)}function ga(t=C()){return/webos/i.test(t)}function ya(t=C()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function va(){return A()&&10===document.documentMode}function ba(t=C()){return ya(t)||pa(t)||ga(t)||ma(t)||/windows phone/i.test(t)||fa(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wa(t,e=[]){let i;switch(t){case"Browser":i=ca(C());break;case"Worker":i=`${ca(C())}-${t}`;break;default:i=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Dt}/${n}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(t,e){return Bs(t,"GET","/v2/recaptchaConfig",Fs(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){return void 0!==t&&void 0!==t.enterprise}class Ia{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){return new Promise(((e,i)=>{const n=document.createElement("script");var r,o;n.setAttribute("src",t),n.onload=e,n.onerror=t=>{const e=Ts("internal-error");e.customData=t,i(e)},n.type="text/javascript",n.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(n)}))}function Ta(t){return`__${t}${Math.floor(1e6*Math.random())}`}class Na{constructor(t){this.type="recaptcha-enterprise",this.auth=Aa(t)}async verify(t="verify",e=!1){function i(e,i,n){const r=window.grecaptcha;ka(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{i(t)})).catch((()=>{i("NO_RECAPTCHA")}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,n)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,i)=>{xa(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const i=new Ia(n);return null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,e(i.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{i(t)}))}))})(this.auth).then((r=>{if(!e&&ka(window.grecaptcha))i(r,t,n);else{if("undefined"==typeof window)return void n(new Error("RecaptchaVerifier is only supported in browser"));Ea("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{i(r,t,n)})).catch((t=>{n(t)}))}})).catch((t=>{n(t)}))}))}}async function _a(t,e,i,n=!1){const r=new Na(t);let o;try{o=await r.verify(i)}catch(t){o=await r.verify(i,!0)}const s=Object.assign({},e);return n?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=e=>new Promise(((i,n)=>{try{i(t(e))}catch(t){n(t)}}));i.onAbort=e,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,i,n){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ra(this),this.idTokenSubscription=new Ra(this),this.beforeStateQueue=new Ca(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ra(e)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await la.create(this,t),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==o||!(null==s?void 0:s.user)||(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(t){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Cs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Zs(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?V(t):null;return e&&Cs(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Cs(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ra(t))}))}async initializeRecaptchaConfig(){const t=await xa(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Ia(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new Na(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new O("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged((()=>{i(),t()}),e)}}))}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return null===t?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ra(t)||this._popupRedirectResolver;Cs(e,this,"argument-error"),this.redirectPersistenceManager=await la.create(this,[ra(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,n){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Cs(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,i,n):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Cs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){ks.logLevel<=J.WARN&&ks.warn(`Auth (${Dt}): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}function Aa(t){return V(t)}class Ra{constructor(t){this.auth=t,this.observer=null,this.addObserver=B((t=>this.observer=t))}get next(){return Cs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t,e,i){const n=Aa(t);Cs(n._canInitEmulator,n,"emulator-config-failed"),Cs(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!!(null==i?void 0:i.disableWarnings),o=Oa(e),{host:s,port:a}=function(t){const e=Oa(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const t=r[1];return{host:t,port:Da(n.substr(t.length+1))}}{const[t,e]=n.split(":");return{host:t,port:Da(e)}}}(e),l=null===a?"":`:${a}`;n.config.emulator={url:`${o}//${s}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Oa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Da(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Pa{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ss("not implemented")}_getIdTokenResponse(t){return Ss("not implemented")}_linkToIdToken(t,e){return Ss("not implemented")}_getReauthenticationResolver(t){return Ss("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t,e){return Bs(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function za(t,e){return Hs(t,"POST","/v1/accounts:signInWithPassword",Fs(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua extends Pa{constructor(t,e,i,n=null){super("password",i),this._email=t,this._password=e,this._tenantId=n}static _fromEmailAndPassword(t,e){return new Ua(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new Ua(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await _a(t,i,"signInWithPassword");return za(t,e)}return za(t,i).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await _a(t,i,"signInWithPassword");return za(t,e)}return Promise.reject(e)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Hs(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}(t,{email:this._email,oobCode:this._password});default:Es(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ma(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Hs(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Es(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t,e){return Hs(t,"POST","/v1/accounts:signInWithIdp",Fs(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Fa(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Es("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:i,signInMethod:n}=e,r=vs(e,["providerId","signInMethod"]);if(!i||!n)return null;const o=new Fa(i,n);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){return ja(t,this.buildRequest())}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,ja(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ja(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=U(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa extends Pa{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Wa({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Wa({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Hs(t,"POST","/v1/accounts:signInWithPhoneNumber",Fs(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const i=await Hs(t,"POST","/v1/accounts:signInWithPhoneNumber",Fs(t,e));if(i.temporaryProof)throw $s(t,"account-exists-with-different-credential",i);return i}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Hs(t,"POST","/v1/accounts:signInWithPhoneNumber",Fs(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Ba)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:i,verificationCode:n}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:i,code:n}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:r}=t;return i||e||n||r?new Wa({verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){var e,i,n,r,o,s;const a=j(F(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(i=a.oobCode)&&void 0!==i?i:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);Cs(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(t){const e=function(t){const e=j(F(t)).link,i=e?j(F(e)).deep_link_id:null,n=j(F(t)).deep_link_id;return(n?j(F(n)).link:null)||n||i||e||t}(t);try{return new Ha(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(){this.providerId=Va.PROVIDER_ID}static credential(t,e){return Ua._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=Ha.parseLink(e);return Cs(i,"argument-error"),Ua._fromEmailAndCode(t,i.code,i.tenantId)}}Va.PROVIDER_ID="password",Va.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Xa{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa extends $a{constructor(){super("facebook.com")}static credential(t){return Fa._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qa.credentialFromTaggedObject(t)}static credentialFromError(t){return qa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return qa.credential(t.oauthAccessToken)}catch(t){return null}}}qa.FACEBOOK_SIGN_IN_METHOD="facebook.com",qa.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Fa._fromParams({providerId:Ka.PROVIDER_ID,signInMethod:Ka.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ka.credentialFromTaggedObject(t)}static credentialFromError(t){return Ka.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return Ka.credential(e,i)}catch(t){return null}}}Ka.GOOGLE_SIGN_IN_METHOD="google.com",Ka.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga extends $a{constructor(){super("github.com")}static credential(t){return Fa._fromParams({providerId:Ga.PROVIDER_ID,signInMethod:Ga.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ga.credentialFromTaggedObject(t)}static credentialFromError(t){return Ga.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ga.credential(t.oauthAccessToken)}catch(t){return null}}}Ga.GITHUB_SIGN_IN_METHOD="github.com",Ga.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja extends $a{constructor(){super("twitter.com")}static credential(t,e){return Fa._fromParams({providerId:Ja.PROVIDER_ID,signInMethod:Ja.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ja.credentialFromTaggedObject(t)}static credentialFromError(t){return Ja.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return Ja.credential(e,i)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ya(t,e){return Hs(t,"POST","/v1/accounts:signUp",Fs(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ja.TWITTER_SIGN_IN_METHOD="twitter.com",Ja.PROVIDER_ID="twitter.com";class Qa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,n=!1){const r=await ia._fromIdTokenResponse(t,i,n),o=Za(i);return new Qa({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const n=Za(i);return new Qa({user:t,providerId:n,_tokenResponse:i,operationType:e})}}function Za(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl extends L{constructor(t,e,i,n){var r;super(e.code,e.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,n){return new tl(t,e,i,n)}}function el(t,e,i,n){return("reauthenticate"===e?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw tl._fromErrorAndOperation(t,i,e,n);throw i}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t,e,i=!1){const n=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return Qa._forOperation(t,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nl(t,e,i=!1){const{auth:n}=t,r="reauthenticate";try{const o=await Js(t,el(n,r,e,t),i);Cs(o.idToken,n,"internal-error");const s=Gs(o.idToken);Cs(s,n,"internal-error");const{sub:a}=s;return Cs(t.uid===a,n,"user-mismatch"),Qa._forOperation(t,r,o)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Es(n,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t,e,i=!1){const n="signIn",r=await el(t,n,e),o=await Qa._fromIdTokenResponse(t,n,r);return i||await t._updateCurrentUser(o.user),o}async function ol(t,e){return rl(Aa(t),e)}async function sl(t,e,i){var n;const r=Aa(t),o={returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(n=r._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const t=await _a(r,o,"signUpPassword");s=Ya(r,t)}else s=Ya(r,o).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await _a(r,o,"signUpPassword");return Ya(r,t)}return Promise.reject(t)}));const a=await s.catch((t=>Promise.reject(t))),l=await Qa._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function al(t,e,i,n){return V(t).onAuthStateChanged(e,i,n)}new WeakMap;const ll="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends cl{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=C();return ua(t)||ya(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ba(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),n=this.localCache[e];i!==n&&t(e,n,i)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,i)=>{this.notifyListeners(t,i)}));const i=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(t.newValue!==n)null!==t.newValue?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!e)return}const n=()=>{const t=this.storage.getItem(i);(e||this.localCache[i]!==t)&&this.notifyListeners(i,t)},r=this.storage.getItem(i);va()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(n,10):n()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}hl.type="LOCAL";const ul=hl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends cl{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}dl.type="SESSION";const fl=dl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const i=new pl(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:n,data:r}=e.data,o=this.handlersMap[n];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const s=Array.from(o).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ml(t="",e=10){let i="";for(let t=0;t<e;t++)i+=Math.floor(10*Math.random());return t+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pl.receivers=[];class gl{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=ml("",20);n.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),i);o={messageChannel:n,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),n.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[n.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vl(){return void 0!==yl().WorkerGlobalScope&&"function"==typeof yl().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bl="firebaseLocalStorageDb",wl="firebaseLocalStorage",xl="fbase_key";class kl{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Il(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function El(){const t=indexedDB.open(bl,1);return new Promise(((e,i)=>{t.addEventListener("error",(()=>{i(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(wl,{keyPath:xl})}catch(t){i(t)}})),t.addEventListener("success",(async()=>{const i=t.result;i.objectStoreNames.contains(wl)?e(i):(i.close(),await function(){const t=indexedDB.deleteDatabase(bl);return new kl(t).toPromise()}(),e(await El()))}))}))}async function Tl(t,e,i){const n=Il(t,!0).put({[xl]:e,value:i});return new kl(n).toPromise()}function Nl(t,e){const i=Il(t,!0).delete(e);return new kl(i).toPromise()}class _l{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await El()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(vl()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new gl(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(t=i[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=i[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await El();return await Tl(t,ll,"1"),await Nl(t,ll),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((i=>Tl(i,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const i=Il(t,!1).get(e),n=await new kl(i).toPromise();return void 0===n?null:n.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Nl(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Il(t,!1).getAll();return new kl(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],i=new Set;for(const{fbase_key:n,value:r}of t)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),e.push(n));for(const t of Object.keys(this.localCache))this.localCache[t]&&!i.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}_l.type="LOCAL";const Cl=_l;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ta("rcb"),new Ps(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sl="recaptcha";async function Al(t,e,i){var n;const r=await i.verify();try{let o;if(Cs("string"==typeof r,t,"argument-error"),Cs(i.type===Sl,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){Cs("enroll"===e.type,t,"internal-error");const i=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await function(t,e){return Bs(t,"POST","/v2/accounts/mfaEnrollment:start",Fs(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{Cs("signin"===e.type,t,"internal-error");const i=(null===(n=o.multiFactorHint)||void 0===n?void 0:n.uid)||o.multiFactorUid;Cs(i,t,"missing-multi-factor-info");const s=await function(t,e){return Bs(t,"POST","/v2/accounts/mfaSignIn:start",Fs(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Bs(t,"POST","/v1/accounts:sendVerificationCode",Fs(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:r});return e}}finally{i._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(t){this.providerId=Rl.PROVIDER_ID,this.auth=Aa(t)}verifyPhoneNumber(t,e){return Al(this.auth,t,V(e))}static credential(t,e){return Wa._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Rl.credentialFromTaggedObject(e)}static credentialFromError(t){return Rl.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:i}=t;return e&&i?Wa._fromTokenResponse(e,i):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ll(t,e){return e?ra(e):(Cs(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rl.PROVIDER_ID="phone",Rl.PHONE_SIGN_IN_METHOD="phone";class Ol extends Pa{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ja(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ja(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ja(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Dl(t){return rl(t.auth,new Ol(t),t.bypassAuthState)}function Pl(t){const{auth:e,user:i}=t;return Cs(i,e,"internal-error"),nl(i,new Ol(t),t.bypassAuthState)}async function Ml(t){const{auth:e,user:i}=t;return Cs(i,e,"internal-error"),il(i,new Ol(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,i,n,r=!1){this.auth=t,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:n,tenantId:r,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Dl;case"linkViaPopup":case"linkViaRedirect":return Ml;case"reauthViaPopup":case"reauthViaRedirect":return Pl;default:Es(this.auth,"internal-error")}}resolve(t){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Ps(2e3,1e4);class jl extends zl{constructor(t,e,i,n,r){super(t,e,n,r),this.provider=i,this.authWindow=null,this.pollId=null,jl.currentPopupAction&&jl.currentPopupAction.cancel(),jl.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Cs(t,this.auth,"internal-error"),t}async onExecution(){As(1===this.filter.length,"Popup operations only handle one event");const t=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Ts(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Ts(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jl.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;(null===(i=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ts(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Ul.get())};t()}}jl.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fl="pendingRedirect",Bl=new Map;class Wl extends zl{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Bl.get(this.auth._key());if(!t){try{const e=await async function(t,e){const i=Xl(e),n=Vl(t);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Bl.set(this.auth._key(),t)}return this.bypassAuthState||Bl.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Hl(t,e){Bl.set(t._key(),e)}function Vl(t){return ra(t._redirectPersistence)}function Xl(t){return aa(Fl,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t,e,i=!1){const n=Aa(t),r=Ll(n,e),o=new Wl(n,r,i),s=await o.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}class ql{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gl(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!Gl(t)){const n=(null===(i=t.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";e.onError(Ts(this.auth,n))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kl(t))}saveEventToCache(t){this.cachedEventUids.add(Kl(t)),this.lastProcessedEventTime=Date.now()}}function Kl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Gl({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yl=/^https?/;async function Ql(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Bs(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Zl(t))return}catch(t){}Es(t,"unauthorized-domain")}function Zl(t){const e=Rs(),{protocol:i,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===n?"chrome-extension:"===i&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!Yl.test(i))return!1;if(Jl.test(t))return n===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new Ps(3e4,6e4);function ec(){const t=yl().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let ic=null;function nc(t){return ic=ic||function(t){return new Promise(((e,i)=>{var n,r,o;function s(){ec(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ec(),i(Ts(t,"network-request-failed"))},timeout:tc.get()})}if(null===(r=null===(n=yl().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=yl().gapi)||void 0===o?void 0:o.load)){const e=Ta("iframefcb");return yl()[e]=()=>{gapi.load?s():i(Ts(t,"network-request-failed"))},Ea(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>i(t)))}s()}})).catch((t=>{throw ic=null,t}))}(t),ic}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Ps(5e3,15e3),oc="__/auth/iframe",sc="emulator/auth/iframe",ac={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cc(t){const e=t.config;Cs(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?Ms(e,sc):`https://${t.config.authDomain}/${oc}`,n={apiKey:e.apiKey,appName:t.name,v:Dt},r=lc.get(t.config.apiHost);r&&(n.eid=r);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${i}?${U(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class uc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function dc(t,e,i,n=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hc),{width:n.toString(),height:r.toString(),top:o,left:s}),c=C().toLowerCase();i&&(a=da(c)?"_blank":i),ha(c)&&(e=e||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,i])=>`${t}${e}=${i},`),"");if(function(t=C()){var e;return ya(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const i=document.createElement("a");i.href=t,i.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new uc(null);const u=window.open(e||"",a,h);Cs(u,t,"popup-blocked");try{u.focus()}catch(t){}return new uc(u)}const fc="__/auth/handler",pc="emulator/auth/handler",mc=encodeURIComponent("fac");async function gc(t,e,i,n,r,o){Cs(t.config.authDomain,t,"auth-domain-config-required"),Cs(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:n,v:Dt,eventId:r};if(e instanceof Xa){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",P(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))s[t]=e}if(e instanceof $a){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const l=await t._getAppCheckToken(),c=l?`#${mc}=${encodeURIComponent(l)}`:"";return`${function({config:t}){return t.emulator?Ms(t,pc):`https://${t.authDomain}/${fc}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${U(a).slice(1)}${c}`}const yc="webStorageSupport";const vc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fl,this._completeRedirectFn=$l,this._overrideRedirectResult=Hl}async _openPopup(t,e,i,n){var r;As(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return dc(t,await gc(t,e,i,Rs(),n),ml())}async _openRedirect(t,e,i,n){await this._originValidation(t);return function(t){yl().location.href=t}(await gc(t,e,i,Rs(),n)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:i}=this.eventManagers[e];return t?Promise.resolve(t):(As(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch((()=>{delete this.eventManagers[e]})),i}async initAndGetManager(t){const e=await async function(t){const e=await nc(t),i=yl().gapi;return Cs(i,t,"internal-error"),e.open({where:document.body,url:cc(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ac,dontclear:!0},(e=>new Promise((async(i,n)=>{await e.restyle({setHideOnLeave:!1});const r=Ts(t,"network-request-failed"),o=yl().setTimeout((()=>{n(r)}),rc.get());function s(){yl().clearTimeout(o),i(e)}e.ping(s).then(s,(()=>{n(r)}))}))))}(t),i=new ql(t);return e.register("authEvent",(e=>{Cs(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(yc,{type:yc},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[yc];void 0!==r&&e(!!r),Es(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ql(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ba()||ua()||ya()}};var bc="@firebase/auth",wc="1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Cs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kc=N("authIdTokenMaxAge")||300;let Ic=null;var Ec;Ec="Browser",At(new X("auth",((t,{options:e})=>{const i=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=i.options;Cs(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:s,clientPlatform:Ec,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wa(Ec)},l=new Sa(i,n,r,a);return function(t,e){const i=(null==e?void 0:e.persistence)||[],n=(Array.isArray(i)?i:[i]).map(ra);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,null==e?void 0:e.popupRedirectResolver)}(l,e),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,i)=>{t.getProvider("auth-internal").initialize()}))),At(new X("auth-internal",(t=>{const e=Aa(t.getProvider("auth").getImmediate());return new xc(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),zt(bc,wc,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ec)),zt(bc,wc,"esm2017");var Tc={},Nc="Expected a function",_c=NaN,Cc="[object Symbol]",Sc=/^\s+|\s+$/g,Ac=/^[-+]0x[0-9a-f]+$/i,Rc=/^0b[01]+$/i,Lc=/^0o[0-7]+$/i,Oc=parseInt,Dc="object"==typeof t&&t&&t.Object===Object&&t,Pc="object"==typeof self&&self&&self.Object===Object&&self,Mc=Dc||Pc||Function("return this")(),zc=Object.prototype.toString,Uc=Math.max,jc=Math.min,Fc=function(){return Mc.Date.now()};function Bc(t,e,i){var n,r,o,s,a,l,c=0,h=!1,u=!1,d=!0;if("function"!=typeof t)throw new TypeError(Nc);function f(e){var i=n,o=r;return n=r=void 0,c=e,s=t.apply(o,i)}function p(t){var i=t-l;return void 0===l||i>=e||i<0||u&&t-c>=o}function m(){var t=Fc();if(p(t))return g(t);a=setTimeout(m,function(t){var i=e-(t-l);return u?jc(i,o-(t-c)):i}(t))}function g(t){return a=void 0,d&&n?f(t):(n=r=void 0,s)}function y(){var t=Fc(),i=p(t);if(n=arguments,r=this,l=t,i){if(void 0===a)return function(t){return c=t,a=setTimeout(m,e),h?f(t):s}(l);if(u)return a=setTimeout(m,e),f(l)}return void 0===a&&(a=setTimeout(m,e)),s}return e=Hc(e)||0,Wc(i)&&(h=!!i.leading,o=(u="maxWait"in i)?Uc(Hc(i.maxWait)||0,e):o,d="trailing"in i?!!i.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=r=a=void 0},y.flush=function(){return void 0===a?s:g(Fc())},y}function Wc(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Hc(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&zc.call(t)==Cc}(t))return _c;if(Wc(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Wc(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Sc,"");var i=Rc.test(t);return i||Lc.test(t)?Oc(t.slice(2),i?2:8):Ac.test(t)?_c:+t}Tc=function(t,e,i){var n=!0,r=!0;if("function"!=typeof t)throw new TypeError(Nc);return Wc(i)&&(n="leading"in i?!!i.leading:n,r="trailing"in i?!!i.trailing:r),Bc(t,e,{leading:n,maxWait:e,trailing:r})};const Vc=function(t=Mt()){const e=Rt(t,"auth");if(e.isInitialized())return e.getImmediate();const i=function(t,e){const i=Rt(t,"auth");if(i.isInitialized()){const t=i.getImmediate();if(M(i.getOptions(),null!=e?e:{}))return t;Es(t,"already-initialized")}return i.initialize({options:e})}(t,{popupRedirectResolver:vc,persistence:[Cl,ul,fl]}),n=N("authTokenSyncURL");if(n){const t=(r=n,async t=>{const e=t&&await t.getIdTokenResult(),i=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>kc)return;const n=null==e?void 0:e.token;Ic!==n&&(Ic=n,await fetch(r,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(t,e,i){V(t).beforeAuthStateChanged(e,i)}(i,t,(()=>t(i.currentUser))),function(t,e,i,n){V(t).onIdTokenChanged(e,i,n)}(i,(e=>t(e)))}var r;const o=E("auth");return o&&La(i,`http://${o}`),i}(Pt({apiKey:"AIzaSyCLvX8-Phpq_8ryBF-_fTZiLcLcJvYg6Ps",authDomain:"bookshelf-96ecb.firebaseapp.com",projectId:"bookshelf-96ecb",storageBucket:"bookshelf-96ecb.appspot.com",messagingSenderId:"83733055479",appId:"1:83733055479:web:3665918d4fcdd1c4d550f2",measurementId:"G-F45EYV47FF"}));console.log(Vc);const{formAuth:Xc,inputAuthLogin:$c,inputAuthEmail:qc,inputAuthPassword:Kc,submitBtn:Gc,signUp:Jc,signIn:Yc,userName:Qc,userNoneBtn:Zc,userNameBtn:th,modalAuth:eh,userLogout:ih,headerCont:nh}=ms,rh="authorization-form-state",oh={},sh="switch-in-up",ah="user-name";localStorage.setItem(sh,"up");const lh=localStorage.getItem(ah);lh?(Qc.textContent=lh,th.classList.remove("is-hidden"),Zc.classList.add("is-hidden")):(Qc.textContent="User",th.classList.add("is-hidden"),Zc.classList.remove("is-hidden")),function(){try{const t=JSON.parse(localStorage.getItem(rh));if(!t||!t.name||!t.email)return;$c.value=t.name,qc.value=t.email,Kc.value=t.password}catch{alert("Error in local storage! Empty key value.")}}(),Xc.addEventListener("input",Tc((function(t){oh[t.target.name]=t.target.value,oh.password="********",localStorage.setItem(rh,JSON.stringify(oh))}),500)),Xc.addEventListener("submit",(function(t){t.preventDefault();const e=JSON.parse(localStorage.getItem(rh)),i=localStorage.getItem(sh);if(!("up"!==i||e&&e.name&&e.email))return;if(!("in"!==i||e&&e.email))return;t.target.reset(),localStorage.removeItem(rh),eh.classList.toggle("is-hidden"),"up"===i&&(sl(Vc,e.email,e.password).then((t=>{const i=t.user;console.log(i);const n=e.name;Qc.textContent=n,localStorage.setItem(ah,n),th.classList.remove("is-hidden"),Zc.classList.add("is-hidden"),nh.classList.toggle("is-hidden")})).catch((t=>{ys(t.code)})),al(Vc,(t=>{if(console.log(t),t){const e=t.uid;console.log(e)}})));"in"===i&&((n=Vc,r=e.email,o=e.password,ol(V(n),Va.credential(r,o))).then((t=>{const i=t.user;console.log(i);const n=e.email;Qc.textContent=n,localStorage.setItem(ah,n),th.classList.remove("is-hidden"),Zc.classList.add("is-hidden"),nh.classList.toggle("is-hidden")})).catch((t=>{const e=t.code,i=t.message;console.log(e),console.log(i),ys(e)})),al(Vc,(t=>{if(console.log(t),t){const e=t.uid;console.log(e)}})));var n,r,o;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})),ih.addEventListener("click",(()=>{localStorage.removeItem(ah),Qc.textContent="User",th.classList.add("is-hidden"),Zc.classList.remove("is-hidden")})),(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(e){localStorage.getItem(ah)&&t.modal.classList.contains("is-hidden")||(t.modal.classList.toggle("is-hidden"),nh.classList.toggle("is-hidden"))}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})(),Jc.addEventListener("click",(()=>{"Sign In"!==Gc.textContent&&(localStorage.setItem(sh,"up"),$c.classList.remove("is-hidden"),Gc.textContent="Sign up")})),Yc.addEventListener("click",(()=>{"Sign Up"!==Gc.textContent&&(localStorage.setItem(sh,"in"),$c.classList.add("is-hidden"),Gc.textContent="Sign in")}));const ch=document.querySelector(".check-theme");function hh(){"dark"===localStorage.getItem("theme")?(document.querySelector("body").classList.add("dark"),document.querySelector("body").classList.remove("light"),ch.checked=!0):(document.querySelector("body").classList.remove("dark"),document.querySelector("body").classList.add("light"),ch.checked=!1)}ch.addEventListener("click",(()=>{"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),hh()})),hh();const{scrollUp:uh}=ms;uh.addEventListener("click",(function(){window.scroll({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>200?uh.classList.remove("is-hidden"):uh.classList.add("is-hidden")}));
//# sourceMappingURL=index.203c1782.js.map
