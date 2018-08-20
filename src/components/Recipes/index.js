import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../containers/Pagination';
import Recipe from '../../containers/Recipe';
import Loader from '../Loader';
import injectSheet from 'react-jss';
import styles from './styles';

class Recipes extends Component {
  componentDidMount() {
    const { curPage, includes, excludes, getRecipes } = this.props;
    getRecipes(curPage, excludes, includes);
  }

  componentDidUpdate(prevProps) {
    const { curPage, getRecipes, excludes, includes } = this.props;
    if (curPage !== prevProps.curPage) {
      getRecipes(curPage, excludes, includes);
    }
  }

  static propTypes = {
    curPage: PropTypes.number,
    includes: PropTypes.array,
    excludes: PropTypes.array,
    getRecipes: PropTypes.func,
    isRecipesFetching: PropTypes.bool,
    recipes: PropTypes.array,
    classes: PropTypes.object
  };
  static defaultProps = {
    isRecipesFetching: false,
    recipes: []
  };

  render() {
    const { isRecipesFetching, recipes, classes } = this.props;
    if (isRecipesFetching === false) {
      return (
        <div>
          <div className={classes.recipes}>
            {recipes.map(item =>
              item.hits.map((recipe, index) => {
                return (
                  <Recipe
                    recipe={recipe.recipe}
                    key={recipe.recipe.url}
                    index={index}
                    q={item.q}
                    type={'profile'}
                  />
                );
              })
            )}
          </div>
          <Pagination type={'profile'} />
        </div>
      );
    } else return <Loader/>;
  }
}

export default injectSheet(styles)(Recipes);
