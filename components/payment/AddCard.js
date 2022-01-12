import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState} from "react";


const AddCard = () => { 


  return (
 <div style={{backgroundColor: "white"}} >          

      <div className="card-heading mb-31">
        <h2>Add Card</h2>
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
        </Box>
      </div>
      </div>

  );
};


export default AddCard;