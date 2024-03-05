import React from "react";

const CardDetails = ({ name, number, month, year, cvc }) => {
  const cardNumber = number
    .match(/.{1,4}/g)
    ?.join(" ")
    ?.slice(0, 19);
  return (
    <div className="card-details  relative left-10 top-10 md:absolute md:left-[225px] md:top-1/2 text-white uppercase font-medium">
      <p className="card-number text-2xl md:text-4xl tracking-[0.05em] pb-2 relative bottom-20 ">
        {cardNumber}
      </p>
      <div className="flex justify-between w-[250px] md:w-[385px] relative bottom-20 ">
        <p className="card-name font-normal">{name}</p>
        <p className="card-date font-normal">
          {month?.slice(0, 2)}/{year.slice(0, 2)}
        </p>
      </div>
      <p className="card-cvc font-bold bottom-[263px] left-[270px]  relative md:text-2xl md:left-[420px] md:top-[65px]">
        {cvc?.slice(0, 3)}
      </p>
    </div>
  );
};

export default CardDetails;
