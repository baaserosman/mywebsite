import React from "react";

const FooterMiddle = () => {
  return (
    <footer className="middle">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/mustafa-dasdan-a83152224/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="linkedin fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <i className="instagram fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://github.com/dsdnmstf" target="_blank" rel="noreferrer">
          <i className="github fab fa-github fa-2x"></i>
        </a>
      </div>
      <div className="copyright">&copy; Copyright 2022</div>
    </footer>
  );
};

export default FooterMiddle;
