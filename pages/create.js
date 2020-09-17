import { Form, Input, TextArea, Button, Image, Message, Header, Icon } from 'semantic-ui-react';
import React from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';


const INITIAL_PRODUCT = {
    name: "",
    price: "",
    media: "",
    description: ""
  };

function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "media") {
      setProduct(prevState => ({...prevState, media: files[0]}));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(prevState => ({ ...prevState, [name]: value }));
    }
  }

  async function handleImageUpload() {
    const data = new FormData();
    data.append('file', product.media);
    data.append('upload_preset', 'reactreserve');
    data.append('cloud_name', 'duktqsckm');
    const response = await axios.post(process.env.CLOUDINARY_URL, data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const mediaUrl = await handleImageUpload();
    console.log({mediaUrl});
    // const url = `${baseUrl}/api/product`;
    // const { name, price, description } = product;
    // const payload = { name, price, description, mediaUrl}
    // // const payload = { ...product, mediaUrl} this is the same way as doing it without extra steps
    // await axios.post(url, payload)
    setProduct(INITIAL_PRODUCT);
    setSuccess(true);
  }


  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create New Product
      </Header>
      <Form onSubmit={handleSubmit} success={success} >
        <Message
          success
          icon="check"
          header="Success!"
          content="Your product has been posted."
        />
        <Form.Group widths="equal" >
          <Form.Field
            control={Input}
            name="name"
            type="text"
            label="Name"
            placeholder="Name"
            onChange={handleChange}
            value={product.name}
          />
          <Form.Field
            control={Input}
            name="price"
            type="number"
            label="Price"
            placeholder="Price"
            min="0.00"
            step="0.01"
            onChange={handleChange}
            value={product.price}
          />
          <Form.Field
            control={Input}
            name="media"
            type="file"
            accept="image/*"
            label="Media"
            content="Select Image"
            onChange={handleChange}
          />
        </Form.Group>
        <Image src={mediaPreview} rounded centered size="small" />
        <Form.Field
            control={TextArea}
            name="description"
            label="Description"
            placeholder="Description"
            onChange={handleChange}
            value={product.description}
        />
        <Form.Field
          control={Button}
          type="submit"
          color="blue"
          icon="pencil alternate"
          content="Submit"
        />
      </Form>
    </>
  );
}

export default CreateProduct;
