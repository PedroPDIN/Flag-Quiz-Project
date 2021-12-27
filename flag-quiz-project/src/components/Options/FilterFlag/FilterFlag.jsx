import React, { Component } from 'react';
import propTypes from 'prop-types';

class FilterFlag extends Component {
  render() {
    const {
      define1,
      define2,
      define3,
      define4,
      define5,
      toDefineClick1,
      toDefineClick2,
      toDefineClick3,
      toDefineClick4,
      toDefineClick5,
    } = this.props;

    return (
      <div>
        <fieldset>
          <legend>Flags</legend>
          <label htmlFor="flags-1">
            <input
              id="flags-1"
              type="checkbox"
              defaultChecked={ define1 }
              onClick={ toDefineClick1 }
            />
            África
          </label>
          <label htmlFor="flags-2">
            <input
              id="flags-2"
              type="checkbox"
              defaultChecked={ define2 }
              onClick={ toDefineClick2 }
            />
            Américas
          </label>
          <label htmlFor="flags-3">
            <input
              id="flags-3"
              type="checkbox"
              defaultChecked={ define3 }
              onClick={ toDefineClick3 }
            />
            Ásia
          </label>
          <label htmlFor="flags-4">
            <input
              id="flags-4"
              type="checkbox"
              defaultChecked={ define4 }
              onClick={ toDefineClick4 }
            />
            Europa
          </label>
          <label htmlFor="flags-5">
            <input
              id="flags-5"
              type="checkbox"
              defaultChecked={ define5 }
              onClick={ toDefineClick5 }
            />
            Oceania
          </label>
        </fieldset>
      </div>
    )
  }
}

FilterFlag.propTypes = {
  define1: propTypes.bool.isRequired,
  define2: propTypes.bool.isRequired,
  define3: propTypes.bool.isRequired,
  define4: propTypes.bool.isRequired,
  define5: propTypes.bool.isRequired,
  toDefineClick1: propTypes.func.isRequired,
  toDefineClick2: propTypes.func.isRequired,
  toDefineClick3: propTypes.func.isRequired,
  toDefineClick4: propTypes.func.isRequired,
  toDefineClick5: propTypes.func.isRequired,
}

export default FilterFlag;