import React, { useState } from "react";
import { Link} from 'react-router-dom';
import { auth } from "firebase";
import { InputForm } from "../_shared/InputForm";
import { Button } from "../../_shared/Button";

export const SignIn = () => {
    const initialState = {
        email:      '',
        password:   ''
    }
    const [signInFields, setSignInFileds] = useState([
        {
            name: 'name',
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
        }
    ]);

    const [authUser, setAuthUser] = useState(initialState);
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler =
        (event, authUser) => {
            event.preventDefault();
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
            />
            <p id='info'>
                Don't have an account? &nbsp;
                <Link to="signUp">Sign up here </Link> 
                <br /> 
                <Link to="passwordReset">Forgot Password?</Link>
            </p>
        </div>
    );
};