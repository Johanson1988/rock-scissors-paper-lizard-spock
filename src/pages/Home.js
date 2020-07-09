import React from 'react';

import GameModeButton from './../components/layout/buttons/GameModeButton';

const Home = () => {
    return(
        <div>
            <h1>Rock Scissors Paper Lizard Spock</h1>
            <img src="images/game-cover.jpg" alt="Game Rules" />
            <p>Choose your game mode:</p>
            <div className="buttons-container">
                <GameModeButton gameMode="player-vs-cpu" name="Player VS CPU" />
                <GameModeButton gameMode="cpu-vs-cpu" name="CPU VS CPU" />
            </div>
        </div>
    )
}

export default Home;