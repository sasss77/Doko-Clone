"use client"

import { useState } from "react"
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Truck,
  Headphones,
  Shield,
} from "lucide-react"
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    {
      name: "Saugat Paneru",
      position: "Founder & Chairman",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Rajiv Ganeju",
      position: "Managing Director",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Aayush Yadav",
      position: "Product Manager",
      image: "/placeholder.svg?height=300&width=250",
    },
  ]

  const stats = [
    { number: "10.5k", label: "Sellers active on our site", icon: "👥" },
    { number: "33k", label: "Monthly Product Sale", icon: "💰", highlighted: true },
    { number: "45.5k", label: "Customer active in our site", icon: "👤" },
    { number: "25k", label: "Annual gross sale in our site", icon: "💼" },
  ]

  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-sm text-gray-500">
          <span className="hover:text-red-600 cursor-pointer transition-colors">Home</span>
          <span className="mx-2">/</span>
          <span className="text-black">About</span>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-8">Our Story</h1>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                 Launched in 2025, Doko is Nepal’s premier online marketplace dedicated to showcasing and selling traditional Nepali products. With a strong focus on preserving and promoting authentic craftsmanship, Doko connects local artisans, small businesses, and heritage brands with customers across the region and beyond.
                </p>
                <p>
                  Supported by a wide range of tailored marketing, data, and service solutions, Doko empowers over 10,500 sellers and 300 brands, serving more than 3 million customers who value quality, tradition, and cultural authenticity.
                </p>
                <p>Doko offers a diverse assortment of over 1 million products spanning categories such as handcrafted textiles, artisanal home décor, traditional jewelry, organic wellness products, and much more—all growing at a rapid pace.</p>
                <p>Our mission is to celebrate Nepal’s rich cultural heritage while creating sustainable economic opportunities for communities. Whether you’re rediscovering timeless artistry, supporting local makers, or bringing a touch of Nepal into your home, Doko makes it easier than ever to experience and share the beauty of Nepali tradition.</p>
                <p>With secure payment options, reliable nationwide delivery, and dedicated customer support, Doko is your trusted destination for authentic Nepali products—all in one place. From browsing our carefully curated collections to enjoying seamless checkout and fast shipping, every step of your shopping journey is designed to be simple, safe, and satisfying. 
</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-pink-100 rounded-lg overflow-hidden">
                <img src="/src/assets/Rectangle 2.png" alt="Our Story" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
                stat.highlighted
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white border-gray-200 hover:border-red-600"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  stat.highlighted ? "bg-white text-red-600" : "bg-black text-white"
                }`}
              >
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.highlighted ? "text-white" : "text-black"}`}>
                {stat.number}
              </div>
              <div className={`text-sm ${stat.highlighted ? "text-white" : "text-gray-600"}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-80 object-cover" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.position}</p>
              <div className="flex justify-center space-x-4">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2, 3, 4].map((dot, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-red-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
