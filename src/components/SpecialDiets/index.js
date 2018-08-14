import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Recipe from '../Recipe';
import styles from './style';

class SpecialDiets extends Component {
  componentDidMount() {
    this.props.getSpecialDiets(this.props.label);
  }
  componentDidUpdate(prevProps) {
    if (this.props.label !== prevProps.label) {
      this.props.getSpecialDiets(this.props.label);
    }
  }
  render() {
    if (!this.props.isSpecialDietsFetching) {
      const specialDiets = this.props.specialDiets;
      const { classes } = this.props;
      return (
        <div className={classes.recipes}>
          {specialDiets.map(item =>
            item.hits.map(recipe => {
              return <Recipe recipe={recipe.recipe} key={recipe.recipe.url} />;
            })
          )}
        </div>
      );
    } else return <div>sd</div>;
  }
}
export default injectSheet(styles)(SpecialDiets);
