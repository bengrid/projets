import React, { useState, useEffect } from "react";
import { AiTwotoneBoxPlot } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import Livraison from "../components/cart/Livraison";
import LivraisonVide from "../components/cart/LivraisonVide";
import { increaseProductQty, decreaseProductQty, removeProductToCart, totalCartPrice } from "../shared/redux-store/cartSlice";

const PanierView = () => {
    const products = useSelector(state=>state.cart.cart)
    const total = useSelector(state=>state.cart.totalPrice)

    return (
        <>
        <div className="text-2xl text-center mx-auto">
            {products.length > 0 ? (
                <h2>Votre panier</h2>
            ) : (
            <> 
                    <div>
                        <div>
                            <h2>Panier vide</h2>
                        </div>
                    </div>
                </>
                
                
            )}
            <div className="container md:px-4 grid grid-cols-5 gap-4 mt-4 mx-auto">
                <div className="col-span-5 md:col-span-4 flex flex-col">
                    {products.map((product, index)=>(
                        <ProductInCart product={product} index={index} key={index}/>
                    ))}
                </div>
                <div className="col-span-5 flex justify-between shadow-menu md:col-span-1">
                    <div className="px-4 md:px-0 flex flex-row md:flex-col items-center justify-between md:justify-end w-full">
                        <p>Prix total : {total}€</p>
                        <button className="btn btn-green md:my-4">Commander</button>
                    </div>
                </div>
            </div>
        </div>
        {products.length > 0 ? (
            <Livraison/>
        ) : (
            <LivraisonVide/>
        )}
        
        </>
    )
}

export default PanierView

const ProductInCart = (props) => {
    const product = props.product
    const dispatch = useDispatch()
    const [qty, setQty] = useState(0)

    useEffect(()=>{
        setQty(product.qtyInCart)
    },[product, qty])
    
    const handleIncreaseQty = () => {
        dispatch(increaseProductQty(product._id))
        dispatch(totalCartPrice())
    }

    const handleDecreaseQty = () => {
        dispatch(decreaseProductQty(product._id))
        dispatch(totalCartPrice())
    }

    const handleRemoveProductToCart = () => {
        dispatch(removeProductToCart(product._id))
        dispatch(totalCartPrice())
    }

    return (
        <div className="shadow-menu grid grid-cols-12 items-center overflow-hidden">

            <div className="col-span-3 row-span-2 h-24 flex items-center justify-center py-1" >
                <img className="m-auto max-w-full max-h-full" src={`..${product.img_produit[0].url}`} alt={product.nom} />
            </div>

            <div className="col-span-8">
                <h1>{product.nom}</h1>
            </div>

            <div className="col-span-1 lg:row-span-2">
                <button onClick={handleRemoveProductToCart} className="btn btn-red px-2 py-1">X</button>
            </div>

            <div className="col-span-3">Prix: {product.price.toFixed(2)}€</div>
            
            <div className="col-span-3 lg:col-span-2 flex justify-around"> {/* mdifier qty / supprimer */}
                <button onClick={handleDecreaseQty} className={`btn ${qty>1?'btn-green':''} px-2 py-1`} disabled={qty>1?false:true}>-</button>
                <span className="btn px-2 py-1">{qty}</span>
                <button onClick={handleIncreaseQty} className="btn btn-green px-2 py-1">+</button>
            </div>
            
            <div className="col-span-3">Total: {(product.price*qty).toFixed(2)}€</div>
            
        </div>
    )
}