import React from "react";
import Front from "../assets/bg-card-front.png";
import Circle from "../assets/Circle.svg";

const CardFront = ({ name, number, month, year }) => {
  const cardNumber = number
    .match(/.{1,4}/g)
    ?.join(" ")
    ?.slice(0, 19);
  return (
    <div className="w-auto lg:w-full z-50 relative right-5 bottom-16 lg:bottom-0 lg:top-10">
      <img className="card-front" src={Front} alt="Card-front" />
      <img
        src={Circle}
        alt="circle"
        className="relative bottom-32 left-3 lg:bottom-52 lg:left-6"
      />

      <main className="card-details relative bottom-32 px-2  text-white uppercase font-medium">
        <p className="card-number text-2xl md:text-4xl tracking-[0.075em] pb-2 ">
          {cardNumber}
        </p>
        <div className="flex justify-between ">
          <p className="card-name font-normal">{name}</p>
          <p className="card-date font-normal">
            {month?.slice(0, 2)}/{year.slice(0, 2)}
          </p>
        </div>
      </main>
    </div>
  );
};

export default CardFront;
