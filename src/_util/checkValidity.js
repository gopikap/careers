export const CheckValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value !== '' && isValid;
    }

    if (rules.isString) {
        const pattern =  /^[A-Za-z ]+$/;        
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }

    if( rules.isFloat ){
        const pattern = /^\d+(\.\d{1,2})?$/;
        //for strict float /^\d+\.\d{0,2}$/;
        isValid = pattern.test( value ) && isValid
    }

    // if (value) {
        
    // }

    return isValid;
}
