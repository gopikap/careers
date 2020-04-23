import React, { useState } from 'react';
import { ProfileImage } from './ProfileImage';
import { InputForm } from '../../_shared/InputForm';

export const PersonalInformation = () => {
    const [personalInfo, setPersonalInfo]   = useState();    
    const personalFields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'John',
            validations: {
                required: true,
                isString: true
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
            name: 'phone',
            label: 'Phone',
            type: 'text',
            placeholder: '+1',
            validations: {
                minLength: 10,
                maxLength: 20,
                isNumeric: true
            },
            touched: false
        },
        {
            name: 'gender',
            label: 'Gender',
            type: 'select',
            options: [
                { value: 'male', text: 'Male' },
                { value: 'female', text: 'Female' },
                { value: 'other', text: 'Other' }
            ],
            required: true
        },
        {
            name: 'dob',
            label: 'Date of birth',
            type: 'date'
        },
        {
            name: 'address',
            label: 'Address',
            type: 'text',
            isMulti: true,
            placeholder: 'House No, city, state'
        },
        {
            name: 'zip',
            label: 'Zip code',
            type: 'text',
            placeholder: '691021',
            validations:{
                minLength: 5,
                maxLength: 6,
                isNumeric: true
            },
            touched: false
        }
    ];

    const onChange = (e) => {        
        const {name, value} = e.target;      
        const updatedItem = {
            ...personalInfo,
            [name]: value
        }

        setPersonalInfo(updatedItem);        
    }

    return(
        <div id='personalInfo-container'>
            <div id='personalInfo-personal'>                
                <InputForm
                    formFields={personalFields}
                    onChange={onChange}
                    sectionData={personalInfo}
                />
            </div>
            <div id='personalInfo-image'>
                <ProfileImage />
            </div>
        </div>
    
    )
}