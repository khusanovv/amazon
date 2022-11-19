import React from "react";
import "./ShopsGifts.css";

const ShopsGifts = () => {
  const shopImages = [
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_CML_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_StockingStuffers_1x._CB606658764_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Fashion_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Home-Gifts_1x._CB608464069_.jpg",
    // "hhttps://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Toys-gifts_1x._CB608464069_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_HolidayEssentials_1x._CB608159058_.jpgg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_HolidayEssentials_1x._CB608159058_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_CML_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_StockingStuffers_1x._CB606658764_.jpg",
  ];
  const sellImage = [
    "https://m.media-amazon.com/images/I/91vnzZO5yPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/811ftjOO5FL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61CJaHZI6cL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81e4jgomhKL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71FVbHHW+AL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/91vnzZO5yPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg",
  ];
  const moviesImage = [
    "https://m.media-amazon.com/images/I/71NY-DzHnnL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71nqZf5nRbL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81BtU9dQIJL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71vEOYJC0vL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81o-ESdLdQL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71W943jz-WL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71fxsKr1MQL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81NTxti12zL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71sRXeeQeBL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/811-E8fqSfL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71cZd8PxmwL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71WXWcPrKrL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71WXWcPrKrL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81d2CoIjg-L._AC_SY200_.jpg",
  ];

  return (
    <div>
      <div className="top__sell shops">
        <h2 className="shops__title">Top Sellers in Books for you</h2>
        <ul className="shops__cart">
          <button className="shops__prev">L</button>
          <button className="shops__next">R</button>
          {shopImages.map((item) => (
            <>
              <li className="cart__item">
                <img src={item} alt="" />
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="shops">
        <h2 className="shops__title">Top Sellers in Books for you</h2>
        <ul className="shops__cart">
          <button className="shops__prev">L</button>
          <button className="shops__next">R</button>
          {sellImage.map((items) => (
            <>
              <li className="cart__item">
                <img src={items} alt="" />
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className=" movie__shops shops">
        <h2>Most wished for in Movies & TV</h2>
        <ul className="shops__cart">
          <button className="shops__prev">L</button>
          <button className="shops__next">R</button>
          {moviesImage.map((item) => (
            <>
              <li className="cart__item">
                <img src={item} alt="" />
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopsGifts;
