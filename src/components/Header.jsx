import React, { useState, useEffect } from "react";
import gh from "../assets/logo.png";
import "../components/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiSearch} from 'react-icons/fi';

const Header = (props) => {
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
              <Link to="/help-support">Help and Support</Link>{" "}
            </li>{" "}
            <li>
              <Link to="/">Find a location</Link>{" "}
            </li>{" "}
            <li> <FiSearch size="20px"/> </li>{" "}
            <li>
              {" "}
              <button  className="login" type="submit" onClick={props.onButtonClick}>
                Login
              </button>
            </li>
          </ul>{" "}
        </nav>{" "}
<hr ></hr>
        <div className={`sublist ${sticky}`}>
          <ul className={`subblist ${stickyback}`}>
            <li> Home </li> <li> Ship </li> <li> Track </li> {" "}
            <li style={{marginLeft:'50rem', fontSize:'13px'}} >
              {" "}
              <Link to="/register" className="register_Hover" style={{textDecoration:'none'}}>Register</Link>
            </li>
          </ul>{" "}

        </div>{" "}
     {/* { show ? <Login/> : ''} */}
      </div>
    </>
  );
};

export default Header;
