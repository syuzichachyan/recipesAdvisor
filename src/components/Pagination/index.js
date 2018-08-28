import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';
import injectSheet from 'react-jss';

import styles from './styles';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick() {
    const { prevPage, curPage } = this.props;
    if (curPage !== 0) {
      prevPage(curPage - 1);
    }
  }

  handleNextClick() {
    const { nextPage, curPage } = this.props;
    nextPage(curPage + 1);
  }

  render() {
    const { classes } = this.props;
    return (
      <Pager className={classes.pager}>
        <Pager.Item previous onClick={this.handlePrevClick}>
          &larr; Previous
        </Pager.Item>
        <Pager.Item next onClick={this.handleNextClick}>
          Next &rarr;
        </Pager.Item>
      </Pager>
    );
  }
}

export default injectSheet(styles)(Pagination);
