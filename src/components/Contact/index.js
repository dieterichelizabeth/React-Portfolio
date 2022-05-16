import React, { useState } from "react";

function Contact() {
  // Form variables/state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // Handles submit event
  const sumbitHandler = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      alert("Thank you for your submission");
      console.log("Submit Form", formState);
    }
  };

  // Handles user leaving form field
  const onLeave = (event) => {
    if (event.target.id === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`Your ${event.target.id} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.id]: event.target.value });
      console.log("Handle Form", formState);
    }
  };

  // Regex taken from Module 17- matches an email.
  const validateEmail = (email) => {
    var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <section className="col-12 content">
      <div className="col-12">
        <h2>Contact Information</h2>
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
        <h3 className="contactFormHeader">Reach Out</h3>
        <form action="contact" onSubmit={sumbitHandler}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            className="formName"
            placeholder="Your Name"
            defaultValue={name}
            onBlur={onLeave}
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
            defaultValue={email}
            onBlur={onLeave}
          />
          <br />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <input
            type="text"
            id="message"
            className="formMessage"
            defaultValue={message}
            onBlur={onLeave}
          />
          <br />
          <br />
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
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
