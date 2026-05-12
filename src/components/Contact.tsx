import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:shivrajdave99@gmail.com"
                data-cursor="disable"
              >
                Email — shivrajdave99@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+14376961901"
                data-cursor="disable"
              >
                Phone — 437-696-1901
              </a>
            </p>
            <h4>Education</h4>
            <p>
              MEng in Electrical and Computer Engineering, University of Windsor — 2025–2026
            </p>
            <p>
              B.Tech in Electrical Engineering, Charotar University of Science and Technology — 2017–2021
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/YOUR_GITHUB_HANDLE"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shivrajdave/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/shivraj_dave/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shivraj Dave</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;