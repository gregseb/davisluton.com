import React, { Component } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import './Gallery.css';

const fullPageOptions = {
    scrollSensitivity: 7,
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true
};

const horizontalSliderProps = {
    name: "horizontalSlider1",
    infinite: true
};

class Item extends Component {
    render() {
        //const image_file_name = this.props.item.image;
        const image = require('../data/images/' + this.props.item.image);

        return <div className="Item">
            <h1>{this.props.item.title}</h1>
            <img src={image} />
        </div>
    }
}

export default class Gallery extends Component {
    render() {
        let items = this.props.items.map(function (node, idx) {
            return <Slide>
                <Item key={idx} item={node} />
            </Slide>
        });

        fullPageOptions.slides = items;

        return <Fullpage {...fullPageOptions} />
    }
}
