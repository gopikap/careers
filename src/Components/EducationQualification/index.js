import React, { useState } from 'react';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';
import { InputForm } from '../_shared/InputForm';
import { getRequiredEmptyFields } from '../../_util/getRequiredEmptyFields';

export const EducationQualification = () => {
    const initialData = {
        qualification: '',
        instituteName: '',
        university: '',
        subject: '',
        year: '',
        result: ''
    }

    const initialState  = {
        education:        initialData,
        showModal:          false,
        emptyFieldsError:   false,
        educationList:    [],
        educationFields: [
            {
                name: 'qualification',
                label: 'Qualification',
                type: 'select',
                options: [
                    { text: 'Select', value: '' },
                    { text: 'Tenth', value: 'Tenth' },
                    { text: 'Twelveth', value: 'Twelveth' },
                    { text: 'Certificates/Training', value: 'Certificates/Training' },
                    { text: 'Graduate level', value: 'Graduate level' },
                    { text: 'Post Graduate level', value: 'Post Graduate level' },
                    { text: 'Doctorate level', value: 'Doctorate level' },
                ],
                validations: {
                    required: true
                }
            },
            {
                name: 'instituteName',
                label: 'Institute Name',
                type: 'text',
                placeholder: 'Institute Name',
                validations: {
                    required: true
                }
            },
            {
                name: 'university',
                label: 'University/Board',
                type: 'text',
                placeholder: 'University/Board Name',
                validations: {
                    required: true
                }
            },
            {
                name: 'subject',
                label: 'Subject',
                type: 'text',
                placeholder: 'eg: Information Technology',
                validations: {
                    required: true
                }
            },
            {
                name: 'year',
                label: 'Year',
                type: 'number',
                placeholder: 'Passed out year:- 2000',
                validations: {
                    required: true
                }
            },
            {
                name: 'result',
                label: 'Result',
                type: 'select',
                options: [
                    { text: 'Select', value: '' },
                    { text: 'Third Class', value: 'Third Class'  },
                    { text: 'Second Class', value: 'Second Class'  },
                    { text: 'First Class', value: 'First Class' },
                    { text: 'First Class with Distinction', value: 'First Class with Distinction' },
                    { text: 'Not Applicable', value: 'Not Applicable' }
                ],
                required: false
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
        const updatedEducation = {
            ...state.education,
            [name]: value
        }
        const updatedFields = state.educationFields.map(field => {
            if ( field.name === name ) { 
                field.touched  = true
            }
            return field;
        });
        updateState({
            education: updatedEducation, 
            educationFields: updatedFields
        });
    }

    const onAdd = () => {
        const hasEmptyFields  =  getRequiredEmptyFields(state.educationFields, state.education);
        if (hasEmptyFields) {
            updateState({emptyFieldsError: true});
            return;
        }
        const updatedFields = state.educationFields.map(field => {
            field.touched  = false;
            return field;
        });

        const updatedEducationList = [
            ...state.educationList,
            state.education
        ];
        
        updateState({
            educationList:      updatedEducationList,
            emptyFieldsError:   false,
            education:          initialData,
            educationFields:    updatedFields
        });
        toggleModal();
    }

    return (
        <div id='education-container'>
            <p className='info'>Please add the education qualifications! </p>
            <Table
                tableHeaders={state.educationFields}
                tableRows={state.educationList}
            />
            <Button
                onClick={onClick}
                title='Add Education'
            />            
            <Modal
                className='modal'
                show={state.showModal}
                onClose={toggleModal}
                title='Add Education'>
                <InputForm
                    formFields={state.educationFields}
                    onChange={onChange}
                    sectionData={state.education}
                    onAdd={onAdd}
                    hasEmptyFields={state.emptyFieldsError}
                />
            </Modal>            
        </div>
    )
}