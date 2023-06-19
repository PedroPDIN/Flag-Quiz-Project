import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderResult.css";

class HeaderResult extends Component {
  render() {
    return (
      <header className="container-header-result">
        <h1 className="h1-result">Flag Quiz</h1>
        <Link to="/menu" className="link-menu-result">
          Menu
        </Link>
      </header>
    );
  }
}

export default HeaderResult;
