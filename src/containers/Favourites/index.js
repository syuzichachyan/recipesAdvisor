import { connect } from 'react-redux';
import { getFetchFavourites } from '../../actions/favourites';
import Favourites from '../../components/Favourites';

const mapStateToProps = state => ({
  allFetchFavourites: state.allFetchFavourites,
  isFavouritesFetching: state.isFavouriteRecipesFetching
});

const mapDispatchToProps = dispatch => ({
  getFetchFavourites: state => dispatch(getFetchFavourites(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
