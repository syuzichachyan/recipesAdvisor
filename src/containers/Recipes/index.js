import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRecipes, firstPage, nextPage } from '../../actions';
import Recipes from '../../components/Recipes';

const mapStateToProps = state => {
  return {
    isRecipesFetching: state.isRecipesFetching,
    recipes: state.recipes,
    curPage: state.curPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getRecipes,
      firstPage,
      nextPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
