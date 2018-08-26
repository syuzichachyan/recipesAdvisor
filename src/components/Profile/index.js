import React, { Component } from 'react';

class ProfilePage extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    console.log(!jwt);
    const { getfetchFavourites, history } = this.props;
    if (!jwt) {
      history.push('/login');
    }
    getfetchFavourites(jwt);
  }

  render() {
    const { allFetchFavourites } = this.props;
    return (
      <div>
        <div>
          <div>hgh</div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
