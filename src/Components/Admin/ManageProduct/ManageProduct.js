import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import { RiDeleteBin5Fill, RiEditBoxFill } from 'react-icons/ri';
import loading from "../../loading/laading.gif";
const ManageProduct = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://rhubarb-tart-38441.herokuapp.com/getProductServer")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://rhubarb-tart-38441.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch("https://rhubarb-tart-38441.herokuapp.com/getProductServer")
        .then((response) => response.json())
        .then((data) => setProductData(data));
    });
  };

  return (
    <div className="UpdatedInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="titles">
              <h3>Manage Product</h3>
            </div>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="box">
            </div>
          </div>
          <div className="col-md-4">
            <div className="totalProduct">
              <h4><FaShoppingCart></FaShoppingCart> </h4>
              <h3>Total Product ({productData.length})</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 m-auto mt-5">
            {productData.length === 0 && (
              <div className="loadingimg">
                <img src={loading} alt="" />
              </div>
            )}
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
                {productData.map((productData) => (
                <tr>
                  <td>{productData.name}</td>
                  <td>{productData.price}</td>
                  <button className="Edit"><RiEditBoxFill></RiEditBoxFill> Edit</button>
                  <button className="EditDelete" onClick={() => handleDelete(productData._id)}>
                    <RiDeleteBin5Fill></RiDeleteBin5Fill> Delete
                  </button>
                </tr>
              ))}
              </thead>

            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
