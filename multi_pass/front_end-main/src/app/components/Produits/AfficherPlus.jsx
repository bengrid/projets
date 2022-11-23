import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { URL_DETAIL_PRODUIT} from '../../shared/constants/urls/urlConstants';
import Rating from './Rating';

const AfficherPlus = () => {

    const [playonce, Setplayonce] = useState(true);

    const [data, setData] = useState([]);
    useEffect(() => {
        if(playonce) {
            axios.get("http://localhost:3001/api/listeproduit")
        .then( res => {
            setData(res.data);
            Setplayonce(false);
        })
        .catch(err => {
            console.log(err)
        })
        }
    });

    return (
        <div className="w-full h-full bg-green-50 md:mt-2">
            <div className='flex'>
                <div className="p-3 ml-4">
                    
                    <div className="w-full p-4">
                        {
                            data.map((produits) => (
                                <div key={produits._id} className="border-2 h-full bg-white p-4 border-t-0 md:flex md:flex-row justify-start mb-8 space-x-6 border-gray-300 shadow-sm rounded">
                                    <Link to={`${URL_DETAIL_PRODUIT}/${produits._id}`} className="md:w-1/4 flex justify-center mb-4"> 
                                        <img className="md:w-full md:h-full h-40 object-contain md:object-scale-down"
                                            src={produits.img_produit[0].url} alt={produits.nom} 
                                        />
                                    </Link>
                                    <div className="md:w-3/4 md:h-full">
                                        <Link to={`${URL_DETAIL_PRODUIT}/${produits._id}`}  className="">
                                            <h1  className="uppercase text-black font-semibold">{produits.nom}</h1>
                                            <h1 className="uppercase text-black font-semibold" >Réference: {produits.reference}</h1>
                                            <p className="space-x-2 text-justify">{produits.details}</p>
                                            <p>
                                                <strong>{produits.price} €</strong>
                                            </p>
                                        </Link>
                                        
                                        <div className="md:flex md:flex-row md:justify-between flex flex-col items-end justify-end">
                                            <div className="flex items-center">
                                                <Rating value = {produits.ratings}/>
                                                <span className="text-black ml-2"> {produits.numOfReviews} évaluations</span>
                                            </div>
                                            <div className="">
                                                <button className="py-2 px-4 my-4 bg-yellow-500 hover:bg-yellow-700 rounded-md text-black-900 font-black">Ajouter au panier</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> 
                </div>
            </div>
        </div>
    )
};


export default AfficherPlus;

