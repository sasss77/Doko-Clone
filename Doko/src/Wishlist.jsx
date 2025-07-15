"use client"

import { useState } from "react"
import { Search, Heart, ShoppingCart, User, Star, Eye, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';


import dokoLogo from "./assets/doko.png";

export default function Wishlist() {
  const [wishlistItems] = useState([
    {
      id: 1,
      name: "Khukhuri",
      price: "6102",
      originalPrice: "Rs6780",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 88,
      discount: "-10%",
    },
    {
      id: 2,
      name: "Thangka painting",
      price: "Rs6500",
      originalPrice: "Rs10000",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 75,
      discount: "-35%",
    },
    {
      id: 3,
      name: "Singing Bowl",
      price: "Rs2800",
      originalPrice: "Rs4000",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 99,
      discount: "-30%",
    },
    {
      id: 4,
      name: "Sarangi",
      price: "5600",
      originalPrice: "Rs8000",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 99,
      discount: "-30%",
    },
    {
      id: 5,
      name: "daura suruwal",
      price: "Rs3750",
      originalPrice: "Rs5000",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 88,
      discount: "-25%",
    },
    {
      id: 6,
      name: "Bracelet",
      price: "Rs225",
      originalPrice: "Rs300",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 75,
      discount: "-25%",
    },
    {
      id: 7,
      name: "Tiger Eye Bracelet",
      price: "Rs1400",
      originalPrice: "Rs2000",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 99,
      discount: "-30%",
    },
    {
      id: 8,
      name: "Pink salt",
      price: "Rs560",
      originalPrice: "Rs800",
      image: "/placeholder.svg?height=250&width=250",
      rating: 4,
      reviews: 99,
      discount: "-30%",
    },
  ])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
     <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wishlist Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-medium text-gray-900">Wishlist (4)</h1>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            Move All To Bag
          </button>
        </div>

        {/* Just For You Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-1 h-8 bg-red-600 rounded-full mr-4"></div>
            <h2 className="text-xl font-medium text-gray-900">Just For You</h2>
          </div>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            See All
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </div>

                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add To Cart
                </button>
              </div>

              {/* Product Info */}
              <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-600 font-semibold">{item.price}</span>
                <span className="text-gray-500 line-through text-sm">{item.originalPrice}</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex">{renderStars(item.rating)}</div>
                <span className="text-sm text-gray-500">({item.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
