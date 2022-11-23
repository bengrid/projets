import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {RiChatSmile2Fill} from 'react-icons/ri';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { URL_HOME } from '../../shared/constants/urls/urlConstants';

const MessageContact = () => {
    return (
        <div className="bg-gray-800 md:mt-36 w-3/5 my-0 mx-auto">
            <div className="bg-white border-4 border-green-900 w-full py-4 px-24">
                <MdOutlineEmail className="w-full md:text-9xl text-green-800 " />
                <div className="flex items-center justify-center space-x-6">
                    <h3 className=" uppercase text-center md:text-2xl font-black py-4">Merci</h3>
                    <RiChatSmile2Fill className="md:text-6xl text-green-800 " />
                </div>
                <div className="mb-16">
                    <p className="text-center font-medium text-2xl text-black">Nous avons bien reçu votre message et prendrons contacte avec vous dans les meilleurs délai. </p>
                </div>
                <div >
                    <Link to = { URL_HOME } className="flex md:flex justify-center items-center"> <AiOutlineArrowLeft className="text-2xl" /> <p>retour à la page d'accueil</p></Link>
                </div>
            </div>
            
        </div>
    );
};

export default MessageContact;