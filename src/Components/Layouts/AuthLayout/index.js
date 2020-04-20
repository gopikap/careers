import React from 'react';
import { Route } from 'react-router-dom';  

const AuthLayout = (props) => {
    return(
        <div id="authLayout-container">
            {props.children}
        </div>
    )
}

export const AuthLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <AuthLayout>
                <Component {...matchProps} />
            </AuthLayout>
        )} />
    )
};  