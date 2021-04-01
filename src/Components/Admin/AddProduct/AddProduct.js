import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddProduct = () => {
  const [AddProductValues, setAddProductValues] = useState({
    name: "",
    price: "",
  });

  const [image, setImageUrl] = useState();
  const handleAddProductBtn = (e) => {
    const addProductData = { ...AddProductValues };
    addProductData.imageUrl = image;
    fetch("http://localhost:5000/addProductServer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProductData),
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Cick");
    e.preventDefault();
  };
  const handleChangeImage = (e) => {
    const imageData = new FormData();
    imageData.set("key", "aa6d6bedef01817f6b800b99dbc7f182");
    imageData.append("image", e.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload",imageData).then((result) => {
      setImageUrl(result.data.data.display_url);
      console.log(e.target.files[0]);
    });
  };
  const handleChange = (e) => {
    const value = { ...AddProductValues };
    value[e.target.name] = e.target.value;
    setAddProductValues(value);
  };

  return (
    <div className="UpdatedInfo">
      <div className="container">
        <h1>ADD PRODUCT</h1>
        <hr />

<Form onSubmit={handleAddProductBtn} action="" method="" >
<div className="row">
  <div className="col-md-4">
  <Form.Group >
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" onChange={handleChange} name="name" placeholder="Enter Your Product Name" />
  </Form.Group>

  </div>
  <div className="col-md-4">
  <Form.Group>
    <Form.Label>Product Price</Form.Label>
    <Form.Control type="number" onChange={handleChange}  name="price" placeholder="Price" />
  </Form.Group>
  </div>
  <div className="col-md-3">
  <Form.Group>
    <Form.Label>Product Image</Form.Label>
    <Form.Control  type="file" onChange={handleChangeImage} />
  </Form.Group>
  </div>
</div>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
    </div>
  );
};

export default AddProduct;
