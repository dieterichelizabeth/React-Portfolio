import React from "react";

function Resume() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <a
        href={require("../../assets/resume/resume.pdf")}
        download="Dieterich-Elizabeth-Resume"
        className="col-12 text-center"
      >
        Download PDF
      </a>

      <div className="col-lg-6 col-md-10 justify-content-center my-4 project-animation">
        <img src={require(`../../assets/contact/page1.png`)} alt="" />
        <img src={require(`../../assets/contact/page2.png`)} alt="" />
      </div>
    </div>
  );
}

export default Resume;
