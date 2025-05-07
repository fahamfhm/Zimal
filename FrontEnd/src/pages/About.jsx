import React from 'react';
import aboutImage from '../assets/hero.png'; // Replace with a real about image if available

function About() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white text-green-800 min-h-screen py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-green-700 drop-shadow-md">
              Who We Are 🌿
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              At <span className="font-semibold text-green-600">YourCompany</span>, we specialize in providing premium quality goods and digital services — from locally sourced spices to innovative tech solutions. 
              Our mission is to empower businesses and consumers by combining tradition with technology.
            </p>
            <p className="text-md text-gray-700 mb-4">
              Founded with a passion for excellence and rooted in sustainability, we proudly deliver Sri Lankan authenticity and global standards in everything we offer.
            </p>
            <a href="contact" className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
              Contact Us
            </a>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img src={aboutImage} alt="About us" className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover border-4 border-green-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
