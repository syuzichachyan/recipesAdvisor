import { connect } from 'react-redux';

import AuthenticatedComponent from '../../components/Authenticated';
import { fetchAuthenticated, logoutUser } from '../../actions/authenticated';

const mapStateToProps = state => {
  return {
    auth: state
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthenticated: (jwt, prop) => dispatch(fetchAuthenticated(jwt, prop)),
  logoutUser: prop => dispatch(logoutUser(prop))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedComponent);
