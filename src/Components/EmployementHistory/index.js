import React, { useState, useReducer } from 'react';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';
import { InputForm } from '../_shared/InputForm';
import { getRequiredEmptyFields } from '../../_util/getRequiredEmptyFields';
import { candidateDataReducer } from '../../_hooks/candidateDataReducer';

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
    // const [state, setState] = useState(initialState);
    // const updateState = data => setState(prevState => ({ ...prevState, ...data }));
    
    const [state, dispatch] = useReducer(candidateDataReducer, initialState);

    const onClick = () => { 
        dispatch({type:'SHOWMODAL'})
    }

    const toggleModal = () => {
         dispatch({type:'TOGGLEMODAL'})
        //updateState({showModal: !state.showModal});
    }

    const onChange = (e) => {
        // const { name, value } = e.target;
        // const updatedEmployement = {
        //     ...state.employement,
        //     [name]: value
        // }
        // const updatedFields = state.employeementFields.map(field => {
        //     if ( field.name === name ) {  
        //         field.touched  = true
        //     }
        //     return field;
        // });
        // updateState({
        //     employement: updatedEmployement, 
        //     employeementFields: updatedFields
        // });
        dispatch({type: 'ONCHANGE', payload: {name: e.target.name, value: e.target.value}});
    }

     const onAdd = () => {
    //     const hasEmptyFields  =  getRequiredEmptyFields(state.employeementFields, state.employement);
    //     if (hasEmptyFields) {
    //         updateState({emptyFieldsError: true});
    //         return;
    //     }

    //     const updatedFields = state.employeementFields.map(field => {
    //         field.touched  = false;
    //         return field;
    //     });

    //     const updatedEmployementList = [
    //         ...state.employementList,
    //         state.employement
    //     ];
        
    //     updateState({
    //         employementList:    updatedEmployementList,
    //         emptyFieldsError:   false,
    //         employement:        initialData,
    //         employeementFields: updatedFields
    //     });
    //     toggleModal();
    }

    const onDelete = (i) => {
    //     const updatedEmployementList = [...state.employementList];
    //     updatedEmployementList.splice(i,1);
    //     updateState({employementList: updatedEmployementList});
     }

    return(
        <>
            <p className='info'>Please add the revelant job experiences. </p>
            <Table
                tableHeaders={state.employeementFields}
                onDelete    ={onDelete}
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
                    hasEmptyFields={state.emptyFieldsError}
                />
            </Modal>
        </>         
    )
}