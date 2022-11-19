import React from "react";
import "./Footer.css";
import { FooterData } from "./FooterData";
import FooterLogo from "./logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__link">
          {FooterData.map((item, index) => {
            return (
              <div className="link__list">
                {item.entries.map((t, index) => {
                  return (
                    <ul>
                      <h4 className="list__title">{t.title}</h4>
                      {t.links.map((itm, index) => {
                        return <li className="list__link">{itm.title}</li>;
                      })}
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="footer__lang">
          <img src={FooterLogo} alt="footer logo" />
          <select name="" id="">
            <option value="" key="">
              <span>$</span> English
            </option>
            <option value="" key="">
              <span>🏳️</span> Russia
            </option>
          </select>
          <p className="lang__usd">USD - U.S. Dollar</p>
          <p>United States</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
