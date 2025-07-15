import React, { useState } from 'react';
import { Save, Camera, Bell, Shield, CreditCard, Store, User, Globe, Smartphone } from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [profileData, setProfileData] = useState({
    storeName: 'My Store',
    ownerName: 'John Doe',
    email: 'john@example.com',
    phone: '+977-9841234567',
    address: 'Kathmandu, Nepal',
    description: 'Welcome to my store! We offer high-quality products at competitive prices.',
    website: 'https://mystore.com'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    orderNotifications: true,
    emailAlerts: true,
    smsAlerts: false,
    marketingEmails: true
  });

  const menuItems = [
    { id: 'profile', label: 'Store Profile', icon: Store },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'payment', label: 'Payment', icon: CreditCard },
  ];

  const SettingsNav = () => (
    <div className="w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Settings</h3>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeSection === item.id 
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  const ProfileSettings = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Store Profile</h3>
      
      <div className="space-y-8">
        {/* Store Logo Section */}
        <div className="flex items-center space-x-8">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center group cursor-pointer hover:shadow-lg transition-all duration-200">
            <Camera className="text-gray-400 group-hover:text-gray-600" size={48} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Store Logo</h4>
            <p className="text-gray-600 mb-4">Upload a logo for your store (recommended size: 300x300px)</p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200">
              Upload New Logo
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Store Name</label>
            <input
              type="text"
              value={profileData.storeName}
              onChange={(e) => setProfileData({...profileData, storeName: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Owner Name</label>
            <input
              type="text"
              value={profileData.ownerName}
              onChange={(e) => setProfileData({...profileData, ownerName: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Store Address</label>
          <input
            type="text"
            value={profileData.address}
            onChange={(e) => setProfileData({...profileData, address: e.target.value})}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Store Description</label>
          <textarea
            value={profileData.description}
            onChange={(e) => setProfileData({...profileData, description: e.target.value})}
            rows="4"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Website URL</label>
          <input
            type="url"
            value={profileData.website}
            onChange={(e) => setProfileData({...profileData, website: e.target.value})}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="flex justify-end">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200">
            <Save size={20} />
            <span className="font-medium">Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Notification Settings</h3>
      
      <div className="space-y-8">
        {[
          {
            key: 'orderNotifications',
            title: 'Order Notifications',
            description: 'Get notified when you receive new orders',
            icon: <Bell size={24} className="text-blue-500" />
          },
          {
            key: 'emailAlerts',
            title: 'Email Alerts',
            description: 'Receive important updates via email',
            icon: <Globe size={24} className="text-green-500" />
          },
          {
            key: 'smsAlerts',
            title: 'SMS Alerts',
            description: 'Get SMS notifications for urgent matters',
            icon: <Smartphone size={24} className="text-purple-500" />
          },
          {
            key: 'marketingEmails',
            title: 'Marketing Emails',
            description: 'Receive updates about new features and promotions',
            icon: <Bell size={24} className="text-orange-500" />
          }
        ].map((setting) => (
          <div key={setting.key} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                {setting.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{setting.title}</h4>
                <p className="text-gray-600">{setting.description}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notificationSettings[setting.key]}
                onChange={(e) => setNotificationSettings({...notificationSettings, [setting.key]: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-500"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Security Settings</h3>
      
      <div className="space-y-8">
        {/* Change Password Section */}
        <div className="p-6 bg-gray-50 rounded-xl">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Shield className="text-blue-500" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Two-Factor Authentication</h4>
                <p className="text-gray-600">Add an extra layer of security to your account</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200">
              Enable 2FA
            </button>
          </div>
        </div>

        {/* Login History */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Login Activity</h4>
          <div className="space-y-3">
            {[
              { device: 'MacBook Pro', location: 'Kathmandu, Nepal', time: '2 hours ago', status: 'success' },
              { device: 'iPhone 14', location: 'Kathmandu, Nepal', time: '1 day ago', status: 'success' },
              { device: 'Windows PC', location: 'Pokhara, Nepal', time: '3 days ago', status: 'failed' }
            ].map((login, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${login.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{login.device}</p>
                    <p className="text-sm text-gray-600">{login.location}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{login.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200">
            Update Security Settings
          </button>
        </div>
      </div>
    </div>
  );

  const PaymentSettings = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Payment Settings</h3>
      
      <div className="space-y-8">
        {/* Bank Account Details */}
        <div className="p-6 bg-gray-50 rounded-xl">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Bank Account Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Bank Name</label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Account Number</label>
              <input
                type="text"
                placeholder="Enter account number"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Account Holder Name</label>
              <input
                type="text"
                placeholder="Enter account holder name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Swift Code</label>
              <input
                type="text"
                placeholder="Enter swift code"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Connected Payment Methods</h4>
          <div className="space-y-4">
            {[
              { name: 'PayPal', status: 'Connected', color: 'bg-blue-600', connected: true },
              { name: 'Stripe', status: 'Not connected', color: 'bg-purple-600', connected: false },
              { name: 'Bank Transfer', status: 'Connected', color: 'bg-green-600', connected: true },
              { name: 'Mobile Banking', status: 'Not connected', color: 'bg-orange-600', connected: false }
            ].map((method, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-8 ${method.color} rounded-lg flex items-center justify-center`}>
                    <div className="w-8 h-4 bg-white rounded opacity-80"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{method.name}</p>
                    <p className={`text-sm ${method.connected ? 'text-green-600' : 'text-gray-500'}`}>
                      {method.status}
                    </p>
                  </div>
                </div>
                <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  method.connected 
                    ? 'text-red-600 hover:bg-red-50' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}>
                  {method.connected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200">
            Save Payment Settings
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'payment':
        return <PaymentSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="flex space-x-8">
      <SettingsNav />
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;
