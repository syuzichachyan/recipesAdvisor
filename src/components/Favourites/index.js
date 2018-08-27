import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Recipe from '../../containers/Recipe';
import styles from './styles';

class Favourites extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    const { getFetchFavourites, history } = this.props;
    if (!jwt) {
      history.push('/login');
    }
    getFetchFavourites(jwt);
  }

  render() {
    const { classes, allFetchFavourites } = this.props;
    return (
      <div className={classes.favourites}>
        {allFetchFavourites.map((recipe, index) => (
          <Recipe
            recipe={recipe.recepte}
            index={index}
            key={recipe.recepte.url}
            isFavourite={true}
          />
        ))}
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    favourites: PropTypes.array
  };
}

export default injectSheet(styles)(Favourites);
