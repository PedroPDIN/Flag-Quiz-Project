import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../Home/Home'
import Play from '../Play/Play'
import Options from '../Options/Options'
import Library from '../Library/Library'
import NotFound from '../NotFound/NotFound';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
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