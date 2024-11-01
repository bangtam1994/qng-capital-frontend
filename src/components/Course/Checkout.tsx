import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import axios from "axios";
import { PlanType } from "../../utils/plans";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeCheckout: React.FC<{
  price: number;
  priceId: string;
  product: PlanType;
  onSuccess: () => void;
}> = ({ price, priceId, onSuccess, product }) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchPI = async () => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/payment/create-payment-intent`,
        { amount: price * 100, currency: "eur" }
      );

      setClientSecret(response.data.clientSecret);
    };

    fetchPI();
  }, [price]);
  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            price={price}
            priceId={priceId}
            onSuccess={onSuccess}
            product={product}
          />
        </Elements>
      )}
    </>
  );
};

export default StripeCheckout;
