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

const DemoData = {
        Kitchen: [
            {
                "id": 4,
                "name": "Fridge",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":1,
                "itemcategory_id": 9
            },
            {
                "id": 5,
                "name": "Cabinat",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":1,
                "itemcategory_id": 9
            },
            {
                "id": 6,
                "name": "Stove",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":1,
                "itemcategory_id": 9
            },
            {
                "id": 7,
                "name": "Utensiles Box",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 9
            }
        ],
        "Bedroom": [
            {
                "id": 8,
                "name": "Bed",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 10
            },
            {
                "id": 9,
                "name": "Dressing Table",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 10
            },
            {
                "id": 10,
                "name": "study Table",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 10
            },
            {
                "id": 11,
                "name": "lamp Table",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 10
            }
        ],
        "Dinnig Room": [
            {
                "id": 12,
                "name": "Diniing Table",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 11
            },
            {
                "id": 13,
                "name": "Diniing chairs",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 11
            }
        ],
        "Washing Room": [
            {
                "id": 14,
                "name": "washing machine",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 12
            }
        ],
        "Living Room": [
            {
                "id": 15,
                "name": "TV",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 13
            },
            {
                "id": 16,
                "name": "Sofa",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 13
            },
            {
                "id": 17,
                "name": "dec table",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 13
            },
            {
                "id": 18,
                "name": "book shelf",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":2,
                "itemcategory_id": 13
            },
            {
                "id": 19,
                "name": "Pots",
                "description": "desc",
                "dim_x": 2.0,
                "dim_y": 2.0,
                "dim_z": 2.0,
                "quantity":0,
                "itemcategory_id": 13
            }
        ]
}

const Cards = (props) => {
    const [sliderValue, setSliderValue] = React.useState(1);
    const [gettingDate, setGettingDate] = React.useState(new Date());
    const [shedulePickupValue, setShedulePickupValue] = React.useState(false);
    const [viwServices, setViwServices] = React.useState(false);
    const [viwPickupTime, setViwPickupTime] = React.useState(true);
    const [viwAddItemsScreen, setViwAddItemsScreen] = React.useState(false);
    const [viewAddItemsToList, setViewAddItemsToList] = React.useState(false);
    const [myItemsList, setMyItemsList] = React.useState(DemoData);
    const [allItemsList, setAllItemsList] = React.useState(DemoData);

    const [viewCustomItemsScreen, setViewCustomItemsScreen] = React.useState(false);
    
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
    }

    const goBackThirdMainScreen = () => {
        setViwAddItemsScreen(true)
        setViewAddItemsToList(true)
        setViewCustomItemsScreen(false)
    }

    // const addItemsToList = ( list ) => {
    //     console.log('addItems >>>', list)
    //     setViewAddItemsToList(true)
    //     setMyItemsList(list)
    // }


    const increaseQty = (qty, key, ind) => {
        // console.log('increaseQty ', qty, key, ind);
        let keys = key
        const inc = JSON.parse(JSON.stringify(allItemsList));
        const newinc = inc[JSON.parse(JSON.stringify(keys))];
        const incfiltr = newinc.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(ind) !== -1)
        // rooms2.map((li,i)=>(
        //     li => li.filter(j => j.id !== 0)
        //     console.log('increaseQty rooms map', li.id==ind)
        // ))
        const setinc = incfiltr[0].quantity++;
        // console.log('increaseQty rooms', setinc);

        setAllItemsList(inc)
        setMyItemsList(inc)

    }

    const decreaseQty = (qty, key, ind) => {
        console.log('decreaseQty', qty, key, ind);
        let kiy = key
        const dec = JSON.parse(JSON.stringify(allItemsList));
        const newdec = dec[JSON.parse(JSON.stringify(kiy))];
        const decfiltr = newdec.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(ind) !== -1)
        // rooms2.map((li,i)=>(
        //     li => li.filter(j => j.id !== 0)
        //     console.log('increaseQty rooms map', li.id==ind)
        // ))
        
        if(decfiltr[0].quantity){
            const setdec = decfiltr[0].quantity--;
            
        }else{
            const setdec = decfiltr[0].quantity=0;
        }
        console.log('decreaseQty rooms', decfiltr[0].quantity);
        setAllItemsList(dec)
        setMyItemsList(dec)

    }

    const clearQty = (qty, key, ind) => {
        console.log('clearQty', qty, key, ind);
        const List = JSON.parse(JSON.stringify(allItemsList));
        const NewList = List[JSON.parse(JSON.stringify(key))];
            //   List[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity = 0;
              const filtr = NewList.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(ind) !== -1)
            // rooms2.map((li,i)=>(
            //     li => li.filter(j => j.id !== 0)
            //     console.log('increaseQty rooms map', li.id==ind)
            // ))
            const setV = filtr[0].quantity = 0;
        console.log('clearQty 2', setV);

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
    
    useEffect(() => {

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
                                    allItemsList={allItemsList}
                                    increaseQty={increaseQty}
                                    decreaseQty={decreaseQty}
                                    />
                                :null
                            }
                            {viwAddItemsScreen?
                                <AddItems 
                                    goBackThirdScreen={goBackThirdScreen}
                                    DemoData={DemoData}
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
                    {viwAddItemsScreen?
                        <MyItemsList 
                            myItemsList={myItemsList}
                            DemoData={DemoData}
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