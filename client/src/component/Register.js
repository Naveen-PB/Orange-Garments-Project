// src/Register.js

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('User registered successfully');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-8 mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join With Us</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-white border hover:text-black hover:border-blue-950 focus:outline-none focus:bg-cyan-600"
          >
            Register
          </button>
          <Link to="/">
            <button
              type="button"
              className="w-full bg-blue-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-white border hover:text-black hover:border-blue-950 focus:outline-none focus:bg-cyan-600"
            >
              Back to Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
