import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class BtnOption extends Component {
  render() {
    const { validationEvent } = this.props;
    return (
      <div>
        <Link to="/home"></Link>

        <button
          type="button"
          onClick={ validationEvent }
          className="button-option">
          Salvar
        </button>
      </div>
    );
  }
}

export default BtnOption;