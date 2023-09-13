import{aG as v,as as w,aH as R,aI as T,aJ as c,aK as x,aL as o,aM as M,aN as G,aO as O,aP as S,aQ as s,aR as _,aS as z,aT as I,aU as d,aV as H,aW as y,ai as l,aj as E,al as P}from"./index-92a868dd.js";import{i as $}from"./MediaElementView-36124b37.js";import{n as L}from"./LayerView3D-97930687.js";import{c as V}from"./ImageMaterial-fd65083a.js";import{d as A}from"./LayerView-e4350ddc.js";import"./normalizeUtilsSync-2739407b.js";import"./normalizeUtilsCommon-61fccde3.js";let i=class extends L(A){constructor(){super(...arguments),this.type="media-3d",this.drapeSourceType=v.RasterImage,this.updatePolicy=w.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=R(async(e,t,a)=>{const r=await this._collectMediaElements(e,t,a);this._synchronizeRenderElements(r)},0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const e=()=>this._updateWithLastDrapingExtent();this.handles.add([T(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),c(()=>this.layer.effectiveSource,"change",e),c(()=>this.layer.effectiveSource,"refresh",e)]),this.updatingHandles.add(()=>this.suspended,e)}setDrapingExtent(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}getHit(e){const t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(this._lastDrapingExtent==null||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:e,spatialReference:t}=this._lastDrapingExtent;this.updatingHandles.addPromise(this._update(e,t).catch(()=>{}))}async _collectMediaElements(e,t,a){const r=this.layer.effectiveSource;return r==null?new Set:new Set((await Promise.all(e.map(n=>r.queryElements(x(n.extent,t),{signal:a})))).flat())}_synchronizeRenderElements(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}_synchronizeRenderElementsRemove(e){const t=new Set,a=[];this._renderedElements.forEach((r,n)=>{e.has(n)||(t.add(n),r.renderData!=null&&a.push(r.renderData.renderGeometry),this._removeElement(n,r))}),this._renderer.removeGeometries(a,o.REMOVE)}_synchronizeRenderElementsAdd(e){for(const t of e)this._renderedElements.has(t)||this._createRenderElement(t)}_removeElement(e,{renderData:t,handle:a}){this._destroyRenderData(t),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),a.remove()}async _createRenderElement(e){const t=new $({spatialReference:this.view.spatialReference,element:e}),a={renderData:null,handle:M([this.updatingHandles.add(()=>e.opacity,r=>{a.renderData!=null&&a.renderData.material.setParameters({opacity:r})}),this.updatingHandles.add(()=>t.coords,r=>{a.renderData!=null?this._updateGeometry(a,a.renderData,r):this._initializeRenderData(t,a)}),this.updatingHandles.add(()=>e.content,()=>this._initializeRenderData(t,a)),G(t)])};this._renderedElements.set(e,a),this._uidToElement.set(e.uid,e),this.updatingHandles.addPromise(e.load().catch(()=>{})),this._initializeRenderData(t,a)}_initializeRenderData(e,t){const{coords:a,element:r}=e;if(a==null||r.content==null)return void(t.renderData=this._destroyRenderData(t.renderData));if(t.renderData!=null)return;const n=this._createTexture(r.content);this.view._stage.add(n);const h=this.view._stage.loadImmediate(n);O(h)&&this.updatingHandles.addPromise(h);const m=new V({initTextureTransparent:!0,textureId:n.id,opacity:r.opacity,transparent:!0}),D=this._positionVertexBufferFromCoordinates(a),g=[0,0,1,0,1,1,0,1],u=[0,1,2,0,2,3],f=new S(m,[[s.POSITION,new _(D,3,!0)],[s.UV0,new _(g,2,!0)]],[[s.POSITION,u],[s.UV0,u]]),p=new z(f,{layerUid:this.layer.uid,graphicUid:r.uid});this._renderer.addGeometries([p],o.ADD),t.renderData={renderGeometry:p,texture:n,material:m}}_updateGeometry(e,t,a){if(a==null)return void(e.renderData=this._destroyRenderData(e.renderData));const r=this._positionVertexBufferFromCoordinates(a);t.renderGeometry.geometry.setAttributeData(s.POSITION,r),this._renderer.modifyGeometries([t.renderGeometry],I.GEOMETRY)}_positionVertexBufferFromCoordinates(e){const[t,a,r,n]=e.rings[0];return[t[0],t[1],d,n[0],n[1],d,r[0],r[1],d,a[0],a[1],d]}_destroyRenderData(e){return e==null||(this.view._stage.remove(e.texture),this._renderer.removeGeometries([e.renderGeometry],o.REMOVE),e.material.dispose()),null}_createTexture(e){const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,a=e instanceof HTMLImageElement?e.naturalHeight:e.height;return new H(e,{wrap:{s:y.CLAMP_TO_EDGE,t:y.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:t,height:a,mipmap:!0,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const e=this;return{get numberOfElements(){return e._renderedElements.size}}}};l([E({readOnly:!0})],i.prototype,"type",void 0),l([E()],i.prototype,"layer",void 0),i=l([P("esri.views.3d.layers.MediaLayerView3D")],i);const j=i;export{j as default};