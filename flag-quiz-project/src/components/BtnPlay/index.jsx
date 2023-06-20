import React, { Component } from 'react';
import "./index.css";

class BtnPlay extends Component {
  render() {
    const { eventConfirm, buttonWord } = this.props;
    return (
      <button type="button" onClick={eventConfirm} className="button-next-play">
        {buttonWord}
      </button>
    );
  }
}

export default BtnPlay;
