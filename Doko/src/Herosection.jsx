
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ShoppingCart, Shirt, Wheat, Palette } from 'lucide-react';

const HomepageComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Up to 10% Off Voucher',
      subtitle: 'Shop Now',
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bgColor: 'from-amber-800 to-amber-900',
    },
    {
      title: 'Summer Collection 2024',
      subtitle: 'Discover Now',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bgColor: 'from-red-800 to-red-900',
    },
    {
      title: 'Handcrafted Items',
      subtitle: 'Explore More',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bgColor: 'from-orange-800 to-orange-900',
    },
  ];

  const categories = [
    { icon: Wheat, name: 'Grocery', color: 'text-gray-600' },
    { icon: ShoppingCart, name: 'Shopping', color: 'text-gray-600' },
    { icon: Palette, name: 'Handicrafts', color: 'text-gray-600' },
    { icon: Shirt, name: 'Clothing', color: 'text-gray-600' },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto pt-8 px-4 space-y-8">
      {/* ─────────── Hero Section ─────────── */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? 'translate-x-0'
                : index < currentSlide
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${slide.bgColor} relative`}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-12">
                <div className="text-white max-w-md">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <button className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors group">
                    <span className="text-lg md:text-xl font-medium">{slide.subtitle}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="hidden md:block">
                  <img
                    src={slide.image}
                    alt="Product"
                    className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Manual Slide Controls */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* ─────────── Categories Section ─────────── */}
      <div className="space-y-6 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
          <h2 className="text-red-500 font-semibold text-lg">Categories</h2>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Browse By Category</h3>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer border-2 border-gray-200 rounded-lg p-6 md:p-8 hover:border-red-500 hover:bg-red-50 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <category.icon
                  className={`w-12 h-12 md:w-16 md:h-16 ${category.color} group-hover:text-red-500 transition-colors`}
                />
              </div>
              <h4 className="text-gray-900 font-medium text-sm md:text-base">{category.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageComponent;

