import{c9 as i,fj as p}from"./index-92a868dd.js";import{m as a}from"./queryTopFeatures-9687087f.js";import"./normalizeUtils-3a062adc.js";import"./normalizeUtilsCommon-61fccde3.js";import"./query-b8b574a2.js";import"./pbfQueryUtils-7e0a1080.js";import"./pbf-a0f85201.js";async function d(o,t,r){const m=i(o);return(await a(m,p.from(t),{...r})).data.count}export{d as executeForTopCount};