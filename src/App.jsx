
import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx"
import RoomsCard from "./components/RoomsCard.jsx";
import Rooms from "./sections/Rooms.jsx";
import Gallery from "./sections/Gallery.jsx";
import Contact from "./sections/Contact.jsx";


function App(){
  return (
    <>
     <Header></Header>
     <Hero />
    <Rooms />
    <Gallery/>
    <Contact/>
    </>
  );
}
export default App;

