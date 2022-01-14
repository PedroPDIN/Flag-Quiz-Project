import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderPlay from "./components/header/HeaderPlay";

class Play extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
    }
  }

  render() {
    const { dataNumber } = this.props;
    const { score } = this.state;
    return (
      <div>
        <HeaderPlay 
        number={dataNumber} 
        score={ score }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dataNumber: state.data.number,
  dataFlags: state.data.flags,
})

export default connect(mapStateToProps)(Play);