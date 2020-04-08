import React, { useState } from 'react';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';
import { InputForm } from '../_shared/InputForm';

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
        setEducation({});
    }

    return (
        <div id='education-container'>
            <p className='info'>Please add the education qualifications! </p>
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
                <InputForm
                    formFields={educationFields}
                    onChange={onChange}
                    sectionData={education}
                    onAdd={onAdd}
                />
            </Modal>            
        </div>
    )
}