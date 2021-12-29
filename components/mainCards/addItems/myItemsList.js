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
    // console.log('props.myItemsList', props.myItemsList)
    useEffect(() => {
    }, [props]);
    return (
        <div className="date-card">
            <div className="card-content">
                <div className="card-heading mb-31">
                    <h2>My Items</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>


                <div className="mb-31">
                    {console.log('props.myItemsList >>>', props.myItemsList)}
                    {props.myItemsList && props.myItemsList.map((item,i)=>{
                        return(
                            item.length>0?
                                item.map((childitem,i)=>{
                                    return(
                                        <div className="child-items" key={i}>
                                            {childitem.title}
                                            <div className="cart">
                                                <Button key={"-"} className="cart-increase"> - </Button>
                                                <TextField id="qty" value={childitem.quantity}/>
                                                <Button key={"+"} className="cart-increase"> + </Button>
                                            </div>
                                        </div>
                                    )
                                })
                            :null
                        )
                    })}
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