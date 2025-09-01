import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Entreprise', path: '/entreprise' },
    { name: 'Biographie', path: '/biographie' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Crown className="w-8 h-8 text-gold-400 group-hover:text-gold-300 transition-colors" />
            <span className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
              PAMELA ENOBLE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold-400 relative group ${
                  location.pathname === item.path ? 'text-gold-400' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gold-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-gold-400 ${
                  location.pathname === item.path ? 'text-gold-400' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;