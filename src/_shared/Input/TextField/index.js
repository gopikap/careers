import React from 'react';

export const TextField = (props) => {

    const { name, type, value, placeholder, onChange, isMulti, isValid, touched } = props;
    let textClassNames  =[];
    if ( touched && !isValid ) {
        textClassNames.push('error');
        textClassNames = textClassNames.join(' ');
    }
    return(
            isMulti ?            
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
                />
    )
}