import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../containers/Pagination';
import Recipe from '../../containers/Recipe';
import Loader from '../Loader';
import injectSheet from 'react-jss';
import styles from './styles';
import { Grid, Row } from 'react-bootstrap';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.qJoiner = this.qJoiner.bind(this);
  }

  componentDidMount() {
    const { curPage, getRecipes, type, labels, q } = this.props;
    getRecipes(curPage, labels, q, type);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      const { curPage, labels, firstPage, getRecipes, q, type } = this.props;
      if (labels !== prevProps.labels || q !== prevProps.q) {
        firstPage();
        getRecipes(curPage, labels, q, type);
      }
      if (curPage !== prevProps.curPage) {
        getRecipes(curPage, labels, q, type);
      }
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

  qJoiner() {
    const { recipes } = this.props;
    let labels = '';
    recipes.map(elem => {
      labels = labels + elem.q + ', ';
    });
    return labels.substring(0, labels.length - 2);
  }

  render() {
    const { isRecipesFetching, recipes, classes } = this.props;
    if (isRecipesFetching === false) {
      return (
        <Grid>
          <Row className={classes.recipes}>
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
          </Row>
          {recipes.length ? (
            recipes.some(item => item.count > 0) ? (
              <Pagination type={'profile'} />
            ) : (
              <h1>
                Sorry! There aren`t '{this.qJoiner()}'{' '}
                {recipes.length === 1 ? 'recipe' : 'recipes'}
              </h1>
            )
          ) : (
            <Loader />
          )}
        </Grid>
      );
    } else return <Loader />;
  }
}

export default injectSheet(styles)(Recipes);
