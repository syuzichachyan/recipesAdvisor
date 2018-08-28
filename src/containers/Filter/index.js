import { connect } from 'react-redux';
import {
  addHealthLabel,
  addDietLabel,
  removeLabel,
  getRecipes
} from '../../actions';
import Filter from '../../components/Filter';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addHealthLabel,
      addDietLabel,
      removeLabel,
      getRecipes
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
