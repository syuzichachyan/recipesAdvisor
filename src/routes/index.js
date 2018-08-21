import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/Profile';
import Home from '../components/Home';
import Settings from '../components/Settings';
import RouteWithHeaderAndFooter from './routeWithHeaderAndFooter';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <RouteWithHeaderAndFooter path="/profile" component={Profile} />
          <RouteWithHeaderAndFooter path={'/settings'} component={Settings} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
