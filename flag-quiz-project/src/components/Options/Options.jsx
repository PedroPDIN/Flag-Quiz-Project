import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Options extends Component {
  render() {
    return (
      <div>
        <span>vc esta na Options</span>
        <Link to="/menu">Menu</Link>
      </div>
    )
  }
}

export default Options;