import React from 'react';



const Screen = ({ gameMode, playerSelection }) => {

    const getRandomChoice = () => {
        const options = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
        return options[Math.floor(Math.random()*options.length)];
    }

    const checkIfPlayerOneWin = (player1, player2) => {
        console.log(player1, player2);
        if(player1 === player2) return 'draw'
        switch(player1) {
            case 'Rock':
                if (player2 === "Scissors" || player2 === "Lizard") return true;
                return false;
            case 'Paper':
                if (player2 === "Rock" || player2 === "Spock") return true;
                return false;
            case 'Scissors':
                if (player2 === "Paper" || player2 === "Lizard") return true;
                return false;
            case 'Lizard':
                if (player2 === "Spock" || player2 === "Paper") return true;
                return false;
            case 'Spock':
                if (player2 === "Rock" || player2 === "Scissors") return true;
                return false;
            default:
                return false;
        }
    }

    const startGame = () => {
        if (gameMode === "cpu-vs-cpu") playerSelection = getRandomChoice();
        const playerTwoSelection = getRandomChoice();
        const playerOneWinner = checkIfPlayerOneWin(playerSelection, playerTwoSelection);
        console.log(playerOneWinner);


    }
    
    return (
        <section className="game-screen">
            <h2>Player 1</h2>
            <h2>Player 2</h2>

            <button onClick={()=> startGame()}>Start!</button>
        </section>
    )
}

export default Screen;