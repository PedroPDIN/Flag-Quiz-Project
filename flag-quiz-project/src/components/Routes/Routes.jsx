import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Play from '../Play/Play'
import Options from '../Options/Options'
import Library from '../Library/Library'
import NotFound from '../NotFound/NotFound';
import Start from '../Start/Start'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/options" component={Options} />
          <Route exact path="/Library" component={Library} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
