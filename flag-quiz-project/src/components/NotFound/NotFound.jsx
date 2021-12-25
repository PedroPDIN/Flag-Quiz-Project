import React, { Component } from "react";
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div>
        <span>Página não encontrada 😞</span>
        <Link to="/Menu">Menu</Link>
      </div>
    )
  }
}

export default NotFound;