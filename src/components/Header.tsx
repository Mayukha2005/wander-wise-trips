
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-dark">Way<span className="text-secondary">Go</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-primary font-medium">Destinations</Link>
            <Link to="/packages" className="text-gray-700 hover:text-primary font-medium">Packages</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact Us</Link>
          </nav>

          {/* Login Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pb-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-gray-700 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/destinations" 
                className="px-4 py-2 text-gray-700 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                to="/packages" 
                className="px-4 py-2 text-gray-700 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-gray-700 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/login" 
                className="px-4 py-2 text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
