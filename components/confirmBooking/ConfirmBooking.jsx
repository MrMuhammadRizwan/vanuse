import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ConfirmBooking = () => {
  return (
    <>
      <div className="card-heading mb-31">
        <h2>Payment Methods</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div>
        <Box className="add-btns">
          <Button className="w-100 add-payment">Add Payment Method</Button>
          <Button className="w-100 next">Next</Button>
        </Box>
      </div>
    </>
  );
};

export default ConfirmBooking;
