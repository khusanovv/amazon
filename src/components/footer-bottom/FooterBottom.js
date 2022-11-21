import React from "react";
import "./FooterBottom.css";
import { FooterBottomData } from "./FooterBottomData.js";

const FooterBottom = () => {
  return (
    <>
      <div className="footer__bottom">
        <div className="footer__bottom__link">
          {FooterBottomData.map((item, index) => {
            return (
              <div className="link__lists">
                {item.entries.map((items, index) => {
                  console.log(items.title);
                  return (
                    <ul className="links__item">
                      <h5>{items.title}</h5>
                      {items.links.map((itm, index) => {
                        console.log(itm);
                        return <li className="item__li">{itm.title}</li>;
                      })}
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="footer__bottom-logo">
          <p>Conditions of Use Privacy Notice Interest-Based Ads </p>
          <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
