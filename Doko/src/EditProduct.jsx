import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  CreditCard, 
  Settings, 
  Plus,
  Bell,
  Calendar
} from 'lucide-react';

export default function ProductManagementPage() {
  const [sidebarExpanded, setSidebarExpanded] = useState({
    users: false,
    sellers: false,
    customers: false
  });
  
  const [selectedPhoto, setSelectedPhoto] = useState(1);
  const [formData, setFormData] = useState({
    sku: 'yogavvijaya@gmail',
    productName: 'Story Kitadake',
    size: '44',
    color: 'Red White',
    category: 'handicraft',
    price: '1700',
    quantity: '2',
    status: 'Select status product'
  });

  const toggleSidebar = (item) => {
    setSidebarExpanded(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">30</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-bold text-gray-900">K</span>
                  <span className="text-red-500 font-bold">O</span>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
            </div>
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">1</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Guy Hawkins" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Guy Hawkins</span>
                <span className="text-xs text-gray-500">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen overflow-y-auto">
          <div className="p-6">
            <div className="space-y-6">
              {/* General Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">General</h3>
                <nav className="space-y-1">
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <BarChart3 className="w-4 h-4 mr-3 text-gray-400" />
                    Dashboard
                  </a>
                  
                  <div>
                    <button 
                      onClick={() => toggleSidebar('users')}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-3 text-gray-400" />
                        Users
                      </div>
                      {sidebarExpanded.users ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <div>
                    <button 
                      onClick={() => toggleSidebar('sellers')}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-3 text-gray-400" />
                        Sellers
                      </div>
                      {sidebarExpanded.sellers ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <div>
                    <button 
                      onClick={() => toggleSidebar('customers')}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-3 text-gray-400" />
                        Customers
                      </div>
                      {sidebarExpanded.customers ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <CreditCard className="w-4 h-4 mr-3 text-gray-400" />
                    Transaction (441)
                  </a>
                  
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <Users className="w-4 h-4 mr-3 text-gray-400" />
                    Customers
                  </a>
                  
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-white bg-red-500 rounded-lg">
                    <ShoppingCart className="w-4 h-4 mr-3 text-white" />
                    Product
                  </a>
                </nav>
              </div>
              
              {/* Tools Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Tools</h3>
                <nav className="space-y-1">
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <Settings className="w-4 h-4 mr-3 text-gray-400" />
                    Account & Settings
                  </a>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Bottom User Section */}
          <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Guy Hawkins" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Guy Hawkins</p>
                    <p className="text-xs text-gray-500">Admin</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Dashboard</span>
              <span>•</span>
              <span>Product</span>
              <span>•</span>
              <span className="text-red-500">Edit Product</span>
            </div>
          </nav>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900">Product</h1>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Information */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Product Information</h2>
                  <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam senes in velit mattis.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                      <input
                        type="text"
                        value={formData.sku}
                        onChange={(e) => handleInputChange('sku', e.target.value)}
                        className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                      <input
                        type="text"
                        value={formData.productName}
                        onChange={(e) => handleInputChange('productName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                        <input
                          type="text"
                          value={formData.size}
                          onChange={(e) => handleInputChange('size', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                        <input
                          type="text"
                          value={formData.color}
                          onChange={(e) => handleInputChange('color', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                        <select
                          value={formData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="handicraft">handicraft</option>
                          <option value="electronics">electronics</option>
                          <option value="clothing">clothing</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                        <input
                          type="text"
                          value={formData.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status Product</label>
                      <select
                        value={formData.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-500"
                      >
                        <option value="Select status product">Select status product</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Image Product */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Image Product</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    <span className="font-medium">Note:</span> Format photos .SVG, .PNG, or .JPG (Max size 4mb)
                  </p>
                  
                  <div className="space-y-4">
                    {/* Main Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                      <img src="/api/placeholder/80/80" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Additional Photos */}
                    <div className="grid grid-cols-3 gap-4">
                      {[2, 3, 4].map((photoNum) => (
                        <div
                          key={photoNum}
                          onClick={() => setSelectedPhoto(photoNum)}
                          className={`aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all hover:border-blue-400 ${
                            selectedPhoto === photoNum ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                          }`}
                        >
                          <div className="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                            <Plus className="w-4 h-4 text-gray-400" />
                          </div>
                          <span className="text-xs text-gray-500">Photo {photoNum}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Discard Changes
                </button>
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}