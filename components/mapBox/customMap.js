import React, { useState, useEffect } from 'react';

import ReactMapboxGl, { Layer, Feature , Marker } from 'react-mapbox-gl';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Map = ReactMapboxGl({
  accessToken:
  'pk.eyJ1Ijoicml6d2FubmF3YXoiLCJhIjoiY2tzeTlmNGFwMmgzZjJ3b2RuYXluMjlubyJ9.mOkCtfppIGQLpBDxEs0KDw'
});

const CustomMap = (value, value2) => {

  console.log('CustomMap value 2222', value, value2)
  // console.log('CustomMap value2', value.latitude, value2.longitude)

  const [showIcon, setShowIcon] = React.useState(false);
  const [showIcon2, setShowIcon2] = React.useState(false);

  useEffect(() => {
    console.log( 'value CustomMap', value.value)
    // console.log( 'value CustomMap 2 >>>>>>',value, value2)
    value.value?
      setShowIcon(true)
    :
    setShowIcon(false)

    value2.value2?
      setShowIcon2(true)
    :
    setShowIcon2(false)
  }, [value,value2])

  return (
    <div className='map-box'>
      <Map
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: '250px',
          width: '100%'
        }}
        zoom={[13]}
        center={[showIcon ? value.value.longitude : 74.556022, showIcon ? value.value.latitude:32.483556]}
        >
          {showIcon?
            <Marker
              coordinates={[value.value.longitude, value.value.latitude]}
              anchor="bottom">
              <Brightness1Icon />
            </Marker>
            :
              null
            }
          {console.log( 'value CustomMap 2 >>>>>>', value2)}
          {showIcon2?
            <Marker
              coordinates={[value2.value2.longitude, value2.value2.latitude]}
              anchor="bottom">
              <AddLocationAltIcon />
            </Marker>
            :
              null
            }
      </Map>;
    </div>
  );
};
export default CustomMap;