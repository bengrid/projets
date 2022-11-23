import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { isAuthenticated } from "../../shared/services/accountServices";
import { getPayloadToken } from "../../shared/services/tokenServices";
import UserProduit from "./UserProduit";

const MesComandes = () => {
  const [produit, Setproduit] = useState([]);
  const [playonce, setPlayOnce] = useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      const local = getPayloadToken();
      if (playonce) {
        axios
          .get(`http://localhost:3001/api/usercommande/${local.id}`)
          .then((res) => {
            Setproduit(res.data.id_produit);
            setPlayOnce(false);
          });
      }
    }
  }, [produit, playonce]);
  return (
    <>
      <div className="flex flex-col">
        
        { produit.map((idproduit) => (
          <UserProduit data={idproduit} key={idproduit} className="mb-5" />
        ))}
      </div>
      
    </>
  );
};

export default MesComandes;
