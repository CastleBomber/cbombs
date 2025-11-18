import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImg from '../images/header/r13-cbombs.png';

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    /* React-Bootstrap automatically adds the navbar class */
    <Navbar bg="dark" variant="dark" expand={false}>
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
          className="border-0"
        />
      </Container>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="bg-dark text-light"
        id="offcanvasNavbar"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-end">
            <Nav.Link as={Link} to="/crypto" onClick={() => setShow(false)}>Crypto</Nav.Link>
            <Nav.Link as={Link} to="/animations" onClick={() => setShow(false)}>Animations</Nav.Link>
            <Nav.Link as={Link} to="/vrpage" onClick={() => setShow(false)}>VR</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavBar;