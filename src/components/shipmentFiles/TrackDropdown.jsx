import React, { useState } from "react";

const TrackDropdown = () => {
  // Create state for the dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the dropdown menu
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div style={{ position:'absolute', top:'123px', left:'205px', width:'60%', zIndex:'999px', }}>
   
   <ul style={{backgroundColor:'#333',justifyContent: 'space-between',width:"25%",padding:'15px',listStyle:'none', color:'white', boxSizing:'content-box' , lineHeight:'20px', borderRadius:'5px', marginLeft:'70px'}} className="shipdropdown">
                {/* Dropdown menu options */}
                <li>Track Shipment</li>
                <li>Track By Reference</li>
               
              </ul>
    

    </div>
  );
};

export default TrackDropdown;
