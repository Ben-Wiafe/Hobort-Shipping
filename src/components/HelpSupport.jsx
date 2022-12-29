import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import "./helpsupport.css";
import { Link } from "react-router-dom";
import ShippingAdvice from "./helpCard/ShippingAdvice";
// import CustomClearance from "./helpCard/CustomClearance";
// import ContactUs from "./helpCard/ContactUs";
// import Faq from "./helpCard/Faq";
const HelpSupport = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [helpCards, setHelpCards] = useState(false);
  const [customCards, setCustomCards] = useState(false);
  const [faqCards, setFaqCards] = useState(false);
  const [contactCards, setContactCards] = useState(false);

  const [selected, setSelected] = useState(1);
  const handleClick1 = index => {
    setHelpCards(true);
    setCustomCards(false);
    setFaqCards(false);
    setContactCards(false);
    setSelected(index);
  };
  const handleClick2 = index => {
    setCustomCards(true);
    setHelpCards(false);
    setFaqCards(false);
    setContactCards(false);
    setSelected(index);
  };
  const handleClick3 = index => {
    setFaqCards(true);
    setHelpCards(false);
    setContactCards(false);
    setCustomCards(false);
    setSelected(index);
  };
  const handleClick4 = index => {
    setContactCards(true);
    setHelpCards(false);
    setFaqCards(false);
    setCustomCards(false);
    setSelected(index);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Header onButtonClick={() => setModalOpen(!modalOpen)} /> {modalOpen && <Login onClose={() => setModalOpen(false)} />}{" "}
      <div style={{ width: "85%", margin: "auto", marginTop: "40px", padding: "10px" }}>
        <h1 style={{ margin: "2px 0px 20px", fontSize: "35px", lineHeight: "0.75", color: "#000" }}> Help and Support </h1>{" "}
        <br />
        <div
          style={{
            width: "90%",
            flexWrap: "nowrap",
            display: "flex",
            textAlign: "center",
            borderRadius: "3.5px"
          }}
          className="link"
        >
          <div>
            <Link
              to="/help-support/helpcard"
              onClick={handleClick1}
              className={location.pathname === "/help-support/helpcard" ? " defaul activeBottom" : "default"}
            >
              Shipping Advice
            </Link>
          </div>
          <div>
            <Link
              to={"/help-support/customcard"}
              onClick={handleClick2}
              className={location.pathname === "/help-support/customcard" ? "defaul activeBottom" : "default"}
            >
              Customs Clearance Advice
            </Link>
          </div>
          <div>
            <Link
              to={"/help-support/faq"}
              onClick={handleClick3}
              className={location.pathname === "/help-support/faq" ? "defaul activeBottom" : "default"}
            >
              FAQ
            </Link>
          </div>
          <div>
            <Link
              to={"/help-support/contactcard"}
              onClick={handleClick4}
              className={location.pathname === "/help-support/contactcard" ? "defaul activeBottom" : "default"}
            >
              Contact Us
            </Link>
          </div>
        </div>{" "}
        <br />
        <br />
        {helpCards && <ShippingAdvice />}
        {/* {contactCards && <ContactUs />}
        {faqCards && <Faq />}
        {customCards && <CustomClearance />} */}
      
        
      </div>{" "}
    </div>
  );
};

export default HelpSupport;
