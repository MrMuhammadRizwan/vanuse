import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { CardNumberElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { addCard } from "../../pages/api/paymentApi";

const stripePromise = loadStripe("pk_test_DfG4Kda9PiRu28UAJxXIOhC3");
const AddCard = () => {
  const elements = useElements();
  const stripe = useStripe();

  const [form, setForm] = useState({
    name: "",
    number: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
  });

  const addCardApi = async () => {
    console.log("form", form);
    let exp = form.expires.split("/");
    addCard({ ...form, exp_month: exp[0], exp_year: exp[1] }).then((res) => {
      console.log("res");
    });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeExpiry = (e) => {
    let textTemp = e.target.value;
    if (textTemp[0] !== "1" && textTemp[0] !== "0") {
      textTemp = "";
    }
    if (textTemp.length === 2) {
      if (
        parseInt(textTemp.substring(0, 2)) > 12 ||
        parseInt(textTemp.substring(0, 2)) == 0
      ) {
        textTemp = textTemp[0];
      } else if (e.target.value.length === 2) {
        textTemp += "/";
      } else {
        textTemp = textTemp[0];
      }
    }
    setForm({
      ...form,
      [e.target.name]: textTemp,
    });
  };
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
            name="name"
            className="w-100 input"
            label="Name on card"
            variant="outlined"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </Box>
        {/* <CardElement
          id="payment-element-add-card"
          onChange={() => {
            console.log("onCHange");
          }}
        /> */}
        <Box>
          <TextField
            required
            name="number"
            className="w-100 input"
            label="Card number"
            variant="outlined"
            inputProps={{ maxLength: 16, max: 16 }}
            type="number"
            value={form.number}
            onChange={handleChange}
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
            name="expires"
            className="w-100 input mr-20"
            label="Expires"
            variant="outlined"
            inputProps={{ maxLength: "7" }}
            value={form.expires}
            onChange={handleChangeExpiry}
          />
          <TextField
            required
            name="cvc"
            className="w-100 input"
            label="CVV"
            variant="outlined"
            type="number"
            value={form.cvc}
            onChange={handleChange}
          />
        </Box>
        <Button className="w-100 payment" onClick={addCardApi}>
          Add Payment Method
        </Button>
      </div>
    </div>
  );
};

const Wrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <AddCard />
    </Elements>
  );
};

export default Wrapper;
