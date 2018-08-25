import { connect } from 'react-redux';
import ProfilePage from '../../components/Profile';
import { getfetchFavourites } from '../../actions/favourites';

const mapStateToProps = state => ({
  allFetchFavourites: state.allFetchFavourites
});

const mapDispatchToProps = dispatch => ({
  getfetchFavourites: jwt => dispatch(getfetchFavourites(jwt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
