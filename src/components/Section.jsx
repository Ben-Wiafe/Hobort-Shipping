import React from "react";

const Section = () => {
  return (
    <div style={{paddingBlock:'3rem'}}>
        
        <h3>Welcome to Hobort+</h3>
        <div >
            <div>
                <span style={{marginRight:'10px'}}><button style={{padding:'7px 10px 7px 5px',border:'1px solid orange', backgroundColor:'transparent'}}>Create a New Shipment</button></span>        
                <span style={{marginRight:'10px'}}><button style={{padding:'7px 10px 7px 5px',border:'1px solid orange', backgroundColor:'transparent'}}>Create from Favorite</button></span>        
                <span style={{marginRight:'10px'}}><button style={{padding:'7px 10px 7px 5px',border:'1px solid orange', backgroundColor:'transparent'}}>Create from Past</button></span>        
                <span style={{marginRight:'10px'}}><button style={{padding:'7px 10px 7px 5px',border:'1px solid orange', backgroundColor:'transparent'}}>Schedule a Pickup</button></span>        
                <span style={{marginRight:'10px'}}><button style={{padding:'7px 10px 7px 5px',border:'1px solid orange', backgroundColor:'transparent'}}>Get Quote</button></span>        
                <div>
                    A to B
                </div>
        </div>
        <div>
            <div>
               <h3> My Shipments</h3>
               <h5>Past 90 days of activity</h5>
               <a>Saved By Me(1)</a>
               <hr></hr>
                <p>Track</p>
                <textarea name="trackShipment" rows="4" cols-="50" placeholder="Enter up to 10 numbers, separated by comma or return"></textarea>
                    <br></br>
                <label><button>Track</button></label>
                </div>
        </div>
        </div>
        <div>

        </div>
























    </div>
  );
};

export default Section;
