import React, { useState } from 'react';
import { Users, Store, DollarSign, ShoppingBag, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MetricCard from '../components/MetricCard';

const OverviewPage = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      title: 'Total Users',
      value: '15,420',
      icon: <Users className="w-6 h-6" />,
      color: 'red'
    },
    {
      title: 'Active Sellers',
      value: '1,250',
      icon: <Store className="w-6 h-6" />,
      color: 'red'
    },
    {
      title: 'Total Orders',
      value: '8,540',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'red'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'New user registered', time: '2 min ago', type: 'user' },
    { id: 2, action: 'Seller application approved', time: '5 min ago', type: 'seller' },
    { id: 3, action: 'High-value order placed', time: '10 min ago', type: 'order' },
  ];

  const handleAddUser = () => {
    navigate('/admin/UserManagement');
  };

  const handleReviewSellers = () => {
    navigate('/admin/sellermanagement');
  };

  const handleGenerateReport = () => {
    navigate('/admin/Financial');
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              onClick={handleAddUser}
              className="flex items-center space-x-2 p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Add User</span>
            </button>
            <button 
              onClick={handleReviewSellers}
              className="flex items-center space-x-2 p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Store className="w-5 h-5" />
              <span>Review Sellers</span>
            </button>
            <button 
              onClick={handleGenerateReport}
              className="flex items-center space-x-2 p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OverviewPage;
