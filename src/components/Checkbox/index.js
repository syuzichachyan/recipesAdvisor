import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';

function Checkbox(props) {
  const { classes, onClick, checked } = props;
  return (
    <label className={classes.container}>
      <input checked={checked} onClick={onClick} type="checkbox" />
      <span className={classes.checkmark} />
    </label>
  );
}

Checkbox.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
  checked: PropTypes.bool
};

export default injectSheet(styles)(Checkbox);
