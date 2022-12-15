import React, { useState } from "react";
import { Link } from "react-router-dom";
export const ShipmentSettings = () => {
  const [shipSetting, setShipSettings] = useState(false);

  return (
    <div style={{ position: "absolute", top: "123px", left: "500px", width: "60%", zIndex: "999px" }}>
      {/* Button to open the dropdown menu */}

      <ul
        style={{
          backgroundColor: "#333",
          justifyContent: "space-between",
          width: "90%",
          padding: "15px",
          listStyle: "none",
          color: "white",
          display: "flex",
          boxSizing: "content-box",
          lineHeight: "20px",
          borderRadius: "5px",
          marginLeft: "70px"
        }}
        className="shipdropdown"
      >
        {/* Dropdown menu options */}
        <div style={{ fontSize: "140px" }}>
          <li style={{ color: "gray", fontSize: "12px", fontWeight: "bold", cursor: "auto" }}> SHIPMENT DEFAULTS</li>
          <li>
            <Link to="/loginhome/createshipment">Delivery Options
</Link>
          </li>
          <li
            onClick={() => {
              setTrackDropdown(false);
            }}
          >
            <Link to="/loginhome/createFromPast">Shipment Protection
</Link>
          </li>
          <li>
            <Link to="/loginhome/createFromFav">Customs Clearance
</Link>
          </li>
          <li>
            <Link to="/loginhome/getQuote">Declarations
</Link>
          </li>
          <li>
            <Link to="/loginhome/schedulePickUp">Customs Declaration
</Link>
          </li>
          <li>
            <Link to="">Courier Pickups
</Link>
          </li>
          <li>Return Shipments</li>
            <li>Save Shipments</li>
            <li>Currency and Measurement
</li>
          </div>
        <div>
          <li style={{ color: "gray", fontSize: "12px", fontWeight: "bold", cursor: "auto" }}>EXPLORE</li>
          <li>
            {" "}
            <Link>Delivery Services</Link>
          </li>
          <li>
            <Link>Optional Services</Link>
          </li>
          <li>
            <Link>Customs Services</Link>
          </li>
          <li>
            <Link>Surcharges</Link>
          </li>
          <li>
            <Link>Solutions</Link>
          </li>
        </div>
        <div>
          <li style={{ color: "gray", fontSize: "12px", fontWeight: "bold", cursor: "auto" }}>MYHOBORT+LEARN</li>
          <li>
            <Link>About MyHobort+</Link>
          </li>
          <li>
            <Link>What’s New with MyHobort+</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};


// Addresses
// MY SAVED SETTINGS
// My DHL Accounts
// Authorized Account Usage
// Packaging Settings
// Shipment References
// Printer Settings
// Notifications and Sharing
// MY CUSTOMS CLEARANCE SETTINGS
// Customs Invoice Templates
// Shipment Tax IDs
// My Product/Item List
// Digital Customs Invoices