import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';

const ImageUpload = (props) => {
    // const emptyImage = null
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false)

    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
            return;
        }
        // the const fileReader is the image previewUrl 
        // with the api that was built in the browser
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
        // fileReader.onload = () => {
            // with fileReader.result we extract the 
            // value from the api of the image
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }, [file]);

    const pickedImage = (event) => {
        // console.log(event.target);
        let pickedFile;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
            console.log("info de la foto", pickedFile);
            // console.log("aparece el string de la imagen",previewUrl)
            props.handleImageChange(event);
            setPreviewUrl(null);
        } else {
            setIsValid(false);
            fileIsValid = false;
        }

    }

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    return (
        <div className='form-input-image'>
            <input ref={filePickerRef}
                style={{ display: 'none' }}
                name={props.name}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedImage}
                // value={previewUrl}
            />
            <div className="image-preview-container">
                <div className="image-upload-preview">
                    {previewUrl && <img src={previewUrl} alt="Preview" />}
                    {!previewUrl && <p>PHOTO</p>}
                </div>
                <Button type="button" onClick={pickImageHandler} />
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    )
};

export default ImageUpload;