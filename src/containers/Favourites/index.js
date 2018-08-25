import { connect } from 'react-redux';
import { fetchFavourites } from '../../actions/favourites';
import Favourites from '../../components/Favourites';

const mapStateToProps = state => ({
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  fetchFavourites: state => fetchFavourites(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
