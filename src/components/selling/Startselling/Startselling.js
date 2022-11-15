import React from "react";
import "./Startselling.css";
import StartsellingImage from "../../image/startselling.png";
const Startselling = () => {
  return (
    <>
      <div className="startselling">
        <div className="startselling__desc">
          <h1>Start selling today</h1>
          <p>
            Put your products in front of the millions of customers who search
            Amazon.com every day.
          </p>
          <button>Sign up</button>
          <p className="startselling__desc--price">
            $39.99 a month + selling fees
          </p>
        </div>
        <div className="startselling__image">
          <img src={StartsellingImage} alt="Start selling today" />
        </div>
      </div>
    </>
  );
};

export default Startselling;
