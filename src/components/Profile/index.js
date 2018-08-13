import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Recipes from '../../containers/recipes';
import Header from '../../containers/Header';
import HealthyRecipes from '../../containers/HealthyRecipes';
import { urlToProperty } from 'query-string-params';

class Profile extends Component {
  render() {
    const includes = ['fish', 'egg'];
    const excludes = ['chicken'];

    return (
      <React.Fragment>
        <Router>
          <div>

            <Link to={`${this.props.match.url}/health?label=dairy-free`}>
              Dairy
            </Link>
            <Link to={`${this.props.match.url}/health?label=vegan`}>vegan</Link>
            <Route
              exact
              path="/profile"
              render={props => (
                <Recipes includes={includes} excludes={excludes} />
              )}
            />
            <Route
              path="/profile/health"
              render={({ location }) => (
                <HealthyRecipes
                  label={urlToProperty(location.search).label[0]}
                />
              )}
            />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Profile;
