import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preferences from '../components/Preferences';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import AuthenticatedComponent from '../containers/Authenticated';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <AuthenticatedComponent />
          <Route path="/preferences" component={Preferences} />
          <Route exact path="/" component={RoutesWithHeaderAndFooter} />
          <AuthenticatedComponent />
          <Route path="/signUp" component={SignUpForm} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
