import{ai as i,aj as o,al as g,b6 as v,cv as m,hN as k,b4 as S,hJ as b,aD as C,kk as L,aN as w,fh as H,aE as E,ao as $,ce as O,d0 as I}from"./index-b652a0c6.js";import{r as V,l as R}from"./DimensionAnalysisView3D-4c9af134.js";import{r as x}from"./VertexSnappingCandidate-a34fe308.js";import"./LineVisualElement-c80b3c9a.js";import"./LengthDimension-aac896c6.js";import"./Segment-f97951bd.js";import"./unitFormatUtils-798da057.js";import"./elevationInfoUtils-59994bfa.js";import"./analysisViewUtils-2805abd1.js";import"./ImageMaterial-b7adbac9.js";import"./Factory-8c07f4da.js";import"./RightAngleQuadVisualElement-6b69dc04.js";import"./VisualElementResources-30843197.js";import"./PointVisualElement-82610e34.js";import"./EditGeometryOperations-fdae198b.js";import"./dehydratedFeatureComparison-6294e6cf.js";let d=class extends v{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new j(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const s=e.coordinateHelper,{point:u}=e,a=P;this.renderCoordsHelper.toRenderCoords(u,s.spatialReference,a);const p=e.distance,c=typeof p=="number"?p:p.distance,h=await this._workerHandle.invoke({bounds:m(a[0],a[1],a[2],c),returnEdge:e.returnEdge,returnVertex:e.returnVertex},t);return h.candidates.sort((y,f)=>y.distance-f.distance),h.candidates.map(y=>this._convertCandidate(s,y))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new V({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new x({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const s=S();return this.renderCoordsHelper.fromRenderCoords(t,s,e),R(s)}async _fetchAllEdgeLocations(e,t){const s=[],u=[];for(const{id:a,uid:p}of e.components)this._ids.has(a)&&s.push((async()=>{const c=await this.fetchEdgeLocations(a,t.signal),h=c.locations.buffer;return u.push(h),{id:a,uid:p,objectIds:c.objectIds,locations:h,origin:c.origin,type:c.type}})());return{result:{components:(await Promise.all(s)).filter(({id:a})=>this._ids.has(a))},transferList:u}}};i([o({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),i([o({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),i([o({constructOnly:!0})],d.prototype,"schedule",void 0),i([o({readOnly:!0})],d.prototype,"availability",void 0),d=i([g("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],d);class j extends k{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const P=S();let n=class extends v{get updating(){return this.updatingHandles.updating}constructor(r){super(r),this.availability=1,this._abortController=new AbortController}destroy(){this._tracker=b(this._tracker),this._abortController=C(this._abortController)}initialize(){const{view:r}=this,e=r.resourceController;this._edgeWorker=new L(_(e)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:_(e),fetchEdgeLocations:async(t,s)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(t,this._edgeWorker,s)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([w(this._workerHandle),w(this._edgeWorker)])}async fetchCandidates(r,e){return this._workerHandle.fetchCandidates(r,e)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const r=H(this._abortController,t=>t.signal),e=await this.getLayerView();e==null||E(r)||(this._tracker=e.trackSnappingSources({add:(t,s)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:t,bounds:s},r))},remove:t=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:t},r))}}))}};function _(r){return e=>r.immediate.schedule(e)}i([o({constructOnly:!0})],n.prototype,"getLayerView",void 0),i([o({constructOnly:!0})],n.prototype,"view",void 0),i([o({readOnly:!0})],n.prototype,"updating",null),i([o({readOnly:!0})],n.prototype,"availability",void 0),n=i([g("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],n);let l=class extends ${get updating(){return this._i3sSources.some(r=>r.updating)}constructor(r){super(r),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(r=>r.destroy()),this._i3sSources.length=0}initialize(){const{view:r}=this,e=this.layerSource.layer;this._i3sSources=e.type==="building-scene"?this._getBuildingSceneI3SSources(r,e):[this._getSceneLayerI3SSource(r,e)]}async fetchCandidates(r,e){const t=await Promise.all(this._i3sSources.map(s=>s.fetchCandidates(r,e)));return O(e),t.flat()}refresh(){this._i3sSources.forEach(r=>r.refresh())}_getBuildingSceneI3SSources(r,e){return e.allSublayers.toArray().map(t=>t.type==="building-component"?new n({getLayerView:async()=>(await r.whenLayerView(e)).whenSublayerView(t),view:r}):null).filter(I)}_getSceneLayerI3SSource(r,e){return new n({getLayerView:async()=>{const t=await r.whenLayerView(e);return t.type==="scene-layer-graphics-3d"?void 0:t},view:r})}};i([o({constructOnly:!0})],l.prototype,"layerSource",void 0),i([o({constructOnly:!0})],l.prototype,"view",void 0),i([o({readOnly:!0})],l.prototype,"updating",null),i([o({readOnly:!0})],l.prototype,"availability",void 0),l=i([g("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],l);export{l as SceneLayerSnappingSource};