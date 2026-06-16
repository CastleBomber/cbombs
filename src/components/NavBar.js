import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LuBrain } from "react-icons/lu";
import { SiEthereum } from 'react-icons/si';
import { GiFilmStrip } from 'react-icons/gi';
import { GiVrHeadset } from "react-icons/gi";
import profileImg from '../images/header/r13-cbombs.png';
import { ChevronRight, ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showAIProjects, setShowAIProjects] = useState(false);

  return (
    /* ██████████████████████████████████████████████████████████████████ */
    /*                            NAVBAR ROOT                             */
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

            {/* ===== AI SECTION ===== */}
            <div className="sidebar-group">

              <button
                className="sidebar-link sidebar-expand-btn"
                onClick={() => setShowAIProjects(!showAIProjects)}
              >
                <span className="sidebar-arrow">
                  {showAIProjects ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </span>

                <span className="sidebar-label">
                  AI
                  <LuBrain size={22} />
                </span>
              </button>

              {showAIProjects && (
                <div className="sidebar-submenu">
                  <Nav.Link
                    as={Link}
                    to="/ai/stocksaipage"
                    onClick={() => setShow(false)}
                    className="sidebar-sublink"
                  >
                    Stocks AI
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/ai/framesaipage"
                    onClick={() => setShow(false)}
                    className="sidebar-sublink"
                  >
                    Frames AI
                  </Nav.Link>
                </div>
              )}
            </div>

            {/* ===== CRYPTO SECTION ===== */}
            <Nav.Link as={Link} to="/crypto" onClick={() => setShow(false)}
              className="text-light sidebar-link">
              Crypto
              <SiEthereum size={22} />
            </Nav.Link>

            {/* ===== VR SECTION ===== */}
            <Nav.Link as={Link} to="/vrpage" onClick={() => setShow(false)}
              className="text-light sidebar-link">
              VR
              <GiVrHeadset size={22} />
            </Nav.Link>

            {/* ===== ANIMATIONS SECTION ===== */}
            <Nav.Link as={Link} to="/animations" onClick={() => setShow(false)}
              className="text-light sidebar-link">
              Animations
              <GiFilmStrip size={22} />
            </Nav.Link>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavBar;
