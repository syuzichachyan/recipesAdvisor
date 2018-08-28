import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Pagination from '../../components/Pagination';
import { nextPage, prevPage } from '../../actions';

const mapStateToProps = state => ({
  curPage: state.curPage
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      nextPage,
      prevPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
