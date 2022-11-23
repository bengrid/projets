import React from "react";
import { Link } from 'react-router-dom';
import { URL_DETAIL_PRODUIT, URL_HOME, URL_LISTE_PRODUIT, URL_LISTE_PRODUIT_RECH } from "../../shared/constants/urls/urlConstants";
import { URL_CONTACT } from "../../shared/constants/urls/urlConstants";
import { URL_VAL_COMMANDE } from "../../shared/constants/urls/urlConstants";
import { URL_MESSAGE } from "../../shared/constants/urls/urlConstants";
import { URL_PROFIL } from "../../shared/constants/urls/urlConstants";
import { URL_INCRISPTION } from "../../shared/constants/urls/urlConstants";
import { URL_TEST } from "../../shared/constants/urls/urlConstants";
import { AiOutlineFacebook ,AiFillTwitterSquare } from "react-icons/ai";
import { Formik, Form, Field } from "formik";




const Footer = (props) => {
    return (
        <footer className="w-full">
            <div className="block">
            <div className="max-w-7xl mx-auto">
                <div className="sm:mt-0 sm: px-8 flex flex-col md:flex-row justify-between">

                <div className="flex flex-col FooterCadreLi1">
                    <span className="FooterTitre font-bold text-white uppercase md:mt-0 mb-2 font-bold  ">PC</span>
                    <span className="my-2 text-white uppercase md:mt-0 mb-4 font-bold px-0">BUILDING</span>
                    </div>


<div className="flex flex-row justify-end">
                    <div className="flex flex-col FooterCadreLi2">
                    <span className="FooterTitre font-bold text-white lg:px-0 uppercase md:mt-0 mb-4 font-bold px-0 ">A PROPOS</span>
                    <FooterBtnApropos/>
                    </div>

                    <div className="flex flex-col FooterCadreLi3">
                    <span className="FooterTitre font-bold text-white   uppercase md:mt-0 mb-2 font-bold px-2 ">COMMANDES</span>
                        <FooterBtnCommandes/>
                    </div>


                    <div className="flex flex-col FooterCadreLi4">
                    <span className="FooterTitre font-bold text-white   uppercase md:mt-0 mb-2 font-bold px-2 ">NOS OFFRES</span>
                        <FooterBtnOffres/>
                    </div>


                    <div className="flex flex-col FooterCadreLi5">
                    <span className="FooterTitre font-bold text-white   uppercase md:mt-0 mb-2 font-bold px-2 ">SUIVIS-NOUS</span>
                        <FooterBtnSuivis/>
                    </div>
                
                    </div>




            </div>
        </div>

<hr />
<div className="block">
            <div className="max-w-7xl mx-auto">
                <div className="sm:mt-0 sm: px-8 flex flex-col md:flex-row justify start">

            
        <div className="flex flex-row FooterCadreLi6">
                    <span className="FooterTitre font-bold text-white  text-1xl uppercase md:mt-0 mb-2 font-bold px-2 "></span>
                    <FooterBtnConditions/>
                    </div>
                    
                
                    <div className="flex flex-row FooterCadreLi7">
                    <span className="FooterTitre font-bold text-white  text-1xl uppercase md:mt-0 mb-2 font-bold px-2 "></span>
                    <FooterBtnAccessibilite/>
                    </div>

                    <div className="flex flex-row FooterCadreLi8">
                    <span className="FooterTitre font-bold text-white  text-1xl uppercase md:mt-0 mb-2 font-bold px-2 "></span>
                    <FooterBtnGestions/>
                    </div>

                    <div className="flex flex-row FooterCadreLi9">
                    <span className="FooterTitre font-bold text-white  text-1xl uppercase md:mt-0 mb-2 font-bold px-2 "></span>
                    <FooterBtnViePrive/>
                    </div>

        </div>
        </div>
        </div>
        </div>


        </footer>
    )
    };

    export default Footer;

const FooterBtnApropos = () => {
    return (
        < >
            <Link to={ URL_INCRISPTION}>
                <div className='block lg:mt-0 text-white  mr-4 link'>
                    Qui sommes nous
                </div>
            </Link>
            <Link to={ URL_CONTACT}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    nous contacter
                </div>
            </Link>
            <Link to={URL_MESSAGE}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    faq
                </div>
                </Link>    
    </>
        
    )
}

const FooterBtnCommandes = () => {
    return (
        <>
            <Link to={URL_VAL_COMMANDE}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Mes commandes
                </div>
            </Link>
            <Link to={URL_HOME}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Retours
                </div>
            </Link>
            <Link to={URL_PROFIL}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Mon compte
                </div>
            </Link>
        
        </>
    )
}


const FooterBtnOffres = () => {
    return (
        <>
            <Link to={URL_VAL_COMMANDE}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    ordinateurs
                </div>
            </Link>
            <Link to={URL_LISTE_PRODUIT}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    Periferiques

                </div>
            </Link>
            <Link to={URL_LISTE_PRODUIT}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    composants
                </div>
            </Link>
            <Link to={URL_LISTE_PRODUIT}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    accessoires
                </div>
            </Link>
        </>
    )
}


const FooterBtnSuivis = () => {
    return (
        <>
            <Link to={URL_PROFIL}>
                <div className='flex flex-row lg:mt-0 text-white mr-4 link'>
                
            <AiFillTwitterSquare />
            twitter
                </div>
            </Link>
            <Link to={URL_PROFIL}>
                <div className='flex flex-row lg:mt-0 text-white mr-4 link'>
                
        
            <AiOutlineFacebook /> 
            facebook
            
                </div>
            </Link>
        
            
            <Link to={URL_HOME}>
            <div>

<Formik>
<Form>
    <Field name="email" type="email" placeholder="news letter" 
className='p-2 border-gray-400' />
    
</Form>


</Formik>
</div>

            </Link>
        </>
    )
    

    }

<hr />
const FooterBtnConditions = () => {
    return (
        <>
            <Link to={URL_HOME}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    conditions utilisations
                </div>
            
            </Link>
        </>
    )
}

const FooterBtnAccessibilite = () => {
    return (
        <>
            <Link to={URL_HOME}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    accessibilité
                </div>
            
            </Link>
        </>
    )
}

const FooterBtnGestions = () => {
    return (
        <>
            <Link to={URL_HOME}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    gestions de cookies
                </div>
            
            </Link>
        </>
    )
}


const FooterBtnViePrive = () => {
    return (
        <>
            <Link to={URL_HOME}>
                <div className='block lg:mt-0 text-white mr-4 link'>
                    vie privée
                </div>
            
            </Link>
        </>
    )
}
