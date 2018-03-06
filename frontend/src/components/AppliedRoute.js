import React from 'react';
import { Route } from 'react-router-dom';
import { refreshAuth } from "../libs/djangoAuth";


export default ({ component: C, props: cProps, ...rest }) => {
    refreshAuth();

    return(
        <Route {...rest} render={props => <C {...props} {...cProps} />} />
    );
}
