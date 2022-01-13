import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const AddCard = () => {
  return (
    <div className="add-card" style={{ backgroundColor: "white" }}>
      <div className="card-heading mb-33">
        <Typography className="mb-5" variant="h6" gutterBottom component="h2">
          Add Card Details
        </Typography>
        <Typography variant="p" gutterBottom component="p">
          Lorem ipsum dolor sit amet
        </Typography>
      </div>
      <div>
        <Box>
          <TextField
            required
            className="w-100 input"
            label="Name on card"
            variant="outlined"
            type="text"
          />
        </Box>
        <Box>
          <TextField
            required
            className="w-100 input"
            label="Card number"
            variant="outlined"
            type="number"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyCotent: "space-between",
            alignItem: "center",
          }}
        >
          <TextField
            required
            className="w-100 input mr-20"
            label="Expires"
            variant="outlined"
            type="number"
          />
          <TextField
            required
            className="w-100 input"
            label="CVV"
            variant="outlined"
            type="number"
          />
        </Box>
        <Button className="w-100 payment">Add Payment Method</Button>
      </div>
    </div>
  );
};

export default AddCard;
