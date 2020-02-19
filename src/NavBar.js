import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

function NavBar(){
    return(
        <div>
        
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Leandro Acosta</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Boton 01</Nav.Link>
      <Nav.Link href="#link">Boton 02</Nav.Link>
      <NavDropdown title="Mas Botones" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Boton 03</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Boton 04</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Boton 05</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separador link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

        </div>

    );
}

export default NavBar;