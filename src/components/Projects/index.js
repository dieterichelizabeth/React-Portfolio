// import React, { useState } from "react";

// function Projects() {
//   const [projectList] = [
//     {
//       name: `Weathering With API's`,
//       language: "JavaScript",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//       image: "notesDelivery",
//     },
//     {
//       name: "Notes Delivery Service",
//       category: "Express",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//       image: "notesDelivery",
//     },
//     {
//       name: "Budget Tracker",
//       category: "MondoDB",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//       image: "notesDelivery",
//     },
//     {
//       name: "TechBlog Bebop",
//       category: "MySQL Express",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//       image: "notesDelivery",
//     },
//     {
//       name: "Workday Scheduler",
//       category: "Javascript",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//       image: "notesDelivery",
//     },
//     {
//       name: "Zoolander",
//       category: "MySQL Express",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//       image: "notesDelivery",
//     },
//   ];
//   return (
//     <section className="d-flex flex-wrap justify-content-center projectsSection">
//       <h2 className="col-12 sectionHeader content">Projects</h2>
//       {projectList.map((project, i) => (
//         <div className="col-lg-3 col-md-6 col-sm-10 d-flex flex-wrap content">
//           <img
//             src={require(`../../assets/small/${project.image}.png`)}
//             alt=""
//           />
//           <p className="projectTitle">{project.name}</p>
//           <p className="description">{project.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default Projects;
