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
    const [filteredData, setFilteredData] = React.useState([]);
    // const [selectedTaskList, setSelectedTaskList] = React.useState([]);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        setFilteredData(props.allItemsList)
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
        // let selectedTaskListItems = props.itemsList.map(k => k.subitems.filter(j => j.quantity !== 0));

        // setSelectedTaskList(selectedTaskListItems)

        // console.log('SelectedTaskList', selectedTaskList)
        // props.addItemsToList(selectedTaskListItems)

        setLoading(false)

    }, [fillVanChecked,scheduleVanChecked, props.allItemsList]);

    

    const filterData = (e) => {
        const filterValue = [e.target.value]
        // const editedTaskList = Object.keys(props.allItemsList).map((data) =>  (
        //     props.allItemsList[data].map(
        //         (ss) =>  console.log('filterData 2', ss.name.indexOf(filterValue) !== -1) 
        //         )
        // ))
        const allowed = filterValue;
        const filtered = Object.keys(props.allItemsList)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
                obj[key] = props.allItemsList[key];
                return obj;
            }, {});

            console.log('filterData', filtered, allowed, filterValue);
        // const editedTaskList = Object.keys(props.allItemsList).map((data) =>  JSON.stringify(data).toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
        
        // console.log('filterData', editedTaskList)
        // const incfiltr = inc.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(filterValue) !== -1)
        // const setinc = incfiltr[0].quantity++;

        
        // const setinc = incfiltr[0].quantity++;
        // console.log('filterData 2', qty, key)
        setFilteredData(filtered)
    }

    // const increaseQty = (qty, ind, key) => {
    //     let keys = key
    //     // console.log('increaseQty', qty, key)
    //     // console.log('increaseQty Id', qty.id, key)

    //     // const findParent = filteredData.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(qty.id.toLowerCase()) !== -1)
    //     // const findChild = findParent.map((child)=>(
    //     //     child.subitems.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(qty.id.toLowerCase()) !== -1)
    //     // ))

    //     // setFilteredData(prevState => ({
    //     //     ...prevState,
    //     //     subitems: {
    //     //        ...prevState.subitems.id===qty.id,
    //     //        quantity: {
    //     //           ...prevState,
    //     //           quantity: 3
    //     //        }
    //     //     }
    //     //  }))

    //     const rooms = JSON.parse(JSON.stringify(filteredData));
    //         console.log('rooms Key', JSON.parse(JSON.stringify(keys)))
    //         console.log('rooms Id', JSON.parse(JSON.stringify(ind)))
    //         rooms[JSON.parse(JSON.stringify(keys))].subitems[JSON.parse(JSON.stringify(ind))].quantity++;
    //         setLoading(true)

    //     setFilteredData(rooms);

    //     // const rooms = filteredData.map((product)=>{   
    //     //     return product.subitems.map(function(list){
    //     //         console.log('rooms list', list)
    //     //         return list.id===qty.id? 
    //     //             {
    //     //                 'id':qty.id,
    //     //                 'title':'ffffffff',
    //     //                 'quantity':30,
    //     //                 'width':'30',
    //     //                 'height':'23',
    //     //                 'depth':'14',
    //     //                 'instructions':'instructions here',
    //     //             }
    //     //             : list
                
    //     //     });
    //     // });
    //     // const rooms = itemsList.map((room, roomIndex) => 
    //     //     ( { ...room, subitems: {...room[ind], quantity: 20 } } )
    //     // );
    //     // itemsList[key].subitems[0].quantity.push(10)
    //     // itemsList.forEach(function iter(qty, key) {
    //     //     console.log('increaseQty', iter)
    //     //     if (key.includes(qty.id)) {
    //     //         qty.quantity = 10;
    //     //     }
    //     //     Array.isArray( qty.children) && qty.children.forEach(iter);
    //     // });
        
    //     console.log('increaseQty rooms', rooms);
    //     // console.log('increaseQty Parent', findParent)
    //     // console.log('increaseQty Child ', findChild)

    //     console.log('increaseQty setFilteredData ', setFilteredData)
    //     let selectedRooms = rooms.map(k => k.subitems.filter(j => j.quantity !== 0));
    //     // props.addItemsToList(selectedRooms)
    //     // setFilteredData[findParent].subitems[findChild]((prevState) => {
    //     //     return({
    //     //       ...prevState,
    //     //       quantity: 3
    //     //     });
    //     //   });

    //     // setFilteredData(rooms)
    //     setLoading(false)

    // }

    // const decreaseQty = (qty, ind, key) => {
    //     let kiy = key
    //     const rooms = JSON.parse(JSON.stringify(filteredData));
    //         console.log('rooms Key', JSON.parse(JSON.stringify(kiy)))
    //         console.log('rooms Id', JSON.parse(JSON.stringify(ind)))
    //         rooms[JSON.parse(JSON.stringify(kiy))].subitems[JSON.parse(JSON.stringify(ind))].quantity--;
            
            
        
    //     setLoading(true)
    //     setFilteredData(rooms);

    //     let selectedRooms = rooms.map(k => k.subitems.filter(j => j.quantity !== 0));
    //     // props.addItemsToList(selectedRooms);

    //     console.log('increaseQty selectedRooms', selectedRooms);
    //     console.log('increaseQty setFilteredData ', setFilteredData)
    //     setLoading(false)

    // }
    
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

                        {Object.keys(props.allItemsList).map((obj, mainIndex) => (
                                // console.log('DemoData {obj}', props.DemoData[obj])
                                <Accordion expanded={expanded === mainIndex} onChange={handleChange(mainIndex)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                    <Typography sx={{ color: 'text.secondary' }}>{obj}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        {props.allItemsList[obj].length>0?
                                            props.allItemsList[obj].map((child, childIndex) => (
                                                <div className="child-items" key={childIndex}>
                                                    {child.name}
                                                    <div className="cart">
                                                        <Button key={"-"} className="cart-increase" onClick={()=>props.decreaseQty(child, obj, child.id)}> - </Button>
                                                        <TextField id="qty" value={child.quantity} min={0}/>
                                                        <Button key={"+"} className="cart-increase" onClick={()=>props.increaseQty(child, obj, child.id)}> + </Button>
                                                    </div>
                                                </div>
                                            ))
                                        :
                                        null
                                        }
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        {/* {console.log('filteredData>>>>>', filteredData)}
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
                                                console.log('item>>>>> in MAIN', list.key)
                                                return(
                                                    <div className="child-items" key={i}>
                                                        {item.title} - index{i}
                                                        <div className="cart">
                                                            <Button key={"-"} className="cart-increase" onClick={()=>props.decreaseQty(item, i, list.key)}> - </Button>
                                                            <TextField id="qty" value={item.quantity} min={0}/>
                                                            <Button key={"+"} className="cart-increase" onClick={()=>props.increaseQty(item, i, list.key)}> + </Button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                           
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })} */}
                    </div>
                    <p>Cant find what you need? Add a custom item <span className="link" onClick={props.customItem}>here</span></p>
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