import React from "react";
import "./Join.css";
import Footer from "./Footer";
import Form from "./Form.js";

const Join = () => {
  return (
    <>
      <div className="join" id="join">
        <div>
          <h1>Join the <span>fun.</span></h1>
        <p>Stream over 20 thousand songs with just one click</p>
        <button>
          <a href="#join-btn">Join Now</a>
        </button>
        </div>

        <div>
          <Form />
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Join;
