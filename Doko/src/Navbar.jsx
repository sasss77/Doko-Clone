

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search, Heart, ShoppingCart, User, Menu, X
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const desktopAccountDropdownRef = useRef(null);
  const mobileAccountDropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccountDropdown = () => setIsAccountDropdownOpen(!isAccountDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopAccountDropdownRef.current &&
        !desktopAccountDropdownRef.current.contains(event.target) &&
        mobileAccountDropdownRef.current &&
        !mobileAccountDropdownRef.current.contains(event.target)
      ) {
        setIsAccountDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsAccountDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/Dashboard' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' }
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-gray-200/90 backdrop-blur-md shadow-md border-b border-gray-300' : 'bg-transparent'}
      `} style={{ minHeight: '80px' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[80px] gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src="src/assets/Doko Logo.png" alt="logo" className="h-[80px] w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors relative group ${
                    location.pathname === item.href
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="pl-6 pr-10 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-[#f5f5f5] focus:bg-white 
                    w-[28rem] lg:w-[32rem] text-base placeholder:text-base"
                />
                <Search className="absolute right-3 inset-y-0 my-auto w-5 h-5 text-black hover:text-red-500 transition-colors cursor-pointer" />
              </div>

              <Link to="/wishlist">
                <Heart className={`w-5 h-5 cursor-pointer transition-all hover:scale-110 ${
                  location.pathname === '/wishlist' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'
                }`} />
              </Link>
              <Link to="/cart">
                <ShoppingCart className={`w-5 h-5 cursor-pointer transition-all hover:scale-110 ${
                  location.pathname === '/cart' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'
                }`} />
              </Link>

              {/* Desktop Account Dropdown */}
              <div className="relative" ref={desktopAccountDropdownRef}>
                <button onClick={toggleAccountDropdown} className="focus:outline-none">
                  <User className={`w-5 h-5 cursor-pointer transition-all hover:scale-110 ${
                    location.pathname === '/account' || isAccountDropdownOpen
                      ? 'text-red-600'
                      : 'text-gray-600 hover:text-red-500'
                  }`} />
                </button>
                {isAccountDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg border border-gray-200 z-50 bg-white">
                    <div className="py-2">
                      <Link
                        to="/account"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                      >
                        <User className="w-4 h-4 mr-3" />
                        Manage My Account
                      </Link>
                      <button
                        onClick={() => console.log('Logging out...')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors py-2 ${
                    location.pathname === item.href
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex justify-center space-x-4 pt-2">
                <Link to="/wishlist">
                  <Heart className={`w-5 h-5 cursor-pointer transition-all hover:scale-110 ${
                    location.pathname === '/wishlist' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'
                  }`} />
                </Link>
                <Link to="/cart">
                  <ShoppingCart className={`w-5 h-5 cursor-pointer transition-all hover:scale-110 ${
                    location.pathname === '/cart' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'
                  }`} />
                </Link>

                {/* Mobile Account Dropdown */}
                <div className="relative" ref={mobileAccountDropdownRef}>
                  <button onClick={toggleAccountDropdown} className="focus:outline-none">
                    <User className={`w-5 h-5 cursor-pointer transition-all hover:scale-110 ${
                      location.pathname === '/account' || isAccountDropdownOpen
                        ? 'text-red-600'
                        : 'text-gray-600 hover:text-red-500'
                    }`} />
                  </button>
                  {isAccountDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg border border-gray-200 z-50 bg-white">
                      <div className="py-2">
                        <Link
                          to="/account"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Manage My Account
                        </Link>
                        <button
                          onClick={() => console.log('Logging out...')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3v1" />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: '80px', width: '100%' }} />
    </>
  );
}
