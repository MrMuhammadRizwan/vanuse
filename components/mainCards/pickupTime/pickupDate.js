import React, { useState, useEffect } from "react";
import CalendarPicker from '@mui/lab/CalendarPicker';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

const PickupDate = (props) => {
  const [date, setDate] = React.useState(new Date());

  const setDateNow = (newDate) =>{
      setDate(newDate)
      props.getDate(newDate)
    }

  return (
    <div className="date-card">
        <div className="card-content">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker 
                date={date} 
                minDate={minDate}
                maxDate={maxDate} 
                displayStaticWrapperAs="desktop"
                disablePast 
                onChange={(newDate) => setDateNow(newDate)} />
        </LocalizationProvider>
        </div>
    </div>
  );
};
export default PickupDate;