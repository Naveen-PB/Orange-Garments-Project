import React from 'react';

const products = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/71z+ZDCTo2L._AC_UL480_FMwebp_QL65_.jpg',
    discount: '39% OFF',
    title: 'Luxury PV Lycra Stretchable Formal Pants',
    price: 1500,
    originalPrice: 2100,
    rating: 5.0
  },
  {
    id: 2,
    image: 'https://cdn.shopclues.com/images/thumbnails/25663/640/1/3sc1443974729.jpg',
    discount: '39% OFF',
    title: 'INDIAN THREADS Mens Slim Fit',
    price: 999,
    originalPrice: 1499,
    rating: 5.0
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/51dR5N2fe6L._AC_UL480_FMwebp_QL65_.jpg',
    discount: '39% OFF',
    title: 'CB-COLEBROOK Long Sleeve Linen Shirt',
    price: 449,
    originalPrice: 699,
    rating: 5.0
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/71x4rLhMkML._AC_UL480_FMwebp_QL65_.jpg',
    discount: '39% OFF',
    title: ' Regular Fit T-Shirt',
    price: 250,
    originalPrice: 450,
    rating: 5.0
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/91nLHubWO7L._SX679_.jpg',
    discount: '39% OFF',
    title: 'Pinkmint Women Crepe Digital Print Straight Kurta Pack ',
    price: 600,
    originalPrice: 1000,
    rating: 5.0
  },
  
  // Add more products here
];

const ProductCard = ({ product }) => (
  <div className="relative flex w-full max-w-xs flex-col space-x-4 mx-10 mb-6 sm:columns-2 md:columns-2 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <a className="relative mx-3 flex h-60 overflow-hidden rounded-xl" href="#">
      <img className="object-cover" src={product.image} alt="product image" />
      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.discount}</span>
    </a>
    <div className="mt-4 px-5 pb-5">
      <a href="#">
        <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
      </a>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-slate-900">${product.price}</span>
          <span className="text-sm text-slate-900 line-through">${product.originalPrice}</span>
        </p>
        <div className="flex items-center">
          {[...Array(5)].map((star, index) => (
            <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}</span>
        </div>
      </div>
      <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart
      </a>
    </div>
  </div>
);

const ProductList = () => (
  <div className="flex flex-wrap justify-center">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
