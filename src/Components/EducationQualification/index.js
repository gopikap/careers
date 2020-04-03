import React, {useState} from 'react';
import { Modal } from '../../_shared/Modal';

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
            <p className='info'>Please add the revelant job experiences. </p>
            <div id='title-button'>
                <button 
                    className='addButton' 
                    onClick={onClick}>Add Education</button>
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