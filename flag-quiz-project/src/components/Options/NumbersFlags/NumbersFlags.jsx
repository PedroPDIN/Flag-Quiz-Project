import React, { Component } from 'react';
import './NumbersFlags.css';

class NumbersFlags extends Component {
  render() {
    const { onChangeValue } = this.props;
    return (
      <div className="container-numbers-options">
        <fieldset>
          <legend>Numbers of Flags</legend>
          <label htmlFor="values-1" className="input-numbers-options">
            <input
              id="values-1"
              type="radio"
              name='numbers'
              value='10'
              onChange={onChangeValue}
            />
            10
          </label>
          <label htmlFor="values-2" className="input-numbers-options">
            <input
              id="values-2"
              type="radio"
              name='numbers'
              value='20'
              onChange={onChangeValue}
            />
            20
          </label>
          <label htmlFor="values-3" className="input-numbers-options">
            <input
              id="values-3"
              type="radio"
              name='numbers'
              value='30'
              onChange={onChangeValue}
            />
            30
          </label>
          <label htmlFor="values-4" className="input-numbers-options">
            <input
              id="values-4"
              type="radio"
              name='numbers'
              value='50'
              onChange={onChangeValue}
            />
            50
          </label>
          <label htmlFor="values-5" className="input-numbers-options">
            <input
              id="values-5"
              type="radio"
              name='numbers'
              value='100'
              onChange={onChangeValue}
            />
            100
          </label>
          <label htmlFor="values-6" className="input-numbers-options">
            <input
              id="values-6"
              type="radio"
              name='numbers'
              value='150'
              onChange={onChangeValue}
            />
            150
          </label>
          <label htmlFor="values-7" className="input-numbers-options">
            <input
              id="values-7"
              type="radio"
              name='numbers'
              value='200'
              onChange={onChangeValue}
            />
            200
          </label>
        </fieldset>
      </div>
    )
  }
}

export default NumbersFlags;