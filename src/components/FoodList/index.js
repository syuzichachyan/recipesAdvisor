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
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.state.inputVal.trim().length !== 0) {
        this.props.fields.push({
          text: this.state.inputVal.trim(),
          id: this.idGen(this.props.fields.getAll())
        });
        this.setState({ inputVal: '' });
      }
    }
  };

  idGen = state => {
    if (!state) state = [];
    let id = 1;
    state.forEach(v => {
      if (v.id >= id) id = v.id + 1;
    });
    return id;
  };

  render() {
    const { classes, inputPlaceholder, fields } = this.props;
    return (
      <div className={classes.paper}>
        {fields.map((a, i) => (
          <FoodCard key={fields.get(i).id} fields={fields} index={i} />
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

  static propTypes = {
    classes: PropTypes.object,
    inputPlaceholder: PropTypes.string,
    fields: PropTypes.object
  };
}

export default injectSheet(styles)(FoodList);
