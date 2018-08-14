import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/Profile';
import Home from '../components/Home';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
