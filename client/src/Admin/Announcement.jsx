import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Announcement = () => {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');
  const [sendTo, setSendTo] = useState('both');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleWhatsappChange = (e) => {
    setWhatsapp(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSendToChange = (e) => {
    setSendTo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to send offers via email, WhatsApp, or both
    console.log("Sending offers to:");
    if (sendTo === 'email' || sendTo === 'both') {
      console.log("Email:", email);
    }
    if (sendTo === 'whatsapp' || sendTo === 'both') {
      console.log("WhatsApp:", whatsapp);
    }
    // Reset form fields
    setEmail('');
    setWhatsapp('');
    setMessage('');
  }

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-950">Send Offers</h2>
      <Tabs>
        <TabList className="text-blue-950">
          <Tab>Email</Tab>
          <Tab>WhatsApp</Tab>
        </TabList>

        <TabPanel>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 mt-3">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Offers Posters:</label>
              <input type="file" id="email" value={email} onChange={handleEmailChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message:</label>
              <textarea id="message" value={message} onChange={handleMessageChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your message" required />
            </div>
            <button type="submit" className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600">Send Offers via Email</button>
          </form>
        </TabPanel>

        <TabPanel>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2 mt-3">Who will get offers:</label>
              <select>
                <option>All user</option>
                <option>General</option>
                <option>Premium</option>
                <option>New user</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2 mt-3">WhatsApp Number:</label>
              <input type="tel" id="whatsapp" value={whatsapp} onChange={handleWhatsappChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your WhatsApp number" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Offers Posters:</label>
              <input type="file" id="email" value={email} onChange={handleEmailChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message:</label>
              <textarea id="message" value={message} onChange={handleMessageChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your message" required />
            </div>
            <button type="submit" className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600">Send Offers via WhatsApp</button>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Announcement;
