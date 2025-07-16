import React, { useState } from 'react';
import { Mail, Phone, MapPin, Search, Filter, UserPlus, MessageCircle, Eye, Star, X, Send, Calendar, Package, Clock, CheckCircle } from 'lucide-react';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showOrdersModal, setShowOrdersModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubject, setContactSubject] = useState('');

  const customers = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '+977-9841234567',
      address: 'Kathmandu, Nepal',
      orders: 15,
      totalSpent: 45670,
      joinedDate: '2023-06-15',
      rating: 4.8,
      isVip: true
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '+977-9841234568',
      address: 'Pokhara, Nepal',
      orders: 8,
      totalSpent: 23450,
      joinedDate: '2023-08-22',
      rating: 4.5,
      isVip: false
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com', 
      phone: '+977-9841234569',
      address: 'Lalitpur, Nepal',
      orders: 12,
      totalSpent: 34560,
      joinedDate: '2023-05-10',
      rating: 4.9,
      isVip: true
    },
    { 
      id: 4, 
      name: 'Sarah Wilson', 
      email: 'sarah@example.com', 
      phone: '+977-9841234570',
      address: 'Bhaktapur, Nepal',
      orders: 6,
      totalSpent: 18900,
      joinedDate: '2023-09-05',
      rating: 4.2,
      isVip: false
    }
  ];

  // Sample orders data for each customer
  const customerOrders = {
    1: [ // John Doe's orders
      { id: '#ORD001', date: '2024-01-15', amount: 3450, status: 'delivered', items: ['T-shirt with Tape Details', 'Designer Hoodie'] },
      { id: '#ORD005', date: '2024-01-10', amount: 2890, status: 'delivered', items: ['Casual Jeans'] },
      { id: '#ORD009', date: '2024-01-08', amount: 1749, status: 'delivered', items: ['Wireless Headphones'] },
      { id: '#ORD013', date: '2024-01-05', amount: 4200, status: 'delivered', items: ['Leather Wallet', 'Plant Pot Set'] },
      { id: '#ORD017', date: '2024-01-02', amount: 2100, status: 'delivered', items: ['Designer Hoodie'] }
    ],
    2: [ // Jane Smith's orders
      { id: '#ORD002', date: '2024-01-14', amount: 2890, status: 'shipped', items: ['Designer Hoodie'] },
      { id: '#ORD006', date: '2024-01-12', amount: 1749, status: 'delivered', items: ['T-shirt with Tape Details'] },
      { id: '#ORD010', date: '2024-01-09', amount: 3450, status: 'delivered', items: ['Casual Jeans', 'Leather Wallet'] }
    ],
    3: [ // Mike Johnson's orders
      { id: '#ORD003', date: '2024-01-13', amount: 1249, status: 'delivered', items: ['Casual Jeans'] },
      { id: '#ORD007', date: '2024-01-11', amount: 4200, status: 'delivered', items: ['Wireless Headphones', 'Plant Pot Set'] },
      { id: '#ORD011', date: '2024-01-07', amount: 2100, status: 'delivered', items: ['Designer Hoodie'] }
    ],
    4: [ // Sarah Wilson's orders
      { id: '#ORD004', date: '2024-01-12', amount: 3450, status: 'pending', items: ['T-shirt with Tape Details', 'Leather Wallet'] },
      { id: '#ORD008', date: '2024-01-06', amount: 1890, status: 'delivered', items: ['Plant Pot Set'] }
    ]
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getCustomerTier = (totalSpent) => {
    if (totalSpent >= 40000) return { tier: 'Gold', color: 'bg-yellow-100 text-yellow-800' };
    if (totalSpent >= 20000) return { tier: 'Silver', color: 'bg-gray-100 text-gray-800' };
    return { tier: 'Bronze', color: 'bg-orange-100 text-orange-800' };
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'shipped':
        return <Package size={16} className="text-blue-500" />;
      case 'pending':
        return <Clock size={16} className="text-yellow-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  const handleViewOrders = (customer) => {
    setSelectedCustomer(customer);
    setShowOrdersModal(true);
  };

  const handleContact = (customer) => {
    setSelectedCustomer(customer);
    setShowContactModal(true);
  };

  const handleSendMessage = () => {
    // In a real app, this would send the message via API
    console.log('Sending message to:', selectedCustomer.email);
    console.log('Subject:', contactSubject);
    console.log('Message:', contactMessage);
    
    // Show success message
    alert(`Message sent to ${selectedCustomer.name} successfully!`);
    
    // Reset form and close modal
    setContactMessage('');
    setContactSubject('');
    setShowContactModal(false);
  };

  // Orders Modal Component
  const OrdersModal = () => {
    const orders = customerOrders[selectedCustomer?.id] || [];
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCustomer?.name}'s Orders
              </h2>
              <p className="text-gray-600">Total: {orders.length} orders</p>
            </div>
            <button 
              onClick={() => setShowOrdersModal(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <Package className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{order.id}</h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-gray-900">Rs{order.amount.toLocaleString()}</p>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Items:</h4>
                  <div className="flex flex-wrap gap-2">
                    {order.items.map((item, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {orders.length === 0 && (
            <div className="text-center py-8">
              <Package size={48} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500">No orders found for this customer</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Contact Modal Component
  const ContactModal = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Contact {selectedCustomer?.name}
              </h2>
              <p className="text-gray-600">{selectedCustomer?.email}</p>
            </div>
            <button 
              onClick={() => setShowContactModal(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                placeholder="Enter message subject..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Type your message here..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-700 mb-2">Quick Templates:</h4>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setContactSubject('Order Follow-up');
                    setContactMessage('Hi ' + selectedCustomer?.name + ',\n\nI wanted to follow up on your recent order. How was your experience with us?\n\nBest regards,\nDoko Team');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 block"
                >
                  Order Follow-up Template
                </button>
                <button
                  onClick={() => {
                    setContactSubject('Special Offer');
                    setContactMessage('Hi ' + selectedCustomer?.name + ',\n\nWe have a special offer just for you! Get 20% off on your next order.\n\nBest regards,\nDoko Team');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 block"
                >
                  Special Offer Template
                </button>
                <button
                  onClick={() => {
                    setContactSubject('Thank You');
                    setContactMessage('Hi ' + selectedCustomer?.name + ',\n\nThank you for being a valued customer! We appreciate your continued support.\n\nBest regards,\nDoko Team');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 block"
                >
                  Thank You Template
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4 pt-4">
              <button
                onClick={() => setShowContactModal(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!contactSubject || !contactMessage}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
            <p className="text-gray-600 mt-1">Manage your customer relationships</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <UserPlus className="text-blue-500" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">VIP Customers</p>
              <p className="text-2xl font-bold text-gray-900">{customers.filter(c => c.isVip).length}</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-full">
              <Star className="text-yellow-500" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-bold text-gray-900">Rs{Math.round(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.reduce((sum, c) => sum + c.orders, 0)).toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <div className="text-green-500 text-2xl">💰</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">{(customers.reduce((sum, c) => sum + c.rating, 0) / customers.length).toFixed(1)}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <Star className="text-purple-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="name">Sort by Name</option>
            <option value="orders">Sort by Orders</option>
            <option value="totalSpent">Sort by Total Spent</option>
            <option value="joinedDate">Sort by Joined Date</option>
          </select>
        </div>
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => {
          const tierInfo = getCustomerTier(customer.totalSpent);
          return (
            <div key={customer.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {getInitials(customer.name)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{customer.name}</h3>
                    <p className="text-sm text-gray-600">Since {customer.joinedDate}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  {customer.isVip && (
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium mb-1">
                      VIP
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${tierInfo.color}`}>
                    {tierInfo.tier}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail size={16} />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{customer.address}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{customer.orders}</p>
                    <p className="text-sm text-gray-600">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">Rs{customer.totalSpent.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total Spent</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-medium text-gray-700">{customer.rating}</span>
                </div>
                <span className="text-sm text-gray-500">Rating</span>
              </div>

              <div className="flex space-x-2">
                <button 
                  onClick={() => handleViewOrders(customer)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-200 text-sm font-medium"
                >
                  <Eye size={16} className="inline mr-1" />
                  View Orders
                </button>
                <button 
                  onClick={() => handleContact(customer)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <MessageCircle size={16} className="inline mr-1" />
                  Contact
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modals */}
      {showOrdersModal && <OrdersModal />}
      {showContactModal && <ContactModal />}
    </div>
  );
};

export default Customers;
