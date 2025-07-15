import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                111 Kathmandu
                <br />
                +977 Nepal
              </p>
              <a href="mailto:exclusive@gmail.com" className="hover:text-red-400 transition-colors block">
                exclusive@gmail.com
              </a>
              <a href="tel:+97788123456678" className="hover:text-red-400 transition-colors block">
                +977 88123456678
              </a>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <div className="space-y-2">
              {[
                { name: 'My Account', href: '/account' },
                { name: 'Login / Register', href: '/' },
                { name: 'Cart', href: '/cart' },
                { name: 'Wishlist', href: '/wishlist' },
                { name: 'Shop', href: '/Customer' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-gray-400 hover:text-red-400 transition-all hover:translate-x-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <div className="space-y-2">
              {[
                { name: 'Privacy Policy', href: '/PrivacyPolicy' },
                { name: 'Terms Of Use', href: '/TermsOfUse' },
                { name: 'FAQ', href: '/contact' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-gray-400 hover:text-red-400 transition-all hover:translate-x-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow on</h3>
            <div className="flex space-x-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-all hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 text-center text-sm text-gray-500">
          © Doko 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
