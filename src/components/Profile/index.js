import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Recipes from '../../containers/recipes';
import Header from '../../containers/Header';
import HealthyRecipes from '../../containers/HealthyRecipes';
import SpecialDiets from '../../containers/SpetialDiets';
import { urlToProperty } from 'query-string-params';
import styles from './styles';
import injectSheet from 'react-jss';

class Profile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Header />
        <Link to={`${this.props.match.url}/health?label=alcohol-free`}>
          Alcohol-Free
        </Link>
        <Link to={`${this.props.match.url}/health?label=vegan`}>Vegan</Link>
        <Route exact path="/profile" render={props => <Recipes {...props} />} />
        <Route
          path="/profile/health"
          render={({ location }) => (
            <HealthyRecipes label={urlToProperty(location.search).label[0]} />
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
        <Link to={`${this.props.match.url}/diet?label=balanced`}>Vegan</Link>
      </div>
    );
  }
}

export default injectSheet(styles)(Profile);
