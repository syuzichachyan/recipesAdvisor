import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRandomRecipes } from '../../actions';
import RandomRecipes from '../../components/RandomRecipes';

const mapStateToProps = state => {
  return {
    isRandomRecipesFetching: state.isRandomRecipesFetching,
    randomRecipes: state.randomRecipes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getRandomRecipes
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomRecipes);