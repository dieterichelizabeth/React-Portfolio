import React from "react";
import Projects from "../Projects";

function Portfolio() {
  const categories = [
    { name: "All", size: "3" },
    { name: "React.js", size: "4" },
    { name: "MongoDB", size: "4" },
    { name: "Node.js", size: "4" },
    { name: "Express.js", size: "4" },
    { name: "MySQL", size: "3" },
  ];

  const categoryClickHandler = (name) => {
    console.log("Category selected: " + name);
  };

  return (
    <div>
      <section className="d-flex flex-wrap justify-content-center projectsSection">
        <h2 className="col-12 sectionHeader content">Projects</h2>
        <div className="col-lg-4 col-md-6 col-sm-8 col-xs-10 d-flex flex-wrap justify-content-center">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              className={`btn btn-light col-${category.size} m-1`}
            >
              <span
                onClick={() => {
                  categoryClickHandler(category.name);
                }}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>

        <Projects />
      </section>
    </div>
  );
}

export default Portfolio;
