import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';

import FoodList from '../FoodList';
import Checkbox from '../Checkbox';
import { Link } from 'react-router-dom';

class FoodPreferences extends Component {
  render() {
    const {
      classes,
      preference,
      indifference,
      noPreferences,
      addPreference,
      removePreference,
      addIndifference,
      removeIndifference,
      changeNoPreferences
    } = this.props;
    return (
      <div className={classes.listsContainer}>
        <div className={classes.list}>
          <h2 className={classes.listTitle}>Preferences</h2>
          <FoodList
            addToArr={addPreference}
            removeFromArr={removePreference}
            foodArray={preference}
            inputPlaceholder="Food you prefer"
          />
        </div>
        <div className={classes.list}>
          <h2 className={classes.listTitle}>Indifferences</h2>
          <FoodList
            addToArr={addIndifference}
            removeFromArr={removeIndifference}
            foodArray={indifference}
            inputPlaceholder="Food you dont like"
          />
        </div>
        <div className={classes.noPrefsContainer}>
          <div className={classes.noPrefsText}>
            I dont have any preferences.
          </div>
          <Checkbox checked={noPreferences} onClick={changeNoPreferences} />
        </div>
        <Link className={classes.link} to="somewhere">
          <button className={classes.submit}>SUBMIT</button>
        </Link>
      </div>
    );
  }

  static propTypes = {
    classes: PropTypes.object,
    preference: PropTypes.array,
    indifference: PropTypes.array,
    noPreferences: PropTypes.bool,
    addPreference: PropTypes.func,
    removePreference: PropTypes.func,
    addIndifference: PropTypes.func,
    removeIndifference: PropTypes.func,
    changeNoPreferences: PropTypes.func
  };
}

export default injectSheet(styles)(FoodPreferences);
