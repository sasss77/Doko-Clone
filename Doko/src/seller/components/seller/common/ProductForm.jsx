import React, { useState, useRef } from 'react';
import { X, Upload, Plus, Minus, Image, Trash2 } from 'lucide-react';

const ProductForm = ({ onClose, onSave, product = null }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || '',
    stock: product?.stock || '',
    category: product?.category || '',
    images: product?.images || [],
    variants: product?.variants || []
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, images: selectedImages });
  };

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    imageFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: Date.now() + Math.random(),
          file: file,
          url: e.target.result,
          name: file.name
        };
        setSelectedImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const removeImage = (imageId) => {
    setSelectedImages(prev => prev.filter(img => img.id !== imageId));
  };

  const addVariant = () => {
    setFormData(prev => ({
      ...prev,
      variants: [...prev.variants, { size: '', color: '', stock: '', price: '' }]
    }));
  };

  const removeVariant = (index) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Describe your product..."
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price (Rs)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Stock Quantity</label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                    <option value="home">Home & Garden</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Images</h3>
            
            {/* Image Upload Area */}
            <div 
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                isDragging 
                  ? 'border-red-400 bg-red-50' 
                  : 'border-gray-300 hover:border-red-400'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center">
                <div className="p-4 bg-gray-100 rounded-full mb-4">
                  <Upload className="text-gray-400" size={48} />
                </div>
                <p className="text-gray-600 text-lg mb-2">
                  {isDragging ? 'Drop images here' : 'Drag and drop images here'}
                </p>
                <p className="text-gray-500 text-sm mb-4">or click to browse files</p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Choose Files
                </button>
              </div>
              <input 
                ref={fileInputRef}
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden"
                onChange={handleImageSelect}
              />
            </div>

            {/* Selected Images Preview */}
            {selectedImages.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Selected Images ({selectedImages.length})</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <img 
                        src={image.url} 
                        alt={image.name}
                        className="w-full h-24 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(image.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <Trash2 size={14} />
                      </button>
                      <p className="text-xs text-gray-500 mt-1 truncate">{image.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Variants */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Product Variants</h3>
              <button
                type="button"
                onClick={addVariant}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
              >
                <Plus size={16} />
                <span>Add Variant</span>
              </button>
            </div>
            
            {formData.variants.length > 0 && (
              <div className="space-y-3">
                <div className="grid grid-cols-5 gap-3 text-sm font-medium text-gray-600 pb-2">
                  <span>Size</span>
                  <span>Color</span>
                  <span>Stock</span>
                  <span>Price</span>
                  <span>Action</span>
                </div>
                {formData.variants.map((variant, index) => (
                  <div key={index} className="grid grid-cols-5 gap-3">
                    <input
                      type="text"
                      placeholder="XL, L, M..."
                      value={variant.size}
                      onChange={(e) => {
                        const newVariants = [...formData.variants];
                        newVariants[index].size = e.target.value;
                        setFormData(prev => ({ ...prev, variants: newVariants }));
                      }}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Red, Blue..."
                      value={variant.color}
                      onChange={(e) => {
                        const newVariants = [...formData.variants];
                        newVariants[index].color = e.target.value;
                        setFormData(prev => ({ ...prev, variants: newVariants }));
                      }}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="10"
                      value={variant.stock}
                      onChange={(e) => {
                        const newVariants = [...formData.variants];
                        newVariants[index].stock = e.target.value;
                        setFormData(prev => ({ ...prev, variants: newVariants }));
                      }}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="1500"
                      value={variant.price}
                      onChange={(e) => {
                        const newVariants = [...formData.variants];
                        newVariants[index].price = e.target.value;
                        setFormData(prev => ({ ...prev, variants: newVariants }));
                      }}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => removeVariant(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
            >
              {product ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
