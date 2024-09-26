import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const buyNow = () => {
    navigate(`/product/${product._id}`); // Assuming the route is set up as /product/:id
  };

  return (
    <div className="border sm rounded-lg p-4 shadow-lg">
      {/* Product Display */}
      <h2>{product.pname}</h2>
      <div className="flex justify-center">
        <img src={product.img} alt={product.pname} className="max-w-full max-h-full" />
      </div>

      <div className="flex justify-center mt-2">
        <button className="bg-blue-500 ml-2" onClick={buyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
