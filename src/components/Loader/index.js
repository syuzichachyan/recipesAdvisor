import React from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

const Loader = props => {
  const { classes } = props;
  return (
    <img
      src={'https://i.giphy.com/media/3o85g3loeiLcF26OZy/giphy.webp'}
      className={classes.loader}
      alt={'Not Found'}
    />
  );
};

export default injectSheet(styles)(Loader);
