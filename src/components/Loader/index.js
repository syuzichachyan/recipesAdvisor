import React from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

const Loader = props => {
  const { classes } = props;
  return (
    <span className={classes.container}>
      <p className={classes.loading}>Loading...</p>
      <div className={classes.loader} />
    </span>
  );
};

export default injectSheet(styles)(Loader);
