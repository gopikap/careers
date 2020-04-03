import React, { useState } from 'react';
import { EmployerDetailsRow } from './EmployerDetailsRow';
import { generateKey } from '../../_util/generateKey';
import { Modal } from '../../_shared/Modal';

export const EmploymentHistory = () => {
    
    const [showModal, setShowModal]     = useState(false);
    
    const onClick = () => {
        setShowModal(true);     
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return(
        <div id='employement-container'>
            <p className='info'>Please add the revelant job experiences. </p>
            <div id='title-button'>
                <button 
                    className='addButton' 
                    onClick={onClick}>Add Employment</button>
            </div>            
             
             <Modal
                    className='modal'
                    show={showModal}
                    close={toggleModal}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                        {/* <EmployerDetailsRow /> */}
            </Modal>
        </div>        
    )
}