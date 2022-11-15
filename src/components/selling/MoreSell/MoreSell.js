import React from "react";
import "./MoreSell.css";
// import { HiOutlineComputerDesktop } from "react-icons/hi2";
// import { FaBeer } from "react-icons/fa";
import svg1 from "../../image/svg1.svg";
import svg2 from "../../image/svg2.svg";
import svg3 from "../../image/svg3.svg";
import svg4 from "../../image/svg4.svg";

const MoreSell = () => {
  return (
    <>
      <div className="moresell">
        <h1 className="moresell__title"> Sell more with Amazon</h1>
        <div className="moresell-warpper">
          <ul className="moresell__cart">
            <li className="cart__item">
              <img className="item__svg" src={svg1} alt="" /> <li />
            </li>
            <li>
              <h3 className="item__title">Unrivaled scale, no cap</h3>
            </li>
            <li>
              <p className="item__info">
                Amazon customers buy roughly 7,400 products per minute from U.S.
                sellers. Build, grow, and scale your brand with our innovative
                toolkit: a proven customer experience, rich data insights,
                cutting-edge advertising & marketing solutions, and world-class
                logistics with Fulfillment by Amazon (FBA). There is no
                ceiling—how big do you want to go?
              </p>
            </li>
            <li>
              <p className="item__link">Explore pricing</p>
            </li>
          </ul>
          <ul className="moresell__cart">
            <li className="cart__item">
              <img className="item__svg" src={svg2} alt="" /> <li />
            </li>
            <li>
              <h3 className="item__title">There here, introduce yourself</h3>
            </li>
            <li>
              <p className="item__info">
                Hundreds of millions of worldwide active customer accounts. More
                than 200 million paid Prime members worldwide. Reduce the time,
                effort, and money you spend on customer acquisition with
                powerful ad products, unparalleled organic traffic, and a
                shopping experience that converts.
              </p>
            </li>
            <li>
              <p className="item__link">How to get started</p>
            </li>
          </ul>
          <ul className="moresell__cart">
            <li className="cart__item">
              <img className="item__svg" src={svg3} alt="" /> <li />
            </li>
            <li>
              <h3 className="item__title">Your brand experienced</h3>
            </li>
            <li>
              <p className="item__info">
                Connect your brand to millions of customers. Control the
                experience from discovery to your dedicated storefront, and from
                your product pages to their inboxes—Amazon customers following a
                brand spend more than double that of non-followers. Communicate
                your core values, build loyal relationships, and ignite your
                brand experience.
              </p>
            </li>
            <li>
              <p className="item__link">Explore brand tools</p>
            </li>
          </ul>
          <ul className="moresell__cart">
            <li className="cart__item">
              <img className="item__svg" src={svg4} alt="" /> <li />
            </li>
            <li>
              <h3 className="item__title">Your success supported</h3>
            </li>
            <li>
              <p className="item__info">
                Protect your brand and IP with powerful tools to defend against
                counterfeits and fraud, plus get critical performance metrics to
                monitor customer sentiment and ensure a top-tier, always-on
                brand experience. Get started with 1:1 Amazon seller onboarding
                support for insights to help you take your business to the next
                level.
              </p>
            </li>
            <li>
              <p className="item__link">Protect your brand</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MoreSell;
