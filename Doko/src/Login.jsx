
import React, { useState } from 'react';
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Account created:', formData);
  };

  const handleGoogleSignup = () => {
    console.log('Sign up with Google');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
    
    <Header />
      {/* Main Content */}
      <main className="flex flex-col md:flex-row flex-1">
        {/* Welcome Section */}
        <div className="w-full md:w-1/2 bg-yellow-50 flex items-center justify-center px-8 py-12 mt-15 mb-15">
          <div className="text-center">
            <h1 className="text-xl sm:text-5xl font-serif font-semibold text-yellow-900 mb-4 leading-tight">
              Welcome<br />to doko
            </h1>
            <p className="text-2xl sm:text-xl text-yellow-900 font-light  mx-auto"><b>
              Discover the heart of Nepal<br/>through its local treasures.
              </b>
            </p>
          </div>
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-8">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Create an account</h2>
              <p className="text-black text-sm">Enter your details below</p>
            </div>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none text-gray-900 placeholder-gray-400"
              />
              <input
                type="text"
                name="email"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none text-gray-900 placeholder-gray-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handleSubmit}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded transition-colors"
              >
                Log In
              </button>
              <a href="#" className="text-sm text-red-500 hover:underline ml-4">Forget password?</a>
            </div>
          </div>
        </div>
      </main>

     <Footer />
    </div>
  );
}