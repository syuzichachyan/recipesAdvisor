import { connect } from 'react-redux';
import FilteredRecipe from '../../components/FilteredRecipe';

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(FilteredRecipe);
