import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [clothInventoryData, setClothInventoryData] = useState([]);

  useEffect(() => {
    const fetchClothingData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        setClothInventoryData(response.data);
      } catch (error) {
        console.error('Error fetching clothing data:', error);
      }
    };

    fetchClothingData();
  }, []);

  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCloths = selectedCategory === 'all' ? clothInventoryData :
    clothInventoryData.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Clothing Inventory</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <button className={`tab ${selectedCategory === 'all' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('all')}>
          All
        </button>
        <button className={`tab ${selectedCategory === 'shirt' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('shirt')}>
          Shirts
        </button>
        <button className={`tab ${selectedCategory === 'pant' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('pant')}>
           Pants
        </button>
        <button className={`tab ${selectedCategory === 'tshirt' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('tshirt')}>
           Tshirts
        </button>
      </div>
      <div className="shadow-md border-b border-gray-200 sm:rounded-lg overflow-x-auto overflow-y-auto max-w-auto max-h-96 mt-4">
        <table className=" w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Size</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCloths.map((item) => (
              <tr key={item._id}> {/* Assuming your MongoDB document uses _id */}
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item._id}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.pname}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  <img src={item.img} alt={item.pname} className="h-16" />
                </td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{`₹${item.pprice}`}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.rating}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.description}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
