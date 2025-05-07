import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
   
    <footer className="bg-black text-white py-12">
  <div className="container mx-auto px-6 flex flex-col items-center space-y-6">

    {/* Footer Heading */}
    <h2 className="text-2xl font-bold text-green-600">PRIME WEB</h2>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
      <a href="#" className="hover:text-green-400 transition">Home</a>
      <a href="#about" className="hover:text-green-400 transition">About</a>
      <a href="#services" className="hover:text-green-400 transition">Services</a>
      <a href="#portfolio" className="hover:text-green-400 transition">Portfolio</a>
      <a href="#contact" className="hover:text-green-400 transition">Contact</a>
    </div>

    {/* Social Icons */}
    <div className="flex space-x-8 text-2xl mt-2">
      <a href="#" className="text-white hover:text-green-400 transition">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" className="text-white hover:text-green-400 transition">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="text-white hover:text-green-400 transition">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="#" className="text-white hover:text-green-400 transition">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>

    {/* Copyright */}
    <p className="text-sm text-gray-400 mt-4">
      © 2024 Prime Web Development | All rights reserved.
    </p>
  </div>
</footer>

  );
}

export default Footer;