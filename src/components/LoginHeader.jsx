import React, { useState, useEffect } from "react";
import gh from "../assets/logo.png";
import "../components/Header.css";
import {Link} from 'react-router-dom';
import Login from "./Login";
import { GiHamburgerMenu, GiSouthAfricaFlag } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";
import { FaGripLinesVertical } from "react-icons/fa";
import ShipDropdown from "./shipmentFiles/ShipDropdown";
import TrackDropdown from "./shipmentFiles/TrackDropdown";
import ManageShipment from "./shipmentFiles/ManageShipment";
import { ShipmentSettings } from "./loginFiles/ShipmentSettings";
const LoginHeader = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [sticky, setSticky] = useState("");
  const [show, setShow] = useState(false);
  const [shipdropdown, setShipDropdown] = useState(false)
  const [trackdropdown, setTrackDropdown] = useState(false)
  const [managedown, setManagedown] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [shipment,setShipment] = useState(false);
  const handleBlur = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    window.addEventListener("scroll", stickNavsize);
    
    return () => {
      window.removeEventListener("scoll", stickyNavbar);
      window.removeEventListener("scoll", stickNavsize);
      window.removeEventListener("scoll", stickyback);
    };
  }, []);

  const stickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10 ? setStickyClass("stickynav") : setStickyClass("");
    }
  };
  const stickNavsize = () => {
    window.scrollY > 0 ? setSticky("stickysiz") : setSticky("");
  };
  const stickyback = () => {
    window.scrollY > 10 ? setSticky("stickyback") : setSticky("");
  };

  // const handleShow = (e) => {
  //   e.preventDefault();
  //   setShow(true);
  // };
  function shipdownVisible(){
    setShipDropdown(shipdropdown => !shipdropdown)
  }; 
  function shipdownInvisible(){
    setShipDropdown(false)
  }; 
  function trackdownVisible(){
    setTrackDropdown(trackdropdown => !trackdropdown)
  }; 
 
  return (
    <>
      <div className={`main example ${stickyClass}`} >
        <nav className="header" onClick={()=> {setManagedown(false); setShipDropdown(false);setTrackDropdown(false); }}>
          <a href="/">
            <img src={gh} alt="Website logo" />
          </a>{" "}
          <ul className="Ulist">
            <li>
              <Link to="/">Help and Support</Link>{" "}
            </li>{" "}
            <li>
              <Link to="/shipment">Find a location</Link>{" "}
            </li>{" "}
            <li>
              <FaGripLinesVertical />
            </li>
            <li>
              <FiSearch size="20px" />{" "}
            </li>{" "}
            <li>
              <FaGripLinesVertical color="white" />
            </li>
            <li style={{ display: "flex", gap: "9px" }}>
              <p>English</p> <GiSouthAfricaFlag color="pink" />{" "}
            </li>
          </ul>{" "}
        </nav>{" "}
        <hr />
        <div className={`sublist ${sticky}`} >
          <ul className={`subblist ${stickyback}`} onBlur={handleBlur} >
            <li> <Link to="/">Home</Link></li> 
            <li onClick={()=> {setTrackDropdown(false); setShipDropdown(!shipdropdown);setManagedown(false)}} style={{transition:'0.2s ease'}}> Ship </li>
            {shipdropdown && <ShipDropdown/>}
            <li onClick={()=> {setTrackDropdown(!trackdropdown); setShipDropdown(false);setManagedown(false)}} style={{transition:'0.2s ease'}}> Track </li>
            {trackdropdown && <TrackDropdown/>}
            <li onClick={()=> {setManagedown(!managedown); setShipDropdown(false);setTrackDropdown(false); }} style={{transition:'0.2s ease'}}>
              {" "}
              Manage Shipment{" "}
              <b
                style={{
                  color: "white",
                  backgroundColor: "rgb(71, 237, 71)",
                  padding: "4px 8px 4px 8px",
                  textAlign: "center",
                  borderRadius: "50%"
                }}
              >
                5
              </b>
            </li>{" "}
            {managedown && <ManageShipment/>}

            <div style={{ marginLeft: "23rem", display: "flex", alignItems: "center" }} onClick={()=> {setManagedown(false); setShipDropdown(false);setTrackDropdown(false); }}>
              <li onClick={()=> {setManagedown(false); setShipDropdown(false);setTrackDropdown(false); }}>
                {" "}
                <Link  to ="#" className="register_Hover" style={{ textDecoration: "none", fontSize: "13px" }}>
                  Hobort MyAccount
                </Link>
              </li >
              <li onClick={()=> {setManagedown(false); setShipDropdown(false);setTrackDropdown(false); setShipment(!shipment)}}>
                {" "}
                <Link to="#" className="register_Hover" style={{ textDecoration: "none", fontSize: "13px" }}>
                  My Shipment Settings
                </Link>
              </li >
              {shipment && <ShipmentSettings/>}

              <li onClick={()=> {setManagedown(false); setShipDropdown(false);setTrackDropdown(false); }}>
                {" "}
                <Link to="/register" className="register_Hover" style={{ textDecoration: "none", fontSize: "13px" }}>
                  <IoIosPerson /> MyProfile
                </Link>
              </li>
            </div>
          </ul>{" "}
        </div>{" "}
        {show ? <Login /> : ""}
      </div>
    </>
  );
};

export default LoginHeader;
