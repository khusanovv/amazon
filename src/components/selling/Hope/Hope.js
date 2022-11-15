import React from "react";
import "./Hope.css";
import { useState } from "react";
import PlayIcon from "../../image/play.png";

const Hope = () => {
  
  const bodyEl = document.querySelector("body")
  const url = "https://www.youtube.com/embed/2Wj55G_WoZg?autoplay=1&cc_load_policy=0"
  const [ isBoxVisible, setIsBoxVisible] = useState(false)
 function show() {
  setIsBoxVisible(true)
  bodyEl.style.height = "100vh"
  bodyEl.style.overflow = "hidden"

 }
 function close() {
  setIsBoxVisible(false)
  bodyEl.style.height = "auto"
  bodyEl.style.overflow = "scroll"
  
 }
  return (
    <>
      <div className="hope">
        <div className="hope__cart">
          <div className="cart__item cart__item--a">
            <h4>Hope $ Henry</h4>
            <hr />
            <p>
              “Young parents are already shopping on Amazon, so we've tapped
              into that. They love the convenience, the shipping, they're
              already there. So it was just a matter of introducing them to our
              brand. Once they get the sizing down and they actually see the
              quality of the product. They love the convenience, the shipping,
              they're already there. So it was just a matter of introducing them
              to our brand. then we've got them. They keep reordering on
              Amazon.”
            </p>
          </div>
          <div className="cart__item cart__item--b">
            <img  onClick={show} src={PlayIcon} alt="" />
          </div>
        </div>
      </div>
      <div onClick={close} style={isBoxVisible === true ? {display:"flex"} : {display:"none"}} className="modal">
        <button onClick={close} className="modal__close">X</button>
        <div className="modal__video">
          <iframe
            width="100%"
            height="100%"
            src={url}
            title="Brands on Amazon Case Study | Hope & Henry"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            
            
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Hope;
