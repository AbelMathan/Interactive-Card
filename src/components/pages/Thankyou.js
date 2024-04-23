import React from "react";
import Complete from "../assets/icon-complete.svg";
import { useRef } from "react";
const Thankyou = ({ handleSubmit }) => {
  const btnReference = useRef();

  return (
    <div className="w-full lg:w-auto relative bottom-24 lg:bottom-0 flex flex-col items-center ">
      <img src={Complete} alt="complete" className="py-3 w-16" />
      <h1 className="text-2xl font-bold uppercase">thank you!</h1>
      <p className="tracking-widest p-2">We've added your details </p>
      <button
        ref={btnReference}
        className="btn bg-gray-900 text-white p-1 rounded-full w-60 px-10 mt-2  drop-shadow-lg"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
};

export default Thankyou;
