import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Hours = [
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1',
];
const Minutes = [
    '60',
    '45',
    '30',
    '15',
    '00',
];
const AMPM = [
    'AM',
    'PM',
];

const PickupTime = () => {
    const [immediateChecked, setImmediateChecked] = React.useState(true);
    const [scheduleChecked, setScheduleChecked] = React.useState(false);

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    useEffect(() => {
      }, [immediateChecked,scheduleChecked]);

    const handleIimmediateChecked = (event) => {
        setImmediateChecked(event.target.checked);

        if(scheduleChecked){
            setScheduleChecked(!scheduleChecked);
        }else{
            setImmediateChecked(event.target.checked);
        }
    };

    const handleScheduleChecked = (event) => {
        setScheduleChecked(event.target.checked);

        if(immediateChecked){
            setImmediateChecked(!immediateChecked);
        }else{
            setScheduleChecked(event.target.checked);
        }
    };

    return (
            <>
              <div className="card-heading mb-71">
                <h2>Pik-Up Time</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>

              <div className={immediateChecked ? "card-slection mb-20 selection" : "card-slection mb-20"}>
                <Checkbox
                    checked={immediateChecked}
                    onChange={handleIimmediateChecked}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <p><strong>Immediate Pick-up</strong></p>
                <p>Get a van in the next hour</p>
              </div>

              <div className={scheduleChecked ? "card-slection mb-71 selection" : "card-slection mb-71"}>
                <Checkbox
                    checked={scheduleChecked}
                    onChange={handleScheduleChecked}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <p><strong>Schedule A Pickup</strong></p>
                <p>Book a van up to 30 days in advance</p>
              </div>
              
              <div className="time-wrapper mb-71">
                    <div className="select">
                        <FormControl sx={{ m: 1 }}>
                            <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            >
                            {Hours.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="select">
                        <FormControl sx={{ m: 1 }}>
                            <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name2"
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput/>}
                            >
                            {Minutes.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="select">
                        <FormControl sx={{ m: 1}}>
                            <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name3"
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput/>}
                            >
                            {AMPM.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
              </div>

              <div className="notification-box mb-23">
                    <div className="notification-icon">
                        <img src="/alarm.svg" alt="alarm" className="icons" />
                    </div>
                    <div className="notification-text">
                        <p>
                            Immediate pickups are usually able to be serviced <strong>within an hour.</strong>
                            <br/>
                            We'll notify drivers of your request once payment is complete
                        </p>
                    </div>
              </div>
              <div className="card-buttons-grid">
                    <Button 
                        key={"Back"} 
                        className="lightbutton"
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

  export default PickupTime;