import React from "react";
import './proCard.css'
const ProCard = ({image,head,para,link}) => {
  return (
    <div className="promain">
    <div className="procard">
    <img src={image} alt={head}/>
    <div className="protext">
    <strong className="prohead">{head}</strong>
    <p className="propara">
      {para} 
    </p>
    </div>
    <div>
      <a href="#0000" className="prolink">
        <p>{link}</p>
        </a>
    </div>
  </div>
</div>
  );
};

export default ProCard;