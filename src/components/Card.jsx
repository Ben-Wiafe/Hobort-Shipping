import React from "react";
import "./card.css";
const Card = () => {
  return (
    <div className="contain">
      <div className="card">
        <div className="icontext">
          <i className="fa-solid fa-calendar-week"></i>
          <div className="text">
            <h4>Get Quote</h4>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="icontext">
        <i class="fa-solid fa-globe"></i>
                  <div className="text">
            <h4>Delivery services</h4>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="icontext">
        <i class="fa-solid fa-location-dot"></i>
        <div className="text">
            <h4>Find a location </h4>
          </div>
        </div>
      </div>
      <div className="card">
      <form>
      <input type="text" placeholder="Track Your Shipments" className="cardInputt"/>
      <label>Enter tracking number(s)</label>
      <button type="submit" className="">Track</button>
    </form>
      </div>
      <div>
     
      </div>
     
    </div>
  );
};

export default Card;
