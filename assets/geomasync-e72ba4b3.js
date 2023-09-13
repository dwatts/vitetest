import{fc as d,b_ as S,bP as R,bY as N,ak as x,bZ as U,fd as W,bV as q,fe as rn,cl as an}from"./index-86f9eeba.js";import{l,Q as h,B,c as z,z as A,q as F,y as j,m as P,V as D,t as O,v as w,u as E,w as p,x as L,H as T,b,I as sn,K as un,M as cn,P as H,A as M,S as Z,U as fn,X as k}from"./arcadeUtils-d54e8814.js";import{A as on,h as ln,S as dn,m as wn,x as hn,p as mn,O as yn,g as pn,R as vn,D as gn,b as Pn,E as In,k as An,y as Fn,w as bn,W as K,K as Q,F as C,M as V,d as Rn,C as X,U as Y,B as xn,L as Nn,P as Sn,v as On,H as _,N as G,J as jn,j as Dn,T as Mn,V as Zn}from"./geometryEngineAsync-c8f9dbc1.js";import{t as a,e as s}from"./executionError-c92d3b85.js";import{t as $,s as nn}from"./portalUtils-85e5ff66.js";import"./arcadeTimeUtils-e91de63e.js";import"./number-c7cddf45.js";import"./hash-6f442295.js";function tn(r){return rn.indexOf("4.")===0?x.fromExtent(r):new x({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function I(r,t,e){if(h(r,2,2,t,e),!(r[0]instanceof d&&r[1]instanceof d)){if(!(r[0]instanceof d&&r[1]===null)){if(!(r[1]instanceof d&&r[0]===null)){if(r[0]!==null||r[1]!==null)throw new a(t,s.InvalidParameter,e)}}}}async function en(r,t){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let e=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(e=fn(r.spatialReference)/an(r.spatialReference));let c=0;if(r.type==="polyline")for(const n of r.paths)for(let i=1;i<n.length;i++)c+=k(n[i],n[i-1],e);else if(r.type==="polygon")for(const n of r.rings){for(let i=1;i<n.length;i++)c+=k(n[i],n[i-1],e);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=k(n[0],n[n.length-1],e))}else r.type==="extent"&&(c+=2*k([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],e),c+=2*k([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],e),c*=2,c+=4*Math.abs(w(r.zmax,0)*e-w(r.zmin,0)*e));const o=new R({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,c]]});return C(o,t)}function Wn(r){r.mode==="async"&&(r.functions.disjoint=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]===null||n[1]===null||on(n[0],n[1])))},r.functions.intersects=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&ln(n[0],n[1])))},r.functions.touches=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&dn(n[0],n[1])))},r.functions.crosses=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&wn(n[0],n[1])))},r.functions.within=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&hn(n[0],n[1])))},r.functions.contains=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&mn(n[0],n[1])))},r.functions.overlaps=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&yn(n[0],n[1])))},r.functions.equals=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(h(n,2,2,t,e),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?pn(n[0],n[1]):!(!B(n[0])||!B(n[1]))&&n[0].equals(n[1]))))},r.functions.relate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,3,3,t,e),n[0]instanceof d&&n[1]instanceof d)return vn(n[0],n[1],z(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new a(t,s.InvalidParameter,e)})},r.functions.intersection=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]===null||n[1]===null?null:gn(n[0],n[1])))},r.functions.union=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{const i=[];if((n=l(n)).length===0)throw new a(t,s.WrongNumberOfParameters,e);if(n.length===1)if(A(n[0])){const u=l(n[0]);for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new a(t,s.InvalidParameter,e);i.push(u[f])}}else{if(!F(n[0])){if(n[0]instanceof d)return j(P(n[0]),t.spatialReference);if(n[0]===null)return null;throw new a(t,s.InvalidParameter,e)}{const u=l(n[0].toArray());for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new a(t,s.InvalidParameter,e);i.push(u[f])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof d))throw new a(t,s.InvalidParameter,e);i.push(n[u])}return i.length===0?null:Pn(i)})},r.functions.difference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]===null?P(n[0]):n[0]===null?null:In(n[0],n[1])))},r.functions.symmetricdifference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):An(n[0],n[1])))},r.functions.clip=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[1]instanceof S)&&n[1]!==null)throw new a(t,s.InvalidParameter,e);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return n[1]===null?null:Fn(n[0],n[1])})},r.functions.cut=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[1]instanceof R)&&n[1]!==null)throw new a(t,s.InvalidParameter,e);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return n[1]===null?[P(n[0])]:bn(n[0],n[1])})},r.functions.area=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const i=await n[0].sumArea(O(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=E(n[0],t.spatialReference);return i===null?0:K(i,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return K(n[0],O(w(n[1],-1)))})},r.functions.areageodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const i=await n[0].sumArea(O(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=E(n[0],t.spatialReference);return i===null?0:Q(i,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return Q(n[0],O(w(n[1],-1)))})},r.functions.length=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const i=await n[0].sumLength(p(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=L(n[0],t.spatialReference);return i===null?0:C(i,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return C(n[0],p(w(n[1],-1)))})},r.functions.length3d=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(A(n[0])||F(n[0])){const i=L(n[0],t.spatialReference);return i===null?0:i.hasZ===!0?en(i,p(w(n[1],-1))):C(i,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return n[0].hasZ===!0?en(n[0],p(w(n[1],-1))):C(n[0],p(w(n[1],-1)))})},r.functions.lengthgeodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const i=await n[0].sumLength(p(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,s.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=L(n[0],t.spatialReference);return i===null?0:V(i,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return V(n[0],p(w(n[1],-1)))})},r.functions.distance=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=l(n),h(n,2,3,t,e);let i=n[0];(A(n[0])||F(n[0]))&&(i=T(n[0],t.spatialReference));let u=n[1];if((A(n[1])||F(n[1]))&&(u=T(n[1],t.spatialReference)),!(i instanceof d))throw new a(t,s.InvalidParameter,e);if(!(u instanceof d))throw new a(t,s.InvalidParameter,e);return Rn(i,u,p(w(n[2],-1)))})},r.functions.distancegeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=l(n),h(n,2,3,t,e);const i=n[0],u=n[1];if(!(i instanceof N))throw new a(t,s.InvalidParameter,e);if(!(u instanceof N))throw new a(t,s.InvalidParameter,e);const f=new R({paths:[],spatialReference:i.spatialReference});return f.addPath([i,u]),V(f,p(w(n[2],-1)))})},r.functions.densify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);const i=b(n[1]);if(isNaN(i))throw new a(t,s.InvalidParameter,e);if(i<=0)throw new a(t,s.InvalidParameter,e);return n[0]instanceof x||n[0]instanceof R?X(n[0],i,p(w(n[2],-1))):n[0]instanceof S?X(tn(n[0]),i,p(w(n[2],-1))):n[0]})},r.functions.densifygeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);const i=b(n[1]);if(isNaN(i))throw new a(t,s.InvalidParameter,e);if(i<=0)throw new a(t,s.InvalidParameter,e);return n[0]instanceof x||n[0]instanceof R?Y(n[0],i,p(w(n[2],-1))):n[0]instanceof S?Y(tn(n[0]),i,p(w(n[2],-1))):n[0]})},r.functions.generalize=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,4,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);const i=b(n[1]);if(isNaN(i))throw new a(t,s.InvalidParameter,e);return xn(n[0],i,sn(w(n[2],!0)),p(w(n[3],-1)))})},r.functions.buffer=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);const i=b(n[1]);if(isNaN(i))throw new a(t,s.InvalidParameter,e);return i===0?P(n[0]):Nn(n[0],i,p(w(n[2],-1)))})},r.functions.buffergeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);const i=b(n[1]);if(isNaN(i))throw new a(t,s.InvalidParameter,e);return i===0?P(n[0]):Sn(n[0],i,p(w(n[2],-1)))})},r.functions.offset=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,6,t,e),n[0]===null)return null;if(!(n[0]instanceof x||n[0]instanceof R))throw new a(t,s.InvalidParameter,e);const i=b(n[1]);if(isNaN(i))throw new a(t,s.InvalidParameter,e);const u=b(w(n[4],10));if(isNaN(u))throw new a(t,s.InvalidParameter,e);const f=b(w(n[5],0));if(isNaN(f))throw new a(t,s.InvalidParameter,e);return On(n[0],i,p(w(n[2],-1)),z(w(n[3],"round")).toLowerCase(),u,f)})},r.functions.rotate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=l(n),h(n,2,3,t,e);let i=n[0];if(i===null)return null;if(!(i instanceof d))throw new a(t,s.InvalidParameter,e);i instanceof S&&(i=x.fromExtent(i));const u=b(n[1]);if(isNaN(u))throw new a(t,s.InvalidParameter,e);const f=w(n[2],null);if(f===null)return _(i,u);if(f instanceof N)return _(i,u,f);throw new a(t,s.InvalidParameter,e)})},r.functions.centroid=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return null;let i=n[0];if((A(n[0])||F(n[0]))&&(i=T(n[0],t.spatialReference)),i===null)return null;if(!(i instanceof d))throw new a(t,s.InvalidParameter,e);return i instanceof N?j(P(n[0]),t.spatialReference):i instanceof x?i.centroid:i instanceof R?un(i):i instanceof U?cn(i):i instanceof S?i.center:null})},r.functions.multiparttosinglepart=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{n=l(n),h(n,1,1,t,e);const i=[];if(n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);if(n[0]instanceof N)return[j(P(n[0]),t.spatialReference)];if(n[0]instanceof S)return[j(P(n[0]),t.spatialReference)];const u=await G(n[0]);if(u instanceof x){const f=[],y=[];for(let m=0;m<u.rings.length;m++)if(u.isClockwise(u.rings[m])){const v=W({rings:[u.rings[m]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(v)}else y.push({ring:u.rings[m],pt:u.getPoint(m,0)});for(let m=0;m<y.length;m++)for(let v=0;v<f.length;v++)if(f[v].contains(y[m].pt)){f[v].addRing(y[m].ring);break}return f}if(u instanceof R){const f=[];for(let y=0;y<u.paths.length;y++){const m=W({paths:[u.paths[y]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(m)}return f}if(n[0]instanceof U){const f=j(P(n[0]),t.spatialReference);for(let y=0;y<f.points.length;y++)i.push(f.getPoint(y));return i}return null})},r.functions.issimple=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return!0;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return jn(n[0])})},r.functions.simplify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return G(n[0])})},r.functions.convexhull=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new a(t,s.InvalidParameter,e);return Dn(n[0])})},r.functions.getuser=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{h(n,0,2,t,e);let i=w(n[1],""),u=i===!0;if(i=i===!0||i===!1?"":z(i),n.length===0||n[0]instanceof H){let y=null;y=t.services&&t.services.portal?t.services.portal:q.getDefault(),n.length>0&&(y=$(n[0],y));const m=await nn(y,i,u);if(m){const v=JSON.parse(JSON.stringify(m));for(const g of["lastLogin","created","modified"])v[g]!==void 0&&v[g]!==null&&(v[g]=new Date(v[g]));return M.convertObjectToArcadeDictionary(v,Z(t))}return null}let f=null;if(D(n[0])&&(f=n[0]),f){if(u=!1,i)return null;await f.load();const y=await f.getOwningSystemUrl();if(!y){if(!i){const g=await f.getIdentityUser();return g?M.convertObjectToArcadeDictionary({username:g},Z(t)):null}return null}let m=null;m=t.services&&t.services.portal?t.services.portal:q.getDefault(),m=$(new H(y),m);const v=await nn(m,i,u);if(v){const g=JSON.parse(JSON.stringify(v));for(const J of["lastLogin","created","modified"])g[J]!==void 0&&g[J]!==null&&(g[J]=new Date(g[J]));return M.convertObjectToArcadeDictionary(g,Z(t))}return null}throw new a(t,s.InvalidParameter,e)})}),r.functions.nearestcoordinate=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[0]instanceof d||n[0]===null))throw new a(t,s.InvalidParameter,e);if(!(n[1]instanceof N||n[1]===null))throw new a(t,s.InvalidParameter,e);if(n[0]===null||n[1]===null)return null;const i=await Mn(n[0],n[1]);return i===null?null:M.convertObjectToArcadeDictionary({coordinate:i.coordinate,distance:i.distance},Z(t),!1,!0)})},r.functions.nearestvertex=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[0]instanceof d||n[0]===null))throw new a(t,s.InvalidParameter,e);if(!(n[1]instanceof N||n[1]===null))throw new a(t,s.InvalidParameter,e);if(n[0]===null||n[1]===null)return null;const i=await Zn(n[0],n[1]);return i===null?null:M.convertObjectToArcadeDictionary({coordinate:i.coordinate,distance:i.distance},Z(t),!1,!0)})}}export{Wn as registerFunctions};