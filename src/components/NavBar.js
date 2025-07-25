import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImg from '../images/r13-transparent.png';

const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img 
          src={profileImg}
          alt="Profile"
          className="navbar-profile-img"
        />
        <Navbar.Brand as={Link} to="/">CBOMBS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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