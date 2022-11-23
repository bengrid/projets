import React from 'react'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="w-full">
            <div>
                <h2>Votre panier est vide</h2>
                <p>Vous n'avez pas d'articles dans votre panier</p>
            </div>
            <div>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
