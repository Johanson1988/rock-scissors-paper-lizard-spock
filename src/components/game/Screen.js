import React, { useState } from 'react';

import PlayerChoiceButton from './PlayerChoiceButton';
import RandomChoiceViewer from './RandomChoiceViewer';

const Screen = ({ gameMode, saveGame }) => {

    let [ playerSelection, setPlayerSelection ] = useState("");
    let [ cpuSelection, setCPUSelection ] = useState("question-mark");

    const getRandomChoice = () => {
        const options = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
        return options[Math.floor(Math.random()*options.length)];
    }

    const checkWinner = (player1, player2) => {

        if(player1 === player2) return 'draw'
        switch(player1) {
            case 'Rock':
                if (player2 === "Scissors" || player2 === "Lizard") return 'player1';
                return 'player2';
            case 'Paper':
                if (player2 === "Rock" || player2 === "Spock") return 'player1';
                return 'player2';
            case 'Scissors':
                if (player2 === "Paper" || player2 === "Lizard") return 'player1';
                return 'player2';
            case 'Lizard':
                if (player2 === "Spock" || player2 === "Paper") return 'player1';
                return 'player2';
            case 'Spock':
                if (player2 === "Rock" || player2 === "Scissors") return 'player1';
                return 'player2';
            default:
                return 'player2';
        }
    }

    const startGame = () => {
        if (gameMode === "cpu-vs-cpu") playerSelection = getRandomChoice();
        const playerTwoSelection = getRandomChoice();
        const winner = checkWinner(playerSelection, playerTwoSelection);
        console.log(winner);
        
        saveGame({player1: playerSelection, player2: playerTwoSelection, winner })


    }
    
    return (
        <section className="game-screen container">
            <div className="row">
            <section className="player-options container col s6">
                <h2>Chooose your weapon!</h2>
                <section className="buttons-container" >
                    <PlayerChoiceButton imgSrc="/images/rock.png" imgAlt="Rock" setPlayerSelection={setPlayerSelection}/>
                    <PlayerChoiceButton imgSrc="/images/scissors.png" imgAlt="Scissors" setPlayerSelection={setPlayerSelection}/>
                    <PlayerChoiceButton imgSrc="/images/paper.png" imgAlt="Paper" setPlayerSelection={setPlayerSelection}/>
                    <PlayerChoiceButton imgSrc="/images/lizard.png" imgAlt="Lizard" setPlayerSelection={setPlayerSelection}/>
                    <PlayerChoiceButton imgSrc="/images/spock.png" imgAlt="Spock" setPlayerSelection={setPlayerSelection}/>
                </section>
            </section>
            <section className="player-options container col s6">
                <h2>Player 2 Weapon</h2>
                <div className="container random-container">
                    <RandomChoiceViewer name={cpuSelection} />
                </div>
            </section>
            </div>
            
            <button className="waves-effect waves-light btn-large" onClick={()=> startGame()}>Start!</button>
            

        </section>
    )
}

export default Screen;