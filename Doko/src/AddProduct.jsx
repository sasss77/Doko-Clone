import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Bell,
  MessageSquare,
  ChevronDown,
  Image as ImageIcon
} from 'lucide-react';
import Logo from './assets/Doko Logo.png';

const AddProductPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);  // same default as AddSellerForm
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Your original form state (unchanged)
  const [formData, setFormData] = useState({
    sku: '',
    productName: '',
    size: '',
    color: '',
    category: '',
    price: '',
    quantity: '',
    status: ''
  });
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (photoNumber) => {
    const newImage = {
      id: photoNumber,
      name: `Photo ${photoNumber}`,
      url: '/api/placeholder/120/120'
    };
    setUploadedImages(prev => [...prev.filter(img => img.id !== photoNumber), newImage]);
  };

  const handleSaveProduct = () => {
    console.log('Saving product:', formData);
    // Save logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar from AddSellerForm */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 flex flex-col`}>
        <div className="flex items-center justify-center pt-4 pb-1">
          <img src={Logo} alt="Doko Logo" className="w-28 h-auto object-contain" />
        </div>

        <div className="p-4 flex-1 overflow-auto pt-1">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-4">GENERAL</div>
          <nav className="space-y-2">
            <div
              onClick={() => navigate('/AdminDashboard')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">📊</span>
              <span className="text-sm font-medium">Dashboard</span>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center p-3 rounded-lg cursor-pointer bg-red-500 text-white shadow">
                <span className="mr-3">👥</span>
                <span className="text-sm font-medium">Users</span>
                {/* Sidebar arrow */}
                <svg
                  className="w-4 h-4 ml-auto transition-transform duration-200 rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
              <div
                onClick={() => navigate('/Customer')}
                className="cursor-pointer rounded px-6 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Customers
              </div>
              <div
                onClick={() => navigate('/Seller')}
                className="cursor-pointer rounded px-6 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Sellers
              </div>
            </div>
            <div
              onClick={() => navigate('/Transaction')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">💳</span>
              <span className="text-sm font-medium">Transaction (441)</span>
            </div>
            <div
              onClick={() => navigate('/ProductAdmin')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">📦</span>
              <span className="text-sm font-medium">Product</span>
            </div>
            <div
              onClick={() => navigate('/PersonalAccount')}
              className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3">⚙️</span>
              <span className="text-sm font-medium">Account & Settings</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main content wrapper with margin left based on sidebar open */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} min-h-screen bg-gray-50`}>

        {/* Navbar from AddSellerForm */}
        <header className="bg-[#e9e9e9] px-6 py-3 flex justify-between items-center shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 p-2 rounded hover:bg-gray-200"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? (
              <ChevronLeftCircle className="w-6 h-6" />
            ) : (
              <ChevronRightCircle className="w-6 h-6" />
            )}
          </button>

          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600" />
            <MessageSquare className="h-5 w-5 text-gray-600" />
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div className="hidden sm:flex items-center space-x-1">
                  <div>
                    <div className="text-sm font-medium text-gray-800">Guy Hawkins</div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate('/Login');
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* YOUR ORIGINAL MAIN CONTENT BELOW - NO CHANGE AT ALL */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Product Information</h2>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam semper in velit mattis.</p>
                </div>

                <div className="space-y-6">
                  {/* SKU */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
                    <input
                      type="text"
                      placeholder="Input no SKU"
                      value={formData.sku}
                      onChange={(e) => handleInputChange('sku', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    />
                  </div>

                  {/* Product Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      placeholder="Input product name"
                      value={formData.productName}
                      onChange={(e) => handleInputChange('productName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    />
                  </div>

                  {/* Size and Color */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                      <input
                        type="text"
                        placeholder="Input Price"
                        value={formData.size}
                        onChange={(e) => handleInputChange('size', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                      <input
                        type="text"
                        placeholder="Color"
                        value={formData.color}
                        onChange={(e) => handleInputChange('color', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Product Category and Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                      <div className="relative">
                        <select
                          value={formData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 appearance-none bg-white text-gray-400"
                        >
                          <option value="">Select product category</option>
                          <option value="sneakers">Sneakers</option>
                          <option value="jacket">Jacket</option>
                          <option value="tshirt">T-Shirt</option>
                          <option value="bag">Bag</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                      <input
                        type="text"
                        placeholder="Input Price"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <input
                      type="text"
                      placeholder="Input stock"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    />
                  </div>

                  {/* Status Product */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status Product</label>
                    <div className="relative">
                      <select
                        value={formData.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 appearance-none bg-white text-gray-400"
                      >
                        <option value="">Select status product</option>
                        <option value="available">Available</option>
                        <option value="out-of-stock">Out of Stock</option>
                        <option value="discontinued">Discontinued</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Product */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Image Product</h2>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Note:</span> Format photos: SVG, PNG, or JPG (Max size 4mb)
                  </p>
                </div>

                {/* Image Upload Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[1, 2, 3, 4].map((photoNumber) => (
                    <div key={photoNumber} className="relative group">
                      <div 
                        onClick={() => handleImageUpload(photoNumber)}
                        className="w-full h-24 border-2 border-dashed border-blue-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                      >
                        <ImageIcon className="h-6 w-6 text-blue-400 mb-1" />
                        <span className="text-xs text-blue-500 font-medium">Photo {photoNumber}</span>
                      </div>
                      {uploadedImages.find(img => img.id === photoNumber) && (
                        <div className="absolute inset-0 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-green-600 font-medium">Uploaded</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Save Button */}
                <button
                  onClick={handleSaveProduct}
                  className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Save Product
                </button>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default AddProductPage;
