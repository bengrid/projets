import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../../shared/redux-store/cartSlice';

const AjoutPanier = (props) => {
    const dispatch = useDispatch()
    const reduxCart = useSelector(state=>state.cart.cart)

    const handleAddProductToCart = () => {
        props.product.qtyInCart=1
        dispatch(addProductToCart(props.product))
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(reduxCart))
    }, [reduxCart])

    const alreadyToCart = reduxCart.find(x=>(x._id === props.product._id))? true : false ;
    
    return (
        <>
            {alreadyToCart ? (
                    <button className="btn btn-red">deja au panier</button>
                ) : (
                    <button className="btn btn-green" onClick={handleAddProductToCart}>Ajouter au panier</button>
                )
            }
        </>
    )
}

export default AjoutPanier
