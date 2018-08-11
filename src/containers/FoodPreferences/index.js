import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addPreference,
  removePreference,
  addIndifference,
  removeIndifference,
  changeNoPreferences
} from '../../actions';

import FoodPreferences from '../../components/FoodPreferences';

function mapStatetoProps(state) {
  return {
    preference: state.preference,
    indifference: state.indifference,
    noPreferences: state.noPreferences
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addPreference,
      removePreference,
      addIndifference,
      removeIndifference,
      changeNoPreferences
    },
    dispatch
  );
}

export default connect(
  mapStatetoProps,
  matchDispatchToProps
)(FoodPreferences);
