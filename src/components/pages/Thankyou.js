import React from "react";
import Complete from "../assets/icon-complete.svg";

const Thankyou = ({ handleSubmit }) => {
  return (
    <div className="absolute md:right-60 md:top-[200px] w-[400px] p-10 text-center ">
      <img
        src={Complete}
        alt="complete"
        className="py-3 relative left-[120px]"
      />
      <h1 className="text-2xl font-bold uppercase">thank you!</h1>
      <p className="tracking-widest p-2">We've added your details </p>
      <button
        className="btn bg-gray-900 text-white p-1 rounded-full w-80 mt-5 drop-shadow-lg"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
};

export default Thankyou;
