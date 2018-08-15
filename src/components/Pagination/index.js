import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import injectSheet from 'react-jss';

import styles from './styles';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick() {
    const {
      prevPage,
      prevHealthyPage,
      type,
      curPage,
      curHealthyPage
    } = this.props;
    switch (type) {
      case 'healthy':
        if (curHealthyPage !== 0) {
          prevHealthyPage(curHealthyPage-1);
        }
        break;
      default:
        if (curPage !== 0) {
          prevPage(curPage-1);
        }
    }
  }

  handleNextClick() {
    const {
      nextPage,
      nextHealthyPage,
      type,
      curPage,
      curHealthyPage
    } = this.props;
    switch (type) {
      case 'healthy':
        nextHealthyPage(curHealthyPage+1);
        break;
      default:
        nextPage(curPage+1);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.btnGroup}>
        <Button onClick={this.handlePrevClick}>Prev</Button>
        <Button onClick={this.handleNextClick}>Next</Button>
      </div>
    );
  }
}

export default injectSheet(styles)(Pagination);
