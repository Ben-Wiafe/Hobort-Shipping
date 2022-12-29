import React from "react";
import './carouselcard.css';




const CarouselCard = ({image,head,para,link}) => {
  return (
    <div className="caromain">
    <div className="carocard">
    <img src={image} alt={head}/>
    <div className="carotext">
    <strong className="carohead">{head}</strong>
    <p className="caropara">
      {para} 
    </p>
    <div>
      <a href="#0000" className="carolink">
        <p>{link}</p>
        </a>
    </div>
    </div>
   
  </div>
</div>
  );
};

export default CarouselCard;