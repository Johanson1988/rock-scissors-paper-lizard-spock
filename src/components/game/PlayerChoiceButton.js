import React from 'react';

const PlayerChoiceButton = ({imgSrc, imgAlt}) => {
    return (
        <button>
            <img src={imgSrc} alt={imgAlt} />
        </button>
    )
}

export default PlayerChoiceButton;