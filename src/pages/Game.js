import React from 'react';
import { useParams } from 'react-router-dom';

//Components
import StartButton from './../components/game/StartButton';

const Game = () => {
    const { gameMode } = useParams();
    return(
        <div>
            <h1>Game</h1>
            <h2>{ gameMode }</h2>
            <StartButton />
        </div>
    )
}

export default Game;