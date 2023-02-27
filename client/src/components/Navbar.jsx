import React from 'react'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const cartLength = useSelector(state => state.cart.length)
    const sessionId = useSelector(state => state.sessionId)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">MediLab Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                        <Nav.Link as={Link} to="/cart" href="/cart">Cart {cartLength}</Nav.Link>
                        <NavDropdown title="More Info" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/contact">Contact us</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about">About us</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/panel" style={{ color: 'blue' }}>{sessionId}</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
