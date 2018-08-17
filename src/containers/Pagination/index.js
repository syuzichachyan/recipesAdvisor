import { connect } from 'react-redux';

import Pagination from '../../components/Pagination';
import {
  nextHealthyPage,
  nextPage,
  nextSpecialPage,
  prevHealthyPage,
  prevPage,
  prevSpecialPage
} from '../../actions';

const mapStateToProps = state => ({
  curProfilePage: state.curPage.profile,
  curHealthyPage: state.curPage.healthyRecipes,
  curSpecialPage: state.curPage.specialDiets
});

const mapDispatchToProps = dispatch => ({
  nextPage: page => dispatch(nextPage(page)),
  prevPage: page => dispatch(prevPage(page)),
  nextHealthyPage: page => dispatch(nextHealthyPage(page)),
  prevHealthyPage: page => dispatch(prevHealthyPage(page)),
  nextSpecialPage: page => dispatch(nextSpecialPage(page)),
  prevSpecialPage: page => dispatch(prevSpecialPage(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
