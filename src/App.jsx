
import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./Hero/Hero.jsx"
import RoomsCard from "./components/RoomsCard.jsx";
import Rooms from "./Hero/Rooms.jsx";

function App(){
  return (
    <>
     <Header></Header>
     <Hero />
    <Rooms />
    </>
  );
}
export default App;

