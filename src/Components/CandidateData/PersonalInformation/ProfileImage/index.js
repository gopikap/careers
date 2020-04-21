import React, { useState } from 'react';
import defaultImage from '../../../../assests/images/user_default.png';
//import { axiosInstance } from '../../../api/axios-api';
import { verifyFile } from '../../../../_util/verifyFile';
//https://github.com/mosch/react-avatar-editor/issues/263
const AvatarEditor = require('react-avatar-editor').default;

export const ProfileImage = () => {  

    const initialState = {
        selectedFile: null,
        imageSrc: null,
        progress: 0,        
        scale: 1,
        position: { x: 0.5, y: 0.5 },     
        showImageEditor: false
    };
    
    let imgeditor = null;
    const setEditorRef = (editor) => imgeditor = editor;

    const [state, setState] = useState(initialState);
    const updateState = (data) => setState(prevState => ({ ...prevState, ...data }));

    const onScale = event => {
        const scale = parseFloat(event.target.value)
        updateState({ scale: scale });
    }

    const onPositionChange = position => {
        updateState({ position: position });
    }

    const uploadImage = () => {        
        const url = imgeditor.getImageScaledToCanvas().toDataURL();
        updateState({imageSrc: url, showImageEditor: false})
        //ToDO save the url to a paritcular employee in firebase
    }
 
    const onChange = e => {        
        const acceptedFileTypes = 'image/jpg, image/jpeg, image/gif, image/png';
        const isVerified        = verifyFile(e.target.files,acceptedFileTypes);
        if (isVerified) {
            const selectedFile    = e.target.files[0];        
            updateState({selectedFile, showImageEditor: true});
        }
    }

    const renderImageRender = () => {
        return (
            <>
                <div id='image-editor'>
                    <AvatarEditor
                        image={state.selectedFile}
                        width={200}
                        height={200}
                        border={50}
                        color={[255, 255, 255, 0.6]} // RGBA
                        scale={state.scale}
                        onPositionChange={onPositionChange}
                        position={state.position}
                        ref={setEditorRef}
                        rotate={state.rotate}
                    />
                </div>
                <div id='image-editor-controls'>
                    <div>
                        <label>Scale</label>
                        <input
                            name='scale'
                            type='range'
                            onChange={onScale}
                            min='1'
                            max='2'
                            step='0.01'
                            defaultValue='1'
                        />
                    </div>
                </div>
            </>
        );
    }

    const renderProfileImage = () => {
        const profileImage = state.imageSrc ? state.imageSrc : defaultImage;
        return(
            <img className='profile-image' src={profileImage} alt='user-logo' />
        )
    }

    const renderImageUpload = () => {
        return (
            <>                
                <label htmlFor='file-upload' className='upload-photo'>Upload Photo</label>
                <input 
                    id='file-upload' 
                    type='file' 
                    multiple={false} 
                    onChange={onChange} 
                />
            </>           
        )
    }

    return (
        <>
            {state.showImageEditor  ? renderImageRender() : renderProfileImage() }
            {state.showImageEditor  ? <button onClick={uploadImage}>Upload</button> : renderImageUpload()}            
        </>
    );
} 

