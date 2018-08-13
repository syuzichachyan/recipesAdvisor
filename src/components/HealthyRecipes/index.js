import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Recipe from '../Recipe';
import styles from './style';

class HealthyRecipes extends Component {
  componentDidMount() {
    this.props.getHealthyRecipes(this.props.label);
  }
  componentDidUpdate(prevProps) {
    if (this.props.label !== prevProps.label) {
      this.props.getHealthyRecipes(this.props.label);
    }
  }
  render() {
    if (!this.props.isHealthyRecipesFetching) {
      const healthyRecipes = this.props.healthyRecipes;
      const { classes } = this.props;
      return (
        <div className={classes.recipes}>
          {healthyRecipes.map(item =>
            item.hits.map(recipe => {
              return <Recipe recipe={recipe.recipe} key={recipe.recipe.url} />;
            })
          )}
        </div>
      );
    } else return <div>sd</div>;
  }
}
export default injectSheet(styles)(HealthyRecipes);
