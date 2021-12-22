import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Library extends Component {
  render() {
    return (
      <div>
        <span>vc esta na Library</span>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default Library;