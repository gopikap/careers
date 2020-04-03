import React, { useState } from 'react';
import { ProfileImage } from './ProfileImage';
import { Input } from '../../_shared/Input';

export const PersonalInformation = () => {
    const [info, setInfo]   = useState({
        name: '', 
        email: '',
        gender: '',
        dob: '',
        phone: '',
        address: '',
        zip: ''
    });
    
    const personalFields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'John',
            required: true
        },
        
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'john@yembo.ai',
            required: true
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'text',
            placeholder: '+1'
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
            type: 'date',
            placeholder: 'John',
            required: true
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
            placeholder: '691021'
        }
    ];

    const onChange = (e) => {        
        const {name, value} = e.target;      
        const updatedItem = {
            ...info,
            [name]: value
        }
        setInfo(updatedItem);        
    }

    const renderFields = (inputFields) => {        
        return inputFields.map(inputField => {
            const {label, name, type, isMulti, options, placeholder} = inputField;
            const value = info[name];
            return (
                <Input 
                    key         ={name}
                    label       ={label} 
                    name        ={name} 
                    type        ={type} 
                    options     ={options}
                    value       ={value || ''}
                    isMulti     ={isMulti}
                    placeholder ={placeholder}
                    onChange    ={onChange}
                />
            );
        });
    }


    return(
        <div id='personalInfo-container'>
            <div id='personalInfo-personal'>
                {renderFields(personalFields)}
            </div>
            <div id='personalInfo-image'>
                <ProfileImage />
            </div>
        </div>
    
    )
}