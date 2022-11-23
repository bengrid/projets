import React, { useEffect, useState } from 'react';
import axios from "axios"

const FilterProduits = () => {
    
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/listeproduit")
        .then( res => {
            setDatas(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    });

    return (
        <div className="w-full">
            
        </div>
    );
};

export default FilterProduits;