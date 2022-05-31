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
            <div className="icon-with-text">
              <img src={charts} alt="charts icon" />
              <p>Charts</p>
            </div>
            <div className="icon-with-text">
              <img src={albums} alt="albums icon" />
              <p>Albums</p>
            </div>
            <div className="icon-with-text">
              <img src={more} alt="more icon" />
              <p>More</p>
            </div>
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
