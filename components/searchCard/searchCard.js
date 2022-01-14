import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CustomMap from "../mapBox/customMap";
import CustomEmptyMap from "../mapBox/customEmptyMap";

import Cards from "../mainCards/cards";
import Typography from "@mui/material/Typography";

const SearchCard = (props) => {
  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  const [allTitles, setAllTitles] = React.useState([]);
  const [allTitles2, setAllTitles2] = React.useState([]);
  const [open, toggleOpen] = React.useState(false);
  const [drawPoints, setDrawPoints] = React.useState(false);
  const [focusActive, setFocusActive] = React.useState(false);
  const [focusActiveEnd, setFocusActiveEnd] = React.useState(false);
  const [goBackValue, setGoBackValue] = React.useState(false);
  const [clickSchedule, setClickSchedule] = React.useState(false);

  const [sliderCard, setSliderCard] = React.useState(false);

  useEffect(() => {
    console.log(drawPoints);
  }, [value, value2, drawPoints, focusActive, sliderCard]);

  const handleClose = () => {
    setDialogValue({
      title: "",
      longitude: "",
      latitude: "",
    });
    setDialogValue2({
      title: "",
      longitude: "",
      latitude: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: "",
    longitude: "",
    latitude: "",
  });
  const [dialogValue2, setDialogValue2] = React.useState({
    title: "",
    longitude: "",
    latitude: "",
  });

  // starting trip actions
  const getValueInput = (e) => {
    Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?country=gb&access_token=pk.eyJ1IjoiaGFyaXNjczQ5OTciLCJhIjoiY2t4OHhuYjd2MzQwZjJycHo2aWZ6dW5xNiJ9.XF4Rwzg_G7nton8noZ7VVA`
    )
      .then(function (response) {
        console.log("coordinates >>>>>", response.data.features);
        let result = response.data.features.map((list) => ({
          title: list.place_name,
          longitude: list.geometry.coordinates[0],
          latitude: list.geometry.coordinates[1],
        }));
        console.log("result", result);
        setAllTitles(result);
        console.log("allTitles", allTitles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // end trip actions
  const getValueInput2 = (e) => {
    Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?country=gb&access_token=pk.eyJ1IjoiaGFyaXNjczQ5OTciLCJhIjoiY2t4OHhuYjd2MzQwZjJycHo2aWZ6dW5xNiJ9.XF4Rwzg_G7nton8noZ7VVA`
    )
      .then(function (response) {
        console.log("coordinates >>>>>", response.data.features);
        let result = response.data.features.map((list) => ({
          title: list.place_name,
          longitude: list.geometry.coordinates[0],
          latitude: list.geometry.coordinates[1],
        }));
        console.log("result", result);
        setAllTitles2(result);
        console.log("allTitles 2", allTitles2);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const goDrawPoints = () => {
    setDrawPoints(true);
  };

  const selectOnFocusFunc = () => {
    setFocusActive(true);
  };

  const unselectOnFocusFunc = () => {
    setFocusActive(!focusActive);
  };

  const selectOnFocusFuncEnd = () => {
    setFocusActiveEnd(true);
  };

  const unselectOnFocusFuncEnd = () => {
    setFocusActiveEnd(!focusActiveEnd);
  };

  const scheduleNow = () => {
    console.log("scheduleNow");
    setClickSchedule(false);
    setSliderCard(true);
  };

  const scheduleLater = () => {
    console.log("scheduleLater");
    setSliderCard(true);
    setClickSchedule(true);
  };

  const goBack = () => {
    console.log("goBack");
    setGoBackValue(true);
    setSliderCard(false);
  };

  return sliderCard ? (
    <Cards
      goBack={goBack}
      clickSchedule={clickSchedule}
      authorized={props.authorized}
    />
  ) : (
    <>
      <Grid container spacing={10} className="banner-section">
        <Grid item sm={12} md={6}>
          <div className="banner-card">
            {/* map */}
            <div className="map">
              {drawPoints ? (
                value && value2 ? (
                  <CustomMap value={value} value2={value2} />
                ) : null
              ) : (
                <CustomEmptyMap />
              )}
            </div>
            {/* content */}
            <div className="card-content">
              {value && value2 ? (
                <div>
                  <h2>Does this look correct?</h2>
                  <br />
                </div>
              ) : (
                <div>
                  <h2>Need help with a move?</h2>
                  <p className="mb-52">
                    Book on demand or a pre-scheduled van.
                  </p>
                </div>
              )}

              <div className="card-form">
                <Paper
                  component="form"
                  className={focusActive ? "start-field-active" : "start-field"}
                  onMouseOver={selectOnFocusFunc}
                  onMouseOut={unselectOnFocusFunc}
                  onBlur={unselectOnFocusFunc}
                  sx={{
                    p: "2px 4px",
                    mb: "30px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    background: "#F7F7FC",
                    boxShadow: "none",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="icon">
                    <img
                      src="/search-start.svg"
                      alt="search start"
                      className="icons"
                    />
                  </IconButton>
                  <Autocomplete
                    value={value}
                    onKeyUp={(e) => getValueInput(e)}
                    onChange={(event, newValue) => {
                      localStorage.setItem(
                        "pick_address_line_1",
                        JSON.stringify(newValue)
                      );
                      if (typeof newValue === "string") {
                        setDrawPoints(false);
                        setTimeout(() => {
                          toggleOpen(true);
                          setDialogValue({
                            title: newValue,
                            longitude: "",
                            latitude: "",
                          });
                        });
                      } else if (newValue && newValue.inputValue) {
                        setDrawPoints(false);
                        toggleOpen(true);
                        setDialogValue({
                          title: newValue.inputValue,
                          longitude: "",
                          latitude: "",
                        });
                      } else {
                        setDrawPoints(false);
                        setValue(newValue);
                        if (newValue && value2) {
                          setDrawPoints(true);
                        }
                      }
                    }}
                    id="free-solo-dialog-demo"
                    className="custom-input"
                    options={allTitles}
                    getOptionLabel={(option) => {
                      // e.g value selected with enter, right from the input
                      if (typeof option === "string") {
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
                    renderOption={(props, option) => (
                      <li {...props}>{option.title}</li>
                    )}
                    sx={{ ml: 1, flex: 1 }}
                    freeSolo
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Enter pickup address"
                      />
                    )}
                  />
                </Paper>
                <Paper
                  component="form"
                  className={
                    focusActiveEnd ? "start-field-active" : "start-field"
                  }
                  onMouseOver={selectOnFocusFuncEnd}
                  onMouseOut={unselectOnFocusFuncEnd}
                  onBlur={unselectOnFocusFuncEnd}
                  sx={{
                    p: "2px 4px",
                    mb: "50px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    background: "#F7F7FC",
                    boxShadow: "none",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="icon">
                    <img
                      src="/search-end.png"
                      alt="search end"
                      className="icons"
                    />
                  </IconButton>
                  <Autocomplete
                    value={value2}
                    onKeyUp={(e) => getValueInput2(e)}
                    onChange={(event, newValue) => {
                      localStorage.setItem(
                        "pick_address_line_2",
                        JSON.stringify(newValue)
                      );
                      if (typeof newValue === "string") {
                        setTimeout(() => {
                          setDrawPoints(false);
                          toggleOpen(true);
                          setDialogValue2({
                            title: newValue,
                            longitude: "",
                            latitude: "",
                          });
                        });
                      } else if (newValue && newValue.inputValue) {
                        setDrawPoints(false);
                        toggleOpen(true);
                        setDialogValue2({
                          title: newValue.inputValue,
                          longitude: "",
                          latitude: "",
                        });
                      } else {
                        setDrawPoints(false);
                        setValue2(newValue);
                        if (value && newValue) {
                          setDrawPoints(true);
                        }
                      }
                    }}
                    id="free-solo-dialog-demo2"
                    className="custom-input"
                    options={allTitles2}
                    getOptionLabel={(option) => {
                      if (typeof option === "string") {
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
                    renderOption={(props, option) => (
                      <li {...props}>{option.title}</li>
                    )}
                    sx={{ ml: 1, flex: 1 }}
                    freeSolo
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Enter destination address"
                      />
                    )}
                  />
                </Paper>
              </div>
              <div className="card-buttons">
                <Button
                  key={"Request Now"}
                  className="darkbutton"
                  sx={{ mb: "16px" }}
                  disabled={value && value2 ? false : true}
                  onClick={() => scheduleNow()}
                >
                  Request Now
                </Button>
                <Button
                  key={"Schedule Later"}
                  className="lightbutton"
                  onClick={() => scheduleLater()}
                  disabled={value && value2 ? false : true}
                >
                  Schedule Later
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="right-heading">
            <Typography variant="h1" gutterBottom component="h1">
              Order a van <br />
              any time, <br />
              any place in the UK.
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="p">
              Lorem ipsum
            </Typography>

            <img src="/blue-car.svg" alt="Blue Car" className="bluecar" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchCard;
