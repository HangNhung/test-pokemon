import React from 'react';
import { typePokemon } from '../constant/type.js';

function CustomButton(props) {
    const { type } = props;
    const renderType = typePokemon.find(element =>  element.type == type.toLowerCase());
    
    return (
        <span className="btnType" style={{background: `${renderType.color}`}}
            >
                {renderType.type.charAt(0).toUpperCase()}{renderType.type.slice(1)}
        </span>
    )
}

export default CustomButton;