import { connect } from 'react-redux';

import {
  addToFavourites,
  favouriteRecipe,
  favouriteSpecialRecipe,
  removeFromFavourites
} from '../../actions';
import Recipe from '../../components/Recipe';

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
  addToFavourites: recipe => dispatch(addToFavourites(recipe)),
  removeFromFavourites: uri => dispatch(removeFromFavourites(uri))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Recipe);
