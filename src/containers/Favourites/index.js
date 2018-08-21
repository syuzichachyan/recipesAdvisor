import { connect } from 'react-redux';

import Favourites from '../../components/Favourites';

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect(mapStateToProps)(Favourites);
