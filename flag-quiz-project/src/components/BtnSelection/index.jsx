import React, { Component } from "react";
import "./index.css";

class BtnSelection extends Component {
  render() {
    const { valuesFlags, handleClick, isDisable, iQuestions } = this.props;
    const numbers = [0, 1, 2, 3];
    const NRN = numbers.sort(() => Math.random() - 0.5); // NVN => "New Random Numbers"

    return (
      <div>
        {valuesFlags
          .filter((question) => question.id === iQuestions)
          .map(({ id, optionCorrect, options }) => (
            <div className="container-options-play" key={id}>
              <img
                className="img-play"
                src={optionCorrect.svg}
                alt="imagem da bandeira"
              />

              <button
                disabled={isDisable}
                type="button"
                value={!options[NRN[0]] ? "Marley" : options[NRN[0]]}
                className="button-alt-play"
                onClick={(event) => handleClick(event.target.value)}>
                {!options[NRN[0]] ? "Marley" : options[NRN[0]]}
              </button>

              <button
                disabled={isDisable}
                type="button"
                value={!options[NRN[1]] ? "Atlântida" : options[NRN[1]]}
                className="button-alt-play"
                onClick={(event) => handleClick(event.target.value)}>
                {!options[NRN[1]] ? "Atlântida" : options[NRN[1]]}
              </button>

              <button
                disabled={isDisable}
                type="button"
                value={!options[NRN[2]] ? "Wakanda" : options[NRN[2]]}
                className="button-alt-play"
                onClick={(event) => handleClick(event.target.value)}>
                {!options[NRN[2]] ? "Wakanda" : options[NRN[2]]}
              </button>

              <button
                disabled={isDisable}
                type="button"
                value={!options[NRN[3]] ? "Eldia" : options[NRN[3]]}
                className="button-alt-play"
                onClick={(event) => handleClick(event.target.value)}>
                {!options[NRN[3]] ? "Eldia" : options[NRN[3]]}
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default BtnSelection;