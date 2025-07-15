

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/Doko Logo.png';
import {
  Search, Filter, Download, Plus, Eye, Edit, Trash2,
  Bell, MessageSquare, ChevronLeftCircle, ChevronRightCircle, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

const customers = [
  { id: 1, customerId: 'ID 12452', name: 'ayush lal shrestha', contact: 'ayush@examp.com', phone: '+977986543210', membership: 'Regular', role: 'Active', address: '44800 jagati.bhaktapur' },
  { id: 2, customerId: 'ID 12451', name: 'hanish shrestha', contact: 'hanish@examp.com', phone: '+9779812345678', membership: 'Regular', role: 'Active', address: '44600 sallaghari.kathmandu' },
  { id: 3, customerId: 'ID 12453', name: 'krish khatri', contact: 'krish@examp.com', phone: '+977986543219', membership: 'Regular', role: 'Active', address: '44811 thimi.bhaktapur' },
  { id: 4, customerId: 'ID 12453', name: 'aishworya tamang', contact: 'tamang@examp.com', phone: '+977987687687', membership: 'Regular', role: 'Deleted', address: '33700 jagati.pokhara' },
  { id: 5, customerId: 'ID 12452', name: 'sadikshya gurung', contact: 'sadik@examp.com', phone: '+977900876687', membership: 'VIP', role: 'Deleted', address: 'jagati.pokharatucky 39495' },
  { id: 6, customerId: 'ID 12451', name: 'Leslie pradhan', contact: 'leslie@examp.com', phone: '+977986545678', membership: 'VIP', role: 'Active', address: '33700 jagati.pokhara' },
  { id: 7, customerId: 'ID 12345', name: 'Kristin joshi', contact: 'kristin@examp.com', phone: '+977988877667', membership: 'VIP', role: 'Suspended', address: '44600 darbarmarg.kathmandu' },
  { id: 8, customerId: 'ID 12451', name: 'bishwo maharjan', contact: 'bishwo@examp.com', phone: '+977955647890', membership: 'Regular', role: 'Active', address: '44600 baneshwor.kathmandu' }
];

export default function CustomerPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSidebarItem, setActiveSidebarItem] = useState('customers'); // customers or sellers or dashboard etc
  const [usersExpanded, setUsersExpanded] = useState(true); // toggle Users submenu
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filtered customers for search
  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.customerId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const handleSelectCustomer = (id) => {
    setSelectedCustomers(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedCustomers(
      selectedCustomers.length === filteredCustomers.length ? [] : filteredCustomers.map(c => c.id)
    );
  };

  // Sidebar main items (except Users, which has submenu)
  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊', path: '/AdminDashboard' },
    { key: 'users', label: 'Users', icon: '👥', hasSubmenu: true },
    { key: 'transactions', label: 'Transaction (441)', icon: '💳', path: '/Transaction' }, // if applicable
    { key: 'product', label: 'Product', icon: '📦', path: '/ProductAdmin' },
    { key: 'settings', label: 'Account & Settings', icon: '⚙️', path: '/PersonalAccount' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        z-50 flex flex-col
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center pt-4 pb-1">
          <img src={Logo} alt="Doko Logo" className="w-28 h-auto object-contain" />
        </div>

        {/* Sidebar Menu */}
        <div className="p-4 flex-1 overflow-auto pt-1">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-4">GENERAL</div>

          <nav className="space-y-2">
            {sidebarItems.map(item => {
              if (item.hasSubmenu) {
                return (
                  <div key={item.key}>
                    {/* Users main item */}
                    <div
                      onClick={() => setUsersExpanded(!usersExpanded)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer
                        ${['customers', 'sellers'].includes(activeSidebarItem) ? 'bg-red-500 text-white shadow' : 'text-gray-700 hover:bg-gray-100'}
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${usersExpanded ? 'rotate-90' : ''}`}
                        fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>

                    {/* Users submenu */}
                    {usersExpanded && (
                      <div className="ml-8 mt-1 flex flex-col space-y-1">
                        <div
                          onClick={() => {
                            setActiveSidebarItem('customers');
                            navigate('/CustomerPage');
                          }}
                          className={`cursor-pointer rounded px-3 py-2 text-sm
                            ${activeSidebarItem === 'customers' ? 'bg-red-500 text-white' : 'hover:bg-gray-100 text-gray-700'}
                          `}
                        >
                          Customers
                        </div>
                        <div
                          onClick={() => {
                            setActiveSidebarItem('sellers');
                            navigate('/Seller');
                          }}
                          className={`cursor-pointer rounded px-3 py-2 text-sm
                            ${activeSidebarItem === 'sellers' ? 'bg-red-500 text-white' : 'hover:bg-gray-100 text-gray-700'}
                          `}
                        >
                          Sellers
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={item.key}
                  onClick={() => {
                    setActiveSidebarItem(item.key);
                    navigate(item.path);
                  }}
                  className={`flex items-center p-3 rounded-lg cursor-pointer
                    ${activeSidebarItem === item.key ? 'bg-red-500 text-white shadow' : 'text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
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

            {/* Admin dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-gray-800">Guy Hawkins</div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
                {/* Dropdown arrow added here */}
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

        {/* Main Section */}
        <main className="p-6 flex flex-col flex-grow overflow-auto">
          {activeSidebarItem === 'customers' ? (
            <>
              {/* Title */}
              <div className="mb-6">
                <h1 className="text-xl font-semibold text-gray-800">Customer Dashboard</h1>
                <div className="text-sm text-gray-500">Dashboard ▶ Customers</div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <div className="relative w-full sm:w-96 mb-4 sm:mb-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for id, name Customer"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => navigate('/AddCustomer')}
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Customer
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                    <Filter className="h-4 w-4 mr-1" /> Filter
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                    <Download className="h-4 w-4 mr-1" /> Export
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-lg shadow overflow-x-auto flex-grow">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">
                        <input
                          type="checkbox"
                          checked={selectedCustomers.length === filteredCustomers.length && filteredCustomers.length > 0}
                          onChange={handleSelectAll}
                          className="text-red-500"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Membership Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Address</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredCustomers.slice(0, itemsPerPage).map(c => (
                      <tr key={c.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedCustomers.includes(c.id)}
                            onChange={() => handleSelectCustomer(c.id)}
                            className="text-red-500"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="text-red-500 font-medium text-xs">{c.customerId}</div>
                          <div className="text-gray-900 font-medium">{c.name}</div>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div>{c.contact}</div>
                          <div className="text-gray-500">{c.phone}</div>
                        </td>
                        <td className="px-6 py-4 text-sm">{c.membership}</td>
                        <td className="px-6 py-4 text-sm">{c.role}</td>
                        <td className="px-6 py-4 text-sm truncate max-w-xs">{c.address}</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex space-x-2">
                            <button className="text-gray-500 hover:text-gray-700" aria-label="View"><Eye className="w-4 h-4" /></button>
                            <button className="text-gray-500 hover:text-gray-700" aria-label="Edit"><Edit className="w-4 h-4" /></button>
                            <button className="text-red-500 hover:text-red-700" aria-label="Delete"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">
                  Showing {Math.min(itemsPerPage, filteredCustomers.length)} of {filteredCustomers.length} customers
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Items per page:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    {[10, 25, 50].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 border rounded disabled:opacity-50"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 border rounded disabled:opacity-50"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-6 text-gray-700 text-center">
              {activeSidebarItem === 'sellers' ? 'Sellers page is separate. Navigate there to view sellers.' : 'Select an option from the sidebar.'}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
