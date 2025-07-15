
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, Eye, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const ExploreProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Dhaka topi",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 88,
      price: 350
    },
    {
      id: 2,
      name: "Shiva statue",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 75,
      price: 25000
    },
    {
      id: 3,
      name: "Mithila painting",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 99,
      price: 10000
    },
    {
      id: 4,
      name: "Gundruk",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 65,
      price: 450
    },
    {
      id: 5,
      name: "T-shirt with Tape Details",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 35,
      price: 1749
    },
    {
      id: 6,
      name: "T-shirt with Tape Details",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 35,
      price: 1749
    },
    {
      id: 7,
      name: "T-shirt with Tape Details",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 35,
      price: 1749
    },
    {
      id: 8,
      name: "Pashupatinath statue",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      reviews: 55,
      price: 1700
    }
  ];

  const productsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / productsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentProducts = () => {
    const startIndex = currentSlide * productsPerSlide;
    return products.slice(startIndex, startIndex + productsPerSlide);
  };

  const formatPrice = (price) => {
    return `Rs${price.toLocaleString()}`;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 pt-12 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <h2 className="text-red-500 font-semibold text-lg">Our Products</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Explore Our Products
          </h3>
        </div>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
          View All Products
        </button>
      </div>

      {/* Products Slider */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10 shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10 shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentProducts().map((product) => (
            <div
              key={product.id}
              onClick={() => navigate('/Product')}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-4">
                {/* Action Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-full flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors py-2 rounded"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">{formatPrice(product.price)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-red-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProductsSection;
