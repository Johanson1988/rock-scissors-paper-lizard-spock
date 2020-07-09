import React from 'react';



const Screen = ({ gameMode, playerSelection, saveGame }) => {

    const getRandomChoice = () => {
        const options = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
        return options[Math.floor(Math.random()*options.length)];
    }

    const checkWinner = (player1, player2) => {
        console.log(player1, player2);
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
        <section className="game-screen">
            <h2>Player 1</h2>
            <button className="waves-effect waves-light btn-large" onClick={()=> startGame()}>Start!</button>
            
            <h2>Player 2</h2>
            
        </section>
    )
}

export default Screen;