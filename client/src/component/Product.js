import React from 'react';
import SearchComponent from './Filter';
import ProductList from './ProductList';

export default function Product() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className=" lg:w-1/4">
        <SearchComponent />
      </div>
      <div className="lg:w-3/4">
        <ProductList />
      </div>
    </div>
  );
}
