import React from "react";
import "./Benifits.css";
// import BenifitsImage from "../../images/BenifitsImage.svg";

const Benifist = () => {
  return (
    <>
      <div className="benifits">
        <div className="benifits__sale">
          <img
            src="https://m.media-amazon.com/images/G/01/sell/images/illustration/illustration-growth-graph.svg"
            alt=""
          />
        </div>
        <div className="benifits__desc">
          <button className="desc__btn">New Seller Incentives</button>

          <h2 className="desc__title">Over $50K in potential benefits</h2>
          <p className="desc__info">
            Ready to sell? Launch your brand today with a powerful playbook for
            new sellers and over $50K in potential benefits.
          </p>
          <ul className="desc__list">
            <li className="list__item">
              Get 5% back on your first $1,000,000 in branded sales
            </li>
            <li className="list__item">
              Try FBA with free inbound shipping, storage, removals, and returns
            </li>
            <li className="list__item">
              Get $200 credit for Sponsored Products CPC ads—bids are up to you
            </li>
            <li className="list__item">
              Get a head start on brand protection, product reviews, and more
            </li>
            <p className="list__link">Learn more</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Benifist;
