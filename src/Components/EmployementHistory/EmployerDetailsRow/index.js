import React, {useState} from 'react';

export const EmployerDetailsRow = () => {
    const [employement, setEmployement] = useState();
    const employeementFields = [
        {
            name: 'companyName',
            label: 'Company Name',
            type: 'text',
            placeholder: 'Company Co',
            required: true
        },
        
        {
            name: 'designation',
            label: 'Designation',
            type: 'text',
            placeholder: 'Software Developer',
            required: false
        },
        {
            name: 'from',
            label: 'From',
            type: 'date'
        },
        {
            name: 'till',
            label: 'Till',
            type: 'date'
        }
    ];
    return(
        <>
            each employeer details comes here
        </>
    )   
}