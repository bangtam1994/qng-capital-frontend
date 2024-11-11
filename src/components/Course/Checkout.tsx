import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { PlanType } from "../../utils/plans";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeCheckout: React.FC<{
  price: number;
  priceId: string;
  product: PlanType;
  onSuccess: () => void;
}> = ({ price, priceId, onSuccess, product }) => {
  return (
    <>
      {stripePromise && (
        <Elements stripe={stripePromise}>
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
