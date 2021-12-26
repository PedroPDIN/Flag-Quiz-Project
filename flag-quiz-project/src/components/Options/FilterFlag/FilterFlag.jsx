import React, { Component } from 'react';

class FilterFlag extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Flags</legend>
          <label htmlFor="flags-1">
            <input
              id="flags-1"
              type="checkbox"
            />
            África
          </label>
          <label htmlFor="flags-2">
            <input
              id="flags-2"
              type="checkbox"
            />
            Américas
          </label>
          <label htmlFor="flags-3">
            <input
              id="flags-3"
              type="checkbox"
            />
            Ásia
          </label>
          <label htmlFor="flags-4">
            <input
              id="flags-4"
              type="checkbox" />
            Europa
          </label>
          <label htmlFor="flags-5">
            <input
              id="flags-5"
              type="checkbox"
            />
            Oceania
          </label>
        </fieldset>
      </div>
    )
  }
}

export default FilterFlag;