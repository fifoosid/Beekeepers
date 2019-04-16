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
        this.searchButton = React.createRef();
        this.inputField = React.createRef();

        this.state = {
            mapsToken: 'pk.eyJ1IjoiZmlmb29zaWQiLCJhIjoiY2p1MmR3OGgwMGJnczQzbW1pOW91ZDZkciJ9.dbJBCZpvBSjWH4f0GAGJfA',
            myMap: this.myMap,
            searchButton: this.searchButton,
            inputField: this.inputField,
            location: [8.6428, 49.3064] //Waldorf
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = this.state.mapsToken;
        const map = new mapboxgl.Map({
            container: this.state.myMap.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.state.location,
            zoom: 11
        });

        const marker = new mapboxgl.Marker()
            .setLngLat(this.state.location)
            .addTo(map);

        this.setState(oldState => {
            return {
                ...oldState,
                map,
                marker
            }
        });

        this.state.searchButton.current.addEventListener("press", this.handleMapSelection.bind(this));
        this.state.inputField.current.addEventListener("submit", this.handleMapSelection.bind(this))
    }

    handleMapSelection() {
        if (!this.state.inputField.current.value) {
            return;
        }

        fetch(`https://geocoder.api.here.com/6.2/geocode.json?app_id=lsZAntSMcKPBYrVMG1vl&app_code=1Fp4dI3bwoIJlJbdRmL43w&searchtext=${this.state.inputField.current.value}`)
            .then(response => response.json())
            .then(result => {
                const position = result.Response.View[0].Result[0].Location.DisplayPosition;
                this.setState(oldState => {
                    return {
                        ...oldState,
                        location: [position.Longitude, position.Latitude]
                    }
                })
                this.state.map.setCenter(this.state.location);
                this.state.marker.setLngLat(this.state.location);
        });
    }

    render() {
        return (
            <ui5-card
            class="flex-basis-7"
            heading="Site Visit - Peach Valley"
            >
                <div className="map-card-content">
                    <div className="vertical-align space-around side-margin">
                        <ui5-input class="input-width" ref={this.inputField}></ui5-input>
                        <ui5-button type="Emphasized" ref={this.searchButton}>Show on the map</ui5-button>
                    </div>
                    <div ref={this.myMap} className="map"></div>
                </div>
            </ui5-card>
        );
    }
}

export default CardMap;
