import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from '../../containers/recipes';
import Header from '../../containers/Header';
import HealthyRecipes from '../../containers/HealthyRecipes';
import SpecialDiets from '../../containers/SpetialDiets';
import { urlToProperty } from 'query-string-params';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Header />
            <Link to={`${this.props.match.url}/health?label=alcohol-free`}>
              Alcohol-Free
            </Link>
            <Link to={`${this.props.match.url}/health?label=vegan`}>Vegan</Link>
            <Route
              exact
              path="/profile"
              render={props => <Recipes {...props} />}
            />
            <Route
              path="/profile/health"
              render={({ location }) => (
                <HealthyRecipes
                  label={urlToProperty(location.search).label[0]}
                />
              )}
            />
            <Route
              path="/profile/diet"
              render={({ location }) => (
                <SpecialDiets label={urlToProperty(location.search).label[0]} />
              )}
            />
            <Link to={`${this.props.match.url}/health?label=alcohol-free`}>
              Alcohol-Free
            </Link>
            <Link to={`${this.props.match.url}/health?label=vegan`}>Vegan</Link>
            <Link to={`${this.props.match.url}/diet?label=balanced`}>
              Vegan
            </Link>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Profile;
