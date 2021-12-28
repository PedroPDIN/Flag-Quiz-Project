import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (

      <header>
        <Link to="/menu">Menu</Link>
        <span>Options</span>
      </header>

    )
  }
}

export default Header;