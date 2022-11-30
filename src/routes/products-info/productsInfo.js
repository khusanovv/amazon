import { useState, useEffect } from "react";
import axios from "axios";
import c from './products.module.css';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';

import { useParams } from "react-router-dom"

const ProductInfo = () => {
  const [isTrackerActive, setIsTrackerActive] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();
 

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/v2/allproducts/${productId}`)
      .then(response => {
        if(!response.data.message){
          setProductData(response.data);
        }
        else{
          setProductData(null)
        }
        setLoading(false);
      })
      .catch(err => console.log(err))
  }, [])

  console.log(mousePosition)

  return (
    <div>
      {
        productData ?
        <div className={c.productInfo__wrapper}>
          <div className={c.image__wrapper}>
            {
              productData.image.map((imageItem, index) =>
                <div style={activeImageIndex === index ? {boxShadow: "0px 0px 2px 5px orange"} : null} key={imageItem.id} className={c.imageItem}>
                  <img  onMouseOver={() => {setActiveImageIndex(index)}} src={imageItem.url} alt="" />
                </div>
              )
            }
          </div>
          <div>
            <div className={c.mainImage__container}>
              <img  onMouseLeave={() => {
              setIsTrackerActive(false)
            }} className={c.mainImage} onMouseMove={(e) => {
                  setMousePosition({x: e.clientX, y: e.clientY})
                  setIsTrackerActive(true)
                }} src={productData.image[activeImageIndex].url} alt="" />
                {isTrackerActive && <div style={{top: `${mousePosition.y - 200}px`, left: `${mousePosition.x - 200}px`}} className={c.tracker}>
                  <img src="https://www.pngkey.com/png/full/10-105184_polka-dots-pattern-png-dot-pattern-png-transparent.png" alt="" />
                </div>}
            </div>
            <h1 className={c.image__title}>{productData.name}</h1>
            {
              productData.ratings % 1 === 0 ?
              new Array(productData?.ratings).fill("#").map(() => 
                <BsStarFill key={uuidv4()}/>
              ) : 
              <>
              { 
                new Array(Math.floor(productData?.ratings)).fill("#").map(() => 
                    <>
                    <BsStarFill key={uuidv4()}/>
                    </>
                )
              }
              <BsStarHalf/>
              </>
            }
          </div>
          {isTrackerActive && <div style={{
            backgroundImage: `url(${productData?.image[activeImageIndex].url})`,
            backgroundPosition: `${-mousePosition.x}px ${-mousePosition.y * 1.4  + 30}px`,
            backgroundSize: "200%",
            backgroundRepeat: "no-repeat",
            cursor: "zoom-out"}}  className={c.preview}></div>}
        </div>
        :
        !loading ?
        <h1>Nothing found !</h1>
          : <p>Loading...</p>
      }
    </div>
  )
}

export default ProductInfo