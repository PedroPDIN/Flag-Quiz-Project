import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
       const { number, score } = this.props;
    return (
      <div>
        <header>
          <Link to="/menu">Menu</Link>
          <h1>Flag Quiz</h1>
          <h3>{`score: ${score}/${number}`}</h3>
        </header>
      </div>
    )
  }
}

export default Header;
