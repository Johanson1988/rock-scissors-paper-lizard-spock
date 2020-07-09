import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Components

import PlayerChoiceButton from './../components/game/PlayerChoiceButton';
import Screen from './../components/game/Screen';
import GameHistory from './../components/game/GameHistory';

const Game = () => {
    const { gameMode } = useParams();
    const [ playerSelection, setPlayerSelection ] = useState("");
    const [ gameHistory, setGameHistory ] = useState([]);

    const saveGame = newGame => {
        console.log('Saving game: ', newGame);
        setGameHistory([...gameHistory, newGame])}

    return (
        
        gameMode === "player-vs-cpu" || gameMode === "cpu-vs-cpu" ?            
        
        <div>
            <h1>Game</h1>
            <h2>{ gameMode }</h2>
            <section className="buttons-container">
                <PlayerChoiceButton imgSrc="/images/scissors.png" imgAlt="Scissors" setPlayerSelection={setPlayerSelection}/>
                <h4>Hola:{playerSelection}</h4>
                <Screen gameMode={ gameMode } playerSelection={ playerSelection } saveGame={ saveGame } />
                <GameHistory previousGames={ gameHistory } />
            </section>
            <section className="game-history-container">

            </section>
        </div>

        :
            <h1>Game Mode not supported</h1>
    )
}

export default Game;