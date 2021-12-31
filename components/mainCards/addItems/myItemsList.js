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


const MyItemsList = (props) => {
    console.log('DemoData', props.DemoData)
    // useEffect(() => {
    // }, [props]);
    return (
        <div className="date-card">
            <div className="card-content">
                <div className="card-heading mb-31">
                    <h2>My Items</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>


                <div className="mb-31">
                    {/* {console.log('props.myItemsList >>>', props.myItemsList)}rooms.map(k => k.subitems.filter(j => j.quantity !== 0)) */}
                    {/* {props.myItemsList && props.myItemsList.map((item,i)=>{
                        console.log('item>>>>> in LIST 1 >>>>>>>>>>>>>>', item)
                        return(
                            <> */}
                            {Object.keys(props.myItemsList).map((obj, mainIndex) => (
                                // console.log('DemoData {obj}', props.DemoData[obj])
                                props.myItemsList[obj].length>0?
                                    props.myItemsList[obj].map((child, childIndex) => (
                                        <>
                                            {child.quantity>0?
                                                <div className="child-items" key={mainIndex}>
                                                    {child.name}
                                                    <div className="cart-list">
                                                        <Button key={"-"} className="cart-increase" onClick={()=>props.decreaseQty(child, obj, child.id)}> - </Button>
                                                        <TextField id="qty" value={child.quantity}/>
                                                        <Button key={"+"} className="cart-increase" onClick={()=>props.increaseQty(child, obj, child.id)}> + </Button>
                                                        <Button key={"x"} className="cart-clear" onClick={()=>props.clearQty(child, obj, child.id)}><img src="/clear.svg" alt="Remove" /></Button>
                                                    </div>
                                                </div>
                                            :null}
                                        </>
                                    ))
                                :
                                null
                            ))}

                            {/* {item.subitems.length>0?
                                item.subitems.map((childitem,i)=>{
                                    console.log('item>>>>> in LIST 2 >>>>>>>>>>>>>>', item.key)
                                    return(
                                        <>
                                            {childitem.quantity>0?
                                                <div className="child-items" key={i}>
                                                    {childitem.title}
                                                    <div className="cart-list">
                                                        <Button key={"-"} className="cart-increase" onClick={()=>props.decreaseQty(childitem, i, item.key)}> - </Button>
                                                        <TextField id="qty" value={childitem.quantity}/>
                                                        <Button key={"+"} className="cart-increase" onClick={()=>props.increaseQty(childitem, i, item.key)}> + </Button>
                                                        <Button key={"x"} className="cart-clear" onClick={()=>props.clearQty(childitem, i, item.key)}><img src="/clear.svg" alt="Remove" /></Button>
                                                    </div>
                                                </div>
                                            :null
                                            }
                                        </>
                                    )
                                })
                            :null} */}
                            {/* </>
                        )
                    })} */}
                </div>

                <div className="card-buttons-grid text-center display-block">

                    <Button
                        key={"Next"}
                        className="darkbutton"
                        sx={{ mb: "16px" }}
                    >
                        Next
                    </Button>  
                </div>
            </div>
        </div>
    );
};
export default MyItemsList;