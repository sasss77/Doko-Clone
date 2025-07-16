import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Store, 
  ShoppingBag, 
  Package, 
  DollarSign, 
  BarChart, 
  Bell, 
  Shield, 
  Settings 
} from 'lucide-react';

const NavItem = ({ to, icon, label, badge, isActive }) => {
  return (
    <Link
      to={to}
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

const Navbar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin/dashboard', label: 'Overview', icon: <TrendingUp className="w-5 h-5" /> },
    { path: '/admin/UserManagement', label: 'User Management', icon: <Users className="w-5 h-5" /> },
    { path: '/admin/sellermanagement', label: 'Seller Management', icon: <Store className="w-5 h-5" />, badge: 2 },
    { path: '/admin/OrderManagement', label: 'Orders', icon: <ShoppingBag className="w-5 h-5" /> },
    { path: '/admin/Product', label: 'Products', icon: <Package className="w-5 h-5" /> },
    { path: '/admin/Financial', label: 'Financial Reports', icon: <DollarSign className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              isActive={location.pathname === item.path || (location.pathname === '/' && item.path === '/overview')}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
