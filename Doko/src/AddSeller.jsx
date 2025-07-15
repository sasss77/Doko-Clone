
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Bell,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import Logo from './assets/Doko Logo.png';

const AddSellerForm = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    registrationDate: '01/02/2025',
    shopName: 'Namaste handicraft',
    address: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 flex flex-col`}>
        <div className="flex items-center justify-center pt-4 pb-1">
          <img src={Logo} alt="Doko Logo" className="w-28 h-auto object-contain" />
        </div>

        <div className="p-4 flex-1 overflow-auto pt-1">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-4">GENERAL</div>
          <nav className="space-y-2">
            <div
              onClick={() => navigate('/AdminDashboard')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">📊</span>
              <span className="text-sm font-medium">Dashboard</span>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center p-3 rounded-lg cursor-pointer bg-red-500 text-white shadow">
                <span className="mr-3">👥</span>
                <span className="text-sm font-medium">Users</span>
                {/* Sidebar arrow */}
                <svg
                  className="w-4 h-4 ml-auto transition-transform duration-200 rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
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
            <div
              onClick={() => navigate('/Transaction')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">💳</span>
              <span className="text-sm font-medium">Transaction (441)</span>
            </div>
            <div
              onClick={() => navigate('/ProductAdmin')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">📦</span>
              <span className="text-sm font-medium">Product</span>
            </div>
            <div
              onClick={() => navigate('/PersonalAccount')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">⚙️</span>
              <span className="text-sm font-medium">Account & Settings</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} min-h-screen bg-gray-50`}>
        {/* Top Navbar */}
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

          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600" />
            <MessageSquare className="h-5 w-5 text-gray-600" />
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div className="hidden sm:flex items-center space-x-1">
                  <div>
                    <div className="text-sm font-medium text-gray-800">Guy Hawkins</div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
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

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {/* Top Breadcrumb */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Sellers</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Dashboard</span>
              <span>▶</span>
              <span>Seller</span>
              <span>▶</span>
              <span className="font-medium">Add Sellers</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8 max-w-4xl">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Seller</h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam senean ut velit mattis.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name Seller</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Input name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Input email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => handleInputChange('contact', e.target.value)}
                    placeholder="Input no handphone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Registration Date</label>
                  <input
                    type="text"
                    value={formData.registrationDate}
                    onChange={(e) => handleInputChange('registrationDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shop name</label>
                  <input
                    type="text"
                    value={formData.shopName}
                    onChange={(e) => handleInputChange('shopName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  rows={4}
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Input address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Save Seller
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddSellerForm;
