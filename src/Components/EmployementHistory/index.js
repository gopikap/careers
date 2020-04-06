import React, { useState } from 'react';
import { EmployerDetailsForm } from './EmployerDetailsForm';
import { generateKey } from '../../_util/generateKey';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';

export const EmploymentHistory = () => {
    
    const [showModal, setShowModal]     = useState(false);
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
        console.log('Modal status',showModal);
        setShowModal(!showModal);
    }

    return(
        <div id='employement-container'>
            <p className='info'>Please add the revelant job experiences. </p>
            <Button
                onClick    ={onClick}
                title      ='Add Employment'                
            />
             <Modal
                className   ='modal'
                show        ={showModal}
                onClose     ={toggleModal}
                title       ='Add Employement'>
                    <EmployerDetailsForm formFields={employeementFields} />
            </Modal>
            <Table
                tableHeaders={employeementFields}
                tableRows   =''
            />
        </div>        
    )
}