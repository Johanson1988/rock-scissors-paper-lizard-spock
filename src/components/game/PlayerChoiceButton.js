import React from 'react';

const PlayerChoiceButton = ({imgSrc, imgAlt, setPlayerSelection}) => {
    return (
        <button  onClick={()=>setPlayerSelection(imgAlt)}>
        <div class="card">
        <div class="card-image">
          <img src={imgSrc} alt={imgAlt} />
          {//TODO añadir card title si da tiempo
          }
        </div>
        </div>
        </button>
    )
}

export default PlayerChoiceButton;