import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <div className="relative">
                {product.discount && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.discount} OFF
                    </span>
                )}
                <img src={product.img} alt={product.pname} className=" w-fit h-64 object-cover rounded-lg" />
            </div>
            <h2 className="text-lg font-bold mt-4">{product.pname}</h2>
            <div className="flex items-center mt-2">
                <span className="text-2xl font-bold text-gray-900">${product.pprice}</span>
                {product.discount && (
                    <span className="text-sm line-through ml-2">₹{product.pprice + product.pprice * (parseFloat(product.discount) / 100)}</span>
                )}
            </div>
            <div className="flex items-center mt-2">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049.957L7.236 6.111H1.682l4.467 3.236-1.7 5.254L10 12.193l4.551 2.408-1.7-5.254 4.467-3.236h-5.554L10.951.957z" />
                        </svg>
                    ))}
                </div>
                <span className="ml-2 text-sm font-semibold">{product.rating.toFixed(1)}</span>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;
