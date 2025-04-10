// src/components/SellPage/ImageUploader.jsx
import { useState } from 'react';

function ImageUploader({ onImageUpload }) {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        onImageUpload(files);
    };

    return (
        <div>
            <input type="file" multiple onChange={handleImageChange} />
            {images.map((image, index) => (
                <p key={index}>{image.name}</p>
            ))}
        </div>
    );
}

export default ImageUploader;