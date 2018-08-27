import { connect } from 'react-redux';

import {
  addToFavourites,
  favouriteRecipe,
  favouriteSpecialRecipe,
  removeFromFavourites
} from '../../actions';
import Recipe from '../../components/Recipe';
import { deleteFetchFavourites, fetchFavourites } from '../../actions/favourites';

const mapStateToProps = state => ({
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  favouriteRecipe: (index, q, type) => {
    switch (type) {
      case 'special':
        return dispatch(favouriteSpecialRecipe(index, q));
      case 'healthy':
        return dispatch(favouriteSpecialRecipe(index, q));
      default:
        return dispatch(favouriteRecipe(index, q));
    }
  },
  fetchFavourites: (state, jwt) => dispatch(fetchFavourites(state, jwt)),
  addToFavourites: recipe => dispatch(addToFavourites(recipe)),
  deleteFetchFavourites: (id, jwt) => dispatch(deleteFetchFavourites(id, jwt)),
  removeFromFavourites: uri => dispatch(removeFromFavourites(uri))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
