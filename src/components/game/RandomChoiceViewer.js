import React from 'react';

const RandomChoiceViewer = ({name}) => {
    return(
        <div className="card player-choice-button">
                <div className="card-image ">
                <img src={`/images/${name}.png`} alt={name} />
            {//TODO añadir card title si da tiempo
            }
                </div>
            </div>
    )
}

export default RandomChoiceViewer;