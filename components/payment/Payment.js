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

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Payment = () => {
  return (
    <>
      <div className="card-heading mb-31">
        <h2>Payment Methods</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="master-card"
        >
          <img src="/master.svg" alt="master" />
          <Box className="heading">
            <Typography variant="h6" gutterBottom component="h6">
              Cash Payment
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="p">
              Default method
            </Typography>
          </Box>
          <Checkbox {...label} defaultChecked />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="visa-card"
        >
          <img src="/visa.svg" alt="master" />
          <Box className="heading">
            <Typography variant="h6" gutterBottom component="h6">
              **** **** **** 3802
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="p">
              Expires 10/27
            </Typography>
          </Box>
          <Checkbox />
        </Box>
        <Box className="add-btns">
          <Button className="w-100 add-payment">Add Payment Method</Button>
          <Button className="w-100 next">No</Button>
        </Box>
      </div>
    </>
  );
};

export default Payment;
