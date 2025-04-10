import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Menu, X } from 'lucide-react';
import Logo from '../Blood images/Logo.webp';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white p-8 flex justify-between items-center relative">
      {/* Left Logo + Text */}
      <div className="flex items-center space-x-2">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-bold text-2xl">RedConnect</span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-blue-600 text-center py-4 md:flex md:static md:w-auto md:bg-transparent md:space-x-6 md:py-0`}
      >
        {isLoggedIn ? (
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/" onClick={handleLinkClick} className="text-white text-xl hover:text-blue-300">Home</Link>
            <Link to="/about" onClick={handleLinkClick} className="text-white text-xl hover:text-blue-300">About</Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-white text-xl hover:text-blue-300">Contact</Link>
            <Link to="/services" onClick={handleLinkClick} className="text-white text-xl hover:text-blue-300">Services</Link>
            <Link 
              to="/application" 
              onClick={handleLinkClick}
              className="bg-red-600 text-white text-xl px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Apply Now
            </Link>
            <button 
              onClick={() => {
                logout();
                handleLinkClick();
              }} 
              className="bg-white text-red-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/login" onClick={handleLinkClick} className="text-white text-xl hover:text-blue-800">Login</Link>
            <Link to="/signup" onClick={handleLinkClick} className="text-white text-xl hover:text-blue-800">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
