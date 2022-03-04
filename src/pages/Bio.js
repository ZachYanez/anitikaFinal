import React from "react";
import KnowPics from "../components/carousels/knowPics";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Know1 from "../assets/know/Amazon.PNG";
import Know2 from "../assets/know/Dynamax.PNG";
import Know3 from "../assets/know/Fogo.PNG";
import Know5 from "../assets/headshots/headshot5.jpg";

export default function Bio() {
  return (
    <div className="background">
      <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#/">Anitika</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="staticLink" href="#Bio">
              Bio
            </Nav.Link>
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
            <Nav.Link href="#printwork">Print work</Nav.Link>
            <Nav.Link href="#Kayden">Kayden</Nav.Link>
            <Nav.Link href="#Lifestyle">Lifestyle</Nav.Link>
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
      <div className="content-area background">
        <br />
        <div className="textColorWhite ml-5 mr-5 ">
          Born in Germany. Military brat. Raised in Washington State. Varsity letter in 3 sports Volleyball, Basketball, and
          Track. Played vb at Webber International University. Started pursuing my acting career 2 years ago. I believe I have a
          lot of characters within myself that I can bring to life on the big screen.
          <div />
          <br />
        </div>

        <div>
          <img className="w-50 shadow" src={Know5} alt="slide" />
          <br />
        </div>
      </div>
      <br />

      <div className="extra-content"></div>
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
