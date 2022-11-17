import React from "react";
import Portfolio from "../Portfolio";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";
import Home from "../Home";

function Main({ currentPage }) {
  const activePage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  return <main>{activePage()}</main>;
}

export default Main;
