import React, { Component } from 'react';

class ButtonNext extends Component {
  render() {
    const { next } = this.props;
    return (
      <button
        type="button"
        onClick={ next }
      >
        Proxima
      </button>
    );
  }
}

export default ButtonNext;
