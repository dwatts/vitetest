import{ao as b,av as c,ag as h,aJ as E,ce as s,ai as a,aj as r,al as F,f0 as V}from"./index-b652a0c6.js";import{m as C}from"./elevationInfoUtils-59994bfa.js";import{E as D,b as $}from"./DimensionAnalysisView3D-4c9af134.js";import{i as A,o as I}from"./queryEngineUtils-1ea909fa.js";import{i as m,r as R,n as v}from"./symbologySnappingCandidates-cdd49137.js";import"./LineVisualElement-c80b3c9a.js";import"./LengthDimension-aac896c6.js";import"./Segment-f97951bd.js";import"./unitFormatUtils-798da057.js";import"./analysisViewUtils-2805abd1.js";import"./ImageMaterial-b7adbac9.js";import"./Factory-8c07f4da.js";import"./RightAngleQuadVisualElement-6b69dc04.js";import"./VisualElementResources-30843197.js";import"./PointVisualElement-82610e34.js";import"./EditGeometryOperations-fdae198b.js";import"./dehydratedFeatureComparison-6294e6cf.js";import"./VertexSnappingCandidate-a34fe308.js";let o=class extends b{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return m();const n=async(p,l)=>(await V(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(p,l);return m(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n,spatialReference:e.spatialReference})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return R(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?v(this._symbologySnappingSupported,async(i,n)=>{const p=await e.whenLayerView(t);return s(n),p.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):v()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;C(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),c(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h),c(()=>{var i;return this._layerView3D!=null?(i=this._layerView3D.processor)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),h),E(()=>{var i;return(i=this._layerView3D)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null}refresh(){}async fetchCandidates(e,t){var u;const{layer:i}=this.layerSource,n=i.source;if(!(n!=null&&n.querySnapping))return[];const p=D(i),l=$(e,((u=this.view)==null?void 0:u.type)??"2d",p),d=await n.querySnapping(l,{signal:t});s(t);const y=await this._snappingElevationAligner.alignCandidates(d.candidates,t);s(t);const g=await this._symbologySnappingFetcher.fetch(y,t);s(t);const S=g.length===0?y:[...y,...g],w=this._snappingElevationFilter.filter(l,S),_=this._getGroundElevation;return w.map(f=>A(f,_))}get _getGroundElevation(){return I(this.view)}};a([r({constructOnly:!0})],o.prototype,"layerSource",void 0),a([r({constructOnly:!0})],o.prototype,"view",void 0),a([r()],o.prototype,"_snappingElevationAligner",null),a([r()],o.prototype,"_snappingElevationFilter",null),a([r()],o.prototype,"_symbologySnappingFetcher",null),a([r()],o.prototype,"_layerView3D",void 0),a([r()],o.prototype,"_symbologySnappingSupported",null),a([r()],o.prototype,"_getGroundElevation",null),o=a([F("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],o);export{o as FeatureCollectionSnappingSource};
