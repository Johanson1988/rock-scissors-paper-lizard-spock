import React from 'react';

const GameHistory = ({ previousGames }) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody>
            {
                previousGames ? previousGames.map((game, index) => 
                <tr key={index} >
                    <td>{game.player1}</td>
                    <td>{game.player2}</td>
                    <td>{game.winner}</td>
                </tr>)
                :
                <tr>
                    <td>No games played!</td>
                </tr>
            }
            </tbody>   
        </table>
    )
}

export default GameHistory;