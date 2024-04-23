import React from "react";
import Back from "../assets/bg-card-back.png";

const CardBack = ({ cvc }) => {
  return (
    <div className="w-auto lg:w-full relative left-5 lg:bottom-10 top-2 ">
      <img className="card-back" src={Back} alt="Card-back" />
      <p className="card-cvc z-50 text-white font-bold relative bottom-24 lg:bottom-36 lg:-left-10 lg:text-2xl left-0 text-end pr-10 ">
        {cvc?.slice(0, 3)}
      </p>
    </div>
  );
};

export default CardBack;
