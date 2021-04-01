import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import HomeProduct from "../ShowProduct/HomeProduct";
import "./Home.css";
const Home = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getProductServer")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="searchBtns">
              <div className="searchIcon">
                <FaSearch />
              </div>
              <Form.Control
                id="searchInput"
                size="lg"
                type="text"
                placeholder="Search Product"
              />
              <Button id="searchBtn">Search</Button>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
      </div>
      <div className="container">
        <div className="row">
            {productData.map((ProductDetails) => (
            <HomeProduct ProductDetails={ProductDetails}></HomeProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
