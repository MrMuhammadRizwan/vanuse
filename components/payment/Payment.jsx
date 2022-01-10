import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Payment = () => {
  return (
    <>
      <div className="card-heading mb-31">
        <h2>Add Items</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>

      <Box
        sx={{ display: "flex", alignItems: "center" }}
        className="mb-31 search-box"
      >
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          variant="outlined"
          placeholder="Search"
          onChange={filterData}
        />
      </Box>

      <div className="mb-31">
        {loading ? (
          "Loading Data..."
        ) : (
          <>
            <p>
              Cant find what you need? Add a custom item{" "}
              <span className="link" onClick={props.customItem}>
                here
              </span>
            </p>
          </>
        )}
      </div>

      <div className="card-buttons-grid">
        <Button
          key={"Back"}
          className="lightbutton"
          onClick={props.goBackThirdScreen}
        >
          Back
        </Button>

        <Button
          key={"Next"}
          className="darkbutton"
          sx={{ mb: "16px" }}
          onClick={props.goNext}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Payment;
