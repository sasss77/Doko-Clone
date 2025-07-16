import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../../pages/seller/pages/Dashboard';
import Products from '../../pages/seller/pages/Products';
import Orders from '../../pages/seller/pages/Orders';
import Customers from '../../pages/seller/pages/Customers';
import Analytics from '../../pages/seller/pages/Analytics';
import Settings from '../../pages/seller/pages/Settings';

const SellerLayout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking outside or on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setSidebarOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      // Only close if sidebar is open and click is outside both sidebar and menu button
      if (sidebarOpen) {
        const sidebar = document.querySelector('.mobile-sidebar');
        const menuButton = document.querySelector('.menu-button');
        
        // Check if click is outside both sidebar and menu button
        if (sidebar && menuButton && 
            !sidebar.contains(event.target) && 
            !menuButton.contains(event.target)) {
          setSidebarOpen(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside); // Changed to mousedown
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard onTabChange={handleTabChange} />;
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      case 'customers':
        return <Customers />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="lg:ml-64 transition-all duration-300">
        <Header 
          activeTab={activeTab} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
