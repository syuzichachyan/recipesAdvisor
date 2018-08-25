import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const diets = [
  ['balanced', 'Balanced'],
  ['high-protein', 'High Protein'],
  ['vegan', 'Vegan'],
  ['low-carb', 'Low Carb'],
  ['low-fat', 'Low Fat'],
  ['vegeterian', 'Vegeterian']
];

const health = [
  ['peanut-free', 'Peanut Free'],
  ['tree-nut-free', 'Tree Nut Free'],
  ['sugar-conscious', 'Sugar Conscious'],
  ['alcohol-free', 'Alcohol Free']
];

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      search: ''
    };
  }

  handleInputClick = () => this.setState({ show: !this.state.show });

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

  handleSearchInput = e => this.setState({ search: e.target.value });

  handleEnter = e => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleSearch = () => this.props.runSearch(this.state.search.trim());

  render() {
    const { classes, filter } = this.props;
    const { show, search } = this.state;
    return (
      <div className={classes.main}>
        <input
          className={`${classes.search} ${show ? classes.searchActive : ''}`}
          type="text"
          onFocus={this.handleInputClick}
          onChange={this.handleSearchInput}
          value={search}
          onKeyDown={this.handleEnter}
        />
        <div
          className={classes.dropdown}
          style={{ display: show ? 'flex' : 'none' }}
        >
          <div className={classes.sectionTitle}>Diets</div>
          <div className={classes.dietSection}>
            {diets.map(v => (
              <div
                className={classes.dietSectionButton}
                key={v[0]}
                onClick={() => this.handleDietClick(v[0])}
              >
                {filter.labels.includes(v[0]) ? `✓ ${v[1]}` : `  ${v[1]}`}
              </div>
            ))}
          </div>
          <div className={classes.sectionTitle}>Healthy</div>
          <div className={classes.healthSection}>
            {health.map(v => (
              <div
                className={classes.healthSectionButton}
                key={v[0]}
                onClick={() => this.handleHealthClick(v[0])}
              >
                {filter.labels.includes(v[0]) ? `✓ ${v[1]}` : `  ${v[1]}`}
              </div>
            ))}
          </div>
          <div className={classes.calSection}>
            <p>Cal </p>
            <p>
              from:
              <input maxLength="5" type="text" className={classes.input} />
            </p>
            <p>
              to:
              <input maxLength="5" type="text" className={classes.input} />
            </p>
            <button
              className={classes.searchButton}
              onClick={this.handleSearch}
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Filter);
