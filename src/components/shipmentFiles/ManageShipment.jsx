import React from "react";

const ManageShipment = () => {
  return (
    <div style={{ position: "absolute", top: "123px", left: "300px", width: "60%", zIndex: "999px", transition:'0.3s ease' }}>
      {/* Button to open the dropdown menu */}

      <ul
        style={{
          backgroundColor: "#333",
          justifyContent: "space-between",
          width: "50%",
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
          <li style={{ color: "gray", fontSize: "12px", fontWeight: "bold", cursor: "auto" }}> MY SHIPMENT</li>
          <li>All Shipments</li>
          <li>My Pickups</li>
          <li>Reports</li>
          <li>Get a Rate and Time Quote</li>
        </div>
        <div>
          <li style={{ color: "gray", fontSize: "12px", fontWeight: "bold", cursor: "auto" }}>REQUIRE ACTION</li>
          <li> View All Unsubmitted</li>
        </div>
      </ul>
    </div>
  );
};

export default ManageShipment;
