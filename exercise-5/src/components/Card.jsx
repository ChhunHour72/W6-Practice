// src/Card.js
import React from "react";

function Card({ image, name, hobbies, gender, address, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Hobbies:</strong> {hobbies}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}

export default Card;