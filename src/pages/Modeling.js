import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Headshots from "../components/carousels/headshotPics";
import CorpPics from "../components/carousels/corpPics";
import FashionPics from "../components/carousels/fashionPics";
import FitnessPics from "../components/carousels/fitnessPics";

export default function Modeling() {
  return (
    <div className="background">
      <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#/">Abyon Ausar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#Know">Get To Know Abyon</Nav.Link>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.imdb.com/name/nm11718272/">
                IMDB
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/oswiftt/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.facebook.com/oSwiftt/">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.youtube.com/user/itcost2beaboss">
                Youtube
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/abyonmcinnis/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.acclaimtalent.com/profiles/abyon-ausar/">
                Acclaim Talent
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.acclaimtalent.com/profiles/abyon-ausar/">
                Slamm Management
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.wallflowermanageent.com/boy_portfolio.pho?id=169">
                Wallflower Management
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.slammmanagement.com/talent/abyon-mcinnis-64862">
                ANTHM NY
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Acting">Acting</Nav.Link>
            <Nav.Link className="staticLink" href="#Modeling">Modeling</Nav.Link>
            <Nav.Link href="#Voiceover">Voiceover</Nav.Link>
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
            <Nav.Link href="mailto:abyon.mcinnis@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area background">
        {/* <Headshots /> */}
        <br />
        <CorpPics />
        <br />
        <br/>
        <FitnessPics />
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
