import React from 'react';
import { useParams } from 'react-router-dom';

//Components
import StartButton from './../components/game/StartButton';
import PlayerChoiceButton from './../components/game/PlayerChoiceButton';

const Game = () => {
    const { gameMode } = useParams();
    return(
        
        gameMode === "player-vs-cpu" || gameMode === "cpu-vs-cpu" ?            
        
        <div>
            <h1>Game</h1>
            <h2>{ gameMode }</h2>
            <section className="buttons-container">
                <PlayerChoiceButton imgSrc="/images/scissors.png" imgAlt="Scissors" />
                
            </section>
            <StartButton />
        </div>

        :
            <h1>Game Mode not supported</h1>
    )
}

export default Game;