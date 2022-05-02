import React from "react";
import project1Image from "../../assets/small/notesDelivery.png";
import project2Image from "../../assets/small/weatherDashboard.png";
import project3Image from "../../assets/small/workdaySchedule.png";

function Projects() {
  return (
    <section class="d-flex flex-wrap justify-content-center projectsSection">
      <h2 class="col-12 sectionHeader content">Projects</h2>

      <div class="col-lg-3 col-md-6 col-sm-10 d-flex flex-wrap content">
        <img src={project1Image} alt="" />
        <p class="projectTitle">
          Notes Delivery Service
          <span>
            <a
              href="https://github.com/dieterichelizabeth/notes-delivery-service"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="bi bi-github text-dark"></i>
            </a>
          </span>
        </p>
        <p class="description">
          Note Taker is an application that can be used to write and save notes.
          A user can open the application, and click on the link to the notes
          page. <br />
          Built with: Node.js | Sequelize | Express.js
        </p>
        <a
          href="https://nameless-spire-63081.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button type="button" class="btn btn-outline-dark">
            View App
          </button>
        </a>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-10 d-flex flex-wrap content">
        <img src={project3Image} alt="" />
        <p class="projectTitle">
          Workday Timetable
          <span>
            <a
              href="https://github.com/dieterichelizabeth/workday-timetable"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="bi bi-github text-dark"></i>
            </a>
          </span>
        </p>
        <p class="description">
          Workday timetable is simple calendar app that allows the user to save
          events for each hour of the day. The app keeps track of time by
          changing the colors of the "taskbox" as each hour passes.
          <br />
          Built with: Bootstrap | jQuery | HTML
        </p>
        <a
          href="https://dieterichelizabeth.github.io/workday-timetable/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button type="button" class="btn btn-outline-dark">
            View App
          </button>
        </a>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-10 d-flex flex-wrap content">
        <img src={project2Image} alt="" />
        <p class="projectTitle">
          Weathering With API's
          <span>
            <a
              href="https://github.com/dieterichelizabeth/weathering-with-apis"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="bi bi-github text-dark"></i>
            </a>
          </span>
        </p>
        <p class="description">
          This project uses JavaScript to source weather data from the "Open
          Weather" Api, then dynamically display to the user. User's are able to
          search by city name in the search bar. <br />
          Built with: HTML | CSS | JavaScript
        </p>
        <a
          href="https://dieterichelizabeth.github.io/weathering-with-apis/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button type="button" class="btn btn-outline-dark">
            View App
          </button>
        </a>
      </div>
    </section>
  );
}

export default Projects;
