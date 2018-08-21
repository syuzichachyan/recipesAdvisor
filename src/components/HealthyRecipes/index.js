import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Pagination from '../../containers/Pagination';
import Recipe from '../../containers/Recipe';
import Loader from '../Loader';
import styles from './styles';

class HealthyRecipes extends Component {
  componentDidMount() {
    const { curPage, getHealthyRecipes, label } = this.props;
    getHealthyRecipes(label, curPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      const { firstPage, curPage, label, getHealthyRecipes } = this.props;
      if (label !== prevProps.label) {
        firstPage();
        getHealthyRecipes(label, curPage);
      }

      if (curPage !== prevProps.curPage) {
        getHealthyRecipes(label, curPage);
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
          <Pagination type={'healthy'} />
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
