import{ai as i,aj as o,cK as a,al as p}from"./index-86f9eeba.js";import{z as m}from"./DynamicLayerView3D-5d39544b.js";import{m as n}from"./ExportImageParameters-8e1b55b6.js";import{U as l}from"./MapServiceLayerViewHelper-32c941a1.js";import{r as h}from"./drapedUtils-2170da23.js";import"./LayerView3D-856849a4.js";import"./projectExtentUtils-4fa5c90e.js";import"./ImageMaterial-84ff0406.js";import"./LayerView-9b11ad19.js";import"./RefreshableLayerView-49a47e66.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-765f3c4f.js";import"./normalizeUtils-da0a6380.js";import"./normalizeUtilsCommon-dcbebb9e.js";const u=t=>{let e=class extends t{initialize(){this.exportImageParameters=new n({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var r;return((r=this.view)==null?void 0:r.floors)??null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var r;return!!super.canResume()&&!((r=this.timeExtent)!=null&&r.isEmpty)}};return i([o()],e.prototype,"exportImageParameters",void 0),i([o({readOnly:!0})],e.prototype,"floors",null),i([o({readOnly:!0})],e.prototype,"exportImageVersion",null),i([o()],e.prototype,"layer",void 0),i([o()],e.prototype,"suspended",void 0),i([o(a)],e.prototype,"timeExtent",void 0),e=i([p("esri.views.layers.MapImageLayerView")],e),e};let s=class extends u(m){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new l({createFetchPopupFeaturesQueryGeometry:(t,e)=>h(t,e,this.view),layerView:this,updatingHandles:this.updatingHandles})}destroy(){var t;(t=this._popupHighlightHelper)==null||t.destroy()}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};s=i([p("esri.views.3d.layers.MapImageLayerView3D")],s);const _=s;export{_ as default};