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
      prevSpecialPage,
      type,
      curProfilePage,
      curHealthyPage,
      curSpecialPage
    } = this.props;
    switch (type) {
      case 'healthy':
        if (curHealthyPage !== 0) {
          prevHealthyPage(curHealthyPage - 1);
        }
        break;
      case 'special':
        if (curSpecialPage !== 0) {
          prevSpecialPage(curSpecialPage - 1);
        }
        break;
      default:
        if (curProfilePage !== 0) {
          prevPage(curProfilePage - 1);
        }
    }
  }

  handleNextClick() {
    const {
      nextPage,
      nextHealthyPage,
      nextSpecialPage,
      type,
      curProfilePage,
      curHealthyPage,
      curSpecialPage
    } = this.props;
    switch (type) {
      case 'healthy':
        nextHealthyPage(curHealthyPage + 1);
        break;
      case 'special':
        nextSpecialPage(curSpecialPage + 1);
        break;
      default:
        nextPage(curProfilePage + 1);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.btnGroup}>
        <Button className={classes.btn} onClick={this.handlePrevClick}>
          Prev
        </Button>
        <Button className={classes.btn} onClick={this.handleNextClick}>
          Next
        </Button>
      </div>
    );
  }
}

export default injectSheet(styles)(Pagination);
