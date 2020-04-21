import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
//Layouts //
import { AuthLayoutRoute } from './Components/Layouts/AuthLayout';
import { DashboardLayoutRoute } from './Components/Layouts/DashboardLayout';
/*Components */
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { PasswordReset } from './Components/PasswordReset';
import { CandidateData } from './Components/CandidateData'
import { Employer } from './Components/Employer';
import FirebaseContext from './Firebase/context';
import Firebase from './Firebase/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()} >
        <BrowserRouter>
            <Switch>         
                <AuthLayoutRoute exact path='/'         component={SignIn} />   
                <AuthLayoutRoute path='/signUp'         component={SignUp} />
                <AuthLayoutRoute path='/passwordReset'  component={PasswordReset} />
                <DashboardLayoutRoute path='/careers'   component={CandidateData} />
                <DashboardLayoutRoute path='/about'     component={Employer} />
            </Switch>
        </BrowserRouter>
    </FirebaseContext.Provider>    
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
