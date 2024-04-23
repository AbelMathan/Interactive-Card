import React from "react";
import BgDesktop from "../assets/bg-main-desktop.png";
import Bgmobile from "../assets/bg-main-mobile.png";

const Background = () => {
  return (
    <div>
      <img className="w-full lg:hidden" src={Bgmobile} alt="Background" />
      <img
        className="w-auto h-screen hidden lg:block"
        src={BgDesktop}
        alt="Background"
      />
    </div>
  );
};

export default Background;
