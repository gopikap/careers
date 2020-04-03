import React, {useState, useRef, useEffect} from 'react';
import { useOnClickOutside } from '../../../Hooks/useOnClickOutside';
import { ArrowDown, ArrowUp } from '../../../Icons';
import { isEmptyObject } from '../../../../../../util/validate_data';

export const UnderlinedDropdown = props => {
    const {
        type, 
        options, 
        name, 
        placeholder, 
        error, 
        autoFocus,
        getValue, 
        defaultOption,
        optionsStyles = {},
        getRefs, 
        onSelect,
        getDropDownStatus,
    } = props;

    const activeOption = (getValue && getValue({type, options})) || defaultOption;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsOpen(autoFocus);
        }
    }, [autoFocus]);

    useEffect(() => {
        getDropDownStatus && getDropDownStatus(isOpen);
    }, [isOpen]);

    const toggleIsOpen = () => setIsOpen(!isOpen);
    const closeDropdown = () => isOpen && setIsOpen(false);

    const underlinedDropdownRef = useRef();
    const optionsRef = useRef();

    if (isOpen && getRefs) {
        if (underlinedDropdownRef.current && optionsRef.current) {
            getRefs && getRefs(underlinedDropdownRef, optionsRef);
        }
    }

    useOnClickOutside(optionsRef, closeDropdown);

    const label = (activeOption && activeOption.label) || placeholder || `Select an ${name}`;
    
    const hasNoActiveOption = isEmptyObject(activeOption);

    const dropdownOptions   = options.filter(option => (option.value !== activeOption.value));

    return (
        <div className={`underlined-dropdown ${isOpen ? 'opened' : 'closed'}`} onClick={toggleIsOpen} ref={underlinedDropdownRef}>
            <div className={`selected-option-container ${error ? 'error' : ''}`}>
                <div className={`selected-option ${hasNoActiveOption ? 'placeholder' : ''}`}>{label}</div>
                <div className='caret'>{isOpen ? <ArrowUp /> : <ArrowDown />}</div>
            </div>
            <div className='underlined-dropdown-options paper' ref={optionsRef} style={optionsStyles}>
                {dropdownOptions.map(({value, label}) => (
                    <div key={value} onClick={() => onSelect({[type]: {value, label}})} >
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}
