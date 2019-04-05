import React, { Component } from 'react';
import './Home.css';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/Input';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

class CardMap extends Component {
    constructor() {
        super();
        this.myMap = React.createRef();

        this.state = {
            myMap: this.myMap
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZmlmb29zaWQiLCJhIjoiY2p1MmR3OGgwMGJnczQzbW1pOW91ZDZkciJ9.dbJBCZpvBSjWH4f0GAGJfA';
        const map = new mapboxgl.Map({
            container: this.state.myMap.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [8.6428, 49.3064],
            zoom: 13
        });
        map.addControl(new mapboxgl.NavigationControl());
    }

    render() {
        return (
            <ui5-card
            class="grid-7-columns"
            heading="Site Visit - Peach Valley"
            >
                <div className="map-card-content">
                    <div className="vertical-align space-around side-margin">
                        <ui5-input class="input-width"></ui5-input>
                        <ui5-button type="Emphasized">Get Directions</ui5-button>
                    </div>
                    <div ref={this.myMap} className="map"></div>
                </div>
            </ui5-card>
        );
    }
}

export default CardMap;
