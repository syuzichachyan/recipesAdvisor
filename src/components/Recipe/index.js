import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Col, Glyphicon } from 'react-bootstrap';
import injectSheet from 'react-jss';
import styles from './styles';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRotated: false
    };

    this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
    this.handleRotateClick = this.handleRotateClick.bind(this);
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

  handleFavouriteClick(e) {
    e.preventDefault();
    const {
      recipe,
      fetchFavourites,
      deleteFetchFavourites,
      history
    } = this.props;
    const { isFavourite } = recipe;
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      history.push('/Login');
    }
    console.log({
      favoriteId: recipe.uri,
      recepte: { ...recipe, isFavourite: true }
    });
    isFavourite
      ? deleteFetchFavourites(recipe.uri.slice(45), jwt)
      : fetchFavourites(
          {
            favoriteId: recipe.uri.slice(45),
            recepte: { ...recipe, isFavourite: true }
          },
          jwt
        );
  }

  handleRotateClick() {
    const { isRotated } = this.state;
    this.setState({
      isRotated: !isRotated
    });
  }

  render() {
    const { recipe, classes } = this.props;
    const { isFavourite } = recipe;
    const { isRotated } = this.state;
    return <div style={{ height: '500px', width: '400px' }} />;
    //  return (
    {
      /*<Col xs={6} md={4} className={classes.col}>*/
    }
    {
      /*<div className={classes.scene}>*/
    }
    {
      /*<div*/
    }
    {
      /*className={`${classes.card} ${isRotated ? classes.isFlipped : ''}`}*/
    }
    {
      /*onClick={this.handleRotateClick}*/
    }
    {
      /*>*/
    }
    {
      /*<div className={`${classes.cardFace} ${classes.cardFaceFront}`}>*/
    }
    {
      /*<div id={'imageWrapper'} className={classes.imageWrapper}>*/
    }
    {
      /*<form method="post" onSubmit={this.handleFavouriteClick}>*/
    }
    {
      /*<button className={classes.favBtn}>*/
    }
    {
      /*{isFavourite ? (*/
    }
    {
      /*<Glyphicon glyph={'heart'} className={classes.glyph} />*/
    }
    {
      /*) : (*/
    }
    {
      /*<Glyphicon*/
    }
    {
      /*glyph={'heart-empty'}*/
    }
    {
      /*className={classes.glyph}*/
    }
    {
      /*/>*/
    }
    {
      /*)}*/
    }
    {
      /*</button>*/
    }
    {
      /*</form>*/
    }
    {
      /*/!*<img*!/*/
    }
    {
      /*/!*id={'plus'}*!/*/
    }
    {
      /*/!*className={classes.plus}*!/*/
    }
    {
      /*/!*src={'../../images/plus.png'}*!/*/
    }
    // {/*/!*/>*/*/}
    {
      /*<img*/
    }
    {
      /*id={'mainImage'}*/
    }
    {
      /*className={classes.mainImage}*/
    }
    {
      /*src={recipe.image}*/
    }
    {
      /*/>*/
    }
    {
      /*<div className={classes.cline} />*/
    }
    {
      /*</div>*/
    }
    {
      /*<div className={classes.content}>*/
    }
    {
      /*<h3 className={classes.title}>{recipe.label}</h3>*/
    }
    {
      /*</div>*/
    }
    {
      /*</div>*/
    }
    {
      /*<div className={`${classes.cardFace} ${classes.cardFaceBack}`}>*/
    }
    {
      /*<h3 className={classes.title}>{recipe.label}</h3>*/
    }
    {
      /*</div>*/
    }
    {
      /*</div>*/
    }
    {
      /*</div>*/
    }
    {
      /*</Col>*/
    }
    //);
  }
}

export default injectSheet(styles)(Recipe);
