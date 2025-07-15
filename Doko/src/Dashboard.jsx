import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  ShoppingCart,
  Book,
  Package,
  Shirt,
  ArrowRight,
  HeadphonesIcon,
  Shield,
  ArrowUp,
} from 'lucide-react';
import Navbar from './Navbar.jsx'
import Herosection from './Herosection.jsx';
import BestSellingProducts from './BestSellingProducts.jsx';
import AllProducts from './AllProducts.jsx';
import NewArrival from './NewArrival.jsx';
import Footer from './Footer.jsx';


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Herosection />
      <BestSellingProducts />
      <AllProducts />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default Dashboard;
