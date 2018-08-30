import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preferences from '../components/Preferences';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import SignUpForm from '../containers/SignUpForm';
import LoginForm  from '../containers/LoginForm';
import CaloriesCalculator from '../components/CaloriesCalculator';
import RecipeCard from '../components/Recipes/mdbCard';
import WideRecipeCard from '../components/Recipes/mdbSmallCard';
import ReversedCascade from '../components/mdbReversedCascade'
import MultiCarouselPage from '../components/Recipes/mdbAnimatedCards'

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/preferences" component={Preferences} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/calculator" component={CaloriesCalculator}/>
          <Route path="/card" component={RecipeCard}/>
          <Route path="/widecard" component={WideRecipeCard}/>
          <Route path="/anime" component={MultiCarouselPage}/>
          <Route path="/cascade" component={ReversedCascade}/>
          <Route component={RoutesWithHeaderAndFooter} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;