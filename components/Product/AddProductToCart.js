import { Input } from "semantic-ui-react";
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import cookie from 'js-cookie';


function AddProductToCart({ user, productId }) {
  const [quantity, setQuantity] = React.useState(1);
  const router = useRouter();

  async function handleAddProductToCart() {
    const url = `${baseUrl}/api/cart`;
    const payload = { quantity, productId };
    const token = cookie.get('token');
    const headers = { headers: { Authorization: token } };
    await axios.put(url, payload, headers);
  }

  return (
    <Input
      type="number"
      min="1"
      placeholder="Quantity"
      value={quantity}
      onChange={e => setQuantity(Number(e.target.value))}
      action={user ? {
        color: "orange",
        content: "Add to Cart",
        icon: "plus cart",
        onClick: handleAddProductToCart
      } : {
        color: "blue",
        content: "Sign up to purchase item",
        icon: "signup",
        onClick: () => router.push('/signup')
      }}
    />
  );
}

export default AddProductToCart;
