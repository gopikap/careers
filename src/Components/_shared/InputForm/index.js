import React from 'react';
import { Input } from '../../../_shared/Input';
import { Button } from '../../../_shared/Button';

export const InputForm = (props) => {
    const { formFields, sectionData, onChange, onAdd }    = props;    
    
    const renderFields = (formFields) => {  
        return formFields.map(formField => {
            const {label, name, type, isMulti, options, placeholder} = formField;
            const value = sectionData && sectionData[name];
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
        <div id='input-row'>
            {renderFields(formFields)}
            <Button
                onClick={onAdd}
                title='Add'
                buttonClass='addButton'
            /> 
        </div>
    )   
}