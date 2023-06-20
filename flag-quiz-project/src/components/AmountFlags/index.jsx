import React, { Component } from 'react';
import './index.css';

class AmountFlags extends Component {
  constructor() {
    super()

    this.state = {
      numbers: ["10", "20", "30", "50", "100", "150", "200"],
    }
  }

  render() {
    const { numbers } = this.state;
    const { onChangeValue } = this.props;

    return (
      <div className="container-numbers-options">
        <fieldset>
          <legend>Numbers of Flags</legend>

          {numbers.map((number, i) => (
            <label
              htmlFor={`values-${i + 1}`}
              key={i}
              className="input-numbers-options">
              <input
                id={`values-${i + 1}`}
                key={i}
                type="radio"
                name="numbers"
                value={number}
                onChange={onChangeValue}
              />
              {number}
            </label>
          ))}

          <span className="span-option-page">
            Importante: Por padrão o número de bandeiras iniciasse com 20.
          </span>

          <span className="span-option-page-2">
            Important: By default the number of flags starts with 20.
          </span>
        </fieldset>
      </div>
    );
  }
}

export default AmountFlags;