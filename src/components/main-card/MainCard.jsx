import React from "react";
import { Link } from "react-router-dom";
import c from "./MainCard.module.css";
import { v4 as uuidv4, v4 } from "uuid";

const MainCard = ({ image, title, linkText, linkURL, cardImages }) => {
  uuidv4();
  return (
    <div key={v4} className={c.card}>
      <h2>{title}</h2>
      {cardImages ? (
        <div key={v4} className={c.cardBox}>
          {cardImages.map((item) => (
            <div className={c.linkBoxs}>
              <Link to={item.link}>
                <img className={c.cardImgs} src={item.image} alt="" />
                <p key={v4}> {item.subtitle}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div key={v4} className={c.linkBox}>
          <Link to={linkURL}>
            <img className={c.cardImg} src={image} alt="" />
          </Link>
        </div>
      )}
      <Link className={c.urlLink} to={linkURL}>
        {linkText}
      </Link>
    </div>
  );
};

export default MainCard;
