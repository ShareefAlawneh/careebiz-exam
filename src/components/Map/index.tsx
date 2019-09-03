import React from "react";

import Map from "./Map";

const MapHOC = ({ onAddShape, selectedDrawingMode }) => {
  return (
    <Map onAddShape={onAddShape} selectedDrawingMode={selectedDrawingMode} />
  );
};

export default MapHOC;
