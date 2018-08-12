import { connect } from 'react-redux';

import Header from '../../components/Header';
import { isWideEnough, collapse } from '../../actions';

function mapStateToProps(state) {
  return {
    Collapsed: state.collapse,
    IsWideEnough: state.isWideEnough
  };
}

const mapDispatchToProps = (dispatch) => ({
  isWideEnough: bool => dispatch(isWideEnough(bool)),
  collapse: bool => dispatch(collapse(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);