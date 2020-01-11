import React from 'react';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import './Temporizador.css'

import Countdown, {zeroPadTime} from 'react-countdown-now';

/*
// Necesitamos los siguientes parámetros
// Un Timer actual, que iniciaría en myTimerWork minutos, e iría restando hasta llegar a 0.
// Este dato debe almacenarse en local storage, en caso de que actualicen el navegador.
//
// Cuando el timer llegue a 0, deberá sonar un sonido durante 3 segundos
// Luego de esa espera, se deberá iniciar el tiempo de descanso en myTimerBreak
//
// Una vez completado 4 ciclos, se deberá iniciar el tiempo de descanso en myTimerBreakLong
// Todos estos datos se deberán de obtener de local storage en caso de que existan
// Y se necesitarán de realizar más validaciones para corroborar su correcto funcionamiento.
*/

class Clock extends React.Component {

  

  render() {
    return (
      <h1>
        <span
          className="badge btn-outline-primary">
          {
          <Countdown
            date = {Date.now() + 10000}/>
          }
        </span>
      </h1>
    );
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      playStatus: false,
      pauseStatus: true,
      stopStatus: true
    };
  }

  PlayPressed = () => {
    this.setState({
      playStatus: true,
      pauseStatus: false,
      stopStatus: false
    });
  }

  PausePressed = () => {
    this.setState({
      playStatus: false,
      pauseStatus: true,
      stopStatus: false
    });
  }

  StopPressed = () => {
    this.setState({
      playStatus: false,
      pauseStatus: true,
      stopStatus: true
    });
  }

  render() {
    return(
      <div>
        <button disabled={this.state.playStatus}
          onClick={this.PlayPressed}
          className="btn btn-outline-success fa fa-play play"/>

        <button disabled={this.state.pauseStatus}
          onClick={this.PausePressed}
          className="btn btn-outline-secondary fa fa-pause pause"/>

        <button disabled={this.state.stopStatus}
          onClick={this.StopPressed}
          className="btn btn-outline-danger fa fa-stop stop"/>
        {/*<span>{myVar === true ? "true":"false"}{myVar=false}</span>*/}
      </div>
    );
  }
}

export { Buttons, Clock };
