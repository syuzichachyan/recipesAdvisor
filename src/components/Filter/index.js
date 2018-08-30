import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

//import { Glyphicon } from 'react-bootstrap';

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
      search: '',
      show: false
    };
  }

  filterShowChange = () => this.setState({ show: !this.state.show });

  runSearch = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/search?q=${this.state.search.trim()}`);
  };

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
      this.runSearch();
      this.props.firstPage();
    }
  };

  handleFilterSubmit = () => {
    this.filterShowChange();
    this.runSearch();
  };

  render() {
    const { classes, filter } = this.props;
    const { search, show } = this.state;
    return (
      <div className={classes.main}>
        <input
          spellCheck="false"
          className={`${classes.search} ${show ? classes.searchActive : ''}`}
          type="text"
          onKeyDown={this.handleEnter}
          onChange={this.handleSearchInput}
          value={search}
        />
        <div
          className={`${classes.dropdownButtonContainer} ${
            show ? classes.dropdownButtonContainerActive : ''
          }`}
          onClick={this.filterShowChange}
        >
          {/*<Glyphicon*/}
          {/*glyph="glyphicon glyphicon-filter"*/}
          {/*className={`${classes.dropdownOpenButton} ${*/}
          // show ? classes.dropdownOpenButtonActive : '' // }`}
          {/*/>*/}
        </div>
        <div
          className={`${classes.dropdownClose} ${
            show ? classes.dropdownActive : ''
          }`}
        >
          <div className={classes.sectionTitle}>Diets</div>
          <hr style={{ marginBottom: '5px' }} className={classes.hr} />
          <div className={classes.dietSection}>
            {diets.map(v => (
              <div
                className={classes.dietSectionButton}
                key={v[0]}
                onClick={() => this.handleDietClick(v[0])}
              >
                {filter.labels.includes(v[0]) ? `${v[1]} ✓` : `${v[1]}`}
              </div>
            ))}
          </div>
          <hr style={{ marginTop: '5px' }} className={classes.hr} />
          <div className={classes.sectionTitle}>Healthy</div>
          <hr style={{ marginBottom: '5px' }} className={classes.hr} />
          <div className={classes.healthSection}>
            {health.map(v => (
              <div
                className={classes.healthSectionButton}
                key={v[0]}
                onClick={() => this.handleHealthClick(v[0])}
              >
                {filter.labels.includes(v[0]) ? `${v[1]} ✓` : `${v[1]}`}
              </div>
            ))}
          </div>
          <hr
            style={{ marginTop: '5px', marginBottom: '5px' }}
            className={classes.hr}
          />
          <div className={classes.calSection}>
            <p className={classes.cal}>Cal </p>
            <p className={classes.fromTo}>
              from:
              <input maxLength="5" type="number" className={classes.calInput} />
            </p>
            <p className={classes.fromTo}>
              to:
              <input maxLength="5" type="number" className={classes.calInput} />
            </p>
            <button
              className={classes.searchButton}
              onClick={this.handleFilterSubmit}
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
