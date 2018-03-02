import React from 'react';
import Spinner from '../components/Spinner';

export default function(props) {
    if (props.error) {
        return <div>Error!</div>;
    } else if (props.timedOut) {
        return <div>Taking a long time...</div>;
    } else if (props.pastDelay) {
        return <Spinner />;
    } else {
        return null;
    }
}
