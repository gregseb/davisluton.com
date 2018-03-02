import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AppliedRoute from './components/AppliedRoute';
import LoadingSpinner from './libs/LoadingSpinner';

const AsyncHome = Loadable({
    loader: () => import("./containers/Home"),
    loading: LoadingSpinner,
    delay: 200
});
const AsyncNotFound = Loadable({
    loader: () => import("./containers/NotFound"),
    loading: LoadingSpinner
});


export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />

        {/* Catch all unmatched routes. */}
        <Route component={AsyncNotFound} />
    </Switch>;
