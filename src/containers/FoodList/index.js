import { connect } from 'react-redux';
import { addPreference, removePreference } from '../../actions';
import FoodList from '../../components/FoodList';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    preferences: state.preferences
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addPreference, removePreference }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
