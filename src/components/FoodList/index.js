import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';

import FoodCard from '../FoodCard';

class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    };
  }

  handleInput = e => this.setState({ inputVal: e.target.value });

  handleKeyPress = e => {
    if (e.key === 'Enter' && this.state.inputVal.trim().length !== 0) {
      const inputVal = this.state.inputVal.trim();
      this.props.addToArr(inputVal);
      this.setState({ inputVal: '' });
    }
  };

  render() {
    const { classes, foodArray, inputPlaceholder } = this.props;
    return (
      <div className={classes.paper}>
        {foodArray.map(v => (
          <FoodCard
            key={v.id}
            removeFromArr={this.props.removeFromArr}
            foodObj={v}
          />
        ))}
        <input
          onChange={this.handleInput}
          onKeyPress={this.handleKeyPress}
          className={classes.addFood}
          placeholder={inputPlaceholder}
          value={this.state.inputVal}
        />
      </div>
    );
  }

  static propTypes = {
    classes: PropTypes.object,
    addToArr: PropTypes.func,
    foodArray: PropTypes.array,
    inputPlaceholder: PropTypes.string,
    removeFromArr: PropTypes.func
  };
}

export default injectSheet(styles)(FoodList);
