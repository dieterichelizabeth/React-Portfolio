import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  // Page State
  const [currentPage, SetCurrentPate] = useState("Home");
  const navHandler = (name) => SetCurrentPate(name);

  // Nav Links
  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  // Conditionally Render pages
  const activePage = () => {
    if (currentPage === "Home") {
      return homepage;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    } else {
      return <Contact />;
    }
  };

  const homepage = (
    <section className="home--page">
      <h1>Hello, I'm Liz.</h1>
      <p>I'm a developer who loves building things for the web.</p>
      <button
        onClick={() => {
          navHandler("Portfolio");
        }}
        className="btn--clear"
      >
        View Projects
      </button>
    </section>
  );

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
