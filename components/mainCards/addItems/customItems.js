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


const CustomItems = (props) => {
    const [fillVanChecked, setfillVanChecked] = React.useState(true);
    
    useEffect(() => {

    }, []);

    

    return (
        <>
            <div className="card-heading mb-31">
                <h2>Custom Items</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>

            

            <div className="mb-31">
            
            </div>

            <div className="card-buttons-grid">
                <Button 
                    key={"Back"} 
                    className="lightbutton"
                    onClick={props.goBackThirdMainScreen}
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
export default CustomItems;