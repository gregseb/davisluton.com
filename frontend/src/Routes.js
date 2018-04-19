import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AppliedRoute from './components/AppliedRoute';
import Spinner from './components/Spinner';

function Loading(props) {
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

const AsyncHome = Loadable({
    loader: () => import("./containers/Home"),
    loading: Loading,
    delay: 200
});

const AsyncWork = Loadable({
    loader: () => import("./containers/Work"),
    loading: Loading
});
const AsyncAbout = Loadable({
    loader: () => import("./containers/About"),
    loading: Loading
});
const AsyncContact = Loadable({
    loader: () => import("./containers/Contact"),
    loading: Loading
});

const AsyncNotFound = Loadable({
    loader: () => import("./containers/NotFound"),
    loading: Loading
});


export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />
        <AppliedRoute path="/work" exact component={AsyncWork} props={childProps} />
        <AppliedRoute path="/about" exact component={AsyncAbout} props={childProps} />
        <AppliedRoute path="/contact" exact component={AsyncContact} props={childProps} />

        {/* Catch all unmatched routes. */}
        <Route component={AsyncNotFound} />
    </Switch>;
