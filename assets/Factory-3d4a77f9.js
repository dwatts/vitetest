import{ls as A,lt as N,lu as M,lv as p,lw as j,lx as y,ly as w,hJ as z,b4 as d,lz as L,hw as T,lA as S,aV as Z}from"./index-92a868dd.js";function h(t,e){return x(t,()=>e)}function x(t,e){const n=d(),c=d();let o=!1;return a=>{const r=e(a);if(a.action==="start"){const s=N(a.screenStart,M(p.get())),l=j(t.state.camera,s,D);l!=null&&(o=y(r,l,n))}if(!o)return null;const i=N(a.screenEnd,M(p.get())),u=j(t.state.camera,i,D);return u==null?null:y(r,u,c)?{...a,renderStart:n,renderEnd:c,plane:r,ray:u}:null}}var m;function P(t){let e=null;return n=>{switch(n.action){case"start":e=t.disableDisplay();break;case"end":case"cancel":e!=null&&(e.remove(),e=null)}return n}}function E(t,e=null){const n=w(t.state.viewingMode);n.options.selectionMode=!0,n.options.store=z.MIN,n.options.hud=!1;const c=S(),o={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},a=d(),r=e??t.spatialReference,i=s=>{t.map.ground&&t.map.ground.opacity<1?o.exclude.add(L):o.exclude.delete(L),t.sceneIntersectionHelper.intersectIntersectorScreen(N(s,c),n,o);const l=n.results.min;let I;if(l.getIntersectionPoint(a))I=l.intersector===T.TERRAIN?m.GROUND:m.OTHER;else{if(!n.results.ground.getIntersectionPoint(a))return null;I=m.GROUND}return{location:t.renderCoordsHelper.fromRenderCoords(a,r),surfaceType:I}};let u;return s=>{if(s.action==="start"){const I=i(s.screenStart);u=I!=null?I.location:null}if(u==null)return null;const l=i(s.screenEnd);return l!=null&&l.location!=null?{...s,mapStart:u,mapEnd:l.location,surfaceType:l.surfaceType}:null}}(function(t){t[t.GROUND=0]="GROUND",t[t.OTHER=1]="OTHER"})(m||(m={}));const D=A(),C="theme-style";function b(t,e){return R(Y(H(f(t),e)),e.size)}function H(t,{accentColor:e,contrastColor:n}){const c=e.toHex(),o=e.a,a=n.toHex(),r=n.a,i=t.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(C);return i&&(i.innerHTML=`
      .contrast-fill { fill: ${a}; fill-opacity: ${r}; }
      .contrast-stroke { stroke: ${a}; stroke-opacity: ${r};  }
      .accent-fill { fill: ${c}; fill-opacity: ${o}; }
      .accent-stroke { stroke: ${c}; stroke-opacity:  ${o}; }`),t}function f(t){const e=t.split(",")[1],n=atob(e);return new DOMParser().parseFromString(n,"image/svg+xml")}function Y(t){const e=new XMLSerializer().serializeToString(t);return`data:image/svg+xml;base64,${btoa(e)}`}function R(t,e){const n=new Image(e,e);return n.src=t,n}const v="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NnoiIGNsYXNzPSJhY2NlbnQtZmlsbCIvPjxwYXRoIHN0cm9rZS13aWR0aD0iNC45OSIgZD0iTTIwLjA1IDQwLjg2YTE1LjA1IDE1LjA1IDAgMCAwIDE3LjE0LTEuNSAxNS4wNSAxNS4wNSAwIDAgMCA0LjQ3LTE2LjY1IDE1LjA1IDE1LjA1IDAgMCAwLTIyLjcyLTcuMTUgMTUuMDUgMTUuMDUgMCAwIDAtNS41IDcuMTUiIGNsYXNzPSJjb250cmFzdC1zdHJva2UiLz48cGF0aCBkPSJtMTAuOTcgMzUuNTcgNS4zOCAxMi4wNyA3Ljc5LTEzLjQ3LTEzLjE3IDEuNHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+",G="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTgyIDExLjk4MiAwIDAgMC05LjggNy41MDciIGNsYXNzPSJjb250cmFzdC1zdHJva2UgY29udHJhc3QtZmlsbCIvPjxwYXRoIGQ9Im0yOS44MTggMjIuODA4LTYuMTg0IDQuNi0uNTQxLTguMzY0eiIgY2xhc3M9ImNvbnRyYXN0LWZpbGwiLz48L3N2Zz4=",g=64;function O(t,e){const{accentColor:n,contrastColor:c,preMultiplyAlpha:o}=e;return t.fromData(`heading-rotate:[accent:${n},contrast:${c},size:${g}]`,()=>new Z(b(v,{accentColor:n,contrastColor:c,size:g}),{mipmap:!0,preMultiplyAlpha:o}))}function W(t,e){const{accentColor:n,contrastColor:c,preMultiplyAlpha:o}=e;return t.fromData(`tilt-rotate:[accent:${n},contrast:${c},size:${g}]`,()=>new Z(b(G,{accentColor:n,contrastColor:c,size:g}),{mipmap:!0,preMultiplyAlpha:o}))}export{P as A,E as F,h as H,W as l,O as n};