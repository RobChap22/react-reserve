import React from 'react';
import axios from 'axios';

// async function getProducts() {
//   const url = 'http://localhost:3000/api/products';
//   const response = await axios.get(url);
//   console.log(response.data);
// };


function Home({ products }) {
  console.log(products);
  // React.useEffect(() => {
  //   getProducts()
  // }, []);

  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
}

export default Home;
