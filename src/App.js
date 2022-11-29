import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  // Page State
  const [currentPage, SetCurrentPage] = useState("About");
  const navHandler = (name) => SetCurrentPage(name);

  // Nav Links
  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  // Conditionally Render pages
  const activePage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    } else {
      return <Contact />;
    }
  };

  return (
    <>
      <header>
        <nav>
          <a
            href={"/"}
            onClick={() => {
              navHandler("Home");
            }}
            className="portfolio-title"
          >
            Elizabeth Dieterich
          </a>

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
        </nav>
      </header>

      {/* Render the Page */}
      {activePage()}
    </>
  );
}

export default App;
