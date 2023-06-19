import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="conteiner-home">
        <h2 className="h2-home">Seja bem vindo ao Flag Quiz!!!</h2>

        <p className="p-home">
          Desafie-se seus conhecimentos sobre as bandeiras do mundo inteiro.
        </p>

        <div className="links-home">
          <Link to="/play" className="link-home-play">
            Play
          </Link>
          <Link to="/options" className="link-home-options">
            Options
          </Link>
          <Link to="/Library" className="link-home-library">
            Library
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
