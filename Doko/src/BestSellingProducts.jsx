

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, Eye, ShoppingCart } from 'lucide-react';

const BestSellingProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Khukuri',
      image:
        'https://images.unsplash.com/photo-1589927986089-35812388d1b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.5,
      reviews: 88,
      price: 2500,
      originalPrice: 3000,
      discount: 40,
    },
    {
      id: 2,
      name: 'Thangka painting',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.5,
      reviews: 75,
      price: 50000,
      originalPrice: 60000,
      discount: 35,
    },
    {
      id: 3,
      name: 'Ganesh',
      image:
        'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.5,
      reviews: 99,
      price: 3700,
      originalPrice: 4500,
      discount: 25,
    },
    {
      id: 4,
      name: 'Murchunga',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.5,
      reviews: 65,
      price: 5000,
      originalPrice: 6000,
      discount: 30,
    },
  ];

  const formatPrice = (price) => `Rs ${price.toLocaleString()}`;

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-8 pt-12">
      {/* Best Selling Products Section */}
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
              <h2 className="text-red-500 font-semibold text-lg">This Month</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Best Selling Products
            </h3>
          </div>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate('/Product')}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-4">
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium z-10">
                    -{product.discount}%
                  </div>
                )}

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
                  <span className="text-red-500 font-bold">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heritage Banner */}
      <div className="relative bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8">
          {/* Left Content */}
          <div className="text-white space-y-6 flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Uncover Nepal's
              <br />
              Rich Heritage
            </h2>

            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg">
              Shop Now
            </button>
          </div>

          {/* Right Content - Buddha Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Buddha Heritage"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
