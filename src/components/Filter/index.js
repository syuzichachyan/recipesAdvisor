import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const diets = [
  'Balanced',
  'High Protein',
  'Vegan',
  'Low Carb',
  'Low Fat',
  'Vegeterian'
];

const health = [
  'Peanut Free',
  'Tree Nut Free',
  'Sugar Conscious',
  'Alcohol Free'
];

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleClick = () => this.setState({ show: !this.state.show });

  handleDietClick = v => {
    const { filter, addDietLabel, removeLabel } = this.props;
    if (filter.labels.includes(v)) {
      removeLabel(v);
    } else {
      addDietLabel(v);
    }
  };

  handleHealthClick = v => {
    const { filter, addHealthLabel, removeLabel } = this.props;
    if (filter.labels.includes(v)) {
      removeLabel(v);
    } else {
      addHealthLabel(v);
    }
  };

  render() {
    const { classes, filter } = this.props;
    console.log(filter.la);
    const { show } = this.state;
    return (
      <div className={classes.main}>
        <button
          className={`${classes.button} ${show ? classes.buttonActive : ''}`}
          onClick={this.handleClick}
        >
          Filter
        </button>
        <div
          className={classes.dropdown}
          style={{ display: show ? 'flex' : 'none' }}
        >
          <div className={classes.sectionTitle}>Diets</div>
          <div className={classes.dietSection}>
            {diets.map(v => (
              <div
                className={classes.dietSectionButton}
                key={v}
                onClick={() => this.handleDietClick(v)}
              >
                {filter.labels.includes(v) ? `✓ ${v}` : `  ${v}`}
              </div>
            ))}
          </div>
          <div className={classes.sectionTitle}>Healthy</div>
          <div className={classes.healthSection}>
            {health.map(v => (
              <div
                className={classes.healthSectionButton}
                key={v}
                onClick={() => this.handleHealthClick(v)}
              >
                {filter.labels.includes(v) ? `✓ ${v}` : `  ${v}`}
              </div>
            ))}
          </div>
          <div className={classes.calSection}>
            <p>Cal </p>
            <p>
              from:
              <input type="text" className={classes.input} />
            </p>
            <p>
              to:
              <input type="text" className={classes.input} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Filter);
