import React from "react";

const FooterVertical = () => {
  return (
    <footer className="vertical">
      <div className="social-icons">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="twitter fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="facebook fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <i className="instagram fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://github.com/baaserosman"
          target="_blank"
          rel="noreferrer"
        >
          <i className="github fab fa-github fa-2x"></i>
        </a>
      </div>

      <div className="copyright">&copy; Copyright 2022</div>
    </footer>
  );
};

export default FooterVertical;
