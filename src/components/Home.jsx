import React,{useState} from "react";
import "../App.css";
import Hero from "./Hero";
import Header from "./Header";
import Card from "./Card";
import Marque from "./Marque";
import Calculator from "./Calculator";
import Express from "./Express";
import Footer from "./Footer";
import Login from './Login';
// import Carousel from './Carousel';
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container">
      <Header onButtonClick={() => setModalOpen(!modalOpen)}/>
      {modalOpen && <Login onClose={() => setModalOpen(false)} />}
    
      <Hero />
      <Card />      
      <Marque />
      {/* <Carousel/> */}
      <br/>
      <Calculator />
      <Express />
      <Footer />
    </div>
  );
};

export default Home;
