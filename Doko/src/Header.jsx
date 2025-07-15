
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/HomePage' },
    { name: 'Contact', href: '/Contact' },
    { name: 'About', href: '/about' },
    { name: 'Sign Up', href: '/' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 h-20 flex items-center
          ${scrolled ? 'bg-gray-200/90 backdrop-blur-md shadow-md border-b border-gray-300' : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between relative">
          {/* Logo */}
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <img
              src="src/assets/Doko Logo.png"
              alt="doko"
              className="h-[100px] w-auto object-contain"
              style={{ maxHeight: '80px' }} // Adjust max height to fit header
            />
          </div>

          {/* Centered Nav */}
          <nav className="hidden md:flex space-x-8 items-center absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium relative group transition-colors
                  ${
                    location.pathname === item.href
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-500'
                  }
                `}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300
                    ${
                      location.pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }
                  `}
                ></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer div so content is not hidden behind sticky header */}
      <div style={{ height: '80px', width: '100%' }} />
    </>
  );
}
