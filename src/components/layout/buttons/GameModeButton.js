import React from 'react';
import { Link } from 'react-router-dom';

const GameModeButton = ({gameMode, name}) => {
    
    return (
        <Link to={`game/${gameMode}`} >
            <button>
                {name}
            </button>
        </Link>
    )
}

export default GameModeButton;