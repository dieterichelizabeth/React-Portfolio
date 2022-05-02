import React from "react";

function Nav() {
  return (
    <header>
      <nav className="navbar">
        <div className="portfolio-title">
          <h1>LIZ DIETERICH</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
