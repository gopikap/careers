import React, { useState } from 'react';
import { CheckValidity } from '../../../_util/checkValidity';

export const TextField = (props) => {

    const { name, type, value, placeholder, onChange, isMulti, validations } = props;
    let textClassNames  =[];
    
    const [isInputValid, setIsInputValid]   = useState(true);

    const onBlur = () => {
        const inputValidity = CheckValidity(value, validations);
        setIsInputValid(inputValidity);
    }

    if ( !isInputValid ) {
        textClassNames.push('error');
        textClassNames = textClassNames.join(' ');
    }
    return (
        <>
            { isMulti ?            
                <textarea
                    name={name}
                    onChange={onChange}    
                    value={value}
                    placeholder={placeholder}
                />
                :
                <input
                    key={name}
                    type={type}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={textClassNames}
                    onBlur={onBlur}
                />
            }
                { (!isInputValid) ? (
                    <p className='error-message'>Enter a valid {name}</p>
                    ) : null
                }
        </>
    )
}