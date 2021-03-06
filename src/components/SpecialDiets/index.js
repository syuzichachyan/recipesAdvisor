import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Recipe from '../Recipe';
import Pagination from '../../containers/Pagination';
import styles from './styles';

class SpecialDiets extends Component {
  componentDidMount() {
    const { curPage, getSpecialDiets, label } = this.props;
    getSpecialDiets(label, curPage);
  }

  componentDidUpdate(prevProps) {
    const { curPage, label, firstPage, getSpecialDiets } = this.props;
    if (label !== prevProps.label) {
      firstPage();
      getSpecialDiets(label, curPage);
    }
    if (curPage !== prevProps.curPage) {
      getSpecialDiets(label, curPage);
    }
  }

  render() {
    if (!this.props.isSpecialDietsFetching) {
      const { classes, specialDiets } = this.props;
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
