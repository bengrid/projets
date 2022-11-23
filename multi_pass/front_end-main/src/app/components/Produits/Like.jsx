import React, { useState, useEffect } from 'react';
import { AiFillLike } from "react-icons/ai";
import axios from "axios";
import { getPayloadToken } from "../../shared/services/tokenServices";
import { likessend } from '../../api/backend/account';
import { useHistory } from 'react-router'
import { Component } from 'react';

function Like(props) {

    const token = getPayloadToken()
    const tokenId = token.id
    const [nbrLikes, setNbrLikes] = useState(props.avis.likesAvis.length);
    const [likeactive, setLikeactive] = useState(false);
    const history = useHistory()

    const handleSubmit = (data) => {
        setLikeactive(true)
        likessend({
            userId: tokenId,
            avisId: props.id
        })
        history.go(0)

    };

    useEffect(() => {

        if (props.avis.likesAvis.includes(tokenId)) {
            setLikeactive(true)
            console.log("nbr-----", props.avis.likesAvis.length)
            setNbrLikes(props.avis.likesAvis.length)
        } else {
            console.log("nbr-----", props.avis.likesAvis.length)
            setNbrLikes(props.avis.likesAvis.length)
            setLikeactive(false)
        }


    }, [props.avis.likesAvis.length]
    );

    return (
        <div className='flex space-x-2'>
            <button onClick={handleSubmit} className={likeactive ? 'text-blue-300' : 'text-black'}>
                <AiFillLike />
            </button>
            <div>{nbrLikes}</div>
        </div>
    )

}

export default Like;

