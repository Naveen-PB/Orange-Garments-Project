import React, { useState } from 'react';
import SearchComponent from './Filter';
import ProductList from './ProductList';
import Cart from './Cart';

export default function Product() {
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    setShowCart(true);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {showCart ? (
        <Cart />
      ) : (
        <>
          <div className="lg:w-1/4">
            <SearchComponent />
          </div>
          <div className="lg:w-3/4">
            <ProductList onAddToCart={handleAddToCart} />
          </div>
        </>
      )}
    </div>
  );
}
