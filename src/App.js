import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Animations from './pages/Animations';
import Capstone from './pages/Capstone';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Welcome, *site under construction*</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#crypto">Crypto</Nav.Link>
              <Nav.Link href="#animations">Animations</Nav.Link>
              <Nav.Link href="#capstone">Capstone</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/capstone" element={<Capstone />} />
        </Routes>
      </Container>
    </ BrowserRouter>
  );
}
export default App;
