import{bR as L,aq as d,bS as i,bT as u}from"./index-b652a0c6.js";import{a as S}from"./lazyLayerLoader-f349312e.js";import{getNumLayersAndTables as y,preprocessFSItemData as I,getSubtypeGroupLayerIds as g,getFirstLayerOrTableId as T}from"./layersLoader-07c9d207.js";import{t as c}from"./fetchService-dcfb1b87.js";import"./jsonContext-24ab1da9.js";async function B(e){!e.portalItem||e.portalItem instanceof L||(e={...e,portalItem:new L(e.portalItem)});const a=await b(e.portalItem);return new a.constructor({portalItem:e.portalItem,...a.properties})}async function b(e){return await e.load(),F(await v(e))}async function v(e){switch(e.type){case"Map Service":return M(e);case"Feature Service":return G(e);case"Feature Collection":return h(e);case"Scene Service":return $(e);case"Image Service":return C(e);case"Stream Service":return V();case"Vector Tile Service":return j();case"GeoJson":return W();case"CSV":return D();case"KML":return K();case"WFS":return O();case"WMTS":return x();case"WMS":return k();case"Feed":return A();default:throw new d("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function F(e){const a=e.className,r=S[a];return{constructor:await r(),properties:e.properties}}async function M(e){return await J(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function G(e){if(i(e,"Oriented Imagery Layer"))return R(e);const a=await N(e);if(typeof a=="object"){const r={};return a.id!=null&&(r.layerId=a.id),{className:a.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}async function $(e){var r;const a=await N(e);if(typeof a=="object"){const t={};let n;if(a.id!=null?(t.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const o of Object.keys(u))if(e.typeKeywords.includes(o))return{className:u[o]}}const s=await c(n);return{className:u[s==null?void 0:s.layerType]||"SceneLayer",properties:t}}if(a===!1){const t=await c(e.url);return(t==null?void 0:t.layerType)==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}return{className:"GroupLayer"}}async function h(e){await e.load();const a=i(e,"Map Notes"),r=i(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(i(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return y(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function C(e){var m,p,f;await e.load();const a=((m=e.typeKeywords)==null?void 0:m.map(w=>w.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await e.fetchData(),t=r==null?void 0:r.layerType;if(t==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(t==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await c(e.url),s=(p=n.cacheType)==null?void 0:p.toLowerCase(),o=(f=n.capabilities)==null?void 0:f.toLowerCase().includes("tilesonly");return s==="map"||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function V(){return{className:"StreamLayer"}}function j(){return{className:"VectorTileLayer"}}function W(){return{className:"GeoJSONLayer"}}function D(){return{className:"CSVLayer"}}function K(){return{className:"KMLLayer"}}function O(){return{className:"WFSLayer"}}function k(){return{className:"WMSLayer"}}function x(){return{className:"WMTSLayer"}}function A(){return{className:"StreamLayer"}}async function R(e){return await e.load(),{className:"OrientedImageryLayer",properties:await e.fetchData()}}async function J(e){return(await c(e.url)).tileInfo}async function N(e){const a=e.url;if(!a||/\/\d+$/.test(a))return{};await e.load();const r=await e.fetchData();if(e.type==="Feature Service"){const t=l(await I(r,a));if(typeof t=="object"){const n=g(r);t.className=t.id!=null&&n.includes(t.id)?"SubtypeGroupLayer":"FeatureLayer"}return t}return y(r)>0?l(r):l(await c(a))}function l(e){return y(e)===1&&{id:T(e)}}export{B as fromItem,v as selectLayerClassPath};
