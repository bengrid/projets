
import React from 'react';
import { FaStar } from 'react-icons/fa';


export default function Rating({value}) {
    
    
    return (
        <div >
            <div className="flex flex-row items-center mr-4">
                <FaStar
                    className={ value >= 1 ? "text-yellow-400" :  "text-gray-400" } 
                />
                <FaStar
                    className={ value >= 2 ? "text-yellow-400" : "text-gray-400"  } 
                />
                <FaStar
                    className={ value >= 3 ? "text-yellow-400" : "text-gray-400"  } 
                />
                <FaStar
                    className={ value >= 4 ? "text-yellow-400" : "text-gray-400"  } 
                />
                <FaStar
                    className={ value >= 5 ? "text-yellow-400" : "text-gray-400" } 
                />
            </div>
        </div>
    );
}