

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/Doko Logo.png';
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Bell,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';

export default function AccountSettingsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: 'Male',
    dateOfBirth: '',
    phoneNumber: '+977 9876543321',
    country: 'Nepal',
    address: 'Sailaghari, Bhaktapur',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg
        transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center pt-4 pb-1">
          <img src={Logo} alt="Doko Logo" className="w-28 h-auto object-contain" />
        </div>

        {/* Menu */}
        <div className="p-4 flex-1 overflow-auto pt-1">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-4">GENERAL</div>
          {/* Dashboard */}
          <div
            onClick={() => navigate('/AdminDashboard')}
            className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
          >
            <span className="mr-3">📊</span>
            <span className="text-sm font-medium">Dashboard</span>
          </div>
          {/* Users submenu */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100">
              <span className="mr-3">👥</span>
              <span className="text-sm font-medium">Users</span>
            </div>
            <div
              onClick={() => navigate('/Customer')}
              className="cursor-pointer rounded px-6 py-2 text-sm hover:bg-gray-100 text-gray-700"
            >
              Customers
            </div>
            <div
              onClick={() => navigate('/Seller')}
              className="cursor-pointer rounded px-6 py-2 text-sm hover:bg-gray-100 text-gray-700"
            >
              Sellers
            </div>
          </div>
          {/* Transactions */}
          <div
            onClick={() => navigate('/Transaction')}
            className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
          >
            <span className="mr-3">💳</span>
            <span className="text-sm font-medium">Transaction (441)</span>
          </div>
          {/* Product */}
          <div
            onClick={() => navigate('/ProductAdmin')}
            className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
          >
            <span className="mr-3">📦</span>
            <span className="text-sm font-medium">Product</span>
          </div>
          {/* Account & Settings - Active page, red highlight */}
          <div
            onClick={() => navigate('/PersonalAccount')}
            className="flex items-center p-3 rounded-lg cursor-pointer bg-red-500 text-white shadow mt-2"
          >
            <span className="mr-3">⚙️</span>
            <span className="text-sm font-medium">Account & Settings</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        } bg-gray-50`}
      >
        {/* Navbar */}
        <header className="bg-[#e9e9e9] px-6 py-3 flex justify-between items-center shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 p-2 rounded hover:bg-gray-200"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? (
              <ChevronLeftCircle className="w-6 h-6" />
            ) : (
              <ChevronRightCircle className="w-6 h-6" />
            )}
          </button>

          <div className="flex items-center space-x-4 relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <MessageSquare className="h-5 w-5 text-gray-600" />
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-gray-800">Guy Hawkins</div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
                <ChevronDown className="text-gray-600" size={16} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate('/Login');
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Your exact provided main content below */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <span>Dashboard</span>{' '}
            <span className="mx-1">▶</span>{' '}
            <span className="text-gray-700 font-medium">Account & Settings</span>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Account Settings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="text"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
                Save Changes
              </button>

              <button
                onClick={() => navigate('/Security')}
                className="text-sm text-red-600 underline hover:text-red-800"
              >
                Go to Security Settings
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
