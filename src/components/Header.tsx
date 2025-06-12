import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/analysis", label: "Analysis" },
    { href: "/education", label: "Education" },
    { href: "/about", label: "About" }
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8" />
            <span className="text-2xl font-bold">Neuro Insight</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`hover:text-indigo-200 transition ${
                  location.pathname === link.href ? 'text-indigo-200 font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`hover:text-indigo-200 transition ${
                    location.pathname === link.href ? 'text-indigo-200 font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}