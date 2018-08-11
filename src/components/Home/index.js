import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import { Link } from 'react-router-dom';
import FoodPreferences from '../../containers/FoodPreferences';

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Link className={classes.link} to="/faq">
          <div className={classes.faq}>F.A.Q.</div>
        </Link>
        <Link className={classes.link} to="/profile">
          <div className={classes.login}>Profile</div>
        </Link>
        <h1 className={classes.title}>Recipes Adviser</h1>
        <FoodPreferences />
      </div>
    );
  }

  static propTypes = {
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(Home);
