import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class NotFound extends Component {
  render() {
    return (
      <div className="container-found-page">
        <div className="content-found-page">
          <span className="span-found">Página não encontrada 😞</span>
          <Link to="/home" className="link-found-page">
            Voltar
          </Link>
          <img
            src="https://cdn.dicionariopopular.com/imagens/giphy-1.gif"
            alt="meme do John Travolta"
            className="img-found-page"
          />
        </div>
      </div>
    );
  }
}

export default NotFound;
