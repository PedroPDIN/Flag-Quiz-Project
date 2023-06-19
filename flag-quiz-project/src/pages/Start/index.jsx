import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

class Start extends Component {
  render() {
    return (
      <div className="conteiner-start">
        <h1 className="h1-start">FLAG QUIZ</h1>
        <NavLink to="/home" className="link-start">
          ENTRAR
        </NavLink>
      </div>
    );
  }
}

export default Start;
