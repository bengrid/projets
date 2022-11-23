import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { isAuthenticated } from "../../shared/services/accountServices";
import { getPayloadToken } from "../../shared/services/tokenServices";
import UserRetour from "./UserRetour";

const MesRetours = () => {
  const [retour, Setretour] = useState([]);
  const [playonce, setPlayOnce] = useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      const local = getPayloadToken();
      if (playonce) {
        axios
          .get(`http://localhost:3001/api/userretour/${local.id}`)
          .then((res) => {
            Setretour(res.data);
            setPlayOnce(false);
          });
      }
    }
  }, [retour, playonce]);
  return (
    <>
      <div>
        {retour.map((mapRetour) => (
          <>
            <p>
              <b>motif du retour:</b> {mapRetour.motif}
            </p>
            <UserRetour
              data={mapRetour.id_produit}
              key={mapRetour.id_produit}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default MesRetours;
