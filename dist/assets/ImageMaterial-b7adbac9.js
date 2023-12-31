import{i6 as m,i7 as v,i8 as P,aQ as f,i9 as u,ia as y,ib as O,ic as A,id as $,hv as r,ie as g,ig as S,ih as c,ii as C,aF as E,ij as x,ik as _,ai as o,il as n,im as d,io as w,ip as b,iq as N,ir as D,is as M,it as I,iu as R,iv as F,iw as L,ix as U,iy as B,iz as G,iA as W,iB as z,iC as H,iD as j,iE as q,hw as p,iF as Q,iG as V,iH as k,iI as J}from"./index-b652a0c6.js";function K(a){const e=new m,{vertex:t,fragment:i}=e;return v(t,a),e.include(P,a),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(O,a),i.uniforms.add(new A("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===r.Alpha?i.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(g)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(i.include(S),i.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(g)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===c.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const X=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));class h extends w{initializeProgram(e){return new b(e.rctx,h.shader.get().build(this.configuration),N)}_setPipelineState(e,t){const i=this.configuration,l=e===c.NONE,T=e===c.FrontFace;return D({blending:i.output!==r.Color&&i.output!==r.Alpha||!i.transparent?null:l?Y:M(e),culling:I(i.cullFace),depthTest:{func:R(e)},depthWrite:l?i.writeDepth?F:null:L(e),colorWrite:U,stencilWrite:i.hasOccludees?B:null,stencilTest:i.hasOccludees?t?G:W:null,polygonOffset:l||T?null:z(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new C(X,()=>E(()=>import("./ImageMaterial.glsl-7986692d.js"),["assets/ImageMaterial.glsl-7986692d.js","assets/index-b652a0c6.js","assets/index-2df4d734.css"]));const Y=x(_.ONE,_.ONE_MINUS_SRC_ALPHA);class s extends H{constructor(){super(...arguments),this.output=r.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:r.COUNT})],s.prototype,"output",void 0),o([n({count:d.COUNT})],s.prototype,"cullFace",void 0),o([n()],s.prototype,"hasSlicePlane",void 0),o([n()],s.prototype,"transparent",void 0),o([n()],s.prototype,"enableOffset",void 0),o([n()],s.prototype,"writeDepth",void 0),o([n()],s.prototype,"hasOccludees",void 0),o([n({count:c.COUNT})],s.prototype,"transparencyPassType",void 0),o([n()],s.prototype,"hasMultipassTerrain",void 0),o([n()],s.prototype,"cullAboveGround",void 0);class ae extends j{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new s}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<q,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===r.Color||t===r.Alpha||t===r.Highlight?e===p.DRAPED_MATERIAL?!0:t===r.Highlight?e===p.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?p.TRANSPARENT_MATERIAL:p.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:p.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Z(e)}createBufferWriter(){return new Q(V)}}class Z extends k{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==r.Color&&this._output!==r.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends J{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,K as v};
