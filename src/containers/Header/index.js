import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import { firstPage } from '../../actions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ firstPage }, dispatch);
};

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
