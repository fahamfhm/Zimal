import React from 'react';

function Navbar() {
  return (
    <nav className="bg-green-600 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-green-200">🌿 LeafBrand</a>
        </div>

        {/* Centered Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 font-medium">
          <a href="/" className="hover:text-green-200 transition">Home</a>
          <a href="about" className="hover:text-green-200 transition">About</a>

          {/* Dropdown for Categories */}
          <div className="relative group">
            <button className="hover:text-green-200 transition">Categories</button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-green-800 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-300 z-10 min-w-[160px] text-center">
              <a href="contact" className="block px-4 py-2 hover:bg-green-100">Cyber Solutions</a>
              <a href="spices" className="block px-4 py-2 hover:bg-green-100">Spices</a>
              <a href="foods" className="block px-4 py-2 hover:bg-green-100">Foods</a>
              <a href="cosmetics" className="block px-4 py-2 hover:bg-green-100">Cosmetics</a>
            </div>
          </div>

          <a href="contact" className="hover:text-green-200 transition">Contact</a>
        </div>

        {/* Optional Right Side if needed */}
        <div className="hidden md:block"></div>
      </div>
    </nav>
  );
}

export default Navbar;
