import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Box } from "@mui/material";

const stripePromise = loadStripe("YOUR_PUBLIC_KEY_HERE");

const CheckoutForm: React.FC<{ price: number; onSuccess: () => void }> = ({
  price,
  onSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      "YOUR_CLIENT_SECRET_HERE",
      {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      }
    );

    if (error) {
      console.error("Payment failed:", error);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("Payment successful:", paymentIntent);
      onSuccess();
    }
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop: "22px",
      }}
      onSubmit={handleSubmit}
    >
      <CardElement />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!stripe}
        size="large"
        sx={{ marginTop: "2rem" }}
      >
        Payer {price} €
      </Button>
    </Box>
  );
};

const StripeCheckout: React.FC<{ price: number; onSuccess: () => void }> = ({
  price,
  onSuccess,
}) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm price={price} onSuccess={onSuccess} />
    </Elements>
  );
};

export default StripeCheckout;
