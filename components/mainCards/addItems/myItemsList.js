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
    useEffect(() => {
        let filteredArray = props.myItemsList.map((element) => {
            // return {...element, subElements: element.subitems.filter((subElement) => subElement.quantity === 1)}
            return {...element, subitems: element.subitems.filter((subElement) => subElement.quantity > 0)}
          }) 
        var filteredEmpty = filteredArray.filter(function (el) {
            return el.subitems.length>0;
        });
            console.log('ApiRes localStorage', filteredEmpty);
            localStorage.setItem("ApiRes == 1", JSON.stringify(filteredEmpty));
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
                                                    <span>0 Items, Add items to your list</span> 
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