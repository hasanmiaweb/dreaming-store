import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeProduct.css";
const HomeProduct = (props) => {
  const { name, price, imageUrl} = props.ProductDetails;
  return (
    <div className="col-md-3">
      <div className="ProductCard">
        <Card>
          <Card.Img
            variant="top"
            className="productImage img-fluid"
            src={imageUrl}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className="buyBtnPrice d-flex justify-content-between">
              <Card.Text>
                {" "}
                <strong>${price}</strong>{" "}
              </Card.Text>
              <Button as={Link} to={`/Checkout/${name}`} variant="success">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeProduct;
