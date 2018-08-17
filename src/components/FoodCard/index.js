import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

class FoodCard extends Component {
  handleClick = () => this.props.fields.remove(this.props.index);

  render() {
    const { classes, fields, index } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.text}>{fields.get(index).text}</div>
        <div className={classes.removeButContainer} onClick={this.handleClick}>
          <div className={classes.removeBut}>+</div>
        </div>
      </div>
    );
  }

  static propTypes = {
    classes: PropTypes.object,
    fields: PropTypes.object,
    index: PropTypes.number
  };
}

export default injectSheet(styles)(FoodCard);
