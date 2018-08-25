import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preferences from '../components/Preferences';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import RandomRecipes from '../containers/RandomRecipes';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import AuthenticatedComponent from '../containers/Authenticated';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={RandomRecipes}/>
          <Route path="/login" component={LoginForm} />
          <Route path="/preferences" component={Preferences} />
          <Route path="/" component={RoutesWithHeaderAndFooter} />
          <Route path="/signUp" component={SignUpForm} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;