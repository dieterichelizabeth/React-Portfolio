import React from "react";

function Projects(currentCategory) {
  // Set CurrentCategory to Let variable

  // Create function to filter all categories in projectList language
  // Call function in map?

  // Project Information
  const projectList = [
    {
      name: `Weathering With API's`,
      language: "JavaScript",
      description:
        "This project uses JavaScript to source weather data from the Open Weather Api, then dynamically display to the user. User's are able to search by city name in the search bar.",
      image: "weatherDashboard",
    },
    {
      name: "Zoolander",
      category: "MySQL Express",
      description:
        "Zoolander is a fun, relaxing Web Application where users can unwind by watching live animal cameras either during or after a long day. Users are able to create an account, leave a comment for the animals, and favorite videos so they appear in their dashboard.",
      image: "notesDelivery",
    },
    {
      name: "TechBlog Bebop",
      category: "MySQL Express",
      description:
        "TechBlog Bebop is a CMS-style blog where developers can publish their blog posts and comment on other developers' posts as well. Users can create an account to share article links, blog posts, their thoughts and opinions.",
      image: "notesDelivery",
    },
    {
      name: "Budget Tracker",
      category: "MondoDB",
      description:
        "Budget Tracker gives users the ability to track their budget (Expenses and Deposits) on vacation- with, or without an internet connection. So if users travel to an area with spotty service, they will be able to continue to track their funds.",
      image: "notesDelivery",
    },
    {
      name: "Notes Delivery Service",
      category: "Express",
      description:
        "Note Taker is an application that can be used to write and save notes. A user can open the application, and click on the link to the notes page.",
      image: "notesDelivery",
    },
    {
      name: "Workday Scheduler",
      category: "Javascript",
      description:
        "Workday timetable is simple calendar app that allows the user to save events for each hour of the day. The app keeps track of time by changing the colors of the taskbox as each hour passes.",
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
