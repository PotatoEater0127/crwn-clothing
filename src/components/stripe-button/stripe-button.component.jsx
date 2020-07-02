import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful!");
};

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey =
    "pk_test_51H0OXBF73kFy2WEueTxKStWqdME53mtTySVj3ziU5Lp3EKXHD595TtyZnyLJgJmhKqNYFkMC6j91FQIOmtdPZJOZ00FxoHPzlO";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeButton;
