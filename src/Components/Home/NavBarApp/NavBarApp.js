import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';

const NavBarApp = () => {
    return (
        <>
         <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        &nbsp;
      Deportes 4.0
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default NavBarApp
