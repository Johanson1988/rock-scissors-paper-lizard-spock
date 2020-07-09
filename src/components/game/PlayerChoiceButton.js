import React from 'react';

const PlayerChoiceButton = ({imgSrc, imgAlt, setPlayerSelection}) => {
    return (
        <button  onClick={()=>setPlayerSelection(imgAlt)} className="player-choice-button">
            <div className="card">
                <div className="card-image">
                <img src={imgSrc} alt={imgAlt} />
            {//TODO añadir card title si da tiempo
            }
                </div>
            </div>
        </button>
    )
}

export default PlayerChoiceButton;