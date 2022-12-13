import React from 'react'

const Create_from_fav = ({style}) => {
  return (
    <div style={style}>
    <div style={{backgroundColor:'white', padding:'15px 15px', minHeight:'240px', width:'700px'}}>
    <small><em>As soon as you've saved shipment as a favorite, they'll be displayed here</em></small>
    <br></br>
    <br/>
    <p style={{color:'#333'}}>
      <h3>Create a New Shipment Quickly - Use a Favorite!</h3>
    </p>
    <ul style={{padding:'20px'}}>
      <li><p>This convenient feature helps you save time and steps creating shipments</p></li>
      <li><p>Your Favorite shipment details are saved - so no need to re-enter each time</p></li>
      <li><p>Favorites are ideal if you regulary ship the same types of shipments of frequently ship to the same contact</p></li>

    
    
    </ul>


    </div>
    
    
    
    
    
    
    </div>
  )
}

export default Create_from_fav