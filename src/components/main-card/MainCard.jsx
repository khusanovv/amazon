import React from "react";
import { Link } from "react-router-dom";
import c from "./MainCard.module.css";
// import { useRef } from "react";

const MainCard = ({ image, title, linkText, linkURL, cardImages }) => {
  return (
    <div className={c.card}>
      <h2>{title}</h2>
      {cardImages ? (
        cardImages.map((item) => (
          <Link to={item.link}>
            <img src={item.image} alt="" />
            <p>{item.subtitle}</p>
          </Link>
        ))
      ) : (
        <img src={image} />
      )}
      <Link to={linkURL}>{linkText}</Link>
    </div>
  );
};

export default MainCard;
