import React from "react";
import "./Main.css";
import coverimg from "../images/landing-page-girl.png";

const Main = () => {
  
  return (
    <div className="main" id="main">
      <img src={coverimg} className="coverimg" />
      <div className="aside-section-main">
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand songs with one click</p>
        <button>
          <a href="#join">Join Now</a>
        </button>
      </div>

      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
    </div>
  );
};

export default Main;
