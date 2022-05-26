import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <aside>
        <a href="#main">
          <img src={logo} alt="Logo" />
        </a>
        <a href="#main">
          <h1>Soundwave</h1>
        </a>
      </aside>

      <aside className="right-section-navbar">
        <a href="#discover">Discover</a>
        <a href="#join">Join</a>
      </aside>
    </div>
  );
};

export default Navbar;
