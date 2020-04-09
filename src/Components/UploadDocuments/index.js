import React, { useState } from 'react';
import { Button } from '../../_shared/Button';
import { Table } from '../../_shared/Table';
import { Modal } from '../../_shared/Modal';

export const UploadDocuments = () => {

    const initialState = {
        selectedFile: null,
        imageSrc: null,
        progress: 0,        
        scale: 1,
        position: { x: 0.5, y: 0.5 },     
        showImageEditor: false
    };
    const [showModal, setShowModal]     = useState(false);

    const onClick = () => {
        setShowModal(true);
    }
    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const onChange = () => {
        console.log('here')
    }

    const onAdd = () => {
        //save
    }


    const renderUploadForm = () => {
        return(
            <>
                <div className='textFields'>
                    <label htmlFor='file-upload' className='upload-photo'>Upload Files</label>
                    <input
                        id='file-upload'
                        type='file'
                        onChange={onChange}
                    />
                </div>
                <div className='textFields'>
                    <label>Document Name</label>
                    <input
                        type='text'
                        onChange={onChange}
                        placeholder='Add Document Name'
                    />
                </div>
                <div className='textFields'>
                    <label>Description</label>
                    <textarea
                        onChange={onChange}
                        placeholder='Add short description'
                        rows='8'    
                    />
                </div>  
                <div>
                    <Button
                        onClick={onAdd}
                        title='Add'
                        buttonClass='addButton'
                    />
                </div>
            </>
            
        )
    }

    return(
        <div id="upload-container">
            <p className='info'>Attach all the documents to prove the details you provided (Ex: copy of voter ID, Degree certificates, Documents to prove work experience, etc.)</p>
            <Table
                tableHeaders={''}
                tableRows={''}
            />
            <Button
                onClick={onClick}
                title='Upload Documents'
            />
            <Modal
                className='modal'
                show={showModal}
                onClose={toggleModal}
                title='Upload Documents'>
                    {renderUploadForm()}                
            </Modal> 
        </div>
        
    )
}