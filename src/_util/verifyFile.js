export const verifyFile = (files) => {
    const imageMaxSize              = 1000000000 // bytes
    const acceptedFileTypes         = 'image/jpg, image/jpeg, image/gif, image/png';
    const acceptedFileTypesArray    = acceptedFileTypes.split(",").map((item) => { return item.trim() });
    
    if (files && files.length > 0) {
        const currentFile = files[0]
        const currentFileType = currentFile.type;
        const currentFileSize = currentFile.size;
        if (currentFileSize > imageMaxSize) {
            alert("This file is not allowed. " + currentFileSize + " bytes is too large");
            return false;                
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
            alert("This file is not allowed. Only images with jpg/png/gif extenstions are allowed.");
            return false;
        }
        return true;
    } 
}
