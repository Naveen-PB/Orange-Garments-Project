import React, { useState } from 'react';
import axios from 'axios';

function Adduser({ closeModal }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/api/register', {
                username: name,
                email,
                phoneNumber,
                password,
                category: role
            });
            alert(response.data.message);
            closeModal(); // Close the modal on successful submission
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Error adding user');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            {/* Main modal */}
            <div className="relative bg-white rounded-lg shadow-lg w-full">
                {/* Adduser header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-blue-950">
                        Add New User
                    </h3>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="text-black hover:text-blue-950 rounded-lg text-sm w-4 h-4 inline-flex justify-center items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                        </svg>
                    </button>
                </div>
                {/* Adduser body */}
                <form className="p-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-blue-950">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-white border border-blue-950 text-blue-950 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Customer name"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-950">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white border border-blue-950 text-blue-950 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Customer email"
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-blue-950">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="bg-white border border-blue-950 text-blue-950 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Phone number"
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-950">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-white border border-blue-950 text-blue-950 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-blue-950">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="bg-white border border-blue-950 text-blue-950 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="role" className="block mb-2 text-sm font-medium text-blue-950">
                                User Role
                            </label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="bg-white border border-blue-950 text-blue-950 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Add new user
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Adduser;
