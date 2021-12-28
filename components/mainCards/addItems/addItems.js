import React, { useState, useEffect } from "react";

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const AddItems = (props) => {
    const [fillVanChecked, setfillVanChecked] = React.useState(true);
    const [scheduleVanChecked, setscheduleVanChecked] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [allData, setAllData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);
    const [selectedTaskList, setSelectedTaskList] = React.useState([]);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        setAllData(itemsList)
        setFilteredData(itemsList)
        // let filteredArray = itemsList
        // .filter((element) => 
        //     element.subitems.some((subElement) => subElement.quantity === 1))
        // .map(element => {
        //     let newElt = Object.assign({}, element); // copies element
        //     return newElt.subitems.filter(subElement => subElement.quantity === '1');
        // });
        // const selectedTaskList = itemsList.map((element) => element.subitems.map(list => {
        //         return list.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(list.toLowerCase()) !== 0)
        //     })
        //     // return list.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(quantity.toLowerCase()) == 1)

        //     // (element) => element.subitems((subElement) => subElement.subitems === 1))
        //     // .map(element => {
        //     // let newElt = Object.assign({}, element); // copies element
        //     // return newElt.subitems.filter(subElement => subElement.quantity === '1');
        //     // }
        // )
        let selectedTaskListItems = filteredData.map(k => k.subitems.filter(j => j.quantity !== 0));

        setSelectedTaskList(selectedTaskListItems)

        console.log('SelectedTaskList', selectedTaskList)
        props.addItemsToList(selectedTaskListItems)

        setLoading(false)

    }, [fillVanChecked,scheduleVanChecked,setSelectedTaskList, filteredData, addItemsToList]);

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

    const filterData = (e) => {
        const filterValue = e.target.value
        const editedTaskList = itemsList.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
        setFilteredData(editedTaskList)
        setFilteredData(editedTaskList)
    }

    const increaseQty = (qty, ind, key) => {
        let key = key
        // console.log('increaseQty', qty, key)
        // console.log('increaseQty Id', qty.id, key)

        // const findParent = filteredData.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(qty.id.toLowerCase()) !== -1)
        // const findChild = findParent.map((child)=>(
        //     child.subitems.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(qty.id.toLowerCase()) !== -1)
        // ))

        // setFilteredData(prevState => ({
        //     ...prevState,
        //     subitems: {
        //        ...prevState.subitems.id===qty.id,
        //        quantity: {
        //           ...prevState,
        //           quantity: 3
        //        }
        //     }
        //  }))

        const rooms = JSON.parse(JSON.stringify(filteredData));
            console.log('rooms Key', JSON.parse(JSON.stringify(key)))
            console.log('rooms Id', JSON.parse(JSON.stringify(ind)))
            rooms[JSON.parse(JSON.stringify(key))].subitems[JSON.parse(JSON.stringify(ind))].quantity++;
            setLoading(true)

        setFilteredData(rooms);

        // const rooms = filteredData.map((product)=>{   
        //     return product.subitems.map(function(list){
        //         console.log('rooms list', list)
        //         return list.id===qty.id? 
        //             {
        //                 'id':qty.id,
        //                 'title':'ffffffff',
        //                 'quantity':30,
        //                 'width':'30',
        //                 'height':'23',
        //                 'depth':'14',
        //                 'instructions':'instructions here',
        //             }
        //             : list
                
        //     });
        // });
        // const rooms = itemsList.map((room, roomIndex) => 
        //     ( { ...room, subitems: {...room[ind], quantity: 20 } } )
        // );
        // itemsList[key].subitems[0].quantity.push(10)
        // itemsList.forEach(function iter(qty, key) {
        //     console.log('increaseQty', iter)
        //     if (key.includes(qty.id)) {
        //         qty.quantity = 10;
        //     }
        //     Array.isArray( qty.children) && qty.children.forEach(iter);
        // });
        
        console.log('increaseQty rooms', rooms);
        // console.log('increaseQty Parent', findParent)
        // console.log('increaseQty Child ', findChild)

        console.log('increaseQty setFilteredData ', setFilteredData)
        props.addItemsToList(rooms)

        // setFilteredData[findParent].subitems[findChild]((prevState) => {
        //     return({
        //       ...prevState,
        //       quantity: 3
        //     });
        //   });

        // setFilteredData(rooms)
        setLoading(false)

    }

    const decreaseQty = (qty, ind, key) => {
        let key = key
        const rooms = JSON.parse(JSON.stringify(filteredData));
            console.log('rooms Key', JSON.parse(JSON.stringify(key)))
            console.log('rooms Id', JSON.parse(JSON.stringify(ind)))
            rooms[JSON.parse(JSON.stringify(key))].subitems[JSON.parse(JSON.stringify(ind))].quantity--;
            const checkValue = rooms[JSON.parse(JSON.stringify(key))].subitems[JSON.parse(JSON.stringify(ind))].quantity
            if(checkValue<0){
                rooms[JSON.parse(JSON.stringify(key))].subitems[JSON.parse(JSON.stringify(ind))].quantity = 0
            }
            setLoading(true)

        setFilteredData(rooms);
        props.addItemsToList(rooms)
        console.log('increaseQty rooms', rooms);
        console.log('increaseQty setFilteredData ', setFilteredData)
        setLoading(false)

    }
    
    return (
        <>
            <div className="card-heading mb-31">
                <h2>Add Items</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>

            <Box sx={{ display: 'flex', alignItems: 'center' }} className="mb-31 search-box">
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" variant="outlined" placeholder="Search" onChange={filterData}/>
            </Box>

            <div className="mb-31">
            {loading?
                                            'Loading Data...'
                                        :
                                        <>
                    {filteredData.length > 0 ? <p>Or quickly add items from a list of popular rooms:</p> : null}
                    {filteredData.length <= 0 ? <p>0 Items Found</p> : null}
                    <div className="items-list mb-20">
                        {console.log('filteredData>>>>>', filteredData)}
                        {filteredData && filteredData.map((list,index)=>{
                            return(
                                <Accordion expanded={expanded === list.key} onChange={handleChange(list.key)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                    <Typography sx={{ color: 'text.secondary' }}>{list.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        
                                            {list.subitems.map((item,i)=>{
                                                return(
                                                    <div className="child-items" key={i}>
                                                        {item.title} - index{i}
                                                        <span>
                                                            <Button key={"-"} className="cart-increase" onClick={()=>decreaseQty(item, i, list.key)}> - </Button>
                                                            <TextField id="qty" value={item.quantity} min={0}/>
                                                            <Button key={"+"} className="cart-increase" onClick={()=>increaseQty(item, i, list.key)}> + </Button>
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                           
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                    <p>Cant find what you need? Add a custom item <span className="link">here</span></p>
                    </>
                                        }
            </div>

            <div className="card-buttons-grid">
                <Button 
                    key={"Back"} 
                    className="lightbutton"
                    onClick={props.goBackThirdScreen}
                >
                    Back
                </Button>

                <Button
                    key={"Next"}
                    className="darkbutton"
                    sx={{ mb: "16px" }}
                >
                    Next
                </Button>  
            </div>
        </>
    );
};
export default AddItems;