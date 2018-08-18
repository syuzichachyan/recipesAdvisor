import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { reduxForm, FieldArray } from 'redux-form';
import FoodList from '../FoodList';
import Checkbox from '../Checkbox';

class FoodPreferences extends Component {
  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <form action="/somewhere" className={classes.listsContainer}>
        <div className={classes.list}>
          <h2 className={classes.listTitle}>Preferences</h2>
          <FieldArray
            inputPlaceholder="Food you prefer"
            name="preference"
            component={FoodList}
          />
        </div>
        <div className={classes.list}>
          <h2 className={classes.listTitle}>Indifferences</h2>
          <FieldArray
            inputPlaceholder="Food you dont like"
            name="indifference"
            component={FoodList}
          />
        </div>
        <div className={classes.noPrefsContainer}>
          <div className={classes.noPrefsText}>
            I dont have any preferences.
          </div>
          <Checkbox />
        </div>
        <Link
          onClick={handleSubmit}
          to="/somewhere"
          className={classes.link}
          type="submit"
        >
          SUBMIT
        </Link>
      </form>
    );
  }

  static propTypes = {
    classes: PropTypes.object,
    handleSubmit: PropTypes.func
  };
}

export default reduxForm({ form: 'preferences' })(
  injectSheet(styles)(FoodPreferences)
);
