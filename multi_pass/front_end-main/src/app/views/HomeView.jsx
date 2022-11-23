import React from "react";
import { Link } from "react-router-dom";
import { URL_INCRISPTION } from "../shared/constants/urls/urlConstants";
import accessoire from "../images/accessoires.png";
import composant from "../images/composants.png";
import ordinateur from "../images/ordinateur.png";
import périphérique from "../images/périphérique.png";
import reséau from "../images/reséau.png";
import software from "../images/software.png";
import support from "../images/support.png";
import promotion from "../images/promotions.png";
import nouveaute from "../images/nouveautes.png";
import { isAuthenticated } from "../shared/services/accountServices";
import { getPayloadToken } from "../shared/services/tokenServices";
import Slider from "../components/Produits/Slider";

const HomeView = () => {
  if (isAuthenticated()) {
    const local = getPayloadToken();
  }

  return (
    <>
      <div className="space-y-16 mt-20">
        <Slider />
        <div className="flex justify-center space-x-52">
          <div>
            <Link to={URL_INCRISPTION}>
              <img
                src={ordinateur}
                className="rounded-full h-40 w-40 sm:h-20 sm:w-20 md:h-40 md:w-40"
                alt="pc"
              />
              <p className="text-center mt-4 font-mono font-bold text-gray-700 sm:text-xs">
                ORDINATEURS
              </p>
            </Link>
          </div>
          <div>
            <Link to={URL_INCRISPTION}>
              <img
                src={périphérique}
                className="rounded-full h-40 w-40 sm:h-20 sm:w-20 md:h-40 md:w-40"
                alt="pc"
              />
              <p className="text-center mt-4 font-mono font-bold text-gray-700 sm:text-xs">
                PERIPHERIQUES
              </p>
            </Link>
          </div>
          <div>
            <Link to={URL_INCRISPTION}>
              <img
                src={composant}
                className="rounded-full h-40 w-40 sm:h-20 sm:w-20 md:h-40 md:w-40 "
                alt="pc"
              />
              <p className="text-center mt-4 font-mono font-bold text-gray-700 sm:text-xs">
                COMPOSANTS
              </p>
            </Link>
          </div>
          <div>
            <Link to={URL_INCRISPTION}>
              <img
                src={accessoire}
                className="rounded-full  sm:h-20 sm:w-20 h-40 w-40 md:h-40 md:w-40"
                alt="pc"
              />
              <p className="text-center mt-4 font-mono font-bold text-gray-700 sm:text-xs">
                ACCESSOIRES
              </p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center space-x-52 sm:space-x-24 md:space-x-52 ">
          <div>
            <Link to={URL_INCRISPTION}>
              <img
                src={software}
                className="rounded-full h-40 w-40 sm:h-20 sm:w-20 md:h-40 md:w-40"
                alt="pc"
              />
              <p className="text-center mt-4 font-mono font-bold text-gray-700 sm:text-xs">
                SOFTWARE
              </p>
            </Link>
          </div>
          <div>
            <Link to={URL_INCRISPTION}>
              <img src={reséau} className="rounded-full h-40 w-40 sm:h-20 sm:w-20 md:h-40 md:w-40" alt="pc" />
              <p className="text-center mt-4 font-mono font-bold text-gray-700 sm:text-xs">
                RESEAU
              </p>
            </Link>
          </div>
          <div>
            <Link to={URL_INCRISPTION}>
              <img src={support} className="rounded-full h-40 w-40 sm:h-20 sm:w-20 md:h-40 md:w-40" alt="pc" />
              <p className="text-center mt-4 font-mono font-bold text-gray-700 sm:text-xs">
                SUPPORT{"&"}SERVICE
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-16 sm:space-x-8 ">
        <div className="w-2/5 py-4 px-8 bg-white shadow-2xl rounded-lg my-20">
          <Link to={URL_INCRISPTION}>

            <div>
              <img src={promotion} alt="promotion" className="mt-4" />
            </div>
          </Link>
        </div>

        <div className="w-2/5 py-4 px-8 bg-white shadow-2xl rounded-lg my-20">
          <Link to={URL_INCRISPTION}>

            <div>
              <img src={nouveaute} alt="promotion" className="mt-4" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeView;
