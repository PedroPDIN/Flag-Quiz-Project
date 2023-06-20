import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Headers extends Component {
  render() {
    const { typeHeader, score, numbersFlags } = this.props;

    switch (typeHeader) {
      case "options":
        return (
          <header className="container-header-option">
            <Link to="/home" className="link-option">
              Menu
            </Link>
            <h3 className="h3-option">Options</h3>
          </header>
        );
      
      case "play":
        return (
          <header className="container-header-play">
            <Link to="/home" className="link-menu-play">
              Menu
            </Link>
            <h1 className="h1-play">Flag Quiz</h1>
            <h3 className="score-play">{`resolved: ${score}/${numbersFlags}`}</h3>
          </header>
        );

      case "result":
        return (
          <header className="container-header-result">
            <h1 className="h1-result">Flag Quiz</h1>
            <Link to="/home" className="link-menu-result">
              Menu
            </Link>
          </header>
        );

      case "library":
        return (
          <header className="container-header-library">
            <Link to="/home" className="link-library">
              Menu
            </Link>
            <h3 className="h3-library">Library</h3>
          </header>
        );

      default:
        return <div style={{ display: "none" }}></div>;
    }

    // if (typeHeader === "options") return (
    //   <header className="container-header-option">
    //     <Link to="/home" className="link-option">
    //       Menu
    //     </Link>
    //     <h3 className="h3-option">Options</h3>
    //   </header>
    // );

    // if (typeHeader === "play") return (
    //   <div>
    //     <header className="container-header-play">
    //       <Link to="/home" className="link-menu-play">
    //         Menu
    //       </Link>
    //       <h1 className="h1-play">Flag Quiz</h1>
    //       <h3 className="score-play">{`resolved: ${score}/${numbersFlags}`}</h3>
    //     </header>
    //   </div>
    // );

    // if (typeHeader === "result") return (
    //   <header className="container-header-result">
    //     <h1 className="h1-result">Flag Quiz</h1>
    //     <Link to="/home" className="link-menu-result">
    //       Menu
    //     </Link>
    //   </header>
    // );

    // if (typeHeader === "library") return (
    //   <header className="container-header-library">
    //     <Link to="/menu" className="link-library">
    //       Menu
    //     </Link>
    //     <h3 className="h3-library">Library</h3>
    //   </header>
    // );
  }
}

export default Headers;