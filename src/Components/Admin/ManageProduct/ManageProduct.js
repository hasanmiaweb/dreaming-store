import React from "react";
import { Table } from "react-bootstrap";

const ManageProduct = () => {
  return (
    <div className="UpdatedInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <br />
            <div className="titles">
              <h3>Manage Product</h3>
            </div>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="box">
              <div className="pandingProduct">
                <h4>50</h4>
                <h3>Pending Product</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="totalProduct">
              <h4>950</h4>
              <h3>Total Product</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="completeOrder">
              <h4>500</h4>
              <h3>Complete Order</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Acton</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>$650</td>
                  <td>@55</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
