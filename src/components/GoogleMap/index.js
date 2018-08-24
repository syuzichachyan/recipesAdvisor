import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map
        google={this.props.google}
        style={{ width: '640px', height: '400px', position: 'relative' }}
        className={'map'}
        initialCenter={{
            lat: 40.2018202,
                lng: 44.4924011
        }}
        zoom={16}
            >
            <Marker name={'ACA'} position={{ lat: 40.2018202, lng: 44.4924011 }} />
        </Map>
    );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB60RMlfliecFnXM-SNDJj4QjNVdSymk4w'
})(MapContainer);