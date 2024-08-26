// src/component/Cart.js
import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleRemoveItem = (id) => {
        // Remove item from cart and update localStorage
        const updatedCartItems = cartItems.filter(item => item._id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Your Cart</h1>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div key={item._id} className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center space-x-4">
                            <img src={item.img} alt={item.pname} className="w-16 h-16 object-cover rounded-lg" />
                            <span>{item.pname}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span>₹{item.pprice}</span>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleRemoveItem(item._id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
