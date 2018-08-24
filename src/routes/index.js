import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preferences from '../components/Preferences';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import SignUpForm from '../containers/SignUpForm';
import LoginForm  from '../containers/LoginForm';
class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/preferences" component={Preferences} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signUp" component={SignUpForm} />
          <Route component={RoutesWithHeaderAndFooter} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
