import React, { useState, useEffect } from 'react';
import Adduser from './Adduser'; // Assuming AddUser component is in a separate file

const AllUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter users based on the active tab
  const filteredUsers = activeTab === 'all' ? users : users.filter(user => user.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Users Details</h2>
        <div className="space-x-4">
          <div className="flex flex-row flex-wrap md:flex-row sm:flex-auto">
            <button onClick={openModal} className="bg-blue-500 text-white xs:px-4 xs:py-2 xs:mx-2 xs:text-sm px-4 py-2 rounded text-base md:py-2 md:text-base hover:bg-blue-600">Add Admin</button>
            <button className="bg-yellow-500 text-white xs:px-4 xs:py-2 xs:mx-2 xs:text-sm px-4 py-2 rounded text-base md:py-2 md:text-base hover:bg-yellow-600">Export CSV</button>
          </div>
        </div>
      </div>
      <div className="tabs">
        <button className={`tab ${activeTab === 'all' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mr-4`} onClick={() => handleTabClick('all')}>
          All
        </button>
        <button className={`tab ${activeTab === 'admin' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mr-4`} onClick={() => handleTabClick('Admin')}>
          Admin
        </button>
        <button className={`tab ${activeTab === 'user' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mr-4`} onClick={() => handleTabClick('User')}>
          User
        </button>
      </div>
      <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg scroll overflow-x-auto overflow-y-auto">
        {/* Render users based on active tab */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Map through filtered users and render */}
            {filteredUsers.map(user => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Render AddUser modal */}
      {isModalOpen && <Adduser closeModal={closeModal} />}
    </div>
  );
};

export default AllUsers;
