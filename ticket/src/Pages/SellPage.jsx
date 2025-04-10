console.lo// src/pages/SellPage.jsx
import { useState } from 'react';
import ProductForm from '../components/SellPage/ProductForm';
import ImageUploader from '../components/SellPage/ImageUploader';
import PriceInput from '../components/SellPage/PriceInput';

function SellPage() {
    const [productData, setProductData] = useState({});
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const handleProductSubmit = (data) => {
        setProductData(data);
        setCurrentStep(2);
    };

    const handleImageUpload = (files) => {
        setImages(files);
        setCurrentStep(3);
    };

    const handlePriceChange = (value) => {
        setPrice(value);
    };

    const handleSubmit = () => {
        console.log('Product data:', { ...productData, images, price });
        // Send data to backend API
    };

    return (
        <div>
            <h1>Sell Page</h1>
            {currentStep === 1 && <ProductForm onSubmit={handleProductSubmit} />}
            {currentStep === 2 && <ImageUploader onImageUpload={handleImageUpload} />}
            {currentStep === 3 && <PriceInput onPriceChange={handlePriceChange} />}
            {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
        </div>
    );
}

export default SellPage;