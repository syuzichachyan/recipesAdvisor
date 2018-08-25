import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from '../../containers/Recipe';
import Loader from '../Loader';
import injectSheet from 'react-jss';
import styles from './styles';

class RandomRecipes extends Component {
  componentDidMount() {
    const { getRandomRecipes } = this.props;
    getRandomRecipes();
  }

  static propTypes = {
    getRandomRecipes: PropTypes.func,
    isRandomRecipesFetching: PropTypes.bool,
    randomRecipes: PropTypes.array,
    classes: PropTypes.object
  };
  static defaultProps = {
    isRandomRecipesFetching: false,
    randomRecipes: []
  };

  render() {
    const { isRandomRecipesFetching, randomRecipes, classes } = this.props;
    if (isRandomRecipesFetching === false) {
      return (
        <div>
          <div className={classes.recipes}>
            {randomRecipes.map(item =>
              item.hits.map((recipe, index) => (
                <Recipe
                  recipe={recipe.recipe}
                  key={recipe.recipe.url}
                  index={index}
                  q={item.q}
                  type={'profile'}
                />
              ))
            )}
          </div>
          {randomRecipes.length ? '' : <Loader />}
        </div>
      );
    } else return <Loader />;
  }
}

export default injectSheet(styles)(RandomRecipes);
