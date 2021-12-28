import React, { Component } from 'react';

class Button extends Component {
  render() {
       const { filter } = this.props;
    return (
      <div>
        <button type='button' onClick={filter}>
          Salvar
        </button>
      </div>
    )
  }
}

export default Button;