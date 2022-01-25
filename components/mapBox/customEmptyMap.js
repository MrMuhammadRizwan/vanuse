import React, { useState, useEffect } from "react";

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoicml6d2FubmF3YXoiLCJhIjoiY2tzeTlmNGFwMmgzZjJ3b2RuYXluMjlubyJ9.mOkCtfppIGQLpBDxEs0KDw",
});

const CustomEmptyMap = () => {
  return (
    <div className="map-box">
      <Map
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: "250px",
          width: "100%",
        }}
        zoom={[14]}
        center={[-81.25, 42.99]}
      />
    </div>
  );
};
export default CustomEmptyMap;
