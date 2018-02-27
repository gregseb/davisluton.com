import React, { Component } from 'react';
import { default as ReactSpinner } from 'react-tiny-spin';


export default class Spinner extends Component {
    render() {
        let spinConfig = {};

        return <ReactSpinner config={spinConfig} />
    }
}
