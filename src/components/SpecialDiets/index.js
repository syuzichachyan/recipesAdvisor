import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Recipe from '../../containers/Recipe';
import Pagination from '../../containers/Pagination';
import Loader from '../Loader';
import styles from './styles';

class SpecialDiets extends Component {
  componentDidMount() {
    const { curPage, getSpecialDiets, label } = this.props;
    getSpecialDiets(label, curPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      const { curPage, label, firstPage, getSpecialDiets } = this.props;
      if (label !== prevProps.label) {
        firstPage();
        getSpecialDiets(label, curPage);
      }
      if (curPage !== prevProps.curPage) {
        getSpecialDiets(label, curPage);
      }
    }
  }

  render() {
    if (!this.props.isSpecialDietsFetching) {
      const { classes, specialDiets } = this.props;
      return (
        <div>
          <div className={classes.recipes}>
            {specialDiets.map(item =>
              item.hits.map((recipe, index) => {
                return (
                  <Recipe
                    recipe={recipe.recipe}
                    key={recipe.recipe.url}
                    index={index}
                    q={item.q}
                    type={'special'}
                  />
                );
              })
            )}
          </div>
          <Pagination type={'special'} />
        </div>
      );
    } else return <Loader />;
  }
  static propTypes = {
    classes: PropTypes.object,
    specialDiets: PropTypes.array,
    curPage: PropTypes.number,
    label: PropTypes.string,
    firstPage: PropTypes.func,
    getSpecialDiets: PropTypes.func
  };
}
export default injectSheet(styles)(SpecialDiets);
