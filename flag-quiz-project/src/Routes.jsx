import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as pages from "./pages";

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={pages.Start} />
          <Route exact path="/home" component={pages.Home} />
          <Route exact path="/library" component={pages.Library} />
          <Route exact path="/options" component={pages.Options} />
          <Route exact path="/play" component={pages.Play} />
          <Route exact path="/result" component={pages.Result} />
          <Route exact path="*" component={pages.NotFound} />
        </Switch>
      </>
    );
  }
}

export default Routes;