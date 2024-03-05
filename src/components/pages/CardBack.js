import React from "react";
import Back from "../assets/bg-card-back.png";

const CardBack = () => {
  return (
    <div className=" drop-shadow-lg absolute w-72 top-24 left-20 md:w-auto md:top-[400px] md:left-72 ">
      <img className="card-back" src={Back} alt="Card-back" />
    </div>
  );
};

export default CardBack;
