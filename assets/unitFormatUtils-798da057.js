import{b$ as u,c0 as b,c1 as m,c2 as f,c3 as s,c4 as l,c5 as g,c6 as B,c7 as $}from"./index-b652a0c6.js";function p(i,t,n){return i.units[t][n]}function a(i,t,n,c=2,r="abbr"){return`${b(t,{minimumFractionDigits:c,maximumFractionDigits:c,signDisplay:t>0?"never":"exceptZero"})} ${p(i,n,r)}`}function h(i,t,n,c=2,r="abbr"){const o=f(t,n);return a(i,s(t,n,o),o,c,r)}function D(i,t,n,c=2,r="abbr"){const o=l(t,n);return a(i,s(t,n,o),o,c,r)}function E(i,t,n,c=2,r="abbr"){const o=g(t,n);return a(i,s(t,n,o),o,c,r)}function F(i,t,n,c=2,r="abbr"){const o=B(t,n);return a(i,s(t,n,o),o,c,r)}const e=["B","kB","MB","GB","TB"];function M(i,t){let n=t===0?0:Math.floor(Math.log(t)/Math.log(u.KILOBYTES));n=$(n,0,e.length-1);const c=b(t/u.KILOBYTES**n,{maximumFractionDigits:2});return m(i.units.bytes[e[n]],{fileSize:c})}export{a as b,F as d,h as p,M as v,D as x,E as y};
