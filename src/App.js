import React from 'react';

import NuevaTarjeta from './Tarjeta.js'

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="Tittle">Pomodoro Task</h1>
        <NuevaTarjeta/>
      </div>
    );
  }
}

export default App;
