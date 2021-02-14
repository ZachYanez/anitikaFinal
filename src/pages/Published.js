import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Published from "../components/cards/pubcard";

export default function PubContent() {
  return (
    <div className="background">
      <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#/">Abyon Ausar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://docs.google.com/document/d/1R3vjehY55V9Kma0rHOP_HlB2u69No3oDtBN66UQ9VdA/edit"
              >
                Actor Resume
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/abyonmcinnis/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.facebook.com/oSwiftt/">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/oswiftt/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.imdb.com/name/nm11718272/">
                IMDB
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.acclaimtalent.com/profiles/abyon-ausar/">
                Acclaim Talent
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Know">Get To Know Abyon</Nav.Link>
            <Nav.Link href="#Modeling">Modeling</Nav.Link>
            {/* <Nav.Link href="#Videos">Videos</Nav.Link> */}
            <Nav.Link className="staticLink" href="#Published">
              Features
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon.mcinnis@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="image-container content-area w-50 mb-3 mt-3">
        <Published />
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#/">A</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon.mcinnis@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
