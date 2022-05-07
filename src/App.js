import React, { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Set the current page as the value of "state"
  const [currentPage, SetCurrentPate] = useState("About");

  // Nav Links
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  const navHandler = (name) => SetCurrentPate(name);

  return (
    <div>
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

      <Main />

      <Footer />
    </div>
  );
}

export default App;

// Define the nav bar links - Done
// Map to display navbar - Done
// Add event listener/click handler change - Done
// Pass the variable to the "Main component" for condintional rendering
// Add conditional styling
