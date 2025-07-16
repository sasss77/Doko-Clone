import React, { useState } from 'react';
import { 
  Users, 
  Store, 
  DollarSign, 
  ShoppingBag, 
  Plus, 
  TrendingUp, 
  TrendingDown,
  AlertCircle,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/admin/Layout';


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
    },
    {
      title: 'Revenue',
      value: 'Rs. 9,51,450',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'green'
    }
  ];

  const recentActivity = [
    { 
      id: 1, 
      action: 'New user registered', 
      time: '2 min ago', 
      type: 'user',
      status: 'success'
    },
    { 
      id: 2, 
      action: 'Seller application approved', 
      time: '5 min ago', 
      type: 'seller',
      status: 'success'
    },
    { 
      id: 3, 
      action: 'High-value order placed', 
      time: '10 min ago', 
      type: 'order',
      status: 'success'
    },
    { 
      id: 4, 
      action: 'Payment failed', 
      time: '15 min ago', 
      type: 'payment',
      status: 'error'
    },
    { 
      id: 5, 
      action: 'Seller verification pending', 
      time: '20 min ago', 
      type: 'seller',
      status: 'warning'
    }
  ];

  const pendingActions = [
    { id: 1, action: 'Seller applications to review', count: 12 },
    { id: 2, action: 'Products pending approval', count: 28 },
    { id: 3, action: 'Customer complaints', count: 5 }
  ];

  const handleUserManagement = () => {
    navigate('/admin/UserManagement');
  };

  const handleReviewSellers = () => {
    navigate('/admin/sellermanagement');
  };

  const handleGenerateReport = () => {
    navigate('/admin/Financial');
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <div className="w-2 h-2 bg-red-500 rounded-full"></div>;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        </div>

        {/* Simplified Metrics without Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg bg-${metric.color}-100 text-${metric.color}-600`}>
                  {metric.icon}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                <p className="text-sm text-gray-600">{metric.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity and Pending Actions Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  {getStatusIcon(item.status)}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.action}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Actions</h3>
            <div className="space-y-3">
              {pendingActions.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              onClick={handleUserManagement}
              className="flex items-center space-x-2 p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>User Management</span>
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
