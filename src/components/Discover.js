import React from "react";
import "./Discover.css";
import charts from "../images/microphone.svg";
import albums from "../images/albums.svg";
import more from "../images/more.svg";
import covers from "../images/covers.jpg";
import Footer from "./Footer.js";

const Discover = () => {
  return (
    <>
      <div className="discover" id="discover">
        <div className="aside-left-section">
          <h1>Discover new music</h1>
          <div className="icons">
            <img src={charts} alt="charts icon" />
            <img src={albums} alt="albums icon" />
            <img src={more} alt="more icon" />
          </div>
          <p>
            By joining you can benefit by listening to the latest albums
            released.
          </p>
        </div>
        <div className="aside-right-image">
          <img src={covers} alt="covers" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
