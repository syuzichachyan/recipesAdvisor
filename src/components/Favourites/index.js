import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Recipe from '../../containers/Recipe';
import styles from './styles';

class Favourites extends Component {
  render() {
    const { classes, favourites } = this.props;
    return (
      <div className={classes.favourites}>
        {favourites.map((recipe, index) => (
          <Recipe
            recipe={recipe}
            index={index}
            key={recipe.url}
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
