import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { URL_LISTE_PRODUIT} from '../../shared/constants/urls/urlConstants';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const featuredProducts = [
    "/images/souris.png",
    " /images/clavier.png",
    "/images/ordi.png",
    "/images/ordi1.png",
    "/images/Blackfriday.png",
  ];

  const featuredproducts = [
    "/images/souris.png",
    " /images/clavier.png",
    "/images/ordi.png",
    "/images/ordi1.png",
    "/images/Blackfriday.png",
  ];


  
  
  
const Caroussel = () => {
    const [next, setNext] = useState(0)
    let count = 0;
  
    const handleOnNextClick = () => {;
      setNext(featuredproducts[0]);
    };
    const handleOnPrevClick = () => {
    };
  
    return (
      <div className="w-full select-none relative">
        <div className="flex space-x-4 justify-center">
            <Link to={`${URL_LISTE_PRODUIT}`} >
                <img src={featuredProducts[0]} alt="" className=" h-60 w-full" />
            </Link>
            <Link to={`${URL_LISTE_PRODUIT}`} >
                <img src={featuredProducts[1]} alt="" className=" h-60 w-full" />
            </Link>
            <Link to={`${URL_LISTE_PRODUIT}`} >
                <img src={featuredProducts[2]} alt="" className=" h-60 w-full" />
            </Link>
            <Link to={`${URL_LISTE_PRODUIT}`} >
                <img src={featuredProducts[2]} alt="" className=" h-60 w-full" />
            </Link>
        </div>
  
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-1 flex justify-between items-center">
          <button
            className=" cursor-pointer transition"
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

export default Caroussel