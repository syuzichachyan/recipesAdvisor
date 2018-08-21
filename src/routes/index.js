import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Preferences from '../components/Preferences';
import Settings from '../components/Settings';
import RouteWithHeaderAndFooter from './routeWithHeaderAndFooter';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/preferences" component={Preferences} />
          <RouteWithHeaderAndFooter path="/home" component={Home} />
          <RouteWithHeaderAndFooter path={'/settings'} component={Settings} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
