import React from "react";

function Projects() {
  // Project Information
  const projectList = [
    {
      name: `Weathering With API's`,
      category: "JavaScript",
      languages: "HTML, CSS, JavaScript",
      description:
        "This project uses JavaScript to source weather data from the Open Weather Api, then dynamically display to the user. User's are able to search by city name in the search bar.",
      image: "weatherDashboard",
      githubLink: "https://github.com/dieterichelizabeth/weathering-with-apis",
      deployed: "https://weathering-with-apis.herokuapp.com/",
    },
    {
      name: "Zoolander",
      category: "MySQL Express",
      languages: "JavaScript, Handlebars, Swiper.js, MySQL, Sequelize",
      description:
        "Zoolander is a fun, relaxing Web Application where users can unwind by watching live animal cameras either during or after a long day. Users are able to create an account, leave a comment for the animals, and favorite videos so they appear in their dashboard.",
      image: "zoolander",
      githubLink: "https://github.com/JFlo1981/Virtual-Zoo",
      deployed: "https://virtual-zoo-1234.herokuapp.com/",
    },
    {
      name: "TechBlog Bebop",
      category: "MySQL Express",
      languages: "Node.js, Express.js, Express-Session, Sequelize",
      description:
        "TechBlog Bebop is a CMS-style blog where developers can publish their blog posts and comment on other developers' posts as well. Users can create an account to share article links, blog posts, their thoughts and opinions.",
      image: "techBlog",
      githubLink: "https://github.com/dieterichelizabeth/TechBlog-Bebop",
      deployed: "https://agile-lake-02431.herokuapp.com/",
    },
    {
      name: "Budget Tracker",
      category: "MondoDB",
      languages: "Node.js, MongoDB, Mongoose",
      description:
        "Budget Tracker gives users the ability to track their budget (Expenses and Deposits) on vacation; with or without an internet connection.",
      image: "budgetTracker",
      githubLink: "https://github.com/dieterichelizabeth/Budget-Tracker",
      deployed: "https://budget-tracker-applet.herokuapp.com/",
    },
    {
      name: "Notes Delivery Service",
      category: "Express",
      languages: "Node.js, Sequelize, Express.js",
      description:
        "Note Taker is an application that can be used to write and save notes. A user can open the application, and click on the link to the notes page.",
      image: "notesDelivery",
      githubLink:
        "https://github.com/dieterichelizabeth/notes-delivery-service",
      deployed: "https://nameless-spire-63081.herokuapp.com/",
    },
    {
      name: "Workday Scheduler",
      languages: "Bootstrap, JQuery, HTML",
      category: "Javascript",
      description:
        "Workday timetable is simple calendar app that allows the user to save events for each hour of the day. The app keeps track of time by changing the colors of the taskbox as each hour passes.",
      image: "workdaySchedule",
      githubLink: "https://dieterichelizabeth.github.io/workday-timetable/",
      deployed: "https://dieterichelizabeth.github.io/workday-timetable/",
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
          <p className="projectTitle">
            {project.name}
            <span>
              <a
                href={project.githubLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="bi bi-github text-dark ml-2"></i>
              </a>
            </span>
          </p>
          <p className="description">{project.description}</p>
          <p className="languages">{project.languages}</p>
          <a
            href={project.deployed}
            rel="noopener noreferrer"
            target="_blank"
            className="col-12 text-center"
          >
            View Deployed Application
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
