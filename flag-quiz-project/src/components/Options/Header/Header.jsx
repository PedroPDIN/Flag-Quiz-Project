import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (

      <header className="container-header-option">
        <Link to="/menu" className="link-option">Menu</Link>
        <h3 className="h3-option">Options</h3>
      </header>

    )
  }
}

export default Header;