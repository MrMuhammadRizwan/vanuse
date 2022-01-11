import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState} from "react";
import { getAllCards, postSecret } from "../../pages/api/paymentApi";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const stripePromise = loadStripe("pi_3KGrs1AnCtxHwdDo0Cy1sLPR_secret_2x6YeTGBDktZ8SfWLktj9dsYp");

const Payment = () => { 
const [error, setError] = useState(null);
   const stripe = useStripe();
        const elements = useElements();
  // Handle real-time validation errors from the CardElement.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };
    useEffect(async()=>{
       let cards = await getAllCards()
       console.log("cards",cards)
    },[])

    const doPayment=async()=>{
      
      let secret = await postSecret()
      console.log("secret",secret)

      const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

      console.log("paymentMethod",paymentMethod,error)
    }

  return (
 <>         <CardElement id="card-element" onChange={handleChange} />

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
          <Button className="w-100 next" onClick={doPayment}>Next</Button>
        </Box>
      </div>
      </>

  );
};

const Wrapper = (props) => {

  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
}

export default Wrapper;