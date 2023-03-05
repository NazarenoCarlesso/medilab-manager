import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { setItem } from "../utils/localStorage";
import { setState } from "../reducer";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartLength = useSelector((state) => state.cart.length);
  const sessionId = useSelector((state) => state.sessionId?.name);

  function handleLogout() {
    setItem("cart", []);
    setItem("sessionId", undefined);
    dispatch(setState());
    navigate("/home");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MediLab Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" href="/cart">
              Cart {cartLength}
            </Nav.Link>
            <NavDropdown title="More Info" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contact">
                Contact us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">
                FAQ
              </NavDropdown.Item>
            </NavDropdown>

            {sessionId ? null : (
              <Nav.Link as={Link} to="/signup">
                Sign Up/Login
              </Nav.Link>
            )}

            {sessionId ? (
              <NavDropdown title={sessionId} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
