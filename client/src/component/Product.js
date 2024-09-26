import React, { useState } from 'react';
import SearchComponent from './Filter';
import ProductList from './ProductList';

export default function Product() {
  const handleAddToCart = () => {
    // Add functionality for adding to cart, if needed
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="lg:w-1/4">
        <SearchComponent />
      </div>
      <div className="lg:w-3/4">
        <ProductList onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}
