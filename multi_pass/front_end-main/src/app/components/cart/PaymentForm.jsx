import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getPayloadToken } from "../../shared/services/tokenServices";
import { URL_HOME, URL_VAL_COMMANDE } from "./../../shared/constants/urls/urlConstants";
import { totalCartPrice, removeAllProductToCart } from "../../shared/redux-store/cartSlice";

const CARD_OPTIONS = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const token = getPayloadToken()
    const products = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.totalPrice);
    const saved = localStorage.getItem('livraison');
    const totalLivr = Number(total) + Number(saved);

    const dispatch = useDispatch();
    const crypto = require("crypto");
    const genId = crypto.randomBytes(10).toString("hex");
    const [data, setData] = useState({
        id_produit: products,
        userid: token.id,
        numero_commande: genId,
        prix_total: totalLivr.toFixed(2)
    })

    const billingDetails = {
        name: token.nom + " " + token.prenom,
        email: token.email,
        phone: token.telephone,
        address: {
            line1: token.adresse
        }


    }
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios
            .post(`http://localhost:3001/api/commande`, data)
            .then((res, err) => {
                //handle succes
                console.log("handle succes");
                dispatch(removeAllProductToCart());
                dispatch(totalCartPrice(0));
                history.push(URL_VAL_COMMANDE);
                if (err) console.log("error" + err);

            });
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: billingDetails
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:3001/api/payment", {
                    amount: totalLivr * 100,
                    id

                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                    console.log('[PaymentMethod]', paymentMethod);
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }

    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <div className="container md:px-8 space-y-4 ">
                        <fieldset className="h-full bg-white p-4  rounded-lg mb-8 space-x-6 border-2 border-red-300 shadow-sm rounded shadow-lg shadow-gray-500/50">
                            <CardElement options={CARD_OPTIONS} />

                        </fieldset>

                        <div className="relative scale-100 text-center">
                            <button className="bg-yellow-500 text-center rounded-lg w-60 font-bold shadow-menu  ">PAIEMENT</button>
                        </div>
                        <div className="text-center " ><button className="underline text-center font-semibold" onClick={() => {
                            history.push(URL_HOME);
                        }}>Annuler</button></div>

                    </div>
                </form>

                :
                ""
            }

        </>
    )
}
