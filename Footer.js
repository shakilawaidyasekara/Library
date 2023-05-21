import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              We are a library committed to providing a wide range of books for
              all ages and interests.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact">Contact Form</Link>
              </li>
              <li>
                <a href="mailto:library@example.com">library@example.com</a>
              </li>
              <li>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
