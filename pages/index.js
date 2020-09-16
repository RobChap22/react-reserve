import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';

// async function getProducts() {
//   const url = 'http://localhost:3000/api/products';
//   const response = await axios.get(url);
//   console.log(response.data);
// };


function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
}

export default Home;
