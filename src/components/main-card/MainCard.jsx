import React from 'react';
import { Link } from 'react-router-dom';
import c from "./MainCard.module.css";

const MainCard = ({ image, title, linkText, linkURL }) => {
  return (
    <div className={c.card}>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <Link to={linkURL}>{linkText}</Link>
    </div>
  )
}

export default MainCard