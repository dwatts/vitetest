import{e as V}from"./Segment-0b31187e.js";import{aq as D,c3 as X,lk as g,ll as Y,lm as Z,a_ as tt,ln as et,b2 as nt,gE as at,lo as st,lp as it,lq as rt,lr as G,cl as F}from"./index-92a868dd.js";const gt={readOnly:!0,get(){return V(this.view)}};var x;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(x||(x={}));function O(t){if(!t)return null;if(Y(t)&&t.wkid){const e=Z[t.wkid];if(e)return e}if(t.wkt){const e=ot(t.wkt);if(e)return e}return null}function ot(t){const e=et.exec(t);if(!e||e.length!==2)return null;const n=e[1].split(",");if(!n||n.length<3)return null;const a=parseFloat(n[1]),s=parseFloat(n[2]);return isNaN(a)||isNaN(s)?null:{a,f:s===0?0:1/s}}function ct(t){const e=O(t??tt.WGS84);if(ht(e))return e;const n=e.a*(1-e.f);return Object.assign(e,{b:n,eSq:1-(n/e.a)**2,radius:(2*e.a+n)/3,densificationRatio:1e4/((2*e.a+n)/3)})}function ht(t){return t!=null&&"b"in t&&"eSq"in t&&"radius"in t}function lt(t){return O(t)!==null}function vt(t,e="meters"){if(!t)throw new D("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(a=>!lt(a.spatialReference)))throw new D("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let a=0;a<t.length;a++){const s=t[a],{spatialReference:m}=s,v=s.type==="polyline"?s.paths:s.rings;let r=0;for(let _=0;_<v.length;_++){const o=v[_];let f=0;for(let p=1;p<o.length;p++){const z=o[p-1][0],w=o[p][0],$=o[p-1][1],h=o[p][1];if($!==h||z!==w){const c=new ut;ft(c,[z,$],[w,h],m),f+=c.distance}}r+=f}r=X(r,"meters",e),n.push(r)}return n}class ut{constructor(e=0,n=void 0,a=void 0){this.distance=e,this.azimuth=n,this.reverseAzimuth=a}}function ft(t,e,n,a){const s=e[0]*g,m=e[1]*g,v=n[0]*g,r=n[1]*g,{a:_,b:o,f,radius:p}=ct(a),z=v-s,w=Math.atan((1-f)*Math.tan(m)),$=Math.atan((1-f)*Math.tan(r)),h=Math.sin(w),c=Math.cos(w),R=Math.sin($),l=Math.cos($);let y,A,M,i,N,E,P,U,b,q,S=1e3,u=z;do{if(P=Math.sin(u),U=Math.cos(u),M=Math.sqrt(l*P*(l*P)+(c*R-h*l*U)*(c*R-h*l*U)),M===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;N=h*R+c*l*U,E=Math.atan2(M,N),b=c*l*P/M,A=1-b*b,i=N-2*h*R/A,isNaN(i)&&(i=0),q=f/16*A*(4+f*(4-3*A)),y=u,u=z+(1-q)*f*b*(E+q*M*(i+q*N*(2*i*i-1)))}while(Math.abs(u-y)>1e-12&&--S>0);if(S===0){const B=p,J=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(v-s))*B,j=v-s,K=Math.sin(j)*Math.cos(r),L=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(j),Q=Math.atan2(K,L);return t.azimuth=Q/g,t.distance=J,t.reverseAzimuth=void 0,t}const d=A*(_*_-o*o)/(o*o),k=d/1024*(256+d*(d*(74-47*d)-128)),H=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(E-k*M*(i+k/4*(N*(2*i*i-1)-k/6*i*(4*M*M-3)*(4*i*i-3)))),I=Math.atan2(l*Math.sin(u),c*R-h*l*Math.cos(u)),W=Math.atan2(c*Math.sin(u),c*R*Math.cos(u)-h*l);return t.azimuth=I/g,t.distance=H,t.reverseAzimuth=W/g,t}function _t(t,e){if(nt(e,0,0,0),t.length>0){for(let n=0;n<t.length;++n)at(e,e,t[n]);st(e,e,1/t.length)}}function Rt(t,e,n,a){a.projectToRenderScreen(t,T),a.projectToRenderScreen(e,C),it(n,Mt,pt),rt(n,n)}const T=G(),pt=T,C=G(),Mt=C;class zt{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=F(this._spatialReference,1),this._metersPerElevationUnit=F(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}export{lt as M,ut as R,gt as a,ft as b,_t as c,x as e,Rt as f,zt as t,vt as y};
