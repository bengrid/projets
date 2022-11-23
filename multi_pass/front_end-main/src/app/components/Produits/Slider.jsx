import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { URL_LISTE_PRODUIT} from '../../shared/constants/urls/urlConstants';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const featuredProducts = [
    "/images/pc1.png",
    "/images/pc-portable.jpg",
    "/images/ecran.jpg",
    "/images/Blackfriday.png",
  ];
  
let count = 0;
let slideInterval;

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slideRef = useRef();
  
    const removeAnimation = () => {
      slideRef.current.classList.remove("fade-anim");
    };
  
    useEffect(() => {
      slideRef.current.addEventListener("animationend", removeAnimation);
      slideRef.current.addEventListener("mouseenter", pauseSlider);
      slideRef.current.addEventListener("mouseleave", startSlider);
  
      startSlider();
      return () => {
        pauseSlider();
      };
      // eslint-disable-next-line
    }, []);
  
    const startSlider = () => {
      slideInterval = setInterval(() => {
        handleOnNextClick();
      }, 3000);
    };
  
    const pauseSlider = () => {
      clearInterval(slideInterval);
    };
  
    const handleOnNextClick = () => {
      count = (count + 1) % featuredProducts.length;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
      const productsLength = featuredProducts.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
  
    return (
      <div ref={slideRef} className="w-full select-none relative">
        <Link to={`${URL_LISTE_PRODUIT}`} className="aspect-w-16 aspect-h-9">
          <img src={featuredProducts[currentIndex]} alt="" className=" h-96 w-full" />
        </Link>
  
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-1 flex justify-between items-center">
          <button
            className=" cursor-pointer transition"
            onClick={handleOnPrevClick}
          >
            <AiFillLeftCircle size={40} />
          </button>
          <button
            className="cursor-pointer transition"
            onClick={handleOnNextClick}
          >
            <AiFillRightCircle size={40} />
          </button>
        </div>
      </div>
    );
}