import React, { Component } from 'react';
import { Image, Thumbnail } from 'react-bootstrap';
import './Gallery.css';

class Item extends Component {
    render() {
        const image_file_name = this.props.item.image;

        return <div>
            <Thumbnail href="#" src={require('../data/images/' + image_file_name)} alt={this.props.item.title}>
                <h3>{this.props.item.title}</h3>
                <label>{this.props.item.label}</label>
                <p>{this.props.item.desc}</p>
            </Thumbnail>
        </div>
    }
}

export default class Gallery extends Component {
    render() {
        let items = this.props.items.map(function (node, idx) {
            return <Item key={idx} item={node} />
        });

        return <div className="gallery">
            {items}
        </div>
    }
}
