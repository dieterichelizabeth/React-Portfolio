import React from "react";
// import Projects from "../Projects";

function Portfolio() {
  const categories = [
    { name: "React.js", size: "4" },
    { name: "MongoDB", size: "4" },
    { name: "Node.js", size: "3" },
    { name: "Express.js", size: "4" },
    { name: "MySQL", size: "3" },
    { name: "JavaScript", size: "4" },
  ];

  const handleClick = () => {
    console.log("click handled");
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
              className="btn btn-light col-4 m-1"
            >
              <span
                onClick={() => {
                  handleClick();
                }}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
