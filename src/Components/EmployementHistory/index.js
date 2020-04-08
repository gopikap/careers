import React, { useState } from 'react';
//import { generateKey } from '../../_util/generateKey';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';
import { InputForm } from '../_shared/InputForm';

export const EmploymentHistory = () => {
    const initialData  = {
        companyName: '', 
        designation: '',
        responsibility: '',
        from: '',
        till: ''
    };
    const initialState                              = {
        employement:        initialData,
        showModal:          false,
        emptyFiledsError:   false,
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
                placeholder: 'Software Developer'            
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
                type: 'date'
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
        setState({
            employement: updatedEmployement, 
            employeementFields: updatedFields
        });
    }

    const isRequiredFieldsEmpty = () => {
        const requiredFields = state.employeementFields.filter(
                        ({validations}) =>  validations && validations.required === true);
        const isEmptyFields = requiredFields.map(
            requiredField => {
                const {name}    = requiredField;
                return (state.employement[name] !== '' && state.employement[name] !== null);
            }
        )
        return isEmptyFields;
    }

    const onAdd = () => {
        const isEmptyFields  =  isRequiredFieldsEmpty();
        if (isEmptyFields.includes(false)) {
            setState({emptyFiledsError: true});
            return;
        }
        state.employeementFields.map(field => {
            field.touched  = false;
            return field;
        });

        const updatedEmployementList = [
            ...state.employementList,
            state.employement
        ];
        setState({
            employementList: updatedEmployementList,
            emptyFiledsError: false,
            employement: initialData
        });
        toggleModal();
    }

    return(
        <div id='employement-container'>
            <p className='info'>Please add the revelant job experiences. </p>
            <Table
                tableHeaders={state.employeementFields}
                tableRows   ={state.employementList}
            />
            <Button
                onClick    ={onClick}
                title      ='Add Employment'                
            />
             <Modal
                className   ='modal'
                show        ={state.showModal}
                onClose     ={toggleModal}
                title       ='Add Employement'>
                <InputForm
                    formFields={state.employeementFields}
                    onChange={onChange}
                    sectionData={state.employement}
                    onAdd={onAdd}
                    emptyFields={state.emptyFiledsError}
                />
            </Modal>
        </div>        
    )
}