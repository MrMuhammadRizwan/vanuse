import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CustomMap from '../mapBox/customMap';


const SearchCard = () => {

  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  const [allTitles, setAllTitles] = React.useState([]);
  const [allTitles2, setAllTitles2] = React.useState([]);
  const [open, toggleOpen] = React.useState(false);

  useEffect(() => {
    console.log('value sss', value)
    console.log('value sss 2', value2)
  }, [value, value2])

  const handleClose = () => {
    setDialogValue({
      title: '',
      longitude: '',
      latitude: '',
    });
    setDialogValue2({
      title: '',
      longitude: '',
      latitude: '',
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: '',
    longitude: '',
    latitude: '',
  });
  const [dialogValue2, setDialogValue2] = React.useState({
    title: '',
    longitude: '',
    latitude: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      longitude: parseInt(dialogValue.longitude, 10),
      latitude: parseInt(dialogValue.latitude, 10),
    });
    setValue({
      title: dialogValue2.title,
      longitude: parseInt(dialogValue2.longitude, 10),
      latitude: parseInt(dialogValue2.latitude, 10),
    });

    handleClose();
  };


  const getValueInput = (e) => {
    // console.log('getValueInput', e.target.value);
    Axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=pk.eyJ1IjoiaGFyaXNjczQ5OTciLCJhIjoiY2t4OHhuYjd2MzQwZjJycHo2aWZ6dW5xNiJ9.XF4Rwzg_G7nton8noZ7VVA`)
    .then(function (response) {
      // console.log(response.data.features);
      console.log('coordinates >>>>>', response.data.features);
      let result = response.data.features.map(list => (
        {title: list.place_name, longitude: list.geometry.coordinates[0], latitude: list.geometry.coordinates[1]}
      ));
      console.log('result', result)
      setAllTitles( result );
      console.log('allTitles', allTitles)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  const getValueInput2 = (e) => {
    Axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=pk.eyJ1IjoiaGFyaXNjczQ5OTciLCJhIjoiY2t4OHhuYjd2MzQwZjJycHo2aWZ6dW5xNiJ9.XF4Rwzg_G7nton8noZ7VVA`)
    .then(function (response) {
      console.log('coordinates >>>>>', response.data.features);
      let result = response.data.features.map(list => (
        {title: list.place_name, longitude: list.geometry.coordinates[0], latitude: list.geometry.coordinates[1]}
      ));
      console.log('result', result)
      setAllTitles2( result );
      console.log('allTitles 2', allTitles2)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  return (
    <div className='banner-card'>

        {/* map */}
        {console.log('value >>>>>>', value, value2)}
        <div className='map'><CustomMap value={value} value2={value2}/></div>

        {/* content */}
        <div className='card-content'>
          <h2>Need help with a move?</h2>
          <p>Book on demand or a pre-scheduled van.</p>
          <div className='card-form'>
            <Paper
              component="form"
              sx={{ p: '2px 4px', mb:'30px', display: 'flex', alignItems: 'center', width: '100%', background:'#F7F7FC', boxShadow:'none'}}
            >
              <IconButton sx={{ p: '10px' }} aria-label="icon">
                <Brightness1Icon />
              </IconButton>
                <Autocomplete
                  value={value}
                  onKeyUp={(e)=>getValueInput(e)}
                  onChange={(event, newValue) => {
                    console.log('onChange');
                    if (typeof newValue === 'string') {
                      setTimeout(() => {
                        toggleOpen(true);
                        setDialogValue({
                          title: newValue,
                          longitude: '',
                          latitude: '',
                        });
                      });
                    } else if (newValue && newValue.inputValue) {
                      toggleOpen(true);
                      setDialogValue({
                        title: newValue.inputValue,
                        longitude: '',
                        latitude: '',
                      });
                    } else {
                      setValue(newValue);
                    }
                  }}
                  id="free-solo-dialog-demo"
                  className="custom-input" 
                  options={allTitles}
                  getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === 'string') {
                      return option;
                    }
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    return option.title;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  renderOption={(props, option) => <li {...props}>{option.title}</li>}
                  sx={{ ml: 1, flex: 1 }}
                  freeSolo
                  renderInput={(params) => <TextField {...params} placeholder="Enter pickup address"/>}
                />
            </Paper>
            <Paper
              component="form"
              sx={{ p: '2px 4px', mb:'50px', display: 'flex', alignItems: 'center', width: '100%', background:'#F7F7FC', boxShadow:'none'}}
            >
              <IconButton sx={{ p: '10px' }} aria-label="icon">
                <AddLocationAltIcon />
              </IconButton>
              <Autocomplete
                  value={value2}
                  onKeyUp={(e)=>getValueInput2(e)}
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                      setTimeout(() => {
                        toggleOpen(true);
                        setDialogValue2({
                          title: newValue,
                          longitude: '',
                          latitude: '',
                        });
                      });
                    } else if (newValue && newValue.inputValue) {
                      toggleOpen(true);
                      setDialogValue2({
                        title: newValue.inputValue,
                        longitude: '',
                        latitude: '',
                      });
                    } else {
                      setValue2(newValue);
                    }
                  }}
                  id="free-solo-dialog-demo2"
                  className="custom-input" 
                  options={allTitles2}
                  getOptionLabel={(option) => {
                    if (typeof option === 'string') {
                      return option;
                    }
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    return option.title;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  renderOption={(props, option) => <li {...props}>{option.title}</li>}
                  sx={{ ml: 1, flex: 1 }}
                  freeSolo
                  renderInput={(params) => <TextField {...params} placeholder="Enter destination address"/>}
                />
            </Paper>
          </div>
          <div className='card-buttons'>
            <Button
              key={'Request Now'}
              className="darkbutton"
              sx={{ mb:'16px' }}
            >
              Request Now
            </Button>
            <Button
              key={'Schedule Later'}
              className="lightbutton"
            >
              Schedule Later
            </Button>
          </div>
        </div>
    </div>
  );
};
export default SearchCard;