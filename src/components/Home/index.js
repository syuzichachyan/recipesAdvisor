import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { urlToProperty } from 'query-string-params';
import injectSheet from 'react-jss';
import Recipes from '../../containers/Recipes';
import HealthyRecipes from '../../containers/HealthyRecipes';
import SpecialDiets from '../../containers/SpetialDiets';
import Favourites from '../../containers/Favourites';
import styles from './styles';

class Home extends Component {
  render() {
      const { classes } = this.props;
    return (
       <div className={classes.main}>
        <Route exact path="/home" render={props => <Recipes {...props} />} />
        <Route
          path="/home/health"
          render={({ location }) => (
            <HealthyRecipes label={urlToProperty(location.search).label[0]} />
          )}
        />
        <Route
          path="/home/diet"
          render={({ location }) => (
            <SpecialDiets label={urlToProperty(location.search).label[0]} />
          )}
        />
        <Route path={'/home/favourites'} component={() => <Favourites />} />
        <Link to={`${this.props.match.url}/health?label=alcohol-free`}>
          Alcohol-Free
        </Link>
        <Link to={`${this.props.match.url}/health?label=vegan`}>Vegan</Link>
        <Link to={`${this.props.match.url}/diet?label=balanced`}>Vegan</Link>
        <Link to={'/home/favourites'}>Favourites</Link>
      </div>
    );
  }
}

export default injectSheet(styles)(Home);
