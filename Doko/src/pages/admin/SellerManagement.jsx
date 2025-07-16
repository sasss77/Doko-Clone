import React, { useState } from 'react';
import { Store, Plus, Eye, Edit, Trash2, CheckCircle, XCircle, Clock } from 'lucide-react';
import Layout from '../../components/admin/Layout';
import StatusBadge from '../../components/admin/StatusBadge';

const SellerManagementPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showPendingApplications, setShowPendingApplications] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState(null);

  const [pendingApplications, setPendingApplications] = useState([
    { 
      id: 1, 
      name: 'New Electronics Store', 
      email: 'electronics@new.com', 
      appliedDate: '2024-07-10', 
      documents: 'Complete',
      businessType: 'Electronics'
    },
    { 
      id: 2, 
      name: 'Organic Foods Market', 
      email: 'organic@foods.com', 
      appliedDate: '2024-07-12', 
      documents: 'Pending',
      businessType: 'Food & Beverages'
    }
  ]);

  const [sellers, setSellers] = useState([
    { id: 1, name: 'TechStore Pro', email: 'tech@store.com', status: 'active', revenue: 1500000, commission: 150000, rating: 4.8, products: 45 },
    { id: 2, name: 'Fashion Hub', email: 'fashion@hub.com', status: 'active', revenue: 2500000, commission: 250000, rating: 4.6, products: 78 },
    { id: 3, name: 'Home Goods', email: 'home@goods.com', status: 'suspended', revenue: 800000, commission: 80000, rating: 3.2, products: 23 }
  ]);

  // Custom formatCurrency function for Rs.
  const formatCurrency = (amount) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  const handleApprove = (id) => {
    setPendingApplications(prev => prev.filter(app => app.id !== id));
  };

  const handleReject = (id) => {
    setPendingApplications(prev => prev.filter(app => app.id !== id));
  };

  const handleViewSeller = (seller) => {
    setSelectedSeller(seller);
    setIsViewModalOpen(true);
  };

  const handleEditSeller = (seller) => {
    setSelectedSeller(seller);
    setIsEditModalOpen(true);
  };

  const handleDeleteSeller = (sellerId) => {
    if (window.confirm('Are you sure you want to delete this seller?')) {
      setSellers(sellers.filter(seller => seller.id !== sellerId));
    }
  };

  const handleSaveEdit = (updatedSeller) => {
    setSellers(sellers.map(seller => 
      seller.id === updatedSeller.id ? updatedSeller : seller
    ));
    setIsEditModalOpen(false);
    setSelectedSeller(null);
  };

  const filteredSellers = sellers.filter(seller => {
    if (activeFilter === 'all') return true;
    return seller.status === activeFilter;
  });

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Seller Management</h1>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              <Plus className="w-4 h-4" />
              <span>Add Seller</span>
            </button>
            <button 
              onClick={() => setShowPendingApplications(!showPendingApplications)}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
            >
              <Clock className="w-4 h-4" />
              <span>Pending Applications ({pendingApplications.length})</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-sm text-gray-600">Total Sellers</p>
            <p className="text-2xl font-bold text-gray-900">{sellers.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-sm text-gray-600">Active Sellers</p>
            <p className="text-2xl font-bold text-green-600">{sellers.filter(s => s.status === 'active').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-sm text-gray-600">Pending Applications</p>
            <p className="text-2xl font-bold text-yellow-600">{pendingApplications.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-sm text-gray-600">Total Commission</p>
            <p className="text-2xl font-bold text-purple-600">
              {formatCurrency(sellers.reduce((sum, s) => sum + s.commission, 0))}
            </p>
          </div>
        </div>

        {showPendingApplications && pendingApplications.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pending Applications</h3>
              <button
                onClick={() => setShowPendingApplications(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              {pendingApplications.map((app) => (
                <div key={app.id} className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{app.name}</p>
                      <p className="text-sm text-gray-500">{app.email} • {app.businessType}</p>
                      <p className="text-sm text-gray-500">Applied: {app.appliedDate}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(app.id)}
                        className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleReject(app.id)}
                        className="flex items-center space-x-1 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex space-x-4">
            {['all', 'active', 'pending', 'suspended'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSellers.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <Store className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{seller.name}</div>
                        <div className="text-sm text-gray-500">{seller.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={seller.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(seller.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(seller.commission)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {seller.rating > 0 ? (
                      <div className="flex items-center">
                        <span>{seller.rating}</span>
                        <span className="text-yellow-400 ml-1">★</span>
                      </div>
                    ) : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {seller.products}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewSeller(seller)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditSeller(seller)}
                        className="text-yellow-600 hover:text-yellow-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteSeller(seller.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View Seller Modal */}
        {isViewModalOpen && selectedSeller && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Seller Details</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="text-sm text-gray-900">{selectedSeller.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-sm text-gray-900">{selectedSeller.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <StatusBadge status={selectedSeller.status} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Revenue</label>
                  <p className="text-sm text-gray-900">{formatCurrency(selectedSeller.revenue)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Commission</label>
                  <p className="text-sm text-gray-900">{formatCurrency(selectedSeller.commission)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rating</label>
                  <p className="text-sm text-gray-900">{selectedSeller.rating}★</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Products</label>
                  <p className="text-sm text-gray-900">{selectedSeller.products}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsViewModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Seller Modal */}
        {isEditModalOpen && selectedSeller && (
          <EditSellerModal 
            seller={selectedSeller} 
            onSave={handleSaveEdit}
            onCancel={() => setIsEditModalOpen(false)}
            formatCurrency={formatCurrency}
          />
        )}
      </div>
    </Layout>
  );
};

// Edit Seller Modal Component
const EditSellerModal = ({ seller, onSave, onCancel, formatCurrency }) => {
  const [formData, setFormData] = useState({
    name: seller.name,
    email: seller.email,
    status: seller.status,
    revenue: seller.revenue,
    commission: seller.commission,
    rating: seller.rating,
    products: seller.products
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...seller, ...formData });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Seller</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Revenue (Rs.)</label>
              <input
                type="number"
                value={formData.revenue}
                onChange={(e) => setFormData({...formData, revenue: parseFloat(e.target.value)})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={(e) => setFormData({...formData, rating: parseFloat(e.target.value)})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerManagementPage;
