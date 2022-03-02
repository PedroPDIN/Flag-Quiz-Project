import React, { Component } from "react";
import HeaderResult from "./Components/HeaderResult/HeaderResult";

class Result extends Component {
  render() {
    return (
      <main>
        <HeaderResult />
        <h1>Resultado do Quiz</h1>
        <h2>acertos:</h2>
        <h2>erros:</h2>
      </main>
    );
  }
}

export default Result;
