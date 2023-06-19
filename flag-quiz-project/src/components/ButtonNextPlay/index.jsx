import React, { Component } from 'react';
import "./ButtonNext.css";

class ButtonNext extends Component {
  render() {
    const { next, buttonWord } = this.props;
    return (
      <button
        type="button"
        onClick={ next }
        className="button-next-play"
      >
        { buttonWord }
      </button>
    );
  }
}

export default ButtonNext;
