import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <ItemDetailsName>{name}</ItemDetailsName>
      <span className='price'>
        {quantity} x {price}$
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;