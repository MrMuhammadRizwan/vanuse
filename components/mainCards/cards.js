import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

import PickupTime from "./pickupTime/pickupTime";
import PickupDate from "./pickupTime/pickupDate";
import Services from "./services/services";
import AddItems from "./addItems/addItems";
import MyItemsList from "./addItems/myItemsList";
import CustomItems from "./addItems/customItems";


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
    const [myItemsList, setMyItemsList] = React.useState(itemsList);
    const [allItemsList, setAllItemsList] = React.useState(itemsList);

    const [viewCustomItemsScreen, setViewCustomItemsScreen] = React.useState(false);
    const [viewCustomItemsScreenList, setViewCustomItemsScreenList] = React.useState(false);
    
    const [filteredData, setFilteredData] = React.useState([]);



    const getDateFromComponent = (date) =>{
        setGettingDate(date)
    }

    const shedulePickupChange = (data) =>{
        setShedulePickupValue(data)
        console.log('clickSchedule Main', data)
        if(data){
            setShedulePickupValue(data)
        }else{
            setShedulePickupValue(false)
        }
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
        setViewCustomItemsScreenList(true)
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
        setViewCustomItemsScreen(false)
        setViewCustomItemsScreenList(false)
    }

    const goBackThirdMainScreen = () => {
        setViwAddItemsScreen(true)
        setViewAddItemsToList(true)
        setViewCustomItemsScreen(false)
        setViewCustomItemsScreenList(true)
    }

    // const addItemsToList = ( list ) => {
    //     console.log('addItems >>>', list)
    //     setViewAddItemsToList(true)
    //     setMyItemsList(list)
    // }


    const increaseQty = (qty, ind, key) => {
        console.log('increaseQty rooms', qty, ind, key);
        let keys = key
        const rooms = JSON.parse(JSON.stringify(allItemsList));
            rooms[JSON.parse(JSON.stringify(keys))].subitems[JSON.parse(JSON.stringify(ind))].quantity++;

        console.log('increaseQty rooms', rooms);

        setAllItemsList(rooms)
        setMyItemsList(rooms)

    }

    const decreaseQty = (qty, ind, key) => {
        let kiy = key
        const rooms = JSON.parse(JSON.stringify(allItemsList));
        
        console.log('decreaseQty rooms', rooms);
        
        if(rooms[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity){
            rooms[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity--;
            
        }else{
            rooms[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity=0;
        }
        setAllItemsList(rooms)

        setMyItemsList(rooms)

    }

    const clearQty = (qty, ind, kiy) => {
        console.log('clearQty', qty, ind, kiy);
        const List = JSON.parse(JSON.stringify(allItemsList));
              List[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity = 0;
        console.log('clearQty 2', List);

        setAllItemsList(List)
        setMyItemsList(List)

    }

    const customItem = () => {
        console.log('customItem');
        setViwPickupTime(false)
        setViwAddItemsScreen(false)
        setViwServices(false)
        setViewCustomItemsScreen(true)
    }

    const getValueFromCustomForm = (formData) => {
        console.log('getValueFromCustomForm', formData);
        const getIndex = myItemsList.length - 1
        // console.log('getValueFromCustomForm', getIndex);
        // if(formData.subitems.length>0){
        //     setMyItemsList(prevState => ([
        //         ...prevState,
        //         formData
        //     ]))
        // }
        
            setMyItemsList(prevState => ([
                ...prevState,
                    {
                        'key':getIndex+1,
                        'title':'Custom Items',
                        'subitems':[
                            formData
                        ]
                    }
            ]))

            setAllItemsList(prevState => ([
                ...prevState,
                    {
                        'key':getIndex+1,
                        'title':'Custom Items',
                        'subitems':[
                            formData
                        ]
                    }
            ]))
        console.log('getValueFromCustomForm myItemsList', myItemsList);

        localStorage.setItem("allItems", JSON.stringify(myItemsList));

        console.log('allItems localStorage', localStorage.getItem("allItems"));


    }
    
    useEffect(() => {
        // localStorage.setItem("allItems", allItemsList);
    }, [viewAddItemsToList, allItemsList]);


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
                            {viewCustomItemsScreen?
                                <CustomItems
                                    goBackThirdMainScreen={goBackThirdMainScreen} 
                                    getValueFromCustomForm={getValueFromCustomForm}
                                    allItemsList={allItemsList}
                                    increaseQty={increaseQty}
                                    decreaseQty={decreaseQty}
                                    />
                                :null
                            }
                            {viwAddItemsScreen?
                                <AddItems 
                                    goBackThirdScreen={goBackThirdScreen} 
                                    // addItemsToList={addItemsToList} 
                                    allItemsList={allItemsList}
                                    increaseQty={increaseQty}
                                    decreaseQty={decreaseQty}
                                    customItem={customItem}
                                    />
                                :null
                            }
                            {viwServices?
                                <Services 
                                    goBackSecondScreen={goBackSecondScreen} 
                                    goNextFourScreen={goNextFourScreen}
                                    />
                                :null
                            }
                            {viwPickupTime?
                                <PickupTime 
                                    dateValueFromOtherComp={gettingDate} 
                                    shedulePickupChange={shedulePickupChange} 
                                    goBackFirstScreen={props.goBack} 
                                    goNextServices={goNextServices} 
                                    clickSchedule={props.clickSchedule}
                                    />
                                :null
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    {viewCustomItemsScreenList?
                        <MyItemsList 
                            myItemsList={myItemsList}
                            increaseQty={increaseQty}
                            decreaseQty={decreaseQty}
                            clearQty={clearQty}
                            />
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