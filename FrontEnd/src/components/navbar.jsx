import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-green-600 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-green-200">🌿 LeafBrand</a>
        </div>

        {/* Hamburger / Close Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none text-2xl"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 font-medium">
          <a href="/" className="hover:text-green-200 transition">Home</a>
          <a href="about" className="hover:text-green-200 transition">About</a>

          <div className="relative group">
            <button className="hover:text-green-200 transition">Categories</button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-green-800 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-300 z-10 min-w-[160px] text-center">
              <a href="contact" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-green-100">Cyber Solutions</a>
              <a href="spices" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-green-100">Spices</a>
              <a href="foods" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-green-100">Foods</a>
              <a href="cosmetics" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-green-100">Cosmetics</a>
            </div>
          </div>

          <a href="contact" className="hover:text-green-200 transition">Contact</a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-900 text-white px-6 pb-4 space-y-2">
          <a href="/" onClick={handleLinkClick} className="block hover:text-green-200">Home</a>
          <a href="about" onClick={handleLinkClick} className="block hover:text-green-200">About</a>
          <div>
            <span className="block font-semibold">Categories</span>
            <div className="pl-4 space-y-1">
              <a href="contact" onClick={handleLinkClick} className="block hover:text-green-200">Cyber Solutions</a>
              <a href="spices" onClick={handleLinkClick} className="block hover:text-green-200">Spices</a>
              <a href="foods" onClick={handleLinkClick} className="block hover:text-green-200">Foods</a>
              <a href="cosmetics" onClick={handleLinkClick} className="block hover:text-green-200">Cosmetics</a>
            </div>
          </div>
          <a href="contact" onClick={handleLinkClick} className="block hover:text-green-200">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
