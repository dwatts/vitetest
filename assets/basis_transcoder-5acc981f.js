import{bG as Sn,ei as ze}from"./index-86f9eeba.js";function On(k,Y){for(var H=0;H<Y.length;H++){const n=Y[H];if(typeof n!="string"&&!Array.isArray(n)){for(const C in n)if(C!=="default"&&!(C in k)){const E=Object.getOwnPropertyDescriptor(n,C);E&&Object.defineProperty(k,C,E.get?E:{enumerable:!0,get:()=>n[C]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var Ar,se,Wr,_e={exports:{}};_e.exports,Ar=_e,_e.exports,se=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,typeof __filename<"u"&&(se=se||__filename),Wr=function(k){var Y,H,n=(k=k||{})!==void 0?k:{};n.ready=new Promise(function(e,r){Y=e,H=r});var C,E={};for(C in n)n.hasOwnProperty(C)&&(E[C]=n[C]);var le=!1,I=!1,Pe=!1,qe=!1;le=typeof window=="object",I=typeof importScripts=="function",Pe=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",qe=!le&&!Pe&&!I;var ce,Z,Ae,We,T="";function Sr(e){return n.locateFile?n.locateFile(e,T):T+e}Pe?(T=I?require("path").dirname(T)+"/":__dirname+"/",ce=function(e,r){return Ae||(Ae=require("fs")),We||(We=require("path")),e=We.normalize(e),Ae.readFileSync(e,r?null:"utf8")},Z=function(e){var r=ce(e,!0);return r.buffer||(r=new Uint8Array(r)),Ee(r.buffer),r},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof Wn))throw e}),process.on("unhandledRejection",B),n.inspect=function(){return"[Emscripten Module object]"}):qe?(typeof read<"u"&&(ce=function(e){return read(e)}),Z=function(e){var r;return typeof readbuffer=="function"?new Uint8Array(readbuffer(e)):(Ee(typeof(r=read(e,"binary"))=="object"),r)},typeof scriptArgs<"u"&&scriptArgs,typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)):(le||I)&&(I?T=self.location.href:document.currentScript&&(T=document.currentScript.src),se&&(T=se),T=T.indexOf("blob:")!==0?T.substr(0,T.lastIndexOf("/")+1):"",ce=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},I&&(Z=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var K,Q,Or=n.print||console.log.bind(console),z=n.printErr||console.warn.bind(console);for(C in E)E.hasOwnProperty(C)&&(n[C]=E[C]);E=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit,n.wasmBinary&&(K=n.wasmBinary),n.noExitRuntime&&n.noExitRuntime,typeof WebAssembly!="object"&&B("no native wasm support detected");var jr=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),Be=!1;function Ee(e,r){e||B("Assertion failed: "+r)}var Ge=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Ne(e,r,t){for(var i=r+t,o=r;e[o]&&!(o>=i);)++o;if(o-r>16&&e.subarray&&Ge)return Ge.decode(e.subarray(r,o));for(var a="";r<o;){var s=e[r++];if(128&s){var u=63&e[r++];if((224&s)!=192){var l=63&e[r++];if((s=(240&s)==224?(15&s)<<12|u<<6|l:(7&s)<<18|u<<12|l<<6|63&e[r++])<65536)a+=String.fromCharCode(s);else{var c=s-65536;a+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else a+=String.fromCharCode((31&s)<<6|u)}else a+=String.fromCharCode(s)}return a}function Le(e,r){return e?Ne(b,e,r):""}function kr(e,r,t,i){if(!(i>0))return 0;for(var o=t,a=t+i-1,s=0;s<e.length;++s){var u=e.charCodeAt(s);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++s)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-o}function Fr(e,r,t){return kr(e,b,r,t)}function Rr(e){for(var r=0,t=0;t<e.length;++t){var i=e.charCodeAt(t);i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++t)),i<=127?++r:r+=i<=2047?2:i<=65535?3:4}return r}var Xe=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function xr(e,r){for(var t=e,i=t>>1,o=i+r/2;!(i>=o)&&ee[i];)++i;if((t=i<<1)-e>32&&Xe)return Xe.decode(b.subarray(e,t));for(var a=0,s="";;){var u=U[e+2*a>>1];if(u==0||a==r/2)return s;++a,s+=String.fromCharCode(u)}}function Dr(e,r,t){if(t===void 0&&(t=2147483647),t<2)return 0;for(var i=r,o=(t-=2)<2*e.length?t/2:e.length,a=0;a<o;++a){var s=e.charCodeAt(a);U[r>>1]=s,r+=2}return U[r>>1]=0,r-i}function Ir(e){return 2*e.length}function Ur(e,r){for(var t=0,i="";!(t>=r/4);){var o=g[e+4*t>>2];if(o==0)break;if(++t,o>=65536){var a=o-65536;i+=String.fromCharCode(55296|a>>10,56320|1023&a)}else i+=String.fromCharCode(o)}return i}function Mr(e,r,t){if(t===void 0&&(t=2147483647),t<4)return 0;for(var i=r,o=i+t-4,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),g[r>>2]=s,(r+=4)+4>o)break}return g[r>>2]=0,r-i}function Vr(e){for(var r=0,t=0;t<e.length;++t){var i=e.charCodeAt(t);i>=55296&&i<=57343&&++t,r+=4}return r}var q,fe,b,U,ee,g,P,Je,Ye,Ze=65536;function Hr(e,r){return e%r>0&&(e+=r-e%r),e}function Ke(e){q=e,n.HEAP8=fe=new Int8Array(e),n.HEAP16=U=new Int16Array(e),n.HEAP32=g=new Int32Array(e),n.HEAPU8=b=new Uint8Array(e),n.HEAPU16=ee=new Uint16Array(e),n.HEAPU32=P=new Uint32Array(e),n.HEAPF32=Je=new Float32Array(e),n.HEAPF64=Ye=new Float64Array(e)}var zr=5565536,qr=322496,Qe=n.INITIAL_MEMORY||16777216;function pe(e){for(;e.length>0;){var r=e.shift();if(typeof r!="function"){var t=r.func;typeof t=="number"?r.arg===void 0?n.dynCall_v(t):n.dynCall_vi(t,r.arg):t(r.arg===void 0?null:r.arg)}else r(n)}}(Q=n.wasmMemory?n.wasmMemory:new WebAssembly.Memory({initial:Qe/Ze,maximum:2147483648/Ze}))&&(q=Q.buffer),Qe=q.byteLength,Ke(q),g[qr>>2]=zr;var er=[],rr=[],Br=[],tr=[];function Gr(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Jr(n.preRun.shift());pe(er)}function Nr(){pe(rr)}function Lr(){pe(Br)}function Xr(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Yr(n.postRun.shift());pe(tr)}function Jr(e){er.unshift(e)}function Yr(e){tr.unshift(e)}var Zr=Math.ceil,Kr=Math.floor,M=0,re=null;function Qr(e){M++,n.monitorRunDependencies&&n.monitorRunDependencies(M)}function et(e){if(M--,n.monitorRunDependencies&&n.monitorRunDependencies(M),M==0&&re){var r=re;re=null,r()}}function B(e){n.onAbort&&n.onAbort(e),z(e+=""),Be=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(e);throw H(r),r}function nr(e,r){return String.prototype.startsWith?e.startsWith(r):e.indexOf(r)===0}n.preloadedImages={},n.preloadedAudios={};var rt="data:application/octet-stream;base64,";function ir(e){return nr(e,rt)}var tt="file://";function or(e){return nr(e,tt)}var A="basis_transcoder.wasm";function ar(){try{if(K)return new Uint8Array(K);if(Z)return Z(A);throw"both async and sync fetching of the wasm failed"}catch(e){B(e)}}function nt(){return K||!le&&!I||typeof fetch!="function"||or(A)?new Promise(function(e,r){e(ar())}):fetch(A,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+A+"'";return e.arrayBuffer()}).catch(function(){return ar()})}function it(){var e={a:An};function r(a,s){var u=a.exports;n.asm=u,et()}function t(a){r(a.instance)}function i(a){return nt().then(function(s){return WebAssembly.instantiate(s,e)}).then(a,function(s){z("failed to asynchronously prepare wasm: "+s),B(s)})}function o(){if(K||typeof WebAssembly.instantiateStreaming!="function"||ir(A)||or(A)||typeof fetch!="function")return i(t);fetch(A,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(t,function(s){return z("wasm streaming compile failed: "+s),z("falling back to ArrayBuffer instantiation"),i(t)})})}if(Qr(),n.instantiateWasm)try{return n.instantiateWasm(e,r)}catch(a){return z("Module.instantiateWasm callback failed with error: "+a),!1}return o(),{}}ir(A)||(A=Sr(A)),rr.push({func:function(){Cr()}});var de={};function ye(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function te(e){return this.fromWireType(P[e>>2])}var G={},V={},me={},ot=48,at=57;function ur(e){if(e===void 0)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=ot&&r<=at?"_"+e:e}function Se(e,r){return e=ur(e),function(){return r.apply(this,arguments)}}function Oe(e,r){var t=Se(r,function(i){this.name=r,this.message=i;var o=new Error(i).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},t}var sr=void 0;function he(e){throw new sr(e)}function F(e,r,t){function i(u){var l=t(u);l.length!==e.length&&he("Mismatched type converter count");for(var c=0;c<e.length;++c)W(e[c],l[c])}e.forEach(function(u){me[u]=r});var o=new Array(r.length),a=[],s=0;r.forEach(function(u,l){V.hasOwnProperty(u)?o[l]=V[u]:(a.push(u),G.hasOwnProperty(u)||(G[u]=[]),G[u].push(function(){o[l]=V[u],++s===a.length&&i(o)}))}),a.length===0&&i(o)}function ut(e){var r=de[e];delete de[e];var t=r.rawConstructor,i=r.rawDestructor,o=r.fields;F([e],o.map(function(a){return a.getterReturnType}).concat(o.map(function(a){return a.setterArgumentType})),function(a){var s={};return o.forEach(function(u,l){var c=u.fieldName,f=a[l],m=u.getter,d=u.getterContext,h=a[l+o.length],$=u.setter,y=u.setterContext;s[c]={read:function(x){return f.fromWireType(m(d,x))},write:function(x,D){var X=[];$(y,x,h.toWireType(X,D)),ye(X)}}}),[{name:r.name,fromWireType:function(u){var l={};for(var c in s)l[c]=s[c].read(u);return i(u),l},toWireType:function(u,l){for(var c in s)if(!(c in l))throw new TypeError('Missing field:  "'+c+'"');var f=t();for(c in s)s[c].write(f,l[c]);return u!==null&&u.push(i,f),f},argPackAdvance:8,readValueFromPointer:te,destructorFunction:i}]})}function ve(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function st(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);lr=e}var lr=void 0;function v(e){for(var r="",t=e;b[t];)r+=lr[b[t++]];return r}var N=void 0;function p(e){throw new N(e)}function W(e,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var i=r.name;if(e||p('type "'+i+'" must have a positive integer typeid pointer'),V.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;p("Cannot register type '"+i+"' twice")}if(V[e]=r,delete me[e],G.hasOwnProperty(e)){var o=G[e];delete G[e],o.forEach(function(a){a()})}}function lt(e,r,t,i,o){var a=ve(t);W(e,{name:r=v(r),fromWireType:function(s){return!!s},toWireType:function(s,u){return u?i:o},argPackAdvance:8,readValueFromPointer:function(s){var u;if(t===1)u=fe;else if(t===2)u=U;else{if(t!==4)throw new TypeError("Unknown boolean type size: "+r);u=g}return this.fromWireType(u[s>>a])},destructorFunction:null})}function ct(e){if(!(this instanceof R)||!(e instanceof R))return!1;for(var r=this.$$.ptrType.registeredClass,t=this.$$.ptr,i=e.$$.ptrType.registeredClass,o=e.$$.ptr;r.baseClass;)t=r.upcast(t),r=r.baseClass;for(;i.baseClass;)o=i.upcast(o),i=i.baseClass;return r===i&&t===o}function ft(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function je(e){function r(t){return t.$$.ptrType.registeredClass.name}p(r(e)+" instance already deleted")}var ke=!1;function cr(e){}function pt(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function fr(e){e.count.value-=1,e.count.value===0&&pt(e)}function ne(e){return typeof FinalizationGroup>"u"?(ne=function(r){return r},e):(ke=new FinalizationGroup(function(r){for(var t=r.next();!t.done;t=r.next()){var i=t.value;i.ptr?fr(i):console.warn("object already deleted: "+i.ptr)}}),ne=function(r){return ke.register(r,r.$$,r.$$),r},cr=function(r){ke.unregister(r.$$)},ne(e))}function dt(){if(this.$$.ptr||je(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ne(Object.create(Object.getPrototypeOf(this),{$$:{value:ft(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function yt(){this.$$.ptr||je(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),cr(this),fr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function mt(){return!this.$$.ptr}var ie=void 0,oe=[];function Fe(){for(;oe.length;){var e=oe.pop();e.$$.deleteScheduled=!1,e.delete()}}function ht(){return this.$$.ptr||je(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),oe.push(this),oe.length===1&&ie&&ie(Fe),this.$$.deleteScheduled=!0,this}function vt(){R.prototype.isAliasOf=ct,R.prototype.clone=dt,R.prototype.delete=yt,R.prototype.isDeleted=mt,R.prototype.deleteLater=ht}function R(){}var pr={};function dr(e,r,t){if(e[r].overloadTable===void 0){var i=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||p("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[i.argCount]=i}}function Re(e,r,t){n.hasOwnProperty(e)?((t===void 0||n[e].overloadTable!==void 0&&n[e].overloadTable[t]!==void 0)&&p("Cannot register public name '"+e+"' twice"),dr(n,e,e),n.hasOwnProperty(t)&&p("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),n[e].overloadTable[t]=r):(n[e]=r,t!==void 0&&(n[e].numArguments=t))}function gt(e,r,t,i,o,a,s,u){this.name=e,this.constructor=r,this.instancePrototype=t,this.rawDestructor=i,this.baseClass=o,this.getActualType=a,this.upcast=s,this.downcast=u,this.pureVirtualFunctions=[]}function xe(e,r,t){for(;r!==t;)r.upcast||p("Expected null or instance of "+t.name+", got an instance of "+r.name),e=r.upcast(e),r=r.baseClass;return e}function bt(e,r){if(r===null)return this.isReference&&p("null is not a valid "+this.name),0;r.$$||p('Cannot pass "'+L(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name);var t=r.$$.ptrType.registeredClass;return xe(r.$$.ptr,t,this.registeredClass)}function $t(e,r){var t;if(r===null)return this.isReference&&p("null is not a valid "+this.name),this.isSmartPointer?(t=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,t),t):0;r.$$||p('Cannot pass "'+L(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);var i=r.$$.ptrType.registeredClass;if(t=xe(r.$$.ptr,i,this.registeredClass),this.isSmartPointer)switch(r.$$.smartPtr===void 0&&p("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?t=r.$$.smartPtr:p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:t=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)t=r.$$.smartPtr;else{var o=r.clone();t=this.rawShare(t,O(function(){o.delete()})),e!==null&&e.push(this.rawDestructor,t)}break;default:p("Unsupporting sharing policy")}return t}function Ct(e,r){if(r===null)return this.isReference&&p("null is not a valid "+this.name),0;r.$$||p('Cannot pass "'+L(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&p("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name);var t=r.$$.ptrType.registeredClass;return xe(r.$$.ptr,t,this.registeredClass)}function wt(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function Tt(e){this.rawDestructor&&this.rawDestructor(e)}function _t(e){e!==null&&e.delete()}function yr(e,r,t){if(r===t)return e;if(t.baseClass===void 0)return null;var i=yr(e,r,t.baseClass);return i===null?null:t.downcast(i)}function Pt(){return Object.keys(ae).length}function At(){var e=[];for(var r in ae)ae.hasOwnProperty(r)&&e.push(ae[r]);return e}function Wt(e){ie=e,oe.length&&ie&&ie(Fe)}function Et(){n.getInheritedInstanceCount=Pt,n.getLiveInheritedInstances=At,n.flushPendingDeletes=Fe,n.setDelayFunction=Wt}var ae={};function St(e,r){for(r===void 0&&p("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r}function Ot(e,r){return r=St(e,r),ae[r]}function ge(e,r){return r.ptrType&&r.ptr||he("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&he("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ne(Object.create(e,{$$:{value:r}}))}function jt(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var t=Ot(this.registeredClass,r);if(t!==void 0){if(t.$$.count.value===0)return t.$$.ptr=r,t.$$.smartPtr=e,t.clone();var i=t.clone();return this.destructor(e),i}function o(){return this.isSmartPointer?ge(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}):ge(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var a,s=this.registeredClass.getActualType(r),u=pr[s];if(!u)return o.call(this);a=this.isConst?u.constPointerType:u.pointerType;var l=yr(r,this.registeredClass,a.registeredClass);return l===null?o.call(this):this.isSmartPointer?ge(a.registeredClass.instancePrototype,{ptrType:a,ptr:l,smartPtrType:this,smartPtr:e}):ge(a.registeredClass.instancePrototype,{ptrType:a,ptr:l})}function kt(){S.prototype.getPointee=wt,S.prototype.destructor=Tt,S.prototype.argPackAdvance=8,S.prototype.readValueFromPointer=te,S.prototype.deleteObject=_t,S.prototype.fromWireType=jt}function S(e,r,t,i,o,a,s,u,l,c,f){this.name=e,this.registeredClass=r,this.isReference=t,this.isConst=i,this.isSmartPointer=o,this.pointeeType=a,this.sharingPolicy=s,this.rawGetPointee=u,this.rawConstructor=l,this.rawShare=c,this.rawDestructor=f,o||r.baseClass!==void 0?this.toWireType=$t:i?(this.toWireType=bt,this.destructorFunction=null):(this.toWireType=Ct,this.destructorFunction=null)}function mr(e,r,t){n.hasOwnProperty(e)||he("Replacing nonexistant public symbol"),n[e].overloadTable!==void 0&&t!==void 0?n[e].overloadTable[t]=r:(n[e]=r,n[e].argCount=t)}function _(e,r){function t(o){var a=[r];return function(){a.length=arguments.length+1;for(var s=0;s<arguments.length;s++)a[s+1]=arguments[s];return o.apply(null,a)}}e=v(e);var i=t(n["dynCall_"+e]);return typeof i!="function"&&p("unknown function pointer with signature "+e+": "+r),i}var hr=void 0;function vr(e){var r=wr(e),t=v(r);return j(r),t}function be(e,r){var t=[],i={};function o(a){i[a]||V[a]||(me[a]?me[a].forEach(o):(t.push(a),i[a]=!0))}throw r.forEach(o),new hr(e+": "+t.map(vr).join([", "]))}function Ft(e,r,t,i,o,a,s,u,l,c,f,m,d){f=v(f),a=_(o,a),u&&(u=_(s,u)),c&&(c=_(l,c)),d=_(m,d);var h=ur(f);Re(h,function(){be("Cannot construct "+f+" due to unbound types",[i])}),F([e,r,t],i?[i]:[],function($){var y,x;$=$[0],x=i?(y=$.registeredClass).instancePrototype:R.prototype;var D=Se(h,function(){if(Object.getPrototypeOf(this)!==X)throw new N("Use 'new' to construct "+f);if(J.constructor_body===void 0)throw new N(f+" has no accessible constructor");var Pr=J.constructor_body[arguments.length];if(Pr===void 0)throw new N("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(J.constructor_body).toString()+") parameters instead!");return Pr.apply(this,arguments)}),X=Object.create(x,{constructor:{value:D}});D.prototype=X;var J=new gt(f,D,X,d,y,a,u,c),En=new S(f,J,!0,!1,!1),Tr=new S(f+"*",J,!1,!1,!1),_r=new S(f+" const*",J,!1,!0,!1);return pr[e]={pointerType:Tr,constPointerType:_r},mr(h,D),[En,Tr,_r]})}function De(e,r){for(var t=[],i=0;i<e;i++)t.push(g[(r>>2)+i]);return t}function Rt(e,r,t,i,o,a){Ee(r>0);var s=De(r,t);o=_(i,o);var u=[a],l=[];F([],[e],function(c){var f="constructor "+(c=c[0]).name;if(c.registeredClass.constructor_body===void 0&&(c.registeredClass.constructor_body=[]),c.registeredClass.constructor_body[r-1]!==void 0)throw new N("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+c.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return c.registeredClass.constructor_body[r-1]=function(){be("Cannot construct "+c.name+" due to unbound types",s)},F([],s,function(m){return c.registeredClass.constructor_body[r-1]=function(){arguments.length!==r-1&&p(f+" called with "+arguments.length+" arguments, expected "+(r-1)),l.length=0,u.length=r;for(var d=1;d<r;++d)u[d]=m[d].toWireType(l,arguments[d-1]);var h=o.apply(null,u);return ye(l),m[0].fromWireType(h)},[]}),[]})}function gr(e,r,t,i,o){var a=r.length;a<2&&p("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=r[1]!==null&&t!==null,u=!1,l=1;l<r.length;++l)if(r[l]!==null&&r[l].destructorFunction===void 0){u=!0;break}var c=r[0].name!=="void",f=a-2,m=new Array(f),d=[],h=[];return function(){var $;arguments.length!==f&&p("function "+e+" called with "+arguments.length+" arguments, expected "+f+" args!"),h.length=0,d.length=s?2:1,d[0]=o,s&&($=r[1].toWireType(h,this),d[1]=$);for(var y=0;y<f;++y)m[y]=r[y+2].toWireType(h,arguments[y]),d.push(m[y]);var x=i.apply(null,d);if(u)ye(h);else for(y=s?1:2;y<r.length;y++){var D=y===1?$:m[y-2];r[y].destructorFunction!==null&&r[y].destructorFunction(D)}if(c)return r[0].fromWireType(x)}}function xt(e,r,t,i,o,a,s,u){var l=De(t,i);r=v(r),a=_(o,a),F([],[e],function(c){var f=(c=c[0]).name+"."+r;function m(){be("Cannot call "+f+" due to unbound types",l)}u&&c.registeredClass.pureVirtualFunctions.push(r);var d=c.registeredClass.instancePrototype,h=d[r];return h===void 0||h.overloadTable===void 0&&h.className!==c.name&&h.argCount===t-2?(m.argCount=t-2,m.className=c.name,d[r]=m):(dr(d,r,f),d[r].overloadTable[t-2]=m),F([],l,function($){var y=gr(f,$,c,a,s);return d[r].overloadTable===void 0?(y.argCount=t-2,d[r]=y):d[r].overloadTable[t-2]=y,[]}),[]})}function Dt(e,r,t){e=v(e),F([],[r],function(i){return i=i[0],n[e]=i.fromWireType(t),[]})}var Ie=[],w=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ue(e){e>4&&--w[e].refcount==0&&(w[e]=void 0,Ie.push(e))}function It(){for(var e=0,r=5;r<w.length;++r)w[r]!==void 0&&++e;return e}function Ut(){for(var e=5;e<w.length;++e)if(w[e]!==void 0)return w[e];return null}function Mt(){n.count_emval_handles=It,n.get_first_emval=Ut}function O(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Ie.length?Ie.pop():w.length;return w[r]={refcount:1,value:e},r}}function Vt(e,r){W(e,{name:r=v(r),fromWireType:function(t){var i=w[t].value;return Ue(t),i},toWireType:function(t,i){return O(i)},argPackAdvance:8,readValueFromPointer:te,destructorFunction:null})}function Ht(e,r,t){switch(r){case 0:return function(i){var o=t?fe:b;return this.fromWireType(o[i])};case 1:return function(i){var o=t?U:ee;return this.fromWireType(o[i>>1])};case 2:return function(i){var o=t?g:P;return this.fromWireType(o[i>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function zt(e,r,t,i){var o=ve(t);function a(){}r=v(r),a.values={},W(e,{name:r,constructor:a,fromWireType:function(s){return this.constructor.values[s]},toWireType:function(s,u){return u.value},argPackAdvance:8,readValueFromPointer:Ht(r,o,i),destructorFunction:null}),Re(r,a)}function $e(e,r){var t=V[e];return t===void 0&&p(r+" has unknown type "+vr(e)),t}function qt(e,r,t){var i=$e(e,"enum");r=v(r);var o=i.constructor,a=Object.create(i.constructor.prototype,{value:{value:t},constructor:{value:Se(i.name+"_"+r,function(){})}});o.values[t]=a,o[r]=a}function L(e){if(e===null)return"null";var r=typeof e;return r==="object"||r==="array"||r==="function"?e.toString():""+e}function Bt(e,r){switch(r){case 2:return function(t){return this.fromWireType(Je[t>>2])};case 3:return function(t){return this.fromWireType(Ye[t>>3])};default:throw new TypeError("Unknown float type: "+e)}}function Gt(e,r,t){var i=ve(t);W(e,{name:r=v(r),fromWireType:function(o){return o},toWireType:function(o,a){if(typeof a!="number"&&typeof a!="boolean")throw new TypeError('Cannot convert "'+L(a)+'" to '+this.name);return a},argPackAdvance:8,readValueFromPointer:Bt(r,i),destructorFunction:null})}function Nt(e,r,t,i,o,a){var s=De(r,t);e=v(e),o=_(i,o),Re(e,function(){be("Cannot call "+e+" due to unbound types",s)},r-1),F([],s,function(u){var l=[u[0],null].concat(u.slice(1));return mr(e,gr(e,l,null,o,a),r-1),[]})}function Lt(e,r,t){switch(r){case 0:return t?function(i){return fe[i]}:function(i){return b[i]};case 1:return t?function(i){return U[i>>1]}:function(i){return ee[i>>1]};case 2:return t?function(i){return g[i>>2]}:function(i){return P[i>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function Xt(e,r,t,i,o){r=v(r),o===-1&&(o=4294967295);var a=ve(t),s=function(c){return c};if(i===0){var u=32-8*t;s=function(c){return c<<u>>>u}}var l=r.indexOf("unsigned")!=-1;W(e,{name:r,fromWireType:s,toWireType:function(c,f){if(typeof f!="number"&&typeof f!="boolean")throw new TypeError('Cannot convert "'+L(f)+'" to '+this.name);if(f<i||f>o)throw new TypeError('Passing a number "'+L(f)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+i+", "+o+"]!");return l?f>>>0:0|f},argPackAdvance:8,readValueFromPointer:Lt(r,a,i!==0),destructorFunction:null})}function Jt(e,r,t){var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(a){var s=P,u=s[a>>=2],l=s[a+1];return new i(q,l,u)}W(e,{name:t=v(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function Yt(e,r){var t=(r=v(r))==="std::string";W(e,{name:r,fromWireType:function(i){var o,a=P[i>>2];if(t)for(var s=i+4,u=0;u<=a;++u){var l=i+4+u;if(u==a||b[l]==0){var c=Le(s,l-s);o===void 0?o=c:(o+=String.fromCharCode(0),o+=c),s=l+1}}else{var f=new Array(a);for(u=0;u<a;++u)f[u]=String.fromCharCode(b[i+4+u]);o=f.join("")}return j(i),o},toWireType:function(i,o){o instanceof ArrayBuffer&&(o=new Uint8Array(o));var a=typeof o=="string";a||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||p("Cannot pass non-string to std::string");var s=(t&&a?function(){return Rr(o)}:function(){return o.length})(),u=Ve(4+s+1);if(P[u>>2]=s,t&&a)Fr(o,u+4,s+1);else if(a)for(var l=0;l<s;++l){var c=o.charCodeAt(l);c>255&&(j(u),p("String has UTF-16 code units that do not fit in 8 bits")),b[u+4+l]=c}else for(l=0;l<s;++l)b[u+4+l]=o[l];return i!==null&&i.push(j,u),u},argPackAdvance:8,readValueFromPointer:te,destructorFunction:function(i){j(i)}})}function Zt(e,r,t){var i,o,a,s,u;t=v(t),r===2?(i=xr,o=Dr,s=Ir,a=function(){return ee},u=1):r===4&&(i=Ur,o=Mr,s=Vr,a=function(){return P},u=2),W(e,{name:t,fromWireType:function(l){for(var c,f=P[l>>2],m=a(),d=l+4,h=0;h<=f;++h){var $=l+4+h*r;if(h==f||m[$>>u]==0){var y=i(d,$-d);c===void 0?c=y:(c+=String.fromCharCode(0),c+=y),d=$+r}}return j(l),c},toWireType:function(l,c){typeof c!="string"&&p("Cannot pass non-string to C++ string type "+t);var f=s(c),m=Ve(4+f+r);return P[m>>2]=f>>u,o(c,m+4,f+r),l!==null&&l.push(j,m),m},argPackAdvance:8,readValueFromPointer:te,destructorFunction:function(l){j(l)}})}function Kt(e,r,t,i,o,a){de[e]={name:v(r),rawConstructor:_(t,i),rawDestructor:_(o,a),fields:[]}}function Qt(e,r,t,i,o,a,s,u,l,c){de[e].fields.push({fieldName:v(r),getterReturnType:t,getter:_(i,o),getterContext:a,setterArgumentType:s,setter:_(u,l),setterContext:c})}function en(e,r){W(e,{isVoid:!0,name:r=v(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,i){}})}function ue(e){return e||p("Cannot use deleted val. handle = "+e),w[e].value}function rn(e,r,t){e=ue(e),r=$e(r,"emval::as");var i=[],o=O(i);return g[t>>2]=o,r.toWireType(i,e)}var tn={};function Ce(e){var r=tn[e];return r===void 0?v(e):r}var Me=[];function nn(e,r,t,i){(e=Me[e])(r=ue(r),t=Ce(t),null,i)}function br(){if(typeof globalThis=="object")return globalThis;function e(r){r.$$$embind_global$$$=r;var t=typeof $$$embind_global$$$=="object"&&r.$$$embind_global$$$===r;return t||delete r.$$$embind_global$$$,t}if(typeof $$$embind_global$$$=="object"||(typeof ze=="object"&&e(ze)?$$$embind_global$$$=ze:typeof self=="object"&&e(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function on(e){return e===0?O(br()):(e=Ce(e),O(br()[e]))}function an(e){var r=Me.length;return Me.push(e),r}function un(e,r){for(var t=new Array(e),i=0;i<e;++i)t[i]=$e(g[(r>>2)+i],"parameter "+i);return t}function sn(e,r){var t=un(e,r),i=t[0],o=new Array(e-1);return an(function(a,s,u,l){for(var c=0,f=0;f<e-1;++f)o[f]=t[f+1].readValueFromPointer(l+c),c+=t[f+1].argPackAdvance;var m=a[s].apply(a,o);for(f=0;f<e-1;++f)t[f+1].deleteObject&&t[f+1].deleteObject(o[f]);if(!i.isVoid)return i.toWireType(u,m)})}function ln(e){return e=Ce(e),O(n[e])}function cn(e,r){return O((e=ue(e))[r=ue(r)])}function fn(e){e>4&&(w[e].refcount+=1)}function pn(e){var r=new Array(e+1);return function(t,i,o){r[0]=t;for(var a=0;a<e;++a){var s=$e(g[(i>>2)+a],"parameter "+a);r[a+1]=s.readValueFromPointer(o),o+=s.argPackAdvance}return O(new(t.bind.apply(t,r)))}}var $r={};function dn(e,r,t,i){e=ue(e);var o=$r[r];return o||(o=pn(r),$r[r]=o),o(e,t,i)}function yn(e){return O(Ce(e))}function mn(e){ye(w[e].value),Ue(e)}function hn(){B()}function vn(e,r,t){b.copyWithin(e,r,r+t)}function gn(){return b.length}function bn(e){try{return Q.grow(e-q.byteLength+65535>>>16),Ke(Q.buffer),1}catch{}}function $n(e){e>>>=0;var r=gn(),t=65536,i=2147483648;if(e>i)return!1;for(var o=16777216,a=1;a<=4;a*=2){var s=r*(1+.2/a);if(s=Math.min(s,e+100663296),bn(Math.min(i,Hr(Math.max(o,e,s),t))))return!0}return!1}var we={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var t=we.buffers[e];r===0||r===10?((e===1?Or:z)(Ne(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return we.varargs+=4,g[we.varargs-4>>2]},getStr:function(e){return Le(e)},get64:function(e,r){return e}};function Cn(e){return 0}function wn(e,r,t,i,o){}function Tn(e,r,t,i){for(var o=0,a=0;a<t;a++){for(var s=g[r+8*a>>2],u=g[r+(8*a+4)>>2],l=0;l<u;l++)we.printChar(e,b[s+l]);o+=u}return g[i>>2]=o,0}function _n(e){return(e=+e)>=0?+Kr(e+.5):+Zr(e-.5)}function Pn(e){}sr=n.InternalError=Oe(Error,"InternalError"),st(),N=n.BindingError=Oe(Error,"BindingError"),vt(),kt(),Et(),hr=n.UnboundTypeError=Oe(Error,"UnboundTypeError"),Mt();var An={u:ut,J:lt,y:Ft,x:Rt,d:xt,k:Dt,I:Vt,n:zt,a:qt,B:Gt,i:Nt,j:Xt,h:Jt,C:Yt,w:Zt,v:Kt,c:Qt,K:en,m:rn,s:nn,b:Ue,z:on,t:sn,r:ln,e:cn,g:fn,q:dn,f:yn,l:mn,p:hn,F:vn,G:$n,H:Cn,D:wn,A:Tn,memory:Q,o:_n,E:Pn,table:jr};it();var Te,Cr=n.___wasm_call_ctors=function(){return(Cr=n.___wasm_call_ctors=n.asm.L).apply(null,arguments)},Ve=n._malloc=function(){return(Ve=n._malloc=n.asm.M).apply(null,arguments)},j=n._free=function(){return(j=n._free=n.asm.N).apply(null,arguments)},wr=n.___getTypeName=function(){return(wr=n.___getTypeName=n.asm.O).apply(null,arguments)};function Wn(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function He(e){function r(){Te||(Te=!0,n.calledRun=!0,Be||(Nr(),Lr(),Y(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),Xr()))}M>0||(Gr(),M>0||(n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),r()},1)):r()))}if(n.___embind_register_native_and_builtin_types=function(){return(n.___embind_register_native_and_builtin_types=n.asm.P).apply(null,arguments)},n.dynCall_viii=function(){return(n.dynCall_viii=n.asm.Q).apply(null,arguments)},n.dynCall_vi=function(){return(n.dynCall_vi=n.asm.R).apply(null,arguments)},n.dynCall_v=function(){return(n.dynCall_v=n.asm.S).apply(null,arguments)},n.dynCall_i=function(){return(n.dynCall_i=n.asm.T).apply(null,arguments)},n.dynCall_iii=function(){return(n.dynCall_iii=n.asm.U).apply(null,arguments)},n.dynCall_ii=function(){return(n.dynCall_ii=n.asm.V).apply(null,arguments)},n.dynCall_vii=function(){return(n.dynCall_vii=n.asm.W).apply(null,arguments)},n.dynCall_iiii=function(){return(n.dynCall_iiii=n.asm.X).apply(null,arguments)},n.dynCall_iiiii=function(){return(n.dynCall_iiiii=n.asm.Y).apply(null,arguments)},n.dynCall_iiiiii=function(){return(n.dynCall_iiiiii=n.asm.Z).apply(null,arguments)},n.dynCall_iiiiiiii=function(){return(n.dynCall_iiiiiiii=n.asm._).apply(null,arguments)},n.dynCall_iiiiiiiii=function(){return(n.dynCall_iiiiiiiii=n.asm.$).apply(null,arguments)},n.dynCall_viiii=function(){return(n.dynCall_viiii=n.asm.aa).apply(null,arguments)},n.dynCall_iiiiiii=function(){return(n.dynCall_iiiiiii=n.asm.ba).apply(null,arguments)},n.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiiiiiiiiiiii=n.asm.ca).apply(null,arguments)},n.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiiiiiiiiiiiii=n.asm.da).apply(null,arguments)},n.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiiiiiiiiiii=n.asm.ea).apply(null,arguments)},n.dynCall_viiiii=function(){return(n.dynCall_viiiii=n.asm.fa).apply(null,arguments)},n.dynCall_iiiiiiiiii=function(){return(n.dynCall_iiiiiiiiii=n.asm.ga).apply(null,arguments)},n.dynCall_iiiiiiiiiii=function(){return(n.dynCall_iiiiiiiiiii=n.asm.ha).apply(null,arguments)},n.dynCall_jiji=function(){return(n.dynCall_jiji=n.asm.ia).apply(null,arguments)},n.dynCall_viiiiii=function(){return(n.dynCall_viiiiii=n.asm.ja).apply(null,arguments)},re=function e(){Te||He(),Te||(re=e)},n.run=He,n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return He(),k.ready},Ar.exports=Wr;var Er=_e.exports;const kn=On({__proto__:null,default:Sn(Er)},[Er]);export{kn as b};