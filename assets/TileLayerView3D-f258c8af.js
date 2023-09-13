import{ap as a,aq as o,ai as r,aj as s,al as p}from"./index-c2655857.js";import{n}from"./LayerView3D-35b6a341.js";import{o as h}from"./TiledLayerView3D-912559d3.js";import{d as u}from"./LayerView-6a87ca6a.js";import{a as m}from"./RefreshableLayerView-b12aaf50.js";import{S as f,U as y}from"./MapServiceLayerViewHelper-a99bca8e.js";import{r as d}from"./drapedUtils-c50b7dbc.js";import"./floorFilterUtils-080a7cd2.js";import"./normalizeUtils-983801c4.js";import"./normalizeUtilsCommon-ecf4c6e7.js";import"./sublayerUtils-914a1241.js";let t=class extends m(h(n(u))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get tileInfo(){return this.layer.tileInfo}initialize(){if(this.layer.type==="web-tile"){const e=this.layer.get("fullExtent.spatialReference"),i=this.layer.get("tileInfo.spatialReference");if(e==null||i==null||!a(e,i)){const l=this.layer.originOf("fullExtent")==="defaults"||this.layer.fullExtent==null?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new o("layerview:incompatible-fullextent",l)))}}f(this,this.layer)&&(this._popupHighlightHelper=new y({createFetchPopupFeaturesQueryGeometry:(e,i)=>d(e,i,this.view),layerView:this,updatingHandles:this.updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){var e;(e=this._popupHighlightHelper)==null||e.destroy()}async fetchPopupFeatures(e,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,i):[]}async doRefresh(){this.suspended||this.emit("data-changed")}};r([s()],t.prototype,"imageFormatIsOpaque",null),r([s()],t.prototype,"hasMixedImageFormats",null),r([s()],t.prototype,"layer",void 0),r([s()],t.prototype,"tileInfo",null),t=r([p("esri.views.3d.layers.TileLayerView3D")],t);const v=t;export{v as default};