import React, { Component } from 'react';
import injectSheet from 'react-jss';
// import PropTypes from 'prop-types';
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
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.state.inputVal.trim().length !== 0) {
        const { addPreference, type } = this.props;
        addPreference({
          text: this.state.inputVal.trim(),
          type
        });
        this.setState({ inputVal: '' });
      }
    }
  };

  render() {
    const {
      classes,
      inputPlaceholder,
      preferences,
      type,
      removePreference
    } = this.props;
    return (
      <div className={classes.paper}>
        {preferences.filter(v => v.type === type).map(v => (
          <FoodCard
            key={v.id}
            foodObj={v}
            removePreference={removePreference}
          />
        ))}
        <input
          onKeyPress={this.handleKeyPress}
          value={this.state.inputVal}
          onChange={this.handleInput}
          className={classes.addFood}
          placeholder={inputPlaceholder}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(FoodList);
