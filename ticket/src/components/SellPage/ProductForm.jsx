// src/components/SellPage/ProductForm.jsx
import { useState } from 'react';

function ProductForm({ onSubmit }) {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ productName, description });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
}

export default ProductForm;