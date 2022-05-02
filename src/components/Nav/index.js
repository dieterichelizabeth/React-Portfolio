import React from "react";
function Nav() {
  return (
    <nav className="navbar">
      <div className="portfolio-title">
        <h1>Liz Dieterich</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="./index.html">Projects</a>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
          <li>
            <a href="./resume.html">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
