import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as pages from "./pages";

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/Library" component={ pages.Library } />
        </Switch>
      </>
    );
  }
}

export default Routes;