import React, { useState } from 'react';
import { Button } from '../../../_shared/Button';
import { Modal } from '../../../_shared/Modal';
import DeleteIcon from '../../../assests/delete.png';
import ViewIcon from '../../../assests/view-file.png';
import { verifyFile } from '../../../_util/verifyFile';

export const UploadDocuments = () => {

    const initialState = {
        selectedFile: null,        
        title:'',
        description: '',
        showModal: false,
        files: [],
        emptyFieldsError: false
    };

    const [state, setState] = useState(initialState);
    const updateState = data => setState(prevState => ({ ...prevState, ...data }));

    const onClick = () => { 
        updateState({showModal: true});
    }

    const toggleModal = () => {         
        updateState({showModal: !state.showModal});
    }

    const onFileSelect = (e) => {
        const acceptedFileTypes = 'image/jpg, image/jpeg, image/gif, image/png, txt, doc, docx, pdf';
        const isVerified        = verifyFile(e.target.files,acceptedFileTypes);
        if (isVerified) {
            const selectedFile    = e.target.files[0];        
            updateState({selectedFile});
        }
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        const updatedValue = {
            ...state,
            [name]: value
        }
        updateState(updatedValue)
    }

    const onAdd = () => {
        //save
        const shouldAdd = (state.title !== '' && state.selectedFile !== null);
        if( shouldAdd ){
            const { files, selectedFile, description, title }   = state;
            const updatedFiles                                  = [...files];            
            updatedFiles.push({selectedFile, description, title});
            const updatedState = {
                files: updatedFiles,
                showModal: false,
                emptyFieldsError: false,
            }
            updateState(updatedState);
        } else {
            updateState({emptyFieldsError: true})
        }
    }

    const onViewFile = (i) => {
        window.open(URL.createObjectURL(state.files[i].selectedFile), '_blank');
    }

    const onDeleteFile = (i) => {
        const files = [...state.files];
        files.splice(i,1);
        updateState({files});
    }

    const renderUploadForm = () => {
        return(
            <>
                <div className='textFields'>
                    <label htmlFor='file-upload' className='upload-photo'>
                        Upload Files <span className='error-message'>*</span>
                    </label>
                    <input
                        id='file-upload'
                        type='file'
                        onChange={onFileSelect}
                    />
                </div>
                <div className='textFields'>
                    <label>Document Name <span className='error-message'>*</span></label>
                    <input
                        type='text'
                        onChange={onChange}
                        placeholder='Add Document Name'
                        name='title'
                    />
                </div>
                <div className='textFields'>
                    <label>Description</label>
                    <textarea
                        onChange={onChange}
                        placeholder='Add short description'
                        rows='8'    
                        name='description'
                    />
                </div>  
                <div>
                    <Button
                        onClick={onAdd}
                        title='Add'
                        buttonClass='addButton'
                    />
                    {state.emptyFieldsError ? <span className='error-message'>Please enter required fields</span> : null}
                </div>
            </>
        )
    }

    const renderFilesRow = (files) => {
        return (
            files.map((file, i) => {
                const { description, title } = file;
                return (
                    <tr className='file-name' key={i}>
                        <td>{title}</td>
                        <td className='description'>
                            {description}
                        </td>
                        <td>
                            <img 
                                className='file' 
                                onClick={() => onViewFile(i)} 
                                src={ViewIcon} 
                                alt='View' />                                
                            <img 
                                className='file' 
                                onClick={() => onDeleteFile(i)} 
                                src={DeleteIcon} 
                                alt='Delete' />
                        </td>
                    </tr>
                );
            })
        )        
    }

    const renderFilesList = () => {
        const { files } = state;
        const hasFiles  = (files.length !== 0);
        if (hasFiles) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Decription</th>
                            <th colSpan='2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderFilesRow(files)}
                    </tbody>
                </table>
            )
        }
    }

    return(
        <div id="upload-container">
            <p className='info'>Attach all the documents to prove the details you provided (Ex: copy of voter ID, Degree certificates, Documents to prove work experience, etc.)</p>
            {renderFilesList()}
            <Button
                onClick={onClick}
                title='Upload Documents'
            />
            <Modal
                className='modal'
                show={state.showModal}
                onClose={toggleModal}
                title='Upload Documents'>
                    {renderUploadForm()}                
            </Modal> 
        </div>
        
    )
}