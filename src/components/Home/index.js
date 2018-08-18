import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import { Redirect, Link } from 'react-router-dom';
import FoodPreferences from '../FoodPreferences';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  submit = val => {
    console.log(val);
    this.setState({ redirect: true });
  };

  render() {
    const { classes } = this.props;
    if (this.state.redirect) return <Redirect to="profile" />;
    return (
      <div className={classes.main}>
        <div className={classes.topButtonsContainer}>
          <Link className={classes.link} to="/faq">
            <div className={classes.faq}>F.A.Q.</div>
          </Link>
          <Link className={classes.link} to="/profile">
            <div className={classes.profile}>Profile</div>
          </Link>
        </div>
        <h1 className={classes.title}>Recipes Adviser</h1>
        <FoodPreferences onSubmit={this.submit} />
      </div>
    );
  }

  static propTypes = {
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(Home);
