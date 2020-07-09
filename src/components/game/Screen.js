import React, { useState } from 'react';

import PlayerChoiceButton from './PlayerChoiceButton';
import RandomChoiceViewer from './RandomChoiceViewer';

const Screen = ({ gameMode, saveGame }) => {

    let [ playerSelection, setPlayerSelection ] = useState("question-mark");
    const [ cpuSelection, setCPUSelection ] = useState("question-mark");


    const getRandomChoice = () => {
        const options = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
        return options[Math.floor(Math.random()*options.length)];
    }

    const checkWinner = (player1, player2) => {

        if(player1 === player2) return 'draw'
        switch(player1) {
            case 'Rock':
                if (player2 === "Scissors" || player2 === "Lizard") return 'Player1';
                return 'Player2';
            case 'Paper':
                if (player2 === "Rock" || player2 === "Spock") return 'Player1';
                return 'Player2';
            case 'Scissors':
                if (player2 === "Paper" || player2 === "Lizard") return 'Player1';
                return 'Player2';
            case 'Lizard':
                if (player2 === "Spock" || player2 === "Paper") return 'Player1';
                return 'Player2';
            case 'Spock':
                if (player2 === "Rock" || player2 === "Scissors") return 'Player1';
                return 'Player2';
            default:
                return 'Player2';
        }
    }

    const startGame = () => {
        if (gameMode === "cpu-vs-cpu" || (playerSelection !== "" && playerSelection !== "question-mark")) {
            if (gameMode === "cpu-vs-cpu") playerSelection = getRandomChoice();
            const playerTwoSelection = getRandomChoice();
            const winner = checkWinner(playerSelection, playerTwoSelection);
            gameMode === "cpu-vs-cpu" ?
                setPlayerSelection(playerSelection) :
                setPlayerSelection("");
            setCPUSelection(playerTwoSelection);
            saveGame({player1: playerSelection, player2: playerTwoSelection, winner });
            const winnerH5 = document.querySelector("#winner");
            winner !== "draw" ?
                winnerH5.innerHTML = `${winner} has won!!!!` :
                winnerH5.innerHTML = "Draw!!!!"
        }
        else alert("You must select a weapon");
    }
    
    return (
        <section className="game-screen container">
            <div className="row">
            
                {
                    gameMode === "player-vs-cpu" ?
                    <section className="player-options container col s6">

                        <h2>Chooose your weapon!</h2>
                        <section className="buttons-container" >
                            <PlayerChoiceButton imgSrc="/images/Rock.png" imgAlt="Rock" setPlayerSelection={setPlayerSelection}/>
                            <PlayerChoiceButton imgSrc="/images/Scissors.png" imgAlt="Scissors" setPlayerSelection={setPlayerSelection}/>
                            <PlayerChoiceButton imgSrc="/images/Paper.png" imgAlt="Paper" setPlayerSelection={setPlayerSelection}/>
                            <PlayerChoiceButton imgSrc="/images/Lizard.png" imgAlt="Lizard" setPlayerSelection={setPlayerSelection}/>
                            <PlayerChoiceButton imgSrc="/images/Spock.png" imgAlt="Spock" setPlayerSelection={setPlayerSelection}/>
                        </section> 
                    </section>
                    :
                    <section className="player-options container col s6">
                        <h2>Player 1 Weapon</h2>
                        <div className="container random-container">
                            <RandomChoiceViewer name={playerSelection} />
                        </div>
                    </section>
                }
                <section className="player-options container col s6">
                    <h2>Player 2 Weapon</h2>
                    <div className="container random-container">
                        <RandomChoiceViewer name={cpuSelection} />
                    </div>
                </section>
            </div>
            <div className="winner-container">
                <h5 id="winner"> </h5>
            </div>
            
            <button className="waves-effect waves-light btn-large" onClick={()=> startGame()}>Start!</button>
            

        </section>
    )
}

export default Screen;