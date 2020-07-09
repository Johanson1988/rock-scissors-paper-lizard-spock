import React from 'react';

const PlayerChoiceButton = ({imgSrc, imgAlt, setPlayerSelection}) => {
    return (
        <button  onClick={()=>setPlayerSelection(imgAlt)}>
            <img src={imgSrc} alt={imgAlt} />
        </button>
    )
}

export default PlayerChoiceButton;