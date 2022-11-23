import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from 'react-redux';
import { URL_PANIER } from './../../shared/constants/urls/urlConstants';
import { Link } from 'react-router-dom';
import { totalCartPrice } from "../../shared/redux-store/cartSlice";

const IconPanier = () => {
    const dispatch = useDispatch()
    dispatch(totalCartPrice())

    const cartQty = useSelector(state => state.cart.cart.length)
    const total = useSelector(state => state.cart.totalPrice)
    const [currentTotal, setCurrentTotal] = useState(total)

    useEffect(() => {
        setCurrentTotal(total)
    }, [cartQty, total])

    return (
        <Link className="md:ml-5 md:px-5 relative flex flex-col items-center" to={URL_PANIER}>
            <IconContext.Provider value={{ size: "2em" }}>
                <AiOutlineShoppingCart />
            </IconContext.Provider>
            <div className="btn btn-green absolute -top-2 right-0 border border-black rounded w-auto h-auto p-1">
                <p className="m-auto text-notif-panier font-bold">{cartQty ? cartQty : 0}</p>
            </div>
            <p className="absolute -bottom-3 md:-bottom-5 text-center">{currentTotal}€</p>
        </Link>
    )
}

export default IconPanier

