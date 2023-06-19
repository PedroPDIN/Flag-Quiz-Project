import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as pages from "./pages";

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/Library" component={pages.Library} />
          <Route exact path="*" component={pages.NotFound} />
        </Switch>
      </>
    );
  }
}

export default Routes;