import Calendar from '../components/Calendar/Calendar';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preferences from '../components/Preferences';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import CaloriesCalculator from '../components/CaloriesCalculator';
import RecipeCard from '../components/Recipes/mdbCard';
import WideRecipeCard from '../components/Recipes/mdbSmallCard';
import MultiCarouselPage from '../components/Recipes/mdbAnimatedCards';

import AuthenticatedComponent from '../containers/Authenticated';
import ProfilePage from '../components/Profile';
import ReceptePage from '../components/Recepte';

class ModalSwitch extends Component {
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        const { location } = this.props;
        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
    }
    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/preferences" component={Preferences} />
                    <Route path="/signUp" component={SignUpForm} />
                    <Route path="/calculator" component={CaloriesCalculator} />
                    <Route path="/card" component={RecipeCard} />
                    <Route path="/widecard" component={WideRecipeCard} />
                    <Route path="/anime" component={MultiCarouselPage} />
                    <Route path="/calendar" component={Calendar} />
                    <Route component={RoutesWithHeaderAndFooter} />
                </Switch>
                <Route path="/recepte/:id" component={ReceptePage} />
            </div>
        );
    }


}

const Routers = () => (
    <Router>
        <Route component={ModalSwitch} />
    </Router>
);

export default Routers;
