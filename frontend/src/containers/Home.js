import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import './Home.css';

import data from '../data/portfolio.json';


export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="content"><Gallery items={data} /></div>
            </div>
        );
    }
}
