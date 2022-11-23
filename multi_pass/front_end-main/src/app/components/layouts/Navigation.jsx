import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';
import { AiOutlineHome, AiOutlineMenu, AiOutlineSearch, AiOutlineHeart, AiOutlineUser, AiOutlineCaretRight } from 'react-icons/ai'
import { IconContext } from "react-icons";
import IconPanier from './../cart/IconPanier';

const Navigation = () => {
    const history = useHistory();
    // option : à mettre en bdd
    const categories = [
        [
            'Ordinateurs',
            [
                'Notre selection',
                'Portable',
                'Desk',
                'Macbook',
                'Gaming',
                'Microsoft Surface',
                'Google Chromebook'
            ]
        ],
        [
            'Péripheriques',
            [
                'Ecrans',
                'Claviers',
                'Souris',
                'Stockage',
                'Webcams',
                'Enceintes',
                'Casques',
                'Manettes de jeu',
                'Imprimantes',
                'Scanners'
            ]
        ],
        [
            'Composants',
            [
                'Processeurs',
                'Cartes mere',
                'Cartes graphique',
                'Boitiers',
                'Memoires',
                'Disques dur',
                'Alimentations',
                'Cartes son',
                'Ventilateurs'
            ]
        ],
        [
            'Accessoires',
            [
                'Connectique',
                'Cables',
                'Stylos',
                'Protections magnétique',
                'pochettes',
                'Consomables'
            ]
        ],
        [
            'Réseau',
            [
                'Répéteurs Wifi',
                'Modems',
                'Routeurs',
                'Firewalls',
                'Antennes'
            ]
        ],
        [
            'Support',
            [
                'Diagnostique',
                'Depannage',
            ]
        ],

    ]


    const handleClick = () => {
        document.getElementsByClassName('navigation')[0].classList.toggle('hidden')
    }

    const handleClickBis = (e) => {
        [...document.getElementsByClassName('categories')].map(x=>x.style.background = '#D4ECDD')
        e.currentTarget.style.background = '#059669';
        [...document.getElementsByClassName('ssMenu')].map(x=>x.classList.add('hidden'))
        e.currentTarget.lastChild.classList.toggle('hidden');
    }
    
    const handleMouseOver = (e) => {
        e.currentTarget.lastChild.classList.remove('hidden');
    }

    const handleMouseLeave = (e) => {
        if(e.currentTarget.childElementCount>1){
            e.currentTarget.lastChild.classList.add('hidden');
        }
    }

    return (
        <div>
            <div className="md:hidden fixed left-0 bottom-0 w-full flex flex-col-reverse">
                <div className="flex justify-around bg-colornav-100 border-2 p-2 w-full">
                    <IconContext.Provider value={{ color: "black", size: "2em"}}>
                        <button>
                            <AiOutlineHome onClick={()=>{history.push(URL_HOME)}}/>
                        </button>
                        <button>
                            <AiOutlineMenu onClick={handleClick}/>
                        </button>
                        <button>
                            <AiOutlineSearch />
                        </button>
                        <button>
                            <AiOutlineHeart />
                        </button>
                        <button>
                            <AiOutlineUser />
                        </button>
                    </IconContext.Provider>
                    <IconPanier />
                </div>
                {/* menu mobile */}
                <ul className="hidden md:flex shadow-lg relative navigation left-0 bg-colornav-100 w-1/2">
                    {categories.map((categorie, index)=>{
                        return (
                            <li 
                                key={index} 
                                onClick={handleClickBis}
                                className="categories flex items-center justify-between p-3"
                            >
                                <Link className="block" to={categorie[0].replace(/[' ]/g,'_')}>{categorie[0].toUpperCase()}</Link>
                                <AiOutlineCaretRight/>
                                <SsMenu sousCategories={categorie[1]}/>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* menu desk */}
            <ul className="hidden md:flex shadow-menu relative navigation">
                {categories.map((categorie, index)=>{
                    return (
                        <li 
                            key={index} 
                            onMouseOver={handleMouseOver} 
                            onMouseLeave={handleMouseLeave} 
                            className="w-1/5 text-center hover:bg-green-500 shadow"
                        >
                            <Link className="block w-full p-3" to={categorie[0].replace(/[' ]/g,'_')}>{categorie[0].toUpperCase()}</Link>
                            <SsMenu sousCategories={categorie[1]}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navigation




const SsMenu = (props) => {
    if(props.sousCategories){
        return (
            <div className="ssMenu hidden absolute flex flex-col left-full bottom-0 md:bottom-auto w-full p-2 bg-colornav-100 shadow-menu max-h-screen
                md:flex-row md:flex-wrap md:left-0 md:top-full">
                {props.sousCategories.map((sousCategorie, index)=>{
                    return(
                        <p key={index} className=" m-2 md:m-4">
                            <Link to={sousCategorie.replaceAll(/[' ]/g,'_').toLowerCase()} className="block p-2 bg-colornav-200 hover:bg-green-500 hover:shadow-menub shadow-menu w-full md:w-auto md:rounded-full">{sousCategorie}</Link>
                        </p>
                    )
                })}
            </div>
        )
    } else {
        return false
    }
}