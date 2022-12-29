// import React from 'react';
// import {FaHandsHelping} from 'react-icons/fa';
// import {GiBoxUnpacking} from 'react-icons/gi';
// import {GiJourney} from 'react-icons/gi';
// import { HiOutlineClipboard} from 'react-icons/hi';


// const items = [
//     {
//       icon: <FaHandsHelping/>,
//       title: "What Can I Ship? ",
//       content: "View guidelines and restrictions about the items you want to ship to and from various countries."
//     },
//     {
//       icon: <GiBoxUnpacking/>,
//       title: "Packing with Care ",
//       content:
//         "Pack your shipments for the journey. Follow our packing advice and tips and your shipment recipients will thank you!"
//     },
  
//     {
//       icon: <GiJourney/>,
//       title: "The Journey of a Package ",
//       content: " Watch how your package travels with DHL and learn how we can help you with each step of the journey."
//     },
//     {
//       icon: <HiOutlineClipboard/>,
//       title: "What Documents Do I Need?    ",
//       content: "Get information and advice about the documents needed to accompany your shipment.    "
//     }
//   ];
// const ShippingAdvice = () => {
//   return (
//     <div>
//         <ul style={{display: 'flex', gap:'30px',width:'100%', margin:'autoxss'}}>
//             {
//                 items.map(item => 
//                     <li key={item.title} style={{display: 'flex',flexDirection:'column', alignItems:'center',justifyContent: 'space-between',padding:'10px', gap:'1rem',}} className="helplist">
//                        <div> {item.icon}</div>
//                         <div style={{color:'#189aca', fontSize:'21px', fontWeight:'bold'}}>{item.title}</div>
//                        <div> {item.content}</div>
//                     </li>
                    
//                     )
//             }
//         </ul>


//     </div>
//   )
// }

// export default ShippingAdvice