import React, {useState} from 'react';
import { Input } from '../../../_shared/Input';

export const EmployerDetailsRow = () => {
    const [employement, setEmployement] = useState();
    
    const employeementFields = [
        {
            name: 'companyName',
            label: 'Company Name',
            type: 'text',
            placeholder: 'Company Co',
            required: true
        },
        
        {
            name: 'designation',
            label: 'Designation',
            type: 'text',
            placeholder: 'Software Developer',
            required: false
        },
        {
            name: 'from',
            label: 'From',
            type: 'date'
        },
        {
            name: 'till',
            label: 'Till',
            type: 'date'
        }
    ];

    const onChange = (e) => {        
        const {name, value} = e.target;      
        const updatedItem = {
            ...employement,
            [name]: value
        }
        setEmployement(updatedItem);        
    }

    const renderFields = (employeementFields) => {        
        return employeementFields.map(employeementField => {
            const {label, name, type, isMulti, options, placeholder} = employeementField;
            const value = employement[name];
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
        <div id='employement-row'>
            {renderFields(employeementFields)}
        </div>
    )   
}