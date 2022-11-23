import React, { useState } from "react";
import { isAuthenticated } from "../shared/services/accountServices";
import { getPayloadToken } from "../shared/services/tokenServices";
import UserInfo from "../components/layouts/UserInfo";
import FormInformations from "../components/account/FormInformations";
import ContactView from "./ContactView";
import MesComandes from "./../components/layouts/MesCommandes";
import MesRetours from "../components/layouts/MesRetours";



const ProfilView = (props) => {
  const [ok, Setok] = useState(true);
  const [ok1, Setok1] = useState(false);
  const [ok2, Setok2] = useState(false);
  const [ok3, Setok3] = useState(false);
  const [ok4, Setok4] = useState(false);

  if (isAuthenticated) {
    const local = getPayloadToken(); //la variable local nous permet ici de recuperer toutes les infos user

    const infoList = [
      "MES INFORMATIONS",
      "MES COMMANDES",
      "RETOUR",
      "NOUS CONTACTER",
      "SUPPRIMER MON COMPTE"
    ];

    const infoUserApi = (infoList) => {
      if (infoList === "MES INFORMATIONS") {
        Setok(true);
      } else {
        Setok(false);
      }

      if (infoList === "MES COMMANDES") {
        Setok1(true);
      } else {
        Setok1(false);
      }

      if (infoList === "RETOUR") {
        Setok2(true);
      } else {
        Setok2(false);
      }
      if (infoList === "NOUS CONTACTER") {
        Setok3(true);
      } else {
        Setok3(false);
      }
      if (infoList === "SUPPRIMER MON COMPTE") {
        Setok4(true);
      } else {
        Setok4(false);
      }
    };

    return (
      <>
        <div className="flex flex-row  mt-28 md:ml-2 container mx-80">
          <div className="flex flex-col space-y-6 ml-4">
            {infoList.map((infoList) => (
              <button
                className="bg-colornav-100 hover:bg-green-800 hover:text-white text-black  w-64 h-20 rounded shadow-xl"
                key={infoList}
                onClick={() => infoUserApi(infoList)}
              >
                {infoList}
              </button>
            ))}
          </div>
          <div className="ml-24 flex items-start w-auto md:w-2/4">
            {ok ? <UserInfo /> : null}
            {ok1 ? <MesComandes /> : null}
            {ok2 ? <MesRetours /> : null}
            {ok3 ? <ContactView data={local} /> : null}
            {ok4 ? <FormInformations  /> : null}

          </div>
        </div>
      </>
    );
  }
};

export default ProfilView;
