import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_DfG4Kda9PiRu28UAJxXIOhC3");

const ConfirmBooking = ({ secretKey }) => {
  const stripe = useStripe();

  const doPayment = async () => {
    stripe
      .confirmCardPayment(secretKey)
      .then((res) => {
        console.log("Status", res.paymentIntent.status);
      })
      .catch((err) => {
        console.log("ssss", err);
      });
  };

  return (
    <>
      <Box className="card-heading mb-39">
        <h2>Confirm Booking</h2>
        <p className="font-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </Box>
      <Box className="booking-time">
        <Box>
          <img src="/m-green-van.svg" />
          <Typography className="font-12 text-center" variant="p" component="p">
            Medium
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItem: "center" }}>
            <Box
              className="heading font-14"
              sx={{ textDecoration: "underline" }}
            >
              10 items
            </Box>
            <Box className="detail">&nbsp;</Box>
          </Box>
          <Box sx={{ display: "flex", alignItem: "center" }}>
            <Box className="heading font-14">Pick up:</Box>
            <Box className="detail">1 Aug 2021 - 7:30AM</Box>
          </Box>
          <Box sx={{ display: "flex", alignItem: "center" }}>
            <Box className="heading font-14">Trip Time:</Box>
            <Box className="detail">16 minutes</Box>
          </Box>
        </Box>
      </Box>
      <Box className="total b-bottom mb-20">
        <Typography
          className="text-center mb-10 fw-bold purple"
          variant="p"
          component="p"
        >
          Total
        </Typography>
        <Typography
          className="text-center mb-10 fw-bold purple font-32"
          variant="p"
          component="p"
        >
          £ 25
        </Typography>
        <Typography
          className="text-center mb-10 light-purple font-14"
          variant="p"
          component="p"
        >
          incl. Tax
        </Typography>
        <Typography
          className="text-center light-purple font-14"
          variant="p"
          component="p"
        >
          Card Number: xxxx-xxxx-xxxx-2036
        </Typography>
      </Box>
      <Box className="pickup-destination">
        <Box className="left-line">
          <img src="/circle.svg" />
          <img src="/line.svg" />
          <img src="/rectangle.svg" />
        </Box>
        <Box className="destination">
          <Box className="mb-21">
            <Typography
              className="heading fw-bold purple font-12"
              variant="p"
              component="div"
            >
              Pick-up
            </Typography>
            <Typography
              className="font-16 light-purple fw-bold"
              variant="heading"
              component="h6"
            >
              199 Brown Estate Apt. 866
            </Typography>
          </Box>
          <Box className="mb-21">
            <Typography
              className="heading fw-bold purple font-12"
              variant="p"
              component="div"
            >
              Destination
            </Typography>
            <Typography
              className="font-16 light-purple fw-bold"
              variant="heading"
              component="h6"
            >
              856 Spinka Inlet Apt. 576
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="add-btns">
          <Button className="w-100 next" onClick={doPayment}>
            Confirm Trip
          </Button>
        </Box>
      </Box>
    </>
  );
};

const Wrapper = ({ secretKey }) => {
  return (
    <Elements stripe={stripePromise}>
      <ConfirmBooking secretKey={secretKey} />
    </Elements>
  );
};

export default Wrapper;
