import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { getPayloadToken } from "../../shared/services/tokenServices";
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { defaultValueDelivery } from '../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormDelivery } from './../../shared/constants/formik-yup/yup/yupDelivery';
import { URL_PAIEMENT } from "./../../shared/constants/urls/urlConstants";
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

const Livraison = () => {
    const sousTotal = useSelector((state) => state.cart.totalPrice);
    const token = getPayloadToken();
    const [data, setData] = useState([]);
    const [playonce, Setplayonce] = useState(true);
    const [sousSomme, setSousSomme] = useState(sousTotal);
    const [name, setName] = useState();
    const [show, Setshow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        localStorage.setItem('livraison', name);
    }, [name]);

    useEffect(() => {
        // récupération du prix de la livraison dans le local storage
        let vérified = isNaN(localStorage.getItem('livraison'));
        
        if (vérified === false) {
            let saved = localStorage.getItem('livraison');
            setSousSomme((Number(sousTotal) + Number(saved)).toFixed(2));
            Setshow(true);
            console.log("somme", sousSomme)
        }
    });

    useEffect(() => {
        if (playonce) {
            axios
                .get('http://localhost:3001/api/delivery')
                .then((res) => {
                    setData(res.data);
                    console.log(data);
                    Setplayonce(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });

    

    return (
        <>
            
        <div className="container mx-auto px-2 shadow-menu">
            <div className="mt-4 mb-4">
                <p className="text-lg text-center underline font-bold text-gray-800">
                    Votre adresse de livraison : {token.adresse}{" "}{ token.codePostal}{" "}{ token.ville}
                </p>
                <p className="italic text-xs text-center">Modifier mon adresse de livraison</p>
            </div>
            <Formik
                initialValues={defaultValueDelivery}
                validationSchema={schemaFormDelivery}
            >
                {({ values }) => (
                    <Form className="mt-10 ">
                        <div id="my-radio-group">
                            <p className="font-bold underline text-center">
                                Choix du mode de livraison{' '}
                            </p>
                        </div>

                        <div
                            role="group"
                            aria-labelledby="my-radio-group"
                            className="mt-4 flex justify-center"
                        >
                            {data.map((livraisons) => (
                                <label key={livraisons._id}>
                                    <Field
                                        type="radio"
                                        name="livraison"
                                        value={livraisons.price}
                                        onClick={(e) => setName(e.target.value)}
                                        className="ml-6 mr-2"
                                    />
                                    {livraisons.nom}
                                </label>
                            ))}
                        </div>



                        <div className="mt-4 mb-3 " >


                            <p className="text-center mt-2">Sous-Total :<span className='font-bold'> {sousTotal} €</span></p>
                            <p className="text-center mt-2">Livraison :<span className='font-bold'> {values.livraison}€</span> </p>
                            <p className="text-center mt-2">Total : {values.livraison > 0 ? (
                                <span className='font-bold'> {sousSomme} €</span>
                            ) : (
                                <span className='font-bold'> {sousTotal} €</span>
                            )}</p>

                            <div className='flex justify-center mt-4'>
                                {show ? <Link to={URL_PAIEMENT}> <button className="bg-yellow-500 text-center rounded-lg w-60 font-bold shadow-menu mb-8">PASSER A LA COMMANDE</button>
                                </Link> : ""}
                            </div>
                            <div className="text-center " ><button className="underline text-center font-semibold" onClick={() => {
                                history.push(URL_HOME);
                            }}>Annuler</button></div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        </>
    );
};

export default Livraison;
