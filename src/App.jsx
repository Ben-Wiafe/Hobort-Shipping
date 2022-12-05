import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <Header />
      <div className="container" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section" exact element={<Section />} />
        <Route path="/register" element={<Register />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </>
  );
};

export default App;
