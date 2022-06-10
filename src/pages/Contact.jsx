import React from "react";
import Navbar from "../components/Navbar";
import FooterMiddle from "../components/FooterMiddle";
const Contact = () => {
  return (
    <div className="contact-bgImg-container">
      <Navbar />
      <main className="contact">
        <h2>Contact Me ...</h2>
        <div className="contact__list">
          <div className="contact__item">
            <i className="fas fa-envelope"></i> Email
            <div className="text-secondary">baaserosman@gmail.com</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-mobile-alt"></i> Phone
            <div className="text-secondary">+49 179 4594697</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-map-marker-alt"></i> Address
            <div className="text-secondary">01169 Dresden</div>
          </div>
        </div>
      </main>
      <FooterMiddle />
    </div>
  );
};

export default Contact;
