import React, { useState } from 'react';
import { EmployerDetailsRow } from './EmployerDetailsRow';
import { generateKey } from '../../_util/generateKey';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';

export const EmploymentHistory = () => {
    
    const [showModal, setShowModal]     = useState(false);
    
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
                onClick={onClick}
                title='Add Employment'
            />            
             
             <Modal
                    className='modal'
                    show={showModal}
                    onClose={toggleModal}
                    title='Add Employement'>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                        {/* <EmployerDetailsRow /> */}
            </Modal>
        </div>        
    )
}