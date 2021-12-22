import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Play from '../Play/Play'
import Options from '../Options/Options'
import Library from '../Library/Library'
import NotFound from '../NotFound/NotFound';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          Seja bem vindo ao Flag Quiz!!!
        </h2>
        <Switch>
          <Route exact path="/play" component={Play} />
          <Route exact path="/options" component={Options} />
          <Route exact path="/Library" component={Library} />
          <Route exact path="*" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Home;
