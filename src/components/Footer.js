import React from "react";
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons-left">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>

      <div className="icons-right">
        <div className="social-media-icon">
          <img src={twitter} />
          <a href="#">Twitter</a>
        </div>
        <div className="social-media-icon">
          <img src={facebook} />
          <a href="#">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
