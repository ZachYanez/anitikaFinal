import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Home() {
  return (
    <div className="background">
      <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#/">Links</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#Know">Bio</Nav.Link>
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
            <Nav.Link href="#Modeling">Modeling</Nav.Link>
            <NavDropdown title="Resume" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://docs.google.com/document/d/1R3vjehY55V9Kma0rHOP_HlB2u69No3oDtBN66UQ9VdA/edit"
              >
                Resume
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Published">Features</Nav.Link>
            {/* <Nav.Link href="#Videos">Videos</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="mailto:nitaka828@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area">
        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/3Bokskx6qT0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/sDK6onFjQm8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/BYlwpB0VTsY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/qIi8_DMqfpU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/_YaJpkEX4FU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          <iframe
            src="https://www.youtube.com/embed/JaZACzvxQxU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3 mb-3">
          <iframe
            src="https://www.youtube.com/embed/0EAvO4hLVow"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
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
