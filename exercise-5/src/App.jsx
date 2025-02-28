// src/App.js
import React from "react";
import { cardData } from "./data.js";
import Card from "./components/Card";
import "./index.css"; 

function App() {
  return (
    <div className="app">
      <h1>My Custom Card App</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            hobbies={card.hobbies}
            gender={card.gender}
            address={card.address}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
