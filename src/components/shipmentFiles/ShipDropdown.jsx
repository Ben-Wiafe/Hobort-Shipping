import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const ShipDropdown = () => {
  const [shipdropdown, setShipDropdown] = useState(false)


        return (
          <div style={{ position:'absolute', top:'123px', left:'120px', width:'60%', zIndex:'999px', }}>
            {/* Button to open the dropdown menu */}
  
              <ul style={{backgroundColor:'#333',justifyContent: 'space-between',width:"90%",padding:'15px',listStyle:'none', color:'white', display:'flex', boxSizing:'content-box' , lineHeight:'20px', borderRadius:'5px', marginLeft:'70px'}} className="shipdropdown">
                {/* Dropdown menu options */}
                <div style={{fontSize:'140px'}}>
                <li style={{color:'gray', fontSize:'12px', fontWeight:'bold',cursor:'auto'}}> GET STARTED NOW</li>
                <li><Link to="/loginhome/createshipment">Create a Shipment</Link></li>
                <li onClick={()=> {setTrackDropdown(false)}}><Link to="/loginhome/createFromPast">Create Shipment from the past</Link></li>
                <li><Link to="/loginhome/createFromFav">Create Shipment from  Favorite</Link></li>
                <li><Link to="/loginhome/getQuote">Get a Rate and Time Quote</Link></li>
                <li><Link to="/loginhome/schedulePickUp">Schedule a Pickup</Link></li>
                <li><Link to="">Order Supplies</Link></li>

                </div>
                <div>
                <li style={{color:'gray', fontSize:'12px', fontWeight:'bold', cursor:'auto'}}>EXPLORE</li>
                <li> <Link>Delivery Services</Link></li>
                <li><Link>Optional Services</Link></li>
                <li><Link>Customs Services</Link></li>
               <li><Link>Surcharges</Link></li>
               <li><Link>Solutions</Link></li>
            




                </div>
                <div>
                <li style={{color:'gray', fontSize:'12px', fontWeight:'bold',cursor:'auto'}}>MYHOBORT+LEARN</li>
                <li><Link>About MyHobort+</Link></li>
                <li><Link>What’s New with MyHobort+</Link></li>
                </div>
              </ul>
       
          </div>
        );
            };

export default ShipDropdown

