import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiEthereum } from 'react-icons/si';
import { GiVrHeadset, GiFilmStrip } from 'react-icons/gi';
import profileImg from '../images/header/r13-cbombs.png';

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    /* React-Bootstrap automatically adds the navbar class */
    <Navbar expand={false} className="custom-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={profileImg}
            alt="Profile"
            className="navbar-profile-img me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setShow(true)}
          className="border-0 custom-toggler"
        />
      </Container>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="custom-offcanvas"
        id="offcanvasNavbar"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="w-100 text-center">
            Projects
          </Offcanvas.Title>
        </Offcanvas.Header>

        {/* Right side, slide-in sidebar menu */}
        <Offcanvas.Body className="pt-0">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/crypto" onClick={() => setShow(false)}
              className="d-flex align-items-center gap-3 text-light sidebar-link">
              <SiEthereum size={18}/>
              Crypto
            </Nav.Link>
            <Nav.Link as={Link} to="/vrpage" onClick={() => setShow(false)}
              className="d-flex align-items-center gap-3 text-light sidebar-link">
              <GiVrHeadset size={18}/>
              Virtual Reality
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