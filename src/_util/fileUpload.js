import React from 'react';
import { storage } from '../firebase';

// if (file) {
        //     const {name}        = file;
        //     const uploadImage   = storage.ref(`images/${name}`).put(file);
        //     uploadImage.on('state_changed',
        //         (snapshot) => {
        //             //progress function
        //             const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
        //             updateState({progress: progress});
        //         },
        //         (error) => {
        //             //error function
        //         },
        //         (complete) => {
        //             //complete function
        //             storage.ref('images').child(name).getDownloadURL().then(url => {
        //                 updateState({imageSrc: url});
        //             })
        //         }
        //     );
        // }