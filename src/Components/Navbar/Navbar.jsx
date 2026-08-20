import React, { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = ["Work", "About", "Playground", "Resource"];

export default function Navbar({
  email = "ihyaet@gmail.com",
  links = NAV_LINKS,
  onLogoClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
      <button
        className="navbar__logo"
        onClick={onLogoClick}
        aria-label="Home"
        type="button"
      >
        <span className="navbar__logo-dot" />
      </button>

      <div className="navbar__menu">
        <button
          className="navbar__toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}>
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="navbar__link"
                onClick={handleLinkClick}
              >
                {link}
              </a>
            </li>
          ))}

          <li className="navbar__menu-email">
            <a href={`mailto:${email}`} className="navbar__email navbar__email--mobile">
              {email}
            </a>
          </li>
        </ul>
      </div>

      <a href={`mailto:${email}`} className="navbar__email">
        {email}
      </a>
    </nav>
  );
}