import { connect } from 'react-redux';
import { getSpecialDiets } from '../../actions';
import SpecialDiets from '../../components/SpecialDiets';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    specialDiets: state.specialDiets,
    isSpecialDietsFetching: state.isSpecialDietsFetching
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSpecialDiets
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialDiets);
