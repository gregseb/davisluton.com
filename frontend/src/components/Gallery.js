import React, { Component } from 'react';
import './Gallery.css';

class Item extends Component {
    render() {
        const image_file_name = this.props.item.image;

        return <div className="Item">
            <div>{this.props.item.title}</div>
        </div>
    }
}

export default class Gallery extends Component {
    render() {
        let items = this.props.items.map(function (node, idx) {
            return <Item key={idx} item={node} />
        });

        return <div className="Gallery">
            {items}
        </div>
    }
}
