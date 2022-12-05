import React from "react";
import "../components/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="sectCont">
        <p className="heroText">
          {" "}
          Welcome to <br />
          <h1>Hobort Express</h1> Fast Door-to-Door Courier
          <br />
          Delivered
        </p>
      </div>
      
      <div className="started">
        <p>Get Started Now</p>
        <div className="herobutton">
          <button>Create a New Shipment</button>
          <button>Get a Rate and Time Quote</button>
          <button>Schedule a Pickup</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
