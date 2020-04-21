import React, { useState } from "react";
import { compose } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import { InputForm } from "../_shared/InputForm";
import { Button } from "../../_shared/Button";
import { Loader } from "../../_shared/Loader";

const SignIn = (props) => {
    const initialState = {
        email:      '',
        password:   ''
    }
    const [signInFields, setSignInFileds] = useState([
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'John@email.com',
            validations: {
                required: true,
                isEmail: true
            },
            touched: false
            
        },
        
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'john@yembo.ai',
            validations: {
                required: true                
            },
            touched: false
        }
    ]);

    const [authUser, setAuthUser]   = useState(initialState);
    const [error, setError]         = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isInvalid = (authUser.password === '' || authUser.email === '');

    const signInWithEmailAndPasswordHandler = () => {
        const { email, password } = authUser;
        setIsLoading(true);
        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(
                () => { 
                    //If successfully created, then set to intial state
                    setAuthUser({...initialState });
                    setIsLoading(false);
                    props.history.push('/careers');
                }) 
            .catch(
                error => { 
                    setError(error); 
                    setIsLoading(false);
                }
            );        
    };

    const onChange = (e) => {
        const { name, value } = e.currentTarget;
        const updatedAuthUser = {
            ...authUser,
            [name]: value
        }
        const updatedFields = signInFields.map(field => {
            if ( field.name === name ) { 
                field.touched  = true
            }
            return field;
        });
        setSignInFileds(updatedFields);
        setAuthUser(updatedAuthUser);
    };

    return (
        <div id='signIn-container'>
            <h2>Sign In</h2>
            <InputForm
                formFields={signInFields}
                onChange={onChange}
                sectionData={authUser}
            />
            <Button
                onClick={signInWithEmailAndPasswordHandler}
                title='Sign In'
                disabled={isInvalid}
            />
            {isLoading ? <Loader/> : ''}
            <p id='info'>
                Don't have an account? &nbsp;
                <Link to="signUp">Sign up here </Link> 
                <br /> 
                <Link to="passwordReset">Forgot Password?</Link>
            </p>
            {error && <p className="error-message">{error.message}</p> }
        </div>
    );
};

export default compose(withRouter, withFirebase)(SignIn);