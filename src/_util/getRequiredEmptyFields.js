export const getRequiredEmptyFields = (formFields, values) => {
    const requiredFields = formFields.filter(
                                ({validations}) =>  (validations && validations.required === true)
                             );
    const isEmptyFields = requiredFields.map(        
        requiredField => {
            const {name}    = requiredField;
            return (values[name] !== '' && values[name] !== null);
        }
    )

    const hasEmptyFields = isEmptyFields.includes(false);
    return hasEmptyFields;
}