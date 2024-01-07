import React from "react";
import "./App.css"

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ListingCard from "./components/ListingCard";
import downloadjpg from "./images/download.jpg"

function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <div className='main'>
        <div><ListingCard 
          img = {downloadjpg}
          title = {"Bidet Sprayer"}
          subtitle = {"Stainless steel bidet"}
        /></div>
        <div><ListingCard 
          img = {downloadjpg}
          title = {"Bidet Sprayer"}
          subtitle = {"Stainless steel bidet"}
        /></div>
        <div><ListingCard 
          img = {downloadjpg}
          title = {"Bidet Sprayer"}
          subtitle = {"Stainless steel bidet"}
        /></div>
      </div>
    </div>
  );
}

export default App;
