import axios from 'axios';
import ProductSummary from '../components/Product/ProductSummary';
import ProductAttributes from '../components/Product/ProductAttributes';


function Product({ product }) {
  return (
    <>
      <ProductSummary {...product} />
      <ProductAttributes {...product} />
    </>
  );
}

Product.getInitialProps = async ({ query }) => {
  // the query here comes from the url
  const url = `http://localhost:3000/api/product?_id=${query._id}`;
  // const payload = { params: {query._id} };
  const response = await axios.get(url);
  return { product: response.data };
}

export default Product;
