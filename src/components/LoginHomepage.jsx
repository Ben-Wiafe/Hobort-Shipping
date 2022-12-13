import React, {useState} from "react";
import "./loginhomepage.css";
import Footer from './Footer';
import ShipPage from './loginFiles/Create_from_ship';
import Create_from_past from './loginFiles/Create_from_past';
import Create_from_fav from './loginFiles/Create_from_fav';
import Get_quote from "./loginFiles/get_quote";
import Schedule_pickup from "./loginFiles/schedule_pickup";
import LoginHeader from "./LoginHeader";



const LoginHomepage = () => {
 
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (

   <>
   <LoginHeader/>
   <div style={{ margin: "auto", width: "80%" }}>
      <h2 style={{ fontSize: "22px",margin: '30px 0 20px' }}>Welcome to Hobort+</h2>
      <div
        style={{
   
          display: "flex",
          boxShadow: "2px 1px 10px 1px rgb(240,233,233)",
          marginTop: "10px",
          padding:'20px',
          flex: "0 1 autos"
        }}
      >
        <div style={{ width: "74%" }}>
          <div><span style={{ marginRight: "5px" }}>
            <button style={{ padding: "7px 12px 8px", border: "1px solid orange",borderTopRightRadius:'3px', }} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
              Create a New Shipment
            </button>
          </span>
          <span style={{ marginRight: "5px" }}>
            <button style={{ padding: "5px 12px 8px", border: "1px solid orange",borderTopRightRadius:'3px'}}  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>
              Create from Favorite
            </button>
          </span>
          <span style={{ marginRight: "5px" }}>
            <button style={{ padding: "7px 12px 8px", border: "1px solid orange",borderTopRightRadius:'3px',  }}  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>
              Create from Past
            </button>
          </span>
          <span style={{ marginRight: "5px" }}>
            <button style={{ padding: "7px 12px 8px", border: "1px solid orange",borderTopRightRadius:'3px',   }}  className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}>
              Schedule a Pickup
            </button>
          </span>
          <span >
            <button style={{ padding: "7px 12px 8px", border: "1px solid orange",borderTopRightRadius:'3px',   }}  className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}>
              Get a quote
            </button>
          </span>
          </div>
          <div style={{ backgroundColor: "#666", padding: "3rem 0px 2rem 1rem", display: "flex", borderColor:'green', borderTopWidth:'4px'}}>
           <ShipPage style={{display: toggleState === 1 ? "block" : "none"}}/>
           <Create_from_fav style={{display: toggleState === 2 ? "block" : "none", margin:'auto'}}/>
           <Create_from_past style={{display: toggleState === 3 ? "block" : "none", margin:'auto'}}/>
           <Schedule_pickup style={{display: toggleState === 4 ? "block" : "none"}}/>
           <Get_quote style={{display: toggleState === 5 ? "block" : "none", }}/>

          </div>
        </div>
        <div>
          <div style={{ flexGrow: "0.3", marginLeft: "2rem", width: "120%" }}>
            <h3> My Shipments</h3>
            <h5 style={{ fontSize: "80%", fontWeight: "normal", marginBottom: "12px" }}>Past 90 days of activity</h5>
            <a href="#" className="viewShipment">
              {" "}
              <i className="fa-solid fa-caret-right" style={{ marginBottom: "15px" }} /> View All Shipment
            </a>
            <hr style={{ margin: "20px 0", borderBottom: "0px solid #ccc", clear: "both", width: "200px" }} />
            <p style={{ marginBottom: "15px" }}>Track</p>

            <textarea
              name="trackShipment"
              id="trackship"
              rows="3"
              cols-="50"
              placeholder="Enter up to 10 numbers, separated by comma or return "
              required
              className="textArea"
            />

            <br />
            <label htmlFor="trackship">
              <button className="trackButton"> Track</button>
            </label>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", boxShadow: "-3px 3px 6px 3px rgb(240,233,233)", marginTop: "10px", flex: "0 1 auto", marginBottom:'4rem' }}>
        <div style={{ padding: "1rem", flexGrow: "1" }}>
          <div>
            <h3 style={{ fontSize: "18psx"}}> Shipments Requiring Action</h3>
            <small>Shipments not yet submitted to DHL</small>
            <div>
              {" "}
              <button style={{ backgroundColor: "#fd7e14", padding: "8px", border: "0", marginTop: "10px" }}>
                My Shipments
              </button>
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "2rem",
                borderTopColor: "#fd7e14",
                borderTopWidth: "4px",
                margin: "0px"
              }}
            >
              <div style={{ padding: "15px", fontSize: "14px", textAlign: "left", border: "1px solid #ccc" }}>
                No Shipments requiring your action
              </div>
            </div>
          </div>

          <div style={{ marginTop: "25px" }}>
            <h3 style={{ fontSize: "18px"}}> In Transit and Ready to Ship</h3>
            <small>Shipments submitted to DH but not yet delivered</small>
            <div>
              {" "}
              <button style={{ backgroundColor: "#fd7e14", padding: "8px", border: "0", marginTop: "10px" }}>
                My Shipments
              </button>
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "2rem",
                borderTopColor: "#fd7e14",
                borderTopWidth: "4px",
                margin: "0px"
              }}
            >
              <div style={{ padding: "15px", fontSize: "14px", textAlign: "left", border: "1px solid #ccc" }}>
                <p>No delivered shipments currently submitted to DHL</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flexGrow: "0.3", padding: "1.4rem" }}>
          <h3 style={{fontSize:'18px', marginBottom:'15spx'}}>My Pickups</h3>
          <h4 style={{fontSize:'16px', marginBottom:'10px'}}>Upcoming</h4>
          <p style={{fontSize:'14px', paddingBottom:'20px', borderBottom:'1px solid #ccc'}}>No pickups</p>

          <br />
          <h4 style={{fontSize:'16px', marginBottom:'10px'}}>Previous Pickups</h4>
          <p style={{fontSize:'14px', color:'#333'}}>No pickups</p>
          <a href="" style={{ float: "right", color:'#007acc',transition:'all .25s', cursor:'pointer', fontSize:'14px', textDecoration:'none' }}>
            View All
          </a>
        
<br></br>
          <h3 style={{ fontSize:'18px',fontFamily:'Arial,Helvetica,sans-serif',marginTop:'110px', marginBottom:'15px'}}>Quick Links</h3>
          <br />
          <a href="#" style={{padding:'5px 8px', fontSize:'12px', color:'#7a7a7a', borderColor:'#7a7a7a',fontWeight:'bold', background:'#fff', display:'inline-block', margin:'0', cursor:'pointer', textAlign:'center', border:'1px solid transparent',borderRadius:'2px', outline:'none', verticalAlign:'middle', textDecoration:'none'}}>Add or Edit Quick Links</a>
        </div>
      </div>
      <Footer/>
    </div>
   </>
  );
};

export default LoginHomepage;
