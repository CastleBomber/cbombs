import { useState } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { LuBrain } from 'react-icons/lu';
import { SiEthereum } from 'react-icons/si';
import { GiFilmStrip, GiVrHeadset } from 'react-icons/gi';
import {
  ChevronDown,
  ChevronRight,
  House,
  Menu,
} from 'lucide-react';
import profileImg from '../images/header/r13-cbombs.png';

const mainLinks = [
  { to: '/', label: 'Home', icon: House },
  { to: '/crypto', label: 'Crypto', icon: SiEthereum },
  { to: '/vrpage', label: 'VR', icon: GiVrHeadset },
  { to: '/animations', label: 'Animations', icon: GiFilmStrip },
];

const aiLinks = [
  { to: '/ai/stocksaipage', label: 'Stocks AI' },
  { to: '/ai/framesaipage', label: 'Frames AI' },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [showAIProjects, setShowAIProjects] = useState(
    pathname.startsWith('/ai/'),
  );

  const closeMenu = () => setShow(false);

  return (
    <header className="floating-nav">
      <button
        type="button"
        className="menu-trigger"
        aria-label="Open navigation"
        aria-controls="portfolio-navigation"
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        <Menu aria-hidden="true" size={25} />
      </button>

      <Offcanvas
        show={show}
        onHide={closeMenu}
        placement="end"
        className="portfolio-offcanvas"
        id="portfolio-navigation"
        aria-labelledby="portfolio-navigation-title"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title id="portfolio-navigation-title" className="visually-hidden">
            Portfolio navigation
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="drawer-brand">
            <img src={profileImg} alt="" className="drawer-profile" />
            <div>
              <p className="drawer-eyebrow">CastleBomber</p>
              <p className="drawer-heading">Projects</p>
            </div>
          </div>

          <Nav as="nav" aria-label="Main navigation" className="drawer-nav flex-column">
            <ul className="drawer-list">
              <li className="drawer-item" style={{ '--item-index': 0 }}>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={closeMenu}
                  aria-current={pathname === '/' ? 'page' : undefined}
                  className={`drawer-link ${pathname === '/' ? 'is-active' : ''}`}
                >
                  <span>Home</span>
                  <House aria-hidden="true" size={21} />
                </Nav.Link>
              </li>

              <li className="drawer-item" style={{ '--item-index': 1 }}>
                <button
                  type="button"
                  className={`drawer-link drawer-expand ${pathname.startsWith('/ai/') ? 'is-active' : ''}`}
                  aria-expanded={showAIProjects}
                  aria-controls="ai-project-links"
                  onClick={() => setShowAIProjects((current) => !current)}
                >
                  <span className="drawer-expand-label">
                    {showAIProjects ? (
                      <ChevronDown aria-hidden="true" size={17} />
                    ) : (
                      <ChevronRight aria-hidden="true" size={17} />
                    )}
                    AI
                  </span>
                  <LuBrain aria-hidden="true" size={22} />
                </button>

                {showAIProjects && (
                  <ul id="ai-project-links" className="drawer-submenu">
                    {aiLinks.map((link) => (
                      <li key={link.to}>
                        <Nav.Link
                          as={Link}
                          to={link.to}
                          onClick={closeMenu}
                          aria-current={pathname === link.to ? 'page' : undefined}
                          className={`drawer-sublink ${pathname === link.to ? 'is-active' : ''}`}
                        >
                          {link.label}
                        </Nav.Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {mainLinks.slice(1).map((link, index) => {
                const Icon = link.icon;
                const active = pathname === link.to;

                return (
                  <li
                    key={link.to}
                    className="drawer-item"
                    style={{ '--item-index': index + 2 }}
                  >
                    <Nav.Link
                      as={Link}
                      to={link.to}
                      onClick={closeMenu}
                      aria-current={active ? 'page' : undefined}
                      className={`drawer-link ${active ? 'is-active' : ''}`}
                    >
                      <span>{link.label}</span>
                      <Icon aria-hidden="true" size={22} />
                    </Nav.Link>
                  </li>
                );
              })}
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default NavBar;
