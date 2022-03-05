import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./NotFound.css"

class NotFound extends Component {
  render() {
    return (
      <div className="container-found-page">
        <span className="span-found">Página não encontrada 😞</span>
        <Link to="/Menu" className="link-found-page">Menu</Link>
        <img 
        src="https://cdn.dicionariopopular.com/imagens/giphy-1.gif" 
        alt="meme do John Travolta" 
        className="img-found-page"
        />
      </div>
    )
  }
}

export default NotFound;