import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Published from "../components/cards/pubcard";

export default function Lifestyle() {
  return (
    <div className="background">
      <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#/">Anitika Knight</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Bio">Bio</Nav.Link>
            <NavDropdown title="My Links" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.tagtalentagency.com/Talent/Anitaka-Knight">
                TAG
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="http://www.brownagency.co/commercial/women/1494-anitaka-knight/">
                Brown Agency
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/anitakaaaa/">
                Instagram Main
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/anitakatheactress/">
                Instagram Acress Account
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/anitakaknight/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="facebook.com/anitaka.knight">
                Facebook
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Headshots">Headshots</Nav.Link>
            <Nav.Link href="#Printwork">Print work</Nav.Link>
            <Nav.Link href="#Kayden">Kayden</Nav.Link>
            <Nav.Link className="staticLink" href="#Lifestyle">
              Lifestyle
            </Nav.Link>
            <NavDropdown title="Resume" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://drive.google.com/file/d/1zdTajt6mSygt9JxEtwUVGGzRTosJR7Uv/view?usp=sharing"
              >
                Acting Resume
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="#Videos">Videos</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="mailto:nitaka828@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area"></div>
      <div className="content-area"></div>

      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#/">A</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:nitaka828@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
