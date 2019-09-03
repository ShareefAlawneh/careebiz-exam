import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const {
  DrawingManager
} = require("react-google-maps/lib/components/drawing/DrawingManager");
export const drawingModes = [
  'circle', 'polygon', 'polyline', 'rectangle'
];


const Map = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {console.log("props", props)}
    <DrawingManager
      defaultDrawingMode={''}
      drawingMode={props.selectedDrawingMode}
      onCircleComplete={props.onAddShape}
      onPolygonComplete={props.onAddShape}
      onPolylineComplete={props.onAddShape}
      onRectangleComplete={props.onAddShape}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: props.selectedDrawingMode,
          drawingModes
        }
      }}
    />
  </GoogleMap>
));

export default Map;