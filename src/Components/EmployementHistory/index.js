import React, { useState } from 'react';
//import { generateKey } from '../../_util/generateKey';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';
import { InputForm } from '../_shared/InputForm';

export const EmploymentHistory = () => {
    
    const [showModal, setShowModal]             = useState(false);
    const [employement, setEmployement]         = useState({});
    const [employementList, setEmployementList] = useState([]);

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
            name: 'responsibility',
            label: 'Job responsibility',
            type: 'text',
            isMulti: true,
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

    
    const onClick = () => {
        setShowModal(true);     
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        const updatedItem = {
            ...employement,
            [name]: value
        }
        setEmployement(updatedItem);
    }

    const onAdd = () => {
        setEmployementList(
            [
                ...employementList,
                employement
            ]
        )
        toggleModal();
    }

    return(
        <div id='employement-container'>
            <p className='info'>Please add the revelant job experiences. </p>
            <Table
                tableHeaders={employeementFields}
                tableRows   ={employementList}
            />
            <Button
                onClick    ={onClick}
                title      ='Add Employment'                
            />
             <Modal
                className   ='modal'
                show        ={showModal}
                onClose     ={toggleModal}
                title       ='Add Employement'>
                <InputForm
                    formFields={employeementFields}
                    onChange={onChange}
                    sectionData={employement}
                    onAdd={onAdd}
                />
            </Modal>
        </div>        
    )
}