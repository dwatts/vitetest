import{E as c,S}from"./TileInfoView-ca9693d5.js";import{f as h,_ as V,A as b}from"./SymbolProcessor-12fc97ee.js";import"./index-4a2a8e32.js";import"./cimAnalyzer-9902eef3.js";import"./TileClipper-ae6eca9e.js";import"./definitions-9264ac24.js";import"./number-e491b09e.js";import"./BidiEngine-9a40f2f4.js";import"./Pipeline-e02c5284.js";import"./QueryEngine-c9a04bbc.js";import"./normalizeUtils-fd2a5db8.js";import"./normalizeUtilsCommon-1cd3f30a.js";import"./WhereClause-914ffa63.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-bbf63e79.js";import"./generateRendererUtils-2338da02.js";import"./StreamFeatureManager-75a44ef7.js";import"./quickselect-94603516.js";import"./arcadeTimeUtils-5bca0f0f.js";import"./centroid-8e8cfa47.js";import"./ogcFeatureUtils-5a3691bb.js";import"./geojson-260f683c.js";import"./clientSideDefaults-833bca59.js";import"./query-dffe729f.js";import"./pbfQueryUtils-2c4c2b56.js";import"./pbf-5cbd0354.js";import"./createConnection-dacb6930.js";import"./geohashUtils-77d8429b.js";import"./tileUtils-49c904d3.js";import"./TurboLine-d6e39422.js";import"./Rect-98da58d6.js";import"./GeometryUtils-0258f920.js";function u(e){var r;return e.type==="line-marker"?{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function y(e){return b(e)}function ie(e,r,t=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return x(e,r,t);case"simple-marker":case"picture-marker":return g(e,r,t);case"simple-line":return K(e,r,t);case"text":return z(e,r,t);case"label":return d(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return{...u(e),type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function d(e,r,t){const o=e.toJSON(),i=h(c.LABEL,{...r,placement:o.labelPlacement});return{materialKey:t?y(i):i,hash:e.hash(),...o,labelPlacement:o.labelPlacement}}function x(e,r,t){const o=h(c.FILL,r),i=t?y(o):o,m=e.clone(),a=m.outline,s=V(r.symbologyType);s||(m.outline=null);const p={materialKey:i,hash:m.hash(),...u(m)};if(s)return p;const l=[];if(l.push(p),a){const n=h(c.LINE,{...r,isOutline:!0}),f={materialKey:t?y(n):n,hash:a.hash(),...u(a)};l.push(f)}return{type:"composite-symbol",layers:l,hash:l.reduce((n,f)=>f.hash+n,"")}}function K(e,r,t){const o=V(r.symbologyType)?S.DEFAULT:r.symbologyType,i=h(c.LINE,{...r,symbologyType:o}),m=t?y(i):i,a=e.clone(),s=a.marker;a.marker=null;const p=[];if(p.push({materialKey:m,hash:a.hash(),...u(a)}),s){const l=h(c.MARKER,r),n=t?y(l):l;s.color=s.color??a.color,p.push({materialKey:n,hash:s.hash(),lineWidth:a.width,...u(s)})}return{type:"composite-symbol",layers:p,hash:p.reduce((l,n)=>n.hash+l,"")}}function g(e,r,t){const o=h(c.MARKER,r),i=t?y(o):o,m=u(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:r.maxVVSize}}function z(e,r,t){const o=h(c.TEXT,r),i=t?y(o):o,m=u(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:r.maxVVSize}}export{ie as createSymbolSchema};