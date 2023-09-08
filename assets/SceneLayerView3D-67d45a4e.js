import{bh as f,bi as m,ag as h,bj as a,ah as _,b3 as b,be as d,bk as F,bl as v,az as I,bm as u,ai as l,aj as n,aA as w,bn as E,al as O}from"./index-4a2a8e32.js";import{s as j,D as x}from"./I3SOverrides-4911607f.js";import{f as S}from"./WhereClause-914ffa63.js";import{o as C}from"./floorFilterUtils-080a7cd2.js";import{x as H,c as Q,E as q}from"./I3SMeshView3D-8307d11f.js";import{n as V}from"./LayerView3D-357435c1.js";import{p as D,r as A,s as R,l as L,i as $,j as G}from"./SceneLayerView-93b30b51.js";import{L as p,d as U,l as P,o as M}from"./I3SQueryFeatureStore-cbca67be.js";import{n as y}from"./I3SNode-027eba91.js";import{t as N}from"./DefinitionExpressionSceneLayerView-835bab9b.js";import{i as z}from"./PopupSceneLayerView-d3c42ecc.js";import"./meshFeatureSet-199a8653.js";import"./MeshGeoreferencedRelativeVertexSpace-2d15e21d.js";import"./MeshLocalVertexSpace-ff29e29f.js";import"./georeference-0b768c20.js";import"./External-d2b9d83b.js";import"./FeatureLayerView3D-19c41144.js";import"./FeatureLayerViewBase3D-b0013a51.js";import"./FeatureLikeLayerView3D-309cc35b.js";import"./dehydratedFeatureComparison-8af36f04.js";import"./queryForSymbologySnapping-3151fb9e.js";import"./elevationInfoUtils-59ca4653.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-78412461.js";import"./optimizedFeatureQueryEngineAdapter-16bcdb07.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-812c43b8.js";import"./quickselect-94603516.js";import"./QueryEngine-c9a04bbc.js";import"./normalizeUtils-fd2a5db8.js";import"./normalizeUtilsCommon-1cd3f30a.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-bbf63e79.js";import"./generateRendererUtils-2338da02.js";import"./FeatureStore-98253549.js";import"./BoundsStore-689e73da.js";import"./projectExtentUtils-2cab06fa.js";import"./query-dffe729f.js";import"./pbfQueryUtils-2c4c2b56.js";import"./pbf-5cbd0354.js";import"./EventedSet-988365f4.js";import"./LayerView-0086d16f.js";import"./RefreshableLayerView-51230066.js";import"./executionError-c92d3b85.js";import"./SceneModification-bbf6005d.js";import"./SceneLayerWorker-5fac4a39.js";const c=$();let s=class extends H(N(z(V(G)))){constructor(){super(...arguments),this.type="scene-layer-3d",this._setVisibilityHiddenObjectIds=new j,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then(()=>{var r;f(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this.i3sOverrides=new x({view:this.view,layer:e,memoryController:i}),this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){var e;return this.layer.popupEnabled&&m(this.layer,(e=this.view.popup)==null?void 0:e.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(e){this._set("filter",p.checkSupport(e)?e:null)}get viewFilter(){const e=this.filter,t=this.layerFilter;if(e==null&&t==null)return null;const i=this._get("viewFilter");return i==null?new p({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),addSqlFilter:(r,o)=>this.addSqlFilter(r,o,this.logError)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get _floorFilterClause(){const e=C(this);return e!=null?S.create(e,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort((t,i)=>t-i):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort((e,t)=>e-t):null}get _objectQualitySettings(){var e,t,i;return(i=(t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.sceneService)==null?void 0:i.object}get lodFactor(){var e;return((e=this._objectQualitySettings)==null?void 0:e.lodFactor)??1}get lodCrossfadeinDuration(){return this._objectQualitySettings.lodCrossfadeinDuration??0}get lodCrossfadeoutDuration(){return this._objectQualitySettings.lodCrossfadeoutDuration??0}get lodCrossfadeUncoveredDuration(){return this._objectQualitySettings.lodCrossfadeUncoveredDuration??0}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??0}initialize(){this._fieldsHelper=new D({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,t=>this._rangeInfosChanged(t),h),this.updatingHandles.add(()=>this.layer.renderer,t=>this.updatingHandles.addPromise(this._rendererChange(t)),h);const e=()=>this._filterChange();this.updatingHandles.add(()=>this.parsedDefinitionExpression,e),this.updatingHandles.add(()=>this.filter,e),this.updatingHandles.add(()=>this._floorFilterClause,e),this.updatingHandles.add(()=>this._excludeObjectIdsSorted,e),this.updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,e),this.updatingHandles.add(()=>this.viewFilter!=null?this.viewFilter.sortedObjectIds:null,e),this.updatingHandles.add(()=>this.viewFilter!=null?this.viewFilter.parsedWhereClause:null,e),this.updatingHandles.add(()=>[this.viewFilter!=null?this.viewFilter.parsedGeometry:null,this.filter!=null?this.filter.spatialRelationship:null,this.layer.filter!=null?this.layer.filter.spatialRelationship:null],()=>this._geometryFilterChange()),a()&&this.i3sOverrides.is3DOFL&&this.updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,e),this.handles.add(this.layer.on("apply-edits",t=>this.updatingHandles.addPromise(t.result))),this.handles.add(this.layer.on("edits",t=>this._handleEdits(t)))}destroy(){this._fieldsHelper=_(this._fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&b.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new d(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(i=>{if(!(i!=null&&i.features))return i;const r=this.layer;for(const o of i.features)o.layer=r,o.sourceLayer=r;return i})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=Q(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new U({layerView:this,priority:F.FEATURE_QUERY_ENGINE,spatialIndex:new P({featureAdapter:new M({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:e}),forAllFeatures:(t,i)=>this._forAllFeatures((r,o,g)=>t({id:r,index:o,meta:g}),i,q.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:v(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof d){const{set:i,handle:r}=t.acquireSet();return this.queryObjectIds(e).then(o=>t.setFeatureIds(i,o)),r}return super.highlight(e)}createInteractiveEditSession(e){return A(this._attributeEditingContext,e)}_createLayerGraphic(e){const t=new I(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}getFilters(){const e=super.getFilters();a()&&this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&e.push((r,o)=>{o.node.index>=0&&u(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,r)});const t=this._setVisibilityHiddenObjectIdsSorted;t!=null&&e.push(r=>u(t,!1,r));const i=this._excludeObjectIdsSorted;return i!=null&&e.push(r=>u(i,!1,r)),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this.viewFilter!=null&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}setVisibility(e,t){t?this._setVisibilityHiddenObjectIds.delete(e):this._setVisibilityHiddenObjectIds.add(e)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||this.viewFilter!=null&&this.viewFilter.updating||this.i3sOverrides!=null&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():d.from(e))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes(t=>t!=null?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){a()&&R(this._attributeEditingContext,e),L(this._attributeEditingContext,e)}get hasGeometryFilter(){const e=this.viewFilter;return e!=null&&e.parsedGeometry!=null}computeNodeFiltering(e){const t=this.viewFilter;return t==null||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?y.Unmodified:y.Culled}};l([n()],s.prototype,"i3slayer",null),l([n(w)],s.prototype,"updatingProgress",void 0),l([n({type:E})],s.prototype,"filter",null),l([n({readOnly:!0})],s.prototype,"viewFilter",null),l([n(c.requiredFields)],s.prototype,"requiredFields",null),l([n(c.availableFields)],s.prototype,"availableFields",void 0),l([n()],s.prototype,"_fieldsHelper",void 0),l([n()],s.prototype,"_floorFilterClause",null),l([n()],s.prototype,"_excludeObjectIdsSorted",null),l([n()],s.prototype,"_setVisibilityHiddenObjectIds",void 0),l([n()],s.prototype,"_setVisibilityHiddenObjectIdsSorted",null),l([n()],s.prototype,"_objectQualitySettings",null),l([n()],s.prototype,"lodFactor",null),l([n()],s.prototype,"updatingProgressValue",null),s=l([O("esri.views.3d.layers.SceneLayerView3D")],s);const $e=s;export{$e as default};