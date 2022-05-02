import React from "react";

function Contact() {
  return (
    <section className="col-12 content">
      <div className="col-12">
        <h2>Contact</h2>
        <p>
          Thank you for viewing my portfolio! <br />
          If you have any questions please reach out, my inbox is always open.
        </p>
        <p>
          <i className="bi bi-linkedin"></i>
          https://www.linkedin.com/in/elizabeth-dieterich-067b55a8/
          <br />
          <i className="bi bi-github"></i> https://github.com/dieterichelizabeth
          <br />
          <i className="bi bi-envelope"></i> dieterichelizabeth@gmail.com
          <br />
          <i className="bi bi-geo-alt"></i> Dallas, TX
        </p>
      </div>
      <div className="col-12">
        <h3 className="contactFormHeader">Say Hello</h3>
        <form action="contact">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            className="formName"
            placeholder="Your Name"
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            className="formEmail"
            placeholder="Example@example.com"
          />
          <br />
          <br />
          <input
            type="submit"
            className="btn btn-outline-dark"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
