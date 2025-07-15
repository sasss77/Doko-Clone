

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Bell,
  MessageSquare,
  ChevronDown,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Logo from './assets/Doko Logo.png';

const ProductPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Thangka');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  const tabs = [
    { name: 'Thangka', count: 50 },
    { name: 'Singing bowl', count: 26 },
    { name: 'T-Shirt', count: 121 },
    { name: 'Musical instrument', count: 21 }
  ];

  const products = [
    {
      id: 'Q21231',
      name: 'Buddha painting',
      price: 2000,
      size: 'M',
      qty: 234,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Available',
      image: '🎨'
    },
    {
      id: 'Q21232',
      name: 'ganesh painting',
      price: 1500,
      size: 'XL',
      qty: 80,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Out of Stock',
      image: '🎨'
    },
    {
      id: 'Q21233',
      name: 'shiva jhalirab',
      price: 5700,
      size: 'L',
      qty: 50,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Available',
      image: '🎨'
    },
    {
      id: 'Q21234',
      name: 'mountain ranges',
      price: 8000,
      size: 'L',
      qty: 70,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Out of Stock',
      image: '🎨'
    },
    {
      id: 'Q21235',
      name: 'manjushree painting',
      price: 1799,
      size: 'S',
      qty: 120,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Available',
      image: '🎨'
    },
    {
      id: 'Q21236',
      name: 'water painting',
      price: 1749,
      size: 'M',
      qty: 170,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Out of Stock',
      image: '🎨'
    },
    {
      id: 'Q21237',
      name: 'gold carving buddha',
      price: 4500,
      size: 'S',
      qty: 150,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Out of Stock',
      image: '🎨'
    },
    {
      id: 'Q21238',
      name: '24kgold laxmi',
      price: 3700,
      size: 'M',
      qty: 200,
      date: '04/11/23',
      time: '8:25 PM',
      status: 'Available',
      image: '🎨'
    }
  ];

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedProducts(products.map(p => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId, checked) => {
    if (checked) {
      setSelectedProducts(prev => [...prev, productId]);
    } else {
      setSelectedProducts(prev => prev.filter(id => id !== productId));
    }
  };

  const isAllSelected = selectedProducts.length === products.length;
  const isIndeterminate = selectedProducts.length > 0 && selectedProducts.length < products.length;

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
              className="flex items-center p-3 rounded-lg cursor-pointer bg-red-500 text-white shadow"
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
        <main className="p-4 lg:p-6 flex-1">
          {/* Top Breadcrumb */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Product</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Dashboard</span>
              <span>▶</span>
              <span className="font-medium">Product</span>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for id, name product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filter</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Download className="h-4 w-4" />
                <span className="text-sm">Export</span>
              </button>
              <button
                onClick={() => navigate('/AddProduct')}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <Plus className="h-4 w-4" />
                <span className="text-sm">New Product</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-6">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                    activeTab === tab.name
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.name} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      QTY
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{product.image}</div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{product.id}</div>
                            <div className="text-sm text-gray-500">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.size}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.qty}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div>{product.date}</div>
                        <div className="text-xs text-gray-500">at {product.time}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          product.status === 'Available'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                1 - 10 of 13 Pages
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">The page on</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>1</option>
                  <option>2</option>
                </select>
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
