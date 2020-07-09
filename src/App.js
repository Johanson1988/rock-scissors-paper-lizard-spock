import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game/:gameMode" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
