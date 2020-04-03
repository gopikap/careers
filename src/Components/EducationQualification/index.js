import React, {useState} from 'react';
import { Modal } from '../../_shared/Modal';
import { Button } from '../../_shared/Button';

export const EducationQualification = () => {
    const [showModal, setShowModal]     = useState(false);
    
    const onClick = () => {
        setShowModal(true);     
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    return(
        <div id='education-container'>
            <p className='info'>Please add the qualifications </p>
            <Button
                onClick={onClick}
                title='Add Education'
            />
             
            <Modal
                    className='modal'
                    show={showModal}
                    onClose={toggleModal}
                    title='Add Education'>
                        
                        {/* <EmployerDetailsRow /> */}
            </Modal>
        </div>        
    )
}