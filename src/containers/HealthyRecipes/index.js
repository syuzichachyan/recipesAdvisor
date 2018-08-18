import { connect } from 'react-redux';
import { getHealthyRecipes, firstPage } from '../../actions';
import HealthyRecipes from '../../components/HealthyRecipes';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    healthyRecipes: state.healthyRecipes,
    isHealthyRecipesFetching: state.isHealthyRecipesFetching,
    curPage: state.curPage.healthyRecipes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getHealthyRecipes,
      firstPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HealthyRecipes);
