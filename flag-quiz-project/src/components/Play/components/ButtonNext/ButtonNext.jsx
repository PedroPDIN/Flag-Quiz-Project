import React, { Component } from 'react';
import "./ButtonNext.css";

class ButtonNext extends Component {
  render() {
    const { next } = this.props;
    return (
      <button
        type="button"
        onClick={ next }
        className="button-next-play"
      >
        Proxima
      </button>
    );
  }
}

export default ButtonNext;
