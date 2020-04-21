import React from 'react';
import { Route } from 'react-router-dom';
import { Navigation } from '../../Navigation';

export const DashboardLayout = (props) => {
    return(
        <div id="layout-container">
            <Navigation/>
            {props.children}
        </div>
    )
}

export const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <DashboardLayout>
                <Component {...matchProps} />
            </DashboardLayout>
        )} />
    )
};  