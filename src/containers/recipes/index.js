import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRecipes } from '../../actions';
import Recipes from '../../components/Recipes';

const mapStateToProps = state => {
  return {
    isRecipesFetching: state.isRecipesFetching,
    recipes: state.recipes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRecipes: (excludes, includes) => dispatch(getRecipes(excludes, includes))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
