import { connect } from 'react-redux';
import { addDiet, removeDiet } from '../../actions';
import { addHealth, removeHealth } from '../../actions';
import Filter from '../../components/Filter';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    filterDiets: state.filterDiets,
    filterHealths: state.filterHealths
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addDiet, removeDiet, addHealth, removeHealth },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
