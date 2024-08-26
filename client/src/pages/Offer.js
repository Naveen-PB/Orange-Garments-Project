import React, { useState } from 'react';

// Dummy product data
const products = [
  {
    id: 1,
    pname: 'Floral Dress',
    pprice: 1500,
    discount: 20,
    rating: 4.5,
    img: 'https://via.placeholder.com/200',
    category: 'Floral',
  },
  {
    id: 2,
    pname: 'Evening Gown',
    pprice: 2500,
    discount: 30,
    rating: 4.8,
    img: 'https://via.placeholder.com/200',
    category: 'Evening',
  },
  {
    id: 3,
    pname: 'Summer Dress',
    pprice: 1200,
    discount: 10,
    rating: 4.2,
    img: 'https://via.placeholder.com/200',
    category: 'Casual',
  },
  // Add more products as needed
];

const OfferPage = () => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('None');

  const filteredProducts = products.filter((product) => {
    if (filter === 'All') return true;
    return product.category === filter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'Price Low to High') return a.pprice - b.pprice;
    if (sort === 'Price High to Low') return b.pprice - a.pprice;
    if (sort === 'Rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Special Offers</h1>
      <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2">Filter by Category:</label>
          <select
            className="border rounded p-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Floral">Floral</option>
            <option value="Evening">Evening</option>
            <option value="Casual">Casual</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label className="mr-2">Sort by:</label>
          <select
            className="border rounded p-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="None">None</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <div className="relative">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.discount}% OFF
                </span>
              )}
              <img
                src={product.img}
                alt={product.pname}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-lg font-bold mt-4 text-center">
              {product.pname}
            </h2>
            <div className="flex items-center justify-center mt-2">
              <span className="text-2xl font-bold text-gray-900">
                Rs {product.pprice}
              </span>
              {product.discount && (
                <span className="text-sm line-through ml-2">
                  Rs{' '}
                  {(
                    product.pprice +
                    (product.pprice * parseFloat(product.discount)) / 100
                  ).toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex items-center justify-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049.957L7.236 6.111H1.682l4.467 3.236-1.7 5.254L10 12.193l4.551 2.408-1.7-5.254 4.467-3.236h-5.554L10.951.957z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm font-semibold">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <div className="flex justify-center">
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
