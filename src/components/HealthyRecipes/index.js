import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Pagination from '../../containers/Pagination';
import Recipe from '../Recipe';
import styles from './styles';

class HealthyRecipes extends Component {
  componentDidMount() {
    const { curPage, getHealthyRecipes, label } = this.props;
    getHealthyRecipes(label, curPage);
  }

  componentDidUpdate(prevProps) {
    const { firstPage, curPage, label, getHealthyRecipes } = this.props;
    if (label !== prevProps.label) {
      firstPage();
      getHealthyRecipes(label, curPage);
    }

    if (curPage !== prevProps.curPage) {
      getHealthyRecipes(label, curPage);
    }
  }

  render() {
    if (!this.props.isHealthyRecipesFetching) {
      const { classes, healthyRecipes } = this.props;
      return (
        <div>
          <div className={classes.recipes}>
            {healthyRecipes.map(item =>
              item.hits.map(recipe => {
                return (
                  <Recipe recipe={recipe.recipe} key={recipe.recipe.url} />
                );
              })
            )}
          </div>
          <Pagination type={'healthy'} />
        </div>
      );
    } else return <div>sd</div>;
  }
}
export default injectSheet(styles)(HealthyRecipes);
