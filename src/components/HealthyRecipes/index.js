import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Pagination from '../../containers/Pagination';
import Recipe from '../../containers/Recipe';
import Loader from '../Loader';
import styles from './styles';

let count = 0;

class HealthyRecipes extends Component {
  componentDidMount() {
    const { curPage, getHealthyRecipes, labels, q } = this.props;
    getHealthyRecipes(labels, curPage, q);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      const { firstPage, curPage, labels, getHealthyRecipes, q } = this.props;
      if (labels !== prevProps.labels || q !== prevProps.q) {
        firstPage();
        getHealthyRecipes(labels, curPage, q);
      }

      if (curPage !== prevProps.curPage) {
        getHealthyRecipes(labels, curPage, q);
      }
    }
  }

  render() {
    if (!this.props.isHealthyRecipesFetching) {
      const { classes, healthyRecipes } = this.props;
      return (
        <div>
          <div className={classes.recipes}>
            {healthyRecipes.map(item =>
              item.hits.map((recipe, index) => {
                count++;
                return (
                  <Recipe
                    recipe={recipe.recipe}
                    key={recipe.recipe.url}
                    index={index}
                    q={item.q}
                    type={'healthy'}
                  />
                );
              })
            )}
          </div>
          {healthyRecipes.length ? (
            count ? (
              <Pagination type={'profile'} />
            ) : (
              <Loader />
            )
          ) : (
            <Loader />
          )}
        </div>
      );
    } else return <Loader />;
  }
  static propTypes = {
    classes: PropTypes.object,
    firstPage: PropTypes.func,
    curPage: PropTypes.number,
    getHealthyRecipes: PropTypes.func,
    label: PropTypes.string,
    healthyRecipes: PropTypes.array
  };
}
export default injectSheet(styles)(HealthyRecipes);
