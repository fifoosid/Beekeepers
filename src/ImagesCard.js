import React, { Component } from 'react';
import './Home.css';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/Input';

import Carousel1 from './assets/images/Carousel1.png';
import Carousel2 from './assets/images/Carousel2.png';
import Carousel3 from './assets/images/Carousel3.png';

class ImagesCard extends Component {
    constructor() {
        super();

        this.state = {
            cardInfo: [
                {
                    author: 'New Scientist',
                    header: 'Drone Hive pioneers crops pollination',
                    image: Carousel1,
                },
                {
                    author: 'Old Scientist',
                    header: 'Drone Hive pioneers crops pollination',
                    image: Carousel2,
                },
                {
                    author: 'Very Old Scientist',
                    header: 'Drone Hive pioneers crops pollination',
                    image: Carousel3,
                }
            ],
            selectedIndex: 1
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(oldState => {
                return {
                    ...oldState,
                    selectedIndex: oldState.selectedIndex === 2 ? 0 : oldState.selectedIndex + 1
                }
            });
        }, 3000);
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