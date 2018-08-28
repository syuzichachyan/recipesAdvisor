import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRecipes, firstPage } from '../../actions';
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
      firstPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
