import { connect } from 'react-redux';

import Pagination from '../../components/Pagination';
import { nextHealthyPage, nextPage, prevHealthyPage, prevPage } from '../../actions';

const mapStateToProps = state => ({
    curPage: state.curPage,
    curHealthyPage: state.curHealthyPage
  });

const mapDispatchToProps = dispatch => ({
  nextPage: page => dispatch(nextPage(page)),
  prevPage: page => dispatch(prevPage(page)),
  nextHealthyPage: page => dispatch(nextHealthyPage(page)),
  prevHealthyPage: page => dispatch(prevHealthyPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);