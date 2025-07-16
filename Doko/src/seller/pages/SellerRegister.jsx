import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Store, FileText, Upload, AlertCircle, Building, CreditCard, Globe } from 'lucide-react';


const SellerRegister = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    personalAddress: '',
    
    // Business Information
    storeName: '',
    storeDescription: '',
    businessType: '',
    businessAddress: '',
    businessPhone: '',
    businessEmail: '',
    
    // Security
    password: '',
    confirmPassword: '',
    
    // Documents
    documents: [],
    
    // Agreements
    agreeToTerms: false,
    agreeToSellerTerms: false,
    
    // Online Presence
    website: '',
    facebook: '',
    instagram: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const businessTypes = [
    'Sole Proprietorship',
    'Partnership',
    'Private Limited Company',
    'Public Limited Company',
    'LLC',
    'Individual/Freelancer'
  ];

  const documentTypes = [
    'Business License',
    'Tax Certificate',
    'Identity Proof',
    'Address Proof',
    'Bank Statement',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'];
    
    const validFiles = files.filter(file => {
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      return file.size <= maxSize && allowedTypes.includes(fileExtension);
    });
    
    if (validFiles.length !== files.length) {
      alert('Some files were rejected. Please ensure files are under 5MB and in supported formats.');
    }
    
    // Check if total documents exceed limit
    if (formData.documents.length + validFiles.length > 10) {
      alert('Maximum 10 documents allowed. Please remove some files first.');
      return;
    }
    
    // Add category property to each file
    const filesWithCategory = validFiles.map(file => ({
      ...file,
      category: ''
    }));
    
    setFormData({
      ...formData,
      documents: [...formData.documents, ...filesWithCategory]
    });
  };

  const removeDocument = (index) => {
    const newDocuments = formData.documents.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      documents: newDocuments
    });
  };

  const handleDocumentCategoryChange = (index, category) => {
    const updatedDocuments = [...formData.documents];
    updatedDocuments[index] = { ...updatedDocuments[index], category };
    
    setFormData({
      ...formData,
      documents: updatedDocuments
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
      minLength: password.length >= minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecial
    };
  };

  const validateURL = (url) => {
    if (!url) return true; // Optional field
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Personal Information Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name can only contain letters and spaces';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name can only contain letters and spaces';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Personal email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Personal phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    if (!formData.personalAddress.trim()) {
      newErrors.personalAddress = 'Personal address is required';
    } else if (formData.personalAddress.trim().length < 10) {
      newErrors.personalAddress = 'Please provide a complete address';
    }

    // Business Information Validation
    if (!formData.storeName.trim()) {
      newErrors.storeName = 'Store name is required';
    } else if (formData.storeName.trim().length < 2) {
      newErrors.storeName = 'Store name must be at least 2 characters';
    } else if (formData.storeName.trim().length > 100) {
      newErrors.storeName = 'Store name must be less than 100 characters';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Business type is required';
    }

    if (!formData.businessAddress.trim()) {
      newErrors.businessAddress = 'Business address is required';
    } else if (formData.businessAddress.trim().length < 10) {
      newErrors.businessAddress = 'Please provide a complete business address';
    }

    if (!formData.businessPhone.trim()) {
      newErrors.businessPhone = 'Business phone number is required';
    } else if (!validatePhone(formData.businessPhone)) {
      newErrors.businessPhone = 'Please enter a valid business phone number (10-15 digits)';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!validateEmail(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid business email address';
    }

    // REMOVED: Business email different from personal email validation
    // REMOVED: Business phone different from personal phone validation

    // Online Presence Validation
    if (formData.website && !validateURL(formData.website)) {
      newErrors.website = 'Please enter a valid website URL';
    }

    if (formData.facebook && !validateURL(formData.facebook)) {
      newErrors.facebook = 'Please enter a valid Facebook URL';
    }

    if (formData.instagram && !validateURL(formData.instagram)) {
      newErrors.instagram = 'Please enter a valid Instagram URL';
    }

    // Security Validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.minLength) {
        newErrors.password = 'Password must be at least 8 characters long';
      } else if (!passwordValidation.hasUpperCase) {
        newErrors.password = 'Password must contain at least one uppercase letter';
      } else if (!passwordValidation.hasLowerCase) {
        newErrors.password = 'Password must contain at least one lowercase letter';
      } else if (!passwordValidation.hasNumbers) {
        newErrors.password = 'Password must contain at least one number';
      } else if (!passwordValidation.hasSpecial) {
        newErrors.password = 'Password must contain at least one special character';
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Store description validation
    if (formData.storeDescription && formData.storeDescription.trim().length > 500) {
      newErrors.storeDescription = 'Store description must be less than 500 characters';
    }

    // Document validation - MANDATORY (Minimum 1 document)
    if (formData.documents.length === 0) {
      newErrors.documents = 'At least one business document is required for verification';
    } else {
      // Check if all documents have categories assigned
      const unCategorizedDocs = formData.documents.filter(doc => !doc.category);
      if (unCategorizedDocs.length > 0) {
        newErrors.documents = 'Please assign categories to all uploaded documents';
      }
    }

    // Agreements Validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms and Conditions';
    }

    if (!formData.agreeToSellerTerms) {
      newErrors.agreeToSellerTerms = 'You must agree to the Seller Agreement';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      
      // Scroll to first error
      const firstErrorElement = document.querySelector('.border-red-500');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      // Show specific message for document errors
      if (validationErrors.documents) {
        alert('Please upload at least one business document before submitting the form.');
      }
      
      return;
    }
    
    // Handle seller registration logic here
    console.log('Seller registration data:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Seller registration successful! Your documents are being reviewed.');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Start selling on DOKO</h2>
          <p className="mt-2 text-gray-600">
            Join thousands of sellers and grow your business
          </p>
        </div>

        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          {/* Account Type Indicator */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center space-x-2">
            <Store className="text-blue-500" size={20} />
            <span className="text-blue-700 font-medium">Creating Seller Account</span>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                    maxLength={50}
                  />
                </div>
                {errors.firstName && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                    maxLength={50}
                  />
                </div>
                {errors.lastName && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.lastName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your personal email"
                    maxLength={100}
                  />
                </div>
                {errors.email && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                    maxLength={15}
                  />
                </div>
                {errors.phone && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.phone}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="personalAddress" className="block text-sm font-medium text-gray-700 mb-2">
                Personal Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  id="personalAddress"
                  name="personalAddress"
                  value={formData.personalAddress}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    errors.personalAddress ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your complete personal address"
                  maxLength={200}
                />
              </div>
              {errors.personalAddress && (
                <div className="mt-1 flex items-center text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.personalAddress}
                </div>
              )}
            </div>
          </div>

          {/* Business Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-2">
                    Store Name *
                  </label>
                  <div className="relative">
                    <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="storeName"
                      name="storeName"
                      type="text"
                      value={formData.storeName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                        errors.storeName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your store name"
                      maxLength={100}
                    />
                  </div>
                  {errors.storeName && (
                    <div className="mt-1 flex items-center text-red-500 text-sm">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.storeName}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.businessType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <div className="mt-1 flex items-center text-red-500 text-sm">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.businessType}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="storeDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Store Description
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    id="storeDescription"
                    name="storeDescription"
                    value={formData.storeDescription}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.storeDescription ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe your store and what you sell..."
                    maxLength={500}
                  />
                </div>
                <div className="mt-1 text-sm text-gray-500 text-right">
                  {formData.storeDescription.length}/500
                </div>
                {errors.storeDescription && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.storeDescription}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                        errors.businessEmail ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter business email"
                      maxLength={100}
                    />
                  </div>
                  {errors.businessEmail && (
                    <div className="mt-1 flex items-center text-red-500 text-sm">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.businessEmail}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="businessPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="businessPhone"
                      name="businessPhone"
                      type="tel"
                      value={formData.businessPhone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                        errors.businessPhone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter business phone"
                      maxLength={15}
                    />
                  </div>
                  {errors.businessPhone && (
                    <div className="mt-1 flex items-center text-red-500 text-sm">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.businessPhone}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    id="businessAddress"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.businessAddress ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your complete business address"
                    maxLength={200}
                  />
                </div>
                {errors.businessAddress && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.businessAddress}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Online Presence */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Online Presence (Optional)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.website ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="https://yourwebsite.com"
                    maxLength={200}
                  />
                </div>
                {errors.website && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.website}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-2">
                  Facebook Page
                </label>
                <input
                  id="facebook"
                  name="facebook"
                  type="url"
                  value={formData.facebook}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    errors.facebook ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://facebook.com/yourpage"
                  maxLength={200}
                />
                {errors.facebook && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.facebook}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram
                </label>
                <input
                  id="instagram"
                  name="instagram"
                  type="url"
                  value={formData.instagram}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    errors.instagram ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://instagram.com/yourhandle"
                  maxLength={200}
                />
                {errors.instagram && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.instagram}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Document Upload - MANDATORY (Minimum 1 document) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Business Documents *
            </h3>
            
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Document Requirements (At least 1 required):</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>Business License</strong> - Business registration certificate</li>
                <li>• <strong>Tax Certificate</strong> - Tax registration documents</li>
                <li>• <strong>Identity Proof</strong> - Passport/National ID/Driver's License</li>
                <li>• <strong>Address Proof</strong> - Utility bill/Bank statement</li>
                <li>• <strong>Bank Statement</strong> - Recent bank statement</li>
                <li>• <strong>Other</strong> - Any other relevant business documents</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className={`border-2 border-dashed rounded-xl p-8 text-center ${
                errors.documents ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}>
                <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-600 mb-4">
                  Upload business documents for verification
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="document-upload"
                />
                <label
                  htmlFor="document-upload"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <Upload size={20} className="mr-2" />
                  Choose Files
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Accepted formats: PDF, JPG, PNG, DOC, DOCX (Max 5MB each, 10 files total)
                </p>
              </div>

              {errors.documents && (
                <div className="flex items-center text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.documents}
                </div>
              )}

              {formData.documents.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">
                    Uploaded Documents ({formData.documents.length}/10):
                  </h4>
                  {formData.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2 flex-1">
                        <FileText size={20} className="text-gray-400" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-700">{doc.name}</span>
                            <span className="text-xs text-gray-500">
                              ({(doc.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <select
                            value={doc.category || ''}
                            onChange={(e) => handleDocumentCategoryChange(index, e.target.value)}
                            className="mt-1 text-xs border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
                          >
                            <option value="">Select document type *</option>
                            {documentTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeDocument(index)}
                        className="text-red-500 hover:text-red-700 text-sm ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Create a strong password"
                    maxLength={100}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.password}
                  </div>
                )}
                {formData.password && (
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className={`h-2 w-2 rounded-full ${formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className={formData.password.length >= 8 ? 'text-green-600' : 'text-gray-500'}>
                        At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`h-2 w-2 rounded-full ${/[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className={/[A-Z]/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                        One uppercase letter
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`h-2 w-2 rounded-full ${/[a-z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className={/[a-z]/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                        One lowercase letter
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`h-2 w-2 rounded-full ${/\d/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className={/\d/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                        One number
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`h-2 w-2 rounded-full ${/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className={/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                        One special character
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Confirm your password"
                    maxLength={100}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <div className="mt-1 flex items-center text-red-500 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.confirmPassword}
                  </div>
                )}
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="mt-1 flex items-center text-green-600 text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    Passwords match
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Terms and Agreements */}
          <div className="space-y-4">
            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="agreeToTerms" className="ml-3 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/terms" className="text-red-500 hover:text-red-600">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-red-500 hover:text-red-600">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.agreeToTerms && (
              <div className="flex items-center text-red-500 text-sm">
                <AlertCircle size={16} className="mr-1" />
                {errors.agreeToTerms}
              </div>
            )}

            <div className="flex items-start">
              <input
                id="agreeToSellerTerms"
                name="agreeToSellerTerms"
                type="checkbox"
                checked={formData.agreeToSellerTerms}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="agreeToSellerTerms" className="ml-3 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/seller-terms" className="text-red-500 hover:text-red-600">
                  Seller Agreement
                </Link>{' '}
                and commission structure
              </label>
            </div>
            {errors.agreeToSellerTerms && (
              <div className="flex items-center text-red-500 text-sm">
                <AlertCircle size={16} className="mr-1" />
                {errors.agreeToSellerTerms}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all duration-200 ${
              loading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Creating seller account...</span>
              </div>
            ) : (
              'Create Seller Account'
            )}
          </button>

          {/* Alternative Options */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Want to shop instead?{' '}
              <Link to="/user/register" className="text-red-500 hover:text-red-600 font-medium">
                Register as Customer
              </Link>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Already have an account?{' '}
              <Link to="/login" className="text-red-500 hover:text-red-600 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerRegister;
