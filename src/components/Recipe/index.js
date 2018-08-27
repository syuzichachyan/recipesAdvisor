import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Glyphicon } from 'react-bootstrap';
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
      deleteFetchFavourites,
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
      <Col xs={6} md={4} className={classes.col}>
        <img
          id={'plus'}
          className={classes.plus}
          src={'../../images/plus.png'}
        />
        <div className={classes.imageWrapper}>
          <form method="post" onSubmit={this.handleClick}>
            <button className={classes.favBtn}>
              {isFavourite ? (
                <Glyphicon glyph={'heart'} className={classes.glyph} />
              ) : (
                <Glyphicon glyph={'heart-empty'} className={classes.glyph} />
              )}
            </button>
          </form>
          <img
            id={'mainImage'}
            className={classes.mainImage}
            src={recipe.image}
          />
        </div>
        <div className={classes.cline} />
        <div className={classes.content}>
          <h3 className={classes.title}>{recipe.label}</h3>
        </div>
      </Col>
    );
  }
}

export default injectSheet(styles)(Recipe);
