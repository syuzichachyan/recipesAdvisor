import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Recipe from '../../containers/Recipe';
import styles from './styles';

const jwt = localStorage.getItem('jwt');

class Favourites extends Component {
  componentDidMount() {
    const { getfetchFavourites, history } = this.props;
    if (!jwt) {
      history.push('/login');
    }
    getfetchFavourites(jwt);
  }

  componentDidUpdate(prevProps) {
    const { allFetchFavourites, getfetchFavourites } = this.props;
    if (allFetchFavourites.length !== prevProps.allFetchFavourites.length) {
      getfetchFavourites(jwt);
    }
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
