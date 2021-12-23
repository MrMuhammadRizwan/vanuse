import * as React from 'react';
import CalendarPicker from '@mui/lab/CalendarPicker';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

const PickupDate = () => {
  const [date, setDate] = React.useState(new Date());

  const disablePrevDates = (startDate)=> {
    // const startSeconds = Date.parse(startDate);
    // return (date) => {
    //   return Date.parse(date) < startSeconds;
    // }
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
                // shouldDisableDate={disablePrevDates()}
                onChange={(newDate) => setDate(newDate)} />
        </LocalizationProvider>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                views={['day']}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} helperText={null} />}
            />
        </LocalizationProvider> */}
        </div>
    </div>
  );
};
export default PickupDate;