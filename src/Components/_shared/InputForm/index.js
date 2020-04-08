import React from 'react';
import { Input } from '../../../_shared/Input';
import { Button } from '../../../_shared/Button';
import { CheckValidity } from '../../../_util/checkValidity';

export const InputForm = (props) => {

    const { formFields, sectionData, onChange, onAdd, emptyFields }    = props;    
    let isValid = true;
    let isTouched=false;
    const renderFields = (formFields) => {  
        return formFields.map(formField => {
            const {label, name, type, isMulti, options, placeholder, validations, touched} = formField;
            const value = sectionData && sectionData[name]; 
            isValid     = CheckValidity(value, validations);
            isTouched   = touched;
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
                    touched     ={isTouched}
                    isValid     ={isValid}
                />
            );            
        });
    }

    return(
        <div id='input-row'>
            {renderFields(formFields)}
            { onAdd ? 
                <>
                <Button
                    onClick={onAdd}
                    title='Add'
                    buttonClass='addButton'
                />
                 {emptyFields ? <span className='error-message'>Please enter required fields</span> : null}
                </>
            : null }
        </div>
    )   
}