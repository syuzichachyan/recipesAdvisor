import { connect } from 'react-redux';

import Header from '../../components/Header';
import { firstPage } from '../../actions';

const mapDispatchToProps = dispatch => ({
  firstPage: () => dispatch(firstPage())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
