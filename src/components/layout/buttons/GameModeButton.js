import React from 'react';
import { Link } from 'react-router-dom';

const GameModeButton = ({gameMode, name}) => {
    
    return (
        <Link to={`game/${gameMode}`} >
            <button className="waves-effect waves-light btn-large home-buttons">
                {name}
            </button>
        </Link>
    )
}

export default GameModeButton;