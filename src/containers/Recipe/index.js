import { connect } from 'react-redux';

import { favouriteRecipe, favouriteSpecialRecipe } from '../../actions';
import Recipe from '../../components/Recipe';
import {
  deleteFetchFavourites,
  fetchFavourites
} from '../../actions/favourites';

const mapStateToProps = state => ({
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  fetchFavourites: (state, jwt) => dispatch(fetchFavourites(state, jwt)),
  deleteFetchFavourites: (id, jwt) => dispatch(deleteFetchFavourites(id, jwt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
