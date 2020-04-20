import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  { CandidateData } from './Components/CandidateData'
import { Employer } from './Components/Employer';
import * as serviceWorker from './serviceWorker';
import { SignIn } from './Components/SignIn';
import { Layout } from './Components/Layout/Layout';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path='/'   component={SignIn} /> 
                <Route path='/careers'  component={CandidateData} />
                <Route path='/about'    component={Employer} />           
            </Layout>
      </Switch>
    </BrowserRouter>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
