import React from 'react';

import GameModeButton from './../components/layout/buttons/GameModeButton';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <GameModeButton gameMode="player-vs-cpu" name="Player VS CPU" />
            <GameModeButton gameMode="cpu-vs-cpu" name="CPU VS CPU" />
        </div>
    )
}

export default Home;