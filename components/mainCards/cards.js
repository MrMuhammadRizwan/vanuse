import * as React from 'react';

import PickupTime from "./pickupTime/pickupTime";
import Slider from '@mui/material/Slider';

const Cards = () => {
    const [sliderValue, setSliderValue] = React.useState(1);

    // const handleChange = (event, newValue) => {
    //     setSliderValue(newValue);
    // };
  return (
    <div className="banner-card">
        <div className="card-content">
            <div className="card-slider">
                <Slider aria-label="Volume" 
                    value={sliderValue} max={5} 
                    // onChange={handleChange} 
                    disabled/>
                <span className="card-slider-count">{sliderValue}/5</span>
            </div>
            <PickupTime />
        </div>
    </div>
  );
};
export default Cards;