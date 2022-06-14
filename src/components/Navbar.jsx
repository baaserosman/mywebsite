import React from "react";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/#" className="nav__link" rel="noreferrer">
              Home
            </a>
          </li>

          <li className="nav__item">
            <a
              aria-current="page"
              href="#about"
              className="nav__link"
              rel="noreferrer"
            >
              About Me
            </a>
          </li>

          <li className="nav__item">
            <a
              aria-current="page"
              href="#project"
              className="nav__link"
              rel="noreferrer"
            >
              My Projects
            </a>
          </li>

          <li className="nav__item">
            <a
              aria-current="page"
              href="#contact"
              className="nav__link"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
