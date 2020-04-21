import React, { useState } from "react";
import { compose } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import { InputForm } from "../_shared/InputForm";
import { Button } from "../../_shared/Button";
import './index.scss';
import { Loader } from "../../_shared/Loader";

const SignUp = (props) => {
    const initialState = {
        displayName:    '',
        email:          '',
        password:       '',
        confirmPassword:''        
    }
    const { authUser }    = props;
    const [signUpFields, setSignUpFileds] = useState([       
        {
            name: 'displayName',
            label: 'Name',
            type: 'text',
            placeholder: 'John',
            validations: {
                required: true
            },
            touched: false
            
        },        
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'john@yembo.ai',
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
            validations: {
                required: true
            },  
            touched: false
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            validations: {
                required: true
            },  
            touched: false
        },
    ]);

    const [newUser, setNewUser]     = useState(initialState);
    const [error, setError]         = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createUserWithEmailAndPasswordHandler = () => {
        const {email, password} = newUser;
        setIsLoading(true);
        props.firebase
            .doCreateUserWithEmailAndPassword(email, password) 
            .then(
                authUser => { 
                    //If successfully created, then set to intial state
                    setNewUser({...initialState });
                    setIsLoading(false);
                    props.history.push('/');
                }) 
            .catch(
                error => { setError({ error }); }
            );        
    };

    const onChange = (e) => {
        const { name, value } = e.currentTarget;
        const updatedNewUser = {
            ...newUser,
            [name]: value
        }
        const updatedFields = signUpFields.map(field => {
            if ( field.name === name ) { 
                field.touched  = true
            }
            return field;
        });
        setSignUpFileds(updatedFields);
        setNewUser(updatedNewUser);
    };

    const isInvalid = 
        newUser.password !== newUser.confirmPassword || newUser.password === '' 
        || newUser.email === '' || newUser.displayName === '';

    return (
        <div id='signUp-container'>
            <h2>Sign Up</h2>
            <InputForm
                formFields={signUpFields}
                onChange={onChange}
                sectionData={newUser}
            />
            <Button
                onClick={createUserWithEmailAndPasswordHandler}
                title='Sign Up'
                disabled={isInvalid}
            />
            {isLoading ? <Loader /> : ''}
            <p id='info'>
                Already have an account? &nbsp;
                <Link to="/">Sign in here </Link> 
            </p>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default compose(withRouter, withFirebase)(SignUp);