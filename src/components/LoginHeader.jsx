import React, { useState, useEffect } from "react";
import gh from "../assets/logo.png";
import "../components/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import {GiHamburgerMenu,GiSouthAfricaFlag} from 'react-icons/gi';
import {FiSearch} from 'react-icons/fi';
import {IoIosPerson} from 'react-icons/io';
import {FaGripLinesVertical} from 'react-icons/fa'


const LoginHeader = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [sticky, setSticky] = useState("");
  const [show, setShow] = useState(false)

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
      windowHeight > 150 ? setStickyClass("stickynav") : setStickyClass("");
    }
  };
  const stickNavsize = () => {
    window.scrollY > 150 ? setSticky("stickysize") : setSticky("");
  };
  const stickyback = () => {
    window.scrollY > 150 ? setSticky("stickyback") : setSticky("");
  };

  // const handleShow = (e) => {
  //   e.preventDefault();
  //   setShow(true);
  // };



  return (
    <>
      <div className={`main example ${stickyClass}`}>
        <nav className="header">
          <a href="/">
            <img src={gh} alt="Website logo" />
          </a>{" "}
          <ul className="Ulist">
            <li>
              <Link to="/">Help and Support</Link>{" "}
            </li>{" "}
            <li>
              <Link to="/about">Find a location</Link>{" "}
            </li>{" "}
            <li><FaGripLinesVertical/></li>

            <li><FiSearch size="20px"/> </li>{" "}
            <li><FaGripLinesVertical color="white"/></li>

            <li style={{display:'flex', gap:'9px'}}><p>English</p> <GiSouthAfricaFlag color="pink"/> </li>
          </ul>{" "}
        </nav>{" "}
<hr ></hr>
        <div className={`sublist ${sticky}`}>
          <ul className={`subblist ${stickyback}`}>
            <li> Home </li> <li> Ship </li> <li> Track </li><li> Manage Shipment <b style={{color:'white',backgroundColor:'rgb(71, 237, 71)', padding:'4px 8px 4px 8px',textAlign:'center' ,borderRadius:'50%'}}>5</b></li> {" "}
            <div style={{marginLeft:'30rem', display:'flex', alignItems:'center'}}>
           <li>
              {" "}
              <Link to="/register" className="register_Hover" style={{textDecoration:'none',fontSize:'13px'}}>Hobort MyAccount</Link>
            </li>
            <li>
              {" "}
              <Link to="/register" className="register_Hover" style={{textDecoration:'none',fontSize:'13px'}}>My Shipment Settings</Link>
            </li>
            <li>
              {" "}
              <Link to="/register" className="register_Hover" style={{textDecoration:'none',fontSize:'13px'}}><IoIosPerson/> MyProfile</Link>
            </li>
           </div>
            
          </ul>{" "}

        </div>{" "}
     { show ? <Login/> : ''}
      </div>
    </>
  );
};

export default LoginHeader;
