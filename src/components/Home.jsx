import React from "react";
import "../App.css";
import Hero from "./Hero";
import Header from "./Header";
import Card from "./Card";
import Marque from "./Marque";
import Calculator from "./Calculator";
import Express from "./Express";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container">
      <Header/>
      <Hero />
      <Card />
      <Marque />
      <Calculator />
      <Express />
      <Footer />
    </div>
  );
};

export default Home;
