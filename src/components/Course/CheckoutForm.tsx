import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
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

export const CheckoutForm: React.FC<{
  price: number;
  priceId: string;
  product: PlanType;
  onSuccess: () => void;
}> = ({ priceId, price, product }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/payment/create-checkout-session`,
        {
          email,
          priceId,
          firstName,
          lastName,
          amount: price,
          product,
        }
      );

      const sessionId = response.data.sessionId;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (error) {
          console.error(error);
          alert("Payment failed. Please try again.");
        }
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
        onSubmit={handleCheckout}
      >
        <Box
          sx={{
            m: { md: 4, xs: 2 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
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
              <span>Accéder à la page de paiement</span>
            )}
          </Button>
          {loading && (
            <Typography variant="caption">
              Chargement en cours, veuillez patienter ...
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};
