import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>

        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
