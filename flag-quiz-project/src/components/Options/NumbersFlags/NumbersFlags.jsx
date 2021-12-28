import React, { Component } from 'react';

class NumbersFlags extends Component {
  render() {
    const { onChangeValue } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Numbers of Flags</legend>
          <label htmlFor="values-1">
            <input
              id="values-1"
              type="radio"
              name='numbers'
              value='10'
              onClick={onChangeValue}
            />
            10
          </label>
          <label htmlFor="values-2">
            <input
              id="values-2"
              type="radio"
              name='numbers'
              value='20'
              onClick={onChangeValue}
            />
            20
          </label>
          <label htmlFor="values-3">
            <input
              id="values-3"
              type="radio"
              name='numbers'
              value='50' 
              onClick={onChangeValue}
              />
            50
          </label>
          <label htmlFor="values-4">
            <input
              id="values-4"
              type="radio"
              name='numbers'
              value='100'
              onClick={onChangeValue}
            />
            100
          </label>
          <label htmlFor="values-5">
            <input
              id="values-5"
              type="radio"
              name='numbers'
              value='150'
              onClick={onChangeValue}
            />
            150
          </label>
          <label htmlFor="values-6">
            <input
              id="values-6"
              type="radio"
              name='numbers'
              value='200'
              onClick={onChangeValue}
            />
            200
          </label>
        </fieldset>
      </div>
    )
  }
}

export default NumbersFlags;