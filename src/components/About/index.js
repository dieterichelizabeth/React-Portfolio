import React from "react";
import Footer from "../Footer";
import coverImage from "../../assets/about/aboutImage.png";

function About() {
  return (
    <>
      <div className="bar"></div>

      <section className="grid grid--1x2">
        <div>
          <h2>About</h2>
          <p>
            I am a Full stack web developer leveraging anthropology background
            to create practical, robust applications. Currently styding Full
            Stack Web Development from the University of Texas Austin Coding
            Bootcamp, with newly developed skills in HTML, CSS, Javascript, MERN
            Stack Development and responsive configurations.
          </p>
          <p>
            With each project, my aim is to balance design and functionality for
            an effortless user experience. I am excited to leverage my skills as
            part of a collaborative, versatile team to build intuitive and
            useful applications for users.
          </p>
        </div>
        <div>
          <img src={coverImage} alt="A smiling Developer in a pink jacket." />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
