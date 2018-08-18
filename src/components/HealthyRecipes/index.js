import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Pagination from '../../containers/Pagination';
import Recipe from '../Recipe';
import styles from './styles';

class HealthyRecipes extends Component {
  componentDidMount() {
    const { curPage } = this.props;
    this.props.getHealthyRecipes(this.props.label, curPage);
  }

  componentDidUpdate(prevProps) {
    const { firstPage, curPage } = this.props;
    if (this.props.label !== prevProps.label) {
      firstPage();
      this.props.getHealthyRecipes(this.props.label, curPage);
    }

    if (curPage !== prevProps.curPage) {
      this.props.getHealthyRecipes(this.props.label, curPage);
    }
  }

  render() {
    if (!this.props.isHealthyRecipesFetching) {
      const healthyRecipes = this.props.healthyRecipes;
      const { classes } = this.props;
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
