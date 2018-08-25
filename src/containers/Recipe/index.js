import { connect } from 'react-redux';

import {
  addToFavourites,
  favouriteRecipe,
  favouriteSpecialRecipe,
  removeFromFavourites
} from '../../actions';
import Recipe from '../../components/Recipe';
import { fetchFavourites } from '../../actions/favourites';

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
  fetchFavourites: state => dispatch(fetchFavourites(state)),
  addToFavourites: recipe => dispatch(addToFavourites(recipe)),
  removeFromFavourites: uri => dispatch(removeFromFavourites(uri))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
