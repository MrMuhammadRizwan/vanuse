import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { getAllCards, postSecret } from "../../pages/api/paymentApi";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const stripePromise = loadStripe("pk_test_DfG4Kda9PiRu28UAJxXIOhC3");

const Payment = ({ addPaymentMethod }) => {
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
  useEffect(async () => {
    let cards = await getAllCards();
    console.log("cards", cards);
  }, []);

  const doPayment = async () => {
    let secret = await postSecret();
    console.log("secret", secret);

    const options = {
      clientSecret: secret,
      // Fully customizable with appearance API.
      appearance: {
        /*...*/
      },
    };

    // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 2
    const elements = stripe.elements(options);

    // Create and mount the Payment Element
    const paymentElement = elements.create("payment");
    // paymentElement.mount("#payment-element");
    try {
      await stripe
        .confirmPayment({
          //`Elements` instance that was used to create the Payment Element
          elements,
          confirmParams: {
            return_url:
              "https://stripe.com/docs/payments/payment-intents/verifying-status",
          },
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("catcc.message", err);
        });
    } catch (err) {
      console.log("caught.message", err);
    }

    // stripe.retrievePaymentIntent(secret).then(({ paymentIntent }) => {
    //   console.log("paymentIntent", paymentIntent);
    //   // Inspect the PaymentIntent `status` to indicate the status of the payment
    //   // to your customer.
    //   //
    //   // Some payment methods will [immediately succeed or fail][0] upon
    //   // confirmation, while others will first enter a `processing` state.
    //   //
    //   // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
    //   switch (paymentIntent.status) {
    //     case "succeeded":
    //       console.log("Success! Payment received.");
    //       break;

    //     case "processing":
    //       console.log(
    //         "Payment processing. We'll update you when payment is received."
    //       );
    //       break;

    //     case "requires_payment_method":
    //       // Redirect your user back to your payment page to attempt collecting
    //       // payment again
    //       console.log("Payment failed. Please try another payment method.");
    //       break;

    //     default:
    //       console.log("Something went wrong.");
    //       break;
    //   }
    // });

    // const { error } = await stripe.confirmPayment({
    //   //`Elements` instance that was used to create the Payment Element
    //   elements: stripe.elements({
    //     clientSecret: secret,
    //   }),
    //   confirmParams: {
    //     return_url: "https://my-site.com/order/123/complete",
    //   },
    // });
    // if (error) {
    //   // This point will only be reached if there is an immediate error when
    //   // confirming the payment. Show error to your customer (for example, payment
    //   // details incomplete)

    //   console.log("error.message", error.message);
    // } else {
    //   console.log("success", error.message);

    //   // Your customer will be redirected to your `return_url`. For some payment
    //   // methods like iDEAL, your customer will be redirected to an intermediate
    //   // site first to authorize the payment, then redirected to the `return_url`.
    // }

    // const { paymentMethod, error } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: stripe.elements({
    //     clientSecret: secret,
    //   }),
    // });

    // console.log("paymentMethod", paymentMethod, error);
  };

  return (
    <>
      <div id="payment-element"></div>
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
          <Button onClick={addPaymentMethod} className="w-100 add-payment">
            Add Payment Method
          </Button>
          <Button className="w-100 next" onClick={doPayment}>
            Next
          </Button>
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
};

export default Wrapper;
