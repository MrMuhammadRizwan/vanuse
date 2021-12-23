import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

import PickupTime from "./pickupTime/pickupTime";
import PickupDate from "./pickupTime/pickupDate";
import Services from "./services/services";

const Cards = (props) => {
    const [sliderValue, setSliderValue] = React.useState(1);
    const [gettingDate, setGettingDate] = React.useState(new Date());
    const [shedulePickupValue, setShedulePickupValue] = React.useState(false);
    const [viwServices, setViwServices] = React.useState(false);
    const [viwPickupTime, setViwPickupTime] = React.useState(true);


    const getDateFromComponent = (date) =>{
        console.log('getDate parent', date)
        setGettingDate(date)
    }

    const shedulePickupChange = (data) =>{
        console.log('shedulePickupChange', data)
        setShedulePickupValue(data)
    }
    const goNextServices = () => {
        setViwPickupTime(false)
        console.log('goServices')
        setViwServices(true)
        setSliderValue(2)
      }
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
                        {viwServices?
                            <PickupTime dateValueFromOtherComp={gettingDate} shedulePickupChange={shedulePickupChange} goBack={props.goBack} goNextServices={goNextServices}/>
                            :null
                        }
                        {viwPickupTime?
                            <PickupTime dateValueFromOtherComp={gettingDate} shedulePickupChange={shedulePickupChange} goBack={props.goBack} goNextServices={goNextServices}/>
                            :null
                        }
                    </div>
                </div>
            </Grid>
            <Grid item xs={5}>
            {viwPickupTime?
                <>
                {shedulePickupValue?
                    <PickupDate getDate={getDateFromComponent}/>
                    :null
                }
                </>
            :null
            }
            </Grid>
            </Grid>
        </>
    );
};
export default Cards;