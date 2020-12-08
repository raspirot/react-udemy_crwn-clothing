import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hu9BKI4lxRWb8tDEsf4FyH8cpw4txIjx5i7ZW1TCdK6APNzxnP3jCKcHLWMjkamE6lQ4wQxqa7QqQEDLCmuGHVV00zs8bN3hY';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
// image='https://svgshare.com/i/CUz.svg'