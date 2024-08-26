import React from 'react';

const CartItem = ({ item, onRemove }) => {
    const addToWishlist = () => {
        const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const updatedWishlist = [...currentWishlist, item];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        alert(`${item.pname} has been added to your wishlist!`);
    };

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
                <img src={item.img} alt={item.pname} className="w-16 h-16 object-cover rounded-lg" />
                <span>{item.pname}</span>
            </div>
            <div className="flex items-center space-x-4">
                <span>₹{item.pprice}</span>
                {/* Add Wishlist Icon */}
                <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={addToWishlist}
                >
                    ❤️
                </button>
                {/* Add Remove Button */}
                <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => onRemove(item._id)}
                >
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default CartItem;
