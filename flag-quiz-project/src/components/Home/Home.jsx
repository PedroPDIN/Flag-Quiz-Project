import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          Seja bem vindo ao Flag Quiz!!!
        </h2>
        <p>Desafie-se seus conhecimentos sobre as bandeiras do mundo inteiro.</p>
        <div>
          <Link to="/play">Play</Link>
          <Link to="/options">Options</Link>
          <Link to="/Library">Library</Link>
        </div>
      </div>
    );
  }
}

export default Home;
