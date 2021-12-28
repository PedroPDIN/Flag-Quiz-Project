import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
  render() {
    const { filter } = this.props;
    return (
      <div>
        <Link to="/menu">
          <button type='button' onClick={filter}>
            Salvar
          </button>
        </Link>
      </div>
    )
  }
}

export default Button;