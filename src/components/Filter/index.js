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
    const { filterDiets, addDiet, removeDiet } = this.props;
    if (filterDiets.includes(v)) {
      removeDiet(v);
    } else {
      addDiet(v);
    }
  };

  handleHealthClick = v => {
    const { filterHealths, addHealth, removeHealth } = this.props;
    if (filterHealths.includes(v)) {
      removeHealth(v);
    } else {
      addHealth(v);
    }
  };

  render() {
    const { classes, filterDiets, filterHealths } = this.props;
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
                {filterDiets.includes(v) ? `✓ ${v}` : `  ${v}`}
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
                {filterHealths.includes(v) ? `✓ ${v}` : `  ${v}`}
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
