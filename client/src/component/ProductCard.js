import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Check if the product is already in the cart
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const inCart = currentCart.some(item => item._id === product._id);
    setIsInCart(inCart);
  }, [product]);

  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...currentCart, product];

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.pname} has been added to your cart!`);
    setIsInCart(true);

    // Call the parent handler to update cart state
    onAddToCart();
  };

  const removeFromCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = currentCart.filter(item => item._id !== product._id);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.pname} has been removed from your cart!`);
    setIsInCart(false);

    // Call the parent handler to update cart state
    onAddToCart();
  };

  const buyNow = () => {
    alert(`Proceed to buy ${product.pname}`);
  };

  const addToWishlist = () => {
    const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isProductInWishlist = currentWishlist.some(item => item._id === product._id);

    if (!isProductInWishlist) {
      const updatedWishlist = [...currentWishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      alert(`${product.pname} has been added to your wishlist!`);
      setIsWishlisted(true);
    } else {
      alert(`${product.pname} is already in your wishlist!`);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <div className="flex justify-center items-center relative">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.discount} OFF
          </span>
        )}
        <div className="flex justify-center items-center w-full h-48">
          <img 
            src={product.img} 
            alt={product.pname} 
            className="max-w-full max-h-full object-cover rounded-lg" 
          />
        </div>
        {/* Wishlist Icon */}
        <button 
          className={`absolute top-2 right-2 p-2 ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`} 
          onClick={addToWishlist}
        >
          {isWishlisted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>
      <h2 className="text-lg font-bold mt-4 text-center">{product.pname}</h2>
      <div className="flex items-center justify-center mt-2">
        <span className="text-2xl font-bold text-gray-900">₹{product.pprice}</span>
        {product.discount && (
          <span className="text-sm line-through ml-2">
            ₹{product.pprice + product.pprice * (parseFloat(product.discount) / 100)}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center mt-2">
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
      <div className="flex justify-center space-x-4 mt-4">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={buyNow}
        >
          Buy Now
        </button>
        {isInCart ? (
          <button 
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={removeFromCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
