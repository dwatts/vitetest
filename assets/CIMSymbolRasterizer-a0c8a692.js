import{bG as de,ce as ne,lX as ae,lY as fe,lZ as me,cA as W,b8 as ie,aq as se,d7 as pe,l_ as ge,l$ as ye,m0 as ve,m1 as U,gq as j,gt as O,m2 as we,bv as _e,m3 as be,m4 as X}from"./index-c2655857.js";import{M as xe,i as B,l as Z,t as K,a as Ce,r as ke,n as Me,e as Ie,G as ze,V as Pe,Q as Ae}from"./cimAnalyzer-08cbd577.js";import{o as Re}from"./imageutils-a65e88aa.js";import{r as Fe,e as Ue}from"./rasterizingUtils-3cc107a1.js";import"./TileClipper-ae6eca9e.js";import"./definitions-411d1582.js";import"./number-e491b09e.js";import"./BidiEngine-9a40f2f4.js";var ee,te,Y={exports:{}};Y.exports,ee=Y,Y.exports,te=function(){return function(u){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return u[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}return e.m=u,e.c=t,e.p="",e(0)}([function(u,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.isNotPNG=s,t.isNotAPNG=l,t.default=c;var n=o(e(1)),i=e(2);function o(m){return m&&m.__esModule?m:{default:m}}var h=new Error("Not a PNG"),a=new Error("Not an animated PNG");function s(m){return m===h}function l(m){return m===a}var r=new Uint8Array([137,80,78,71,13,10,26,10]);function c(m){var v=new Uint8Array(m);if(Array.prototype.some.call(r,function(I,M){return I!==v[M]}))return h;var _=!1;if(d(v,function(I){return!(_=I==="acTL")}),!_)return a;var b=[],x=[],C=null,w=null,z=0,P=new i.APNG;if(d(v,function(I,M,A,L){var D=new DataView(M.buffer);switch(I){case"IHDR":C=M.subarray(A+8,A+8+L),P.width=D.getUint32(A+8),P.height=D.getUint32(A+12);break;case"acTL":P.numPlays=D.getUint32(A+8+4);break;case"fcTL":w&&(P.frames.push(w),z++),(w=new i.Frame).width=D.getUint32(A+8+4),w.height=D.getUint32(A+8+8),w.left=D.getUint32(A+8+12),w.top=D.getUint32(A+8+16);var N=D.getUint16(A+8+20),T=D.getUint16(A+8+22);T===0&&(T=100),w.delay=1e3*N/T,w.delay<=10&&(w.delay=100),P.playTime+=w.delay,w.disposeOp=D.getUint8(A+8+24),w.blendOp=D.getUint8(A+8+25),w.dataParts=[],z===0&&w.disposeOp===2&&(w.disposeOp=1);break;case"fdAT":w&&w.dataParts.push(M.subarray(A+8+4,A+8+L));break;case"IDAT":w&&w.dataParts.push(M.subarray(A+8,A+8+L));break;case"IEND":x.push(g(M,A,12+L));break;default:b.push(g(M,A,12+L))}}),w&&P.frames.push(w),P.frames.length==0)return a;var S=new Blob(b),F=new Blob(x);return P.frames.forEach(function(I){var M=[];M.push(r),C.set(k(I.width),0),C.set(k(I.height),4),M.push(y("IHDR",C)),M.push(S),I.dataParts.forEach(function(A){return M.push(y("IDAT",A))}),M.push(F),I.imageData=new Blob(M,{type:"image/png"}),delete I.dataParts,M=null}),P}function d(m,v){var _=new DataView(m.buffer),b=8,x=void 0,C=void 0,w=void 0;do C=_.getUint32(b),w=v(x=f(m,b+4,4),m,b,C),b+=12+C;while(w!==!1&&x!="IEND"&&b<m.length)}function f(m,v,_){var b=Array.prototype.slice.call(m.subarray(v,v+_));return String.fromCharCode.apply(String,b)}function p(m){for(var v=new Uint8Array(m.length),_=0;_<m.length;_++)v[_]=m.charCodeAt(_);return v}function g(m,v,_){var b=new Uint8Array(_);return b.set(m.subarray(v,v+_)),b}var y=function(m,v){var _=m.length+v.length,b=new Uint8Array(_+8),x=new DataView(b.buffer);x.setUint32(0,v.length),b.set(p(m),4),b.set(v,8);var C=(0,n.default)(b,4,_);return x.setUint32(_+4,C),b},k=function(m){return new Uint8Array([m>>>24&255,m>>>16&255,m>>>8&255,255&m])}},function(u,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(h){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=-1,l=a,r=a+(arguments.length>2&&arguments[2]!==void 0?arguments[2]:h.length-a);l<r;l++)s=s>>>8^e[255&(s^h[l])];return-1^s};for(var e=new Uint32Array(256),n=0;n<256;n++){for(var i=n,o=0;o<8;o++)i=1&i?3988292384^i>>>1:i>>>1;e[n]=i}},function(u,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.Frame=t.APNG=void 0;var n=function(){function a(s,l){for(var r=0;r<l.length;r++){var c=l[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(s,c.key,c)}}return function(s,l,r){return l&&a(s.prototype,l),r&&a(s,r),s}}(),i=o(e(3));function o(a){return a&&a.__esModule?a:{default:a}}function h(a,s){if(!(a instanceof s))throw new TypeError("Cannot call a class as a function")}t.APNG=function(){function a(){h(this,a),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return n(a,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(s){return s.createImage()}))}},{key:"getPlayer",value:function(s){var l=this,r=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return this.createImages().then(function(){return new i.default(l,s,r)})}}]),a}(),t.Frame=function(){function a(){h(this,a),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return n(a,[{key:"createImage",value:function(){var s=this;return this.imageElement?Promise.resolve():new Promise(function(l,r){var c=URL.createObjectURL(s.imageData);s.imageElement=document.createElement("img"),s.imageElement.onload=function(){URL.revokeObjectURL(c),l()},s.imageElement.onerror=function(){URL.revokeObjectURL(c),s.imageElement=null,r(new Error("Image creation error"))},s.imageElement.src=c})}}]),a}()},function(u,t,e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function l(r,c){for(var d=0;d<c.length;d++){var f=c[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(r,f.key,f)}}return function(r,c,d){return c&&l(r.prototype,c),d&&l(r,d),r}}();function i(l){return l&&l.__esModule?l:{default:l}}function o(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}function h(l,r){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?l:r}function a(l,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);l.prototype=Object.create(r&&r.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(l,r):l.__proto__=r)}var s=function(l){function r(c,d,f){o(this,r);var p=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return p.playbackRate=1,p._currentFrameNumber=0,p._ended=!1,p._paused=!0,p._numPlays=0,p._apng=c,p.context=d,p.stop(),f&&p.play(),p}return a(r,l),n(r,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,this._apng.numPlays!==0&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&this._prevFrame.disposeOp==1?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&this._prevFrame.disposeOp==2&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var c=this.currentFrame;this._prevFrame=c,this._prevFrameData=null,c.disposeOp==2&&(this._prevFrameData=this.context.getImageData(c.left,c.top,c.width,c.height)),c.blendOp==0&&this.context.clearRect(c.left,c.top,c.width,c.height),this.context.drawImage(c.imageElement,c.left,c.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var c=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var d=performance.now()+this.currentFrame.delay/this.playbackRate,f=function p(g){if(!c._ended&&!c._paused){if(g>=d){for(;g-d>=c._apng.playTime/c.playbackRate;)d+=c._apng.playTime/c.playbackRate,c._numPlays++;do c.renderNextFrame(),d+=c.currentFrame.delay/c.playbackRate;while(!c._ended&&g>d)}requestAnimationFrame(p)}};requestAnimationFrame(f)}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),r}(i(e(4)).default);t.default=s},function(u,t){function e(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(a){return typeof a=="function"}function i(a){return typeof a=="number"}function o(a){return typeof a=="object"&&a!==null}function h(a){return a===void 0}u.exports=e,e.EventEmitter=e,e.prototype._events=void 0,e.prototype._maxListeners=void 0,e.defaultMaxListeners=10,e.prototype.setMaxListeners=function(a){if(!i(a)||a<0||isNaN(a))throw TypeError("n must be a positive number");return this._maxListeners=a,this},e.prototype.emit=function(a){var s,l,r,c,d,f;if(this._events||(this._events={}),a==="error"&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((s=arguments[1])instanceof Error)throw s;var p=new Error('Uncaught, unspecified "error" event. ('+s+")");throw p.context=s,p}if(h(l=this._events[a]))return!1;if(n(l))switch(arguments.length){case 1:l.call(this);break;case 2:l.call(this,arguments[1]);break;case 3:l.call(this,arguments[1],arguments[2]);break;default:c=Array.prototype.slice.call(arguments,1),l.apply(this,c)}else if(o(l))for(c=Array.prototype.slice.call(arguments,1),r=(f=l.slice()).length,d=0;d<r;d++)f[d].apply(this,c);return!0},e.prototype.addListener=function(a,s){var l;if(!n(s))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,n(s.listener)?s.listener:s),this._events[a]?o(this._events[a])?this._events[a].push(s):this._events[a]=[this._events[a],s]:this._events[a]=s,o(this._events[a])&&!this._events[a].warned&&(l=h(this._maxListeners)?e.defaultMaxListeners:this._maxListeners)&&l>0&&this._events[a].length>l&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),typeof console.trace=="function"&&console.trace()),this},e.prototype.on=e.prototype.addListener,e.prototype.once=function(a,s){if(!n(s))throw TypeError("listener must be a function");var l=!1;function r(){this.removeListener(a,r),l||(l=!0,s.apply(this,arguments))}return r.listener=s,this.on(a,r),this},e.prototype.removeListener=function(a,s){var l,r,c,d;if(!n(s))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=(l=this._events[a]).length,r=-1,l===s||n(l.listener)&&l.listener===s)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,s);else if(o(l)){for(d=c;d-- >0;)if(l[d]===s||l[d].listener&&l[d].listener===s){r=d;break}if(r<0)return this;l.length===1?(l.length=0,delete this._events[a]):l.splice(r,1),this._events.removeListener&&this.emit("removeListener",a,s)}return this},e.prototype.removeAllListeners=function(a){var s,l;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[a]&&delete this._events[a],this;if(arguments.length===0){for(s in this._events)s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events={},this}if(n(l=this._events[a]))this.removeListener(a,l);else if(l)for(;l.length;)this.removeListener(a,l[l.length-1]);return delete this._events[a],this},e.prototype.listeners=function(a){return this._events&&this._events[a]?n(this._events[a])?[this._events[a]]:this._events[a].slice():[]},e.prototype.listenerCount=function(a){if(this._events){var s=this._events[a];if(n(s))return 1;if(s)return s.length}return 0},e.listenerCount=function(a,s){return a.listenerCount(s)}}])},ee.exports=te();const Se=de(Y.exports);async function De(u,t){const e=Se(u);if(e instanceof Error)throw e;await e.createImages(),ne(t);const{frames:n,width:i,height:o}=e,h=document.createElement("canvas");h.width=i,h.height=o;const a=h.getContext("2d",{willReadFrequently:!0}),s=[],l=[];for(const r of n){l.push(ae(r.delay||100));const c=r.imageElement;r.blendOp===0?a.globalCompositeOperation="copy":a.globalCompositeOperation="source-over";const d=r.disposeOp===2?a.getImageData(r.left,r.top,r.width,r.height):void 0;a.drawImage(c,r.left,r.top);const f=a.getImageData(0,0,i,o);s.push(f),r.disposeOp===0||(r.disposeOp===1?a.clearRect(r.left,r.top,r.width,r.height):r.disposeOp===2&&a.putImageData(d,r.left,r.top))}return{frameDurations:l,getFrame:r=>s[r],width:i,height:o}}const Oe=[137,80,78,71,13,10,26,10];function $e(u){const t=new Uint8Array(u);return!Oe.some((e,n)=>e!==t[n])}function Le(u){if(!$e(u))return!1;const t=new DataView(u),e=new Uint8Array(u);let n,i=8;do{const o=t.getUint32(i);if(n=String.fromCharCode.apply(String,Array.prototype.slice.call(e.subarray(i+4,i+8))),n==="acTL")return!0;i+=12+o}while(n!=="IEND"&&i<e.length);return!1}var E={},oe={},$={};Object.defineProperty($,"__esModule",{value:!0}),$.loop=$.conditional=$.parse=void 0;var Be=function u(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;if(Array.isArray(e))e.forEach(function(h){return u(t,h,n,i)});else if(typeof e=="function")e(t,n,i,u);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(i[o]={},u(t,e[o],n,i[o])):i[o]=e[o](t,n,i,u)}return n};$.parse=Be;var Ee=function(u,t){return function(e,n,i,o){t(e,n,i)&&o(e,u,n,i)}};$.conditional=Ee;var Te=function(u,t){return function(e,n,i,o){for(var h=[],a=e.pos;t(e,n,i);){var s={};if(o(e,u,n,s),e.pos===a)break;a=e.pos,h.push(s)}return h}};$.loop=Te;var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.readBits=R.readArray=R.readUnsigned=R.readString=R.peekBytes=R.readBytes=R.peekByte=R.readByte=R.buildStream=void 0;var Ne=function(u){return{data:u,pos:0}};R.buildStream=Ne;var ce=function(){return function(u){return u.data[u.pos++]}};R.readByte=ce;var je=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(t){return t.data[t.pos+u]}};R.peekByte=je;var q=function(u){return function(t){return t.data.subarray(t.pos,t.pos+=u)}};R.readBytes=q;var Xe=function(u){return function(t){return t.data.subarray(t.pos,t.pos+u)}};R.peekBytes=Xe;var Ye=function(u){return function(t){return Array.from(q(u)(t)).map(function(e){return String.fromCharCode(e)}).join("")}};R.readString=Ye;var Ge=function(u){return function(t){var e=q(2)(t);return u?(e[1]<<8)+e[0]:(e[0]<<8)+e[1]}};R.readUnsigned=Ge;var He=function(u,t){return function(e,n,i){for(var o=typeof t=="function"?t(e,n,i):t,h=q(u),a=new Array(o),s=0;s<o;s++)a[s]=h(e);return a}};R.readArray=He;var qe=function(u,t,e){for(var n=0,i=0;i<e;i++)n+=u[t+i]&&Math.pow(2,e-i-1);return n},Ve=function(u){return function(t){for(var e=ce()(t),n=new Array(8),i=0;i<8;i++)n[7-i]=!!(e&1<<i);return Object.keys(u).reduce(function(o,h){var a=u[h];return a.length?o[h]=qe(n,a.index,a.length):o[h]=n[a.index],o},{})}};R.readBits=Ve,function(u){Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var t=$,e=R,n={blocks:function(r){for(var c=0,d=[],f=r.data.length,p=0,g=(0,e.readByte)()(r);g!==c&&g;g=(0,e.readByte)()(r)){if(r.pos+g>=f){var y=f-r.pos;d.push((0,e.readBytes)(y)(r)),p+=y;break}d.push((0,e.readBytes)(g)(r)),p+=g}for(var k=new Uint8Array(p),m=0,v=0;v<d.length;v++)k.set(d[v],m),m+=d[v].length;return k}},i=(0,t.conditional)({gce:[{codes:(0,e.readBytes)(2)},{byteSize:(0,e.readByte)()},{extras:(0,e.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,e.readUnsigned)(!0)},{transparentColorIndex:(0,e.readByte)()},{terminator:(0,e.readByte)()}]},function(r){var c=(0,e.peekBytes)(2)(r);return c[0]===33&&c[1]===249}),o=(0,t.conditional)({image:[{code:(0,e.readByte)()},{descriptor:[{left:(0,e.readUnsigned)(!0)},{top:(0,e.readUnsigned)(!0)},{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{lct:(0,e.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,e.readArray)(3,function(r,c,d){return Math.pow(2,d.descriptor.lct.size+1)})},function(r,c,d){return d.descriptor.lct.exists}),{data:[{minCodeSize:(0,e.readByte)()},n]}]},function(r){return(0,e.peekByte)()(r)===44}),h=(0,t.conditional)({text:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{preData:function(r,c,d){return(0,e.readBytes)(d.text.blockSize)(r)}},n]},function(r){var c=(0,e.peekBytes)(2)(r);return c[0]===33&&c[1]===1}),a=(0,t.conditional)({application:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{id:function(r,c,d){return(0,e.readString)(d.blockSize)(r)}},n]},function(r){var c=(0,e.peekBytes)(2)(r);return c[0]===33&&c[1]===255}),s=(0,t.conditional)({comment:[{codes:(0,e.readBytes)(2)},n]},function(r){var c=(0,e.peekBytes)(2)(r);return c[0]===33&&c[1]===254}),l=[{header:[{signature:(0,e.readString)(3)},{version:(0,e.readString)(3)}]},{lsd:[{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{gct:(0,e.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,e.readByte)()},{pixelAspectRatio:(0,e.readByte)()}]},(0,t.conditional)({gct:(0,e.readArray)(3,function(r,c){return Math.pow(2,c.lsd.gct.size+1)})},function(r,c){return c.lsd.gct.exists}),{frames:(0,t.loop)([i,a,s,o,h],function(r){var c=(0,e.peekByte)()(r);return c===33||c===44})}];u.default=l}(oe);var G={};Object.defineProperty(G,"__esModule",{value:!0}),G.deinterlace=void 0;var We=function(u,t){for(var e=new Array(u.length),n=u.length/t,i=function(r,c){var d=u.slice(c*t,(c+1)*t);e.splice.apply(e,[r*t,t].concat(d))},o=[0,4,2,1],h=[8,8,4,2],a=0,s=0;s<4;s++)for(var l=o[s];l<n;l+=h[s])i(l,a),a++;return e};G.deinterlace=We;var H={};Object.defineProperty(H,"__esModule",{value:!0}),H.lzw=void 0;var Je=function(u,t,e){var n,i,o,h,a,s,l,r,c,d,f,p,g,y,k,m,v=4096,_=-1,b=e,x=new Array(e),C=new Array(v),w=new Array(v),z=new Array(v+1);for(a=(i=1<<(d=u))+1,n=i+2,l=_,o=(1<<(h=d+1))-1,r=0;r<i;r++)C[r]=0,w[r]=r;for(f=p=g=y=k=m=0,c=0;c<b;){if(y===0){if(p<h){f+=t[m]<<p,p+=8,m++;continue}if(r=f&o,f>>=h,p-=h,r>n||r==a)break;if(r==i){o=(1<<(h=d+1))-1,n=i+2,l=_;continue}if(l==_){z[y++]=w[r],l=r,g=r;continue}for(s=r,r==n&&(z[y++]=g,r=l);r>i;)z[y++]=w[r],r=C[r];g=255&w[r],z[y++]=g,n<v&&(C[n]=l,w[n]=g,!(++n&o)&&n<v&&(h++,o+=n)),l=s}y--,x[k++]=z[y],c++}for(c=k;c<b;c++)x[c]=0;return x};H.lzw=Je,Object.defineProperty(E,"__esModule",{value:!0});var le=E.decompressFrames=E.decompressFrame=ue=E.parseGIF=void 0,Qe=rt(oe),Ze=$,Ke=R,et=G,tt=H;function rt(u){return u&&u.__esModule?u:{default:u}}var nt=function(u){var t=new Uint8Array(u);return(0,Ze.parse)((0,Ke.buildStream)(t),Qe.default)},ue=E.parseGIF=nt,at=function(u){for(var t=u.pixels.length,e=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,o=u.pixels[n],h=u.colorTable[o]||[0,0,0];e[i]=h[0],e[i+1]=h[1],e[i+2]=h[2],e[i+3]=o!==u.transparentIndex?255:0}return e},he=function(u,t,e){if(u.image){var n=u.image,i=n.descriptor.width*n.descriptor.height,o=(0,tt.lzw)(n.data.minCodeSize,n.data.blocks,i);n.descriptor.lct.interlaced&&(o=(0,et.deinterlace)(o,n.descriptor.width));var h={pixels:o,dims:{top:u.image.descriptor.top,left:u.image.descriptor.left,width:u.image.descriptor.width,height:u.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?h.colorTable=n.lct:h.colorTable=t,u.gce&&(h.delay=10*(u.gce.delay||10),h.disposalType=u.gce.extras.disposal,u.gce.extras.transparentColorGiven&&(h.transparentIndex=u.gce.transparentColorIndex)),e&&(h.patch=at(h)),h}console.warn("gif frame does not have associated image.")};E.decompressFrame=he;var it=function(u,t){return u.frames.filter(function(e){return e.image}).map(function(e){return he(e,u.gct,t)})};le=E.decompressFrames=it;async function st(u,t){const e=ue(u),n=le(e,!0),{width:i,height:o}=e.lsd,h=document.createElement("canvas");h.width=i,h.height=o;const a=h.getContext("2d",{willReadFrequently:!0}),s=[],l=[];for(const r of n){l.push(ae(r.delay||100));const c=new ImageData(r.patch,r.dims.width,r.dims.height),d=Re(c),f=r.disposalType===3?a.getImageData(r.dims.left,r.dims.top,r.dims.width,r.dims.height):void 0;a.drawImage(d,r.dims.left,r.dims.top);const p=a.getImageData(0,0,i,o);s.push(p),r.disposalType===1||(r.disposalType===2?a.clearRect(r.dims.left,r.dims.top,r.dims.width,r.dims.height):r.disposalType===3&&a.putImageData(f,r.dims.left,r.dims.top))}return{frameDurations:l,getFrame:r=>s[r],width:i,height:o}}const ot=[71,73,70];function ct(u){const t=new Uint8Array(u);return!ot.some((e,n)=>e!==t[n])}function lt(u){if(!ct(u))return!1;const t=new DataView(u),e=t.getUint8(10);let n=13+(128&e?3*2**(1+(7&e)):0),i=0,o=!1;for(;!o;){switch(t.getUint8(n++)){case 33:if(!h())return!1;break;case 44:a();break;case 59:o=!0;break;default:return!1}if(i>1)return!0}function h(){switch(t.getUint8(n++)){case 249:s();break;case 1:l();break;case 254:r();break;case 255:c();break;default:return!1}return!0}function a(){i++,n+=8;const f=t.getUint8(n++);n+=128&f?3*2**(1+(7&f)):0,n++,d()}function s(){n++,n+=4,d()}function l(){i++,n++,n+=12,d()}function r(){d()}function c(){n++,n+=8,n+=3,d()}function d(){let f;for(;f=t.getUint8(n++);)n+=f}return!1}class ut{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(t){return this._resourceMap.get(t)??null}async fetchResource(t,e){const n=this._resourceMap.get(t);if(n)return{width:n.width,height:n.height};let i=this._inFlightResourceMap.get(t);return i?i.then(o=>({width:o.width,height:o.height})):(i=dt(t,e),this._inFlightResourceMap.set(t,i),i.then(o=>(this._inFlightResourceMap.delete(t),this._resourceMap.set(t,o),{width:o.width,height:o.height}),()=>({width:0,height:0})))}deleteResource(t){this._inFlightResourceMap.delete(t),this._resourceMap.delete(t)}loadFont(t){return fe(t)}}async function ht(u,t){const e=window.URL.createObjectURL(u);try{const{data:n}=await W(e,{...t,responseType:"image"});return n}catch(n){throw ie(n)?n:new se("mapview-invalid-resource",`Could not fetch requested resource at ${e}`)}finally{window.URL.revokeObjectURL(e)}}async function dt(u,t){const{arrayBuffer:e,mediaType:n}=await ft(u,t),i=n==="image/png";return n==="image/gif"&&lt(e)?st(e):i&&Le(e)?De(e,t):ht(new Blob([e],{type:n}),t)}async function ft(u,t){let e;const n=";base64,";if(u.includes(n)){const i=u.indexOf(n),o=u.indexOf(n)+n.length,h=u.substring(o);e={arrayBuffer:me(h),mediaType:u.substring(0,i).replace("data:","")}}else try{const i=await W(u,{responseType:"array-buffer",...t});e={arrayBuffer:i.data,mediaType:i.getHeader("Content-Type")}}catch(i){if(!ie(i))throw new se("mapview-invalid-resource",`Could not fetch requested resource at ${u}`)}return e}const mt=512;class pt{constructor(t){this._resourceManager=t,this._rasterizationCanvas=null}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(t,e,n){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),t.type==="simple-fill"||t.type==="esriSFS"){const[f,p,g]=Fe(this._rasterizationCanvas,t.style,e);return{size:[p,g],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:pe(Math.ceil(e))}}if(t.type==="simple-line"||t.type==="esriSLS"||t.type==="line"&&t.dashTemplate){let f,p;if(t.type==="simple-line"||t.type==="esriSLS")switch(f=xe(t.style,t.cap),t.cap){case"butt":p="Butt";break;case"square":p="Square";break;default:p="Round"}else f=t.dashTemplate,p=t.cim.capStyle;const[g,y,k]=Ue(f,p);return{size:[y,k],image:new Uint32Array(g.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let i,o=null,h=null,a=1;if(t.type==="simple-marker"||t.type==="esriSMS"||t.type==="line-marker"?(i=B.fromSimpleMarker(t),h=Z(i)):t.cim&&t.cim.type==="CIMHatchFill"?(i=B.fromCIMHatchFill(t.cim,e),o=new K(i.frame.xmin,-i.frame.ymax,i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin),a=e):t.cim.markerPlacement&&t.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(i=B.fromCIMInsidePolygon(t.cim),o=new K(i.frame.xmin,-i.frame.ymax,i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin)):(i=t.cim,t.avoidSDFRasterization||(h=Z(i))),h&&!n){const[f,p,g]=Ce(h);return f?{size:[p,g],image:new Uint32Array(f.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:a}:null}const[s,l,r,c,d]=B.rasterize(this._rasterizationCanvas,i,o,this._resourceManager,!n);return s?{size:[l,r],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!1,anchorX:c,anchorY:d}:null}rasterizeImageResource(t,e,n,i){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=t,this._rasterizationCanvas.height=e;const o=this._rasterizationCanvas.getContext("2d");n instanceof ImageData?o.putImageData(n,0,0):(n.setAttribute("width",`${t}px`),n.setAttribute("height",`${e}px`),o.drawImage(n,0,0,t,e));const h=o.getImageData(0,0,t,e),a=new Uint8Array(h.data);if(i){for(const f of i)if(f&&f.oldColor&&f.oldColor.length===4&&f.newColor&&f.newColor.length===4){const[p,g,y,k]=f.oldColor,[m,v,_,b]=f.newColor;if(p===m&&g===v&&y===_&&k===b)continue;for(let x=0;x<a.length;x+=4)p===a[x]&&g===a[x+1]&&y===a[x+2]&&k===a[x+3]&&(a[x]=m,a[x+1]=v,a[x+2]=_,a[x+3]=b)}}let s;for(let f=0;f<a.length;f+=4)s=a[f+3]/255,a[f]=a[f]*s,a[f+1]=a[f+1]*s,a[f+2]=a[f+2]*s;let l=a,r=t,c=e;const d=mt;if(r>=d||c>=d){const f=r/c;f>1?(r=d,c=Math.round(d/f)):(c=d,r=Math.round(d*f)),l=new Uint8Array(4*r*c);const p=new Uint8ClampedArray(l.buffer);ge(a,t,e,p,r,c,!1)}return{size:[r,c],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}var re;(function(u){u.Legend="legend",u.Preview="preview"})(re||(re={}));const V=u=>u&&u.scaleFactor?u.scaleFactor:1,gt=96/72;class zt{constructor(t,e){this._spatialReference=t,this._avoidSDF=e,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new ke,this._cimResourceManager=new ut,this._rasterizer=new pt(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(t,e,n,i,o,h,a,s){if(!t)return null;const{data:l}=t;if(!l||l.type!=="CIMSymbolReference"||!l.symbol)return null;const{symbol:r}=l;h||(h=ye(r));const c=await Me.resolveSymbolOverrides(l,e,this._spatialReference,o,h,a,s);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const d=this._imageDataCanvas,f=this._cimResourceManager,p=[];B.fetchResources(c,f,p),B.fetchFonts(c,f,p),p.length>0&&await Promise.all(p);const{width:g,height:y}=n,k=yt(h,g,y,i),m=B.getEnvelope(c,k,f);if(!m)return null;const v=(window.devicePixelRatio||1)*gt;let _=1,b=0,x=0;switch(r.type){case"CIMPointSymbol":case"CIMTextSymbol":{let P=1;m.width>g&&(P=g/m.width);let S=1;m.height>y&&(S=y/m.height),i==="preview"&&(m.width<g&&(P=g/m.width),m.height<y&&(S=y/m.height)),_=Math.min(P,S),b=m.x+m.width/2,x=m.y+m.height/2}break;case"CIMLineSymbol":{let P=1;m.height>y&&(P=y/m.height),_=P,x=m.y+m.height/2;const S=m.x*_+g/2,F=(m.x+m.width)*_+g/2;if(S<0){const{paths:I}=k;I[0][0][0]-=S}if(F>g){const{paths:I}=k;I[0][2][0]-=F-g}}break;case"CIMPolygonSymbol":{b=m.x+m.width/2,x=m.y+m.height/2;const P=m.x*_+g/2,S=(m.x+m.width)*_+g/2,F=m.y*_+y/2,I=(m.y+m.height)*_+y/2,{rings:M}=k;P<0&&(M[0][0][0]-=P,M[0][3][0]-=P,M[0][4][0]-=P),F<0&&(M[0][0][1]+=F,M[0][1][1]+=F,M[0][4][1]+=F),S>g&&(M[0][1][0]-=S-g,M[0][2][0]-=S-g),I>y&&(M[0][2][1]+=I-y,M[0][3][1]+=I-y)}}d.width=g*v,d.height=y*v;const C=1;d.width+=2*C,d.height+=2*C;const w=d.getContext("2d"),z=Ae.createIdentity();return z.translate(-b,-x),z.scale(_*v,-_*v),z.translate(g*v/2+C,y*v/2+C),w.clearRect(0,0,d.width,d.height),new Ie(w,f,z,!0).drawSymbol(c,k),w.getImageData(0,0,d.width,d.height)}async analyzeCIMSymbol3D(t,e,n,i,o){const h=[],a=e?{geometryType:i,spatialReference:this._spatialReference,fields:e}:null,s=[];B.fetchFonts(t.data.symbol,this._cimResourceManager,s),await Promise.all(s);const l=new ze(this._cimResourceManager,a);let r;await l.analyzeSymbolReference(t.data,this._avoidSDF,h),ne(o);for(const c of h)c.cim.type!=="CIMPictureMarker"&&c.cim.type!=="CIMPictureFill"&&c.cim.type!=="CIMPictureStroke"||(r||(r=[]),r.push(this._fetchPictureMarkerResource(c,o))),n&&c.type==="text"&&typeof c.text=="string"&&c.text.includes("[")&&(c.text=ve(n,c.text,c.cim.textCase));return r&&await Promise.all(r),h}rasterizeCIMSymbol3D(t,e,n,i,o,h){const a=[];for(const s of t){i&&typeof i.scaleFactor=="function"&&(i.scaleFactor=i.scaleFactor(e,o,h));const l=this._getRasterizedResource(s,e,n,i,o,h);if(!l)continue;let r=0,c=l.anchorX||0,d=l.anchorY||0,f=!1,p=0,g=0;if(n==="esriGeometryPoint"){const y=V(i);if(p=U(s.offsetX,e,o,h)*y||0,g=U(s.offsetY,e,o,h)*y||0,s.type==="marker")r=U(s.rotation,e,o,h)||0,f=s.rotateClockwise??!1;else if(s.type==="text"){if(r=U(s.angle,e,o,h)||0,s.horizontalAlignment!==void 0)switch(s.horizontalAlignment){case"left":c=-.5;break;case"right":c=.5;break;default:c=0}if(s.verticalAlignment!==void 0)switch(s.verticalAlignment){case"top":d=.5;break;case"bottom":d=-.5;break;case"baseline":d=-.25;break;default:d=0}}}l!=null&&a.push({angle:r,rotateClockWise:f,anchorX:c,anchorY:d,offsetX:p,offsetY:g,rasterizedResource:l})}return this.getSymbolImage(a)}getSymbolImage(t){const e=document.createElement("canvas"),n=j(e.getContext("2d"));let i=0,o=0,h=0,a=0;const s=[];for(let d=0;d<t.length;d++){const f=t[d],p=f.rasterizedResource;if(!p)continue;const g=p.size,y=f.offsetX,k=f.offsetY,m=f.anchorX,v=f.anchorY,_=f.rotateClockWise||!1;let b=f.angle,x=O(y)-g[0]*(.5+m),C=O(k)-g[1]*(.5+v),w=x+g[0],z=C+g[1];if(b){_&&(b=-b);const F=Math.sin(b*Math.PI/180),I=Math.cos(b*Math.PI/180),M=x*I-C*F,A=x*F+C*I,L=x*I-z*F,D=x*F+z*I,N=w*I-z*F,T=w*F+z*I,J=w*I-C*F,Q=w*F+C*I;x=Math.min(M,L,N,J),C=Math.min(A,D,T,Q),w=Math.max(M,L,N,J),z=Math.max(A,D,T,Q)}i=x<i?x:i,o=C<o?C:o,h=w>h?w:h,a=z>a?z:a;const P=n.createImageData(p.size[0],p.size[1]);P.data.set(new Uint8ClampedArray(p.image.buffer));const S={offsetX:y,offsetY:k,rotateClockwise:_,angle:b,rasterizedImage:P,anchorX:m,anchorY:v};s.push(S)}e.width=h-i,e.height=a-o;const l=-i,r=a;for(let d=0;d<s.length;d++){const f=s[d],p=this._imageDataToCanvas(f.rasterizedImage),g=f.rasterizedImage.width,y=f.rasterizedImage.height,k=l-g*(.5+f.anchorX),m=r-y*(.5-f.anchorY);if(f.angle){const v=(360-f.angle)*Math.PI/180;n.save(),n.translate(O(f.offsetX),-O(f.offsetY)),n.translate(l,r),n.rotate(v),n.translate(-l,-r),n.drawImage(p,k,m),n.restore()}else n.drawImage(p,k+O(f.offsetX),m-O(f.offsetY))}const c=new we({x:l/e.width-.5,y:r/e.height-.5});return{imageData:e.width!==0&&e.height!==0?n.getImageData(0,0,e.width,e.height):n.createImageData(1,1),anchorPosition:c}}async _fetchPictureMarkerResource(t,e){const n=t.materialHash;if(!this._pictureMarkerCache.get(n)){const i=(await W(t.cim.url,{responseType:"image",signal:e&&e.signal})).data;this._pictureMarkerCache.set(n,i)}}_imageDataToCanvas(t){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const e=this._imageDataCanvas,n=j(e.getContext("2d"));return e.width=t.width,e.height=t.height,n.putImageData(t,0,0),e}_imageTo32Array(t,e,n,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const o=this._imageDataCanvas,h=j(o.getContext("2d"));if(o.width=e,o.height=n,h.drawImage(t,0,0,e,n),i){h.save();const a=new _e(i);h.fillStyle=a.toHex(),h.globalCompositeOperation="multiply",h.fillRect(0,0,e,n),h.globalCompositeOperation="destination-atop",h.drawImage(t,0,0,e,n),h.restore()}return new Uint32Array(h.getImageData(0,0,e,n).data.buffer)}_getRasterizedResource(t,e,n,i,o,h){let a,s,l;if(t.type==="text")return this._rasterizeTextResource(t,e,i,o,h);({analyzedCIM:a,hash:s}=vt(t,e,o,h));const d=V(i);if(t.cim.type==="CIMPictureMarker"){const g=U(t.size,e,o,h)*d,{image:y,width:k,height:m}=j(this._getPictureResource(t,g,U(t.color,e,o,h)));return l={image:y,size:[k,m],sdf:!1,simplePattern:!1,anchorX:t.anchorPoint?t.anchorPoint.x:0,anchorY:t.anchorPoint?t.anchorPoint.y:0},l}be(a,d,{preserveOutlineWidth:!1});const f=a;s+=n,i&&(s+=JSON.stringify(i));const p=this._resourceCache;return p.has(s)?p.get(s):(l=this._rasterizer.rasterizeJSONResource({cim:f,type:t.type,url:t.url,mosaicHash:s,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),p.set(s,l),l)}_rasterizeTextResource(t,e,n,i,o){var C,w,z;const h=V(n),a=U(t.text,e,i,o);if(!a||a.length===0)return null;const s=t.cim,l=U((s==null?void 0:s.fontFamilyName)||t.fontName,e,i,o),r=U(((C=s==null?void 0:s.font)==null?void 0:C.style)||t.style,e,i,o),c=U(((w=s==null?void 0:s.font)==null?void 0:w.weight)||t.weight,e,i,o),d=U(((z=s==null?void 0:s.font)==null?void 0:z.decoration)||t.decoration,e,i,o),f=U(t.size,e,i,o)*h,p=U(t.horizontalAlignment,e,i,o),g=U(t.verticalAlignment,e,i,o),y=X(U(t.color,e,i,o)),k=X(U(t.outlineColor,e,i,o)),m=U(t.outlineSize,e,i,o),v=t.backgroundColor!=null?X(t.backgroundColor):null,_=t.borderLineColor!=null?X(t.borderLineColor):null,b=t.borderLineWidth!=null?t.borderLineWidth:null,x={color:y,size:f,horizontalAlignment:p,verticalAlignment:g,font:{family:l,style:r,weight:c,decoration:d},halo:{size:m||0,color:k,style:r},backgroundColor:v,borderLine:_!=null&&b!=null?{color:_,size:b}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(a,x)}_getPictureResource(t,e,n){const i=this._pictureMarkerCache.get(t.materialHash);if(!i)return null;const o=i.height/i.width,h=e?o>1?O(e):O(e)/o:i.width,a=e?o>1?O(e)*o:O(e):i.height;return{image:this._imageTo32Array(i,h,a,n),width:h,height:a}}}function yt(u,t,e,n){const o=-t/2+1,h=t/2-1,a=e/2-1,s=-e/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[o,0],[0,0],[h,0]]]};default:return n==="legend"?{rings:[[[o,a],[h,0],[h,s],[o,s],[o,a]]]}:{rings:[[[o,a],[h,a],[h,s],[o,s],[o,a]]]}}}function vt(u,t,e,n){let i,o;return typeof u.materialHash=="function"?(i=(0,u.materialHash)(t,e,n),o=Pe(u.cim,u.materialOverrides)):(i=u.materialHash,o=u.cim),{analyzedCIM:o,hash:i}}export{zt as CIMSymbolRasterizer,re as GeometryStyle};