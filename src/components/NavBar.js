import { useState } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa';
import { LuBrain } from 'react-icons/lu';
import { SiEthereum } from 'react-icons/si';
import { GiFilmStrip, GiVrHeadset } from 'react-icons/gi';
import {
  House,
  Mail,
  Menu,
} from 'lucide-react';
import profileImg from '../images/header/r13-cbombs.png';

const mainLinks = [
  { to: '/', label: 'Home', icon: House },
  { to: '/ai', label: 'AI', icon: LuBrain },
  { to: '/crypto', label: 'Crypto', icon: SiEthereum },
  { to: '/vrpage', label: 'VR', icon: GiVrHeadset },
  { to: '/animations', label: 'Animations', icon: GiFilmStrip },
];

const contactLink = { to: '/contact', label: 'Contact', icon: Mail };

const socialLinks = [
  { href: 'https://github.com/CastleBomber', icon: <FaGithub aria-hidden="true" />, label: 'GitHub' },
  { href: 'https://youtube.com/@CastleBomber', icon: <FaYoutube aria-hidden="true" />, label: 'YouTube' },
  { href: 'https://tiktok.com/@CastleBomber', icon: <FaTiktok aria-hidden="true" />, label: 'TikTok' },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

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
            <div className="drawer-profile-frame">
              <img src={profileImg} alt="" className="drawer-profile" />
            </div>
            <div>
              <p className="drawer-heading">CastleBomber Studios</p>
              <p className="drawer-quote">"Software for all"</p>
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

              {mainLinks.slice(1).map((link, index) => {
                const Icon = link.icon;
                const active = link.to === '/ai' ? pathname.startsWith('/ai') : pathname === link.to;

                return (
                  <li
                    key={link.to}
                    className="drawer-item"
                    style={{ '--item-index': index + 1 }}
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
          <div className="drawer-lower">
            <Nav.Link
              as={Link}
              to={contactLink.to}
              onClick={closeMenu}
              aria-current={pathname === contactLink.to ? 'page' : undefined}
              className={`drawer-contact-link ${pathname === contactLink.to ? 'is-active' : ''}`}
            >
              <span>
                <span className="drawer-contact-kicker">Send a message</span>
                <span className="drawer-contact-label">{contactLink.label}</span>
              </span>
              <Mail aria-hidden="true" size={21} />
            </Nav.Link>
          </div>
          <div className="drawer-footer" aria-label="Social links">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="drawer-social-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default NavBar;
