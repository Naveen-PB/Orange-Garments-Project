import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assest/Logo.png';
import profile from '../assest/my_processed.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-blue-950">
      <div className="max-w-screen-xl sm:text-xs md:text-lg flex flex-wrap items-center justify-between mx-auto p-0">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-20 sm:h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl sm:text-xs md:text-lg font-semibold whitespace-nowrap dark:text-white">ORANGE GARMENTS</span>
        </Link>
        <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 mr-4 sm:w-2 sm:h-2 h-8 rounded-full" src={profile} alt="user photo" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-3 top-4 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 z-50" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                </li>
                <li>
                  <Link to="/earnings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
                </li>
                <li>
                  <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="flex flex-col font-medium p-5 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
              <Link to="/products" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
            </li>
            <li>
              <Link to="/offers" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Offers</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
            </li>
            <li>
              <Link to="/" className="text-white bg-gradient-to-r  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
