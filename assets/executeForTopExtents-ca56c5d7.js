import{c9 as e,fe as p,b_ as n}from"./index-b652a0c6.js";import{p as i}from"./queryTopFeatures-b58de6d9.js";import"./normalizeUtils-eefea2c7.js";import"./normalizeUtilsCommon-ca11a10d.js";import"./query-b18fae19.js";import"./pbfQueryUtils-93f16c1f.js";import"./pbf-758c6a16.js";async function $(o,r,a){const m=e(o),t=await i(m,p.from(r),{...a});return{count:t.data.count,extent:n.fromJSON(t.data.extent)}}export{$ as executeForTopExtents};
