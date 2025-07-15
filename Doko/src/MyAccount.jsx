

import React, { useState } from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function AccountManagement() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'haha@gmail.com',
    address: 'sallaghari, 5236, bhaktapur',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [activeSection, setActiveSection] = useState('profile');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving changes...', formData);
  };

  const handleCancel = () => {
    setFormData({
      ...formData,
      firstName: '',
      lastName: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer transition-colors duration-200">Home</span>
            <span>/</span>
            <span className="text-gray-900">My Account</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">Manage My Account</h2>
              </div>
              
              <div className="p-2 space-y-1">
                <div 
                  className={`p-3 rounded-md cursor-pointer transition-all duration-200 ${
                    activeSection === 'profile' 
                      ? 'bg-red-50 text-red-600 border-l-4 border-red-500' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveSection('profile')}
                >
                  My Profile
                </div>
                <div 
                  className={`p-3 rounded-md cursor-pointer transition-all duration-200 ${
                    activeSection === 'userType' 
                      ? 'bg-red-50 text-red-600 border-l-4 border-red-500' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveSection('userType')}
                >
                  Change user type
                </div>
                <div 
                  className={`p-3 rounded-md cursor-pointer transition-all duration-200 ${
                    activeSection === 'orders' 
                      ? 'bg-red-50 text-red-600 border-l-4 border-red-500' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveSection('orders')}
                >
                  Total Orders
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white">
              <div className="p-6">
                <h1 className="text-xl font-semibold text-[#db4444]">Edit Your Profile</h1>
              </div>

              <div className="p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

                  {/* First Name */}
                  <div className="transform transition-all duration-200 focus-within:scale-[1.02]">
                    <label className="block text-sm font-medium text-black mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                      placeholder="First Name"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="transform transition-all duration-200 focus-within:scale-[1.02]">
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                      placeholder="Last Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="transform transition-all duration-200 focus-within:scale-[1.02]">
                    <label className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    />
                  </div>

                  {/* Address */}
                  <div className="transform transition-all duration-200 focus-within:scale-[1.02]">
                    <label className="block text-sm font-medium text-black mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Password Changes Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-black mb-4">Password Changes</h3>
                  <div className="space-y-4">
                    <div className="transform transition-all duration-200 focus-within:scale-[1.02]">
                      <input
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        placeholder="Current Password"
                        className="w-full px-4 py-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                      />
                    </div>
                    <div className="transform transition-all duration-200 focus-within:scale-[1.02]">
                      <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        placeholder="New Password"
                        className="w-full px-4 py-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                      />
                    </div>
                    <div className="transform transition-all duration-200 focus-within:scale-[1.02]">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm New Password"
                        className="w-full px-4 py-3 bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-3 text-black bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-[#db4444] text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
