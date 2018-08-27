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
    classes: PropTypes.object,
    addToFavourites: PropTypes.func,
    removeFromFavourites: PropTypes.func,
    favouriteRecipe: PropTypes.func,
    q: PropTypes.string,
    index: PropTypes.number,
    type: PropTypes.string
  };

  handleClick(e) {
    e.preventDefault();
    const {

      addToFavourites,
      deleteFetchFavourites,
      removeFromFavourites,
      recipe,
      fetchFavourites,
      favouriteRecipe,
      history,
      index,
      q,
      type
    } = this.props;
    const { isFavourite } = recipe;
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      history.push('/Login');
    }
    console.log({favoriteId: recipe.uri, recepte: recipe})
    // fetchFavourites({ favoriteId: recipe.uri.slice(45), recepte: recipe }, jwt);
    deleteFetchFavourites( recipe.uri.slice(45), jwt);

  }

  render() {
    const { recipe, classes } = this.props;
    const { isFavourite } = recipe;
    return (
      <div className={classes.recipe}>
        <form method="post" onSubmit={this.handleClick}>
          <button className={classes.glyph}>
            {isFavourite ? (
              <Glyphicon glyph={'heart'} className={classes.glyphsIcon} />
            ) : (
              <Glyphicon glyph={'heart-empty'} className={classes.glyphsIcon} />
            )}
          </button>
        </form>
        <img alt="Not Found" src={recipe.image} />
        <h3>{recipe.label}</h3>
      </div>
    );
  }
}

export default injectSheet(styles)(Recipe);
