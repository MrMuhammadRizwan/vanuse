import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

import PickupTime from "./pickupTime/pickupTime";
import PickupDate from "./pickupTime/pickupDate";
import Services from "./services/services";
import AddItems from "./addItems/addItems";

const Cards = (props) => {
    const [sliderValue, setSliderValue] = React.useState(1);
    const [gettingDate, setGettingDate] = React.useState(new Date());
    const [shedulePickupValue, setShedulePickupValue] = React.useState(false);
    const [viwServices, setViwServices] = React.useState(false);
    const [viwPickupTime, setViwPickupTime] = React.useState(true);
    const [viwAddItemsScreen, setViwAddItemsScreen] = React.useState(false);


    const getDateFromComponent = (date) =>{
        setGettingDate(date)
    }

    const shedulePickupChange = (data) =>{
        setShedulePickupValue(data)
    }

    const goNextServices = () => {
        setViwPickupTime(false)
        setViwServices(true)
        setSliderValue(2)
    }
    
    const goNextFourScreen = () => {
        setViwPickupTime(false)
        setViwServices(false)
        setViwAddItemsScreen(true)
        setSliderValue(3)
    }

    const goBackSecondScreen = () => {
        setViwServices(false)
        setViwPickupTime(true)
        setSliderValue(1)
    }

    const goBackThirdScreen = () => {
        setViwPickupTime(false)
        setViwAddItemsScreen(false)
        setViwServices(true)
        setSliderValue(2)
    }

    const addItems = () => {
        console.log('addToList')
    }

    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6}>
                    <div className="banner-card">
                        <div className="card-content">
                            <div className="card-slider">
                                <Slider aria-label="Volume" 
                                    value={sliderValue} max={5} 
                                    disabled/>
                                <span className="card-slider-count">{sliderValue}/5</span>
                            </div>
                            {viwAddItemsScreen?
                                <AddItems goBackThirdScreen={goBackThirdScreen} addItems={addItems}/>
                                :null
                            }
                            {viwServices?
                                <Services goBackSecondScreen={goBackSecondScreen} goNextFourScreen={goNextFourScreen}/>
                                :null
                            }
                            {viwPickupTime?
                                <PickupTime dateValueFromOtherComp={gettingDate} shedulePickupChange={shedulePickupChange} goBackFirstScreen={props.goBackFirstScreen} goNextServices={goNextServices}/>
                                :null
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                {viwPickupTime?
                    <>
                    {shedulePickupValue?
                        <PickupDate getDate={getDateFromComponent}/>
                        :null
                    }
                    </>
                :null
                }
                    <div class="right-heading">
                        <img src="/blue-car.svg" alt="Blue Car" className="bluecar" />
                    </div>
                </Grid>
            </Grid>
        </>
    );
};
export default Cards;