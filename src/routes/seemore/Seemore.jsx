import React from "react";
import "./Seemore.css";
import seemoredata from "../../seemore.json";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const EssentialsGamers = () => {
  return (
    <div className={"containerr"}>
      <img
        className={"essentialsImg"}
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_en_US.png"
        alt=""
      />
      <h2 className={"essentialsTitle"}>Featured Categories</h2>
      <div className={"essentialsWrapper"}>
        {seemoredata.map((gamersItem) => {
          return (
            <Link
              key={uuidv4()}
              to="/seemore/products"
              className={"gamersLink"}
            >
              <img src={gamersItem.image} width="229px" alt="Gamers img" />
              <p>{gamersItem.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EssentialsGamers;
