import React from "react";
import { useSelector } from 'react-redux';
import { getPayloadToken } from "../shared/services/tokenServices";
import Dayjs from "react-dayjs";
import { ImLocation } from "react-icons/im";
import StripeContainer from '../components/cart/StripeContainer';

const PaiementView = () => {
    const products = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.totalPrice)
    const token = getPayloadToken()
    const Today = Date.now()
    const saved = localStorage.getItem('livraison');
    const totalLivr = Number(total) + Number(saved);



    return (

        <div className="text-xl px-8  ">

            <div className="container md:px-8" >
                {products.map((product, index) => (
                    <ProductInCart product={product} index={index} key={index} />
                ))}
            </div>

            <div className="container md:px-8 " >
                <div className="h-full bg-white p-4  rounded-lg mb-8 space-x-6 border-2 border-gray-300 shadow-sm rounded shadow-lg shadow-gray-500/50">
                    <div className='flex space-x-2'>
                        <ImLocation />
                        <p className="underline font-bold text-gray-800">   Votre adresse de livraison  : {token.adresse}</p>
                    </div>   <p className="text-lg  font-semibold text-black" >
                        Date estimée de livraison :
                        <Dayjs className="date" add={{ days: 6 }} format="DD/MM/YYYY">{Today}</Dayjs>
                    </p>
                    <p className="uppercase text-black font-bold  text-right">
                        Prix total : {totalLivr.toFixed(2)}€
                    </p>
                </div>
            </div>
            <div className="mb-80">
                <StripeContainer />
            </div>
            <div className="mt-16">

            </div>


        </div>


    )
}

export default PaiementView

const ProductInCart = (props) => {
    const product = props.product

    return (
        <div className="h-full bg-white p-4  md:flex md:flex-row  rounded-lg mb-8 space-x-2 border-2 border-gray-300 shadow-sm rounded shadow-lg shadow-gray-500/50">

            <div className="md:w-1/2 flex " >
                <img className="flex  object-scale-down h-48 w-96  object-contain md:object-scale-down" src={`..${product.img_produit[0].url}`} alt={product.nom} />
            </div>
            <div className="md:w-1/2 md:h-full">
                <div className="uppercase text-black font-semibold">
                    <h1>{product.nom}</h1>
                </div>

                <div className="col-span-8">
                    <h1>Maruque : {product.categorie}</h1>
                </div>
                <div className="col-span-8">
                    <h1>Modèle : {product.reference}</h1>
                </div>
                <div className="col-span-8">
                    <h1>Quantité d'achat : {product.qtyInCart}</h1>
                </div>
                <div className="uppercase text-black font-semibold">Prix : {product.price.toFixed(2)}€</div>
                <div className="uppercase text-black font-bold  align-bottom text-right">Sous-Total : {(product.price * product.qtyInCart).toFixed(2)}€</div>

            </div>

        </div>
    )
}