import React, { useState } from "react";
import Projects from "../Projects";

function Portfolio() {
  const [currentCategory, SetCurrentCategory] = useState("All");

  const categories = [
    { name: "All", size: "3" },
    { name: "React.js", size: "4" },
    { name: "MongoDB", size: "4" },
    { name: "Node.js", size: "4" },
    { name: "Express.js", size: "4" },
    { name: "MySQL", size: "3" },
  ];

  const categoryHandler = (name) => SetCurrentCategory(name);

  return (
    <div>
      <section className="d-flex flex-wrap justify-content-center projectsSection">
        <h2 className="col-12 sectionHeader content">Projects</h2>
        <div className="col-lg-4 col-md-6 col-sm-8 col-xs-10 d-flex flex-wrap justify-content-center">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              className={`btn col-${category.size} m-1 ${
                currentCategory === category.name
                  ? "btn-light"
                  : "btn-secondary"
              }`}
            >
              <span
                onClick={() => {
                  categoryHandler(category.name);
                }}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>

        <Projects currentCategory={currentCategory} />
      </section>
    </div>
  );
}

export default Portfolio;
