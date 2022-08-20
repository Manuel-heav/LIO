import React from 'react';
import Card from './Card';
import "./center.css";
const Center = () => {
  return (
    <div className="center">  
      <div className="center__top__wrapper">
        <div className="left__wrapper">
          <h2>ROOMS</h2>
          <p>600 Rooms available</p>
        </div>
        <button>+ Create Room</button>
      </div>

      <div className="center__card__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Center