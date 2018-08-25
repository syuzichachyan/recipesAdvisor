import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { urlToProperty } from 'query-string-params';
import injectSheet from 'react-jss';
import Recipes from '../../containers/Recipes';
import FilteredRecipe from '../../containers/FilteredRecipe';
import Favourites from '../../containers/Favourites';
import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleInput = e => this.setState({ search: e.target.value });

  handleEnter = e => {
    if (e.key === 'Enter') {
      this.runSearch();
    }
  };

  runSearch = () =>
    this.props.history.push(`home/search?q=${this.state.search}`);

  render() {
    const { classes } = this.props;
    const { search } = this.state;
    return (
      <div className={classes.main}>
        <input
          type="text"
          className={classes.search}
          onChange={this.handleInput}
          value={search}
          onKeyDown={this.handleEnter}
        />
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
