import{c9 as p,fj as e,b_ as n}from"./index-86f9eeba.js";import{p as i}from"./queryTopFeatures-d69834fe.js";import"./normalizeUtils-da0a6380.js";import"./normalizeUtilsCommon-dcbebb9e.js";import"./query-06a7e906.js";import"./pbfQueryUtils-31002e9b.js";import"./pbf-3c53b7c6.js";async function $(o,r,a){const m=p(o),t=await i(m,e.from(r),{...a});return{count:t.data.count,extent:n.fromJSON(t.data.extent)}}export{$ as executeForTopExtents};