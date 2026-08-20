import React from "react";
import "./Navbar.css";

const NAV_LINKS = ["Work", "About", "Playground", "Resource"];

export default function Navbar({
  email = "ihyaet@gmail.com",
  links = NAV_LINKS,
  onLogoClick,
}) {
  return (
    <nav className="navbar">
      <button
        className="navbar__logo"
        onClick={onLogoClick}
        aria-label="Home"
        type="button"
      >
        <span className="navbar__logo-dot" />
      </button>

      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="navbar__link">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a href={`mailto:${email}`} className="navbar__email">
        {email}
      </a>
    </nav>
  );
}