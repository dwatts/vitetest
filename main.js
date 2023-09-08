import './style.css'
import Map from "@arcgis/core/Map.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import SceneLayer from "@arcgis/core/layers/SceneLayer";

const buildingRenderer = {
  type: "simple",
  symbol: {
    type: "mesh-3d",
    symbolLayers: [
      {
        type: "fill",
        material: {
          color: [240, 240, 240, 0.7]
        },
        edges: {
          type: "solid",
          color: [0, 0, 0, 0.6],
          size: 0.5
        }
      }
    ]
  }
};

const desBuildings = new SceneLayer({
  url:"https://tiles.arcgis.com/tiles/uX5kr9HIx4qXytm9/arcgis/rest/services/Designated_3D_Buildings/SceneServer",
  renderer: buildingRenderer,
  popupEnabled: false
})

const nonDesBuildings = new SceneLayer({
  url:"https://tiles.arcgis.com/tiles/uX5kr9HIx4qXytm9/arcgis/rest/services/NonDesignated_3D_Buildings/SceneServer",
  renderer: buildingRenderer,
  popupEnabled: false
})

const map = new Map({
  basemap: "gray-vector",
  ground: "world-elevation",
  layers: [desBuildings, nonDesBuildings]
});

const view = new SceneView({
  map: map,
  zoom: 13,
  viewingMode: "local", 
  qualityProfile: "high",
  container: "viewDiv",
  camera: {
    position: {
      latitude: 40.682252429650674,
      longitude: -73.92907468482736,
      z: 8555.69067688151
    },
    tilt: 46.88991231380563,
    heading: 299.4493985836785
  }
});


