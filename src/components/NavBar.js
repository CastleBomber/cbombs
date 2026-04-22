import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LuBrain } from "react-icons/lu";
import { SiEthereum } from 'react-icons/si';
import { GiFilmStrip } from 'react-icons/gi';
import { GiVrHeadset } from "react-icons/gi";
import profileImg from '../images/header/r13-cbombs.png';

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    /* ██████████████████████████████████████████████████████████████████ */
    /*                            NAVBAR ROOT                              */
    /* ██████████████████████████████████████████████████████████████████ */
    <Navbar expand={false} className="custom-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={profileImg}
            alt="Profile"
            className="navbar-profile-img me-2"
          />
        </Navbar.Brand>

        {/* ██████████████████████████████████████████████████████████████ */
        /*                         TOGGLE BUTTON                          */
        /* ██████████████████████████████████████████████████████████████ */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setShow(true)}
          className="border-0 custom-toggler"
        />
      </Container>

      {/* ████████████████████████████████████████████████████████████████ */
      /*                         SIDE NAVBAR                               */
      /* ████████████████████████████████████████████████████████████████ */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="custom-offcanvas"
        id="offcanvasNavbar"
      >
        {/* ██████████████████████████████████████████████████████████████ */
        /*                           SIDEBAR HEADER                        */
        /* ██████████████████████████████████████████████████████████████ */}
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="w-100 text-center sidebar-title">
            Projects
          </Offcanvas.Title>
        </Offcanvas.Header>

        {/* ██████████████████████████████████████████████████████████████ */
        /*                         NAVIGATION LINKS                       */
        /* ██████████████████████████████████████████████████████████████ */}
        <Offcanvas.Body className="pt-0">
          <Nav className="flex-column">

            <Nav.Link as={Link} to="/aipage" onClick={() => setShow(false)}
              className="d-flex align-items-center gap-3 text-light sidebar-link">
              <LuBrain size={18}/>
              AI
            </Nav.Link>
            
            <Nav.Link as={Link} to="/crypto" onClick={() => setShow(false)}
              className="d-flex align-items-center gap-3 text-light sidebar-link">
              <SiEthereum size={18}/>
              Crypto
            </Nav.Link>

            <Nav.Link as={Link} to="/vrpage" onClick={() => setShow(false)}
              className="d-flex align-items-center gap-3 text-light sidebar-link">
              <GiVrHeadset size={18}/>
              VR
            </Nav.Link>

            <Nav.Link as={Link} to="/animations" onClick={() => setShow(false)}
              className="d-flex align-items-center gap-3 text-light sidebar-link">
              <GiFilmStrip size={18}/>
              Animations
            </Nav.Link>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavBar;