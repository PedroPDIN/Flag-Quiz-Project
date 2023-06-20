import React, { Component } from 'react';
import propTypes from 'prop-types';
import './index.css';

class FlagsOptions extends Component {
  render() {
    const {
      defineAfrica,
      defineAmerica,
      defineAsia,
      defineEuropa,
      defineOceania,
      defineClickAfrica,
      defineClickAmerica,
      defineClickAsia,
      defineClickEuropa,
      defineClickOceania,
    } = this.props;

    return (
      <div className="container-filter-option">
        <fieldset>
          <legend>Flags</legend>
          <div>
            <label htmlFor="flags-1" className="input-filter-options">
              <input
                id="flags-1"
                type="checkbox"
                defaultChecked={defineAfrica}
                onClick={defineClickAfrica}
              />
              África
            </label>
            <label htmlFor="flags-2" className="input-filter-options">
              <input
                id="flags-2"
                type="checkbox"
                defaultChecked={defineAmerica}
                onClick={defineClickAmerica}
              />
              Américas
            </label>
            <label htmlFor="flags-3" className="input-filter-options">
              <input
                id="flags-3"
                type="checkbox"
                defaultChecked={defineAsia}
                onClick={defineClickAsia}
              />
              Ásia
            </label>
            <label htmlFor="flags-4" className="input-filter-options">
              <input
                id="flags-4"
                type="checkbox"
                defaultChecked={defineEuropa}
                onClick={defineClickEuropa}
              />
              Europa
            </label>
            <label htmlFor="flags-5" className="input-filter-options">
              <input
                id="flags-5"
                type="checkbox"
                defaultChecked={defineOceania}
                onClick={defineClickOceania}
              />
              Oceania
            </label>
          </div>
        </fieldset>
      </div>
    );
  }
}

FlagsOptions.propTypes = {
  defineAfrica: propTypes.bool.isRequired,
  defineAmerica: propTypes.bool.isRequired,
  defineAsia: propTypes.bool.isRequired,
  defineEuropa: propTypes.bool.isRequired,
  defineOceania: propTypes.bool.isRequired,
  defineClickAfrica: propTypes.func.isRequired,
  defineClickAmerica: propTypes.func.isRequired,
  defineClickAsia: propTypes.func.isRequired,
  defineClickEuropa: propTypes.func.isRequired,
  defineClickOceania: propTypes.func.isRequired,
};

export default FlagsOptions;