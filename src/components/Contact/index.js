import React from "react";
import Footer from "../Footer";

function Contact() {
  return (
    <>
      <div className="bar"></div>

      <section className="contact--section">
        <div>
          <h2>Contact Information</h2>
          <p>
            Thank you for viewing my portfolio! If you have any questions please
            reach out, my inbox is always open.
          </p>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/dieterich-e/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <i className="bi bi-linkedin mr-2"></i>
                https://www.linkedin.com/in/dieterich-e/
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dieterichelizabeth"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <i className="bi bi-github mr-2"></i>
                https://github.com/dieterichelizabeth
              </a>
            </li>
            <li>
              <a href="mailto:dieterichelizabeth@gmail.com">
                <i className="bi bi-envelope mr-2"></i>
                dieterichelizabeth@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
