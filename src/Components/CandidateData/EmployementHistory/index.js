import React, { useState } from 'react';
import { Button } from '../../../_shared/Button';
import { Table } from '../../../_shared/Table';
import { getRequiredEmptyFields } from '../../../_util/getRequiredEmptyFields';
import { AddItemModal } from '../../_shared/AddItemModal';

export const EmploymentHistory = () => {
    
    const initialState  = {
        employement:        {},
        showModal:          false,
        emptyFieldsError:   false,                        
        hasDatesError:      false,
        employementList:    []        
    }

    const employeementFields = [
        {
            name: 'companyName',
            label: 'Company Name',
            type: 'text',
            placeholder: 'Company Co',
            validations: {
                required: true
            }
        },        
        {
            name: 'designation',
            label: 'Designation',
            type: 'text',
            placeholder: 'Software Developer',
            validations: {
                required: true
            }
        },
        {
            name: 'responsibility',
            label: 'Job responsibility',
            type: 'text',
            isMulti: true,
            placeholder: 'Software Developer'
        },
        {
            name: 'from',
            label: 'From',
            type: 'date',
            validations: {
                required: true
            }
        },
        {
            name: 'till',
            label: 'Till',
            type: 'date',
            touched: false
        }
    ];

    const [state, setState] = useState(initialState);
    const updateState = data => setState(prevState => ({ ...prevState, ...data }));
    
    const onClick = () => { 
        updateState({showModal: true});
    }

    const toggleModal = () => {         
        updateState({showModal: !state.showModal});
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        const updatedEmployement = {
            ...state.employement,
            [name]: value
        }   
        updateState({
            employement: updatedEmployement
        });
    }

    const dateValidation = () => {
        const { from, till }    = state.employement;
        const fromDate          = new Date(from);
        const hasTillDate       = (till !== null || till !== '');        
        if (hasTillDate) {
            const tillDate = new Date(till);
            //From date show be lessthan till date.
            if (fromDate > tillDate)
                return false;
        }
        return true;
    }

    const onAdd = () => {
        const isValidDate = dateValidation();
        if (!isValidDate) {
            updateState({hasDatesError: true});
            return;
        }

        const hasEmptyFields  =  getRequiredEmptyFields(employeementFields, state.employement);
        if (hasEmptyFields) {
            updateState({emptyFieldsError: true});
            return;
        }

        const updatedEmployementList = [
            ...state.employementList,
            state.employement
        ];
        
        updateState({
            employementList:    updatedEmployementList,
            emptyFieldsError:   false,
            hasDatesError:      false,
            employement:        {}
        });
        toggleModal();
    }

    const onDelete = (i) => {
        const updatedEmployementList = [...state.employementList];
        updatedEmployementList.splice(i,1);
        updateState({employementList: updatedEmployementList});
    }

    return(
        <>
            <p className='info'>Please add the revelant job experiences. </p>
            { state.employementList.length > 0 ? 
                <Table
                    tableHeaders={employeementFields}
                    onDelete    ={onDelete}
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
                formFields      ={employeementFields}
                onChange        ={onChange}
                data            ={state.employement}
                onAdd           ={onAdd}
                hasEmptyFields  ={state.emptyFieldsError}
                hasDatesError   ={state.hasDatesError}
            />
        </>        
    )
}