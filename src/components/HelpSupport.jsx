import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import "./helpsupport.css";

const HelpSupport = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showCards,setShowCards] = useState(false);
const [selected, setSelected] = useState(false);
  const handleClick1 = () => {
    setSelected(true);
    setShowCards(true);
  }
  const handleClick2 = () => {
    setSelected(t);
    setShowCards(true);
  }
  
  const handleClick3 = () => {
    setSelected(true);
    setShowCards(true);
  }
  
  const handleClick4 = () => {
    setSelected(true);
    setShowCards(true);
  }
  
  
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header onButtonClick={() => setModalOpen(!modalOpen)} /> {modalOpen && <Login onClose={() => setModalOpen(false)} />}
      <div style={{ width: "85%", margin: "auto", marginTop: "40px", padding: "10px" }}>
        <h1 style={{ margin: "2px 0px 20px", fontSize: "35px", lineHeight: "0.75", color: "#000" }}>Help and Support </h1>{" "}
        <br />
        <table
          style={{
            width: "99%",
            borderCollapse: "separate",
            borderRadius: "3.5px",
            borderSpacing: "0",
            tableLayout: "fixed",
            textAlign: "center",
            boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
            display: "table",
            fontSize: "14px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "14px",
            borderColor: "grey",

          }}
        >
          <tbody>
            <tr>
              <td onClick={handleClick1} className={selected ? 'tabb' : 'tab-title'}>
                {" "}
                <div  style={{padding:'9px'}}> Shipping Advice </div>
              </td>
              <td onClick={handleClick2} className={selected ? 'tabb' : 'tab-title'}>
              <div>Customs Clearance Advice </div>
              </td>{" "}
              <td onClick={handleClick3} className={selected ? 'tabb' : 'tab-title'}>
                {" "}
                <div >FAQs</div>{" "}
              </td>{" "}
              <td onClick={handleClick4} className={selected ? 'tabb' : 'tab-title'}>
                {" "}
                <div >Contact Us</div>{" "}
              </td>
            </tr>{" "}
          </tbody>{" "}
          {showCards && <HelpCard title="Hello Card" content="Non officia sunt labore do quis mollit nisi anim Lorem cupidatat commodo ut commodo ipsum."/>}

        </table>{" "}
      </div>{" "}
    </div>
  );
};

export default HelpSupport;

export function HelpCard({ title, content }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      {" "}
     <h3> {title} </h3> <br />
      <p> {content} </p>{" "}
    </div>
  );
}
