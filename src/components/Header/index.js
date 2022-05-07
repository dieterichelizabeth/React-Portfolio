import React, { useState } from "react";
import Main from "../Main";

function Header() {
  // Set "About" as the value of the currentPage variable
  const [currentPage, SetCurrentPate] = useState("About");

  // Nav Links
  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  const navHandler = (name) => SetCurrentPate(name);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="portfolio-title">
            <h1>LIZ DIETERICH</h1>
          </div>
          <div className="nav-links">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => {
                      navHandler(link.name);
                    }}
                    className={
                      currentPage === link.name ? "navActive" : "navInactive"
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <Main currentPage={currentPage} />
    </div>
  );
}

export default Header;
