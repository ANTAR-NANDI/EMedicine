import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar bg="green" variant="secondary" expand="lg">
      <Navbar.Brand href="/">EMedicine</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header
