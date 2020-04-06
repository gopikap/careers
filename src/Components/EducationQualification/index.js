import React, { useState } from 'react';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';
import { EducationDetailsForm } from './EducationDetailsForm';
import { Table } from '../../_shared/Table';

export const EducationQualification = () => {
    const [showModal, setShowModal]         = useState(false);
    const [education, setEducation]         = useState({});
    const [educationList, setEducationList] = useState([]);

    const educationFields = [
        {
            name: 'qualification',
            label: 'Qualification',
            type: 'select',
            options: [
                { text: 'Tenth', value: 'tenth' },
                { text: 'Twelveth', value: 'twelveth' },
                { text: 'Certificates/Training', value: 'training' },
                { text: 'Graduate level', value: 'graduate' },
                { text: 'Post Graduate level', value: 'postgraduate' },
                { text: 'Doctorate level', value: 'doctorate' },
            ],
            required: false
        },
        {
            name: 'instituteName',
            label: 'Institute Name',
            type: 'text',
            placeholder: 'Institue Name',
            required: true
        },
        {
            name: 'university',
            label: 'University/Board',
            type: 'text',
            placeholder: 'University/Board Name',
            required: true
        },
        {
            name: 'subject',
            label: 'Subject',
            type: 'text',
            placeholder: 'eg: Information Technology',
            required: true
        },
        {
            name: 'year',
            label: 'Year',
            type: 'number',
            placeholder: 'Passed out year:- 2000',
            required: false
        },
        {
            name: 'result',
            label: 'Result',
            type: 'select',
            options: [
                { value: 'third', text: 'Third Class' },
                { value: 'second', text: 'Second Class' },
                { value: 'first', text: 'First Class' },
                { value: 'distinction', text: 'First Class with Distinction' },
                { value: 'notApplicable', text: 'Not Applicable' }
            ],
            required: false
        }
    ];


    const onClick = () => {
        setShowModal(true);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        const updatedItem = {
            ...education,
            [name]: value
        }
        setEducation(updatedItem);
    }

    const onAdd = () => {
        setEducationList(
            [
                ...educationList,
                education
            ]
        )
        toggleModal();
    }

    return (
        <div id='education-container'>
            <p className='info'>Please add the qualifications </p>
            <Table
                tableHeaders={educationFields}
                tableRows={educationList}
            />
            <Button
                onClick={onClick}
                title='Add Education'
            />            
            <Modal
                className='modal'
                show={showModal}
                onClose={toggleModal}
                title='Add Education'>
                <EducationDetailsForm
                    formFields={educationFields}
                    onChange={onChange}
                    education={education}
                    onAdd={onAdd}
                />
            </Modal>            
        </div>
    )
}