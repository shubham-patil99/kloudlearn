import * as React from "react"
import {Navbar, Nav, NavDropdown, } from 'react-bootstrap'  

const Header = () =>   (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <img src="/images/logo.png" style={{height:`2rem`, margin: `1rem`, marginLeft:`4rem`}} />
  <Navbar.Brand href="#home" >KloudLearn</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" style={{marginLeft:`35rem`}}>
      <Nav.Link href="#features">Overview</Nav.Link>
      <Nav.Link href="#pricing">Content Library</Nav.Link>
      <NavDropdown title="Features" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Blog</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      AboutUs
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
export default Header
