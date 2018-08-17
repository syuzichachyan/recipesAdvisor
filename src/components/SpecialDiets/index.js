import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Recipe from '../Recipe';
import Pagination from '../../containers/Pagination';
import styles from './style';

class SpecialDiets extends Component {
  componentDidMount() {
    const { curPage } = this.props;
    this.props.getSpecialDiets(this.props.label, curPage);
  }
  componentDidUpdate(prevProps) {
    const { curPage } = this.props;
    if (this.props.label !== prevProps.label) {
      this.props.firstPage();
      this.props.getSpecialDiets(this.props.label, curPage);
    }
    if (curPage !== prevProps.curPage) {
      this.props.getSpecialDiets(this.props.label, curPage);
    }
  }
  render() {
    if (!this.props.isSpecialDietsFetching) {
      const specialDiets = this.props.specialDiets;
      const { classes } = this.props;
      return (
        <div>
          <div className={classes.recipes}>
            {specialDiets.map(item =>
              item.hits.map(recipe => {
                return (
                  <Recipe recipe={recipe.recipe} key={recipe.recipe.url} />
                );
              })
            )}
            {/*<Pagination type={'special'}/>*/}
          </div>
          <Pagination type={'special'} />
        </div>
      );
    } else return <div>sd</div>;
  }
}
export default injectSheet(styles)(SpecialDiets);
