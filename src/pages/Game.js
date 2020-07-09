import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Components


import Screen from './../components/game/Screen';
import GameHistory from './../components/game/GameHistory';

const Game = () => {
    const { gameMode } = useParams();

    const [ gameHistory, setGameHistory ] = useState([]);

    const saveGame = newGame => setGameHistory([...gameHistory, newGame]);

    return (
        
        gameMode === "player-vs-cpu" || gameMode === "cpu-vs-cpu" ?            
        
        <div>

            <h2>Game Mode: { gameMode }</h2>
                

                <section className="screen-container">
                    <Screen gameMode={ gameMode } saveGame={ saveGame } />
                </section>

            <section className="game-history-container container">
                <GameHistory previousGames={ gameHistory } />
            </section>
        </div>

        :
            <h1>Game Mode not supported</h1>
    )
}

export default Game;