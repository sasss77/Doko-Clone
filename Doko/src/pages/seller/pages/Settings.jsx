import React, { useState, useRef } from 'react';
import { Save, Camera, Bell, Shield, CreditCard, Store, User, Globe, Smartphone, Upload, X } from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

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
  ];

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, or GIF)');
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert('File size should be less than 5MB');
        return;
      }

      setLogoFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      // Create a fake event object to reuse handleFileSelect
      const fakeEvent = {
        target: {
          files: [file]
        }
      };
      handleFileSelect(fakeEvent);
    }
  };

  // Upload logo function
  const uploadLogo = async () => {
    if (!logoFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('logo', logoFile);
      formData.append('storeName', profileData.storeName);

      // Simulate API call - replace with your actual API endpoint
      const response = await fetch('/api/upload-logo', {
        method: 'POST',
        body: formData,
        headers: {
          // Don't set Content-Type header, let browser set it with boundary
          'Authorization': `Bearer ${localStorage.getItem('token')}` // if you have auth
        }
      });

      if (response.ok) {
        const result = await response.json();
        setUploadProgress(100);
        setTimeout(() => {
          setIsUploading(false);
          setUploadProgress(0);
          alert('Logo uploaded successfully!');
          // You can update the profile data with the new logo URL
          // setProfileData(prev => ({ ...prev, logoUrl: result.logoUrl }));
        }, 500);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setIsUploading(false);
      setUploadProgress(0);
      alert('Upload failed. Please try again.');
    }

    clearInterval(progressInterval);
  };

  // Remove selected logo
  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Open file dialog
  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

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
        <div className="flex items-start space-x-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Logo Display */}
            <div 
              className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center group cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-gray-300 hover:border-red-400 relative overflow-hidden"
              onClick={openFileDialog}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {logoPreview ? (
                <div className="relative w-full h-full">
                  <img 
                    src={logoPreview} 
                    alt="Logo preview" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={32} />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Camera className="text-gray-400 group-hover:text-gray-600 mx-auto mb-2" size={32} />
                  <p className="text-xs text-gray-500 group-hover:text-gray-700">Click or drag to upload</p>
                </div>
              )}
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={openFileDialog}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-200 text-sm"
              >
                <Upload size={16} className="inline mr-2" />
                Choose File
              </button>
              
              {logoFile && (
                <>
                  <button 
                    onClick={uploadLogo}
                    disabled={isUploading}
                    className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-all duration-200 text-sm disabled:opacity-50"
                  >
                    {isUploading ? 'Uploading...' : 'Upload'}
                  </button>
                  
                  <button 
                    onClick={removeLogo}
                    className="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600 transition-all duration-200 text-sm"
                  >
                    <X size={16} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Logo Info */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Store Logo</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Recommended size: 300x300px</p>
              <p>• Maximum file size: 5MB</p>
              <p>• Supported formats: JPEG, PNG, GIF</p>
              <p>• Square images work best</p>
            </div>
            
            {logoFile && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Selected file:</p>
                <p className="text-sm text-gray-600">{logoFile.name}</p>
                <p className="text-xs text-gray-500">
                  Size: {(logoFile.size / 1024 / 1024).toFixed(2)}MB
                </p>
              </div>
            )}
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
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

        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200">
            Update Security Settings
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
