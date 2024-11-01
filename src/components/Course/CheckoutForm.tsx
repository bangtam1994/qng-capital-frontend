import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
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
import { PaymentIntent } from "@stripe/stripe-js";

export const CheckoutForm: React.FC<{
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

    if (!stripe || !elements) {
      console.error("Stripe.js has not loaded yet.");
      setLoading(false);
      return;
    }

    try {
      const { error: createError, paymentIntent } = await stripe.confirmPayment(
        {
          elements,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          redirect: "if_required",
          payment_method_data: {
            billing_details: {
              name: `${firstName} ${lastName}`,
              email,
            },
          },
        }
      );

      if (createError) {
        // Handle payment errors
        console.error("Payment failed:", createError);
        toast.error(
          createError.message ??
            "Une erreur est survenue, votre paiement n'a pas été débité"
        );
        setLoading(false);
        return;
      }

      // Handle successful payment
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/payment/subscription`,
        {
          paymentMethod: (paymentIntent as unknown as PaymentIntent)
            ?.payment_method,
          firstName,
          lastName,
          email,
          priceId,
          amount: price,
          product,
        }
      );

      if (response.status === 201) {
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
      } else {
        throw new Error(response.data);
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
          <PaymentElement />
          {/* <CardElement /> */}
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
