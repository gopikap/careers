import React from 'react';
import { Route } from 'react-router-dom';

export const DashboardLayout = (props) => {
    return(
        <div id="layout-container">
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