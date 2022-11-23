import React from "react";
import { isAuthenticated } from "../../shared/services/accountServices";
import { getPayloadToken } from "../../shared/services/tokenServices";
import { FaUserCircle } from "react-icons/fa";
import {URL_INFORMATIONS} from "../../shared/constants/urls/urlConstants";
import {Link} from "react-router-dom";

const UserInfo = () => {
  if (isAuthenticated) {
    const local = getPayloadToken();

    return (
      <>
        <div className="bg-white p-5 rounded-md w-auto space-y-5 py-12 px-10 sm:px-6 lg:px-10 shadow-2xl border ml-10">
          <FaUserCircle className="w-24 h-24 ml-1 "/>
          <h2>
            <b>MES INFORMATIONS</b>
          </h2>
          <p className="mt-4">
            <b>Nom:</b> {local.nom}
          </p>
          <p>
            <b>Prenom:</b> {local.prenom}
          </p>
          <p>
            <b>Email:</b> {local.email}
          </p>
          <p>
            <b>telephone:</b> 0{local.telephone}
          </p>
        <Link  to={URL_INFORMATIONS}>
        
          <button  className="hover:bg-gray-600 group relative btn  w-full bg-gray-800 text-white text-center mt-24">
            Modifier vos informations
          </button>
          </Link>
      
        
        </div>
      </>
    );
  }
};

export default UserInfo;
