import React, { useState, useEffect } from "react";
import gh from "../assets/logo.png";
import "../components/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
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
            <li> Services </li> <li> View/Pay Bill</li>{" "}
            <li>
              {" "}
              <button  className="login" type="submit" onClick={()=> setShow(!show)}>
                Logout
              </button>
            </li>
          </ul>{" "}
          <GiHamburgerMenu className="hamburger"/>
          <ul className="Ulis">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>{" "}
            <li>
              <Link to="/about">About Us</Link>{" "}
            </li>{" "}
            <li> Services </li> <li> FAQ </li>{" "}
            <li>
              {" "}
              <button  className="login" type="submit" onClick={()=> setShow(!show)}>
                Login
              </button>
            </li>
          </ul>{""}
        </nav>{" "}
        <div className={`sublist ${sticky}`}>
          <ul className={`subblist ${stickyback}`}>
            <li> Home </li> <li> Ship </li> <li> Track </li> <li> Manage Shipment </li>{" "}
            <li style={{marginLeft:'50rem'}}>
              {" "}
              <Link to="/register">My Profile</Link>
            </li>
          </ul>{" "}

        </div>{" "}
     { show ? <Login/> : ''}
      </div>
    </>
  );
};

export default Header;
