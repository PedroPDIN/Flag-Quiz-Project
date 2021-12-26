import React, { Component } from 'react';

class NumbersFlags extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Numbers of Flags</legend>
          <label htmlFor="values-1">
            <input id="values-1" type="checkbox" />
            10
          </label>
          <label htmlFor="values-2">
            <input id="values-2" type="checkbox" />
            20
          </label>
          <label htmlFor="values-3">
            <input id="values-3" type="checkbox" />
            50
          </label>
          <label htmlFor="values-4">
            <input id="values-4" type="checkbox" />
            100
          </label>
          <label htmlFor="values-5">
            <input id="values-5" type="checkbox" />
            150
          </label>
          <label htmlFor="values-6">
            <input id="values-6" type="checkbox" />
            200
          </label>
        </fieldset>
      </div>
    )
  }
}

export default NumbersFlags;