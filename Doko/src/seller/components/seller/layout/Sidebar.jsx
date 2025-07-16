import React from 'react';
import { 
  ShoppingBag, 
  Package, 
  Users, 
  TrendingUp, 
  Settings,
  LogOut,
  X,
  Menu
} from 'lucide-react';
import doko from "../../../assets/doko.png"

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ShoppingBag },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors ${
        active 
          ? 'bg-red-50 text-red-600 border-l-4 border-red-500' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-white shadow-lg h-screen fixed left-0 top-0 z-30">
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
                <img src={doko} alt="DOKO Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 px-4 py-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  active={activeTab === item.id}
                  onClick={() => setActiveTab(item.id)}
                />
              ))}
            </nav>
          </div>
          
          {/* Logout Section */}
          <div className="p-6 border-t border-gray-100">
            <button className="flex items-center space-x-3 text-gray-600 hover:text-red-500 transition-colors w-full px-4 py-3 rounded-lg hover:bg-gray-50">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header with Logo and Close Button */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
                  <img src={doko} alt="DOKO Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-bold text-gray-800">DOKO</span>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 px-4 py-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  active={activeTab === item.id}
                  onClick={() => setActiveTab(item.id)}
                />
              ))}
            </nav>
          </div>
          
          {/* Logout Section */}
          <div className="p-4 border-t border-gray-100">
            <button className="flex items-center space-x-3 text-gray-600 hover:text-red-500 transition-colors w-full px-4 py-3 rounded-lg hover:bg-gray-50">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
