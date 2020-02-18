import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const { signed } = store.getState().auth;
    const { analysis } = store.getState().user;

    if(!signed && isPrivate) {
        return <Redirect to="/" />
    }

    if(signed && !isPrivate) {
        return <Redirect to="/dashboard" />
    }

    if(rest.path == '/analise' && analysis != null) {
        return <Redirect to="/dashboard" />
    }
    
    if(signed && rest.path != '/analise' && !analysis) {
        return <Redirect to="/analise" />
    }


    const Layout = signed ? DefaultLayout : AuthLayout;

    return(
        <Route 
            {...rest}
            render={props => (
                <Layout>
                    <Component { ...props } />
                </Layout>
            )}
        />
    )
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};