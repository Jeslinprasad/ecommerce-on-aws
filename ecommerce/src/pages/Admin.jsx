/**import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { API } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { Storage } from '@aws-amplify/storage';
import { v4 as uuid } from 'uuid'; // Import uuid function
import { createProduct } from './graphql/mutations'; // Import the mutation for creating a product
const Admin = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [profilePic, setProfilePic] = useState(null); // State for product image

  const addProduct = async () => {
    // Upload pic to S3
    Storage.configure({ region: 'us-east-1' });
    const key = await Storage.put(`${uuid()}.png`, profilePic, { contentType: 'image/png' });

    const newProduct = {
      id: uuid(),
      productName,
      productDescription,
      productPrice,
      profilePicPath: key // Store the S3 key as profilePicPath
    };

    // Persist new product
    await API.graphql(graphqlOperation(createProduct, { input: newProduct }));
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file); // Set the selected file as profilePic
  };

  return (
    <Container>
      <h1>Add Product</h1>
      <Form>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" accept="image/png" onChange={handleFileChange} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={addProduct}>Add Product &gt;&gt;</Button>&nbsp;
      </Form>
    </Container>
  );
};

export default Admin;
**/