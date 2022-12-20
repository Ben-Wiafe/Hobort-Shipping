import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Createshipment from "./components/Createshipment";
import Home from "./components/Home";
import Header from "./components/Header";
import LoginHomepage from "./components/LoginHomepage";
import Ship from "./components/loginFiles/Create_from_ship";
import Schedule_pickup from "./components/loginFiles/schedule_pickup";
import Create_from_fav from "./components/loginFiles/Create_from_ship";
import Create_from_past from './components/loginFiles/Create_from_past';
import HelpSupport from "./components/HelpSupport";
import Get_quote from "./components/loginFiles/get_quote";
import ResetPassword from './components/ResetPassword';
const App = () => {


  return (
    <>
      <div className="container" />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/loginhome" exact element={<LoginHomepage />}> 
        <Route path="createNewShipment" element={<Ship/>}/>
        <Route path="createFromPast" element={<Create_from_past/>}/>
        <Route path="createFromFav" element={<Create_from_fav/>}/>
        <Route path="getQuote" element={<Get_quote/>}/>
        <Route path="schedulePickUp" element={<Schedule_pickup/>}/>

        </Route>{" "}
        <Route path="/register" element={<Register />} exact />
        <Route path="/shipment" element={<Createshipment/>} exact />     
        <Route path="/help-support" element={<HelpSupport/>} exact />     
        <Route path="/forgot-password" element={<ResetPassword/>} exact />     
        
      </Routes>{" "}
/
    </>
  );
};

export default App;
