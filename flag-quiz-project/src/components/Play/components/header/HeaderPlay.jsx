import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./HeaderPlay.css";

class Header extends Component {
  render() {
       const { number, score } = this.props;
    return (
      <div>
        <header className='container-header-play' >
          <Link to="/menu" className='link-menu-play'>Menu</Link>
          <h1 className='h1-play'>Flag Quiz</h1>
          <h3 className='score-play'>{`resolved: ${score}/${number}`}</h3>
        </header>
      </div>
    )
  }
}

export default Header;
