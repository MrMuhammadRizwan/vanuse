import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Hours = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
];
const Minutes = [
    '00',
    '15',
    '30',
    '45',
    '60',
];
const AMPM = [
    'AM',
    'PM',
];

const PickupTime = () => {
    const [immediateChecked, setImmediateChecked] = React.useState(true);
    const [scheduleChecked, setScheduleChecked] = React.useState(false);
    const [showHoursMinutesAmpm, setShowHoursMinutesAmpm] = React.useState(false);
    
    const [hoursBorder, setHoursBorder] = React.useState(false);
    const [minutesBorder, setMinutesBorder] = React.useState(false);
    const [fillColor, setFillColor] = React.useState(false);

    const [hoursValue, setHoursValue] = React.useState([]);
    const [minutesValue, setMinutesValue] = React.useState([]);
    const [ampmValue, setAmpm] = React.useState([]);

    const handleHours = (event) => {
        const {
        target: { value },
        } = event;
        setHoursValue(
            typeof value === 'string' ? value.split(',') : value,
        );
        setHoursBorder(true)
    };
    const handleMinutes = (event) => {
        const {
        target: { value },
        } = event;
        setMinutesValue(
            typeof value === 'string' ? value.split(',') : value,
        );
        setMinutesBorder(true)
    };
    const handleAmpm = (event) => {
        const {
        target: { value },
        } = event;
        setAmpm(
            typeof value === 'string' ? value.split(',') : value,
        );
        setFillColor(true)
    };
    

    useEffect(() => {
      }, [immediateChecked,scheduleChecked]);

    const handleIimmediateChecked = (event) => {
        setImmediateChecked(event.target.checked);
        setShowHoursMinutesAmpm(false)

        if(scheduleChecked){
            setScheduleChecked(!scheduleChecked);
        }else{
            setImmediateChecked(event.target.checked);
        }
    };

    const handleScheduleChecked = (event) => {
        setScheduleChecked(event.target.checked);
        setShowHoursMinutesAmpm(true)

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
              
              {showHoursMinutesAmpm?
                <div className="time-wrapper mb-71">
                        <div className={hoursBorder?"select-border select":"select"}>
                            <FormControl sx={{ m: 1 }}>
                                <Select
                                labelId="hours"
                                id="hours"
                                value={hoursValue}
                                onChange={handleHours}
                                placeholder="Hours"
                                input={<OutlinedInput />}
                                displayEmpty
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                    return <span className="placeholder">Hours</span>;
                                    }
                                    return selected.join(', ');
                                }}
                                >
                                    <MenuItem disabled value="">
                                        <em>Hours</em>
                                    </MenuItem>
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
                        <div className={minutesBorder?"select-border select":"select"}>
                            <FormControl sx={{ m: 1 }}>
                                <Select
                                labelId="minutes"
                                id="minutes"
                                placeholder="Minutes"
                                value={minutesValue}
                                onChange={handleMinutes}
                                input={<OutlinedInput/>}
                                displayEmpty
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                    return <span className="placeholder">Minutes</span>;
                                    }
                                    return selected.join(', ');
                                }}
                                >
                                    <MenuItem disabled value="">
                                        <em>Minutes</em>
                                    </MenuItem>
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
                        <div className={fillColor?"select-fill-color select":"select"}>
                            <FormControl sx={{ m: 1}}>
                                <Select
                                labelId="ampm"
                                id="ampm"
                                value={ampmValue}
                                onChange={handleAmpm}
                                input={<OutlinedInput/>}
                                displayEmpty
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                    return <span className="placeholder">AM/PM</span>;
                                    }
                                    return selected.join(', ');
                                }}
                                >
                                    <MenuItem disabled value="">
                                        <em>AM/PM</em>
                                    </MenuItem>
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
                :null
              }

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

              <div className="notification-box mb-23">
                    <div className="notification-icon">
                        <img src="/alarm.svg" alt="alarm" className="icons" />
                    </div>
                    <div className="notification-text">
                        <p>
                            Driver will arrive on <strong>Thursday 1st October</strong> between <strong>7:15 - 7:30 AM</strong>
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