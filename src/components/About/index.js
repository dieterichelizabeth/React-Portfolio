import React from "react";
import coverImage from "../../assets/about/aboutImage.png";

function About() {
  return (
    <section className="col-12 d-flex flex-wrap justify-content-center">
      <div className="col-lg-6 col-md-8 content">
        <h2 className="col-12 aboutHeader">About</h2>
        <p className="col-10">
          I am a Full stack web developer leveraging anthropology background to
          create practical, robust applications. Currently styding Full Stack
          Web Development from the University of Texas Austin Coding Bootcamp,
          with newly developed skills in HTML, CSS, Javascript, MERN Stack
          Development and responsive configurations.
        </p>
        <p className="col-10 aboutSmallText">
          With each project, my aim is to balance design and functionality for
          an effortless user experience. I am excited to leverage my skills as
          part of a collaborative, versatile team to build intuitive and useful
          applications for users.
        </p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 content">
        <img src={coverImage} alt="A smiling Developer in a pink jacket." />
      </div>
    </section>
  );
}

export default About;
