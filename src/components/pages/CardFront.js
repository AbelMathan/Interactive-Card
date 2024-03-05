import React from "react";
import Front from "../assets/bg-card-front.png";
import Circle from "../assets/Circle.svg";

const CardFront = () => {
  return (
    <div className=" drop-shadow-lg absolute w-72 top-48 left-6 md:w-auto md:top-32 md:left-48">
      <img className="card-front" src={Front} alt="Card-front" />
      <img
        src={Circle}
        alt="circle"
        className="absolute w-16 md:w-32 top-10 left-10"
      />
    </div>
  );
};

export default CardFront;
