import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { urlToProperty } from 'query-string-params';
import injectSheet from 'react-jss';
import Recipes from '../../containers/Recipes';
import FilteredRecipe from '../../containers/FilteredRecipe';
import Filter from '../../containers/Filter';
import Favourites from '../../containers/Favourites';
import styles from './styles';

class Home extends Component {
  runSearch = search =>
    this.props.history.push(`${this.props.match.url}/search?q=${search}`);

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Filter runSearch={this.runSearch} />
        <Route exact path={'/home/'} render={props => <Recipes {...props} />} />
        <Route
          path="/home/search"
          render={({ location }) => (
            <FilteredRecipe q={urlToProperty(location.search).q[0]} />
          )}
        />
        <Route path={'/home/favourites'} component={() => <Favourites />} />
        {
          //<Link to={`${this.props.match.url}/search?q=eggs`}>eggs</Link>
          // <Link to={`${this.props.match.url}/search?q=fish`}>fish</Link>
          // <Link to={'/home/favourites'}>Favourites</Link>
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Home);
