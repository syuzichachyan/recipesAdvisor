import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import FoodPreferences from '../FoodPreferences';

class Preferences extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <h1 className={classes.title}>Recipes Adviser</h1>
        <FoodPreferences />
      </div>
    );
  }

  static propTypes = {
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(Preferences);
