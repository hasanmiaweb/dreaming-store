import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./MainMenu.css";
const MainMenu = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          Dreaming Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            {loggedInUser.email ? (
              <Nav.Link as={Link} to="/admin">
                Admin dashboard
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/deals">
              Deals
            </Nav.Link>
            {loggedInUser.email ? (
              <strong>
                {loggedInUser.name}
                <img src={loggedInUser.photoURL} alt="" />
              </strong>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MainMenu;
