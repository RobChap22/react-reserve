import axios from 'axios';

function Product({ product }) {
  return <>product</>;
}

function getInitialProps = async ({ query }) => {
  // the query here comes from the url
  const url = `http://localhost:3000/api/product?_id=${query._id}`;
  // const payload = { params: {query._id} };
  const response = await axios.get(url);
  return { product: response.data };
}

export default Product;
