import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <div>
        <span>vc esta na Start</span>
    
        <Link to="/menu">Entrar</Link>
        </div>
    )
  }
}

export default Start;