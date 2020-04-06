import React, {useState} from 'react';
import { Input } from '../../../_shared/Input';

export const EmployerDetailsForm = (props) => {
    const [employement, setEmployement] = useState();    
    const { formFields }                = props;
    const onChange = (e) => {        
        const {name, value} = e.target;      
        const updatedItem = {
            ...employement,
            [name]: value
        }
        setEmployement(updatedItem);        
    }

    const renderFields = (formFields) => {  
        return formFields.map(formField => {
            const {label, name, type, isMulti, options, placeholder} = formField;
            const value = employement && employement[name];
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
            {renderFields(formFields)}
        </div>
    )   
}