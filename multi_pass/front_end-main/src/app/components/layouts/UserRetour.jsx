import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL_DETAIL_PRODUIT } from "../../shared/constants/urls/urlConstants";
import { AiFillStar } from "react-icons/ai";
import carte from "../../images/cartegraphique.png";

const UserRetour = (props) => {
  const userRetour = props.data;
  const [playonce, Setplayonce] = useState(true);
  const [retour, Setretour] = useState([]);
  useEffect(() => {
    if (playonce) {
      axios
        .get(`http://localhost:3001/api/produit/${userRetour}`)
        .then((res) => {
          Setretour(res.data);
          Setplayonce(false);
        });
    }
  });

  return (
    <>
      <div className="border-2 p-4  md:flex md:flex-row justify-start mb-8 space-x-6 border-gray-300 shadow-sm rounded">
        <Link
          to={`${URL_DETAIL_PRODUIT}/${userRetour}`}
          className="md:w-1/4 mb-4"
        >
          <img className="w-full" src={carte} alt="img" />
        </Link>
        <div className="md:w-3/4 lg:w-full">
          <Link to={`${URL_DETAIL_PRODUIT}/${userRetour}`} className="">
            <h1 className="uppercase text-black font-semibold">{retour.nom}</h1>
            <h1 className="uppercase text-black font-semibold">
              Réference: {retour.reference}
            </h1>
            <p className="space-x-2 text-justify">{retour.details}</p>
            <p>
              <strong>{retour.price} €</strong>
            </p>
          </Link>

          <div className="md:flex md:flex-row md:justify-between">
            <div className="flex items-center space-x-0 text-yellow-500">
              <AiFillStar className="font-bold text-2xl" />
              <AiFillStar className="font-bold text-2xl" />
              <AiFillStar className="font-bold text-2xl" />
              <AiFillStar className="font-bold text-2xl" />
              <AiFillStar className="font-bold text-2xl" />

              <p className="text-black ml-2">40 évaluations</p>
            </div>
            <div className="">
              <button className="py-2 px-4 my-4 bg-yellow-500 hover:bg-yellow-700 rounded-md text-black-900 font-black">
                Acheter a nouveau
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRetour;
