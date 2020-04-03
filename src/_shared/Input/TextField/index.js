import React from 'react';

export const TextField = (props) => {
    const { name, type, value, placeholder, onChange, isMulti } = props;
    
    return(
        
            isMulti ?            
                <textarea
                    name={name}
                    onChange={onChange}    
                    value={value}
                />
                :
                <input
                    key={name}
                    type={type}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    //error={showErrorNeeded}
                    onChange={onChange}
                />
    )

}