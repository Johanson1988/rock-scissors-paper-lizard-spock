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
            <h2>Game Mode: { gameMode }</h2>
            <section className="buttons-container">
                <PlayerChoiceButton imgSrc="/images/rock.png" imgAlt="Rock" setPlayerSelection={setPlayerSelection}/>
                <PlayerChoiceButton imgSrc="/images/scissors.png" imgAlt="Scissors" setPlayerSelection={setPlayerSelection}/>
                <PlayerChoiceButton imgSrc="/images/paper.png" imgAlt="Paper" setPlayerSelection={setPlayerSelection}/>
                <PlayerChoiceButton imgSrc="/images/lizard.png" imgAlt="Lizard" setPlayerSelection={setPlayerSelection}/>
                <PlayerChoiceButton imgSrc="/images/spock.png" imgAlt="Spock" setPlayerSelection={setPlayerSelection}/>
            </section>

            <section className="screen-container">
                <Screen gameMode={ gameMode } playerSelection={ playerSelection } saveGame={ saveGame } />
            </section>

            <section className="game-history-container">
                <GameHistory previousGames={ gameHistory } />
            </section>
        </div>

        :
            <h1>Game Mode not supported</h1>
    )
}

export default Game;