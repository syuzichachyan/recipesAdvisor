import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';
import { Field } from 'redux-form';

function Checkbox(props) {
  const { classes } = props;
  return (
    <label className={classes.container}>
      <Field name="noPreferences" component="input" type="checkbox" />
      <span className={classes.checkmark} />
    </label>
  );
}

Checkbox.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Checkbox);
