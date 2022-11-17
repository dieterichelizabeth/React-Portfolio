import React, { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Page State
  const [currentPage, SetCurrentPate] = useState("Home");

  // Nav Links
  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  const navHandler = (name) => SetCurrentPate(name);

  return (
    <>
      <header>
        <nav className="navbar">
          <a
            href={"/"}
            onClick={() => {
              navHandler("Home");
            }}
            className="portfolio-title"
          >
            Liz Dieterich
          </a>

          <ul className="nav-links">
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
        </nav>
      </header>

      <Main currentPage={currentPage} />

      <Footer />
    </>
  );
}

export default App;
