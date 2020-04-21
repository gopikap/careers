import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputForm } from "../_shared/InputForm";
import { Button } from "../../_shared/Button";

export const PasswordReset = () => {

    const [email, setEmail] = useState("");
    //   const [resetField, setResetFileds] = useState([
    //     {
    //         name: 'email',
    //         label: 'Email',
    //         type: 'text',
    //         placeholder: 'john@yembo.ai',
    //         validations: {
    //             required: true,
    //             isEmail: true
    //         },
    //         touched: false
    //     }
    // ]);

    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

    const onChange = event => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        }
    };

    const sendResetEmail = event => {
        event.preventDefault();
    };

    return (
        <div id='password-reset-container'>
            <h2>Reset your Password</h2>
            {emailHasBeenSent && (
                <div>
                    An email has been sent to you!
                </div>
            )}
            {error !== null && (
                <div>
                    {error}
                </div>
            )}
            <div id='input-row' className='textFields'>
                <label>Email <span className='error-message'>*</span></label>
                <input
                    type='text'
                    onChange={onChange}
                    placeholder='example@eg.com'
                    name='email'
                    value={email}
                />
            </div>
            <Button
                onClick={sendResetEmail}
                title='Send me a reset link'
            />
            <p id='info'>
                <Link to="/"> &larr; back to sign in page </Link>
            </p>
        </div>

    );
};