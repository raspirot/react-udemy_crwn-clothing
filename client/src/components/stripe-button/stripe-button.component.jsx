import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { response } from 'express';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hu9BKI4lxRWb8tDEsf4FyH8cpw4txIjx5i7ZW1TCdK6APNzxnP3jCKcHLWMjkamE6lQ4wQxqa7QqQEDLCmuGHVV00zs8bN3hY';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment was successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you are using the provided credit card.');
    })
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