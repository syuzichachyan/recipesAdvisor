import { connect } from 'react-redux';
import { getfetchFavourites } from '../../actions/favourites';
import Favourites from '../../components/Favourites';

const mapStateToProps = state => ({
  allFetchFavourites: state.allFetchFavourites
});

const mapDispatchToProps = dispatch => ({
  getfetchFavourites: state => dispatch(getfetchFavourites(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
