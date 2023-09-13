import{eI as T,ai as l,aj as s,al as M,bu as G,ev as B,ex as L,by as F,en as z,ep as k,dh as q,di as A,dj as K,a_ as h,au as w,dE as W,bK as N,cI as I,eJ as J,cM as S,eK as $,eL as E,aK as R,az as H,aq as U,eM as V,aX as X,ap as Y,cZ as Z,c_ as Q,c$ as ee,cp as C,dq as f,cs as te,b_ as re,eN as oe,bb as le}from"./index-92a868dd.js";import{b as ae}from"./normalizeUtils-3a062adc.js";import{n as ie}from"./objectIdUtils-789e911a.js";import"./normalizeUtilsCommon-61fccde3.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!D(e))}function D({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(o=>{var a,n,y;return r===o.geometryTypeJSON&&((y=(n=(a=t.drawingInfo)==null?void 0:a.renderer)==null?void 0:n.symbol)==null?void 0:y.type)===o.identifyingSymbol.type})}function _(){return new re({xmin:-180,ymin:-90,xmax:180,ymax:90})}const x=new T({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new T({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends oe{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(_(),t).geometry:R(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=I();return this.graphics.forEach(o=>{const a=o.geometry!=null?S(o.geometry,t).geometry:null;a!=null&&J(e,a.type==="point"?a:a.extent,e)}),$(e,E)?null:e}get sublayers(){return this.graphics}};l([s({readOnly:!0})],u.prototype,"fullExtent",null),l([s({readOnly:!0})],u.prototype,"fullBounds",null),l([s({readOnly:!0})],u.prototype,"sublayers",null),l([s()],u.prototype,"layer",void 0),l([s()],u.prototype,"layerId",void 0),l([s({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=l([M("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new G().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let i=class extends z(k(q(A(K(le))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(a=>{const n=new W;return n.read(a,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=I();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const a=S(o.layerDefinition.extent,t).geometry;a!=null&&J(e,a,e)}),$(e,E)?S(_(),t).geometry:R(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let a=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,d=y.id??a++,c=D(n);if(c!=null){const m=new u({id:c.id,title:y.name,layerId:d,layer:this,graphics:p.features.map(({geometry:g,symbol:O,attributes:j,popupInfo:P})=>H.fromJSON({attributes:j,geometry:g,symbol:O,popupTemplate:P}))});o.push(m)}}return new w(o)}writeSublayers(t,e,r,o){var c;const{minScale:a,maxScale:n}=this;if(t==null)return;const y=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((c=o==null?void 0:o.messages)==null?void 0:c.push(new U("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let d=this.spatialReference.toJSON();e:for(const m of t)for(const g of m.graphics)if(g.geometry!=null){d=g.geometry.spatialReference.toJSON();break e}for(const m of v){const g=t.find(O=>m.id===O.id);this._writeMapNoteSublayer(p,g,m,a,n,d,o)}V("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const a of o.graphics)if(a.geometry!=null){const n=a.geometry;t?X(n.spatialReference,t)||(Y(n.spatialReference,t)||Z()||await Q(),a.geometry=ee(n,t)):t=n.spatialReference,e.push(a)}const r=await ae(e.map(o=>o.geometry));e.forEach((o,a)=>o.geometry=r[a])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,a,n,y){const p=[];if(e!=null){for(const d of e.graphics)this._writeMapNote(p,d,r.geometryType,y);this._normalizeObjectIds(p,x),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[x.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var d,c;if(e==null)return;const{geometry:a,symbol:n,popupTemplate:y}=e;if(a==null)return;if(a.type!==r)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new C("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((c=o==null?void 0:o.messages)==null?void 0:c.push(new C("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const p={attributes:{...e.attributes},geometry:a.toJSON(),symbol:n.toJSON()};y!=null&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let o=ie(r,t)+1;const a=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||a.has(y[r]))&&(y[r]=o++),a.add(y[r])}}};l([s({readOnly:!0})],i.prototype,"capabilities",void 0),l([f(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),l([s({readOnly:!0})],i.prototype,"featureCollections",void 0),l([f(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),l([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),l([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),l([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),l([s({readOnly:!0})],i.prototype,"fullExtent",null),l([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],i.prototype,"legendEnabled",void 0),l([s({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),l([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),l([f(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),l([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),l([f(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),l([s({readOnly:!0})],i.prototype,"multipointLayer",null),l([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),l([s({readOnly:!0})],i.prototype,"pointLayer",null),l([s({readOnly:!0})],i.prototype,"polygonLayer",null),l([s({readOnly:!0})],i.prototype,"polylineLayer",null),l([s({type:h})],i.prototype,"spatialReference",void 0),l([f(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),l([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),l([f("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),l([te("web-map","sublayers")],i.prototype,"writeSublayers",null),l([s({readOnly:!0})],i.prototype,"textLayer",null),l([s()],i.prototype,"title",void 0),l([s({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=l([M("esri.layers.MapNotesLayer")],i);const de=i;export{de as default};
