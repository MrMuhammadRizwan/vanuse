import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

import PickupTime from "./pickupTime/pickupTime";
import PickupDate from "./pickupTime/pickupDate";
import Services from "./services/services";
import AddItems from "./addItems/addItems";
import MyItemsList from "./addItems/myItemsList";
import CustomItems from "./addItems/customItems";
import SelectVan from "./selectVan/selectVan";
import ApplyCoupon from "./coupons/coupons";


const Cards = (props) => {
    const [sliderValue, setSliderValue] = React.useState(1);
    const [gettingDate, setGettingDate] = React.useState(new Date());
    const [shedulePickupValue, setShedulePickupValue] = React.useState(false);
    const [viwServices, setViwServices] = React.useState(false);
    const [viwPickupTime, setViwPickupTime] = React.useState(true);
    const [viwAddItemsScreen, setViwAddItemsScreen] = React.useState(false);
    const [viewAddItemsToList, setViewAddItemsToList] = React.useState(false);
    const [myItemsList, setMyItemsList] = React.useState([]);
    const [allItemsList, setAllItemsList] = React.useState([]);
    const [fillVan, setFillVan] = React.useState(false)
    const [viewCustomItemsScreen, setViewCustomItemsScreen] = React.useState(false);
    const [viewCustomItemsScreenList, setViewCustomItemsScreenList] = React.useState(false);

    const [viewSelectaVan, setViewSelectaVan] = React.useState(false);

    
    const [filteredData, setFilteredData] = React.useState([]);

    const itemsListFromServer = () => {
        Axios.get(`http://127.0.0.1:8000/item/category-wise/`)
          .then(function (response) {
            let ApiRes = response.data
            setMyItemsList(ApiRes)
            setAllItemsList(ApiRes)
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    const getDateFromComponent = (date) =>{
        setGettingDate(date)
    }

    const shedulePickupChange = (data) =>{
        setShedulePickupValue(data)
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
        localStorage.setItem("pickup_time", JSON.stringify(gettingDate));
    }
    
    const goNextFourScreen = () => {
        setViwPickupTime(false)
        setViwServices(false)
        setFillVan(false)
        setViwAddItemsScreen(true)
        setViewCustomItemsScreenList(true)
        setSliderValue(3)
    }

    const gotoSelectaVanScreen = () => {
        setViwAddItemsScreen(false)
        setViewCustomItemsScreenList(false)
        setSliderValue(4)
        setViewSelectaVan(true)
    }

    const goDirectlyVanScreen = () => {
        setViwPickupTime(false)
        setViwServices(false)
        setSliderValue(4)
        setFillVan(true)
        setViewSelectaVan(true)
    }
    const goBackSecondScreen = () => {
        setViwServices(false)
        setViwPickupTime(true)
        setSliderValue(1)
        setViewAddItemsToList(false)
        localStorage.removeItem("set-hours")
        localStorage.removeItem("set-minutes")
        localStorage.removeItem("set-am-pm")
        localStorage.removeItem("date-value-all")
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
    const goBackDirectlyThirdScreen = () => {
        setViwPickupTime(false)
        setViwAddItemsScreen(false)
        setViwServices(true)
        setSliderValue(2)
        setFillVan(false)
        setViewAddItemsToList(false)
        setViewCustomItemsScreen(false)
        setViewCustomItemsScreenList(false)
        setViewSelectaVan(false)
    }

    const goBackThirdMainScreen = () => {
        setViwAddItemsScreen(true)
        setViewAddItemsToList(true)
        setViewCustomItemsScreen(false)
        setViewCustomItemsScreenList(true)
        setSliderValue(3)
        setViewSelectaVan(false)
    }

    const goBackItemsScreen = () => {
        setViwAddItemsScreen(true)
        setViewAddItemsToList(true)
        setViewCustomItemsScreen(false)
        setViewCustomItemsScreenList(true)
        setSliderValue(3)
        setViewSelectaVan(false)
    }

    const increaseQty = (qty, ind, key) => {
        let keys = key
        const rooms = JSON.parse(JSON.stringify(allItemsList));
            rooms[JSON.parse(JSON.stringify(keys))].subitems[JSON.parse(JSON.stringify(ind))].quantity++;


        setAllItemsList(rooms)
        setMyItemsList(rooms)

    }

    const decreaseQty = (qty, ind, key) => {
        let kiy = key
        const rooms = JSON.parse(JSON.stringify(allItemsList));
        
        if(rooms[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity){
            rooms[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity--;
            
        }else{
            rooms[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity=0;
        }
        setAllItemsList(rooms)

        setMyItemsList(rooms)

    }

    const clearQty = (qty, ind, kiy) => {
        const List = JSON.parse(JSON.stringify(allItemsList));
              List[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity = 0;

        setAllItemsList(List)
        setMyItemsList(List)

    }

    const customItem = () => {
        setViwPickupTime(false)
        setViwAddItemsScreen(false)
        setViwServices(false)
        setViewCustomItemsScreen(true)
    }

    const getValueFromCustomForm = (formData) => {
        const getIndex = myItemsList.length - 1
        
            setMyItemsList(prevState => ([
                ...prevState,
                    {
                        'id':getIndex+1,
                        'name':'Custom Items',
                        'subitems':[
                            formData
                        ]
                    }
            ]))

            setAllItemsList(prevState => ([
                ...prevState,
                    {
                        'id':getIndex+1,
                        'name':'Custom Items',
                        'subitems':[
                            formData
                        ]
                    }
            ]))
        setViewCustomItemsScreen(false)
        setViwAddItemsScreen(true)


    }
    
    useEffect(() => {
        itemsListFromServer()
    }, [viewAddItemsToList, localStorage]);


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
                            {viewSelectaVan?
                                <SelectVan
                                    goBack={goBackItemsScreen}
                                    goBackThirdScreen={goBackDirectlyThirdScreen}
                                    fillVan={fillVan}
                                    authorized={props.authorized}
                                    />
                                :null
                            }
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
                                    goNext={gotoSelectaVanScreen}
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
                                    goDirectlyVanScreen = {goDirectlyVanScreen}
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
                    {viewSelectaVan?
                        <ApplyCoupon/>
                        :null
                    }
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
                    <div className="right-heading">
                        <img src="/blue-car.svg" alt="Banner Car" className="bluecar" />
                    </div>
                </Grid>
            </Grid>
        </>
    );
};
export default Cards;