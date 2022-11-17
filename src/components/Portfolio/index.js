import React from "react";
import Projects from "../Projects";

function Portfolio() {
  return (
    <div>
      <section className="d-flex flex-wrap justify-content-center projectsSection project-animation">
        <h2 className="col-12 sectionHeader">Projects</h2>
        <Projects />
      </section>
    </div>
  );
}

export default Portfolio;
