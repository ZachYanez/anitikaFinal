import React from 'react'
import KnowPics from '../components/carousels/knowPics'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

export default function Know() {
    return (
        <div className="background">
            <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand>Abyon Ausar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="staticLink" href="#">Home</Nav.Link>
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://docs.google.com/document/d/1R3vjehY55V9Kma0rHOP_HlB2u69No3oDtBN66UQ9VdA/edit">Actor Resume</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
            <NavDropdown.Item target="_blank" href="https://www.imdb.com/name/nm11718272/">IMDB</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://www.instagram.com/oswiftt/">Instagram</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://www.facebook.com/oSwiftt/">Facebook</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://www.youtube.com/user/itcost2beaboss">Youtube</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/abyonmcinnis/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.acclaimtalent.com/profiles/abyon-ausar/">Acclaim Talent</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.acclaimtalent.com/profiles/abyon-ausar/">Slamm Management</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.slammmanagement.com/talent/abyon-mcinnis-64862">ANTHM NY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="staticLink" href="#Know">Get To Know Abyon</Nav.Link>
            <Nav.Link href="#Modeling">Modeling</Nav.Link>
            {/* <Nav.Link href="#Videos">Videos</Nav.Link> */}
            <Nav.Link href="#Published">Features</Nav.Link> 
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon.mcinnis@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area background">

         <div className="textColorWhite">Q. What do you do for a living?<br></br>
 “ I am a multifaceted experiential marketing specialist. My focus right now is on opportunities in brand management, modeling, acting, social media marketing, and emcee work.”</div> 

       <KnowPics/>   

      <div className="mt-3 mb-3">
      <iframe width="75%" src="https://www.youtube.com/embed/0EAvO4hLVow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br/>

      <div className="mt-3 mb-3">
      <iframe width="75%" src="https://www.youtube.com/embed/BYlwpB0VTsY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
        

      </div>
      <div className="extra-content">

      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#/">A</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="staticLink" href="#/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon.mcinnis@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>

    )
}
