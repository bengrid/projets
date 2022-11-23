import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineMessage, MdRefresh } from 'react-icons/md';
import { BsShareFill } from 'react-icons/bs';
import axios from "axios";
import Rating from "./Rating";
import { URL_LISTE_PRODUIT } from "../../shared/constants/urls/urlConstants";
import AjoutPanier from "../cart/AjoutPanier";
import Avis from "./avis";
import Like from "./Like";
import RepAvis from "./RepAvis";
import { register, format } from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import Carousel from "./Caroussel";
import { dropcomm } from '../../api/backend/account';
import { getPayloadToken } from "../../shared/services/tokenServices";
import { emit } from "process";
register("fr", fr);


function DetailsProduit(props) {
  const token = getPayloadToken()
  const [playonce, setPlayonce] = useState(true);
  const [data, setData] = useState([]);
  const [avis, setAvis] = useState([]);
  const { _id } = useParams();
  const [nbAvis, setNbAvis] = useState(0)



  useEffect(() => {
    if (playonce) {
      axios
        .get(`http://localhost:3001/api/produit/${_id}`)
        .then((res) => {
          setData(res.data);
          setPlayonce(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const handleDrop = (item) => {
    dropcomm({ avisId: item._id, userId: item.userid })
    setPlayonce(true);
  };
  useEffect(() => {
    avis.produit = data._id
    if (playonce) {
      axios
        .get(`http://localhost:3001/api/avis/${_id}`)
        .then((res) => {
          setAvis(res.data);
          setNbAvis(res.data.length)
          setPlayonce(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const [images, setImages] = useState(0)
  const isActive = (index) => {
    if (images === index) return " active";
    return ""
  }

  function RatingAvg(myRating) {
    var i = 0, sum = 0, RatingLen = myRating.length;
    while (i < RatingLen) {
      sum = sum + myRating[i++];
    }
    return sum / RatingLen;
  }

  const [isAvisOpen, setisAvisOpen] = useState(false);
  const [isAviscomment, setisAviscomment] = useState(false);



  return (
    <div className="w-full md:mt-12 bg-green-50">
      <div className="p-3">
        <Link
          to={URL_LISTE_PRODUIT}
          className="flex md:flex items-center justify-start"
        >

          <AiOutlineArrowLeft className="text-2xl" />
          <p>Retourner à la liste de produits </p>
        </Link>
        <div className="md:w-full p-4">
          <div className=" p-4 md:flex md:flex-row mb-8 md:space-x-6 space-x-0 ">
            <div className=" md:w-1/4 md:h-full object-contain md:flex md:flex-col flex flex-row space-x-4 md:space-x-0 justify-center md:space-y-6 mb-4">
              {
                data.img_produit && data.img_produit.map((img, index) => (
                  <img className={`md:h-48 h-20 ${isActive(index)}`} key={index} src={img.url} alt={img.url}
                    onClick={() => setImages(index)} />
                ))
              }

            </div>

            <div className="md:h-full md:w-3/4 w-full">
              <div className="md:h-full bg-white border-2 p-2 border-t-0 md:flex md:flex-row md:justify-start flex flex-col items-center justify-center md:space-x-6 space-x-0 border-gray-300 shadow-sm rounded space-y-6">
                <div className="object-contain md:mr-6 mr-0">
                  {data.img_produit && <img className="md:h-48 h-36" src={data.img_produit[images].url} alt={data.img_produit[images].url} />}

                </div>
                <div>
                  <div className="md:space-y-4 md:mb-4 md:text-justify space-y-2 text-center mb-0">
                    <h1 className="uppercase text-black font-semibold">
                      {data.nom}
                    </h1>
                    <p className=" text-black font-semibold">
                      Modèle: {data.reference}
                    </p>
                    <p>
                      <strong>Prix: {data.price} €</strong>
                    </p>
                  </div>

                  <div >
                    <div onClick={() => setisAvisOpen(true)} className="flex flex-row md:justify-start cursor-pointer items-center justify-center">
                      <Rating value={data.ratings} />
                      <span className="text-black ml-2">
                        {nbAvis} évaluations
                      </span>
                    </div>
                    {isAvisOpen && <Avis id={data._id} setAvis={setisAvisOpen} />}
                  </div>

                  <div className="md:mt-4 md:justify-start mt-6 flex justify-center">
                    {<AjoutPanier product={data} qty={1} />}
                  </div>
                </div>
              </div>
              <div className="md:h-full  mt-6 md:space-x-6 space-x-0 md:space-y-0 space-y-4 md:flex md:flex-row">
                <div className="bg-white w-full border-2 border-t-0 text-center border-gray-300 shadow-sm rounded">
                  <h1 className="uppercase border-2 border-b-0 border-gray-400 text-black font-semibold">Descritif Produits</h1>
                  <p className=" text-black font-semibold">{data.nom}</p>
                  <p className=" text-black font-semibold">{data.categorie}</p>
                  <p className="text-justify md:px-8 pb-4 px-1">{data.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-2 px-4 w-full md:h-full object-contain">
            <h1 className="uppercase text-left text-black font-semibold">Evaluation du produit</h1>
            {
              avis.map((item, i) => (

                <div key={i} className="md:h-full md:w-full md:flex md:flex-row space-x-8 border-b-2 py-4">
                  <div className="md:w-1/4">
                    <div>
                      <p className="uppercase mt-2 text-sm"><strong>Achat verifié</strong></p>
                      <p className="-mt-1 text-xs">{format(item.createdAt, 'fr')}</p>
                    </div>
                    <div>
                      <p className="uppercase mt-2 -mb-1 text-xs"><strong>Utilisation</strong></p>
                      <Rating value={item.rating} />
                    </div>
                    <div>
                      <p className="uppercase mt-2 -mb-1 text-xs "><strong>prix</strong></p>
                      <Rating value={item.ratingp} />
                    </div>
                    <div>
                      <p className="uppercase mt-2 -mb-1 text-sm"><strong>qualite</strong></p>
                      <Rating value={item.ratingq} />
                    </div>
                  </div>
                  <div className="md:w-3/4 py-2 pr-4">
                    <p className="py-4"><strong className="text-blue-400">{item.nom}</strong></p>
                    <p><strong className="italic">{RatingAvg([parseInt(item.rating), parseInt(item.ratingp), parseInt(item.ratingq)]).toFixed(1)} Super achat!</strong></p>
                    <p className="text-justify">{item.comment}</p>

                    <div className="flex items-center   space-x-2 mt-2">

                      <Like id={item._id} avis={item} />

                      <button className="text-xl" onClick={() => setisAviscomment(true)}>
                        <MdOutlineMessage />
                        {isAviscomment && <RepAvis avisId={item._id} setAvis={setisAviscomment} />}
                      </button>
                      <button><BsShareFill /></button>

                      {item.userid === token.id ? <button className="underline underline-offset-2 text-right md:text-right w-full" onClick={() => handleDrop(item)} >Supprimer commentaire</button>
                        : ""}
                    </div>
                  </div>



                </div>
              ))
            }
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default DetailsProduit;
