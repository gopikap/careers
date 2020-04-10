import React, { useState } from 'react';
//import { generateKey } from '../../_util/generateKey';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';
import { getRequiredEmptyFields } from '../../_util/getRequiredEmptyFields';
import { AddItemModal } from '../_shared/AddItemModal';

export const EmploymentHistory = () => {
    const initialData   = {
        companyName: '', 
        designation: '',
        responsibility: '',
        from: '',
        till: ''
    };
    const initialState  = {
        employement:        initialData,
        showModal:          false,
        emptyFieldsError:   false,
        employementList:    [],
        employeementFields: [
            {
                name: 'companyName',
                label: 'Company Name',
                type: 'text',
                placeholder: 'Company Co',
                validations: {
                    required: true
                },
                touched: false
            },        
            {
                name: 'designation',
                label: 'Designation',
                type: 'text',
                placeholder: 'Software Developer',
                validations: {
                    required: true
                },
                touched: false
            },
            {
                name: 'responsibility',
                label: 'Job responsibility',
                type: 'text',
                isMulti: true,
                placeholder: 'Software Developer',
                touched: false
            },
            {
                name: 'from',
                label: 'From',
                type: 'date',
                validations: {
                    required: true
                },
                touched: false
            },
            {
                name: 'till',
                label: 'Till',
                type: 'date',
                touched: false
            }
        ]
    }
    const [state, setState] = useState(initialState);
    const updateState = data => setState(prevState => ({ ...prevState, ...data }));
    
    const onClick = () => {
        updateState({showModal: true});     
    }

    const toggleModal = () => {
        updateState({showModal: !state.showModal});
    }

    const onChange = (e) => {
        console.log('here')
        const { name, value } = e.target;
        const updatedEmployement = {
            ...state.employement,
            [name]: value
        }
        const updatedFields = state.employeementFields.map(field => {
            if ( field.name === name ) { 
                field.touched  = true
            }
            return field;
        });
        updateState({
            employement: updatedEmployement, 
            employeementFields: updatedFields
        });
    }

    const onAdd = () => {
        const hasEmptyFields  =  getRequiredEmptyFields(state.employeementFields, state.employement);
        if (hasEmptyFields) {
            updateState({emptyFieldsError: true});
            return;
        }

        const updatedFields = state.employeementFields.map(field => {
            field.touched  = false;
            return field;
        });

        const updatedEmployementList = [
            ...state.employementList,
            state.employement
        ];
        
        updateState({
            employementList:    updatedEmployementList,
            emptyFieldsError:   false,
            employement:        initialData,
            employeementFields: updatedFields
        });
        toggleModal();
    }

    return(
        <div id='employement-container'>
            <p className='info'>Please add the revelant job experiences. </p>
            { state.employementList !== null ?
                <Table
                    tableHeaders={state.employeementFields}
                    tableRows   ={state.employementList}
                /> : null
            }
            <Button
                onClick    ={onClick}
                title      ='Add Employment'                
            />
            <AddItemModal 
                show            ={state.showModal}
                onClose         ={toggleModal}
                title           ='Add Employement'
                formFields      ={state.employeementFields}
                onChange        ={onChange}
                data            ={state.employement}
                onAdd           ={onAdd}
                hasEmptyFields  ={state.emptyFieldsError}
            />
        </div>        
    )
}