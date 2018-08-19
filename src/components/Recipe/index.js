import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import injectSheet from 'react-jss';
import styles from './styles';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    recipe: PropTypes.object.isRequired,
    classes: PropTypes.object
  };

  handleClick() {
    const {
      addToFavourites,
      removeFromFavourites,
      recipe,
      favouriteRecipe,
      index,
      q,
      type
    } = this.props;
    const { isFavourite } = recipe;
    isFavourite ? removeFromFavourites(recipe.uri) : addToFavourites(recipe);
    favouriteRecipe(index, q, type);
  }

  render() {
    const { recipe, classes } = this.props;
    const { isFavourite } = recipe;
    return (
      <div className={classes.recipe}>
        <button className={classes.glyph} onClick={this.handleClick}>
          {isFavourite ? (
            <Glyphicon glyph={'star'} />
          ) : (
            <Glyphicon glyph={'star-empty'} />
          )}
        </button>
        <img alt="Not Found" src={recipe.image} />
        <h3>{recipe.label}</h3>
      </div>
    );
  }
}

export default injectSheet(styles)(Recipe);
