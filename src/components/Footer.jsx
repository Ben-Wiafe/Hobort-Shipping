import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contENT">
        <div className="link-boxes">
          <ul className="box">
            <li className="linkhead">CONTACT AND SUPPORT </li>
            <li>
              {" "}
              <a href="#">Help and Support</a>
            </li>
            <li>
              {" "}
              <a href="#">FAQs</a>
            </li>

            <li>
              {" "}
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              {" "}
              <a href="#">Email uS</a>
            </li>
          </ul>
          <ul className="box">
            <li className="linkhead">CONTACT US</li>
            <li>
              <i className="fa-solid fa-phone-volume" />
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot" />

              <a href="#">
                US OFFICE: 815 Progress Ct Ste A
                     Lawrenceville GA 30043
              </a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot" />

              <a href="#">GHANA OFFICE: JWVQ+9WR,Sakumono</a>
            </li>
           
          </ul>
          <ul className="box">
            <li className="linkhead"> COMPANY </li>
            <li>
              {" "}
              <a href="#">Our History</a>
            </li>

            <li>
              {" "}
              <a href="#">Company Achievement</a>
            </li>
            <li>
              {" "}
              <a href="#">Meet The Team</a>
            </li>
            <li>
              {" "}
              <a href="#">Success Story</a>
            </li>
          </ul>

          <div style={{fontSize:'15px', borderLeft:'1px solid black', height:'120px'}}></div>
       
            <div className="line">
              <ul className="box">
                <li className="linkhead" style={{fontSize:'15px'}}>Post Hobort Group</li>
                <li>
                  {" "}
                  <a href="#">About Hobort</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Press</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Terms and Conditions </a>
                </li>
                <li>
                  {" "}
                  <a href="#">Legal Notice</a>
                </li>
              </ul>
            </div>
         
        </div>
      </div>
      <div className="downfooter" />
      <div className="lastfooter">
    
            <div>
            <span>FOLLOW US </span>
          <span>
            <i className="fa-solid fa-location-dot" />
          </span>
          <span>
            <i className="fa-solid fa-location-dot" />
          </span>
          <span>
            <i className="fa-solid fa-location-dot" />
          </span>
            </div>
            <div>
                <h4>Cookies Settings</h4>
            </div>
            <div>
                <h4>Copyright 2021 @ <a href="#">Hobort Shipping- All rights reserved</a></h4>
            </div>
        </div>
      </div>
    
  );
};

export default Footer;
