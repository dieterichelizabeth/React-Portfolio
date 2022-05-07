import React from "react";

function Projects(currentCategory) {
  // Set CurrentCategory to Let variable

  // Create function to filter all categories in projectList language
  // Call function in map?

  const projectList = [
    {
      name: `Weathering With API's`,
      language: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      image: "notesDelivery",
    },
    {
      name: "Notes Delivery Service",
      category: "Express",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      image: "notesDelivery",
    },
    {
      name: "Budget Tracker",
      category: "MondoDB",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      image: "notesDelivery",
    },
    {
      name: "TechBlog Bebop",
      category: "MySQL Express",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      image: "notesDelivery",
    },
    {
      name: "Workday Scheduler",
      category: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      image: "notesDelivery",
    },
    {
      name: "Zoolander",
      category: "MySQL Express",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      image: "notesDelivery",
    },
  ];

  return (
    <div className="col-12 d-flex flex-wrap justify-content-center ">
      {projectList.map((project) => (
        <div
          className="col-lg-4 col-md-6 col-sm-10 d-flex flex-wrap content projectCard"
          key={project.name}
        >
          <img
            src={require(`../../assets/small/${project.image}.png`)}
            alt=""
          />
          <p className="projectTitle">{project.name}</p>
          <p className="description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
