import React, { useState, useEffect } from 'react';

import ReactMapboxGl, { Layer, Feature , Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
  'pk.eyJ1Ijoicml6d2FubmF3YXoiLCJhIjoiY2tzeTlmNGFwMmgzZjJ3b2RuYXluMjlubyJ9.mOkCtfppIGQLpBDxEs0KDw'
});

const CustomMap = (value) => {
  const [showIcon, setShowIcon] = React.useState(false);
  // latitude: 32.154687
  // longitude: 74.180358
  useEffect(() => {
    value.value && value.value2?
      setShowIcon(true)
      :
      setShowIcon(false)
  }, [value])

  return (
    <div className='map-box'>
      <Map
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: '250px',
          width: '100%'
        }}
        zoom={[2]}
        center={
          showIcon ?
          [value.value?value.value.longitude:-81.25, value.value2?value.value2.latitude:42.99]
          :
          [-81.25, 42.99]
        }
        >
  
          {/* start location */}
              {showIcon?
                  <Marker
                    coordinates={
                      [value.value.longitude, value.value.latitude]
                    }
                    id={'ss'}
                    anchor="bottom">
                     <img src="/map-start.svg" alt="search start" className="icons" />
                  </Marker>
                :null}

                {showIcon?
                  <Marker
                    coordinates={
                      [value.value2.longitude, value.value2.latitude]
                    }
                    id={'22'}
                    anchor="bottom">
                    <img src="/map-end.svg" alt="search end" className="icons" />
                    </Marker>
                :null}
              

      </Map>
    </div>
  );
};
export default CustomMap;