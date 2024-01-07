// App.js
import React from "react";
import "./App.css";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ListingCard from "./components/ListingCard";
import downloadjpg from "./images/download.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <div className="listings-cards">
        <ListingCard
        img={downloadjpg}
        title={"Bidet Sprayer"}
        subtitle={"Stainless steel bidet"}
        price={"$83"}
        />
        <ListingCard
        img={downloadjpg}
        title={"Bidet Sprayer"}
        subtitle={"Stainless steel bidet"}
        price={"$83"}
        />
        <ListingCard
        img={downloadjpg}
        title={"Bidet Sprayer"}
        subtitle={"Stainless steel bidet"}        
        price={"$83"}
        />
      </div>
    </div>
  );
}

export default App;
