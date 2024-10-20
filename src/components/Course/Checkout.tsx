import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  Button,
  Box,
  TextField,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import { PlanType } from "../../utils/plans";
import { toast } from "sonner";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm: React.FC<{
  price: number;
  priceId: string;
  product: PlanType;
  onSuccess: () => void;
}> = ({ priceId, price, onSuccess, product }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) return;
    // create a payment method

    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: firstName + lastName,
          email,
        },
      });

      if (paymentMethod.error) throw new Error(paymentMethod.error.message);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/payment/subscription`,
        {
          paymentMethod: paymentMethod?.paymentMethod?.id,
          firstName,
          lastName,
          email,
          priceId,
          amount: price,
          product,
        }
      );

      console.log("response from axios>", response);
      if (response.status !== 201) throw new Error(response.data);

      const confirmPayment = await stripe?.confirmCardPayment(
        response.data.clientSecret
      );
      if (confirmPayment.error) {
        console.error("Payment failed:", confirmPayment.error.message);
        toast.error(
          confirmPayment.error.message ??
            "Une erreur est survenue, votre paiement n'a pas été débité"
        );
      } else if (
        confirmPayment &&
        confirmPayment.paymentIntent.status === "succeeded"
      ) {
        console.log("Payment successful:", confirmPayment.paymentIntent);
        setLoading(false);
        onSuccess();

        toast.success(
          "Le paiement a bien été effectué ! Merci pour votre achat.",
          {
            style: {
              backgroundColor: "#008042",
              color: "#FFFFFF",
            },
          }
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Échec du paiement : ${error.message}`, {
          style: { backgroundColor: "#a80000" },
        });
      } else {
        toast.error(
          "Une erreur est survenue, veuillez contacter QNG par email pour confirmer votre paiement",
          { style: { backgroundColor: "#a80000" } }
        );
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          marginTop: "22px",
        }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            m: { md: 4, xs: 2 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* <ExpressCheckoutElement
        onConfirm={onConfirm}
      /> */}
          <CardElement />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <TextField
            label="Nom"
            variant="outlined"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            label="Prénom"
            variant="outlined"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            size="large"
            sx={{ marginTop: "2rem" }}
          >
            {loading ? (
              <CircularProgress size={24} />
            ) : (
              <span>Payer {price.toFixed(2)} €</span>
            )}
          </Button>
          {loading && (
            <Typography variant="caption">
              Le paiement est en cours, veuillez patienter ...
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

const StripeCheckout: React.FC<{
  price: number;
  priceId: string;
  product: PlanType;
  onSuccess: () => void;
}> = ({ price, priceId, onSuccess, product }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        price={price}
        priceId={priceId}
        onSuccess={onSuccess}
        product={product}
      />
    </Elements>
  );
};

export default StripeCheckout;
