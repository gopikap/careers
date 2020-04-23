import React, { useState } from 'react';
import { Button } from '../../../_shared/Button';
import { Table } from '../../../_shared/Table';
import { getRequiredEmptyFields } from '../../../_util/getRequiredEmptyFields';
import { AddItemModal } from '../../_shared/AddItemModal';

export const EducationQualification = () => {

    const initialState  = {
        education:          {},
        showModal:          false,
        emptyFieldsError:   false,
        educationList:      []        
    }

    const [state, setState]     = useState(initialState);
    const updateState           = data => setState(prevState => ({ ...prevState, ...data }));

    const educationFields       = [
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
        };        
        updateState({
            education: updatedEducation
        });
    }

    const onAdd = () => {
        const hasEmptyFields  =  getRequiredEmptyFields(educationFields, state.education);
        if (hasEmptyFields) {
            updateState({emptyFieldsError: true});
            return;
        }

        const updatedEducationList = [
            ...state.educationList,
            state.education
        ];
        
        updateState({
            educationList:      updatedEducationList,
            emptyFieldsError:   false,
            education:          {}
        });

        toggleModal();
    }

    const onDelete = (i) => {
        const updatedEducationList = [...state.educationList];
        updatedEducationList.splice(i,1);
        updateState({educationList: updatedEducationList});
    }

    return (
        <>
            <p className='info'>Please add the education qualifications! </p>
            <Table
                tableHeaders={educationFields}
                tableRows   ={state.educationList}
                onDelete    ={onDelete} 
            />
            <Button
                onClick={onClick}
                title='Add Education'
            /> 
            <AddItemModal 
                show            ={state.showModal}
                onClose         ={toggleModal}
                title           ='Add Education'
                formFields      ={educationFields}
                onChange        ={onChange} 
                data            ={state.education}
                onAdd           ={onAdd}
                hasEmptyFields  ={state.emptyFieldsError}
            /> 
        </>
    )
}