import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import StartButton from './../components/game/StartButton';
import PlayerChoiceButton from './../components/game/PlayerChoiceButton';

const Game = () => {
    const { gameMode } = useParams();
    const [ playerSelection, setPlayerSelection ] = useState(null);

    return (
        
        gameMode === "player-vs-cpu" || gameMode === "cpu-vs-cpu" ?            
        
        <div>
            <h1>Game</h1>
            <h2>{ gameMode }</h2>
            <section className="buttons-container">
                <PlayerChoiceButton imgSrc="/images/scissors.png" imgAlt="Scissors" setPlayerSelection={setPlayerSelection}/>
                <h4>Hola:{playerSelection}</h4>
                
            </section>
            <StartButton />
        </div>

        :
            <h1>Game Mode not supported</h1>
    )
}

export default Game;