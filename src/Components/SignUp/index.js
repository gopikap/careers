import React, { useState } from "react";
import { Link} from 'react-router-dom';
import { auth } from "firebase";
import { InputForm } from "../_shared/InputForm";
import { Button } from "../../_shared/Button";

export const SignUp = () => {
    const initialState = {
        email:          '',
        password:       '',
        displayName:    ''
    }
    const [signUpFields, setSignUpFileds] = useState([       
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
        },
        {
            name: 'password',
            label: 'Name',
            type: 'password',
            validations: {
                required: true
            },
            touched: false
        },
    ]);

    const [newUser, setNewUser] = useState(initialState);
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        setDisplayName("");
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
    return (
        <div id='signIn-container'>
            <h2>Sign In</h2>
            <InputForm
                formFields={signUpFields}
                onChange={onChange}
                sectionData={newUser}
            />
            <Button
                onClick={createUserWithEmailAndPasswordHandler}
                title='Sign In'
            />
        </div>
    );
};