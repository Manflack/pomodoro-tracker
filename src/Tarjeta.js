import React from 'react';
import './Tarjeta.css';

import { Buttons, Clock } from './Temporizador.js';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

class NuevaTarjeta extends React.Component {

  render() {
    return (
      <div className="AreaTarjeta">
        <div>
          <div className="#Timer">
            <Clock/>
          </div>

          <div className="Border">

            <div className="Inline">

              <input
                style={{outline:'none'}}
                className="InputArea"
                placeholder="Añadir una tarea...">
              </input>

            </div>

            <div className="Inline">
              <Buttons/>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default NuevaTarjeta;
