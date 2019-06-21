import React, { Component } from 'react';
import './Home.css';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/Input';

import Carousel1_m from './assets/images/Carousel1_m.jpg';
import Carousel2_m from './assets/images/Carousel2_m.jpg';
import Carousel3_m from './assets/images/Carousel3_m.jpg';

class ImagesCard extends Component {
    constructor() {
        super();

        this.state = {
            cardInfo: [
                {
                    header: 'Drone Hive pioneers crops pollination',
                    author: 'New Scientist',
                    image: Carousel1_m,
                },
                {
                    header: 'Repair Flow is paving the path to automation',
                    author: 'Beehive Weekly',
                    image: Carousel2_m,
                },
                {
                    header: 'Drone flights in extreme conditions',
                    author: 'Guardian',
                    image: Carousel3_m,
                }
            ],
            selectedIndex: 1
        }
    }

    componentDidMount() {
        this.setState(oldState => {
            return {
                ...oldState,
                updateCallback: setInterval(() => {
                    this.setState(oldState => {
                        return {
                            ...oldState,
                            selectedIndex: oldState.selectedIndex === 2 ? 0 : oldState.selectedIndex + 1
                        }
                    });
                }, 3000)
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.updateCallback);
    }

    render() {
        return (
            <ui5-card
            heading={this.state.cardInfo[this.state.selectedIndex].header}
            subtitle={`by ${this.state.cardInfo[this.state.selectedIndex].author}`}
            >
                <img key={this.state.cardInfo[this.state.selectedIndex].author} src={this.state.cardInfo[this.state.selectedIndex].image} className="carousel-image" alt="News"></img>                    
            </ui5-card>
        );
    }
}

export default ImagesCard;
