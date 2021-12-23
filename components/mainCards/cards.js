import * as React from 'react';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

import PickupTime from "./pickupTime/pickupTime";
import PickupDate from "./pickupTime/pickupDate";

const Cards = () => {
    const [sliderValue, setSliderValue] = React.useState(1);
  return (
    <>
    <Grid container spacing={10}>
      <Grid item xs={6}>
        <div className="banner-card">
            <div className="card-content">
                <div className="card-slider">
                    <Slider aria-label="Volume" 
                        value={sliderValue} max={5} 
                        disabled/>
                    <span className="card-slider-count">{sliderValue}/5</span>
                </div>
                <PickupTime />
            </div>
        </div>
      </Grid>
      <Grid item xs={5}>
        <PickupDate/>
      </Grid>
    </Grid>
    </>
  );
};
export default Cards;