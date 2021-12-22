import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Play extends Component {
  render() {
    return (
      <div>
        <span>vc esta na Play</span>
    
        <Link to="/">Home</Link>
        </div>
    )
  }
}

export default Play;