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
import { unstable_useIsFocusVisible } from "@mui/utils";


const MyItemsList = (props) => {
    useEffect(() => {
        var submitedArray = {
            'items': [],
            'custom item': []
        }
        let filteredArray = props.myItemsList.map((element) => {
            return {...element, subitems: element.subitems.filter((subElement) => subElement.quantity > 0)}
          }) 
        var filteredEmpty = filteredArray.filter(function (el) {
            return el.subitems.length>0;
        });


        let filteredArrayForPush = props.myItemsList.map((element,i) => {
            if(element.name === 'Custom Items'){
                props.myItemsList.filter((subElement) => {
                    if(subElement.name === 'Custom Items'){
                                    submitedArray['custom item'].push({
                                        "is_custom": true,
                                        "quantity": subElement.subitems[0].quantity,
                                        "name": subElement.subitems[0].name,
                                        "description": subElement.subitems[0].instructions,
                                        "dim_x": subElement.subitems[0].dim_x,
                                        "dim_y": subElement.subitems[0].dim_y,
                                        "dim_z": subElement.subitems[0].dim_z
                                    })
                    }
                })
            }
            else{
                return(
                    element.subitems.filter((ele,i) => {
                            if(ele.quantity > 0){
                               submitedArray['items'].push(
                                    {
                                        'id': ele.id, 
                                        'quantity': ele.quantity
                                    }
                                ) 
                            }
                    } )
                )
            }
        })

        const unique = [...new Map(submitedArray['custom item'].map(item => [item['name'], item])).values()];
        submitedArray['custom item'] = []
        unique.map((uni)=> submitedArray['custom item'].push(uni))
        localStorage.setItem("TripObject", JSON.stringify(submitedArray))
    }, [props]);
    return (
        <div className="white date-card">
            <div className="card-content">
                <div className="card-heading mb-31">
                    <h2>My Items</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>


                <div className="m-h-130">
                    {props.myItemsList && props.myItemsList.map((item,i)=>{
                        return(
                            item.subitems.length>0?
                                item.subitems.map((childitem,i)=>{
                                    return(
                                        <>
                                            {childitem.quantity>0?
                                                <div className="child-items" key={i}>
                                                    {childitem.name}
                                                    <div className="cart-list">
                                                        <Button key={"-"} className="cart-increase" onClick={()=>props.decreaseQty(childitem, i, item.id)}> - </Button>
                                                        <TextField id="qty" value={childitem.quantity}/>
                                                        <Button key={"+"} className="cart-increase" onClick={()=>props.increaseQty(childitem, i, item.id)}> + </Button>
                                                        <Button key={"x"} className="cart-clear" onClick={()=>props.clearQty(childitem, i, item.id)}><img src="/clear.svg" alt="Remove" /></Button>
                                                    </div>
                                                </div>
                                            :
                                                <p className={childitem.quantity>0? "display-none" : "position-relative"}>
                                                    <span> Add items to your list</span> 
                                                </p>
                                            }
                                            
                                        </>
                                    )
                                })
                            :null
                        )
                    })}
                </div>

            </div>
        </div>
    );
};
export default MyItemsList;