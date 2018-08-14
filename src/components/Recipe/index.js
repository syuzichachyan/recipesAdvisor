import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './style';

class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    classes: PropTypes.object
  };
  render() {
    const { recipe, classes } = this.props;
    return (
      <div className={classes.recipe}>
        <img src={recipe.image} alt="something went wrong" />
        <p>{recipe.label}</p>
      </div>
    );
  }
}

export default injectSheet(styles)(Recipe);
