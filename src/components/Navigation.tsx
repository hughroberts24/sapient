import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Atom, Menu, X } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <AnimatedElement animation="slide-in">
            <Link to="/" className="flex items-center space-x-2">
              <Atom className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Sapient
              </span>
            </Link>
          </AnimatedElement>
          
          <div className="hidden md:block">
            <AnimatedElement animation="fade-in">
              <div className="flex items-center space-x-8">
                <Link 
                  to="/services" 
                  className={`${isActive('/services') ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                >
                  Services
                </Link>
                <Link 
                  to="/about"
                  className={`${isActive('/about') ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                >
                  About
                </Link>
                <Link 
                  to="/work"
                  className={`${isActive('/work') ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                >
                  Work
                </Link>
                <a 
                  href="/#contact"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <AnimatedElement animation="fade-in">
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg">
              <Link 
                to="/services"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/work"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                to="/#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </AnimatedElement>
      )}
    </nav>
  );
}