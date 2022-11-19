import React, { useState, useRef } from "react";
import c from "./HeroBanner.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Banner = () => {
  const [imageCount, setImageCount] = useState(0);
  const imageCon = useRef();

  const images = [
    "https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  ];

  const prevImage = () => {
    if (imageCount === 0) {
      setImageCount(images.length - 1);
    } else {
      setImageCount(imageCount - 1);
    }
  };

  const nextImage = () => {
    if (imageCount < images.length - 1) {
      setImageCount(imageCount + 1);
    } else {
      setImageCount(0);
    }
  };

  useEffect(() => {
    imageCon.current.scrollLeft = imageCount * imageCon.current.offsetWidth;
  }, [imageCount]);

  return (
    <div className={c.banner}>
      <button
        className={c.left_btn}
        onClick={() => {
          if (imageCount === 0) {
            setImageCount(images.length - 1);
          } else {
            setImageCount((imageCount) => imageCount - 1);
          }
        }}
      >
        <FiChevronLeft />
      </button>
      <div ref={imageCon} className={c.image__container}>
        {images.map((item) => (
          <img key={uuidv4()} className={c.banner__image} src={item} alt="" />
        ))}
      </div>
      <button
        className={c.right_btn}
        onClick={() => {
          if (imageCount === images.length - 1) {
            setImageCount(0);
          } else {
            setImageCount((imageCount) => imageCount + 1);
          }
        }}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Banner;
