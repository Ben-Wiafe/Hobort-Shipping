import React from "react";
import "./marque.css";

const Marque = () => {
  return (
    <div className="containe">
      <div className="marqueetext">
        <marquee direction="right" behavior="alternate">
          Hobort Shipping services is part of a worldwide group of transport.
        </marquee>
      </div>
    </div>
  );
};

export default Marque;
