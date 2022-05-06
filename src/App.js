import React from "react";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Nav Links
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="portfolio-title">
          <h1>LIZ DIETERICH</h1>
        </div>
        <div className="nav-links">
          <ul>
            {navLinks.map((navLink) => (
              <li>
                <a href={navLink.href}>{navLink.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Footer />
    </div>
  );
}

export default App;

// Define the nav bar links - Done
// Map to display navbar - Done
// Add event listener/click handler change
// Pass the variable to the "Main component" for condintional rendering
// Add conditional styling
