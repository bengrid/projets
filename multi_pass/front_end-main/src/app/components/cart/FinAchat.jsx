import React from "react"
import { URL_HOME } from "./../../shared/constants/urls/urlConstants";
import { useHistory } from "react-router-dom";

function FinAchat() {
    const history = useHistory();
    return (
        <div className="text-xl px-8 text-lg  font-semibold text-black text-center space-y-4">
            <h2>Félicitations !! Votre commande a été enregistrée </h2>
            <div className="text-center " ><button className="underline text-center font-semibold" onClick={() => {
                history.push(URL_HOME);
            }}>Télécharger votre facture</button></div>
            <div className="relative scale-100 text-center">
                <button className="bg-yellow-500 text-center rounded-lg w-60 font-bold shadow-menu  ">MES COMMONDE</button>
            </div>
            <div className="text-center " ><button className="underline text-center font-semibold" onClick={() => {
                history.push(URL_HOME);
            }}>Annuler</button></div>
        </div>
    )
}
export default FinAchat