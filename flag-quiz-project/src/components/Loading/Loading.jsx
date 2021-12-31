import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="conteiner-loading">
        <h1 className="h1-loading">Flag Quiz</h1>
        <h3 className="h3-loading">Carregando...</h3>
      </div>
    )
  }
}

export default Loading;