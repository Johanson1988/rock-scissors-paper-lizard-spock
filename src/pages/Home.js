import React from 'react';

import GameModeButton from './../components/layout/buttons/GameModeButton';

const Home = () => {
    return(
        <div class="container">
            <h1 className="game-title">Rock Scissors Paper Lizard Spock</h1>
            <img src="images/game-cover.jpg" alt="Game Rules" id="cover-picture" />
            <h5 id="choose-game-mode">Choose your game mode:</h5>
            <div className="buttons-container">
                <GameModeButton gameMode="player-vs-cpu" name="Player VS CPU" />
                <GameModeButton gameMode="cpu-vs-cpu" name="CPU VS CPU" />
            </div>
        </div>
    )
}

export default Home;