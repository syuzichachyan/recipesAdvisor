import { connect } from 'react-redux';
import { getHealthyRecipes } from '../../actions';
import HealthyRecipes from '../../components/HealthyRecipes';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    healthyRecipes: state.healthyRecipes,
    isHealthyRecipesFetching: state.isHealthyRecipesFetching
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getHealthyRecipes
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HealthyRecipes);
