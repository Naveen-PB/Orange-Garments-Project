import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(wishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    // Filter out the item to be removed
    const updatedWishlist = wishlistItems.filter(item => item._id !== productId);
    
    // Update the wishlist in local storage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    // Update the state
    setWishlistItems(updatedWishlist);
    
    alert('Product has been removed from your wishlist.');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-lg">
              <img 
                src={item.img} 
                alt={item.pname} 
                className="w-32 h-32 object-cover rounded-lg mx-auto" // Smaller image size
              />
              <h2 className="text-lg font-bold mt-4 text-center">{item.pname}</h2>
              <span className="text-2xl font-bold text-gray-900">₹{item.pprice}</span>
              <Link 
                to={`/product/${item._id}`} 
                className="mt-4 block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                View Product
              </Link>
              <button 
                className="mt-2 block text-center bg-red-500 text-white py-1 px-2 rounded text-sm hover:bg-red-600" // Smaller button size
                onClick={() => removeFromWishlist(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
