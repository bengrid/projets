import React from 'react'
import { FaTruck } from "react-icons/fa";

const LivraisonVide = () => {
  return (
    <div className="" >
        <div>
            <p className="text-3xl text-center italic mt-">
                Veuillez ajouter un article dans votre panier pour afficher les modes de livraison
            </p>
        </div>
        <div className="mt-10">
            <FaTruck className="w-screen text-3xl mt-28"/>
        </div>
        
    </div>
  )
}

export default LivraisonVide