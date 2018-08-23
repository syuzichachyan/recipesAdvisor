import React, { Component } from 'react';
import injectSheet from 'react-jss';
// import PropTypes from 'prop-types';
import styles from './styles';
import { Link } from 'react-router-dom';

import FoodList from '../../containers/FoodList';

class FoodPreferences extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.listsContainer}>
        <div className={classes.list}>
          <h2 className={classes.listTitle}>Preffered Products</h2>
          <FoodList inputPlaceholder="Food you prefer" type />
        </div>
        <div className={classes.list}>
          <h2 className={classes.listTitle}>Products to Avoid</h2>
          <FoodList inputPlaceholder="Food you dont like" type={false} />
        </div>
        <Link to="home" className={classes.button}>
          Show Recipes
        </Link>
      </div>
    );
  }
}

export default injectSheet(styles)(FoodPreferences);
