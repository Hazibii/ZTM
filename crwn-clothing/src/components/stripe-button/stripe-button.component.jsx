import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HHUDXFI8IMPaKYP7jo5kISZK1QH56ydm6imuzy1GnRWY1gny3Bmue2lOSqWtpcIZ8unO4Ia0MZOgWVsWP5dJ4dQ00Hcczlv0d";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your totla is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
