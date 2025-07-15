

import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';

const Doko404Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle Khukuri Design Elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <svg width="80" height="100" viewBox="0 0 60 80" className="text-red-600 rotate-12">
          <path d="M30 5 L35 15 L30 70 L25 15 Z" fill="currentColor" />
          <path d="M25 15 L35 15 L32 20 L28 20 Z" fill="currentColor" />
          <circle cx="30" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-30">
        <svg width="80" height="100" viewBox="0 0 60 80" className="text-red-600 -rotate-12">
          <path d="M30 5 L35 15 L30 70 L25 15 Z" fill="currentColor" />
          <path d="M25 15 L35 15 L32 20 L28 20 Z" fill="currentColor" />
          <circle cx="30" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Buddha Silhouette */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-20">
        <svg width="60" height="80" viewBox="0 0 40 60" className="text-red-600">
          <ellipse cx="20" cy="15" rx="8" ry="12" fill="currentColor" />
          <ellipse cx="20" cy="35" rx="12" ry="15" fill="currentColor" />
          <ellipse cx="20" cy="50" rx="10" ry="8" fill="currentColor" />
          <circle cx="20" cy="12" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-20">
        <svg width="60" height="80" viewBox="0 0 40 60" className="text-red-600">
          <ellipse cx="20" cy="15" rx="8" ry="12" fill="currentColor" />
          <ellipse cx="20" cy="35" rx="12" ry="15" fill="currentColor" />
          <ellipse cx="20" cy="50" rx="10" ry="8" fill="currentColor" />
          <circle cx="20" cy="12" r="6" fill="currentColor" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-10">
        <div className={`text-center max-w-xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Brand */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-700 mb-1">
              DOKO
            </h1>
            <p className="text-red-600 text-base sm:text-lg font-medium">Traditional Nepali Treasures</p>
          </div>

          {/* 404 Error */}
          <div className="mb-6">
            <h2 className="text-7xl sm:text-8xl lg:text-[8rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 leading-none mb-3">
              404
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full mb-5"></div>
          </div>

          {/* Message */}
          <div className="mb-10 mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Oops! This treasure seems to be missing
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              The page you're looking for might have been moved, deleted, or is temporarily unavailable. 
              Let's help you find your way back to our collection of beautiful traditional Nepali items.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center">
            <a href="/HomePage" className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-red-800 flex items-center gap-3 no-underline">
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Go Home
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Doko404Page;
