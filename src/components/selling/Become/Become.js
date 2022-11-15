import React from "react";
import "./Become.css";
import BecomeImage from "../../image/prime-boxes.png";

const Become = () => {
  return (
    <>
      <div className="become">
        <div className="become__title">
          <h1>Become an Amazon seller</h1>
          <p className="title__info">
            The fastest-growing and preferred acquisition channel for over half
            our multichannel sellers.1
          </p>
          <button>SingUp</button>
          <p>$39.99 a month + selling fees</p>
        </div>
        <div className="bocome__img">
          <img src={BecomeImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Become;
