import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openSection, setOpenSection] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching product');
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image Section */}
            <div className="flex flex-col items-center">
                <img
                    src={product.img}
                    alt={product.pname}
                    className="w-full rounded-lg"
                />
                <div className="mt-4 flex space-x-4">
                    {/* Example secondary images */}
                    <img src={product.img} alt="Secondary 1" className="w-20 h-20 cursor-pointer" />
                    <img src={product.img} alt="Secondary 2" className="w-20 h-20 cursor-pointer" />
                    <img src={product.img} alt="Secondary 3" className="w-20 h-20 cursor-pointer" />
                </div>
            </div>

            {/* Product Details Section */}
            <div>
                <h1 className="text-3xl font-bold">{product.pname}</h1>
                <div className="mt-2">
                    <span className="text-xl font-medium">${product.pprice}</span>
                    <div className="flex items-center mt-2">
                        <div className="text-yellow-500">
                            <span>⭐ {product.rating}</span>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-gray-700">{product.description}</p>

                {/* Color Options */}
                <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700">Color</h3>
                    <div className="mt-2 flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-500"></div>
                    </div>
                </div>

                <button className="mt-6 w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Buy Now
                </button>

                {/* FAQ Section */}
                <div className="mt-6">
                    <div 
                        className="cursor-pointer flex items-center space-x-2"
                        onClick={() => toggleSection('features')}
                    >
                        <h3 className="text-xl font-bold text-gray-700">Features</h3>
                        <FontAwesomeIcon icon={openSection === 'features' ? faChevronUp : faChevronDown} />
                    </div>
                    {openSection === 'features' && (
                        <ul className="list-disc pl-5 text-xl text-gray-500 space-y-2 mt-2">
                            <li>Multiple strap configurations</li>
                            <li>Spacious interior with top zip</li>
                            <li>Leather handle and tabs</li>
                            <li>Interior dividers</li>
                            <li>Stainless strap loops</li>
                            <li>Double-stitched construction</li>
                            <li>Water-resistant</li>
                        </ul>
                    )}
                </div>

                <div className="mt-6">
                    <div 
                        className="cursor-pointer flex items-center space-x-2"
                        onClick={() => toggleSection('care')}
                    >
                        <h3 className="text-xl font-bold text-gray-700">Care</h3>
                        <FontAwesomeIcon icon={openSection === 'care' ? faChevronUp : faChevronDown} />
                    </div>
                    {openSection === 'care' && (
                        <p className="text-xl text-gray-500 mt-2">
                            Spot clean as needed, hand wash with mild soap, machine wash interior dividers, treat handle and tabs with leather conditioner.
                        </p>
                    )}
                </div>

                <div className="mt-6">
                    <div 
                        className="cursor-pointer flex items-center space-x-2"
                        onClick={() => toggleSection('shipping')}
                    >
                        <h3 className="text-xl font-bold text-gray-700">Shipping</h3>
                        <FontAwesomeIcon icon={openSection === 'shipping' ? faChevronUp : faChevronDown} />
                    </div>
                    {openSection === 'shipping' && (
                        <ul className="list-disc pl-5 text-xl text-gray-500 space-y-2 mt-2">
                            <li>Free shipping on orders over $300</li>
                            <li>International shipping available</li>
                            <li>Expedited shipping options</li>
                            <li>Signature required upon delivery</li>
                        </ul>
                    )}
                </div>

                <div className="mt-6">
                    <div 
                        className="cursor-pointer flex items-center space-x-2"
                        onClick={() => toggleSection('returns')}
                    >
                        <h3 className="text-xl font-bold text-gray-700">Returns</h3>
                        <FontAwesomeIcon icon={openSection === 'returns' ? faChevronUp : faChevronDown} />
                    </div>
                    {openSection === 'returns' && (
                        <ul className="list-disc pl-5 text-xl text-gray-500 space-y-2 mt-2">
                            <li>Easy return requests</li>
                            <li>Pre-paid shipping label included</li>
                            <li>10% restocking fee for returns</li>
                            <li>60-day return window</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
