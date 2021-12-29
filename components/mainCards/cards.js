import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

import PickupTime from "./pickupTime/pickupTime";
import PickupDate from "./pickupTime/pickupDate";
import Services from "./services/services";
import AddItems from "./addItems/addItems";
import MyItemsList from "./addItems/myItemsList";


const itemsList = [
    {
        'key':0,
        'title':'Parent',
        'subitems':[
            {
                'id':'9090',
                'title':'yyyyyy',
                'quantity':1,
                'width':'30',
                'height':'23',
                'depth':'14',
                'instructions':'instructions here',
            },
            {
                'id':'9092',
                'title':'zzzzzzz',
                'quantity':0,
                'width':'30',
                'height':'23',
                'depth':'14',
                'instructions':'instructions here',
            },
            {
                'id':'9093',
                'title':'cccccccc',
                'quantity':0,
                'width':'30',
                'height':'23',
                'depth':'14',
                'instructions':'instructions here',
            }
        ]
    },
    {
        'key':1,
        'title':'Parent2',
        'subitems':[
            {
                'id':'9094',
                'title':'dddddddd',
                'quantity':0,
                'width':'30',
                'height':'23',
                'depth':'14',
                'instructions':'instructions here',
            }
        ]
    },
    {
        'key':2,
        'title':'Parent3',
        'subitems':[
            {
                'id':'9095',
                'title':'ffffffff',
                'quantity':0,
                'width':'30',
                'height':'23',
                'depth':'14',
                'instructions':'instructions here',
            }
        ]
    }
]

const Cards = (props) => {
    const [sliderValue, setSliderValue] = React.useState(1);
    const [gettingDate, setGettingDate] = React.useState(new Date());
    const [shedulePickupValue, setShedulePickupValue] = React.useState(false);
    const [viwServices, setViwServices] = React.useState(false);
    const [viwPickupTime, setViwPickupTime] = React.useState(true);
    const [viwAddItemsScreen, setViwAddItemsScreen] = React.useState(false);
    const [viewAddItemsToList, setViewAddItemsToList] = React.useState(false);
    const [myItemsList, setMyItemsList] = React.useState([]);


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
        setViewAddItemsToList(false)
    }

    const goBackThirdScreen = () => {
        setViwPickupTime(false)
        setViwAddItemsScreen(false)
        setViwServices(true)
        setSliderValue(2)
        setViewAddItemsToList(false)
    }

    const addItemsToList = ( list ) => {
        console.log('addItems >>>', list)
        setViewAddItemsToList(true)
        setMyItemsList(list)
    }
    
    useEffect(() => {
    }, [viewAddItemsToList,myItemsList]);


    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6}>
                    <div className="banner-card">
                        <div className="card-content">
                            <div className="card-slider">
                                <Slider 
                                    aria-label="Volume" 
                                    value={sliderValue} max={5} 
                                    disabled/>
                                <span className="card-slider-count">{sliderValue}/5</span>
                            </div>
                            {viwAddItemsScreen?
                                <AddItems goBackThirdScreen={goBackThirdScreen} addItemsToList={addItemsToList} itemsList={itemsList}/>
                                :null
                            }
                            {viwServices?
                                <Services goBackSecondScreen={goBackSecondScreen} goNextFourScreen={goNextFourScreen}/>
                                :null
                            }
                            {viwPickupTime?
                                <PickupTime dateValueFromOtherComp={gettingDate} shedulePickupChange={shedulePickupChange} goBackFirstScreen={props.goBack} goNextServices={goNextServices} clickSchedule={props.clickSchedule}/>
                                :null
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    {viewAddItemsToList?
                        <MyItemsList myItemsList={myItemsList}/>
                        :null
                    }
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
                        <img src="/blue-car.svg" alt="Banner Car" className="bluecar" />
                    </div>
                </Grid>
            </Grid>
        </>
    );
};
export default Cards;