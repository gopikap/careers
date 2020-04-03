import React from 'react';
import './index.scss';
import { TextField } from './TextField';

export const Input = (props) => {
    const { label, name, type, value, options, placeholder, onChange, isMulti } = props;
    
    const textInput = <TextField 
                            key={name}
                            type={type}
                            value={value}
                            name={name}
                            placeholder={placeholder}
                            isMulti={isMulti}
                            //error={showErrorNeeded}
                            onChange={onChange}
                        />

    const renderOptions = () => {
        if (options){
            return options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))
        }
    }
    const select = (
            <select
                name={name}
                value={value}
                onChange={onChange}
            >
                {renderOptions()}
            </select>
    );

    const renderInputs = () => {
        switch (type) {
            case 'text':
            case 'date':
                return textInput;
            case 'select':
                return select;
            default:
                return textInput;
        }
    }

    return(
        <div className='textFields' key={name}>
            <label>{label}</label>
             {renderInputs()}           
        </div>
    )
}