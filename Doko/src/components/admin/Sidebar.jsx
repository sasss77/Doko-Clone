import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Store, 
  ShoppingBag, 
  Package, 
  DollarSign, 
  BarChart, 
  Shield, 
  Settings,
  Menu,
  X
} from 'lucide-react';

const SidebarItem = ({ to, icon, label, badge, isActive, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-red-50 text-red-700 border-l-4 border-red-700' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </Link>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin/dashboard', label: 'Overview', icon: <TrendingUp className="w-5 h-5" /> },
    { path: '/admin/UserManagement', label: 'User Management', icon: <Users className="w-5 h-5" /> },
    { path: '/admin/sellermanagement', label: 'Seller Management', icon: <Store className="w-5 h-5" />, badge: 2 },
    { path: '/admin/OrderManagement', label: 'Orders', icon: <ShoppingBag className="w-5 h-5" /> },
    { path: '/admin/Product', label: 'Products', icon: <Package className="w-5 h-5" /> },
    { path: '/admin/Financial', label: 'Financial Reports', icon: <DollarSign className="w-5 h-5" /> },
    { path: '/admin/Analytics', label: 'Analytics', icon: <BarChart className="w-5 h-5" /> },
    { path: '/admin/security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    { path: '/admin/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 z-40 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo/Brand area */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.path}
                  to={item.path}
                  icon={item.icon}
                  label={item.label}
                  badge={item.badge}
                  isActive={location.pathname === item.path}
                  onClick={closeSidebar}
                />
              ))}
            </div>
          </nav>

          {/* Footer section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer for desktop */}
      <div className="hidden lg:block w-64 flex-shrink-0" />
    </>
  );
};

export default Sidebar;
