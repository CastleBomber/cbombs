import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImg from '../images/header/r13-cbombs.png';

const NavBar = () => {

  return (
    /* React-Bootstrap automatically adds the navbar class */
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={profileImg}
            alt="Profile"
            className="navbar-profile-img me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/crypto">Crypto</Nav.Link>
            <Nav.Link as={Link} to="/animations">Animations</Nav.Link>
            <Nav.Link as={Link} to="/capstone">Capstone</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;