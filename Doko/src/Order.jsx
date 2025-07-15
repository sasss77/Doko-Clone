import React, { useState } from 'react';
import { Search, Filter, Download, Plus, Eye, Edit, Trash2, ChevronDown, ChevronLeft, ChevronRight, Bell, Menu, X } from 'lucide-react';

const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: 'O1231',
      product: 'Kanky Kitadakate (Green)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Paid',
      status: 'Shipping',
      image: '/api/placeholder/40/40'
    },
    {
      id: 'O1231',
      product: 'Kanky Kitadakate (Green)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Unpaid',
      status: 'Cancelled',
      image: '/api/placeholder/40/40'
    },
    {
      id: 'O1231',
      product: 'Kanky Kitadakate (Green)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Paid',
      status: 'Shipping',
      image: '/api/placeholder/40/40'
    },
    {
      id: 'O1231',
      product: 'Story Honzo (Cream)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Paid',
      status: 'Shipping',
      image: '/api/placeholder/40/40'
    },
    {
      id: 'O1231',
      product: 'Kanky Kitadakate (Green)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Unpaid',
      status: 'Cancelled',
      image: '/api/placeholder/40/40'
    },
    {
      id: 'O1231',
      product: 'Kanky Kitadakate (Green)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Paid',
      status: 'Shipping',
      image: '/api/placeholder/40/40'
    },
    {
      id: 'O1231',
      product: 'Berge Coffe (Navy)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Unpaid',
      status: 'Cancelled',
      image: '/api/placeholder/40/40'
    },
    {
      id: 'O1231',
      product: 'Story Honzo (Cream)',
      customer: 'Leslie Alexander',
      price: '$21.78',
      date: '04/17/23',
      payment: 'Unpaid',
      status: 'Cancelled',
      image: '/api/placeholder/40/40'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Orders (441)', active: true },
    { id: 'shipping', label: 'Shipping (100)', active: false },
    { id: 'completed', label: 'Completed (300)', active: false },
    { id: 'cancelled', label: 'Cancel (41)', active: false }
  ];

  const sidebarItems = [
    { icon: '📊', label: 'Dashboard', active: false },
    { icon: '👥', label: 'Users', active: false, hasSubmenu: true },
    { icon: '🏪', label: 'Sellers', active: false },
    { icon: '👤', label: 'Customers', active: false },
    { icon: '📦', label: 'Transaction (441)', active: true },
    { icon: '👥', label: 'Customers', active: false },
    { icon: '📦', label: 'Product', active: false }
  ];

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((_, index) => index));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shipping': return 'bg-purple-100 text-purple-600';
      case 'Cancelled': return 'bg-red-100 text-red-600';
      case 'Completed': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getPaymentColor = (payment) => {
    switch (payment) {
      case 'Paid': return 'bg-green-100 text-green-600';
      case 'Unpaid': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <span className="font-bold text-xl">KRO</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">GENERAL</div>
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div key={index} className="group">
                <div className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  item.active 
                    ? 'bg-red-500 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  )}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">GH</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">Guy Hawkins</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                <span>Dashboard</span>
                <span>›</span>
                <span>Orders</span>
                <span>›</span>
                <span className="text-gray-900 font-medium">All Orders</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="relative">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                  <span className="text-white text-sm font-medium">4</span>
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">4</span>
                </span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium">Guy Hawkins</div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Orders</h1>
            
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for id, name product..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg">
                  <Plus className="w-4 h-4" />
                  <span>New Order</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    tab.id === 'all' 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="w-12 px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                          checked={selectedOrders.length === orders.length}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Orders</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Customer</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Price</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Date</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Payment</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Status</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Action</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                            checked={selectedOrders.includes(index)}
                            onChange={() => handleSelectOrder(index)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-lg mr-3 flex-shrink-0"></div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{order.id}</div>
                              <div className="text-sm text-gray-500">{order.product}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{order.customer}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{order.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{order.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPaymentColor(order.payment)}`}>
                            {order.payment}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <Eye className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <Edit className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <Trash2 className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      1 - 10 of 15 Pages
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-700">This page on</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div className="flex space-x-1">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;