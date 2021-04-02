import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./Checkout.css";
const Checkout = () => {
  const { name } = useParams();
  const [product, setProduct] = useState([]);
  const result = product.find((product) => product.name === name);
  useEffect(() => {
    fetch("https://rhubarb-tart-38441.herokuapp.com/getProductServer")
    .then(res => res.json())
    .then(data => setProduct(data))
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1>Checkout</h1>
            <br />
            <table class="table caption-top">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody className="table-striped">
                <tr class="table-active">
                  <th scope="row">{result?.name}</th>
                  <td>1</td>
                  <td>${result?.price}</td>
                </tr>
                <tr class="table-striped">
                  <th scope="row">Tax</th>
                  <td></td>
                  <td>$10</td>
                </tr>
                <tr class="table-active">
                  <th scope="row">Total Amount</th>
                  <td></td>
                  <td>${parseInt(result?.price) + 10}</td>
                </tr>
              </tbody>
            </table>
            <Button id="checkoutBtn">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
