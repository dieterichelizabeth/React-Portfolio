import React from "react";
import Portfolio from "../Portfolio";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";

function Main({ currentPage }) {
  const activePage = () => {
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
