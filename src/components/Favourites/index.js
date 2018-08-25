import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Recipe from '../../containers/Recipe';
import styles from './styles';

class Favourites extends Component {
  componentDidMount() {
    const { fetchFavourites, favourites } = this.props;
    fetchFavourites({ favoriteId: favourites.uri, recepte: favourites });
  }
  render() {
    const { classes, favourites } = this.props;
    return (
      <div>
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    favourites: PropTypes.array
  };
}

export default injectSheet(styles)(Favourites);
