import React from 'react';
import { Input } from '../../../_shared/Input';
import { Button } from '../../../_shared/Button';
import { CheckValidity } from '../../../_util/checkValidity';

export const InputForm = (props) => {

    const { formFields, sectionData, onChange, onAdd, hasEmptyFields, hasDatesError }    = props;    
    let isValid = true;
    let isTouched=false;
    const renderFields = (formFields) => {  
        return formFields.map(formField => {            
            const {label, name, type, isMulti, options, placeholder, validations, touched} = formField;
            delete sectionData.hasDatesError;
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
                    required    ={validations && validations.required}
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
                 {hasEmptyFields ? <span className='error-message'>Please enter required fields</span> : null}
                 {hasDatesError ? <span className='error-message'>Please enter valid from and till dates</span> : null }
                </>
            : null }
        </div>
    )   
}