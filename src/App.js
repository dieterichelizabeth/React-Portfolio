import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  // Page State
  const [currentPage, SetCurrentPage] = useState("About");

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
        <Nav currentPage={currentPage} SetCurrentPage={SetCurrentPage} />
      </header>

      {/* Render the Page */}
      <main>{activePage()}</main>
    </>
  );
}

export default App;
