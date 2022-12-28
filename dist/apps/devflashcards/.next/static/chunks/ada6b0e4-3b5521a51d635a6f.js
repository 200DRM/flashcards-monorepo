"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{9931:function(e,t,s){s.d(t,{PL:function(){return nj},ad:function(){return nL},hJ:function(){return nT}});var n,r,i=s(6327),a=s(6387),o=s(8207),l=s(3395),u=s(5146);s(3542);let h="@firebase/firestore";/**
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
 */ class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
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
 */ let d="9.15.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let s=t.map(v);f.debug(`Firestore (${d}): ${e}`,...s)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let s=t.map(v);f.error(`Firestore (${d}): ${e}`,...s)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let s=t.map(v);f.warn(`Firestore (${d}): ${e}`,...s)}}function v(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
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
 */ function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
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
 */ let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */ class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */ class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i,n=e=>this.i!==s?(s=this.i,t(e)):Promise.resolve(),r=new C;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new C,e.enqueueRetryable(()=>n(this.currentUser))};let i=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new C)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class N{constructor(e,t,s,n){this.h=e,this.l=t,this.m=s,this.g=n,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||w(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class _{constructor(e,t,s,n){this.h=e,this.l=t,this.m=s,this.g=n}getToken(){return Promise.resolve(new N(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let s=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let s=e.token!==this.A;return this.A=e.token,g("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>s(t))};let n=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?n(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||w(),this.A=e.token,new D(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */ class L{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,s="";for(;s.length<20;){let n=/**
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
 */ function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),s=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(s);else for(let n=0;n<e;n++)s[n]=Math.floor(256*Math.random());return s}(40);for(let r=0;r<n.length;++r)s.length<20&&n[r]<t&&(s+=e.charAt(n[r]%e.length))}return s}}function R(e,t){return e<t?-1:e>t?1:0}function x(e,t,s){return e.length===t.length&&e.every((e,n)=>s(e,t[n]))}/**
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
 */ class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new V(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */ class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new V(0,0))}static max(){return new F(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */ class O{constructor(e,t,s){void 0===t?t=0:t>e.length&&w(),void 0===s?s=e.length-t:s>e.length-t&&w(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return 0===O.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof O?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let s=Math.min(e.length,t.length);for(let n=0;n<s;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends O{construct(e,t,s){return new M(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let s of e){if(s.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(e=>e.length>0))}return new M(t)}static emptyPath(){return new M([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends O{construct(e,t,s){return new P(e,t,s)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(e){let t=[],s="",n=0,r=()=>{if(0===s.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""},i=!1;for(;n<e.length;){let a=e[n];if("\\"===a){if(n+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[n+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=o,n+=2}else"`"===a?(i=!i,n++):"."!==a||i?(s+=a,n++):(r(),n++)}if(r(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new P(t)}static emptyPath(){return new P([])}}/**
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
 */ class q{constructor(e){this.path=e}static fromPath(e){return new q(M.fromString(e))}static fromName(e){return new q(M.fromString(e).popFirst(5))}static empty(){return new q(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===M.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new M(e.slice()))}}class B{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new B(F.min(),q.empty(),-1)}static max(){return new B(F.max(),q.empty(),-1)}}class K{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */ async function Q(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
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
 */ class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(s,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(s,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof z?t:z.resolve(t)}catch(s){return z.reject(s)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let n=0,r=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++r,i&&r===n&&t()},e=>s(e))}),i=!0,r===n&&t()})}static or(e){let t=z.resolve(!1);for(let s of e)t=t.next(e=>e?z.resolve(e):s());return t}static forEach(e,t){let s=[];return e.forEach((e,n)=>{s.push(t.call(this,e,n))}),this.waitFor(s)}static mapArray(e,t){return new z((s,n)=>{let r=e.length,i=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===r&&s(i)},e=>n(e))}})}static doWhile(e,t){return new z((s,n)=>{let r=()=>{!0===e()?t().next(()=>{r()},n):s()};r()})}}function G(e){return"IndexedDbTransactionError"===e.name}/**
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
 */ class ${constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}$.at=-1;/**
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
 */ class j{constructor(e,t,s,n,r,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=n,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class W{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new W("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof W&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */ function H(e){let t=0;for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&t++;return t}function Y(e,t){for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&t(s,e[s])}function X(e){return 0===e&&1/e==-1/0}/**
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
 */ class J{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new J(t)}static fromUint8Array(e){let t=function(e){let t="";for(let s=0;s<e.length;++s)t+=String.fromCharCode(e[s]);return t}(e);return new J(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");let Z=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(e){if(e||w(),"string"==typeof e){let t=0,s=Z.exec(e);if(s||w(),s[1]){let n=s[1];t=Number(n=(n+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(e.seconds),nanos:et(e.nanos)}}function et(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function es(e){return"string"==typeof e?J.fromBase64String(e):J.fromUint8Array(e)}/**
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
 */ function en(e){var t,s;return"server_timestamp"===(null===(s=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===s?void 0:s.stringValue)}function er(e){let t=ee(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
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
 */ let ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ea(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?en(e)?4:ev(e)?9007199254740991:10:w()}function eo(e,t){if(e===t)return!0;let s=ea(e);if(s!==ea(t))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return er(e).isEqual(er(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let s=ee(e.timestampValue),n=ee(t.timestampValue);return s.seconds===n.seconds&&s.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return es(e.bytesValue).isEqual(es(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return et(e.geoPointValue.latitude)===et(t.geoPointValue.latitude)&&et(e.geoPointValue.longitude)===et(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return et(e.integerValue)===et(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let s=et(e.doubleValue),n=et(t.doubleValue);return s===n?X(s)===X(n):isNaN(s)&&isNaN(n)}return!1}(e,t);case 9:return x(e.arrayValue.values||[],t.arrayValue.values||[],eo);case 10:return function(e,t){let s=e.mapValue.fields||{},n=t.mapValue.fields||{};if(H(s)!==H(n))return!1;for(let r in s)if(s.hasOwnProperty(r)&&(void 0===n[r]||!eo(s[r],n[r])))return!1;return!0}(e,t);default:return w()}}function el(e,t){return void 0!==(e.values||[]).find(e=>eo(e,t))}function eu(e,t){if(e===t)return 0;let s=ea(e),n=ea(t);if(s!==n)return R(s,n);switch(s){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){let s=et(e.integerValue||e.doubleValue),n=et(t.integerValue||t.doubleValue);return s<n?-1:s>n?1:s===n?0:isNaN(s)?isNaN(n)?0:-1:1}(e,t);case 3:return eh(e.timestampValue,t.timestampValue);case 4:return eh(er(e),er(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){let s=es(e),n=es(t);return s.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let s=e.split("/"),n=t.split("/");for(let r=0;r<s.length&&r<n.length;r++){let i=R(s[r],n[r]);if(0!==i)return i}return R(s.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let s=R(et(e.latitude),et(t.latitude));return 0!==s?s:R(et(e.longitude),et(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let s=e.values||[],n=t.values||[];for(let r=0;r<s.length&&r<n.length;++r){let i=eu(s[r],n[r]);if(i)return i}return R(s.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ei.mapValue&&t===ei.mapValue)return 0;if(e===ei.mapValue)return 1;if(t===ei.mapValue)return -1;let s=e.fields||{},n=Object.keys(s),r=t.fields||{},i=Object.keys(r);n.sort(),i.sort();for(let a=0;a<n.length&&a<i.length;++a){let o=R(n[a],i[a]);if(0!==o)return o;let l=eu(s[n[a]],r[i[a]]);if(0!==l)return l}return R(n.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function eh(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);let s=ee(e),n=ee(t),r=R(s.seconds,n.seconds);return 0!==r?r:R(s.nanos,n.nanos)}function ec(e){var t,s;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ee(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?es(e.bytesValue).toBase64():"referenceValue"in e?(s=e.referenceValue,q.fromName(s).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",s=!0;for(let n of e.values||[])s?s=!1:t+=",",t+=ec(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),s="{",n=!0;for(let r of t)n?n=!1:s+=",",s+=`${r}:${ec(e.fields[r])}`;return s+"}"}(e.mapValue):w()}function ed(e){return!!e&&"integerValue"in e}function ef(e){return!!e&&"arrayValue"in e}function em(e){return!!e&&"nullValue"in e}function eg(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ep(e){return!!e&&"mapValue"in e}function ey(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Y(e.mapValue.fields,(e,s)=>t.mapValue.fields[e]=ey(s)),t}if(e.arrayValue){let s={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)s.arrayValue.values[n]=ey(e.arrayValue.values[n]);return s}return Object.assign({},e)}function ev(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */ class ew{constructor(e,t){this.position=e,this.inclusive=t}}function eE(e,t,s){let n=0;for(let r=0;r<e.position.length;r++){let i=t[r],a=e.position[r];if(n=i.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),s.key):eu(a,s.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function eT(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let s=0;s<e.position.length;s++)if(!eo(e.position[s],t.position[s]))return!1;return!0}/**
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
 */ class eC{}class eI extends eC{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,s):new ek(e,t,s):"array-contains"===t?new eb(e,s):"in"===t?new eL(e,s):"not-in"===t?new eR(e,s):"array-contains-any"===t?new ex(e,s):new eI(e,t,s)}static createKeyFieldInFilter(e,t,s){return"in"===t?new eN(e,s):new e_(e,s)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eu(t,this.value)):null!==t&&ea(this.value)===ea(t)&&this.matchesComparison(eu(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eS extends eC{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new eS(e,t)}matches(e){return eA(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eA(e){return"and"===e.op}class ek extends eI{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class eN extends eI{constructor(e,t){super(e,"in",t),this.keys=eD("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e_ extends eI{constructor(e,t){super(e,"not-in",t),this.keys=eD("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eD(e,t){var s;return((null===(s=t.arrayValue)||void 0===s?void 0:s.values)||[]).map(e=>q.fromName(e.referenceValue))}class eb extends eI{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ef(t)&&el(t.arrayValue,this.value)}}class eL extends eI{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&el(this.value.arrayValue,t)}}class eR extends eI{constructor(e,t){super(e,"not-in",t)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!el(this.value.arrayValue,t)}}class ex extends eI{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>el(this.value.arrayValue,e))}}/**
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
 */ class eV{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */ class eF{constructor(e,t){this.comparator=e,this.root=t||eM.EMPTY}insert(e,t){return new eF(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eM.BLACK,null,null))}remove(e){return new eF(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eM.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let s=this.comparator(e,t.key);if(0===s)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){let n=this.comparator(e,s.key);if(0===n)return t+s.left.size;n<0?s=s.left:(t+=s.left.size+1,s=s.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){let e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eO(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eO(this.root,e,this.comparator,!1)}getReverseIterator(){return new eO(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eO(this.root,e,this.comparator,!0)}}class eO{constructor(e,t,s,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eM{constructor(e,t,s,n,r){this.key=e,this.value=t,this.color=null!=s?s:eM.RED,this.left=null!=n?n:eM.EMPTY,this.right=null!=r?r:eM.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,n,r){return new eM(null!=e?e:this.key,null!=t?t:this.value,null!=s?s:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let n=this,r=s(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,s),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,s))).fixUp()}removeMin(){if(this.left.isEmpty())return eM.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let s,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return eM.EMPTY;s=n.right.min(),n=n.copy(s.key,s.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eM.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eM.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}eM.EMPTY=null,eM.RED=!0,eM.BLACK=!1,eM.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,s,n,r){return this}insert(e,t,s){return new eM(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */ class eU{constructor(e){this.comparator=e,this.data=new eF(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){let s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){let n=s.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let s;for(s=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eP(this.data.getIterator())}getIteratorFrom(e){return new eP(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eU)||this.size!==e.size)return!1;let t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){let n=t.getNext().key,r=s.getNext().key;if(0!==this.comparator(n,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eU(this.comparator);return t.data=e,t}}class eP{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */ class eq{constructor(e){this.fields=e,e.sort(P.comparator)}static empty(){return new eq([])}unionWith(e){let t=new eU(P.comparator);for(let s of this.fields)t=t.add(s);for(let n of e)t=t.add(n);return new eq(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return x(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */ class eB{constructor(e){this.value=e}static empty(){return new eB({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(!ep(t=(t.mapValue.fields||{})[e.get(s)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ey(t)}setAll(e){let t=P.emptyPath(),s={},n=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let i=this.getFieldsMap(t);this.applyChanges(i,s,n),s={},n=[],t=r.popLast()}e?s[r.lastSegment()]=ey(e):n.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,s,n)}delete(e){let t=this.field(e.popLast());ep(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let n=t.mapValue.fields[e.get(s)];ep(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,s){for(let n of(Y(t,(t,s)=>e[t]=s),s))delete e[n]}clone(){return new eB(ey(this.value))}}/**
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
 */ class eK{constructor(e,t,s,n,r,i,a){this.key=e,this.documentType=t,this.version=s,this.readTime=n,this.createTime=r,this.data=i,this.documentState=a}static newInvalidDocument(e){return new eK(e,0,F.min(),F.min(),F.min(),eB.empty(),0)}static newFoundDocument(e,t,s,n){return new eK(e,1,t,F.min(),s,n,0)}static newNoDocument(e,t){return new eK(e,2,t,F.min(),F.min(),eB.empty(),0)}static newUnknownDocument(e,t){return new eK(e,3,t,F.min(),F.min(),eB.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(F.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eB.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eB.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eK&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eK(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */ class eQ{constructor(e,t=null,s=[],n=[],r=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=n,this.limit=r,this.startAt=i,this.endAt=a,this.ft=null}}function ez(e,t=null,s=[],n=[],r=null,i=null,a=null){return new eQ(e,t,s,n,r,i,a)}function eG(e){let t=e;if(null===t.ft){let s=t.path.canonicalString();null!==t.collectionGroup&&(s+="|cg:"+t.collectionGroup),s+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eI)return t.field.canonicalString()+t.op.toString()+ec(t.value);{let s=t.filters.map(t=>e(t)).join(",");return`${t.op}(${s})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(s+="|l:"+t.limit),t.startAt&&(s+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ec(e)).join(",")),t.endAt&&(s+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ec(e)).join(",")),t.ft=s}return t.ft}function e$(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++){var n,r;if(n=e.orderBy[s],r=t.orderBy[s],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(!function e(t,s){return t instanceof eI?s instanceof eI&&t.op===s.op&&t.field.isEqual(s.field)&&eo(t.value,s.value):t instanceof eS?s instanceof eS&&t.op===s.op&&t.filters.length===s.filters.length&&t.filters.reduce((t,n,r)=>t&&e(n,s.filters[r]),!0):void w()}(e.filters[i],t.filters[i]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eT(e.startAt,t.startAt)&&eT(e.endAt,t.endAt)}function ej(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */ class eW{constructor(e,t=null,s=[],n=[],r=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=n,this.limit=r,this.limitType=i,this.startAt=a,this.endAt=o,this.dt=null,this._t=null,this.startAt,this.endAt}}function eH(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function eY(e){let t=e;if(null===t.dt){t.dt=[];let s=function(e){for(let t of e.filters){let s=t.getFirstInequalityField();if(null!==s)return s}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==s&&null===n)s.isKeyField()||t.dt.push(new eV(s)),t.dt.push(new eV(P.keyField(),"asc"));else{let r=!1;for(let i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){let a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new eV(P.keyField(),a))}}}return t.dt}function eX(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=ez(t.path,t.collectionGroup,eY(t),t.filters,t.limit,t.startAt,t.endAt);else{let s=[];for(let n of eY(t)){let r="desc"===n.dir?"asc":"desc";s.push(new eV(n.field,r))}let i=t.endAt?new ew(t.endAt.position,t.endAt.inclusive):null,a=t.startAt?new ew(t.startAt.position,t.startAt.inclusive):null;t._t=ez(t.path,t.collectionGroup,s,t.filters,t.limit,i,a)}}return t._t}function eJ(e,t,s){return new eW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,s,e.startAt,e.endAt)}function eZ(e,t){return e$(eX(e),eX(t))&&e.limitType===t.limitType}function e0(e){return`${eG(eX(e))}|lt:${e.limitType}`}function e1(e){var t;let s;return`Query(target=${s=(t=eX(e)).path.canonicalString(),null!==t.collectionGroup&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eI?`${t.field.canonicalString()} ${t.op} ${ec(t.value)}`:t instanceof eS?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(s+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ec(e)).join(",")),t.endAt&&(s+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ec(e)).join(",")),`Target(${s})`}; limitType=${e.limitType})`}function e2(e,t){return t.isFoundDocument()&&function(e,t){let s=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(s):q.isDocumentKey(e.path)?e.path.isEqual(s):e.path.isImmediateParentOf(s)}(e,t)&&function(e,t){for(let s of eY(e))if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1;return!0}(e,t)&&function(e,t){for(let s of e.filters)if(!s.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,s){let n=eE(e,t,s);return e.inclusive?n<=0:n<0}(e.startAt,eY(e),t))&&(!e.endAt||!!function(e,t,s){let n=eE(e,t,s);return e.inclusive?n>=0:n>0}(e.endAt,eY(e),t))}function e4(e){return(t,s)=>{let n=!1;for(let r of eY(e)){let i=function(e,t,s){let n=e.field.isKeyField()?q.comparator(t.key,s.key):function(e,t,s){let n=t.data.field(e),r=s.data.field(e);return null!==n&&null!==r?eu(n,r):w()}(e.field,t,s);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return w()}}(r,t,s);if(0!==i)return i;n=n||r.field.isKeyField()}return 0}}/**
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
 */ class e3{constructor(){this._=void 0}}class e9 extends e3{}class e5 extends e3{constructor(e){super(),this.elements=e}}function e6(e,t){let s=ts(t);for(let n of e.elements)s.some(e=>eo(e,n))||s.push(n);return{arrayValue:{values:s}}}class e8 extends e3{constructor(e){super(),this.elements=e}}function e7(e,t){let s=ts(t);for(let n of e.elements)s=s.filter(e=>!eo(e,n));return{arrayValue:{values:s}}}class te extends e3{constructor(e,t){super(),this.yt=e,this.gt=t}}function tt(e){return et(e.integerValue||e.doubleValue)}function ts(e){return ef(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ti{}function ta(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tm(e.key,tn.none()):new tu(e.key,e.data,tn.none());{let s=e.data,n=eB.empty(),r=new eU(P.comparator);for(let i of t.fields)if(!r.has(i)){let a=s.field(i);null===a&&i.length>1&&(i=i.popLast(),a=s.field(i)),null===a?n.delete(i):n.set(i,a),r=r.add(i)}return new th(e.key,n,new eq(r.toArray()),tn.none())}}function to(e,t,s,n){return e instanceof tu?function(e,t,s,n){if(!tr(e.precondition,t))return s;let r=e.value.clone(),i=tf(e.fieldTransforms,n,t);return r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,s,n):e instanceof th?function(e,t,s,n){if(!tr(e.precondition,t))return s;let r=tf(e.fieldTransforms,n,t),i=t.data;return(i.setAll(tc(e)),i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===s)?null:s.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,s,n):tr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):s}function tl(e,t){var s,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(s=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===s&&void 0===n||!(!s||!n)&&x(s,n,(e,t)=>{var s,n;return e.field.isEqual(t.field)&&(s=e.transform,n=t.transform,s instanceof e5&&n instanceof e5||s instanceof e8&&n instanceof e8?x(s.elements,n.elements,eo):s instanceof te&&n instanceof te?eo(s.gt,n.gt):s instanceof e9&&n instanceof e9)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tu extends ti{constructor(e,t,s,n=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class th extends ti{constructor(e,t,s,n,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=n,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function tc(e){let t=new Map;return e.fieldMask.fields.forEach(s=>{if(!s.isEmpty()){let n=e.data.field(s);t.set(s,n)}}),t}function td(e,t,s){var n;let r=new Map;e.length===s.length||w();for(let i=0;i<s.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);r.set(a.field,(n=s[i],o instanceof e5?e6(o,l):o instanceof e8?e7(o,l):n))}return r}function tf(e,t,s){let n=new Map;for(let r of e){let i=r.transform,a=s.data.field(r.field);n.set(r.field,i instanceof e9?function(e,t){let s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(s.fields.__previous_value__=t),{mapValue:s}}(t,a):i instanceof e5?e6(i,a):i instanceof e8?e7(i,a):function(e,t){var s,n;let r=(s=e,n=t,s instanceof te?ed(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),i=tt(r)+tt(e.gt);return ed(r)&&ed(e.gt)?{integerValue:""+i}:/**
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
 */ function(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:X(t)?"-0":t}}(e.yt,i)}(i,a))}return n}class tm extends ti{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */ class tg{constructor(e){this.count=e}}function tp(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case n.OK:return E.OK;case n.CANCELLED:return E.CANCELLED;case n.UNKNOWN:return E.UNKNOWN;case n.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case n.INTERNAL:return E.INTERNAL;case n.UNAVAILABLE:return E.UNAVAILABLE;case n.UNAUTHENTICATED:return E.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case n.NOT_FOUND:return E.NOT_FOUND;case n.ALREADY_EXISTS:return E.ALREADY_EXISTS;case n.PERMISSION_DENIED:return E.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case n.ABORTED:return E.ABORTED;case n.OUT_OF_RANGE:return E.OUT_OF_RANGE;case n.UNIMPLEMENTED:return E.UNIMPLEMENTED;case n.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(r=n||(n={}))[r.OK=0]="OK",r[r.CANCELLED=1]="CANCELLED",r[r.UNKNOWN=2]="UNKNOWN",r[r.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",r[r.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",r[r.NOT_FOUND=5]="NOT_FOUND",r[r.ALREADY_EXISTS=6]="ALREADY_EXISTS",r[r.PERMISSION_DENIED=7]="PERMISSION_DENIED",r[r.UNAUTHENTICATED=16]="UNAUTHENTICATED",r[r.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",r[r.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",r[r.ABORTED=10]="ABORTED",r[r.OUT_OF_RANGE=11]="OUT_OF_RANGE",r[r.UNIMPLEMENTED=12]="UNIMPLEMENTED",r[r.INTERNAL=13]="INTERNAL",r[r.UNAVAILABLE=14]="UNAVAILABLE",r[r.DATA_LOSS=15]="DATA_LOSS";/**
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
 */ class ty{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),s=this.inner[t];if(void 0!==s){for(let[n,r]of s)if(this.equalsFn(n,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let s=this.mapKeyFn(e),n=this.inner[s];if(void 0===n)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),s=this.inner[t];if(void 0===s)return!1;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return 1===s.length?delete this.inner[t]:s.splice(n,1),this.innerSize--,!0;return!1}forEach(e){Y(this.inner,(t,s)=>{for(let[n,r]of s)e(n,r)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
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
 */ let tv=new eF(q.comparator),tw=new eF(q.comparator);function tE(...e){let t=tw;for(let s of e)t=t.insert(s.key,s);return t}function tT(){return new ty(e=>e.toString(),(e,t)=>e.isEqual(t))}new eF(q.comparator);let tC=new eU(q.comparator);function tI(...e){let t=tC;for(let s of e)t=t.add(s);return t}let tS=new eU(R);/**
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
 */ class tA{constructor(e,t,s,n,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=n,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){let n=new Map;return n.set(e,tk.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new tA(F.min(),n,tS,tv,tI())}}class tk{constructor(e,t,s,n,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=n,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tk(s,t,tI(),tI(),tI())}}/**
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
 */ class tN{constructor(e,t,s,n){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=n}}class t_{constructor(e,t){this.targetId=e,this.Et=t}}class tD{constructor(e,t,s=J.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=n}}class tb{constructor(){this.At=0,this.Rt=tx(),this.bt=J.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=tI(),t=tI(),s=tI();return this.Rt.forEach((n,r)=>{switch(r){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:s=s.add(n);break;default:w()}}),new tk(this.bt,this.Pt,e,t,s)}xt(){this.vt=!1,this.Rt=tx()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class tL{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=tv,this.qt=tR(),this.Ut=new eU(R)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let s of e.removedTargetIds)this.Qt(s,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{let s=this.Wt(t);switch(e.state){case 0:this.zt(t)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,s)=>{this.zt(s)&&t(s)})}Jt(e){let t=e.targetId,s=e.Et.count,n=this.Yt(t);if(n){let r=n.target;if(ej(r)){if(0===s){let i=new q(r.path);this.Qt(t,i,eK.newNoDocument(i,F.min()))}else 1===s||w()}else this.Xt(t)!==s&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){let t=new Map;this.Bt.forEach((s,n)=>{let r=this.Yt(n);if(r){if(s.current&&ej(r.target)){let i=new q(r.target.path);null!==this.Lt.get(i)||this.te(n,i)||this.Qt(n,i,eK.newNoDocument(i,e))}s.St&&(t.set(n,s.Ct()),s.xt())}});let s=tI();this.qt.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(n=!1,!1)}),n&&(s=s.add(e))}),this.Lt.forEach((t,s)=>s.setReadTime(e));let n=new tA(e,t,this.Ut,this.Lt,s);return this.Lt=tv,this.qt=tR(),this.Ut=new eU(R),n}Gt(e,t){if(!this.zt(e))return;let s=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.zt(e))return;let n=this.Wt(e);this.te(e,t)?n.Nt(t,1):n.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){let t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new tb,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new eU(R),this.qt=this.qt.insert(e,t)),t}zt(e){let t=null!==this.Yt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new tb),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function tR(){return new eF(q.comparator)}function tx(){return new eF(q.comparator)}/**
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
 */ let tV={asc:"ASCENDING",desc:"DESCENDING"},tF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tO={and:"AND",or:"OR"};class tM{constructor(e,t){this.databaseId=e,this.wt=t}}function tU(e){return e||w(),F.fromTimestamp(function(e){let t=ee(e);return new V(t.seconds,t.nanos)}(e))}function tP(e){let t=M.fromString(e);return t$(t)||w(),t}function tq(e,t){let s=tP(t);if(s.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+s.get(1)+" vs "+e.databaseId.projectId);if(s.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+s.get(3)+" vs "+e.databaseId.database);return new q(tQ(s))}function tB(e,t){var s;return s=e.databaseId,new M(["projects",s.projectId,"databases",s.database]).child("documents").child(t).canonicalString()}function tK(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tQ(e){return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function tz(e){return{fieldPath:e.canonicalString()}}function tG(e){return P.fromServerFormat(e.fieldPath)}function t$(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */ class tj{constructor(e,t,s,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=n}applyToRemoteDocument(e,t){let s=t.mutationResults;for(let n=0;n<this.mutations.length;n++){let r=this.mutations[n];if(r.key.isEqual(e.key)){var i;i=s[n],r instanceof tu?function(e,t,s){let n=e.value.clone(),r=td(e.fieldTransforms,t,s.transformResults);n.setAll(r),t.convertToFoundDocument(s.version,n).setHasCommittedMutations()}(r,e,i):r instanceof th?function(e,t,s){if(!tr(e.precondition,t))return void t.convertToUnknownDocument(s.version);let n=td(e.fieldTransforms,t,s.transformResults),r=t.data;r.setAll(tc(e)),r.setAll(n),t.convertToFoundDocument(s.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,s){t.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e,t){for(let s of this.baseMutations)s.key.isEqual(e.key)&&(t=to(s,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=to(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let s=tT();return this.mutations.forEach(n=>{let r=e.get(n.key),i=r.overlayedDocument,a=this.applyToLocalView(i,r.mutatedFields);a=t.has(n.key)?null:a;let o=ta(i,a);null!==o&&s.set(n.key,o),i.isValidDocument()||i.convertToNoDocument(F.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tI())}isEqual(e){return this.batchId===e.batchId&&x(this.mutations,e.mutations,(e,t)=>tl(e,t))&&x(this.baseMutations,e.baseMutations,(e,t)=>tl(e,t))}}/**
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
 */ class tW{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */ class tH{constructor(e,t,s,n,r=F.min(),i=F.min(),a=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new tH(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new tH(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */ class tY{constructor(e){this.ie=e}}/**
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
 */ class tX{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(et(e.integerValue));else if("doubleValue"in e){let s=et(e.doubleValue);isNaN(s)?this.he(t,13):(this.he(t,15),X(s)?t.le(0):t.le(s))}else if("timestampValue"in e){let n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(es(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.he(t,45),t.le(r.latitude||0),t.le(r.longitude||0)}else"mapValue"in e?ev(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):w()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let s=e.fields||{};for(let n of(this.he(t,55),Object.keys(s)))this.de(n,t),this.ce(s[n],t)}ye(e,t){let s=e.values||[];for(let n of(this.he(t,50),s))this.ce(n,t)}me(e,t){this.he(t,37),q.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}tX.Ie=new tX;/**
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
 */ class tJ{constructor(){this.Je=new tZ}addToCollectionParentIndex(e,t){return this.Je.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(B.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(B.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class tZ{constructor(){this.index={}}add(e){let t=e.lastSegment(),s=e.popLast(),n=this.index[t]||new eU(M.comparator),r=!n.has(s);return this.index[t]=n.add(s),r}has(e){let t=e.lastSegment(),s=e.popLast(),n=this.index[t];return n&&n.has(s)}getEntries(e){return(this.index[e]||new eU(M.comparator)).toArray()}}new Uint8Array(0);class t0{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new t0(e,t0.DEFAULT_COLLECTION_PERCENTILE,t0.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */ t0.DEFAULT_COLLECTION_PERCENTILE=10,t0.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,t0.DEFAULT=new t0(41943040,t0.DEFAULT_COLLECTION_PERCENTILE,t0.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),t0.DISABLED=new t0(-1,0,0);/**
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
 */ class t1{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new t1(0)}static vn(){return new t1(-1)}}/**
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
 */ class t2{constructor(){this.changes=new ty(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eK.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let s=this.changes.get(t);return void 0!==s?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */ /**
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
 */ class t4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */ class t3{constructor(e,t,s,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=n}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(s=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==s&&to(s.mutation,e,eq.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tI()).next(()=>t))}getLocalViewOfDocuments(e,t,s=tI()){let n=tT();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,s).next(e=>{let t=tE();return e.forEach((e,s)=>{t=t.insert(e,s.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let s=tT();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,tI()))}populateOverlays(e,t,s){let n=[];return s.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,s)=>{t.set(e,s)})})}computeViews(e,t,s,n){let r=tv,i=tT(),a=tT();return t.forEach((e,t)=>{let a=s.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof th)?r=r.insert(t.key,t):void 0!==a&&(i.set(t.key,a.mutation.getFieldMask()),to(a.mutation,t,a.mutation.getFieldMask(),V.now()))}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var s;return a.set(e,new t4(t,null!==(s=i.get(e))&&void 0!==s?s:null))}),a))}recalculateAndSaveOverlays(e,t){let s=tT(),n=new eF((e,t)=>e-t),r=tI();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=s.get(e)||eq.empty();a=r.applyToLocalView(i,a),s.set(e,a);let o=(n.get(r.batchId)||tI()).add(e);n=n.insert(r.batchId,o)})}).next(()=>{let i=[],a=n.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=tT();u.forEach(e=>{if(!r.has(e)){let n=ta(t.get(e),s.get(e));null!==n&&h.set(e,n),r=r.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,h))}return z.waitFor(i)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,s){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,n).next(r=>{let i=n-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,n-r.size):z.resolve(tT()),a=-1,o=r;return i.next(t=>z.forEach(t,(t,s)=>(a<s.largestBatchId&&(a=s.largestBatchId),r.get(t)?z.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,tI())).next(e=>{let t;return{batchId:a,changes:(t=tw,e.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=tE();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,s){let n=t.collectionGroup,r=tE();return this.indexManager.getCollectionParents(e,n).next(i=>z.forEach(i,i=>{var a;let o=(a=i.child(n),new eW(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,s).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let n;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(r=>(n=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(e=>{e.forEach((e,t)=>{let s=t.getKey();null===n.get(s)&&(n=n.insert(s,eK.newInvalidDocument(s)))});let s=tE();return n.forEach((n,r)=>{let i=e.get(n);void 0!==i&&to(i.mutation,r,eq.empty(),V.now()),e2(t,r)&&(s=s.insert(n,r))}),s})}}/**
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
 */ class t9{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return z.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:tU(t.createTime)}),z.resolve()}getNamedQuery(e,t){return z.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,s,n,r,i,a,o,l;let u,h=function(e){let t=tP(e);return 4===t.length?M.emptyPath():tQ(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||w();let m=c.from[0];m.allDescendants?f=m.collectionId:h=h.child(m.collectionId)}let g=[];c.where&&(g=function(e){var t;let s=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tG(e.unaryFilter.field);return eI.create(t,"==",{doubleValue:NaN});case"IS_NULL":let s=tG(e.unaryFilter.field);return eI.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=tG(e.unaryFilter.field);return eI.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=tG(e.unaryFilter.field);return eI.create(r,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t):void 0!==t.fieldFilter?eI.create(tG(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eS.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(t.compositeFilter.op)):w()}(e);return s instanceof eS&&function(e){for(let t of e.filters)if(t instanceof eS)return!1;return!0}(t=s)&&eA(t)?s.getFilters():[s]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>new eV(tG(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let y=null;c.limit&&(y=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let v=null;c.startAt&&(v=function(e){let t=!!e.before,s=e.values||[];return new ew(s,t)}(c.startAt));let E=null;return c.endAt&&(E=function(e){let t=!e.before,s=e.values||[];return new ew(s,t)}(c.endAt)),s=h,n=f,r=p,i=g,a=y,o=v,l=E,new eW(s,n,r,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?eJ(t,t.limit,"L"):t}(t.bundledQuery),readTime:tU(t.readTime)}),z.resolve()}}/**
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
 */ class t5{constructor(){this.overlays=new eF(q.comparator),this.es=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){let s=tT();return z.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&s.set(t,e)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((s,n)=>{this.oe(e,t,n)}),z.resolve()}removeOverlaysForBatchId(e,t,s){let n=this.es.get(s);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){let n=tT(),r=t.length+1,i=new q(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>s&&n.set(o.getKey(),o)}return z.resolve(n)}getOverlaysForCollectionGroup(e,t,s,n){let r=new eF((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let a=i.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>s){let o=r.get(a.largestBatchId);null===o&&(o=tT(),r=r.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=tT(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=n)););return z.resolve(l)}oe(e,t,s){let n=this.overlays.get(s.key);if(null!==n){let r=this.es.get(n.largestBatchId).delete(s.key);this.es.set(n.largestBatchId,r)}this.overlays=this.overlays.insert(s.key,new tW(t,s));let i=this.es.get(t);void 0===i&&(i=tI(),this.es.set(t,i)),this.es.set(t,i.add(s.key))}}/**
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
 */ class t6{constructor(){this.ns=new eU(t8.ss),this.rs=new eU(t8.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let s=new t8(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new t8(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new q(new M([])),s=new t8(t,e),n=new t8(t,e+1),r=[];return this.rs.forEachInRange([s,n],e=>{this.cs(e),r.push(e.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new q(new M([])),s=new t8(t,e),n=new t8(t,e+1),r=tI();return this.rs.forEachInRange([s,n],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new t8(e,0),s=this.ns.firstAfterOrEqual(t);return null!==s&&e.isEqual(s.key)}}class t8{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return q.comparator(e.key,t.key)||R(e._s,t._s)}static os(e,t){return R(e._s,t._s)||q.comparator(e.key,t.key)}}/**
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
 */ class t7{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new eU(t8.ss)}checkEmpty(e){return z.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,s,n){let r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tj(r,t,s,n);for(let a of(this.mutationQueue.push(i),n))this.gs=this.gs.add(new t8(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(i)}lookupMutationBatch(e,t){return z.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let s=this.ps(t+1),n=s<0?0:s;return z.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let s=new t8(t,0),n=new t8(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,n],e=>{let t=this.ys(e._s);r.push(t)}),z.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new eU(R);return t.forEach(e=>{let t=new t8(e,0),n=new t8(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,n],e=>{s=s.add(e._s)})}),z.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){let s=t.path,n=s.length+1,r=s;q.isDocumentKey(r)||(r=r.child(""));let i=new t8(new q(r),0),a=new eU(R);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!s.isPrefixOf(t)&&(t.length===n&&(a=a.add(e._s)),!0)},i),z.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let s=this.ys(e);null!==s&&t.push(s)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||w(),this.mutationQueue.shift();let s=this.gs;return z.forEach(t.mutations,n=>{let r=new t8(n.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){let s=new t8(t,0),n=this.gs.firstAfterOrEqual(s);return z.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */ class se{constructor(e){this.Es=e,this.docs=new eF(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let s=t.key,n=this.docs.get(s),r=n?n.size:0,i=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():eK.newInvalidDocument(t))}getEntries(e,t){let s=tv;return t.forEach(e=>{let t=this.docs.get(e);s=s.insert(e,t?t.document.mutableCopy():eK.newInvalidDocument(e))}),z.resolve(s)}getAllFromCollection(e,t,s){let n=tv,r=new q(t.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){let{key:a,value:{document:o}}=i.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=function(e,t){let s=e.readTime.compareTo(t.readTime);return 0!==s?s:0!==(s=q.comparator(e.documentKey,t.documentKey))?s:R(e.largestBatchId,t.largestBatchId)}(new B(o.readTime,o.key,-1),s)||(n=n.insert(o.key,o.mutableCopy()))}return z.resolve(n)}getAllFromCollectionGroup(e,t,s,n){w()}As(e,t){return z.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new st(this)}getSize(e){return z.resolve(this.size)}}class st extends t2{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((s,n)=>{n.isValidDocument()?t.push(this.Yn.addEntry(e,n)):this.Yn.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */ class ss{constructor(e){this.persistence=e,this.Rs=new ty(e=>eG(e),e$),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new t6,this.targetCount=0,this.vs=t1.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,s)=>t(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),z.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new t1(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Dn(t),z.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let n=0,r=[];return this.Rs.forEach((i,a)=>{a.sequenceNumber<=t&&null===s.get(a.targetId)&&(this.Rs.delete(i),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),z.waitFor(r).next(()=>n)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){let s=this.Rs.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);let n=this.persistence.referenceDelegate,r=[];return n&&t.forEach(t=>{r.push(n.markPotentiallyOrphaned(e,t))}),z.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),z.resolve()}getMatchingKeysForTargetId(e,t){let s=this.Ps.ds(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.Ps.containsKey(t))}}/**
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
 */ class sn{constructor(e,t){var s;this.Vs={},this.overlays={},this.Ss=new $(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ss(this),this.indexManager=new tJ,this.remoteDocumentCache=(s=e=>this.referenceDelegate.xs(e),new se(s)),this.yt=new tY(t),this.Ns=new t9(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new t5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new t7(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){g("MemoryPersistence","Starting transaction:",e);let n=new sr(this.Ss.next());return this.referenceDelegate.ks(),s(n).next(e=>this.referenceDelegate.Os(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ms(e,t){return z.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class sr extends K{constructor(e){super(),this.currentSequenceNumber=e}}class si{constructor(e){this.persistence=e,this.Fs=new t6,this.$s=null}static Bs(e){return new si(e)}get Ls(){if(this.$s)return this.$s;throw w()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),z.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Ls,s=>{let n=q.fromPath(s);return this.qs(e,n).next(e=>{e||t.removeEntry(n,F.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return z.or([()=>z.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */ class sa{constructor(e,t,s,n){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=n}static Ci(e,t){let s=tI(),n=tI();for(let r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:n=n.add(r.doc.key)}return new sa(e,t.fromCache,s,n)}}/**
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
 */ class so{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,n){return this.ki(e,t).next(r=>r||this.Oi(e,t,n,s)).next(s=>s||this.Mi(e,t))}ki(e,t){if(eH(t))return z.resolve(null);let s=eX(t);return this.indexManager.getIndexType(e,s).next(n=>0===n?null:(null!==t.limit&&1===n&&(s=eX(t=eJ(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,s).next(n=>{let r=tI(...n);return this.Ni.getDocuments(e,r).next(n=>this.indexManager.getMinOffset(e,s).next(s=>{let i=this.Fi(t,n);return this.$i(t,i,r,s.readTime)?this.ki(e,eJ(t,null,"F")):this.Bi(e,i,t,s)}))})))}Oi(e,t,s,n){return eH(t)||n.isEqual(F.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(r=>{let i=this.Fi(t,r);return this.$i(t,i,s,n)?this.Mi(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),e1(t)),this.Bi(e,i,t,function(e,t){let s=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,r=F.fromTimestamp(1e9===n?new V(s+1,0):new V(s,n));return new B(r,q.empty(),-1)}(n,0)))})}Fi(e,t){let s=new eU(e4(e));return t.forEach((t,n)=>{e2(e,n)&&(s=s.add(n))}),s}$i(e,t,s,n){if(null===e.limit)return!1;if(s.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Mi(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e1(t)),this.Ni.getDocumentsMatchingQuery(e,t,B.min())}Bi(e,t,s,n){return this.Ni.getDocumentsMatchingQuery(e,s,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */ class sl{constructor(e,t,s,n){this.persistence=e,this.Li=t,this.yt=n,this.qi=new eF(R),this.Ui=new ty(e=>eG(e),e$),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t3(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}async function su(e,t){return await e.persistence.runTransaction("Handle user change","readonly",s=>{let n;return e.mutationQueue.getAllMutationBatches(s).next(r=>(n=r,e.Qi(t),e.mutationQueue.getAllMutationBatches(s))).next(t=>{let r=[],i=[],a=tI();for(let o of n)for(let l of(r.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(i.push(u.batchId),u.mutations))a=a.add(h.key);return e.localDocuments.getDocuments(s,a).next(e=>({ji:e,removedBatchIds:r,addedBatchIds:i}))})})}function sh(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}async function sc(e,t,s){let n=e,r=n.qi.get(t);try{s||await n.persistence.runTransaction("Release target",s?"readwrite":"readwrite-primary",e=>n.persistence.referenceDelegate.removeTarget(e,r))}catch(i){if(!G(i))throw i;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${i}`)}n.qi=n.qi.remove(t),n.Ui.delete(r.target)}function sd(e,t,s){let n=F.min(),r=tI();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,s){let n=e.Ui.get(s);return void 0!==n?z.resolve(e.qi.get(n)):e.Cs.getTargetData(t,s)})(e,i,eX(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(i,t.targetId).next(e=>{r=e})}).next(()=>e.Li.getDocumentsMatchingQuery(i,t,s?n:F.min(),s?r:tI())).next(s=>{var n;let i;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e.Ki.get(n)||F.min(),s.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e.Ki.set(n,i),{documents:s,Hi:r}}))}class sf{constructor(){this.activeTargetIds=tS}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sm{constructor(){this.Lr=new sf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sf,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */ class sg{Ur(e){}shutdown(){}}/**
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
 */ class sp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */ let sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */ class sv{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */ class sw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,n,r){let i=this.ho(e,t);g("RestConnection","Sending: ",i,s);let a={};return this.lo(a,n,r),this.fo(e,i,a,s).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",s),t})}_o(e,t,s,n,r,i){return this.ao(e,t,s,n,r)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,s)=>e[s]=t),s&&s.headers.forEach((t,s)=>e[s]=t)}ho(e,t){let s=sy[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,n){return new Promise((r,i)=>{let a=new u.JJ;a.setWithCredentials(!0),a.listenOnce(u.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let t=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),r(t);break;case u.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),i(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let s=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',s,"response text:",a.getResponseText()),s>0){let n=a.getResponseJson();Array.isArray(n)&&(n=n[0]);let o=null==n?void 0:n.error;if(o&&o.status&&o.message){let l=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(o.status);i(new T(l,o.message))}else i(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(n);a.send(t,"POST",o,s,15)})}wo(e,t,s){let r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,u.UE)(),a=(0,u.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.zI({})),this.lo(o.initMessageHeaders,t,s),o.encodeInitMessageHeaders=!0;let l=r.join("");g("Connection","Creating WebChannel: "+l,o);let h=i.createWebChannel(l,o),c=!1,d=!1,f=new sv({Hr(e){d?g("Connection","Not sending because WebChannel is closed:",e):(c||(g("Connection","Opening WebChannel transport."),h.open(),c=!0),g("Connection","WebChannel sending:",e),h.send(e))},Jr:()=>h.close()}),m=(e,t,s)=>{e.listen(t,e=>{try{s(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,u.ii.EventType.OPEN,()=>{d||g("Connection","WebChannel transport opened.")}),m(h,u.ii.EventType.CLOSE,()=>{d||(d=!0,g("Connection","WebChannel transport closed"),f.io())}),m(h,u.ii.EventType.ERROR,e=>{d||(d=!0,y("Connection","WebChannel transport errored:",e),f.io(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(h,u.ii.EventType.MESSAGE,e=>{var t;if(!d){let s=e.data[0];s||w();let r=s.error||(null===(t=s[0])||void 0===t?void 0:t.error);if(r){g("Connection","WebChannel received error:",r);let i=r.status,a=function(e){let t=n[e];if(void 0!==t)return tp(t)}(i),o=r.message;void 0===a&&(a=E.INTERNAL,o="Unknown error status: "+i+" with message "+r.message),d=!0,f.io(new T(a,o)),h.close()}else g("Connection","WebChannel received:",s),f.ro(s)}}),m(a,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function sE(){return"undefined"!=typeof document?document:null}class sT{constructor(e,t,s=1e3,n=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=n,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),n=Math.max(0,t-s);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,n,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */ class sC{constructor(e,t,s,n,r,i,a,o){this.Hs=e,this.vo=s,this.Vo=n,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new sT(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,s])=>{this.So===t&&this.Go(e,s)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{s(()=>this.Qo(e))}),this.stream.onMessage(e=>{s(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sI extends sC{constructor(e,t,s,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,n,i),this.yt=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let s;if("targetChange"in t){var n,r;t.targetChange;let i="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:w(),a=t.targetChange.targetIds||[],o=(r=t.targetChange.resumeToken,e.wt?(void 0===r||"string"==typeof r||w(),J.fromBase64String(r||"")):(void 0===r||r instanceof Uint8Array||w(),J.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:tp(e.code);return new T(t,e.message||"")}(l);s=new tD(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;let h=t.documentChange;h.document,h.document.name,h.document.updateTime;let c=tq(e,h.document.name),d=tU(h.document.updateTime),f=h.document.createTime?tU(h.document.createTime):F.min(),m=new eB({mapValue:{fields:h.document.fields}}),g=eK.newFoundDocument(c,d,f,m),p=h.targetIds||[],y=h.removedTargetIds||[];s=new tN(p,y,g.key,g)}else if("documentDelete"in t){t.documentDelete;let v=t.documentDelete;v.document;let C=tq(e,v.document),I=v.readTime?tU(v.readTime):F.min(),S=eK.newNoDocument(C,I),A=v.removedTargetIds||[];s=new tN([],A,S.key,S)}else if("documentRemove"in t){t.documentRemove;let k=t.documentRemove;k.document;let N=tq(e,k.document),_=k.removedTargetIds||[];s=new tN([],_,N,null)}else{if(!("filter"in t))return w();{t.filter;let D=t.filter;D.targetId;let b=D.count||0,L=new tg(b),R=D.targetId;s=new t_(R,L)}}return s}(this.yt,e),s=function(e){if(!("targetChange"in e))return F.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?tU(t.readTime):F.min()}(e);return this.listener.Wo(t,s)}zo(e){let t={};t.database=tK(this.yt),t.addTarget=function(e,t){var s,n;let r;let i=t.target;return(r=ej(i)?{documents:{documents:[tB(e,i.path)]}}:{query:function(e,t){var s,n,r;let i={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i.parent=tB(e,a),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=tB(e,a.popLast()),i.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eI?function(e){if("=="===e.op){if(eg(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NAN"}};if(em(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eg(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NOT_NAN"}};if(em(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tz(e.field),op:tF[e.op],value:e.value}}}(t):t instanceof eS?function(t){let s=t.getFilters().map(t=>e(t));return 1===s.length?s[0]:{compositeFilter:{op:tO[t.op],filters:s}}}(t):w()}(eS.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:tz(e.field),direction:tV[e.dir]}))}(t.orderBy);l&&(i.structuredQuery.orderBy=l);let u=(n=t.limit,e.wt||null==n?n:{value:n});return null!==u&&(i.structuredQuery.limit=u),t.startAt&&(i.structuredQuery.startAt={before:(s=t.startAt).inclusive,values:s.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}(e,i)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?r.resumeToken=(s=t.resumeToken,e.wt?s.toBase64():s.toUint8Array()):t.snapshotVersion.compareTo(F.min())>0&&(r.readTime=(n=t.snapshotVersion.toTimestamp(),e.wt?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds})),r}(this.yt,e);let s=function(e,t){let s=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,t.purpose);return null==s?null:{"goog-listen-tags":s}}(this.yt,e);s&&(t.labels=s),this.Bo(t)}Ho(e){let t={};t.database=tK(this.yt),t.removeTarget=e,this.Bo(t)}}/**
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
 */ class sS extends class{}{constructor(e,t,s,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.yt=n,this.nu=!1}su(){if(this.nu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.connection.ao(e,t,s,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}_o(e,t,s,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection._o(e,t,s,r,i,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class sA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(t),this.ou=!1):g("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
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
 */ class sk{constructor(e,t,s,n,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(e=>{s.enqueueAndForget(async()=>{sF(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await s_(e),e.gu.set("Unknown"),e._u.delete(4),await sN(e)}(this))})}),this.gu=new sA(s,n)}}async function sN(e){if(sF(e))for(let t of e.wu)await t(!0)}async function s_(e){for(let t of e.wu)await t(!1)}function sD(e,t){e.du.has(t.targetId)||(e.du.set(t.targetId,t),sV(e)?sx(e):sK(e).ko()&&sL(e,t))}function sb(e,t){let s=sK(e);e.du.delete(t),s.ko()&&sR(e,t),0===e.du.size&&(s.ko()?s.Fo():sF(e)&&e.gu.set("Unknown"))}function sL(e,t){e.yu.Ot(t.targetId),sK(e).zo(t)}function sR(e,t){e.yu.Ot(t),sK(e).Ho(t)}function sx(e){e.yu=new tL({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),sK(e).start(),e.gu.uu()}function sV(e){return sF(e)&&!sK(e).No()&&e.du.size>0}function sF(e){return 0===e._u.size}async function sO(e){e.du.forEach((t,s)=>{sL(e,t)})}async function sM(e,t){e.yu=void 0,sV(e)?(e.gu.hu(t),sx(e)):e.gu.set("Unknown")}async function sU(e,t,s){if(e.gu.set("Online"),t instanceof tD&&2===t.state&&t.cause)try{await async function(e,t){let s=t.cause;for(let n of t.targetIds)e.du.has(n)&&(await e.remoteSyncer.rejectListen(n,s),e.du.delete(n),e.yu.removeTarget(n))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sP(e,n)}else if(t instanceof tN?e.yu.Kt(t):t instanceof t_?e.yu.Jt(t):e.yu.jt(t),!s.isEqual(F.min()))try{let r=await sh(e.localStore);s.compareTo(r)>=0&&await function(e,t){let s=e.yu.Zt(t);return s.targetChanges.forEach((s,n)=>{if(s.resumeToken.approximateByteSize()>0){let r=e.du.get(n);r&&e.du.set(n,r.withResumeToken(s.resumeToken,t))}}),s.targetMismatches.forEach(t=>{let s=e.du.get(t);if(!s)return;e.du.set(t,s.withResumeToken(J.EMPTY_BYTE_STRING,s.snapshotVersion)),sR(e,t);let n=new tH(s.target,t,1,s.sequenceNumber);sL(e,n)}),e.remoteSyncer.applyRemoteEvent(s)}(e,s)}catch(i){g("RemoteStore","Failed to raise snapshot:",i),await sP(e,i)}}async function sP(e,t,s){if(!G(t))throw t;e._u.add(1),await s_(e),e.gu.set("Offline"),s||(s=()=>sh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await s(),e._u.delete(1),await sN(e)})}async function sq(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let s=sF(e);e._u.add(3),await s_(e),s&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await sN(e)}async function sB(e,t){t?(e._u.delete(2),await sN(e)):t||(e._u.add(2),await s_(e),e.gu.set("Unknown"))}function sK(e){var t,s,n;return e.pu||(e.pu=(t=e.datastore,s=e.asyncQueue,n={Yr:sO.bind(null,e),Zr:sM.bind(null,e),Wo:sU.bind(null,e)},t.su(),new sI(s,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,n)),e.wu.push(async t=>{t?(e.pu.Mo(),sV(e)?sx(e):e.gu.set("Unknown")):(await e.pu.stop(),e.yu=void 0)})),e.pu}/**
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
 */ class sQ{constructor(e,t,s,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=n,this.removalCallback=r,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,s,n,r){let i=Date.now()+s,a=new sQ(e,t,i,n,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sz(e,t){if(p("AsyncQueue",`${t}: ${e}`),G(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */ class sG{constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=tE(),this.sortedSet=new eF(this.comparator)}static emptySet(e){return new sG(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sG)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){let n=t.getNext().key,r=s.getNext().key;if(!n.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let s=new sG;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */ class s${constructor(){this.Tu=new eF(q.comparator)}track(e){let t=e.doc.key,s=this.Tu.get(t);s?0!==e.type&&3===s.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==s.type?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):2===e.type&&2===s.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===s.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===s.type?this.Tu=this.Tu.remove(t):1===e.type&&2===s.type?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):0===e.type&&1===s.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):w():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class sj{constructor(e,t,s,n,r,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=n,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,n,r){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new sj(e,t,sG.emptySet(t),i,s,n,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eZ(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==s[n].type||!t[n].doc.isEqual(s[n].doc))return!1;return!0}}/**
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
 */ class sW{constructor(){this.Au=void 0,this.listeners=[]}}class sH{constructor(){this.queries=new ty(e=>e0(e),eZ),this.onlineState="Unknown",this.Ru=new Set}}async function sY(e,t){let s=t.query,n=!1,r=e.queries.get(s);if(r||(n=!0,r=new sW),n)try{r.Au=await e.onListen(s)}catch(a){let i=sz(a,`Initialization of query '${e1(t.query)}' failed`);return void t.onError(i)}e.queries.set(s,r),r.listeners.push(t),t.bu(e.onlineState),r.Au&&t.Pu(r.Au)&&s0(e)}async function sX(e,t){let s=t.query,n=!1,r=e.queries.get(s);if(r){let i=r.listeners.indexOf(t);i>=0&&(r.listeners.splice(i,1),n=0===r.listeners.length)}if(n)return e.queries.delete(s),e.onUnlisten(s)}function sJ(e,t){let s=!1;for(let n of t){let r=n.query,i=e.queries.get(r);if(i){for(let a of i.listeners)a.Pu(n)&&(s=!0);i.Au=n}}s&&s0(e)}function sZ(e,t,s){let n=e.queries.get(t);if(n)for(let r of n.listeners)r.onError(s);e.queries.delete(t)}function s0(e){e.Ru.forEach(e=>{e.next()})}class s1{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let s of e.docChanges)3!==s.type&&t.push(s);e=new sj(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=sj.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */ class s2{constructor(e){this.key=e}}class s4{constructor(e){this.key=e}}class s3{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=tI(),this.mutatedKeys=tI(),this.Gu=e4(e),this.Qu=new sG(this.Gu)}get ju(){return this.qu}Wu(e,t){let s=t?t.zu:new s$,n=t?t.Qu:this.Qu,r=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=e2(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(s.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(s.track({type:2,doc:h}),f=!0,(o&&this.Gu(h,o)>0||l&&0>this.Gu(h,l))&&(a=!0)):!u&&h?(s.track({type:0,doc:h}),f=!0):u&&!h&&(s.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),r=d?r.add(e):r.delete(e)):(i=i.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let u="F"===this.query.limitType?i.last():i.first();i=i.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:i,zu:s,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){let n=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let r=e.zu.Eu();r.sort((e,t)=>(function(e,t){let s=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return s(e)-s(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(s);let i=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.Uu;return(this.Uu=a,0!==r.length||o)?{snapshot:new sj(this.query,e.Qu,n,r,e.mutatedKeys,0===a,o,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new s$,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=tI(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new s4(e))}),this.Ku.forEach(s=>{e.has(s)||t.push(new s2(s))}),t}tc(e){this.qu=e.Hi,this.Ku=tI();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return sj.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class s9{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class s5{constructor(e){this.key=e,this.nc=!1}}class s6{constructor(e,t,s,n,r,i){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new ty(e=>e0(e),eZ),this.rc=new Map,this.oc=new Set,this.uc=new eF(q.comparator),this.cc=new Map,this.ac=new t6,this.hc={},this.lc=new Map,this.fc=t1.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function s8(e,t){let s,n;let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=nt.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nn.bind(null,t),t.sc.Wo=sJ.bind(null,t.eventManager),t.sc.wc=sZ.bind(null,t.eventManager),t}(e),i=r.ic.get(t);if(i)s=i.targetId,r.sharedClientState.addLocalQueryTarget(s),n=i.view.ec();else{let a=await function(e,t){let s=e;return s.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return s.Cs.getTargetData(e,t).next(r=>r?(n=r,z.resolve(n)):s.Cs.allocateTargetId(e).next(r=>(n=new tH(t,r,0,e.currentSequenceNumber),s.Cs.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=s.qi.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(s.qi=s.qi.insert(e.targetId,e),s.Ui.set(t,e.targetId)),e})}(r.localStore,eX(t));r.isPrimaryClient&&sD(r.remoteStore,a);let o=r.sharedClientState.addLocalQueryTarget(a.targetId);n=await s7(r,t,s=a.targetId,"current"===o,a.resumeToken)}return n}async function s7(e,t,s,n,r){e._c=(t,s,n)=>(async function(e,t,s,n){let r=t.view.Wu(s);r.$i&&(r=await sd(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,r)));let i=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(r,e.isPrimaryClient,i);return na(e,t.targetId,a.Xu),a.snapshot})(e,t,s,n);let i=await sd(e.localStore,t,!0),a=new s3(t,i.Hi),o=a.Wu(i.documents),l=tk.createSynthesizedTargetChangeForCurrentChange(s,n&&"Offline"!==e.onlineState,r),u=a.applyChanges(o,e.isPrimaryClient,l);na(e,s,u.Xu);let h=new s9(t,s,a);return e.ic.set(t,h),e.rc.has(s)?e.rc.get(s).push(t):e.rc.set(s,[t]),u.snapshot}async function ne(e,t){let s=e.ic.get(t),n=e.rc.get(s.targetId);if(n.length>1)return e.rc.set(s.targetId,n.filter(e=>!eZ(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(s.targetId),e.sharedClientState.isActiveQueryTarget(s.targetId)||await sc(e.localStore,s.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(s.targetId),sb(e.remoteStore,s.targetId),nr(e,s.targetId)}).catch(Q)):(nr(e,s.targetId),await sc(e.localStore,s.targetId,!0))}async function nt(e,t){try{let s=await function(e,t){let s=e,n=t.snapshotVersion,r=s.qi;return s.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var i;let a,o;let l=s.Gi.newChangeBuffer({trackRemovals:!0});r=s.qi;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=r.get(a);if(!l)return;u.push(s.Cs.removeMatchingKeys(e,i.removedDocuments,a).next(()=>s.Cs.addMatchingKeys(e,i.addedDocuments,a)));let h=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?h=h.withResumeToken(J.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(s.Cs.updateTargetData(e,h))});let h=tv,c=tI();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(s.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((i=t.documentUpdates,a=tI(),o=tI(),i.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=tv;return i.forEach((s,n)=>{let r=e.get(s);n.isFoundDocument()!==r.isFoundDocument()&&(o=o.add(s)),n.isNoDocument()&&n.version.isEqual(F.min())?(l.removeEntry(s,n.readTime),t=t.insert(s,n)):!r.isValidDocument()||n.version.compareTo(r.version)>0||0===n.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(n),t=t.insert(s,n)):g("LocalStore","Ignoring outdated watch update for ",s,". Current version:",r.version," Watch version:",n.version)}),{Wi:t,zi:o}})).next(e=>{h=e.Wi,c=e.zi})),!n.isEqual(F.min())){let d=s.Cs.getLastRemoteSnapshotVersion(e).next(t=>s.Cs.setTargetsMetadata(e,e.currentSequenceNumber,n));u.push(d)}return z.waitFor(u).next(()=>l.apply(e)).next(()=>s.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(s.qi=r,e))}(e.localStore,t);t.targetChanges.forEach((t,s)=>{let n=e.cc.get(s);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?n.nc=!0:t.modifiedDocuments.size>0?n.nc||w():t.removedDocuments.size>0&&(n.nc||w(),n.nc=!1))}),await nl(e,s,t)}catch(n){await Q(n)}}function ns(e,t,s){let n=e;if(n.isPrimaryClient&&0===s||!n.isPrimaryClient&&1===s){let r=[];n.ic.forEach((e,s)=>{let n=s.view.bu(t);n.snapshot&&r.push(n.snapshot)}),function(e,t){let s=e;s.onlineState=t;let n=!1;s.queries.forEach((e,s)=>{for(let r of s.listeners)r.bu(t)&&(n=!0)}),n&&s0(s)}(n.eventManager,t),r.length&&n.sc.Wo(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function nn(e,t,s){let n=e;n.sharedClientState.updateQueryState(t,"rejected",s);let r=n.cc.get(t),i=r&&r.key;if(i){let a=new eF(q.comparator);a=a.insert(i,eK.newNoDocument(i,F.min()));let o=tI().add(i),l=new tA(F.min(),new Map,new eU(R),a,o);await nt(n,l),n.uc=n.uc.remove(i),n.cc.delete(t),no(n)}else await sc(n.localStore,t,!1).then(()=>nr(n,t,s)).catch(Q)}function nr(e,t,s=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(n),s&&e.sc.wc(n,s);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||ni(e,t)})}function ni(e,t){e.oc.delete(t.path.canonicalString());let s=e.uc.get(t);null!==s&&(sb(e.remoteStore,s),e.uc=e.uc.remove(t),e.cc.delete(s),no(e))}function na(e,t,s){for(let n of s)n instanceof s2?(e.ac.addReference(n.key,t),function(e,t){let s=t.key,n=s.path.canonicalString();e.uc.get(s)||e.oc.has(n)||(g("SyncEngine","New document in limbo: "+s),e.oc.add(n),no(e))}(e,n)):n instanceof s4?(g("SyncEngine","Document no longer in limbo: "+n.key),e.ac.removeReference(n.key,t),e.ac.containsKey(n.key)||ni(e,n.key)):w()}function no(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){var t;let s=e.oc.values().next().value;e.oc.delete(s);let n=new q(M.fromString(s)),r=e.fc.next();e.cc.set(r,new s5(n)),e.uc=e.uc.insert(n,r),sD(e.remoteStore,new tH(eX((t=n.path,new eW(t))),r,2,$.at))}}async function nl(e,t,s){let n=[],r=[],i=[];e.ic.isEmpty()||(e.ic.forEach((a,o)=>{i.push(e._c(o,t,s).then(t=>{if((t||s)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let i=sa.Ci(o.targetId,t);r.push(i)}}))}),await Promise.all(i),e.sc.Wo(n),await async function(e,t){let s=e;try{await s.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>z.forEach(t,t=>z.forEach(t.Si,n=>s.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>z.forEach(t.Di,n=>s.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(n){if(!G(n))throw n;g("LocalStore","Failed to update sequence numbers: "+n)}for(let r of t){let i=r.targetId;if(!r.fromCache){let a=s.qi.get(i),o=a.snapshotVersion,l=a.withLastLimboFreeSnapshotVersion(o);s.qi=s.qi.insert(i,l)}}}(e.localStore,r))}async function nu(e,t){let s=e;if(!s.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let n=await su(s.localStore,t);s.currentUser=t,s.lc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),s.lc.clear(),s.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await nl(s,n.ji)}}function nh(e,t){let s=e.cc.get(t);if(s&&s.nc)return tI().add(s.key);{let n=tI(),r=e.rc.get(t);if(!r)return n;for(let i of r){let a=e.ic.get(i);n=n.unionWith(a.view.ju)}return n}}class nc{constructor(){this.synchronizeTabs=!1}async initialize(e){var t;this.yt=(t=e.databaseInfo.databaseId,new tM(t,!0)),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,s,n,r;return t=this.persistence,s=new so,n=e.initialUser,r=this.yt,new sl(t,s,n,r)}yc(e){return new sn(si.Bs,this.yt)}gc(e){return new sm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ns(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nu.bind(null,this.syncEngine),await sB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sH}createDatastore(e){var t,s,n,r;let i=(s=e.databaseInfo.databaseId,new tM(s,!0)),a=(t=e.databaseInfo,new sw(t));return n=e.authCredentials,r=e.appCheckCredentials,new sS(n,r,a,i)}createRemoteStore(e){var t,s,n,r,i;return t=this.localStore,s=this.datastore,n=e.asyncQueue,r=e=>ns(this.syncEngine,e,0),i=sp.C()?new sp:new sg,new sk(t,s,n,r,i)}createSyncEngine(e,t){return function(e,t,s,n,r,i,a){let o=new s6(e,t,s,n,r,i);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e._u.add(5),await s_(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}function nf(e){if(q.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let s=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let s=(t=e).constructor?t.constructor.name:null;return s?`a custom ${s} object`:"an object"}}return"function"==typeof e?"a function":w()}(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${s}`)}}return e}/**
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
 */ let ng=new Map;class np{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,s,n){if(!0===t&&!0===n)throw new T(E.INVALID_ARGUMENT,`${e} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */ class ny{constructor(e,t,s,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new np({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new np(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":let t=e.client;return new _(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ng.get(e);t&&(g("ComponentProvider","Removing Datastore"),ng.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */ class nv{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nv(this.firestore,e,this._key)}}class nw{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nw(this.firestore,e,this._query)}}class nE extends nw{constructor(e,t,s){super(e,t,new eW(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new nv(this.firestore,null,new q(e))}withConverter(e){return new nE(this.firestore,e,this._path)}}function nT(e,t,...s){if(e=(0,l.m9)(e),/**
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
 */ function(e,t,s){if(!s)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof ny){let n=M.fromString(t,...s);return nf(n),new nE(e,null,n)}{if(!(e instanceof nv||e instanceof nE))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(M.fromString(t,...s));return nf(r),new nE(e.firestore,null,r)}}/**
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
 */ /**
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
 */ class nC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */ class nI{constructor(e,t,s,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=L.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(s,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(s){let t=sz(s,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nS(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let s=await e.getConfiguration();await t.initialize(s);let n=s.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await su(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nA(e,t){e.asyncQueue.verifyOperationInProgress();let s=await nk(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(s,n),e.setCredentialChangeListener(e=>sq(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,s)=>sq(t.remoteStore,s)),e.onlineComponents=t}async function nk(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await nS(e,new nc)),e.offlineComponents}async function nN(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await nA(e,new nd)),e.onlineComponents}async function n_(e){let t=await nN(e),s=t.eventManager;return s.onListen=s8.bind(null,t.syncEngine),s.onUnlisten=ne.bind(null,t.syncEngine),s}class nD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new sT(this,"async_queue_retry"),this.Wc=()=>{let e=sE();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=sE();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=sE();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new C;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!G(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let s=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",s),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let n=sQ.createAndSchedule(this,e,t,s,e=>this.Yc(e));return this.Uc.push(n),n}zc(){this.Kc&&w()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class nb extends ny{constructor(e,t,s,n){super(e,t,s,n),this.type="firestore",this._queue=new nD,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nR(this),this._firestoreClient.terminate()}}function nL(e,t){let s="object"==typeof e?e:(0,i.Mq)(),n=(0,i.qX)(s,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let r=(0,l.P0)("firestore");r&&function(e,t,s,n={}){var r;let i=(e=nm(e,ny))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${s}`,ssl:!1})),n.mockUserToken){let a,o;if("string"==typeof n.mockUserToken)a=n.mockUserToken,o=c.MOCK_USER;else{a=(0,l.Sg)(n.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new c(u)}e._authCredentials=new A(new I(a,o))}}(n,...r)}return n}function nR(e){var t,s,n,r;let i=e._freezeSettings(),a=(s=e._databaseId,n=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",r=e._persistenceKey,new j(s,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams));e._firestoreClient=new nI(e._authCredentials,e._appCheckCredentials,e._queue,a)}/**
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
 */ /**
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
 */ class nx{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nx(J.fromBase64String(e))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nx(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */ class nV{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */ class nF{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}let nO=RegExp("[~\\*/\\[\\]]");function nM(e,t,s,n,r){let i=n&&!n.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;s&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${r}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
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
 */ class nU{constructor(e,t,s,n,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=n,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new nP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(nq("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class nP extends nU{data(){return super.data()}}function nq(e,t){return"string"==typeof t?function(e,t,s){if(t.search(nO)>=0)throw nM(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,s);try{return new nV(...t.split("."))._internalPath}catch(n){throw nM(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,s)}}(e,t):t instanceof nV?t._internalPath:t._delegate._internalPath}class nB{convertValue(e,t="none"){switch(ea(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){let s={};return Y(e.fields,(e,n)=>{s[e]=this.convertValue(n,t)}),s}convertGeoPoint(e){return new nF(et(e.latitude),et(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let s=function e(t){let s=t.mapValue.fields.__previous_value__;return en(s)?e(s):s}(e);return null==s?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(er(e));default:return null}}convertTimestamp(e){let t=ee(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let s=M.fromString(e);t$(s)||w();let n=new W(s.get(1),s.get(3)),r=new q(s.popFirst(5));return n.isEqual(t)||p(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */ class nK{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nQ extends nU{constructor(e,t,s,n,r,i){super(e,t,s,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new nz(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let s=this._document.data.field(nq("DocumentSnapshot.get",e));if(null!==s)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class nz extends nQ{data(e={}){return super.data(e)}}class nG{constructor(e,t,s,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new nK(n.hasPendingWrites,n.fromCache),this.query=s}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new nz(this._firestore,this._userDataWriter,s.key,s,new nK(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let s=0;return e._snapshot.docChanges.map(t=>{let n=new nz(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nK(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:n,oldIndex:-1,newIndex:s++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let s=new nz(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nK(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,i=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(i=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}(t.type),doc:s,oldIndex:r,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class n$ extends nB{constructor(e){super(),this.firestore=e}convertBytes(e){return new nx(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new nv(this.firestore,null,t)}}function nj(e){e=nm(e,nw);let t=nm(e.firestore,nb),s=(t._firestoreClient||nR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),n=new n$(t);return(/**
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
 */ function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,s={}){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,s,n,r){let i=new nC({next(s){t.enqueueAndForget(()=>sX(e,a)),s.fromCache&&"server"===n.source?r.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(s)},error:e=>r.reject(e)}),a=new s1(s,i,{includeMetadataChanges:!0,Nu:!0});return sY(e,a)})(await n_(e),e.asyncQueue,t,s,n)),n.promise})(s,e._query).then(s=>new nG(t,n,e,s)))}!function(e,t=!0){d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:s,options:n})=>{let r=e.getProvider("app").getImmediate(),i=new nb(new k(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new W(e.options.projectId,t)}(r,s),r);return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.8.0",void 0),(0,i.KN)(h,"3.8.0","esm2017")}()}}]);