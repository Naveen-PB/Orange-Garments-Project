// src/component/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assest/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-blue-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-20 sm:h-12" alt="Logo" />
          <span className="self-center text-2xl sm:text-xs md:text-lg font-semibold whitespace-nowrap dark:text-white">ORANGE GARMENTS</span>
        </Link>

        {/* Navbar Menu Items */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About Us</Link>
          <Link to="/products" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Products</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</Link>
        </div>

        {/* Cart Icon and Wishlist Icon */}
        <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Cart Icon */}
          <Link to="/cart" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8l-1.4-7M7 13L5.4 5M3 3l2 0M3 3l1.5 1.5M17 17a1 1 0 102 0 1 1 0 00-2 0zm-8 0a1 1 0 102 0 1 1 0 00-2 0z" />
            </svg>
          </Link>

          {/* Wishlist Icon */}
          <Link to="/wishlist" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </Link>

          {/* Login Link */}
          <Link to="/login" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white ml-4">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="inline-flex items-center p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 dark:bg-blue-950 dark:border-gray-700">
            <ul className="space-y-4 py-4 px-6">
              <li><Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Products</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</Link></li>
              <li><Link to="/login" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Login</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
