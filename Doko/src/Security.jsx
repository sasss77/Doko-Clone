

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/Doko Logo.png';
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Bell,
  MessageSquare,
  ChevronDown,
  Eye,
  EyeOff,
  Check,
} from 'lucide-react';

export default function SecurityPasswordPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [passwordVisibility, setPasswordVisibility] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // You can add real validation logic here
  const [passwordRequirements] = useState({
    minLength: true,
    upperLower: true,
    specialChars: true,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

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

          <div
            onClick={() => navigate('/AdminDashboard')}
            className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
          >
            <span className="mr-3">📊</span>
            <span className="text-sm font-medium">Dashboard</span>
          </div>

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

          {/* Active page highlight */}
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

        {/* Breadcrumb */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="text-sm text-gray-500 mb-6">
            <span>Dashboard</span> <span className="mx-1">▶</span>{' '}
            <span className="text-gray-700 font-medium cursor-pointer" onClick={() => navigate('/PersonalAccount')}>
              Account & Settings
            </span>{' '}
            <span className="mx-1">▶</span>{' '}
            <span className="text-gray-700 font-medium">Security</span>
          </div>

          {/* Security Password Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Security Settings - Change Password</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Old Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
                <div className="relative">
                  <input
                    type={passwordVisibility.old ? 'text' : 'password'}
                    value={formData.oldPassword}
                    onChange={(e) => handleInputChange('oldPassword', e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('old')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {passwordVisibility.old ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <input
                    type={passwordVisibility.new ? 'text' : 'password'}
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('new')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {passwordVisibility.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={passwordVisibility.confirm ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('confirm')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {passwordVisibility.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="space-y-3 mb-6 max-w-md">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    passwordRequirements.minLength ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  {passwordRequirements.minLength && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${passwordRequirements.minLength ? 'text-green-600' : 'text-gray-500'}`}>
                  Minimum 8 characters
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    passwordRequirements.upperLower ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  {passwordRequirements.upperLower && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${passwordRequirements.upperLower ? 'text-green-600' : 'text-gray-500'}`}>
                  Use uppercase and lowercase letters
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    passwordRequirements.specialChars ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  {passwordRequirements.specialChars && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${passwordRequirements.specialChars ? 'text-green-600' : 'text-gray-500'}`}>
                  Use special characters (e.g., !, @, #, $, %)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
                Update Password
              </button>
              <button
                onClick={() => navigate('/PersonalAccount')}
                className="px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
