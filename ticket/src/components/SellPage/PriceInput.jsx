// src/components/SellPage/PriceInput.jsx
import { useState } from 'react';

function PriceInput({ onPriceChange }) {
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handlePriceChange = (e) => {
        const value = e.target.value;
        setPrice(value);

        if (isNaN(value) && value !== '') {
            setError('Price must be a number');
        } else {
            setError('');
            onPriceChange(value);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={handlePriceChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default PriceInput;