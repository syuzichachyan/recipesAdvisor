import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      nextPage,
      prevPage,
      nextHealthyPage,
      prevHealthyPage,
      nextSpecialPage,
      prevSpecialPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
