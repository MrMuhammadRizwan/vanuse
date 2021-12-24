import React, { useState, useEffect } from "react";

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Services = (props) => {
    const [fillVanChecked, setfillVanChecked] = React.useState(true);
    const [scheduleVanChecked, setscheduleVanChecked] = React.useState(false);

    useEffect(() => {
    }, [fillVanChecked,scheduleVanChecked]);


    const handleIfillVanChecked = (event) => {
        setfillVanChecked(event.target.checked);

        if(scheduleVanChecked){
            setscheduleVanChecked(!scheduleVanChecked);
        }else{
            setfillVanChecked(event.target.checked);
        }
    };

    const handlescheduleVanChecked = (event) => {
        setscheduleVanChecked(event.target.checked);

        if(fillVanChecked){
            setfillVanChecked(!fillVanChecked);
        }else{
            setscheduleVanChecked(event.target.checked);
        }
    };
    return (
        <>
            <div className="card-heading mb-71">
                <h2>Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>

            <div className="text-center mb-31">
                <img src="/placeholder.png" alt="Placeholder" className="Placeholder" />
            </div>

            <div className={fillVanChecked ? "card-slection mb-20 selection" : "card-slection mb-20"}>
                <Checkbox
                    checked={fillVanChecked}
                    onChange={handleIfillVanChecked}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <p><strong>Fill a Van</strong></p>
                <p>Book a van up to 30 days in advance </p>
            </div>

            <div className={scheduleVanChecked ? "card-slection mb-71 selection" : "card-slection mb-71"}>
                <Checkbox
                    checked={scheduleVanChecked}
                    onChange={handlescheduleVanChecked}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <p><strong>Add Items</strong></p>
                <p>Add your items, we’ll select a van for you</p>
            </div>

            <div className="card-buttons-grid">
                <Button 
                    key={"Back"} 
                    className="lightbutton"
                    onClick={props.goBackSecondScreen}
                >
                    Back
                </Button>

                <Button
                    key={"Next"}
                    className="darkbutton"
                    sx={{ mb: "16px" }}
                    onClick={props.goNextFourScreen}
                >
                    Next
                </Button>  
            </div>
        </>
    );
};
export default Services;